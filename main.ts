import { mkdirSync, writeFileSync } from "node:fs";

// Six words exactly: a first payday spent on the one thing money rarely buys.
const entry = "First paycheck: I bought a heartbeat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
