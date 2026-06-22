/**
 * BSL Explorer — Task 4: Package Tree
 * Renders a collapsible tree of packages with diagram leaves.
 */
window.PackageTree = (function() {
  let _onSelect = null;
  let _activeElement = null;

  const DIAGRAM_ICONS = {
    'Custom': '📋', 'Logical': '🔷', 'Class': '🔷', 'Object': '🔶',
    'Sequence': '↔️', 'Use Case': '👤', 'Activity': '⚡', 'Statechart': '🔄',
    'Component': '📦', 'Package': '📁', 'Analysis': '🔍', 'CompositeStructure': '🧩'
  };

  function init() {
    const container = document.getElementById('package-tree');
    const tree = DataLoader.getPackageTree();
    const counts = DataLoader.getPackageDiagramCounts();
    container.innerHTML = '';
    for (const node of tree) {
      container.appendChild(renderPackageNode(node, counts));
    }
  }

  function countDiagramsRecursive(node, counts) {
    let total = parseInt(counts[String(node.id)] || 0);
    for (const child of (node.children || [])) {
      total += countDiagramsRecursive(child, counts);
    }
    return total;
  }

  function renderPackageNode(node, counts) {
    const diagrams = DataLoader.getDiagramsByPackage(node.id);
    const totalCount = countDiagramsRecursive(node, counts);
    const hasChildren = (node.children && node.children.length > 0) || diagrams.length > 0;

    const el = document.createElement('div');
    el.className = 'pkg-node';
    el.dataset.packageId = node.id;

    const header = document.createElement('div');
    header.className = 'pkg-node__header';
    header.innerHTML = `
      <span class="pkg-node__toggle">${hasChildren ? '▶' : ''}</span>
      <span class="pkg-node__icon">📁</span>
      <span class="pkg-node__name" title="${node.name}">${node.name}</span>
      ${totalCount > 0 ? `<span class="pkg-node__count">${totalCount}</span>` : ''}
    `;
    el.appendChild(header);

    if (hasChildren) {
      const children = document.createElement('div');
      children.className = 'pkg-node__children';

      for (const child of (node.children || [])) {
        children.appendChild(renderPackageNode(child, counts));
      }

      for (const diag of diagrams) {
        const diagEl = document.createElement('div');
        diagEl.className = 'pkg-diagram';
        diagEl.dataset.diagramId = diag.id;
        const icon = DIAGRAM_ICONS[diag.type] || '📄';
        diagEl.innerHTML = `
          <span class="pkg-diagram__icon">${icon}</span>
          <span class="pkg-diagram__name" title="${diag.name}">${diag.name}</span>
        `;
        diagEl.addEventListener('click', (e) => {
          e.stopPropagation();
          setActive(diagEl);
          if (_onSelect) _onSelect(diag.id);
        });
        children.appendChild(diagEl);
      }

      el.appendChild(children);

      header.addEventListener('click', () => {
        el.classList.toggle('pkg-node--expanded');
      });
    }

    return el;
  }

  function setActive(element) {
    if (_activeElement) _activeElement.classList.remove('pkg-diagram--active');
    element.classList.add('pkg-diagram--active');
    _activeElement = element;
  }

  /**
   * Reveal a diagram in the tree: expand all parent packages,
   * highlight the diagram, and scroll it into view.
   */
  function revealDiagram(diagramId) {
    const container = document.getElementById('package-tree');
    const diagEl = container.querySelector(`.pkg-diagram[data-diagram-id="${diagramId}"]`);
    if (!diagEl) return;

    // Walk up DOM and expand all ancestor pkg-nodes
    let parent = diagEl.parentElement;
    while (parent && parent !== container) {
      if (parent.classList.contains('pkg-node')) {
        parent.classList.add('pkg-node--expanded');
      }
      parent = parent.parentElement;
    }

    // Highlight and scroll
    setActive(diagEl);
    setTimeout(() => {
      diagEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  function onDiagramSelect(callback) { _onSelect = callback; }

  function filter(term) {
    const container = document.getElementById('package-tree');
    const allDiagrams = container.querySelectorAll('.pkg-diagram');
    const allNodes = container.querySelectorAll('.pkg-node');
    
    if (!term) {
      allDiagrams.forEach(d => d.style.display = '');
      allNodes.forEach(n => n.style.display = '');
      return;
    }

    const q = term.toLowerCase();
    allDiagrams.forEach(d => {
      const name = d.querySelector('.pkg-diagram__name').textContent.toLowerCase();
      d.style.display = name.includes(q) ? '' : 'none';
    });
  }

  return { init, revealDiagram, onDiagramSelect, filter };
})();
