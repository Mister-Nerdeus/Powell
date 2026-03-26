import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src');
const banned = ['demo', 'placeholder', 'fake ecommerce', 'this demo', 'site rebuild'];
const allowedFileFragments = ['Seo.tsx', 'types/site.ts'];
const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) scan(full);
  }
}

function scan(file) {
  if (allowedFileFragments.some((fragment) => file.includes(fragment))) return;
  const text = fs.readFileSync(file, 'utf8').toLowerCase();
  for (const term of banned) {
    if (text.includes(term)) failures.push(`${file}: found banned term "${term}"`);
  }
}

walk(root);

if (failures.length) {
  console.error('Content check failed:\n' + failures.join('\n'));
  process.exit(1);
}

console.log('Content check passed.');
