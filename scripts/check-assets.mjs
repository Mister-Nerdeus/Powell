import fs from 'node:fs';
import path from 'node:path';

const imagesTs = fs.readFileSync(path.resolve('src/data/images.ts'), 'utf8');
const readyMatches = [...imagesTs.matchAll(/path:\s*'([^']+)'[\s\S]*?status:\s*'ready'/g)].map((m) => m[1]);
const failures = [];

for (const assetPath of readyMatches) {
  const diskPath = path.resolve('public', assetPath.replace(/^\/images\//, 'images/'));
  if (!fs.existsSync(diskPath)) failures.push(`Missing ready asset: ${assetPath}`);
}

if (failures.length) {
  console.error('Asset check failed:\n' + failures.join('\n'));
  process.exit(1);
}

console.log(`Asset check passed for ${readyMatches.length} ready assets.`);
