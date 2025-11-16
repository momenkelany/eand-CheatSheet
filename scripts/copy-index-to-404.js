import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// import.meta.url is ESM; convert it to a dirname-like path
const __filename = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(__filename);
const projectRoot = path.resolve(scriptDir, '..');
const distIndex = path.resolve(projectRoot, 'dist', 'public', 'index.html');
const dist404 = path.resolve(projectRoot, 'dist', 'public', '404.html');

if (!fs.existsSync(distIndex)) {
  console.error(`Could not find ${distIndex}. Make sure the client was built before running this script.`);
  process.exit(1);
}

// Copy index.html to 404.html for GitHub Pages SPA fallback
fs.copyFileSync(distIndex, dist404);
console.log('Copied index.html to 404.html for GitHub Pages SPA fallback.');
