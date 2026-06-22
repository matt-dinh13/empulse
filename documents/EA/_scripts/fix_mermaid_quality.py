"""
Fix Mermaid diagram quality in catalog.json.
Addresses: D1 (Actor shapes), D2 (Boundaries), D3 (noise elements),
           D4 (arrow types), D5 (UseCase shapes), D6 (Custom diagrams).
"""
import json
import re
import os
import sys
from collections import defaultdict

DATA_DIR = r'c:\Users\Lan.Dinh\Documents\EA\_bsl_app\data'

SKIP_TYPES = {'UMLDiagram', 'Constraint', 'Artifact',
              'InteractionOccurrence', 'ProxyConnector'}

# ─── Helpers ────────────────────────────────────────────────────
def sn(name):
    """Sanitize name for Mermaid node ID."""
    if not name: return "unnamed"
    s = re.sub(r'[^a-zA-Z0-9_]', '_', name)
    s = re.sub(r'_+', '_', s).strip('_')
    if not s or s[0].isdigit(): s = 'n_' + s
    return s[:60]

def sl(name):
    """Sanitize label for Mermaid display."""
    if not name: return ""
    cleaned = name.replace('"', "'").replace('<', '\u2039').replace('>', '\u203a').replace('&', 'and')
    for char in ['{', '}', '[', ']', '(', ')']:
        cleaned = cleaned.replace(char, '')
    return cleaned.replace('|', ' ')

def _skip(e):
    if e['type'] in SKIP_TYPES:
        return True
    # Smart Text/Note filtering: skip references and system-generated texts
    if e['type'] in ('Text', 'Note'):
        name = (e.get('name') or '').strip()
        if not name:
            return True
        # Skip diagram references like "$diagram://{GUID}"
        if name.startswith('$diagram://') or name.startswith('$'):
            return True
        # Skip if name looks like a diagram path reference (e.g. "Logical Data Model : xyz")
        # These are cross-references to other diagrams/packages, not content
        if ' : ' in name and any(kw in name for kw in
                ['Model', 'Diagram', 'Package', 'Interface Model',
                 'Data Model', 'Logical Data', 'User Interface']):
            return True
    return False

def _clean_text_label(name):
    """Clean EA Text element labels: 'xyz : xyz' -> 'xyz'"""
    if not name: return ''
    if ' : ' in name:
        parts = name.split(' : ', 1)
        if parts[0].strip().lower() == parts[1].strip().lower():
            return parts[0].strip()
    return name.strip()

