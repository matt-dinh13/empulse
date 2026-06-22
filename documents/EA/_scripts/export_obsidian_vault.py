"""
BSL → Obsidian Knowledge Graph Exporter
Exports EA elements + connectors as Obsidian-compatible markdown files.
Each element = 1 .md file with [[wikilinks]] for connections.
Open the output folder as an Obsidian vault → instant knowledge graph.

Usage:
    python export_obsidian_vault.py
    python export_obsidian_vault.py --output "C:/path/to/vault"
"""
import json
import os
import re
import argparse
from pathlib import Path
from collections import defaultdict

SCRIPT_DIR = Path(__file__).parent
DATA_DIR = SCRIPT_DIR.parent / '_bsl_app' / 'data'
DEFAULT_OUTPUT = SCRIPT_DIR.parent / '_obsidian_vault'

# Element types to skip (noise)
SKIP_TYPES = {'Text', 'Note', 'Constraint', 'UMLDiagram', 'ProvidedInterface', 'RequiredInterface', 'Artifact'}

# Type → emoji mapping for visual badges
TYPE_EMOJI = {
    'Actor': '👤', 'UseCase': '🎯', 'Class': '🔷', 'Interface': '🔶',
    'Enumeration': '📝', 'Component': '📦', 'Package': '📁', 'Requirement': '📋',
    'Activity': '⚡', 'State': '🔄', 'Boundary': '🔲', 'Screen': '📱',
    'GUIElement': '🖥️', 'Object': '🔸', 'DataType': '📐', 'Decision': '🔀',
}

def sanitize_filename(name):
    """Make a string safe for use as a filename."""
    name = re.sub(r'[<>:"/\\|?*]', '_', name)
    name = re.sub(r'\s+', ' ', name).strip()
    return name[:100] if name else 'Unnamed'

def load_json(filename):
    """Load JSON data file."""
    path = DATA_DIR / filename
    if not path.exists():
        print(f"  ⚠ {filename} not found, trying .js...")
        js_path = DATA_DIR / filename.replace('.json', '.js')
        if js_path.exists():
            text = js_path.read_text(encoding='utf-8')
            # Remove "window.VAR_NAME = " prefix
            eq_pos = text.index('=')
            return json.loads(text[eq_pos + 1:].strip().rstrip(';'))
        return None
    return json.loads(path.read_text(encoding='utf-8'))

