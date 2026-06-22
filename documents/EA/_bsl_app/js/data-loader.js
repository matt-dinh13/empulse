/**
 * BSL Explorer — Data Loader
 * Loads data from global JS variables (works with file:// protocol).
 * Falls back to fetch() if globals aren't available (server mode).
 */
window.DataLoader = (function() {
  let _catalog = null;
  let _elements = null;
  let _connectors = null;
  let _scenarios = null;
  let _diagramsById = {};
  let _diagramsByPackage = {};
  let _ready = false;

  async function loadCatalog() {
    if (window.BSL_CATALOG) {
      _catalog = window.BSL_CATALOG;
    } else {
      const resp = await fetch('_bsl_app/data/catalog.json');
      if (!resp.ok) throw new Error('Failed to load catalog.json');
      _catalog = await resp.json();
    }
    // Build lookup maps
    _diagramsById = {};
    _diagramsByPackage = {};
    for (const d of _catalog.diagrams) {
      _diagramsById[d.id] = d;
      if (!_diagramsByPackage[d.package_id]) _diagramsByPackage[d.package_id] = [];
      _diagramsByPackage[d.package_id].push(d);
    }
    return _catalog;
  }

  async function loadElements() {
    if (window.BSL_ELEMENTS) {
      _elements = window.BSL_ELEMENTS;
    } else {
      const resp = await fetch('_bsl_app/data/elements.json');
      if (!resp.ok) throw new Error('Failed to load elements.json');
      _elements = await resp.json();
    }
    _ready = true;
    return _elements;
  }

  async function loadConnectors() {
    if (window.BSL_CONNECTORS) {
      _connectors = window.BSL_CONNECTORS;
    } else {
      const resp = await fetch('_bsl_app/data/connectors.json');
      if (!resp.ok) throw new Error('Failed to load connectors.json');
      _connectors = await resp.json();
    }
    return _connectors;
  }

  function getMeta() { return _catalog ? _catalog.meta : null; }
  function getPackageTree() { return _catalog ? _catalog.package_tree : []; }
  function getPackages() { return _catalog ? _catalog.packages : {}; }
  function getPackageDiagramCounts() { return _catalog ? _catalog.package_diagram_counts : {}; }

  function getDiagram(id) { return _diagramsById[id] || null; }
  function getAllDiagrams() { return _catalog ? _catalog.diagrams : []; }
  function getDiagramsByPackage(pkgId) { return _diagramsByPackage[pkgId] || []; }

  function getElement(id) {
    if (!_elements) return null;
    return _elements.elements[String(id)] || null;
  }

  function getConnector(id) {
    if (!_connectors) return null;
    return _connectors.connectors[String(id)] || null;
  }

  function getScenarios(elementId) {
    if (!_scenarios) {
      if (window.BSL_SCENARIOS) _scenarios = window.BSL_SCENARIOS;
      else return [];
    }
    return _scenarios.scenarios[String(elementId)] || [];
  }

  function getDiagramsForElement(elementId) {
    const elem = getElement(elementId);
    if (!elem || !elem.diagrams) return [];
    return elem.diagrams.map(did => getDiagram(did)).filter(Boolean);
  }

  // Type abbreviation aliases for smart search
  const _typeAliases = {
    'uc': 'use case', 'usecase': 'use case',
    'seq': 'sequence', 'sd': 'sequence',
    'sc': 'statechart', 'state': 'statechart', 'stm': 'statechart',
    'cls': 'class', 'cd': 'class',
    'act': 'activity', 'ad': 'activity',
    'comp': 'component', 'cmp': 'component',
    'pkg': 'package',
    'logic': 'logical', 'ldm': 'logical',
    'req': 'custom',  // Requirements diagrams are often Custom type
  };

  function searchDiagrams(query) {
    if (!_catalog) return [];
    const q = query.toLowerCase().trim();
    if (q.length < 2) return [];
    const terms = q.split(/\s+/).filter(t => t.length > 0);

    // Expand abbreviations: replace alias terms with full type names
    const expandedTerms = terms.map(t => _typeAliases[t] || t);

    const scored = [];
    for (const d of _catalog.diagrams) {
      const name = d.name.toLowerCase();
      const pkg = (d.package_path || '').toLowerCase();
      const type = (d.type || '').toLowerCase();
      const combined = name + ' ' + pkg + ' ' + type;

      // Split combined text into words for word-boundary matching
      const words = combined.split(/[\s\/\\_\-\.]+/);

      let matchCount = 0;
      let score = 0;

      for (const term of expandedTerms) {
        // Strategy 1: Exact substring match (strongest)
        if (combined.includes(term)) {
          matchCount++;
          // Bonus: term found in name vs just package path
          if (name.includes(term)) score += 10;
          else score += 3;
          continue;
        }
        // Strategy 2: Prefix match on words (e.g. "reg" matches "registration")
        if (words.some(w => w.startsWith(term))) {
          matchCount++;
          score += 5;
          continue;
        }
        // Strategy 3: Initials match (e.g. "uc" → first letters of "use case")
        if (term.length >= 2 && term.length <= 5) {
          const initials = words.map(w => w[0]).join('');
          if (initials.includes(term)) {
            matchCount++;
            score += 2;
            continue;
          }
        }
      }

      // All expanded terms must match
      if (matchCount < expandedTerms.length) continue;

      // Bonus scoring for quality
      if (name === q) score += 50;                        // Exact name match
      if (name.startsWith(q)) score += 30;                // Name starts with full query
      if (name.includes(q)) score += 20;                  // Name contains full query

      scored.push({ ...d, _score: score });
    }

    // Sort by score descending, then alphabetically by name
    scored.sort((a, b) => b._score - a._score || a.name.localeCompare(b.name));
    return scored.slice(0, 100);
  }

  // ─── Full-Text Search Across Everything ─────────────────────
  function _getSnippet(text, query, maxLen) {
    if (!text) return '';
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) {
      // Try individual terms
      const terms = query.toLowerCase().split(/\s+/);
      for (const t of terms) {
        const ti = text.toLowerCase().indexOf(t);
        if (ti >= 0) {
          const start = Math.max(0, ti - 40);
          const end = Math.min(text.length, ti + t.length + 60);
          return (start > 0 ? '...' : '') + text.substring(start, end).trim() + (end < text.length ? '...' : '');
        }
      }
      return text.substring(0, maxLen || 100) + (text.length > (maxLen || 100) ? '...' : '');
    }
    const start = Math.max(0, idx - 40);
    const end = Math.min(text.length, idx + query.length + 60);
    return (start > 0 ? '...' : '') + text.substring(start, end).trim() + (end < text.length ? '...' : '');
  }

  function searchAll(query) {
    if (!_catalog || !_elements) return { diagrams: [], elements: [], scenarios: [] };
    const q = query.toLowerCase().trim();
    if (q.length < 2) return { diagrams: [], elements: [], scenarios: [] };
    const terms = q.split(/\s+/).filter(t => t.length > 0);

    // 1. Diagram search (reuse existing)
    const diagramResults = searchDiagrams(query).slice(0, 30);

    // 2. Element search (name + notes)
    const elementResults = [];
    const elemEntries = Object.values(_elements.elements);
    for (const e of elemEntries) {
      const name = (e.name || '').toLowerCase();
      const note = (e.note_text || '').toLowerCase();
      const stereo = (e.stereotype || '').toLowerCase();

      let matched = false;
      let score = 0;
      let matchIn = '';
      let snippet = '';

      // Check if all terms match somewhere in this element
      const allTermsMatch = terms.every(t =>
        name.includes(t) || note.includes(t) || stereo.includes(t)
      );
      if (!allTermsMatch) continue;

      // Score based on where matched
      if (name.includes(q)) {
        score += 20;
        matchIn = 'name';
      } else if (terms.every(t => name.includes(t))) {
        score += 15;
        matchIn = 'name';
      }

      if (note.includes(q)) {
        score += 10;
        matchIn = matchIn || 'notes';
        snippet = _getSnippet(e.note_text, q, 120);
      } else if (!matchIn && terms.some(t => note.includes(t))) {
        score += 5;
        matchIn = 'notes';
        snippet = _getSnippet(e.note_text, terms.find(t => note.includes(t)), 120);
      }

      if (!matchIn) {
        matchIn = 'stereotype';
      }

      // Get diagrams this element appears in
      const diagrams = (e.diagrams || []).map(did => _diagramsById[did]).filter(Boolean);

      elementResults.push({
        id: e.id, name: e.name, type: e.type,
        stereotype: e.stereotype,
        matchIn, snippet, _score: score,
        diagrams: diagrams.slice(0, 5)
      });

      if (elementResults.length >= 200) break; // cap for perf
    }

    elementResults.sort((a, b) => b._score - a._score || a.name.localeCompare(b.name));

    // 3. Scenario search (steps text)
    const scenarioResults = [];
    if (_scenarios || window.BSL_SCENARIOS) {
      if (!_scenarios && window.BSL_SCENARIOS) _scenarios = window.BSL_SCENARIOS;
      if (_scenarios) {
        for (const [elemId, scenarioList] of Object.entries(_scenarios.scenarios)) {
          for (const s of scenarioList) {
            const steps = (s.steps || '').toLowerCase();
            const sname = (s.name || '').toLowerCase();
            if (terms.every(t => steps.includes(t) || sname.includes(t))) {
              const elem = getElement(parseInt(elemId));
              scenarioResults.push({
                elementId: parseInt(elemId),
                elementName: elem ? elem.name : 'Unknown',
                scenarioName: s.name,
                scenarioType: s.type,
                snippet: _getSnippet(s.steps, q, 150),
                _score: steps.includes(q) ? 10 : 5,
                diagrams: elem ? (elem.diagrams || []).map(did => _diagramsById[did]).filter(Boolean).slice(0, 3) : []
              });
            }
          }
        }
        scenarioResults.sort((a, b) => b._score - a._score);
      }
    }

    return {
      diagrams: diagramResults,
      elements: elementResults.slice(0, 50),
      scenarios: scenarioResults.slice(0, 30)
    };
  }

  // ─── Impact Analysis Graph ────────────────────────────────────
  let _connIdx = null; // lazy connector index: elementId -> [{connector, otherId, direction}]

  function _buildConnIdx() {
    if (_connIdx || !_connectors) return;
    _connIdx = {};
    for (const [cid, c] of Object.entries(_connectors.connectors)) {
      const s = c.start_element_id, e = c.end_element_id;
      if (!_connIdx[s]) _connIdx[s] = [];
      if (!_connIdx[e]) _connIdx[e] = [];
      _connIdx[s].push({ connector: c, otherId: e, direction: 'outgoing' });
      _connIdx[e].push({ connector: c, otherId: s, direction: 'incoming' });
    }
  }

  function getImpactGraph(elementId, maxDepth) {
    _buildConnIdx();
    if (!_connIdx || !_elements) return { nodes: [], edges: [] };
    maxDepth = maxDepth || 2;

    const visited = new Set();
    const nodes = [];
    const edges = [];
    const queue = [{ id: elementId, depth: 0 }];
    visited.add(elementId);

    // BFS traversal
    while (queue.length > 0) {
      const { id, depth } = queue.shift();
      const elem = getElement(id);
      if (!elem) continue;

      nodes.push({
        id: elem.id, name: elem.name, type: elem.type,
        stereotype: elem.stereotype, depth,
        diagramCount: (elem.diagrams || []).length
      });

      if (depth >= maxDepth) continue;

      const connections = _connIdx[id] || [];
      for (const conn of connections) {
        const other = getElement(conn.otherId);
        if (!other) continue;
        // Skip noise types
        if (['Text', 'Note', 'UMLDiagram', 'Constraint', 'Artifact'].includes(other.type)) continue;

        const edgeKey = conn.connector.start_element_id + '-' + conn.connector.end_element_id + '-' + conn.connector.type;
        edges.push({
          from: conn.connector.start_element_id,
          to: conn.connector.end_element_id,
          type: conn.connector.type,
          stereotype: conn.connector.stereotype,
          name: conn.connector.name,
          _key: edgeKey
        });

        if (!visited.has(conn.otherId)) {
          visited.add(conn.otherId);
          queue.push({ id: conn.otherId, depth: depth + 1 });
        }
      }
    }

    // Deduplicate edges
    const seenEdges = new Set();
    const uniqueEdges = edges.filter(e => {
      if (seenEdges.has(e._key)) return false;
      seenEdges.add(e._key);
      return true;
    });

    return { nodes, edges: uniqueEdges };
  }

  // ─── Requirement Coverage Dashboard ───────────────────────────
  function getCoverageStats() {
    if (!_elements || !_connectors || !_catalog) return null;
    _buildConnIdx();

    const elems = _elements.elements;
    const stats = {
      total: { requirements: 0, usecases: 0, classes: 0, components: 0, actors: 0 },
      requirements: { total: 0, linkedToUC: 0, hasSequence: 0, orphaned: 0 },
      usecases: { total: 0, hasScenario: 0, hasSequence: 0, orphaned: 0 },
      diagramTypes: {},
    };

    // Build diagram type lookup
    const elemInDiagramType = {};
    for (const d of _catalog.diagrams) {
      stats.diagramTypes[d.type] = (stats.diagramTypes[d.type] || 0) + 1;
      if (d.element_ids) {
        for (const eid of d.element_ids) {
          if (!elemInDiagramType[eid]) elemInDiagramType[eid] = new Set();
          elemInDiagramType[eid].add(d.type);
        }
      }
    }

    // Count elements by type
    const ucIds = new Set();
    for (const [id, e] of Object.entries(elems)) {
      const eid = parseInt(id);
      if (e.type === 'Requirement') stats.total.requirements++;
      if (e.type === 'UseCase') { stats.total.usecases++; ucIds.add(eid); }
      if (e.type === 'Class') stats.total.classes++;
      if (e.type === 'Component') stats.total.components++;
      if (e.type === 'Actor') stats.total.actors++;
    }

    // Requirement analysis
    for (const [id, e] of Object.entries(elems)) {
      if (e.type !== 'Requirement') continue;
      const eid = parseInt(id);
      stats.requirements.total++;
      const conns = _connIdx ? (_connIdx[eid] || []) : [];
      const linkedTypes = new Set(conns.map(c => {
        const other = elems[String(c.otherId)];
        return other ? other.type : null;
      }).filter(Boolean));
      if (linkedTypes.has('UseCase')) stats.requirements.linkedToUC++;
      const diagTypes = elemInDiagramType[eid] || new Set();
      if (diagTypes.has('Sequence')) stats.requirements.hasSequence++;
      if (!linkedTypes.has('UseCase') && conns.length === 0) stats.requirements.orphaned++;
    }

    // UseCase analysis
    for (const ucId of ucIds) {
      stats.usecases.total++;
      const scenarios = getScenarios(ucId);
      if (scenarios.length > 0) stats.usecases.hasScenario++;
      const diagTypes = elemInDiagramType[ucId] || new Set();
      if (diagTypes.has('Sequence')) stats.usecases.hasSequence++;
      const conns = _connIdx ? (_connIdx[ucId] || []) : [];
      if (conns.length === 0) stats.usecases.orphaned++;
    }

    return stats;
  }

  // ─── Glossary / Domain Dictionary ──────────────────────────────
  function getGlossary() {
    if (!_elements || !_catalog) return {};
    const glossary = {}; // domain -> [{name, type, stereotype, diagramCount, id}]

    for (const [id, e] of Object.entries(_elements.elements)) {
      // Skip noise types
      if (['Text', 'Note', 'Constraint', 'UMLDiagram', 'Artifact', 'ProvidedInterface', 'RequiredInterface'].includes(e.type)) continue;
      if (!e.name || e.name.length < 2) continue;

      // Extract domain from first meaningful package segment
      const diagrams = (e.diagrams || []).map(did => _diagramsById[did]).filter(Boolean);
      let domain = 'Uncategorized';
      if (diagrams.length > 0) {
        const path = diagrams[0].package_path || '';
        const parts = path.split('/').filter(p => p && p !== 'HomerSelect' && p !== 'BSL' && p !== 'Modules');
        domain = parts[0] || 'Root';
      }

      if (!glossary[domain]) glossary[domain] = [];
      glossary[domain].push({
        id: parseInt(id), name: e.name, type: e.type,
        stereotype: e.stereotype || '',
        diagramCount: (e.diagrams || []).length,
        hasNote: !!(e.note_text && e.note_text.length > 10)
      });
    }

    // Sort domains and entries
    const sorted = {};
    for (const key of Object.keys(glossary).sort()) {
      // Deduplicate by name+type
      const seen = new Set();
      sorted[key] = glossary[key].filter(e => {
        const k = e.name + '|' + e.type;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      }).sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }

  function getAllElements() {
    if (!_elements) return [];
    return Object.values(_elements.elements);
  }

  // ─── Annotations (localStorage-backed) ────────────────────────
  const ANNO_KEY = 'bsl_annotations';

  function getAnnotations(elementId) {
    try {
      const all = JSON.parse(localStorage.getItem(ANNO_KEY) || '{}');
      return elementId ? (all[elementId] || []) : all;
    } catch { return elementId ? [] : {}; }
  }

  function saveAnnotation(elementId, text, tag) {
    try {
      const all = JSON.parse(localStorage.getItem(ANNO_KEY) || '{}');
      if (!all[elementId]) all[elementId] = [];
      all[elementId].push({
        text, tag: tag || '', time: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem(ANNO_KEY, JSON.stringify(all));
      return true;
    } catch { return false; }
  }

  function deleteAnnotation(elementId, annoId) {
    try {
      const all = JSON.parse(localStorage.getItem(ANNO_KEY) || '{}');
      if (all[elementId]) {
        all[elementId] = all[elementId].filter(a => a.id !== annoId);
        if (all[elementId].length === 0) delete all[elementId];
        localStorage.setItem(ANNO_KEY, JSON.stringify(all));
      }
      return true;
    } catch { return false; }
  }

  function getAnnotationSummary() {
    const all = getAnnotations();
    let total = 0, tagged = {};
    for (const [eid, annos] of Object.entries(all)) {
      total += annos.length;
      for (const a of annos) {
        if (a.tag) tagged[a.tag] = (tagged[a.tag] || 0) + 1;
      }
    }
    return { total, elementCount: Object.keys(all).length, tags: tagged };
  }

  // ─── Diagram Diff (F2) ────────────────────────────────────────
  const SNAP_KEY = 'bsl_snapshot';

  function saveSnapshot() {
    if (!_catalog || !_elements) return false;
    try {
      const snap = {
        time: new Date().toISOString(),
        diagrams: {}, elements: {}
      };
      for (const d of _catalog.diagrams) {
        snap.diagrams[d.id] = {
          name: d.name, type: d.type,
          elementIds: d.element_ids || [],
          connectorCount: d.connector_count || 0
        };
      }
      for (const [id, e] of Object.entries(_elements.elements)) {
        snap.elements[id] = { name: e.name, type: e.type, stereotype: e.stereotype || '' };
      }
      localStorage.setItem(SNAP_KEY, JSON.stringify(snap));
      return true;
    } catch { return false; }
  }

  function getSnapshot() {
    try {
      return JSON.parse(localStorage.getItem(SNAP_KEY) || 'null');
    } catch { return null; }
  }

  function getDiagramDiff(diagramId) {
    const snap = getSnapshot();
    if (!snap) return null;
    const current = getDiagram(diagramId);
    if (!current) return null;

    const oldD = snap.diagrams[diagramId];
    if (!oldD) return { status: 'new', message: 'New diagram (not in snapshot)' };

    const curIds = new Set(current.element_ids || []);
    const oldIds = new Set(oldD.elementIds || []);

    const added = [...curIds].filter(id => !oldIds.has(id));
    const removed = [...oldIds].filter(id => !curIds.has(id));
    const kept = [...curIds].filter(id => oldIds.has(id));

    // Check renames
    const renamed = [];
    for (const id of kept) {
      const curElem = getElement(id);
      const oldElem = snap.elements[id];
      if (curElem && oldElem && curElem.name !== oldElem.name) {
        renamed.push({ id, oldName: oldElem.name, newName: curElem.name });
      }
    }

    return {
      status: (added.length || removed.length || renamed.length) ? 'changed' : 'unchanged',
      snapshotTime: snap.time,
      diagramRenamed: oldD.name !== current.name ? { old: oldD.name, new: current.name } : null,
      added: added.map(id => { const e = getElement(id); return e ? { id, name: e.name, type: e.type } : { id, name: '?', type: '?' }; }),
      removed: removed.map(id => { const e = snap.elements[id]; return e ? { id: parseInt(id), name: e.name, type: e.type } : { id: parseInt(id), name: '?', type: '?' }; }),
      renamed,
      connectorDelta: (current.connector_count || 0) - (oldD.connectorCount || 0)
    };
  }

  function getModelDiff() {
    const snap = getSnapshot();
    if (!snap) return null;
    const curDiagIds = new Set(_catalog.diagrams.map(d => d.id));
    const oldDiagIds = new Set(Object.keys(snap.diagrams).map(Number));
    return {
      snapshotTime: snap.time,
      newDiagrams: [...curDiagIds].filter(id => !oldDiagIds.has(id)).map(id => getDiagram(id)).filter(Boolean),
      removedDiagrams: [...oldDiagIds].filter(id => !curDiagIds.has(id)).map(id => ({ id, name: snap.diagrams[id]?.name || '?' })),
      currentTotal: curDiagIds.size,
      snapshotTotal: oldDiagIds.size
    };
  }

  function isReady() { return _ready; }

  // ─── Bookmarks (with folders) ──────────────────────────────
  const BM_KEY = 'bsl_bookmarks';
  function _loadBookmarks() {
    try { return JSON.parse(localStorage.getItem(BM_KEY)) || { folders: [], unfiled: [] }; }
    catch { return { folders: [], unfiled: [] }; }
  }
  function _saveBookmarks(bm) { localStorage.setItem(BM_KEY, JSON.stringify(bm)); }

  function getBookmarks() { return _loadBookmarks(); }

  function addBookmark(kind, id, name, type, folderId) {
    const bm = _loadBookmarks();
    // Check if already bookmarked anywhere
    if (isBookmarked(kind, id)) return bm;
    const item = { id, kind, name, type };
    if (folderId) {
      const folder = bm.folders.find(f => f.id === folderId);
      if (folder) folder.items.push(item);
      else bm.unfiled.push(item);
    } else {
      bm.unfiled.push(item);
    }
    _saveBookmarks(bm);
    return bm;
  }

  function removeBookmark(kind, id) {
    const bm = _loadBookmarks();
    bm.unfiled = bm.unfiled.filter(i => !(i.kind === kind && i.id === id));
    for (const f of bm.folders) {
      f.items = f.items.filter(i => !(i.kind === kind && i.id === id));
    }
    _saveBookmarks(bm);
    return bm;
  }

  function toggleBookmark(kind, id, name, type) {
    if (isBookmarked(kind, id)) {
      removeBookmark(kind, id);
      return false;
    } else {
      // Auto-add to "General" folder (create if not exists)
      const bm = _loadBookmarks();
      let general = bm.folders.find(f => f.name === 'General');
      if (!general) {
        general = { id: 'f_general', name: 'General', items: [] };
        bm.folders.unshift(general);
        _saveBookmarks(bm);
      }
      addBookmark(kind, id, name, type, general.id);
      return true;
    }
  }

  function isBookmarked(kind, id) {
    const bm = _loadBookmarks();
    if (bm.unfiled.some(i => i.kind === kind && i.id === id)) return true;
    return bm.folders.some(f => f.items.some(i => i.kind === kind && i.id === id));
  }

  function createBookmarkFolder(name) {
    const bm = _loadBookmarks();
    const folder = { id: 'f_' + Date.now(), name, items: [] };
    bm.folders.push(folder);
    _saveBookmarks(bm);
    return folder;
  }

  function renameBookmarkFolder(folderId, newName) {
    const bm = _loadBookmarks();
    const f = bm.folders.find(f => f.id === folderId);
    if (f) { f.name = newName; _saveBookmarks(bm); }
  }

  function deleteBookmarkFolder(folderId) {
    const bm = _loadBookmarks();
    const f = bm.folders.find(f => f.id === folderId);
    if (f) {
      bm.unfiled.push(...f.items); // Move items to unfiled
      bm.folders = bm.folders.filter(f => f.id !== folderId);
      _saveBookmarks(bm);
    }
    return bm;
  }

  function moveBookmarkToFolder(kind, id, targetFolderId) {
    const bm = _loadBookmarks();
    let item = null;
    // Find and remove from current location
    const idx = bm.unfiled.findIndex(i => i.kind === kind && i.id === id);
    if (idx >= 0) { item = bm.unfiled.splice(idx, 1)[0]; }
    else {
      for (const f of bm.folders) {
        const fi = f.items.findIndex(i => i.kind === kind && i.id === id);
        if (fi >= 0) { item = f.items.splice(fi, 1)[0]; break; }
      }
    }
    if (!item) return bm;
    // Place in target
    if (targetFolderId === '__unfiled__') {
      bm.unfiled.push(item);
    } else {
      const target = bm.folders.find(f => f.id === targetFolderId);
      if (target) target.items.push(item);
      else bm.unfiled.push(item);
    }
    _saveBookmarks(bm);
    return bm;
  }

  return {
    loadCatalog, loadElements, loadConnectors,
    getMeta, getPackageTree, getPackages, getPackageDiagramCounts,
    getDiagram, getAllDiagrams, getDiagramsByPackage,
    getElement, getConnector, getScenarios, getDiagramsForElement,
    searchDiagrams, searchAll, getImpactGraph, getCoverageStats,
    getGlossary, getAllElements,
    getAnnotations, saveAnnotation, deleteAnnotation, getAnnotationSummary,
    saveSnapshot, getSnapshot, getDiagramDiff, getModelDiff,
    getBookmarks, addBookmark, removeBookmark, toggleBookmark, isBookmarked,
    createBookmarkFolder, renameBookmarkFolder, deleteBookmarkFolder, moveBookmarkToFolder,
    isReady
  };
})();
