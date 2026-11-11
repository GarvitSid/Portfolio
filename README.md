# ⚡ Garvit Singh — Full-Stack MERN Developer Portfolio

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-Animations-0055FF)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

A modern, dark-themed developer portfolio built to showcase full-stack engineering work through interactive **case studies** — each breaking down a project's problem, solution, architecture, security implementation, and tested metrics, rather than just listing a tech stack.

## [**🌍 Live Site**](https://portfolio-garvitsingh.vercel.app/)

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

<a id='overview'></a>
## Overview

This repository contains the **frontend portfolio site itself** — a single-page React application built with Vite, Tailwind CSS, and `motion`. It serves as the interactive showcase layer for four full-stack and AI-integrated systems, each linking out to its own live deployment and source repository.

The site is organized into five sections — **Hero, About, Skills, Projects, Journey, and Contact** — featuring GPU-composited scroll reveals, scrollspy navigation, 3D tilt case-study cards, and shareable deep-linked Case Study modals.

## Features

- **Interactive, Shareable Case Study Modals** — Clicking any project card opens an animated, focus-trapped modal (`Escape` to close, `←` / `→` to switch projects, `#project-slug` URL hash deep-linking) covering:
  - Problem → Solution → Outcome narrative
  - Architecture & Data Flow with animated data-flow connector
  - Security Implementations
  - Count-up & verified Engineering Metrics
  - Future Improvements
- **Performance-First Motion** — All scroll reveals, hero choreography, dual skill marquees, scroll progress bar, and 3D tilt interactions animate only `transform` and `opacity`, pause ambient loops when off-screen, and honor `prefers-reduced-motion`.
- **Responsive & Accessible** — Fixed navbar with `IntersectionObserver` scrollspy, top scroll-progress bar, accessible semantic cards (`<article>` with stretched button triggers), and keyboard-navigable dialogs.
- **Optimized Media & SEO** — WebP screenshots with PNG fallbacks, explicit image dimensions to eliminate layout shift, lazy-loaded media, and absolute Open Graph / Twitter metadata in `index.html`.
- **One-Click Contact & Resume** — Resume preview/download from the navbar and hero, plus a magnetic email CTA and copy-to-clipboard action with toast feedback in the footer.

## Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18.3, JavaScript (ES6+), HTML5, CSS3 |
| **Styling & Motion** | Tailwind CSS 3.4, [Motion](https://motion.dev/), [Lucide React](https://lucide.dev/), CSS scroll-driven & keyframe animations |
| **Build Tool** | Vite (with `@vitejs/plugin-react`) |
| **Tooling** | PostCSS, Autoprefixer |
| **Deployment** | Vercel |

## Featured Projects

The portfolio's `Projects` section highlights detailed case studies for four full-stack & AI builds:

### 1. ChatMind AI College — Full-Stack RAG-Based Assistant & Student Portal
`EdTech & AI` · React 19 · Tailwind CSS v4 · Node.js · Express.js · TypeScript · MongoDB · Pinecone · Google Gemini API

An intelligent academic portal and zero-hallucination RAG knowledge assistant with in-memory PDF parsing, 768-dim Pinecone vectorization, compensating rollbacks, and 45 automated CI backend tests.

- [**Live**](https://chat-mind-ai.vercel.app/)
- [**Source**](https://github.com/GarvitSid/ChatMindAI)

### 2. AgroInOne — AI-Powered Agricultural Advisory & Management Platform
`Full-Stack AI & AgriTech` · React.js (Vite) · Node.js · Express.js · Python Flask · Scikit-Learn · Supabase (PostgreSQL) · Docker

A containerized microservices agricultural platform bridging a Node.js API gateway with a Python Flask ML server (99.55% Stage 1 crop classifier accuracy, 26/26 integration tests) and Supabase PostgreSQL for state schemes and farmer helpdesk support.

- [**Live**](https://agroinone-main.onrender.com/)
- [**Source**](https://github.com/GarvitSid/AgroInOne)

### 3. VoxNode — AI-Powered Voice-to-Mindmap Transcriber
`AI Integration` · React.js · OpenAI API · Node.js · Express.js · Tailwind CSS

Transcribes spoken voice notes into structured, hierarchical mind maps via the Web Speech API and an OpenAI GPT prompt pipeline, with a rate-limited Express backend keeping the API key server-side.

- [**Live**](https://vox-map-mind.lovable.app/)
- [**Source**](https://github.com/GarvitSid/vox-map-mind)

### 4. Jobby App — Secure Full-Stack Job Search Portal
`Full-Stack SaaS` · React.js · Node.js · Express.js · MongoDB · JWT · Bcrypt

A job search platform with zero-reload dynamic filtering (salary, employment type) and JWT-based stateless authentication protecting job and profile routes.

- [**Live**](https://jobby-app-jir5.onrender.com/)
- [**Source**](https://github.com/GarvitSid/Jobby-App)

> Open the live portfolio and click any project card for the full case study — architecture flow, security details, and tested metrics included.

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
    ├── hooks/
    │   ├── useInView.js
    │   ├── useScrollSpy.js
    │   ├── useCountUp.js
    │   └── usePointerGlow.js
    ├── components/
    │   ├── ui/
    │   │   ├── Reveal.jsx
    │   │   ├── SectionHeader.jsx
    │   │   ├── Marquee.jsx
    │   │   ├── StatCounter.jsx
    │   │   └── TiltCard.jsx
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

> Static assets referenced by the components — the resume PDF (`/resume/Garvit_Singh_Resume.pdf`) and project screenshots (`/screenshot/*.webp` & `*.png`) — are served from the `public/` directory.

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

- [**Email**](mailto:garvitsingh.connect@gmail.com)
- [**LinkedIn**](https://linkedin.com/in/garvit-singh-22605a246)
- [**GitHub**](https://github.com/GarvitSid)

---

<p align="center">Built with React, Tailwind CSS &amp; Motion by Garvit Singh.</p>
