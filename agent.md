# Agent Notes (Portfolio Frontend)

## Stack
- React (Vite) + JavaScript (no TypeScript)
- Tailwind CSS (utility-first)
- Framer Motion (transitions + reveals)
- Lenis (smooth scrolling)
- Three.js via React Three Fiber + Drei (lightweight hero 3D)
- GSAP (used only for magnetic hover)
- Docker multi-stage build + nginx (production)

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`
- Docker (prod): `docker compose up --build` (serves `http://localhost:8080`)

## Project Layout
- App shell/layout: `src/App.jsx`, `src/layouts/Shell.jsx`
- Pages: `src/pages/Home.jsx`
- Sections: `src/sections/*`
- Reusable components: `src/components/*`
- Hooks: `src/hooks/*`
- Three/R3F: `src/three/*`
- Motion variants: `src/animations/motion.js`
- Data to edit (skills/projects/experience): `src/utils/data.js`
- Global styles (minimal): `src/styles/globals.css`

## Conventions
- Keep animations GPU-friendly (opacity/transform), avoid layout thrash.
- Prefer memoization (`React.memo`, `useMemo`) for heavy components (especially 3D).
- Use lazy loading for sections/canvas where useful.
- Tailwind-only styling (avoid extra CSS beyond global primitives).

