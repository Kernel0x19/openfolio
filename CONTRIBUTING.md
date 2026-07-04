# Contributing to OpenFolio

Thanks for your interest in contributing. This document covers everything you need to get started.

> OpenFolio is licensed under GNU GPL v3.0. By contributing, you agree that your code will be distributed under the same license. Anyone who modifies and deploys OpenFolio as a public service must also open source their changes — that is the GPL guarantee.

## Project Structure

```
openfolio/
├── web/
│   ├── client/          # React + Vite frontend
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   ├── context/
│   │   │   ├── layouts/
│   │   │   └── pages/
│   └── server/          # Express backend (coming soon)
└── README.md
```

## Getting Started

```bash
# Fork the repo, then clone your fork
git clone https://github.com/YOUR_USERNAME/openfolio.git
cd openfolio/web/client

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/description` | `feat/stats-section` |
| Bug fix | `fix/description` | `fix/navbar-flicker` |
| Design | `design/description` | `design/hero-section` |
| Docs | `docs/description` | `docs/readme-update` |
| Chore | `chore/description` | `chore/update-deps` |

All branches must be created off `dev`, not `main`.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add mutual fund tracking
fix: resolve navbar flicker on theme toggle
chore: update dependencies
docs: add contributing guide
```

Use `-m` for a short description and a second `-m` for details:
```bash
git commit -m "feat: add stats section" -m "shows active users, portfolios tracked, asset classes, open source stat"
```

## Pull Requests

1. Always branch off `dev`
2. Run `npm run build` locally before pushing — if it fails locally it fails on Cloudflare
3. Keep PRs focused — one feature or fix per PR
4. Write a clear PR description: what you changed and why
5. PRs targeting `main` directly will be closed

## Code Style

- React functional components only, no class components
- Tailwind for all styling — no inline styles except for values Tailwind can't express (gradients, animations)
- Every component with a `darkMode` ternary must have `transition-colors duration-500`
- Use `lucide-react` for icons — if lucide doesn't have it, use an inline SVG component in `src/components/ui/icons.jsx`
- File naming: PascalCase for components (`Navbar.jsx`), camelCase for utilities (`utils.js`)

## License

This project is licensed under [GNU General Public License v3.0](../LICENSE).
All contributions are subject to the same license.

## Reporting Issues

Open an issue with:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Browser and OS

## Questions

Open a GitHub Discussion rather than an issue for questions, ideas, or general feedback.