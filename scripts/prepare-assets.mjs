import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = "C:/Users/LAPPY HUB/Downloads";

const doctor = await sharp(path.join(src, "Professional Doctor Portrait in Modern Clinic.png"))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 84, effort: 5 })
  .toFile(path.join(root, "assets/doctor-portrait.webp"));

const room = await sharp(path.join(src, "Modern Physiotherapy Treatment Room.png"))
  .resize({ width: 1800, withoutEnlargement: true })
  .webp({ quality: 84, effort: 5 })
  .toFile(path.join(root, "assets/physiotherapy-treatment-room.webp"));

const base = await sharp(path.join(src, "Modern Physiotherapy Treatment Room.png"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.92 })
  .toBuffer();

const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#163B65" stop-opacity="0.98"/>
      <stop offset="0.62" stop-color="#163B65" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#163B65" stop-opacity="0.18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="72" y="86" width="54" height="54" rx="13" fill="#2563EB"/>
  <path d="M83 113h10l5-13 8 26 6-18 4 5h9" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="144" y="110" font-family="Segoe UI, Arial, sans-serif" font-size="25" font-weight="700" fill="#ffffff">R D Physiotherapy</text>
  <text x="144" y="138" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="500" fill="#bfdbfe">Clinic &amp; Rehab Centre</text>
  <text x="72" y="268" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">Move Better.</text>
  <text x="72" y="338" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">Recover Stronger.</text>
  <text x="72" y="408" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="700" fill="#8be0d4">Live Healthier.</text>
  <rect x="72" y="462" width="76" height="5" rx="2.5" fill="#2A9D8F"/>
  <text x="72" y="512" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="500" fill="#e2e8f0">Physiotherapy &amp; Rehabilitation Care · Varanasi</text>
  <text x="72" y="558" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="400" fill="#bfdbfe">Hyderabad Gate, Susuwahi · +91 91982 46238</text>
</svg>`);

await sharp(base)
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(root, "public/images/og-image.jpg"));

const iconSvg = Buffer.from(`<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="#2563EB"/>
  <path d="M38 94h22l10-30 18 60 13-42 9 12h32" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

await sharp(iconSvg).png().toFile(path.join(root, "app/apple-icon.png"));

console.log("doctor", `${doctor.width}x${doctor.height}`, `${Math.round(doctor.size / 1024)}KB`);
console.log("room", `${room.width}x${room.height}`, `${Math.round(room.size / 1024)}KB`);
console.log("OG image and Apple icon generated.");
