import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const imagesTs = fs.readFileSync(path.resolve('src/data/images.ts'), 'utf8');
const regex = /path:\s*'([^']+)'[\s\S]*?minWidth:\s*(\d+)[\s\S]*?minHeight:\s*(\d+)[\s\S]*?status:\s*'ready'/g;
const failures = [];

for (const match of imagesTs.matchAll(regex)) {
  const [, assetPath, minWidth, minHeight] = match;
  const diskPath = path.resolve('public', assetPath.replace(/^\/images\//, 'images/'));
  if (!fs.existsSync(diskPath)) {
    failures.push(`Missing asset for dimension check: ${assetPath}`);
    continue;
  }
  try {
    const output = execFileSync('python3', ['-c', `
from PIL import Image
im = Image.open(r'''${diskPath}''')
print(im.size[0], im.size[1])
`], { encoding: 'utf8' }).trim();
    const [width, height] = output.split(/\s+/).map(Number);
    if (width < Number(minWidth) || height < Number(minHeight)) {
      failures.push(`${assetPath} is ${width}x${height}, requires at least ${minWidth}x${minHeight}`);
    }
  } catch (error) {
    failures.push(`Could not inspect ${assetPath}: ${error}`);
  }
}

if (failures.length) {
  console.error('Image dimension check failed:\n' + failures.join('\n'));
  process.exit(1);
}

console.log('Image dimension check passed.');
