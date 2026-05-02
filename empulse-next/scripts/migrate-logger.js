/**
 * Migration script: Replace console.error with structured logger in all API routes
 * Run: node scripts/migrate-logger.js
 */
const fs = require('fs');
const path = require('path');

const API_DIR = path.join(__dirname, '..', 'src', 'app', 'api');
const LOGGER_IMPORT = "import { logger } from '@/lib/logger'";

function walkDir(dir) {
    const files = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) files.push(...walkDir(full));
        else if (entry.name === 'route.ts') files.push(full);
    }
    return files;
}

let totalMigrated = 0;
let totalReplacements = 0;

for (const file of walkDir(API_DIR)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    if (!content.includes('console.error')) continue;
    
    const hasLoggerImport = content.includes("from '@/lib/logger'");
    
    // Replace console.error('message:', error) → logger.error('message', error)
    // Pattern: console.error('Some text:', error_var)
    const replaced = content.replace(
        /console\.error\((['"`])([^'"`]+)[:,]\s*\1,\s*(\w+)\)/g, 
        (match, quote, msg, errVar) => {
            return `logger.error(${quote}${msg.replace(/:\s*$/, '')}${quote}, ${errVar})`;
        }
    );
    
    if (replaced === content) {
        // Fallback: simpler pattern console.error('msg', var)
        content = content.replace(
            /console\.error\(([^)]+)\)/g,
            (match, args) => {
                // Parse the args to extract message and error variable
                const parts = args.split(',').map(s => s.trim());
                if (parts.length >= 2) {
                    return `logger.error(${parts[0].replace(/:\s*['"`]$/, "'")}, ${parts.slice(1).join(', ')})`;
                }
                return `logger.error(${args})`;
            }
        );
    } else {
        content = replaced;
    }
    
    // Add logger import if not present
    if (!hasLoggerImport && content.includes('logger.error')) {
        // Add after the last import line
        const lines = content.split('\n');
        let lastImportIdx = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trimStart().startsWith('import ')) lastImportIdx = i;
        }
        if (lastImportIdx >= 0) {
            lines.splice(lastImportIdx + 1, 0, LOGGER_IMPORT);
            content = lines.join('\n');
        }
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    const count = (content.match(/logger\.error/g) || []).length;
    console.log(`✅ ${path.relative(API_DIR, file)} — ${count} logger.error calls`);
    totalMigrated++;
    totalReplacements += count;
}

console.log(`\nDone: ${totalMigrated} files migrated, ${totalReplacements} total logger.error calls`);
