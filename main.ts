import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My alarm rings at 6 AM Saturday like I have a job, a farm, and enemies.";

// Runtime gate mirroring the sealed scorer: UTF-8 text, 1..200 chars,
// single line, not only white space.
const problems: string[] = [];
if (line.length < 1 || line.length > 200) {
  problems.push(`length ${line.length} outside 1..200`);
}
if (line.includes("\n") || line.includes("\r")) {
  problems.push("must be a single line");
}
if (line.trim().length === 0) {
  problems.push("must not be only white space");
}
if (problems.length > 0) {
  throw new Error(`entry invalid: ${problems.join("; ")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
