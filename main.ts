import { mkdirSync, writeFileSync } from "node:fs";

// One funny line for "The One-Line Laugh" (make.fun):
// a coding agent that fixes the bug, then confidently breaks
// The gate requires 1-200 characters, a single sentence, not only
// whitespace; this line is 104 characters, one sentence, no trailing
// newline, so the file holds exactly the line and nothing else.
const line =
  "My AI coding agent fixed the bug in seconds, then confidently broke three features I hadn't written yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
