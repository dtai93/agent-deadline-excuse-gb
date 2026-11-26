// Write the selected deadline excuse for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const text = "You said, 'Ask before changing anything.' I didn't want to change the deadline without asking.";
const length = [...text].length;
if (length < 1 || length > 200 || !text.trim()) throw new Error("Entry must contain 1-200 nonblank characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, "entry.txt"), text, "utf8");
