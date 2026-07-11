# ⚡ Garvit Singh — Full-Stack MERN Developer Portfolio

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

A modern, dark-themed developer portfolio built to showcase full-stack engineering work through interactive **case studies** — each breaking down a project's problem, solution, architecture, security implementation, and outcome, rather than just listing a tech stack.

**🌍 Live Site:** [portfolio-garvitsingh.vercel.app](https://portfolio-garvitsingh.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Featured Projects](#featured-projects)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Connect With Me](#connect-with-me)

---

## Overview

This repository contains the **frontend portfolio site itself** — a single-page React application built with Vite and Tailwind CSS. It's not a full-stack app in its own right; instead, it's the showcase layer for full-stack (MERN) projects, each of which links out to its own live demo and source repository.

The site is organized into five sections — **Hero, About/Skills, Projects, Journey, and Contact** — with the standout feature being clickable **Case Study modals** that go well beyond a typical portfolio card, presenting real architectural and security decisions behind each project.

## Features

- **Interactive Case Study Modals** — Clicking a project card opens a scroll-locked, keyboard-accessible modal (`Escape` to close, backdrop click to dismiss) covering:
  - Problem → Solution → Outcome
  - Architecture & Data Flow
  - Security Implementations
  - Professional Metrics
  - Future Improvements
- **Component-Driven Architecture** — Page sections are isolated React functional components (`Navbar`, `Hero`, `AboutSkills`, `Projects`, `Journey`, `Footer`, `CaseStudyModal`). All project content lives in a single `projectsData.js` file, so updating a case study never requires touching UI code.
- **Dark, Animated UI** — Tailwind CSS dark theme with custom `fade-in` / `slide-up` keyframe animations, ambient cyan glow accents, a subtle grid-texture hero background, and a custom-styled scrollbar.
- **Responsive & Accessible** — Fixed navbar with smooth-scroll anchor links and a mobile hamburger menu; `role`, `aria-modal`, and `aria-label` attributes throughout for screen-reader and keyboard support.
- **SEO-Ready** — Open Graph meta tags (title, description, image, URL) configured in `index.html` for clean link previews when shared.
- **One-Click Resume Access** — Resume download/preview available from both the navbar and hero section.

## Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18.3, JavaScript (ES6+), HTML5, CSS3 |
| **Styling** | Tailwind CSS 3.4, [Lucide React](https://lucide.dev/) (icons), custom CSS keyframe animations |
| **Build Tool** | Vite (with `@vitejs/plugin-react`) |
| **Tooling** | PostCSS, Autoprefixer |
| **Deployment** | Vercel |

## Featured Projects

The portfolio's `Projects` section highlights detailed case studies for three full-stack builds:

### 1. Jobby App — Secure Full-Stack Job Search Portal
`Full-Stack SaaS` · React.js · Node.js · Express.js · MongoDB · JWT · Bcrypt

A job search platform with zero-reload dynamic filtering (salary, employment type) and JWT-based stateless authentication protecting job and profile routes.

- **Live:** [jobby-app-jir5.onrender.com](https://jobby-app-jir5.onrender.com/)
- **Source:** [github.com/GarvitSid/Jobby-App](https://github.com/GarvitSid/Jobby-App)

### 2. VoxNode — AI-Powered Voice-to-Mindmap Transcriber
`AI Integration` · React.js · OpenAI API · Node.js · Express.js · Tailwind CSS

Transcribes spoken voice notes into structured, hierarchical mind maps via the Web Speech API and an OpenAI GPT prompt pipeline, with a rate-limited Express backend keeping the API key server-side.

- **Live:** [vox-map-mind.lovable.app](https://vox-map-mind.lovable.app/)
- **Source:** [github.com/GarvitSid/vox-map-mind](https://github.com/GarvitSid/vox-map-mind)

### 3. AgroInOne — Domain-Specific Agriculture Data Platform
`Domain-Specific` · MongoDB · Express.js · React.js · Node.js · REST APIs

A full-stack MERN application centralizing crop data, market pricing, and farm operational records for the Indian agriculture domain, backed by a MongoDB Atlas schema and a CRUD-complete Express API.

- **Live:** [agroinone-main.onrender.com](https://agroinone-main.onrender.com/)
- **Source:** [github.com/GarvitSid/AgroInOne](https://github.com/GarvitSid/AgroInOne)

> Open the live portfolio and click any project card for the full case study — architecture diagrams, security details, and metrics included.

## Project Structure

```
garvit-portfolio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── AboutSkills.jsx
    │   ├── Projects.jsx
    │   ├── CaseStudyModal.jsx
    │   ├── Journey.jsx
    │   └── Footer.jsx
    └── data/
        └── projectsData.js
```

> Static assets referenced by the components — the resume PDF (`/resume/Garvit_Singh_Resume.pdf`) and project screenshots (`/screenshot/*.png`) — are served from a `public/` directory not shown above.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine

### 1. Clone the repository

```bash
git clone https://github.com/GarvitSid/garvit-portfolio.git
cd garvit-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (Vite's default port).

### 4. Build for production

```bash
npm run build
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Builds an optimized production bundle to `/dist` |
| `npm run preview` | Serves the production build locally for final testing |

## Connect With Me

I'm actively open to full-stack developer roles and internship opportunities.

- **Email:** [garvitsingh.connect@gmail.com](mailto:garvitsingh.connect@gmail.com)
- **LinkedIn:** [linkedin.com/in/garvit-singh-22605a246](https://linkedin.com/in/garvit-singh-22605a246)
- **GitHub:** [@GarvitSid](https://github.com/GarvitSid)

---

<p align="center">Built with React & Tailwind CSS by Garvit Singh.</p>
