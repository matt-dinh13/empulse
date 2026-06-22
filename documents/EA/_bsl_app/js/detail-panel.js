/**
 * BSL Explorer — Task 6: Detail Panel
 * Shows element details: notes, attributes, operations, tagged values, appears-in.
 */
window.DetailPanel = (function() {
  let _onNavigate = null;
  let _impactHistory = [];
  let _currentDepth = 2;

  const TYPE_ICONS = {
    'Class': '🔷', 'Interface': '🔶', 'Enumeration': '📝', 'DataType': '📐',
    'Actor': '👤', 'UseCase': '🎯', 'Component': '📦', 'Package': '📁',
    'Activity': '⚡', 'Action': '▶️', 'State': '🔄', 'StateNode': '⭕',
    'Decision': '🔀', 'Object': '🔸', 'Boundary': '🔲', 'Note': '📌',
    'GUIElement': '🖥️', 'Screen': '📱', 'Requirement': '📋',
    'Artifact': '📄', 'Node': '🖧', 'Port': '🔌', 'Constraint': '🔒'
  };

  async function show(elementId) {
    const elem = DataLoader.getElement(elementId);
    if (!elem) {
      console.warn('Element not found:', elementId);
      return;
    }

    const panel = document.getElementById('app-detail');
    panel.classList.remove('hidden');

    // Header
    const icon = TYPE_ICONS[elem.type] || '📄';
    document.getElementById('detail-type-icon').textContent = icon;
    document.getElementById('detail-title').textContent = elem.name || 'Unnamed';

    // Type
    const typeSection = document.getElementById('detail-type');
    const typeClass = getTypeClass(elem.type);
    const isBm = DataLoader.isBookmarked('element', elementId);
    typeSection.innerHTML = `
      <span class="detail-type-badge ${typeClass}">${elem.type}</span>
      ${elem.stereotype ? `<span class="detail-type-badge" style="margin-left:4px">«${elem.stereotype}»</span>` : ''}
      <button class="bm-star-btn ${isBm ? 'bm-star-btn--active' : ''}" id="bm-star-element" title="${isBm ? 'Remove bookmark' : 'Add bookmark'}">${isBm ? '★' : '☆'}</button>
    `;
    // Bind star toggle
    const starEl = document.getElementById('bm-star-element');
    if (starEl) {
      starEl.addEventListener('click', () => {
        const added = DataLoader.toggleBookmark('element', elementId, elem.name, elem.type);
        starEl.textContent = added ? '★' : '☆';
        starEl.classList.toggle('bm-star-btn--active', added);
        starEl.title = added ? 'Remove bookmark' : 'Add bookmark';
      });
    }

    // Stereotype (separate section if has extra info)
    document.getElementById('detail-stereotype').innerHTML = '';

    // Note
    const noteSection = document.getElementById('detail-note');
    if (elem.note_html && elem.note_html.trim()) {
      noteSection.innerHTML = `
        <div class="detail-section__title">Notes <button class="copy-icon-btn" data-copy-target="note-body" title="Copy to clipboard">⧉</button></div>
        <div class="detail-section__body" id="note-body">${sanitizeHtml(elem.note_html)}</div>
      `;
    } else if (elem.note_text && elem.note_text.trim()) {
      noteSection.innerHTML = `
        <div class="detail-section__title">Notes <button class="copy-icon-btn" data-copy-target="note-body" title="Copy to clipboard">⧉</button></div>
        <div class="detail-section__body" id="note-body"><p>${escapeHtml(elem.note_text)}</p></div>
      `;
    } else {
      noteSection.innerHTML = `
        <div class="detail-section__title">Notes</div>
        <div class="detail-section__body" style="color:var(--text-muted);font-style:italic">No notes available</div>
      `;
    }
    // Bind copy button for notes
    noteSection.querySelectorAll('.copy-icon-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = btn.dataset.copyTarget;
        const el = document.getElementById(targetId);
        if (el) _copyToClipboard(el.innerText, btn);
      });
    });

    // Attributes
    const attrSection = document.getElementById('detail-attributes');
    if (elem.attributes && elem.attributes.length > 0) {
      attrSection.innerHTML = `
        <div class="detail-section__title">Attributes (${elem.attributes.length})</div>
        <table class="detail-attr-table">
          <thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            ${elem.attributes.map(a => `
              <tr>
                <td class="attr-name">${escapeHtml(a.name)}</td>
                <td class="attr-type">${escapeHtml(a.type)}</td>
                <td>${escapeHtml(a.default || '-')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      attrSection.innerHTML = '';
    }

    // Operations
    const opsSection = document.getElementById('detail-operations');
    if (elem.operations && elem.operations.length > 0) {
      opsSection.innerHTML = `
        <div class="detail-section__title">Operations (${elem.operations.length})</div>
        <table class="detail-attr-table">
          <thead><tr><th>Name</th><th>Return</th><th>Stereotype</th></tr></thead>
          <tbody>
            ${elem.operations.map(o => `
              <tr>
                <td class="attr-name">${escapeHtml(o.name)}</td>
                <td class="attr-type">${escapeHtml(o.return_type || 'void')}</td>
                <td>${escapeHtml(o.stereotype || '-')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      opsSection.innerHTML = '';
    }

    // Tagged values
    const tagSection = document.getElementById('detail-tagged-values');
    if (elem.tagged_values && Object.keys(elem.tagged_values).length > 0) {
      const entries = Object.entries(elem.tagged_values)
        .filter(([k, v]) => v && v.trim())
        .slice(0, 30);
      if (entries.length > 0) {
        tagSection.innerHTML = `
          <div class="detail-section__title">Tagged Values (${entries.length})</div>
          ${entries.map(([k, v]) => `
            <div class="detail-tag">
              <span class="detail-tag__key">${escapeHtml(k)}</span>
              <span class="detail-tag__val">${escapeHtml(v)}</span>
            </div>
          `).join('')}
        `;
      } else {
        tagSection.innerHTML = '';
      }
    } else {
      tagSection.innerHTML = '';
    }

    // Scenarios (UseCase basic path, alternate flows, exceptions)
    const scenarioSection = document.getElementById('detail-scenarios');
    const scenarios = DataLoader.getScenarios(elementId);
    if (scenarios.length > 0) {
      // Sort: Basic Path first, then Alternate by order, then Exception
      const typeOrder = {'Basic Path': 0, 'Alternate': 1, 'Exception': 2};
      scenarios.sort((a, b) => (typeOrder[a.type] || 1) - (typeOrder[b.type] || 1) || (a.order - b.order));

      const typeIcons = {'Basic Path': '🟢', 'Alternate': '🔀', 'Exception': '🔴'};

      const parentName = elem.name || 'Element';
      scenarioSection.innerHTML = `
        <div class="detail-section__title">Scenarios (${scenarios.length})</div>
        ${scenarios.map((s, i) => {
          const copyTitle = parentName + ' > ' + s.name + (s.name !== s.type ? ' [' + s.type + ']' : '');
          return `
          <div class="scenario-item">
            <div class="scenario-header" data-idx="${i}">
              <span class="scenario-toggle">▸</span>
              <span>${typeIcons[s.type] || '📋'}</span>
              <span class="scenario-name">${escapeHtml(s.name)}</span>
              <span class="scenario-type-badge">${s.type}</span>
              ${s.steps ? `<button class="copy-icon-btn copy-icon-btn--inline" data-copy-scenario="${i}" data-copy-title="${escapeHtml(copyTitle)}" title="Copy steps">⧉</button>` : ''}
            </div>
            <div class="scenario-body" id="scenario-body-${i}" style="display:none">
              ${s.steps ? `<div class="scenario-steps">${escapeHtml(s.steps)}</div>` : '<em style="color:var(--text-muted)">No steps defined</em>'}
            </div>
          </div>
        `}).join('')}
      `;

      // Toggle expand/collapse
      scenarioSection.querySelectorAll('.scenario-header').forEach(hdr => {
        hdr.addEventListener('click', (e) => {
          if (e.target.closest('.copy-icon-btn')) return; // Don't toggle when clicking copy
          const idx = hdr.dataset.idx;
          const body = document.getElementById('scenario-body-' + idx);
          const toggle = hdr.querySelector('.scenario-toggle');
          if (body.style.display === 'none') {
            body.style.display = 'block';
            toggle.textContent = '▾';
          } else {
            body.style.display = 'none';
            toggle.textContent = '▸';
          }
        });
      });

      // Bind copy buttons for scenarios
      scenarioSection.querySelectorAll('.copy-icon-btn[data-copy-scenario]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = btn.dataset.copyScenario;
          const title = btn.dataset.copyTitle || '';
          const body = document.getElementById('scenario-body-' + idx);
          if (body) {
            const text = title ? title + '\n' + body.innerText : body.innerText;
            _copyToClipboard(text, btn);
          }
        });
      });
    } else {
      scenarioSection.innerHTML = '';
    }

    // Appears in diagrams
    const appearsSection = document.getElementById('detail-appears-in');
    const diagrams = DataLoader.getDiagramsForElement(elementId);
    if (diagrams.length > 0) {
      const current = DiagramRenderer.getCurrentDiagramId();
      appearsSection.innerHTML = `
        <div class="detail-section__title">Appears in (${diagrams.length} diagrams)</div>
        ${diagrams.map(d => `
          <div class="detail-appears-item ${d.id === current ? 'pkg-diagram--active' : ''}" data-diagram-id="${d.id}">
            <span class="detail-appears-item__icon">📊</span>
            <span class="detail-appears-item__name">${escapeHtml(d.name)}</span>
            <span class="detail-appears-item__type">${d.type}</span>
          </div>
        `).join('')}
      `;

      // Attach navigation handlers
      appearsSection.querySelectorAll('.detail-appears-item').forEach(item => {
        item.addEventListener('click', () => {
          const diagId = parseInt(item.dataset.diagramId);
          if (_onNavigate) _onNavigate(diagId);
        });
      });
    } else {
      appearsSection.innerHTML = '';
    }

    // Impact Analysis Graph — button opens full-screen modal
    const impactSection = document.getElementById('detail-impact');
    const graph = DataLoader.getImpactGraph(elementId, 2);
    if (graph.nodes.length > 1) {
      impactSection.innerHTML = `
        <div class="detail-section__title">🔗 Impact Analysis</div>
        <button class="impact-open-btn" id="impact-open-btn">
          <span>🔗</span>
          View Impact Graph (${graph.nodes.length} elements, ${graph.edges.length} relations)
        </button>
      `;
      document.getElementById('impact-open-btn').addEventListener('click', () => {
        _openImpactModal(elementId, graph);
      });
    } else {
      impactSection.innerHTML = '';
    }

    // Annotations (localStorage-backed)
    _renderAnnotations(elementId);
  }

  function _renderAnnotations(elementId) {
    const section = document.getElementById('detail-annotations');
    const annos = DataLoader.getAnnotations(elementId);
    const TAG_COLORS = {
      'needs review': 'var(--orange)', 'outdated': 'var(--red)',
      'blocked': 'var(--red)', 'question': 'var(--accent)',
      'approved': 'var(--green)', 'important': 'var(--purple)'
    };

    section.innerHTML = `
      <div class="detail-section__title">💬 Annotations (${annos.length})</div>
      <div class="anno-list">
        ${annos.map(a => `
          <div class="anno-item" data-anno-id="${a.id}">
            <div class="anno-item__header">
              ${a.tag ? `<span class="anno-tag" style="color:${TAG_COLORS[a.tag] || 'var(--text-muted)'}">${escapeHtml(a.tag)}</span>` : ''}
              <span class="anno-time">${new Date(a.time).toLocaleDateString()}</span>
              <button class="anno-delete" data-anno-id="${a.id}" title="Delete">✕</button>
            </div>
            <div class="anno-text">${escapeHtml(a.text)}</div>
          </div>
        `).join('')}
      </div>
      <div class="anno-form">
        <textarea id="anno-input" placeholder="Add annotation..." rows="2"></textarea>
        <div class="anno-form__actions">
          <select id="anno-tag">
            <option value="">No tag</option>
            <option value="needs review">🟡 Needs Review</option>
            <option value="outdated">🔴 Outdated</option>
            <option value="blocked">🚫 Blocked</option>
            <option value="question">❓ Question</option>
            <option value="approved">✅ Approved</option>
            <option value="important">⭐ Important</option>
          </select>
          <button id="anno-submit" class="anno-submit">Add</button>
        </div>
      </div>
    `;

    // Submit annotation
    document.getElementById('anno-submit').addEventListener('click', () => {
      const text = document.getElementById('anno-input').value.trim();
      if (!text) return;
      const tag = document.getElementById('anno-tag').value;
      DataLoader.saveAnnotation(elementId, text, tag);
      _renderAnnotations(elementId);
    });

    // Delete annotations
    section.querySelectorAll('.anno-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const annoId = parseInt(btn.dataset.annoId);
        DataLoader.deleteAnnotation(elementId, annoId);
        _renderAnnotations(elementId);
      });
    });
  }

  // ─── Impact Modal ─────────────────────────────────────────────
  async function _openImpactModal(rootId, graph) {
    const rootElem = DataLoader.getElement(rootId);
    // Build Mermaid source
    const ARROW_MAP = {
      'Dependency': '-.->',  'Realisation': '-.->',  'Generalization': '-->',
      'Association': '---',  'Composition': '-->',    'Aggregation': '-->',
      'UseCase': '-->',      'InformationFlow': '==>',
      'NoteLink': '-.->',    'Sequence': '-->',       'Assembly': '---',
    };
    const TYPE_SHAPE = {
      'Actor': (id, lbl) => `${id}(["👤 ${lbl}"])`,
      'UseCase': (id, lbl) => `${id}(["${lbl}"])`,
      'Requirement': (id, lbl) => `${id}{{"${lbl}"}}`,
      'Component': (id, lbl) => `${id}[["${lbl}"]]`,
      'Interface': (id, lbl) => `${id}(("${lbl}"))`,
      'Package': (id, lbl) => `${id}["📁 ${lbl}"]`,
      'Boundary': (id, lbl) => `${id}["🔲 ${lbl}"]`,
    };
    // Use purely numeric IDs to avoid all special char issues
    const nodeIdMap = {};
    const sanitizeLbl = (s) => (s || '')
      .replace(/[{}\[\]()#;|/\\]/g, ' ')
      .replace(/"/g, "'").replace(/</g, '‹').replace(/>/g, '›')
      .replace(/&/g, 'and').replace(/\s+/g, ' ').trim().substring(0, 50);

    let mm = 'graph LR\n';
    for (const n of graph.nodes) {
      const nid = 'el_' + n.id;
      nodeIdMap[n.id] = nid;
      const lbl = sanitizeLbl(n.name || n.type);
      const shapeFn = TYPE_SHAPE[n.type];
      mm += shapeFn ? `    ${shapeFn(nid, lbl)}\n` : `    ${nid}["${lbl}"]\n`;
      if (n.id === rootId) {
        mm += `    style ${nid} stroke:#4f8ff7,stroke-width:3px,fill:#2a3050\n`;
      } else if (n.depth === 2) {
        mm += `    style ${nid} opacity:0.6\n`;
      }
    }
    for (const e of graph.edges) {
      const from = nodeIdMap[e.from], to = nodeIdMap[e.to];
      if (!from || !to || from === to) continue;
      const arrow = ARROW_MAP[e.type] || '-->';
      let lbl = '';
      if (e.stereotype) lbl = `|«${sanitizeLbl(e.stereotype)}»|`;
      else if (e.name) lbl = `|${sanitizeLbl(e.name)}|`;
      else if (e.type && e.type !== 'Association') lbl = `|${e.type}|`;
      mm += `    ${from} ${arrow}${lbl} ${to}\n`;
    }

    // Create modal overlay
    let modal = document.getElementById('impact-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'impact-modal';
      modal.className = 'impact-modal';
      modal.innerHTML = `
        <div class="impact-modal__header">
          <div class="impact-modal__title">
            <button id="impact-back" class="impact-nav-btn" title="Go back" style="display:none">◀</button>
            <span>🔗</span>
            <span id="impact-modal-title">Impact Analysis</span>
          </div>
          <div class="impact-modal__controls">
            <label class="impact-depth-label">Depth:
              <select id="impact-depth" class="impact-depth-select">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
              </select>
            </label>
            <div class="impact-legend">
              <span class="impact-legend-item"><span style="color:var(--accent)">●</span> Selected</span>
              <span class="impact-legend-item">── Assoc</span>
              <span class="impact-legend-item">╌╌▸ Dep</span>
              <span class="impact-legend-item">══▸ Flow</span>
            </div>
            <button id="impact-modal-close" class="impact-modal__close" title="Close (Esc)">✕</button>
          </div>
        </div>
        <div id="impact-trail" class="impact-trail" style="display:none"></div>
        <div class="impact-modal__body" id="impact-modal-body"></div>
      `;
      document.body.appendChild(modal);

      // Close handlers
      document.getElementById('impact-modal-close').addEventListener('click', () => {
        modal.classList.remove('visible');
        _impactHistory = [];
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('visible')) {
          modal.classList.remove('visible');
          _impactHistory = [];
        }
      });

      // Back button
      document.getElementById('impact-back').addEventListener('click', () => {
        const prev = _impactHistory.pop();
        if (prev) {
          const prevGraph = DataLoader.getImpactGraph(prev.elementId, _currentDepth);
          _openImpactModal(prev.elementId, prevGraph);
        }
      });

      // Depth change
      document.getElementById('impact-depth').addEventListener('change', (e) => {
        _currentDepth = parseInt(e.target.value);
        // Re-render current graph with new depth
        const currentId = modal.dataset.currentId;
        if (currentId) {
          const newGraph = DataLoader.getImpactGraph(parseInt(currentId), _currentDepth);
          _openImpactModal(parseInt(currentId), newGraph);
        }
      });
    }

    // Store current element id
    modal.dataset.currentId = rootId;

    // Update back button visibility
    const backBtn = document.getElementById('impact-back');
    backBtn.style.display = _impactHistory.length > 0 ? 'inline-flex' : 'none';

    // Update breadcrumb trail
    const trail = document.getElementById('impact-trail');
    if (_impactHistory.length > 0) {
      const trailHtml = _impactHistory.map((h, i) => {
        const e = DataLoader.getElement(h.elementId);
        return `<span class="impact-trail__item" data-idx="${i}">${e ? e.name : 'Element'}</span>`;
      }).join(' <span class="impact-trail__sep">→</span> ');
      trail.innerHTML = trailHtml + ` <span class="impact-trail__sep">→</span> <span class="impact-trail__current">${rootElem ? rootElem.name : 'Current'}</span>`;
      trail.style.display = 'flex';

      // Make trail items clickable (jump back to that point)
      trail.querySelectorAll('.impact-trail__item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.dataset.idx);
          const target = _impactHistory[idx];
          _impactHistory = _impactHistory.slice(0, idx);
          const g = DataLoader.getImpactGraph(target.elementId, _currentDepth);
          _openImpactModal(target.elementId, g);
        });
      });
    } else {
      trail.style.display = 'none';
    }

    // Update depth selector
    document.getElementById('impact-depth').value = _currentDepth;

    // Update content
    document.getElementById('impact-modal-title').textContent =
      `Impact — ${rootElem ? rootElem.name : 'Element'} (${graph.nodes.length} elem, ${graph.edges.length} rel)`;
    const body = document.getElementById('impact-modal-body');
    body.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted)">Rendering graph...</div>';
    modal.classList.add('visible');

    // Render
    try {
      const renderResult = await mermaid.render('impact-mm-' + Date.now(), mm);
      body.innerHTML = `<div class="impact-modal__svg-wrap">${renderResult.svg}</div>`;

      // Make nodes clickable → follow the trail (re-center graph)
      body.querySelectorAll('.node').forEach(node => {
        node.style.cursor = 'pointer';
        node.title = 'Click: explore connections · Double-click: open in diagram';

        // Single click → follow trail (re-center on this node)
        node.addEventListener('click', () => {
          for (const [elemId, nid] of Object.entries(nodeIdMap)) {
            if (node.id && node.id.includes(nid)) {
              const clickedId = parseInt(elemId);
              if (clickedId === rootId) return; // Already centered here
              _impactHistory.push({ elementId: rootId });
              const newGraph = DataLoader.getImpactGraph(clickedId, _currentDepth);
              _openImpactModal(clickedId, newGraph);
              break;
            }
          }
        });

        // Double click → open in diagram (close modal, navigate)
        node.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          for (const [elemId, nid] of Object.entries(nodeIdMap)) {
            if (node.id && node.id.includes(nid)) {
              modal.classList.remove('visible');
              _impactHistory = [];
              show(parseInt(elemId));
              if (_onNavigate) {
                const diagrams = DataLoader.getDiagramsForElement(parseInt(elemId));
                if (diagrams.length > 0) _onNavigate(diagrams[0].id);
              }
              break;
            }
          }
        });
      });
    } catch (err) {
      body.innerHTML = `
        <div style="padding:20px">
          <div style="color:var(--red);margin-bottom:8px">⚠️ Graph render error</div>
          <pre style="font-size:11px;color:var(--text-muted);white-space:pre-wrap;max-height:200px;overflow:auto">${escapeHtml(err.message)}</pre>
          <details style="margin-top:12px"><summary style="cursor:pointer;color:var(--text-muted);font-size:11px">Show Mermaid Source</summary>
          <pre style="font-size:10px;color:var(--text-secondary);white-space:pre-wrap;max-height:300px;overflow:auto;margin-top:8px">${escapeHtml(mm)}</pre>
          </details>
        </div>`;
    }
  }

  function hide() {
    document.getElementById('app-detail').classList.add('hidden');
    DiagramRenderer.clearHighlight();
  }

  function isVisible() {
    return !document.getElementById('app-detail').classList.contains('hidden');
  }

  function onNavigate(callback) { _onNavigate = callback; }

  // ─── Helpers ──
  function _copyToClipboard(text, triggerBtn) {
    navigator.clipboard.writeText(text).then(() => {
      const orig = triggerBtn.textContent;
      triggerBtn.textContent = '✓';
      triggerBtn.classList.add('copy-icon-btn--success');
      setTimeout(() => {
        triggerBtn.textContent = orig;
        triggerBtn.classList.remove('copy-icon-btn--success');
      }, 1200);
    }).catch(() => {
      // Fallback for file:// protocol
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const orig = triggerBtn.textContent;
      triggerBtn.textContent = '✓';
      triggerBtn.classList.add('copy-icon-btn--success');
      setTimeout(() => {
        triggerBtn.textContent = orig;
        triggerBtn.classList.remove('copy-icon-btn--success');
      }, 1200);
    });
  }

  function getTypeClass(type) {
    if (['Class', 'Interface', 'DataType', 'Enumeration'].includes(type)) return 'detail-type-badge--class';
    if (type === 'Actor') return 'detail-type-badge--actor';
    if (type === 'UseCase') return 'detail-type-badge--usecase';
    if (['Component', 'Package'].includes(type)) return 'detail-type-badge--component';
    return 'detail-type-badge--class';
  }

  function sanitizeHtml(html) {
    // Allow safe tags, strip dangerous ones
    if (!html) return '';
    // Remove script tags
    let safe = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    // Remove event handlers
    safe = safe.replace(/\bon\w+\s*=\s*"[^"]*"/gi, '');
    safe = safe.replace(/\bon\w+\s*=\s*'[^']*'/gi, '');
    // Fix common EA HTML entities
    safe = safe.replace(/&gt;/g, '>').replace(/&lt;/g, '<');
    return safe;
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Close button
  document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('detail-close');
    if (closeBtn) closeBtn.addEventListener('click', hide);
  });

  return { show, hide, isVisible, onNavigate };
})();