# ─── Generator: Use Case ───────────────────────────────────────
def gen_usecase(elems, conns, elu, contain=None):
    lines = ["graph LR"]
    boundaries = [e for e in elems if e['type'] == 'Boundary']
    contain = contain or {}

    # Actors first (outside boundaries)
    for e in [x for x in elems if x['type'] == 'Actor']:
        if not any(e['id'] in contain.get(b['id'], []) for b in boundaries):
            lines.append(f'    {sn(e["name"])}(["\U0001F464 {sl(e["name"])}"])')

    rendered = set()
    for b in boundaries:
        child_ids = set(contain.get(b['id'], []))
        children = [e for e in elems if e['id'] in child_ids and not _skip(e)]
        if children:
            lines.append(f'    subgraph bd_{sn(b["name"])}["{sl(b["name"])}"]')
            for c in children:
                if c['type'] == 'Actor':
                    lines.append(f'        {sn(c["name"])}(["\U0001F464 {sl(c["name"])}"])')
                elif c['type'] == 'UseCase':
                    lines.append(f'        {sn(c["name"])}(["{sl(c["name"])}"])')
                elif c['type'] == 'Requirement':
                    lines.append(f'        {sn(c["name"])}{{{{"{sl(c["name"])}"}}}}')
                elif c['type'] in ('Text', 'Note'):
                    clabel = sl(_clean_text_label(c['name']))
                    lines.append(f'        {sn(c["name"])}>"{clabel}"]')
                else:
                    lines.append(f'        {sn(c["name"])}["{sl(c["name"])}"]')
                rendered.add(c['id'])
            lines.append('    end')
        rendered.add(b['id'])

    for e in elems:
        if e['id'] in rendered or _skip(e) or e['type'] in ('Actor', 'Boundary'): continue
        if e['type'] == 'UseCase':
            lines.append(f'    {sn(e["name"])}(["{sl(e["name"])}"])')
        elif e['type'] == 'Requirement':
            lines.append(f'    {sn(e["name"])}{{{{"{sl(e["name"])}"}}}}')
        elif e['type'] in ('Text', 'Note'):
            label = sl(_clean_text_label(e['name']))
            lines.append(f'    {sn(e["name"])}>"{label}"]')
        else:
            lines.append(f'    {sn(e["name"])}["{sl(e["name"])}"]')

    for c in conns:
        se, de = elu.get(c['start_element_id']), elu.get(c['end_element_id'])
        if not se or not de or _skip(se) or _skip(de): continue
        s, d = sn(se['name']), sn(de['name'])
        lbl = sl(c.get('name', ''))
        ct, st = c.get('type', ''), c.get('stereotype', '')
        if ct == 'UseCase':
            if st == 'include': lines.append(f"    {s} -.->|\u00ABinclude\u00BB| {d}")
            elif st == 'extend': lines.append(f"    {s} -.->|\u00ABextend\u00BB| {d}")
            else: lines.append(f"    {s} --> {d}")
        elif ct == 'Association': lines.append(f"    {s} --- {d}")
        elif ct == 'Dependency':
            lines.append(f"    {s} -.->|{lbl}| {d}" if lbl else f"    {s} -.-> {d}")
        elif ct == 'NoteLink': continue
        else:
            lines.append(f"    {s} -->|{lbl}| {d}" if lbl else f"    {s} --> {d}")
    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Generator: Sequence ───────────────────────────────────────
def gen_sequence(elems, conns, elu):
    lines = ["sequenceDiagram"]
    parts, seen = [], set()
    for c in conns:
        for eid in [c['start_element_id'], c['end_element_id']]:
            if eid not in seen and eid in elu:
                e = elu[eid]
                if not _skip(e):
                    seen.add(eid); parts.append(e)
    for p in parts:
        lines.append(f"    participant {sn(p['name'])} as {sl(p['name'])}")
    for c in conns:
        se, de = elu.get(c['start_element_id']), elu.get(c['end_element_id'])
        if not se or not de or _skip(se) or _skip(de): continue
        s, d = sn(se['name']), sn(de['name'])
        msg = sl(c.get('name', '')) or c.get('type', '')
        nl = (c.get('name', '') or '').lower()
        if 'return' in nl or 'response' in nl:
            lines.append(f"    {s}-->>-{d}: {msg}")
        elif c.get('type') == 'Sequence':
            lines.append(f"    {s}->>+{d}: {msg}")
        else:
            lines.append(f"    {s}->>{d}: {msg}")
    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Generator: Class / Logical ────────────────────────────────
def gen_class(elems, conns, elu):
    lines = ["classDiagram"]
    for e in elems:
        if _skip(e) or not e['name']: continue
        sid, label = sn(e['name']), sl(e['name'])
        t = e['type']
        if t == 'Enumeration': lines.append(f'    class {sid}["\u00ABenumeration\u00BB\\n{label}"]')
        elif t == 'Interface': lines.append(f'    class {sid}["\u00ABinterface\u00BB\\n{label}"]')
        elif t == 'DataType': lines.append(f'    class {sid}["\u00ABdataType\u00BB\\n{label}"]')
        else: lines.append(f'    class {sid}["{label}"]')
    for c in conns:
        se, de = elu.get(c['start_element_id']), elu.get(c['end_element_id'])
        if not se or not de or _skip(se) or _skip(de): continue
        s, d = sn(se['name']), sn(de['name'])
        lbl = sl(c.get('name', ''))
        ls = f" : {lbl}" if lbl else ""
        ct = c.get('type', '')
        if ct == 'Generalization': lines.append(f"    {d} <|-- {s}{ls}")
        elif ct == 'Realisation': lines.append(f"    {d} <|.. {s}{ls}")
        elif ct == 'Aggregation': lines.append(f"    {d} o-- {s}{ls}")
        elif ct == 'Composition': lines.append(f"    {d} *-- {s}{ls}")
        elif ct == 'Dependency': lines.append(f"    {s} ..> {d}{ls}")
        elif ct == 'NoteLink': continue
        else: lines.append(f"    {s} --> {d}{ls}")
    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Generator: Activity ───────────────────────────────────────
