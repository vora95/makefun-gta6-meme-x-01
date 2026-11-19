// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry is the X post itself: the house reads POST.json, fetches the post
// from X and hands its first picture plus its text to the judge. All this
// program has to do is hand POST.json over, byte for byte, in /output.
//
// Runs on Node 22, standard library only, no network, no clock, no files
// outside the repository, so two runs write identical bytes:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outDir, "POST.json");

// Read first so a missing or broken POST.json fails loudly instead of
// silently writing nothing. The url starts as a placeholder and is replaced
// with the real post address (https://x.com/<handle>/status/<id>) once the
// meme is posted, before the entry is submitted.
const raw = readFileSync(sourcePath, "utf8");
const parsed = JSON.parse(raw);
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string 'url' field");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, raw, "utf8");
