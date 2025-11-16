# 🚀 e& CheatSheet — Client

A clean, modern, and accessible **React + TypeScript** frontend for the **e& CheatSheet** platform.  
This repository contains all **UI components, pages, hooks, contexts, and utilities** used to power the client-side experience.

> **Note:**  
> Instructions here assume a typical **Vite + React + TypeScript + Tailwind CSS** setup.  
> If your project uses CRA, Next.js, or custom tooling, please refer to your local `package.json` scripts.

---

## 📚 Table of Contents
- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
- [Common Scripts](#-common-scripts)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Development Notes](#-development-notes--tips-)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Contact](#-contact)

---

## 🧩 Project Overview

This directory holds the **client application** for the e& CheatSheet website, built with a lightweight and modular component architecture.

Everything lives inside `src/`, including:

- Reusable UI primitives  
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