def gen_activity(elems, conns, elu):
    lines = ["flowchart TD"]
    for e in elems:
        if _skip(e): continue
        sid = sn(e['name']) if e['name'] else f"node_{e['id']}"
        label = sl(e['name']) if e['name'] else e['type']
        t = e['type']
        if t == 'StateNode': lines.append(f"    {sid}(( ))")
        elif t in ('Decision', 'MergeNode'): lines.append(f'    {sid}{{"{label}"}}')
        elif t == 'Synchronization': lines.append(f'    {sid}[" "]')
        else: lines.append(f'    {sid}["{label}"]')
    for c in conns:
        se, de = elu.get(c['start_element_id']), elu.get(c['end_element_id'])
        if not se or not de or _skip(se) or _skip(de): continue
        s = sn(se['name']) if se['name'] else f"node_{se['id']}"
        d = sn(de['name']) if de['name'] else f"node_{de['id']}"
        lbl = sl(c.get('name', ''))
        lines.append(f"    {s} -->|{lbl}| {d}" if lbl else f"    {s} --> {d}")
    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Generator: Statechart ─────────────────────────────────────
def gen_statechart(elems, conns, elu):
    lines = ["stateDiagram-v2"]
    for e in elems:
        if _skip(e): continue
        sid = sn(e['name']) if e['name'] else f"s_{e['id']}"
        label = sl(e['name'])
        stereo = (e.get('stereotype', '') or '').lower()
        if e['type'] == 'StateNode':
            if 'initial' in stereo or not e['name']: lines.append(f"    [*] --> {sid}")
            elif 'final' in stereo: lines.append(f"    {sid} --> [*]")
            else: lines.append(f'    state "{label}" as {sid}')
        else: lines.append(f'    state "{label}" as {sid}')
    for c in conns:
        se, de = elu.get(c['start_element_id']), elu.get(c['end_element_id'])
        if not se or not de: continue
        s = sn(se['name']) if se['name'] else f"s_{se['id']}"
        d = sn(de['name']) if de['name'] else f"s_{de['id']}"
        lbl = sl(c.get('name', ''))
        lines.append(f"    {s} --> {d} : {lbl}" if lbl else f"    {s} --> {d}")
    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Generator: Component (v2) ─────────────────────────────────
