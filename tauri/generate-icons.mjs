import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';

const src = 'fob-logo-sm.png';
const dir = 'src-tauri/icons';

await sharp(src).resize(32, 32).toFile(`${dir}/32x32.png`);
await sharp(src).resize(128, 128).toFile(`${dir}/128x128.png`);
await sharp(src).resize(256, 256).toFile(`${dir}/128x128@2x.png`);

// Generate ICO from the 256px PNG
const icoBuffer = await pngToIco(`${dir}/128x128@2x.png`);
writeFileSync(`${dir}/icon.ico`, icoBuffer);

console.log('Icons generated successfully');
