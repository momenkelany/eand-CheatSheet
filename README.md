# 🚀 e& CheatSheet — Client

A clean, modern, and accessible **React + TypeScript** frontend for the **e& CheatSheet** platform.  
This repository contains all **UI components, pages, hooks, contexts, and utilities** used to power the client-side experience.

> **Note:**  
> Instructions here assume a typical **Vite + React + TypeScript + Tailwind CSS** setup.  
> If your project uses CRA, Next.js, or custom tooling, please refer to your local `package.json` scripts.

---

## 📚 Table of Contents
- Project Overview
- Tech Stack
- Getting Started
  - Prerequisites
  - Local Setup
- Common Scripts
- Project Structure
- Features
- Development Notes
- Deployment
- Contributing
- Troubleshooting
- License
- Contact

---

Everything lives inside `src/`, including:

- Reusable UI primitives  

Social preview image
--------------------

To ensure link previews in SMS/messaging apps show an icon and image, place a PNG at `client/public/social-preview.png` and commit it.
- Recommended size: 1200x630 (PNG or JPEG)
- Filename: `social-preview.png`
- After adding the image, run `npm run build && npm run deploy` to update the GitHub Pages site.

If you don't want to add an image to the repo, set `og:image` meta tags to point to an externally hosted PNG (HTTPS).
- Global contexts  
- Custom hooks  
- Pages for each site section  
- Static data and helpers  

The structure is optimized for readability, scalability, and maintainability.

---

## 🛠 Tech Stack

- **React (TypeScript)**
- **Wouter** — lightweight router  
- **@tanstack/react-query** — async data caching  
- **Tailwind CSS** — utility-first styling  
- **React DOM (React 18)**  
- **Local UI primitives** → `components/ui/*`

> Check the project root `package.json` for exact versions.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- Any package manager: `npm`, `yarn`, or `pnpm`

### Local Setup

Using **npm**:
```sh
npm install
npm run dev
```

Using **pnpm**:
```sh
pnpm install
pnpm run dev
```

Using **yarn**:
```sh
yarn
yarn dev
```

> With Vite, this usually serves at:  
> 👉 http://localhost:5173  

---

## 🧪 Common Scripts

| Action | npm | pnpm | yarn |
|--------|------|--------|--------|
| Run dev server | `npm run dev` | `pnpm dev` | `yarn dev` |
| Production build | `npm run build` | `pnpm build` | `yarn build` |
| Preview build | `npm run preview` | `pnpm preview` | `yarn preview` |
| Lint (if configured) | `npm run lint` | `pnpm lint` | `yarn lint` |
| Format (Prettier) | `npm run format` | `pnpm format` | `yarn format` |

Always verify these script names in your `package.json`.

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── ui/          # UI primitives (buttons, inputs, dialogs)
│   └── examples/    # Example component variants
│
├── contexts/        # React Providers (Theme, App Context, etc.)
├── hooks/           # Custom hooks (use-mobile, use-toast)
├── lib/             # Helpers (queryClient, utilities)
├── pages/           # App pages (Home, Not Found, etc.)
└── data/            # Static data sources (knowledge-base.ts)
```

Root files:
- **App.tsx** — main app entry + routes  
- **main.tsx** — mount point  
- **index.css** — global Tailwind imports  

---

## 🌟 Features

- ⚡ Fast, lightweight, modular React components  
- 🎨 Accessible, reusable UI primitives  
- 🔍 Client-side routing (Wouter)  
- ♻️ Cached data loading via React Query  
- 🌙 Theme management  
- 💨 Tailwind-first styling  

---

## 🧠 Development Notes & Tips 💡

### 🔗 Path Aliases
This project uses `@/` import aliases.

Example:
```ts
import { Toaster } from "@/components/ui/toaster";
```

Add this to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Vite users should add:

```js
// vite.config.js
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()]
});
```

### 🎨 Tailwind Notes
If styles aren’t loading, confirm:

- `index.css` imports Tailwind:  
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- A root `tailwind.config.js` exists.

### 🧹 Code Quality
Consider:
- Prettier + ESLint  
- Pre-commit hooks (Husky)  
- GitHub Action for CI linting  

---

## 📦 Deployment

1. Build the project:
```sh
npm run build
```

2. Deploy the generated `dist/` folder to:
- Vercel  
- Netlify  
- GitHub Pages  
- Any static hosting provider  

> Vite projects always output to `dist/`.

---

## 🤝 Contributing

1. Fork the repo  
2. Create a branch:  
   ```sh
   git checkout -b feature/my-feature
   ```
3. Commit & push  
4. Open a Pull Request 🎉

Guidelines:
- Keep PRs small and focused  
- Follow linting/style rules  
- Add tests where needed  

---

## 🛑 Troubleshooting

### ❌ “Cannot find package.json”
You're likely inside the `src/` folder. Move to repo root.

### ❌ Path alias errors
Check:
- `tsconfig.json`
- Vite alias configuration

### ❌ Tailwind doesn’t load
Ensure:
- Tailwind config exists  
- `index.css` includes Tailwind directives  
- `postcss.config.js` is at project root  

---

## 📄 License
Add a `LICENSE` file at the repo root if needed.  
If unsure, contact the project owner.

---

## 📬 Contact
Need help or have questions?  
Open an issue or contact the repository owner anytime.

---

Thanks for contributing to **e& CheatSheet**! 🎉