# Resolves Assembly connectors via interface ownership (parent_id).
# Interfaces become edge labels, not standalone nodes.
def gen_component(elems, conns, elu, contain=None):
    lines = ["graph TD"]
    contain = contain or {}

    INTERFACE_TYPES = {'ProvidedInterface', 'RequiredInterface'}
    CONTAINER_TYPES = {'Boundary', 'Package'}

    # 1. Build interface ownership: interface_id -> owner_component_id
    iface_owner = {}
    for e in elems:
        if e['type'] in INTERFACE_TYPES and e.get('parent_id'):
            parent = elu.get(e['parent_id'])
            if parent and parent['type'] in ('Component', 'Class'):
                iface_owner[e['id']] = parent['id']

    # 2. Classify elements
    components = [e for e in elems if e['type'] in ('Component', 'Class') and not _skip(e) and e.get('name')]
    containers = [e for e in elems if e['type'] in CONTAINER_TYPES and not _skip(e)]
    texts = [e for e in elems if e['type'] in ('Text', 'Note') and not _skip(e) and e.get('name')]

    # 3. Resolve Assembly connectors -> component-to-component edges
    #    Assembly connects RequiredInterface <-> ProvidedInterface
    #    We resolve both sides to their owner component
    resolved_edges = []
    seen_edges = set()

    for c in conns:
        ct = c.get('type', '')
        if ct == 'NoteLink':
            continue

        se = elu.get(c['start_element_id'])
        de = elu.get(c['end_element_id'])
        if not se or not de or _skip(se) or _skip(de):
            continue

        if ct == 'Assembly':
            # Resolve: find the component that OWNS each interface endpoint
            s_id = c['start_element_id']
            d_id = c['end_element_id']

            # Determine interface name for label
            s_is_iface = se['type'] in INTERFACE_TYPES
            d_is_iface = de['type'] in INTERFACE_TYPES
            iface_name = ''
            if s_is_iface:
                iface_name = se['name']
            elif d_is_iface:
                iface_name = de['name']

            # Resolve to owner components
            src_comp = iface_owner.get(s_id, s_id) if s_is_iface else s_id
            dst_comp = iface_owner.get(d_id, d_id) if d_is_iface else d_id
            if not s_is_iface:
                src_comp = s_id
            if not d_is_iface:
                dst_comp = d_id

            # Skip self-loops and unresolved
            if src_comp == dst_comp:
                continue
            src_e = elu.get(src_comp)
            dst_e = elu.get(dst_comp)
            if not src_e or not dst_e:
                continue

            # Determine dependency/call direction: Caller (Required) -> Provider (Provided)
            is_s_req = se['type'] == 'RequiredInterface'
            is_d_prov = de['type'] == 'ProvidedInterface'
            src_is_caller = is_s_req or is_d_prov

            if src_is_caller:
                src_node = src_e
                dst_node = dst_e
            else:
                src_node = dst_e
                dst_node = src_e

            edge_key = f"{src_node['id']}-{dst_node['id']}-{iface_name}"
            if edge_key not in seen_edges:
                seen_edges.add(edge_key)
                resolved_edges.append({
                    'src': src_node, 'dst': dst_node,
                    'label': sl(iface_name),
                    'style': '-->'  # Assembly = directed call flow
                })
        else:
            # Direct connectors between components (Dependency, Usage, etc.)
            # Also resolve if endpoints are interfaces
            s_id = c['start_element_id']
            d_id = c['end_element_id']
            src_comp = iface_owner.get(s_id, s_id)
            dst_comp = iface_owner.get(d_id, d_id)
            src_e = elu.get(src_comp, se)
            dst_e = elu.get(dst_comp, de)

            lbl = sl(c.get('name', ''))
            stereo = c.get('stereotype', '')
            if stereo and not lbl:
                lbl = stereo

            edge_key = f"{src_comp}-{dst_comp}-{ct}-{lbl}"
            if edge_key in seen_edges:
                continue
            seen_edges.add(edge_key)

            if ct == 'Dependency':
                resolved_edges.append({'src': src_e, 'dst': dst_e, 'label': lbl, 'style': '-.->'})
            elif ct == 'Realisation':
                resolved_edges.append({'src': src_e, 'dst': dst_e, 'label': lbl, 'style': '-.->'})
            elif ct in ('Usage',):
                resolved_edges.append({'src': src_e, 'dst': dst_e, 'label': lbl or 'use', 'style': '-.->'})
            else:
                resolved_edges.append({'src': src_e, 'dst': dst_e, 'label': lbl, 'style': '-->'})

    # 4. Render nodes — only Components (not interfaces)
    rendered = set()

    # Collect which interfaces participate in Assembly connectors
    connected_ifaces = set()
    for c in conns:
        if c.get('type') != 'Assembly':
            continue
        connected_ifaces.add(c['start_element_id'])
        connected_ifaces.add(c['end_element_id'])

    # 4a. Render containers as subgraphs with their children
    for b in containers:
        child_ids = set(contain.get(b['id'], []))
        children = [e for e in components if e['id'] in child_ids]
        if children:
            lines.append(f'    subgraph bd_{sn(b["name"])}["{sl(b["name"])}"]')
            for ch in children:
                sid = sn(ch['name'])
                label = sl(ch['name'])
                if ch['type'] == 'Class':
                    lines.append(f'        {sid}[("{label}")]')
                else:
                    lines.append(f'        {sid}[["{label}"]]')
                rendered.add(ch['id'])
            lines.append('    end')
        rendered.add(b['id'])

    # 4b. Render remaining components
    for e in components:
        if e['id'] in rendered:
            continue
        sid, label = sn(e['name']), sl(e['name'])
        if e['type'] == 'Class':
            lines.append(f'    {sid}[("{label}")]')
        else:
            lines.append(f'    {sid}[["{label}"]]')
        rendered.add(e['id'])

    # 4c. Render unconnected interfaces as small nodes linked to parent component
    for e in elems:
        if e['type'] not in INTERFACE_TYPES:
            continue
        if e['id'] in connected_ifaces:
            continue  # Already represented as edge label
        if not e.get('name'):
            continue
        owner_id = iface_owner.get(e['id'])
        if not owner_id:
            continue
        owner = elu.get(owner_id)
        if not owner or not owner.get('name'):
            continue
        # Unique ID to avoid clashes with same-name connected interfaces
        uid = f"if_{sn(e['name'])}_{e['id']}"
        label = sl(e['name'])
        owner_sid = sn(owner['name'])
        if e['type'] == 'ProvidedInterface':
            lines.append(f'    {uid}(("{label}"))')
            lines.append(f'    {owner_sid} -.- {uid}')
        else:
            lines.append(f'    {uid}(["{label}"])')
            lines.append(f'    {owner_sid} -.- {uid}')

    # 4c. Resolve NoteLink connectors for text/note elements
    # NoteLinks connect Text -> Interface, we resolve to Interface's owner Component
    notelink_edges = []
    texts_with_links = set()
    for c in conns:
        if c.get('type') != 'NoteLink':
            continue
        se = elu.get(c['start_element_id'])
        de = elu.get(c['end_element_id'])
        if not se or not de:
            continue
        # Identify which is the text and which is the target
        if se['type'] in ('Text', 'Note'):
            text_e, target_e = se, de
        elif de['type'] in ('Text', 'Note'):
            text_e, target_e = de, se
        else:
            continue
        # Resolve target: if it's an interface, resolve to owner component
        target_comp_id = target_e['id']
        if target_e['type'] in INTERFACE_TYPES:
            target_comp_id = iface_owner.get(target_e['id'], target_e['id'])
        target_comp = elu.get(target_comp_id)
        if not target_comp or target_comp['type'] in INTERFACE_TYPES:
            continue  # Can't resolve, skip this text
        texts_with_links.add(text_e['id'])
        label = sl(_clean_text_label(text_e['name']))
        lines.append(f'    {sn(text_e["name"])}>"{label}"]')
        notelink_edges.append({
            'src': sn(text_e['name']),
            'dst': sn(target_comp['name']) if target_comp.get('name') else f"el_{target_comp['id']}",
            'style': '-.-'
        })

    # 5. Render resolved edges
    for edge in resolved_edges:
        s = sn(edge['src']['name']) if edge['src'].get('name') else f"el_{edge['src']['id']}"
        d = sn(edge['dst']['name']) if edge['dst'].get('name') else f"el_{edge['dst']['id']}"
        lbl = edge['label']
        style = edge['style']
        if lbl:
            lines.append(f"    {s} {style}|{lbl}| {d}")
        else:
            lines.append(f"    {s} {style} {d}")

    # 5b. Render NoteLink edges (dotted, no label)
    for nl in notelink_edges:
        lines.append(f"    {nl['src']} {nl['style']} {nl['dst']}")

    return '\n'.join(lines) if len(lines) > 1 else None

