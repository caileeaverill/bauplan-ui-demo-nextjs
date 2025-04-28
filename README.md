# 🚀 Bauplan UI Demo

A sleek, responsive UI demo built showcasing a modern frontend architecture designed to integrate seamlessly with Bauplan's data pipelines

<p align="center">
  <img src="https://github.com/caileeaverill/bauplan-ui-demo-nextjs/blob/main/screenshots/screencapture-bauplan-ui-demo-nextjs-vercel-app-2025-04-27-22_19_03.png?raw=true" alt="Dashboard View 1" width="45%" style="margin-right: 10px;" />
  <img src="https://github.com/caileeaverill/bauplan-ui-demo-nextjs/blob/main/screenshots/screencapture-bauplan-ui-demo-nextjs-vercel-app-2025-04-27-22_23_03.png?raw=true" alt="Dashboard View 2" width="45%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-blue" alt="Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.0-38BDF8?logo=tailwindcss&logoColor=white" alt="TailwindCSS 4.0" />
  <img src="https://img.shields.io/badge/Shadcn%2Fui-Tailwind-informational" alt="Shadcn UI" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript" alt="TypeScript 5.3" />
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql&logoColor=white" alt="Neon Postgres" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel" alt="Vercel" />
</p>


<p align="center">
  <a href="https://bauplan-ui-demo-nextjs.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen?style=for-the-badge" alt="Live Demo Badge" />
  </a>
</p>


---

## 📚 Table of Contents

- [Features](#-features)
- [Folder Structure](#-folder-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Notes](#-notes)
- [Known Limitations](#-known-limitations)

## ✨ Features

- 🌗 **Light & dark modes** — Seamless theme switching based on system preference or manual toggle
- 📊 **Interactive charts with Recharts + shadcn/ui styling** — Data visualizations fully integrated with the design system
- 🎨 **Custom theming inspired by company branding** — A modern take on familiar brand colors and design language
- ⚡ **Server-side rendering (SSR)** — Fast page loads and SEO benefits with Next.js App Router
- 🛡️ **End-to-end TypeScript** — Strong typing across frontend and backend for reliability
- 🧩 **Modular, reusable components** — Built using [shadcn/ui](https://ui.shadcn.dev/) and custom component structures
- 🌐 **Serverless API Routes** — Backend functionality handled with Next.js Route Handlers
- 🛠️ **Global state management** — Application settings and user context handled via React Context API
- ☁️ **Serverless database with Neon** — Scalable PostgreSQL storage with zero setup
- 🚀 **Instant deployments with Vercel** — CI/CD enabled with preview URLs for every branch
- 🔍 **Accessibility-first development** — Focused on semantic HTML and accessible interactions
- 🧹 **Code linting and formatting** — Enforced with ESLint and Prettier for a clean, consistent codebase
- 🖼️ **Optimized image loading** — Built-in Next.js Image optimization for faster media delivery
---

## 🗂 Folder Structure

```bash
.
├── app/
├── components/
├── context/
├── hooks/
├── lib/
├── public/
├── node_modules/
├── .env.local
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json

```

## 🛠️ Tech Stack

### Frontend
- [Next.js 15](https://nextjs.org/) – Fullstack React framework using the App Router and Server Components
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI building
- [shadcn/ui](https://ui.shadcn.dev/) – Accessible UI components built with Radix and Tailwind
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript

### Backend
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) – Server functions built into the app
- [Neon](https://neon.tech/) – Serverless PostgreSQL database for scalable storage

### Infrastructure
- [Vercel](https://vercel.com/) – Hosting, serverless functions, and edge caching

---

## 🚀 Getting Started

Clone the project:

```bash
git clone https://github.com/caileeaverill/bauplan-ui-demo-nextjs.git
cd bauplan-ui-demo-nextjs

npm install
# or
pnpm install
# or
yarn install

npm run dev
# or
pnpm dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.
```

## 📝 Notes

- This project is a conceptual UI demo and is not intended for production use.
- The design adapts Bauplan’s branding in a modernized, responsive format.
- All data visualizations are based on example datasets and can be adapted to real data pipelines.
- While a database connection was not strictly necessary for this demo, PostgreSQL (via Neon) was included to demonstrate backend integration and fundamental SQL knowledge.
- The UI design emphasizes simplicity, clarity, and responsiveness to ensure a smooth user experience across devices.

## ⚠️ Known Limitations

- No authentication or user management has been implemented.
- Error handling for API routes is minimal and can be expanded.
- Chart data is static and not connected to a live data source.
