import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgUrl = 'https://www.eand.com.eg/portal/images/logo/etisalat_logo.svg';
// Output path in the public folder
const outPath = path.resolve('client', 'public', 'social-preview.png');

async function generate() {
  console.log('Downloading svg...');
  const res = await fetch(svgUrl);
  if (!res.ok) {
    console.error(`Failed to download svg: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const svgBuffer = await res.arrayBuffer();
  const svgBuf = Buffer.from(svgBuffer);

  // Resize logo to a width of 600 (safe for 1200x630 canvas)
  const logoResized = await sharp(svgBuf).resize({ width: 600, fit: 'contain' }).png().toBuffer();
  const { width: logoW, height: logoH } = await sharp(logoResized).metadata();

  const canvasW = 1200;
  const canvasH = 630;

  const left = Math.max(0, Math.floor((canvasW - (logoW ?? 600)) / 2));
  const top = Math.max(0, Math.floor((canvasH - (logoH ?? 200)) / 2));

  await sharp({ create: { width: canvasW, height: canvasH, channels: 4, background: '#ffffff' } })
    .composite([{ input: logoResized, left, top }])
    .png({ quality: 90 })
    .toFile(outPath);

  console.log(`Wrote social preview to ${outPath}`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
