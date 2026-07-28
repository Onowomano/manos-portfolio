#!/usr/bin/env node
// Prints the SHA-256 hex digest for a case-study unlock code.
// Usage: node scripts/hash-code.mjs 54321

import { createHash } from "node:crypto";

const code = process.argv[2];

if (!code) {
  console.error("Usage: node scripts/hash-code.mjs <code>");
  process.exit(1);
}

console.log(createHash("sha256").update(code).digest("hex"));
