/**
 * BSL Explorer — Diagram Renderer (v4)
 * Scroll wheel zoom + click-drag pan + minimap + clickable nodes.
 */
window.DiagramRenderer = (function() {
  let _onElementClick = null;
  let _currentDiagramId = null;
  let _currentNodeMap = {};
  let _highlightedNode = null;
  let _renderCounter = 0;
  let _recentHistory = [];

  // Zoom & Pan state
  let _zoom = 1;
  let _panX = 0, _panY = 0;
  let _isDragging = false;
  let _dragStartX = 0, _dragStartY = 0;
  let _panStartX = 0, _panStartY = 0;
  const ZOOM_FACTOR = 1.12;
  const ZOOM_MIN = 0.1;
  const ZOOM_MAX = 6;

  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    flowchart: { htmlLabels: true, curve: 'basis', useMaxWidth: false },
    sequence: { diagramMarginX: 20, diagramMarginY: 20, actorMargin: 60, useMaxWidth: false },
    classDiagram: { useMaxWidth: false },
    stateDiagram: { useMaxWidth: false },
    themeVariables: {
      darkMode: true, background: '#1a1e2e', primaryColor: '#2a3050',
      primaryTextColor: '#e4e8f1', primaryBorderColor: '#4f8ff7',
      lineColor: '#5c6380', secondaryColor: '#232840', tertiaryColor: '#1e2235'
    }
  });

  // ─── Zoom & Pan Controls ───────────────────────────
  function initControls() {
    const container = document.getElementById('diagram-container');

    // Scroll wheel zoom (no Ctrl needed)
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Zoom toward mouse position
      const oldZoom = _zoom;
      if (e.deltaY < 0) _zoom = Math.min(_zoom * ZOOM_FACTOR, ZOOM_MAX);
      else _zoom = Math.max(_zoom / ZOOM_FACTOR, ZOOM_MIN);

      // Adjust pan so the point under cursor stays in place
      const zoomRatio = _zoom / oldZoom;
      _panX = mouseX - (mouseX - _panX) * zoomRatio;
      _panY = mouseY - (mouseY - _panY) * zoomRatio;

      applyTransform();
      updateMinimapViewport();
    }, { passive: false });

    // Click-drag pan
    container.addEventListener('mousedown', (e) => {
      // Only pan on left-click on empty space (not on clickable elements)
      if (e.button !== 0) return;
      if (e.target.closest('[data-element-id]')) return;

      _isDragging = true;
      _dragStartX = e.clientX;
      _dragStartY = e.clientY;
      _panStartX = _panX;
      _panStartY = _panY;
      container.style.cursor = 'grabbing';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!_isDragging) return;
      _panX = _panStartX + (e.clientX - _dragStartX);
      _panY = _panStartY + (e.clientY - _dragStartY);
      applyTransform();
      updateMinimapViewport();
    });

    document.addEventListener('mouseup', () => {
      if (_isDragging) {
        _isDragging = false;
        document.getElementById('diagram-container').style.cursor = 'grab';
      }
    });

    // Button controls
    document.getElementById('zoom-in')?.addEventListener('click', zoomIn);
    document.getElementById('zoom-out')?.addEventListener('click', zoomOut);
    document.getElementById('zoom-fit')?.addEventListener('click', zoomFit);
    document.getElementById('zoom-reset')?.addEventListener('click', zoomReset);
  }

  function applyTransform() {
    const wrapper = document.querySelector('#diagram-container .diagram-wrapper');
    if (wrapper) {
      wrapper.style.transform = `translate(${_panX}px, ${_panY}px) scale(${_zoom})`;
      wrapper.style.transformOrigin = '0 0';
    }
    const label = document.getElementById('zoom-level');
    if (label) label.textContent = Math.round(_zoom * 100) + '%';
  }

  function zoomIn() {
    const container = document.getElementById('diagram-container');
    const cx = container.clientWidth / 2;
    const cy = container.clientHeight / 2;
    const oldZoom = _zoom;
    _zoom = Math.min(_zoom * ZOOM_FACTOR * ZOOM_FACTOR, ZOOM_MAX);
    const r = _zoom / oldZoom;
    _panX = cx - (cx - _panX) * r;
    _panY = cy - (cy - _panY) * r;
    applyTransform(); updateMinimapViewport();
  }

  function zoomOut() {
    const container = document.getElementById('diagram-container');
    const cx = container.clientWidth / 2;
    const cy = container.clientHeight / 2;
    const oldZoom = _zoom;
    _zoom = Math.max(_zoom / (ZOOM_FACTOR * ZOOM_FACTOR), ZOOM_MIN);
    const r = _zoom / oldZoom;
    _panX = cx - (cx - _panX) * r;
    _panY = cy - (cy - _panY) * r;
    applyTransform(); updateMinimapViewport();
  }

  function zoomReset() {
    _zoom = 1; _panX = 0; _panY = 0;
    applyTransform(); updateMinimapViewport();
  }

  function zoomFit() {
    const container = document.getElementById('diagram-container');
    const wrapper = container.querySelector('.diagram-wrapper');
    if (!wrapper) return;
    const svg = wrapper.querySelector('svg');
    if (!svg) return;
    // Get natural dimensions
    const svgRect = svg.getBoundingClientRect();
    const natW = svgRect.width / _zoom;
    const natH = svgRect.height / _zoom;
    const cW = container.clientWidth - 20;
    const cH = container.clientHeight - 20;
    _zoom = Math.min(cW / natW, cH / natH, 3);
    // Center
    const scaledW = natW * _zoom;
    const scaledH = natH * _zoom;
    _panX = (cW - scaledW) / 2 + 10;
    _panY = (cH - scaledH) / 2 + 10;
    applyTransform(); updateMinimapViewport();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initControls);
  } else { initControls(); }

  // ─── Minimap ───────────────────────────────────────
  let _svgNatW = 0, _svgNatH = 0;
  let _mmDrawX = 0, _mmDrawY = 0, _mmDrawW = 0, _mmDrawH = 0;

  function updateMinimap() {
    const container = document.getElementById('diagram-container');
    const svg = container.querySelector('svg');
    const canvas = document.getElementById('minimap-canvas');
    if (!svg || !canvas) return;

    // Get the SVG's actual content dimensions
    // Use getBBox for the true content size, or fallback to viewBox/attributes
    try {
      const bbox = svg.getBBox();
      _svgNatW = bbox.width + bbox.x;
      _svgNatH = bbox.height + bbox.y;
    } catch(e) {
      // Fallback: use the rendered size divided by current zoom
      const rect = svg.getBoundingClientRect();
      _svgNatW = rect.width / _zoom;
      _svgNatH = rect.height / _zoom;
    }

    if (_svgNatW <= 0 || _svgNatH <= 0) return;

    const mmW = 200, mmH = 140;
    canvas.width = mmW; canvas.height = mmH;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, mmW, mmH);

    // Render SVG thumbnail to canvas
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(mmW / _svgNatW, mmH / _svgNatH) * 0.9;
      _mmDrawW = _svgNatW * scale;
      _mmDrawH = _svgNatH * scale;
      _mmDrawX = (mmW - _mmDrawW) / 2;
      _mmDrawY = (mmH - _mmDrawH) / 2;
      ctx.drawImage(img, _mmDrawX, _mmDrawY, _mmDrawW, _mmDrawH);
      URL.revokeObjectURL(url);
      updateMinimapViewport();
    };
    img.src = url;
  }

  function updateMinimapViewport() {
    const container = document.getElementById('diagram-container');
    const vp = document.getElementById('minimap-viewport');
    if (!vp || _svgNatW <= 0 || _mmDrawW <= 0) return;

    // Scale from SVG coords to minimap pixel coords
    const mmScale = _mmDrawW / _svgNatW;

    // Visible area in SVG space
    const visLeft = -_panX / _zoom;
    const visTop = -_panY / _zoom;
    const visW = container.clientWidth / _zoom;
    const visH = container.clientHeight / _zoom;

    // Map to minimap coords
    let vpL = _mmDrawX + visLeft * mmScale;
    let vpT = _mmDrawY + visTop * mmScale;
    let vpW = visW * mmScale;
    let vpH = visH * mmScale;

    // Clamp within minimap bounds
    vpL = Math.max(0, vpL);
    vpT = Math.max(0, vpT);
    vpW = Math.min(vpW, 200 - vpL);
    vpH = Math.min(vpH, 140 - vpT);

    vp.style.left = vpL + 'px';
    vp.style.top = vpT + 'px';
    vp.style.width = vpW + 'px';
    vp.style.height = vpH + 'px';
    vp.style.display = 'block';
  }

  function initMinimapDrag() {
    const vp = document.getElementById('minimap-viewport');
    const mmContainer = document.getElementById('minimap-container');
    if (!vp || !mmContainer) return;

    let dragging = false, sX, sY, startPanX, startPanY;

    vp.addEventListener('mousedown', e => {
      dragging = true; sX = e.clientX; sY = e.clientY;
      startPanX = _panX; startPanY = _panY;
      e.preventDefault(); e.stopPropagation();
    });

    document.addEventListener('mousemove', e => {
      if (!dragging || _mmDrawW <= 0) return;
      const mmScale = _mmDrawW / _svgNatW;
      // Mouse delta in minimap pixels → SVG delta → pan delta
      const dx = (e.clientX - sX) / mmScale * _zoom;
      const dy = (e.clientY - sY) / mmScale * _zoom;
      _panX = startPanX - dx;
      _panY = startPanY - dy;
      applyTransform(); updateMinimapViewport();
    });

    document.addEventListener('mouseup', () => { dragging = false; });

    mmContainer.addEventListener('click', e => {
      if (e.target === vp || _mmDrawW <= 0) return;
      const rect = mmContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const mmScale = _mmDrawW / _svgNatW;
      const container = document.getElementById('diagram-container');

      // Click point in SVG space
      const svgX = (clickX - _mmDrawX) / mmScale;
      const svgY = (clickY - _mmDrawY) / mmScale;
      // Center viewport on that point
      _panX = container.clientWidth / 2 - svgX * _zoom;
      _panY = container.clientHeight / 2 - svgY * _zoom;
      applyTransform(); updateMinimapViewport();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMinimapDrag);
  } else { setTimeout(initMinimapDrag, 100); }

  // ─── Render ────────────────────────────────────────
  async function render(diagramId) {
    const diagram = DataLoader.getDiagram(diagramId);
    if (!diagram) return;

    _currentDiagramId = diagramId;
    _zoom = 1; _panX = 0; _panY = 0;

    document.getElementById('diagram-title').textContent = diagram.name;
    document.getElementById('diagram-type-badge').textContent = diagram.type;
    document.getElementById('diagram-meta').textContent =
      `${diagram.element_count} elements · ${diagram.connector_count} connectors · ID: ${diagram.id}`;

    const parts = diagram.package_path.split('/');
    document.getElementById('breadcrumb').innerHTML = parts.map(p =>
      `<a href="javascript:void(0)">${p}</a>`
    ).join('<span class="sep">›</span>');

    const container = document.getElementById('diagram-container');
    container.innerHTML = '<div class="diagram-loading">Rendering diagram...</div>';
    container.style.cursor = 'grab';

    // Build node map
    _currentNodeMap = {};
    if (diagram.element_ids) {
      for (const elemId of diagram.element_ids) {
        const elem = DataLoader.getElement(elemId);
        if (elem) {
          const sName = elem.sanitized_name || sanitizeName(elem.name);
          if (!_currentNodeMap[sName]) _currentNodeMap[sName] = elem.id;
          _currentNodeMap['el_' + elem.id] = elem.id;
          _currentNodeMap['node_' + elem.id] = elem.id;
          _currentNodeMap['s_' + elem.id] = elem.id;
        }
      }
    }

    try {
      _renderCounter++;
      const { svg } = await mermaid.render('mermaid-' + _renderCounter, diagram.mermaid);
      container.innerHTML = `<div class="diagram-wrapper">${svg}</div>`;
      attachClickHandlers(container);
      document.getElementById('zoom-level').textContent = '100%';

      // Auto-fit large diagrams
      setTimeout(() => {
        const svgEl = container.querySelector('svg');
        if (svgEl) {
          const bx = svgEl.getBoundingClientRect();
          if (bx.width > container.clientWidth * 1.3 || bx.height > container.clientHeight * 1.3) {
            zoomFit();
          }
        }
        updateMinimap();
      }, 200);

    } catch (err) {
      container.innerHTML = `
        <div class="diagram-error">
          <strong>⚠️ Render error</strong><p>Raw mermaid source:</p>
          <pre>${escapeHtml(diagram.mermaid)}</pre>
        </div>`;
    }

    addToRecent(diagram);
  }

  // ─── Click handlers ────────────────────────────────
  function attachClickHandlers(container) {
    const svg = container.querySelector('svg');
    if (!svg) return;
    svg.removeAttribute('height');

    svg.querySelectorAll('.node, .actor, .classGroup').forEach(tryAttachClick);

    svg.querySelectorAll('g').forEach(g => {
      if (g.dataset.elementId) return;
      const textEl = g.querySelector('text, tspan');
      if (textEl) {
        const content = (textEl.textContent || '').trim();
        if (content.length > 1) {
          const sName = sanitizeName(content);
          if (_currentNodeMap[sName] !== undefined) {
            g.style.cursor = 'pointer';
            g.dataset.elementId = _currentNodeMap[sName];
            g.addEventListener('click', handleNodeClick);
          }
        }
      }
    });

    svg.querySelectorAll('g[id]').forEach(g => {
      if (!g.dataset.elementId) tryAttachClick(g);
    });
  }

  function tryAttachClick(node) {
    const cleanId = cleanMermaidNodeId(node.id || '');
    let elementId = _currentNodeMap[cleanId];

    if (elementId === undefined) {
      const texts = node.querySelectorAll('text, tspan, .nodeLabel, foreignObject span');
      for (const t of texts) {
        const text = (t.textContent || '').trim();
        if (text.length > 1) {
          const sName = sanitizeName(text);
          if (_currentNodeMap[sName] !== undefined) { elementId = _currentNodeMap[sName]; break; }
        }
      }
    }

    if (elementId !== undefined) {
      node.style.cursor = 'pointer';
      node.dataset.elementId = elementId;
      node.addEventListener('click', handleNodeClick);
    }
  }

  function handleNodeClick(e) {
    e.stopPropagation();
    const elemId = parseInt(this.dataset.elementId);
    if (!isNaN(elemId)) { highlightElement(elemId); if (_onElementClick) _onElementClick(elemId); }
  }

  function cleanMermaidNodeId(rawId) {
    if (!rawId) return '';
    for (const p of ['flowchart-', 'classId-', 'statediagram-', 'actor-']) {
      if (rawId.startsWith(p)) { rawId = rawId.substring(p.length); break; }
    }
    return rawId.replace(/-\d+$/, '');
  }

  function sanitizeName(name) {
    if (!name) return 'unnamed';
    let s = name.replace(/[^a-zA-Z0-9_]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    if (!s || /^\d/.test(s)) s = 'n_' + s;
    return s.substring(0, 60);
  }

  function highlightElement(eid) {
    clearHighlight();
    const n = document.querySelector(`#diagram-container [data-element-id="${eid}"]`);
    if (n) { n.classList.add('diagram-node--highlighted'); _highlightedNode = n; }
  }

  function clearHighlight() {
    if (_highlightedNode) { _highlightedNode.classList.remove('diagram-node--highlighted'); _highlightedNode = null; }
  }

  const RECENT_KEY = 'bsl_recent_history';
  const RECENT_TTL = 30 * 24 * 60 * 60 * 1000; // 30 days

  function loadRecentFromStorage() {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      const now = Date.now();
      _recentHistory = (data || []).filter(d => (now - (d.ts || 0)) < RECENT_TTL);
      renderRecentList();
    } catch(e) { /* ignore corrupt data */ }
  }

  function saveRecentToStorage() {
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(_recentHistory)); } catch(e) {}
  }

  function addToRecent(diagram) {
    _recentHistory = _recentHistory.filter(d => d.id !== diagram.id);
    _recentHistory.unshift({ id: diagram.id, name: diagram.name, type: diagram.type, ts: Date.now() });
    if (_recentHistory.length > 50) _recentHistory.pop();
    saveRecentToStorage();
    renderRecentList();
  }

  function renderRecentList() {
    const list = document.getElementById('recent-list');
    if (!list) return;
    list.innerHTML = _recentHistory.map(d => `
      <div class="recent-item" data-id="${d.id}">
        <div class="recent-item__name">${d.name}</div>
        <div class="recent-item__meta">${d.type}</div>
      </div>`).join('');
    list.querySelectorAll('.recent-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id);
        if (window._showDiagramFn) {
          window._showDiagramFn(id);
        } else {
          // Fallback if _showDiagramFn not yet available
          document.getElementById('welcome-screen').style.display = 'none';
          document.getElementById('diagram-header').style.display = 'block';
          document.getElementById('minimap-panel').style.display = 'flex';
          render(id);
        }
      });
    });
  }

  // Load recent on startup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadRecentFromStorage);
  } else { setTimeout(loadRecentFromStorage, 200); }

  function onElementClick(cb) { _onElementClick = cb; }
  function getCurrentDiagramId() { return _currentDiagramId; }
  function escapeHtml(t) { const d = document.createElement('div'); d.textContent = t; return d.innerHTML; }

  return { render, onElementClick, highlightElement, clearHighlight, getCurrentDiagramId,
           zoomIn, zoomOut, zoomReset, zoomFit };
})();
