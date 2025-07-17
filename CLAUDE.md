# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite project for a "Cinque Queens Weekend" page - a trip planning website for a group visiting Cinque Terre, Italy. The project uses Tailwind CSS for styling and is configured for deployment to GitHub Pages.

## Key Architecture

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4.1 with PostCSS
- **Component Architecture**: The main app entry point is `src/App.tsx` which renders `src/CinqueQueensPage.tsx`
- **Deployment**: Configured for GitHub Pages with base path `/cinque-queens-weekend/` in vite.config.ts

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript check then Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build locally
npm run preview
```

## Important Notes

- The project uses shadcn/ui components (imports from `@/components/ui/`)
- Images and PDFs are expected in the public folder
- The base path `/cinque-queens-weekend/` is crucial for GitHub Pages deployment
- No test framework is currently configured
- TypeScript is configured with separate configs for app code (tsconfig.app.json) and node/build code (tsconfig.node.json)