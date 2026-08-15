import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX_WIDTH = 2560;
const WEBP_QUALITY = 88;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (/\.png$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function compressImage(filePath) {
  const webpPath = filePath.replace(/\.png$/i, ".webp");
  const meta = await sharp(filePath).metadata();
  const pipeline = sharp(filePath).rotate();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline
    .webp({
      quality: WEBP_QUALITY,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(webpPath);

  const before = (await fs.stat(filePath)).size;
  const after = (await fs.stat(webpPath)).size;
  await fs.unlink(filePath);

  return {
    file: path.relative(process.cwd(), filePath),
    before,
    after,
    saved: before - after,
  };
}

const files = await walk(ROOT);
const results = [];

for (const file of files) {
  results.push(await compressImage(file));
}

const totalBefore = results.reduce((sum, item) => sum + item.before, 0);
const totalAfter = results.reduce((sum, item) => sum + item.after, 0);

for (const item of results) {
  console.log(
    `${item.file}: ${(item.before / 1024 / 1024).toFixed(2)}MB -> ${(item.after / 1024 / 1024).toFixed(2)}MB`,
  );
}

console.log(
  `Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
);