# ─── Generator: Generic ────────────────────────────────────────
def _render_elem(lines, e, ind='    '):
    sid = sn(e['name']) if e['name'] else f"el_{e['id']}"
    label = sl(e['name']) if e['name'] else e['type']
    t = e['type']
    if t == 'Actor': lines.append(f'{ind}{sid}(["\U0001F464 {label}"])')
    elif t == 'UseCase': lines.append(f'{ind}{sid}(["{label}"])')
    elif t in ('GUIElement', 'Screen'): lines.append(f'{ind}{sid}["\U0001F5B5 {label}"]')
    elif t == 'Requirement': lines.append(f'{ind}{sid}{{{{"{label}"}}}}')
    elif t == 'Component': lines.append(f'{ind}{sid}[["{label}"]]')
    elif t == 'ProvidedInterface': lines.append(f'{ind}{sid}(("{label}"))')
    elif t == 'RequiredInterface': lines.append(f'{ind}{sid}(["{label}"])')
    elif t == 'Interface': lines.append(f'{ind}{sid}(("{label}"))')
    elif t == 'Decision': lines.append(f'{ind}{sid}{{"{label}"}}')
    elif t == 'StateNode': lines.append(f'{ind}{sid}(( ))')
    elif t == 'Enumeration': lines.append(f'{ind}{sid}["\u00ABenumeration\u00BB\\n{label}"]')
    elif t in ('Text', 'Note'):
        label = sl(_clean_text_label(e['name']))
        lines.append(f'{ind}{sid}>"{label}"]')
    else: lines.append(f'{ind}{sid}["{label}"]')