def main():
    parser = argparse.ArgumentParser(description='Export BSL model to Obsidian vault')
    parser.add_argument('--output', '-o', default=str(DEFAULT_OUTPUT), help='Output vault directory')
    args = parser.parse_args()

    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)
    print(f"📂 Output: {output_dir}")

    # Load data
    print("📥 Loading data...")
    elements_data = load_json('elements.json')
    connectors_data = load_json('connectors.json')
    catalog_data = load_json('catalog.json')
    scenarios_data = load_json('scenarios.json')

    if not elements_data or not connectors_data:
        print("❌ Could not load elements.json or connectors.json")
        return

    elements = elements_data.get('elements', {})
    connectors = connectors_data.get('connectors', {})
    scenarios = scenarios_data or {}

    # Build diagram lookup
    diagrams_by_id = {}
    if catalog_data:
        for d in catalog_data.get('diagrams', []):
            diagrams_by_id[d['id']] = d

    # Build connector index: element_id → [{target_id, type, direction, name}]
    print("🔗 Indexing connectors...")
    conn_index = defaultdict(list)  # element_id → list of connections
    for cid, c in connectors.items():
        src = c.get('start_element_id')
        tgt = c.get('end_element_id')
        ctype = c.get('type', 'Association')
        cname = c.get('name', '')
        stereotype = c.get('stereotype', '')

        if src and tgt:
            conn_index[src].append({
                'target': tgt, 'type': ctype, 'name': cname,
                'direction': 'outgoing', 'stereotype': stereotype
            })
            conn_index[tgt].append({
                'target': src, 'type': ctype, 'name': cname,
                'direction': 'incoming', 'stereotype': stereotype
            })

    # Build scenario index
    scenario_index = defaultdict(list)
    if isinstance(scenarios, dict):
        for sid, s in scenarios.items():
            eid = s.get('element_id')
            if eid:
                scenario_index[eid].append(s)

    # Create element name lookup for wikilinks
    name_lookup = {}  # id → sanitized filename
    name_count = defaultdict(int)

    for eid, e in elements.items():
        if e.get('type') in SKIP_TYPES:
            continue
        name = e.get('name', '')
        if not name or len(name) < 2:
            continue
        safe = sanitize_filename(name)
        name_count[safe] += 1
        if name_count[safe] > 1:
            safe = f"{safe} ({e.get('type', 'Element')} {eid})"
        name_lookup[int(eid)] = safe

    # Generate markdown files
    print(f"📝 Generating {len(name_lookup)} markdown files...")
    created = 0
    by_package = defaultdict(list)

    for eid_str, e in elements.items():
        eid = int(eid_str)
        if eid not in name_lookup:
            continue

        etype = e.get('type', 'Unknown')
        ename = e.get('name', 'Unnamed')
        stereotype = e.get('stereotype', '')
        note = e.get('note_text', '')
        emoji = TYPE_EMOJI.get(etype, '📄')

        # Determine package from diagrams
        diag_ids = e.get('diagrams', [])
        pkg_path = ''
        if diag_ids and diag_ids[0] in diagrams_by_id:
            pkg_path = diagrams_by_id[diag_ids[0]].get('package_path', '')

        # Determine subfolder from package
        pkg_parts = [p for p in pkg_path.split('/') if p and p not in ('HomerSelect', 'BSL')]
        domain = pkg_parts[0] if pkg_parts else '_Uncategorized'
        by_package[domain].append(eid)

        # Build connections section
        connections = conn_index.get(eid, [])
        conn_lines = []
        for c in connections:
            target_name = name_lookup.get(c['target'])
            if not target_name:
                continue
            arrow = '→' if c['direction'] == 'outgoing' else '←'
            label = c['name'] or c['type']
            stereo = f" «{c['stereotype']}»" if c['stereotype'] else ''
            conn_lines.append(f"- {arrow} {c['type']}{stereo}: [[{target_name}]]")

        # Build diagram links
        diag_lines = []
        for did in diag_ids:
            d = diagrams_by_id.get(did)
            if d:
                diag_lines.append(f"- {d['type']}: {d['name']}")

        # Build scenarios
        elem_scenarios = scenario_index.get(eid, [])
        scenario_lines = []
        for s in elem_scenarios:
            stype = s.get('type', 'Basic Path')
            sname = s.get('name', 'Unnamed')
            steps = s.get('steps', '')
            scenario_lines.append(f"### {stype}: {sname}")
            if steps:
                scenario_lines.append(f"```\n{steps}\n```")

        # Build attributes
        attrs = e.get('attributes', [])
        attr_lines = []
        if attrs:
            attr_lines.append("| Name | Type | Default |")
            attr_lines.append("|------|------|---------|")
            for a in attrs:
                attr_lines.append(f"| {a.get('name','')} | {a.get('type','')} | {a.get('default','-')} |")

        # Compose markdown
        md = f"""---
type: {etype}
stereotype: "{stereotype}"
package: "{pkg_path}"
domain: "{domain}"
element_id: {eid}
diagrams: {len(diag_ids)}
connections: {len(connections)}
tags:
  - {etype.lower()}
  - {domain.lower().replace(' ', '-')}
---

# {emoji} {ename}

> **Type**: {etype}{f' · **Stereotype**: «{stereotype}»' if stereotype else ''}
> **Package**: {pkg_path or 'N/A'}
"""
        if note:
            md += f"\n## 📝 Notes\n\n{note}\n"

        if conn_lines:
            md += f"\n## 🔗 Connections ({len(conn_lines)})\n\n" + '\n'.join(conn_lines) + '\n'

        if diag_lines:
            md += f"\n## 📊 Appears In ({len(diag_lines)} diagrams)\n\n" + '\n'.join(diag_lines) + '\n'

        if attr_lines:
            md += f"\n## 📋 Attributes\n\n" + '\n'.join(attr_lines) + '\n'

        if scenario_lines:
            md += f"\n## 🎬 Scenarios\n\n" + '\n'.join(scenario_lines) + '\n'

        # Write file into domain subfolder
        domain_dir = output_dir / sanitize_filename(domain)
        domain_dir.mkdir(exist_ok=True)
        filepath = domain_dir / f"{name_lookup[eid]}.md"

        filepath.write_text(md, encoding='utf-8')
        created += 1

    # Generate index file
    index_md = f"""---
tags: [index, bsl-model]
---

# 🏛 BSL Model Index

> Auto-generated from Enterprise Architect export
> Elements: **{created}** · Connectors: **{len(connectors)}** · Diagrams: **{len(diagrams_by_id)}**

## Domains

"""
    for domain in sorted(by_package.keys()):
        count = len(by_package[domain])
        index_md += f"### 📁 {domain} ({count} elements)\n\n"
        # List top 10 most-connected elements
        domain_elems = [(eid, len(conn_index.get(eid, []))) for eid in by_package[domain]]
        domain_elems.sort(key=lambda x: -x[1])
        for eid, conn_count in domain_elems[:10]:
            name = name_lookup.get(eid, '?')
            e = elements.get(str(eid), {})
            emoji = TYPE_EMOJI.get(e.get('type', ''), '📄')
            index_md += f"- {emoji} [[{name}]] ({conn_count} connections)\n"
        if len(domain_elems) > 10:
            index_md += f"- *...and {len(domain_elems) - 10} more*\n"
        index_md += '\n'

    (output_dir / 'BSL Model Index.md').write_text(index_md, encoding='utf-8')

    print(f"\n✅ Done! Created {created} element files + 1 index file")
    print(f"📂 Vault: {output_dir}")
    print(f"📊 Domains: {len(by_package)}")
    print(f"\n💡 Open this folder as an Obsidian vault to see the Knowledge Graph!")

if __name__ == '__main__':
    main()
