/**
 * BSL Explorer — Knowledge Graph (F11)
 * Interactive force-directed graph visualization using Cytoscape.js
 * Shows the entire EA model as a navigable "Google Maps for Architecture"
 */
window.KnowledgeGraph = (function() {
  let _cy = null;
  let _modal = null;

  const TYPE_COLORS = {
    'Actor': '#10b981',       // green
    'UseCase': '#f59e0b',     // amber
    'Class': '#3b82f6',       // blue
    'Requirement': '#a855f7', // purple
    'Component': '#ec4899',   // pink
    'Interface': '#06b6d4',   // cyan
    'Package': '#6b7280',     // gray
    'Boundary': '#64748b',    // slate
    'Object': '#8b5cf6',      // violet
    'Activity': '#ef4444',    // red
    'State': '#14b8a6',       // teal
    'Screen': '#f97316',      // orange
    'GUIElement': '#f97316',  // orange
    'Node': '#78716c',        // stone
  };

  const TYPE_SHAPES = {
    'Actor': 'ellipse',
    'UseCase': 'round-rectangle',
    'Class': 'rectangle',
    'Requirement': 'diamond',
    'Component': 'hexagon',
    'Interface': 'octagon',
    'Package': 'round-rectangle',
    'Boundary': 'barrel',
  };

  function open() {
    _createModal();
    _modal.classList.add('visible');
    _buildGraph();
  }

  function _createModal() {
    if (_modal) return;
    _modal = document.createElement('div');
    _modal.id = 'kg-modal';
    _modal.className = 'kg-modal';
    _modal.innerHTML = `
      <div class="kg-modal__header">
        <div class="kg-modal__title">
          <span>🌐</span>
          <span id="kg-title">Knowledge Graph</span>
        </div>
        <div class="kg-modal__controls">
          <div class="kg-toolbar">
            <input id="kg-search" type="text" placeholder="Search nodes..." class="kg-search">
            <label class="kg-filter-label">
              <select id="kg-type-filter" class="kg-filter-select">
                <option value="all">All Types</option>
                <option value="Actor">👤 Actor</option>
                <option value="UseCase">🎯 UseCase</option>
                <option value="Class">🔷 Class</option>
                <option value="Requirement">📋 Requirement</option>
                <option value="Component">📦 Component</option>
                <option value="Interface">🔶 Interface</option>
              </select>
            </label>
            <label class="kg-filter-label">
              <select id="kg-package-filter" class="kg-filter-select">
                <option value="all">All Packages</option>
              </select>
            </label>
            <label class="kg-filter-label" title="Minimum connections">
              Min conn:
              <input id="kg-min-conn" type="number" value="1" min="0" max="50" class="kg-num-input">
            </label>
            <button id="kg-fit" class="kg-btn" title="Fit to screen">⊡ Fit</button>
            <label class="kg-filter-label"><input id="kg-orphans" type="checkbox"> Orphans only</label>
          </div>
          <button id="kg-close" class="impact-modal__close" title="Close (Esc)">✕</button>
        </div>
      </div>
      <div class="kg-modal__legend">
        ${Object.entries(TYPE_COLORS).slice(0, 8).map(([t, c]) =>
          `<span class="kg-legend-item"><span class="kg-legend-dot" style="background:${c}"></span>${t}</span>`
        ).join('')}
      </div>
      <div id="kg-container" class="kg-container"></div>
      <div id="kg-tooltip" class="kg-tooltip" style="display:none"></div>
      <div id="kg-status" class="kg-status"></div>
    `;
    document.body.appendChild(_modal);

    // Close handlers
    document.getElementById('kg-close').addEventListener('click', () => {
      _modal.classList.remove('visible');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && _modal.classList.contains('visible')) {
        _modal.classList.remove('visible');
      }
    });

    // Fit button
    document.getElementById('kg-fit').addEventListener('click', () => {
      if (_cy) _cy.fit(undefined, 30);
    });

    // Search
    document.getElementById('kg-search').addEventListener('input', _onSearch);

    // Filters
    document.getElementById('kg-type-filter').addEventListener('change', _applyFilters);
    document.getElementById('kg-package-filter').addEventListener('change', _applyFilters);
    document.getElementById('kg-min-conn').addEventListener('change', _applyFilters);
    document.getElementById('kg-orphans').addEventListener('change', _applyFilters);
  }

  function _buildGraph() {
    const status = document.getElementById('kg-status');
    status.textContent = 'Building graph data...';

    // Use setTimeout to avoid blocking UI
    setTimeout(() => {
    try {
    const graphData = _getGraphData();
    status.textContent = `${graphData.nodes.length} nodes, ${graphData.edges.length} edges — Rendering...`;

    // Populate package filter
    const pkgFilter = document.getElementById('kg-package-filter');
    const existingOpts = pkgFilter.options.length;
    if (existingOpts <= 1) {
      const packages = [...new Set(graphData.nodes.map(n => n.data.package).filter(Boolean))].sort();
      packages.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p; opt.textContent = p;
        pkgFilter.appendChild(opt);
      });
    }

    // Create Cytoscape instance
    if (_cy) _cy.destroy();

    _cy = cytoscape({
      container: document.getElementById('kg-container'),
      elements: { nodes: graphData.nodes, edges: graphData.edges },
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'background-color': 'data(color)',
            'shape': 'data(shape)',
            'width': 'data(size)',
            'height': 'data(size)',
            'font-size': '8px',
            'color': '#e2e8f0',
            'text-outline-width': 1,
            'text-outline-color': '#0f172a',
            'text-valign': 'bottom',
            'text-margin-y': 4,
            'text-max-width': '80px',
            'text-wrap': 'ellipsis',
            'min-zoomed-font-size': 8,
            'border-width': 1,
            'border-color': 'data(borderColor)',
          }
        },
        {
          selector: 'node.highlighted',
          style: {
            'border-width': 3,
            'border-color': '#f59e0b',
            'font-size': '11px',
            'z-index': 999
          }
        },
        {
          selector: 'node.dimmed',
          style: { 'opacity': 0.15 }
        },
        {
          selector: 'edge',
          style: {
            'width': 0.5,
            'line-color': '#334155',
            'target-arrow-color': '#334155',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'opacity': 0.4,
          }
        },
        {
          selector: 'edge.highlighted',
          style: { 'opacity': 1, 'width': 2, 'line-color': '#f59e0b', 'target-arrow-color': '#f59e0b' }
        },
        {
          selector: 'edge.dimmed',
          style: { 'opacity': 0.05 }
        }
      ],
      layout: {
        name: graphData.nodes.length > 300 ? 'concentric' : 'cose',
        animate: false,
        // concentric options
        concentric: (node) => node.degree(),
        levelWidth: () => 3,
        // cose options (used only when < 300 nodes)
        nodeRepulsion: 6000,
        idealEdgeLength: 50,
        gravity: 0.4,
        numIter: 200,
        randomize: true,
        nodeDimensionsIncludeLabels: true,
      },
      wheelSensitivity: 0.3,
      minZoom: 0.05,
      maxZoom: 4,
    });

    // Tooltip on hover
    const tooltip = document.getElementById('kg-tooltip');
    _cy.on('mouseover', 'node', (e) => {
      const d = e.target.data();
      tooltip.innerHTML = `
        <div class="kg-tooltip__name">${d.fullName || d.label}</div>
        <div class="kg-tooltip__meta">${d.type} · ${d.package || 'No package'}</div>
        <div class="kg-tooltip__meta">Connections: ${e.target.degree()} · In ${d.diagramCount || 0} diagrams</div>
        ${d.hasNote ? '<div class="kg-tooltip__meta">📝 Has documentation</div>' : ''}
      `;
      tooltip.style.display = 'block';
      const pos = e.renderedPosition;
      tooltip.style.left = (pos.x + 15) + 'px';
      tooltip.style.top = (pos.y - 10) + 'px';
    });
    _cy.on('mouseout', 'node', () => { tooltip.style.display = 'none'; });

    // Click → highlight neighbors
    _cy.on('tap', 'node', (e) => {
      _cy.elements().removeClass('highlighted dimmed');
      const node = e.target;
      const neighborhood = node.neighborhood().add(node);
      neighborhood.addClass('highlighted');
      _cy.elements().not(neighborhood).addClass('dimmed');
      status.textContent = `Selected: ${node.data('fullName')} — ${node.degree()} connections`;
    });

    // Click background → reset
    _cy.on('tap', (e) => {
      if (e.target === _cy) {
        _cy.elements().removeClass('highlighted dimmed');
        status.textContent = `${graphData.nodes.length} nodes, ${graphData.edges.length} edges`;
      }
    });

    // Double-click → navigate to diagram
    _cy.on('dbltap', 'node', (e) => {
      const elemId = parseInt(e.target.id());
      _modal.classList.remove('visible');
      const diagrams = DataLoader.getDiagramsForElement(elemId);
      if (diagrams.length > 0 && window._showDiagramFn) {
        window._showDiagramFn(diagrams[0].id);
      }
      DetailPanel.show(elemId);
    });

    status.textContent = `${graphData.nodes.length} nodes, ${graphData.edges.length} edges — Ready. Click node to explore, dbl-click to navigate.`;
    } catch(err) {
      console.error('KG build error:', err);
      status.textContent = 'Error building graph: ' + err.message;
    }
    }, 100); // end setTimeout
  }

  function _getGraphData() {
    const MAX_NODES = 500;
    const nodes = [];
    const edges = [];
    const edgeSet = new Set();

    // Get connectors — they're stored as a dict with start_element_id/end_element_id
    const connRaw = window.BSL_CONNECTORS || {};
    const connDict = connRaw.connectors || {};
    const connectorList = Object.values(connDict);

    // Count connections per element
    const connCount = {};
    for (const c of connectorList) {
      const src = c.start_element_id;
      const tgt = c.end_element_id;
      if (src) connCount[src] = (connCount[src] || 0) + 1;
      if (tgt) connCount[tgt] = (connCount[tgt] || 0) + 1;
    }

    // Build elements index
    const elemIndex = {};
    const allElements = window.BSL_ELEMENTS ? window.BSL_ELEMENTS.elements : {};
    for (const [id, e] of Object.entries(allElements)) {
      if (['Text', 'Note', 'Constraint', 'UMLDiagram', 'ProvidedInterface', 'RequiredInterface'].includes(e.type)) continue;
      if (!e.name || e.name.length < 2) continue;
      elemIndex[id] = e;
    }

    // Sort by connection count and take top N
    const sorted = Object.entries(elemIndex)
      .map(([id, e]) => ({ id: parseInt(id), elem: e, conns: connCount[parseInt(id)] || 0 }))
      .sort((a, b) => b.conns - a.conns)
      .slice(0, MAX_NODES);

    const nodeIds = new Set(sorted.map(s => s.id));

    // Build nodes
    for (const s of sorted) {
      const e = s.elem;
      const diagrams = (e.diagrams || []);
      const firstDiag = diagrams.length > 0 ? DataLoader.getDiagram(diagrams[0]) : null;
      const pkg = firstDiag ? (firstDiag.package_path || '').split('/').filter(p => p && p !== 'HomerSelect' && p !== 'BSL')[0] || 'Root' : 'Uncategorized';
      const color = TYPE_COLORS[e.type] || '#6b7280';
      const size = Math.max(12, Math.min(50, 10 + s.conns * 2));

      nodes.push({
        data: {
          id: String(s.id),
          label: e.name.length > 25 ? e.name.substring(0, 22) + '…' : e.name,
          fullName: e.name,
          type: e.type,
          package: pkg,
          color: color,
          borderColor: color,
          shape: TYPE_SHAPES[e.type] || 'ellipse',
          size: size,
          diagramCount: diagrams.length,
          hasNote: !!(e.note_text && e.note_text.length > 10),
        }
      });
    }

    // Build edges (only between visible nodes)
    for (const c of connectorList) {
      const src = c.start_element_id;
      const tgt = c.end_element_id;
      if (!nodeIds.has(src) || !nodeIds.has(tgt)) continue;
      if (src === tgt) continue;
      const key = src + '-' + tgt;
      if (edgeSet.has(key)) continue;
      edgeSet.add(key);
      edges.push({
        data: {
          source: String(src),
          target: String(tgt),
          type: c.type || 'Association'
        }
      });
    }

    return { nodes, edges };
  }

  function _onSearch() {
    if (!_cy) return;
    const q = document.getElementById('kg-search').value.toLowerCase().trim();
    if (!q) {
      _cy.elements().removeClass('highlighted dimmed');
      return;
    }
    _cy.elements().removeClass('highlighted dimmed');
    const matches = _cy.nodes().filter(n => {
      const name = (n.data('fullName') || '').toLowerCase();
      return name.includes(q);
    });
    if (matches.length > 0) {
      matches.addClass('highlighted');
      _cy.elements().not(matches).not(matches.neighborhood()).addClass('dimmed');
      if (matches.length <= 10) _cy.fit(matches, 50);
      document.getElementById('kg-status').textContent = `Found ${matches.length} matches for "${q}"`;
    } else {
      document.getElementById('kg-status').textContent = `No matches for "${q}"`;
    }
  }

  function _applyFilters() {
    if (!_cy) return;
    const typeFilter = document.getElementById('kg-type-filter').value;
    const pkgFilter = document.getElementById('kg-package-filter').value;
    const minConn = parseInt(document.getElementById('kg-min-conn').value) || 0;
    const orphansOnly = document.getElementById('kg-orphans').checked;

    _cy.elements().removeClass('highlighted dimmed');
    _cy.nodes().forEach(n => {
      let show = true;
      if (typeFilter !== 'all' && n.data('type') !== typeFilter) show = false;
      if (pkgFilter !== 'all' && n.data('package') !== pkgFilter) show = false;
      if (minConn > 0 && n.degree() < minConn) show = false;
      if (orphansOnly && n.degree() > 0) show = false;

      if (!show) {
        n.addClass('dimmed');
        n.connectedEdges().addClass('dimmed');
      }
    });

    const visible = _cy.nodes().not('.dimmed');
    document.getElementById('kg-status').textContent = `Showing ${visible.length} of ${_cy.nodes().length} nodes`;
  }

  return { open };
})();