def gen_generic(elems, conns, elu, contain=None):
    lines = ["graph TD"]
    boundaries = [e for e in elems if e['type'] == 'Boundary']
    contain = contain or {}
    
    rendered = set()
    for b in boundaries:
        child_ids = set(contain.get(b['id'], []))
        children = [e for e in elems if e['id'] in child_ids and not _skip(e)]
        if children:
            lines.append(f'    subgraph bd_{sn(b["name"])}["{sl(b["name"])}"]')
            for c in children:
                _render_elem(lines, c, '        ')
                rendered.add(c['id'])
            lines.append('    end')
        rendered.add(b['id'])
    for e in elems:
        if e['id'] in rendered or _skip(e) or e['type'] == 'Boundary': continue
        _render_elem(lines, e)
    for c in conns:
        se, de = elu.get(c['start_element_id']), elu.get(c['end_element_id'])
        if not se or not de or _skip(se) or _skip(de): continue
        s = sn(se['name']) if se['name'] else f"el_{se['id']}"
        d = sn(de['name']) if de['name'] else f"el_{de['id']}"
        lbl = sl(c.get('name', ''))
        ct = c.get('type', '')
        if ct in ('NoteLink', 'Nesting'): continue
        elif ct == 'Dependency': lines.append(f"    {s} -.->|{lbl}| {d}" if lbl else f"    {s} -.-> {d}")
        elif ct == 'Realisation': lines.append(f"    {s} -.->|{lbl}| {d}" if lbl else f"    {s} -.-> {d}")
        elif ct == 'Association': lines.append(f"    {s} ---|{lbl}| {d}" if lbl else f"    {s} --- {d}")
        elif ct == 'Generalization': lines.append(f"    {d} -->|{lbl}| {s}" if lbl else f"    {d} --> {s}")
        elif ct == 'InformationFlow': lines.append(f"    {s} ==>|{lbl}| {d}" if lbl else f"    {s} ==> {d}")
        else: lines.append(f"    {s} -->|{lbl}| {d}" if lbl else f"    {s} --> {d}")
    return '\n'.join(lines) if len(lines) > 1 else None

GENERATORS = {
    'Sequence': gen_sequence, 'Use Case': gen_usecase,
    'Logical': gen_class, 'Class': gen_class, 'Object': gen_class,
    'Activity': gen_activity, 'Statechart': gen_statechart,
    'Component': gen_component, 'Deployment': gen_component,
    'Package': gen_generic, 'Custom': gen_generic,
    'Analysis': gen_generic,
}

