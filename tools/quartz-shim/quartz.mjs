#!/usr/bin/env node
// Compatibility shim.
//
// This site migrated off Quartz to Vite + React, but some environments
// (e.g. the Vercel project's configured Build Command) still invoke
// `npx quartz build`. Rather than depend on the real Quartz package, this
// local shim registers a `quartz` bin that forwards any invocation to the
// real build: `npm run build` -> `vite-react-ssg build`.
import { spawnSync } from "node:child_process"

const npm = process.platform === "win32" ? "npm.cmd" : "npm"
const result = spawnSync(npm, ["run", "build"], { stdio: "inherit" })

if (result.error) {
  console.error(result.error)
  process.exit(1)
}
process.exit(result.status ?? 0)
