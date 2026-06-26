# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## What this is

A [Quartz 4](https://quartz.jzhao.xyz/) static site for the Magicar Motors racing team. Content lives in `content/` as Markdown files; the Quartz framework (in `quartz/`) handles build, theming, and plugins. The deployed site is a knowledge-base / race-log for the team.

## Commands

```bash
# Local dev server with hot reload (port 8080)
./dev.sh
# or equivalently:
npx quartz build --serve

# Production build (output goes to public/)
npx quartz build

# Sync content to GitHub (Quartz wrapper around git)
npx quartz sync
```

`dev.sh` calls `nvm use node` first, so use it if you have nvm managing Node versions.

## Content authoring

- All content lives in `content/*.md` and `content/images/`.
- The home page is `content/index.md`.
- Pages support standard Markdown, GitHub Flavored Markdown, and Obsidian Flavored Markdown (wikilinks `[[page]]`, callouts).
- Frontmatter fields: `title`, `tags`, `draft` (set `draft: true` to exclude from build), `date`, `aliases`, `description`.
- Images should be placed under `content/images/` and referenced with relative paths.
- The script `content/convert-all.sh` converts `.png` files to `.jpg` using ImageMagick's `convert`.

## Configuration

- **Site config** (`quartz.config.ts`): page title, analytics (Plausible), plugins (transformers → filters → emitters).
- **Layout** (`quartz.layout.ts`): which Quartz components appear in the left sidebar, right sidebar, before/after body, and footer.

The plugin pipeline is: **transformers** (parse/transform each page) → **filters** (e.g. remove drafts) → **emitters** (write output files, generate RSS, sitemap, tag pages, etc.).

## Key files

| File | Purpose |
|------|---------|
| `quartz.config.ts` | Site-wide configuration and plugin list |
| `quartz.layout.ts` | Page layout (components in sidebars, header, footer) |
| `content/index.md` | Home page |
| `quartz/` | Quartz framework source (TypeScript) — avoid editing unless customizing Quartz itself |