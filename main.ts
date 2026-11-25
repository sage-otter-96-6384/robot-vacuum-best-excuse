// The Robot Vacuum's Best Excuse.
//
// One line, at most 140 characters: the funniest excuse a robot
// vacuum gives for missing a spot. This program writes that line
// to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const excuse =
  "That corner was not missed. I gave it space to think about what it did. It knows what it did.";

// The gate: one line, 1 to 140 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...excuse].length;
if (size < 1 || size > 140) {
  throw new Error(`excuse must be 1 to 140 characters, got ${size}`);
}
if (excuse.trim() !== excuse || excuse.includes("\n")) {
  throw new Error("excuse must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
