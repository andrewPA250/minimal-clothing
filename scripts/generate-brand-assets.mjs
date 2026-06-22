// One-off generation script for favicon + Open Graph image assets.
// Run with: node scripts/generate-brand-assets.mjs
// Re-run any time the brand mark or featured OG product image changes.
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const INK = "#0A0A0A";
const PAPER = "#FAFAFA";
const MUTED = "#6E6E6E";
const FONT = "Arial, Helvetica, sans-serif";

function monogramSvg(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="${PAPER}"/>
    <rect x="4" y="4" width="92" height="92" fill="none" stroke="${INK}" stroke-width="4"/>
    <text x="50" y="64" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="46" fill="${INK}">M.</text>
  </svg>`;
}

async function generateIcon(size, filename) {
  const outPath = path.join(publicDir, filename);
  await sharp(Buffer.from(monogramSvg(size))).resize(size, size).png().toFile(outPath);
  console.log(`Wrote ${filename} (${size}x${size})`);
  return outPath;
}

async function generateFavicons() {
  const png16 = await generateIcon(16, "favicon-16x16.png");
  const png32 = await generateIcon(32, "favicon-32x32.png");
  await generateIcon(180, "apple-touch-icon.png");

  const icoBuffer = await pngToIco([png16, png32]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("Wrote favicon.ico (16x16 + 32x32)");
}

const WIDTH = 1200;
const HEIGHT = 630;

// Brand-led OG image: white field, large wordmark + tagline, a smaller
// contained editorial product shot off to one side. Lots of negative
// space; the product supports the brand, it doesn't fill the frame.
async function generateOgImage(outFile) {
  const productPath = path.join(publicDir, "products/virtus-tee/back-black.jpg");

  const imgW = 380;
  const imgH = 460;
  const imgLeft = WIDTH - imgW - 90;
  const imgTop = Math.round((HEIGHT - imgH) / 2);

  // Tight crop on the garment itself (the source flat-lay has wide margins).
  const { width: srcW, height: srcH } = await sharp(productPath).metadata();
  const cropSize = Math.round(srcW * 0.62);
  const cropLeft = Math.round((srcW - cropSize) / 2);
  const cropTop = Math.round(srcH * 0.1);

  const productBuffer = await sharp(productPath)
    .extract({ left: cropLeft, top: cropTop, width: cropSize, height: Math.round(cropSize * (imgH / imgW)) })
    .resize(imgW, imgH, { fit: "cover" })
    .toBuffer();

  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>
    <text x="90" y="280" font-family="${FONT}" font-weight="800" font-size="84" letter-spacing="1" fill="${INK}">MINIMAL.</text>
    <text x="90" y="324" font-family="${FONT}" font-weight="600" font-size="24" letter-spacing="7" fill="${MUTED}">SIMPLICITY WINS.</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: productBuffer, left: imgLeft, top: imgTop }])
    .jpeg({ quality: 92 })
    .toFile(path.join(publicDir, outFile));
  console.log(`Wrote ${outFile} (${WIDTH}x${HEIGHT})`);
}

await generateFavicons();
await generateOgImage("og-image.jpg");
console.log("Done.");