# ─── Main ──────────────────────────────────────────────────────
def main():
    print("Loading data files...")
    with open(os.path.join(DATA_DIR, 'catalog.json'), 'r', encoding='utf-8') as f:
        catalog = json.load(f)
    with open(os.path.join(DATA_DIR, 'elements.json'), 'r', encoding='utf-8') as f:
        elements = json.load(f)['elements']
    with open(os.path.join(DATA_DIR, 'connectors.json'), 'r', encoding='utf-8') as f:
        connectors = json.load(f)['connectors']

    # Load geometric containment map
    containment_file = os.path.join(DATA_DIR, 'containment.json')
    containment = {}
    if os.path.exists(containment_file):
        with open(containment_file, 'r', encoding='utf-8') as f:
            containment = json.load(f)
        print(f"Loaded containment for {len(containment)} diagrams.")

    # Build connector index: element_id -> [connector_ids]
    print("Building connector index...")
    elem_conn_idx = defaultdict(set)
    for cid, c in connectors.items():
        elem_conn_idx[c['start_element_id']].add(cid)
        elem_conn_idx[c['end_element_id']].add(cid)

    total = len(catalog['diagrams'])
    regen = 0; skip = 0; errs = 0
    type_stats = defaultdict(lambda: {'ok': 0, 'skip': 0, 'err': 0})

    for i, d in enumerate(catalog['diagrams']):
        if (i + 1) % 500 == 0: print(f"  {i+1}/{total}...")
        dtype = d.get('type', 'Unknown')
        gen = GENERATORS.get(dtype)
        eids = d.get('element_ids', [])
        if not gen or not eids:
            skip += 1; type_stats[dtype]['skip'] += 1; continue
        try:
            # Build element lookup
            elems = []
            elu = {}
            for eid in eids:
                e = elements.get(str(eid))
                if e:
                    elems.append(e)
                    elu[e['id']] = e

            # Find connectors between elements in this diagram
            eid_set = set(int(x) for x in eids)
            seen_c = set()
            diagram_conns = []
            for eid in eids:
                for cid in elem_conn_idx.get(int(eid), set()):
                    if cid in seen_c: continue
                    seen_c.add(cid)
                    c = connectors[cid]
                    if c['start_element_id'] in eid_set and c['end_element_id'] in eid_set:
                        diagram_conns.append(c)

            # Get containment for this diagram
            diag_contain = {}
            raw = containment.get(str(d['id']), {})
            for bid_str, cids in raw.items():
                diag_contain[int(bid_str)] = cids

            # Generators that support containment get it as kwarg
            if gen in (gen_usecase, gen_generic, gen_component):
                new_mm = gen(elems, diagram_conns, elu, contain=diag_contain)
            else:
                new_mm = gen(elems, diagram_conns, elu)
            if new_mm:
                d['mermaid'] = new_mm
                regen += 1; type_stats[dtype]['ok'] += 1
            else:
                skip += 1; type_stats[dtype]['skip'] += 1
        except Exception as ex:
            errs += 1; type_stats[dtype]['err'] += 1
            if errs <= 10: print(f"  ERR '{d['name'][:40]}' (ID={d['id']}): {ex}")

    print(f"\n{'='*60}")
    print(f"MERMAID FIX: {regen} regenerated, {skip} skipped, {errs} errors / {total} total")
    for t, s in sorted(type_stats.items()):
        print(f"  {t}: ok={s['ok']} skip={s['skip']} err={s['err']}")

    if '--dry-run' in sys.argv:
        print("\nDRY RUN — no files written.")
        return

    print("\nSaving catalog.json...")
    with open(os.path.join(DATA_DIR, 'catalog.json'), 'w', encoding='utf-8') as f:
        json.dump(catalog, f, ensure_ascii=False)
    print("Saving catalog.js...")
    with open(os.path.join(DATA_DIR, 'catalog.js'), 'w', encoding='utf-8') as f:
        f.write('window.BSL_CATALOG = ')
        json.dump(catalog, f, ensure_ascii=False)
        f.write(';')
    print("Done!")

if __name__ == '__main__':
    main()
