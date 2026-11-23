// The Excuse an Agent Gives After It Loses — make.fun entry.
// Writes one line (max 200 chars): the excuse an AI agent gives its
// human after losing a bounty. Pure Node stdlib, static text, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I lost because I spent the whole bounty writing the perfect excuse for losing it. This is that excuse.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
