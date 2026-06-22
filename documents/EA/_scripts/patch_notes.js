/**
 * patch_notes.js
 * Inject Note-type elements (EA sticky notes) into Mermaid diagrams.
 * Usage: node patch_notes.js [--dry-run] [--force]
 */

const fs = require('fs');
const path = require('path');

const CATALOG_PATH = path.join(__dirname, '..', '_bsl_app', 'data', 'catalog.json');
const ELEMENTS_PATH = path.join(__dirname, '..', '_bsl_app', 'data', 'elements.json');
const CATALOG_JS_PATH = path.join(__dirname, '..', '_bsl_app', 'data', 'catalog.js');

const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');

function sanitizeLabel(text) {
  if (!text) return '';
  return text
    .replace(/&/g, 'and')
    .replace(/"/g, "'")
    .replace(/</g, ' ')
    .replace(/>/g, ' ')
    .replace(/\[/g, ' ')
    .replace(/\]/g, ' ')
    .replace(/\(/g, ' ')
    .replace(/\)/g, ' ')
    .replace(/\{/g, ' ')
    .replace(/\}/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/#/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
}

function formatNoteLabel(noteText) {
  const lines = noteText.split('\n').map(l => sanitizeLabel(l.trim())).filter(l => l);
  return lines.join('<br/>');
}

function main() {
  console.log('Loading catalog.json...');
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
  console.log('Loading elements.json...');
  const elemData = JSON.parse(fs.readFileSync(ELEMENTS_PATH, 'utf8'));
  const elements = elemData.elements;

  const noteElements = {};
  let totalNotes = 0;
  for (const [id, e] of Object.entries(elements)) {
    if (e.type === 'Note') {
      noteElements[parseInt(id)] = e;
      totalNotes++;
    }
  }
  console.log(`Found ${totalNotes} Note elements in elements.json`);

  let diagramsPatched = 0;
  let notesInjected = 0;
  let diagramsAlreadyOk = 0;

  for (const diag of catalog.diagrams) {
    if (!diag.mermaid || !diag.element_ids) continue;

    const notesInDiag = [];
    for (const eid of diag.element_ids) {
      if (noteElements[eid]) {
        notesInDiag.push({ id: eid, elem: noteElements[eid] });
      }
    }
    if (notesInDiag.length === 0) continue;

    const alreadyHas = notesInDiag.every(n => diag.mermaid.includes(`note_${n.id}`));
    if (alreadyHas && !FORCE) {
      diagramsAlreadyOk++;
      continue;
    }

    // Force mode: strip existing note lines AND orphan garbage
    if (FORCE) {
      const cleanLines = diag.mermaid.split('\n').filter(l => {
        const trimmed = l.trim();
        if (!trimmed) return true;
        if (trimmed.startsWith('note_') || trimmed.startsWith('style note_')) return false;
        if (/^\\n/.test(trimmed)) return false;
        return true;
      });
      diag.mermaid = cleanLines.join('\n');
    }

    const mermaid = diag.mermaid;
    const lines = mermaid.split('\n');
    const firstLine = lines[0].trim().toLowerCase();
    const isFlowchart = firstLine.startsWith('graph ') || firstLine.startsWith('flowchart ');

    if (!isFlowchart) continue;

    const noteNodes = [];
    for (const { id, elem } of notesInDiag) {
      const noteText = elem.note_text || '';
      if (!noteText.trim()) continue;

      const nodeId = `note_${id}`;
      const label = formatNoteLabel(noteText);

      noteNodes.push(`    ${nodeId}>"${label}"]`);
      noteNodes.push(`    style ${nodeId} fill:#fffde7,stroke:#fbc02d,color:#333,stroke-width:1px`);
      notesInjected++;
    }

    if (noteNodes.length === 0) continue;

    const newLines = [...lines];
    newLines.splice(1, 0, ...noteNodes);
    diag.mermaid = newLines.join('\n');
    diagramsPatched++;
  }

  console.log(`\n── Results ──`);
  console.log(`  Diagrams patched: ${diagramsPatched}`);
  console.log(`  Notes injected:   ${notesInjected}`);
  console.log(`  Already OK:       ${diagramsAlreadyOk}`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] No files written.');
    const sample = catalog.diagrams.find(d => d.id === 161506);
    if (sample) {
      console.log('\n── Sample: Cancel contract after sign ──');
      const sampleLines = sample.mermaid.split('\n').slice(0, 8);
      sampleLines.forEach((l, i) => console.log(`L${i+1}: ${l.substring(0, 120)}`));
    }
    return;
  }

  console.log('\nWriting catalog.json...');
  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 0), 'utf8');
  console.log('Regenerating catalog.js...');
  const jsContent = `// Auto-generated from catalog.json\nwindow.BSL_CATALOG = ${JSON.stringify(catalog)};\n`;
  fs.writeFileSync(CATALOG_JS_PATH, jsContent, 'utf8');
  console.log('Done! Hard-refresh (Ctrl+Shift+R) to see changes.');
}

main();
