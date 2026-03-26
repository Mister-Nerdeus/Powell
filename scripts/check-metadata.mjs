import fs from 'node:fs';
import path from 'node:path';

const pagesDir = path.resolve('src/pages');
const pageFiles = fs.readdirSync(pagesDir).filter((name) => name.endsWith('.tsx'));
const failures = [];

for (const file of pageFiles) {
  const text = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  if (!text.includes('<Seo')) failures.push(`${file}: missing <Seo />`);
  if (!/title=\"[^\"]+\"/.test(text)) failures.push(`${file}: missing title prop`);
  if (!/description=\"[^\"]+\"/.test(text)) failures.push(`${file}: missing description prop`);
}

if (failures.length) {
  console.error('Metadata check failed:\n' + failures.join('\n'));
  process.exit(1);
}

console.log(`Metadata check passed for ${pageFiles.length} page files.`);
