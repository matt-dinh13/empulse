/**
 * Patch all Logical/Class/Object diagrams in catalog.json
 * to include element attributes using Mermaid colon syntax:
 *   ClassName : +type name
 * instead of curly brace blocks (which don't work with ["Label"] syntax in Mermaid 10).
 */
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');
const CATALOG_JSON = path.join(BASE, '_bsl_app', 'data', 'catalog.json');
const CATALOG_JS   = path.join(BASE, '_bsl_app', 'data', 'catalog.js');
const ELEMENTS_JSON = path.join(BASE, '_bsl_app', 'data', 'elements.json');

const MAX_ATTRS = 15;

function sanitizeName(name) {
    if (!name) return 'unnamed';
    let s = name.replace(/[^a-zA-Z0-9_]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    if (!s || /^\d/.test(s)) s = 'n_' + s;
    return s.substring(0, 60);
}

/**
 * Sanitize text for Mermaid class member (colon syntax).
 * Must not contain special chars that break parsing.
 */
function sanitizeMember(str) {
    if (!str) return '';
    return str
        .replace(/[{}]/g, '')
        .replace(/"/g, "'")
        .replace(/[<>]/g, '')
        .replace(/[~*$#]/g, '')
        .replace(/\(/g, '[')
        .replace(/\)/g, ']')
        .replace(/\r?\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Build member lines using colon syntax: ClassName : +type name
 */
function buildMemberLines(classId, element) {
    const attrs = element.attributes || [];
    if (attrs.length === 0) return [];
    
    const lines = [];
    const isEnum = element.type === 'Enumeration';
    const limit = Math.min(attrs.length, MAX_ATTRS);
    
    for (let i = 0; i < limit; i++) {
        const attr = attrs[i];
        const name = sanitizeMember(attr.name);
        if (!name) continue;
        
        if (isEnum) {
            lines.push(`    ${classId} : ${name}`);
        } else {
            const type = sanitizeMember(attr.type);
            if (type) {
                lines.push(`    ${classId} : +${type} ${name}`);
            } else {
                lines.push(`    ${classId} : +${name}`);
            }
        }
    }
    
    if (attrs.length > MAX_ATTRS) {
        lines.push(`    ${classId} : ...${attrs.length - MAX_ATTRS} more`);
    }
    
    return lines;
}

function patchDiagramMermaid(diagram, elementsDb) {
    const mermaid = diagram.mermaid;
    if (!mermaid || !mermaid.startsWith('classDiagram')) return null;
    
    // Build element lookup
    const elemBySanitized = {};
    for (const eid of (diagram.element_ids || [])) {
        const elem = elementsDb[String(eid)];
        if (elem) {
            const sname = sanitizeName(elem.name);
            elemBySanitized[sname] = elem;
        }
    }
    
    const lines = mermaid.split('\n');
    const outputLines = [];
    
    // First, strip any existing member lines from the previous patch attempt
    // (lines matching pattern: classId : +something or classId : name)
    // Also strip any { } blocks from previous attempt
    const classDefRegex = /^\s*class\s+(\w+)\[/;
    const memberRegex = /^\s+\w+ : /;
    const braceOpenRegex = /\{$/;
    const braceCloseRegex = /^\s*\}$/;
    
    let inBraceBlock = false;
    const cleanLines = [];
    for (const line of lines) {
        if (inBraceBlock) {
            if (braceCloseRegex.test(line)) {
                inBraceBlock = false;
            }
            continue;
        }
        
        // Check if class def ends with {
        if (classDefRegex.test(line) && braceOpenRegex.test(line.trim())) {
            // Strip the { from the end
            cleanLines.push(line.replace(/\s*\{$/, ''));
            inBraceBlock = true;
            continue;
        }
        
        // Skip member lines from previous colon-syntax attempts
        if (memberRegex.test(line)) continue;
        
        cleanLines.push(line);
    }
    
    // Now rebuild: insert member lines after each class definition
    const classDefRegex2 = /^\s*class\s+(\w+)\[/;
    
    for (const line of cleanLines) {
        outputLines.push(line);
        
        const match = line.match(classDefRegex2);
        if (match) {
            const classId = match[1];
            const elem = elemBySanitized[classId];
            if (elem) {
                const memberLines = buildMemberLines(classId, elem);
                for (const ml of memberLines) {
                    outputLines.push(ml);
                }
            }
        }
    }
    
    return outputLines.join('\n');
}

function main() {
    console.log('Loading data files...');
    const catalog = JSON.parse(fs.readFileSync(CATALOG_JSON, 'utf8'));
    const elemData = JSON.parse(fs.readFileSync(ELEMENTS_JSON, 'utf8'));
    const elementsDb = elemData.elements;
    
    const targetTypes = new Set(['Logical', 'Class', 'Object']);
    let patched = 0;
    let skipped = 0;
    let noChange = 0;
    let errors = 0;
    
    for (const diag of catalog.diagrams) {
        if (!targetTypes.has(diag.type)) continue;
        
        try {
            const newMermaid = patchDiagramMermaid(diag, elementsDb);
            if (newMermaid && newMermaid !== diag.mermaid) {
                diag.mermaid = newMermaid;
                patched++;
            } else if (newMermaid === diag.mermaid) {
                noChange++;
            } else {
                skipped++;
            }
        } catch (err) {
            errors++;
            if (errors <= 5) {
                console.error(`  ERROR on "${diag.name}" (ID=${diag.id}): ${err.message}`);
            }
        }
    }
    
    console.log(`\nResults:`);
    console.log(`  Patched: ${patched}`);
    console.log(`  No change: ${noChange}`);
    console.log(`  Skipped: ${skipped}`);
    console.log(`  Errors: ${errors}`);
    
    console.log('\nSaving...');
    fs.writeFileSync(CATALOG_JSON, JSON.stringify(catalog));
    fs.writeFileSync(CATALOG_JS, 'window.BSL_CATALOG = ' + JSON.stringify(catalog));
    console.log('Done!');
    
    // Verify
    const testDiag = catalog.diagrams.find(d => d.name === 'Document Type - Logical Data Model' && d.id === 164333);
    if (testDiag) {
        console.log('\n=== VERIFY ===');
        console.log(testDiag.mermaid.substring(0, 1500));
    }
}

main();
