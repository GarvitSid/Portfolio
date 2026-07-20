// src/data/projectsData.js
// Separation of Concerns: All content lives here. UI components never need to change.

export const projectsData = [
  {
    "id": 4,
    "title": "ChatMind AI College",
    "subtitle": "Full-Stack RAG-Based Assistant & Student Portal",
    "category": "EdTech & AI",
    "image": "/screenshot/home_landing.png",
    "imageAlt": "ChatMind AI College portal featuring a RAG chat drawer and admin dashboard",
    "tech": [
      "React 19",
      "Tailwind CSS v4",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Pinecone",
      "Google Gemini API"
    ],
    "liveLink": "https://chat-mind-ai.vercel.app/",
    "githubLink": "https://github.com/GarvitSid/ChatMindAI.git",
    "overview": "ChatMind AI College is an intelligent academic portal and zero-hallucination knowledge assistant. It provides a secure student dashboard alongside an administrative portal for in-memory document parsing, chunking, and real-time vectorization.",
    "problem": "Critical college information—such as admission cutoffs, fee structures, and placement statistics—is often scattered across disorganized PDF notices. Furthermore, standard AI chatbots hallucinate answers, misleading prospective and enrolled students.",
    "solution": "Developed a strict Retrieval-Augmented Generation (RAG) pipeline utilizing Pinecone and Google Gemini to ground AI responses entirely in uploaded official college documents. Built a robust admin dashboard to parse and vectorize PDFs on the fly without filesystem clutter.",
    "outcome": "Successfully deployed a multi-tenant platform featuring a zero-hallucination chat assistant that explicitly cites its source files. The backend orchestrates a highly resilient ingestion pipeline, featuring automatic compensating rollbacks to keep MongoDB metadata and Pinecone vectors perfectly synchronized in the event of third-party API outages.",
    "architecture": [
      "Client: React 19 + Vite (Multi-session Chat Drawer, Admin Knowledge Dashboard)",
      "API Gateway: Node.js + Express + TypeScript (RAG Orchestration, File Ingestion)",
      "Database: MongoDB Atlas (RBAC Users, Chat Sessions, Message History, Documents)",
      "AI & Vectors: Pinecone Serverless + Gemini 3.5 Flash & gemini-embedding-001"
    ],
    "security": [
      "JWT-protected API routes enforcing strict Role-Based Access Control (Admin vs. Student)",
      "In-memory Multer processing for document uploads, preventing malicious filesystem execution",
      "Bcrypt password hashing (10 salt rounds) with strict password complexity requirements",
      "Isolated per-user rate limiting (15 req/min for chat, 5 req/min for auth) to prevent API abuse"
    ],
    "metrics": [
      "26/26 passing automated full-stack integration tests covering RAG logic, auth, and cascading deletion",
      "Optimized text chunking using 1000-character segments with a 200-character overlap",
      "Empirically tuned similarity threshold (0.55 cutoff) ensuring automatic zero-quota refusal on out-of-scope queries"
    ],
    "futureWork": [
      "Implementation of real-time Server-Sent Events (SSE) or WebSockets for streaming AI responses",
      "Support for additional administrative document formats such as DOCX and XLSX",
      "Advanced conversational memory to maintain context across prolonged multi-turn query sessions"
    ]
  },
  {
    id: 3,
    title: "AgroInOne",
    subtitle: "AI-Powered Agricultural Advisory & Management Platform",
    category: "Full-Stack AI & AgriTech",
    image: "/screenshot/agroinone.png",
    imageAlt: "AgroInOne dashboard featuring AI crop prediction and government schemes",
    tech: [
      "React.js (Vite)",
      "Node.js",
      "Express.js",
      "Python Flask",
      "Scikit-Learn",
      "Supabase (PostgreSQL)",
      "Docker"
    ],
    liveLink: "https://agroinone-main.onrender.com/",
    githubLink: "https://github.com/GarvitSid/AgroInOne.git",
    overview:
      "AgroInOne is a full-stack, enterprise-grade agricultural platform featuring a proactive two-stage machine learning advisory system, a state-filterable government schemes directory, and a centralized farmer support helpdesk.",
    problem:
      "Historically, agricultural yield calculators operated reactively, ignoring soil degradation, nutrient depletion, and changing meteorological patterns. Additionally, farmers struggle with fragmented access to official state schemes and reliable support channels.",
    solution:
      "Engineered a microservices architecture bridging a Node.js API gateway with a Python ML server. The platform ingests 11 soil, climate, and geographic parameters into a chained Random Forest pipeline to recommend optimal crops and forecast yields, backed by a Supabase database for dynamic scheme and helpdesk delivery.",
    outcome:
      "Delivered a fully containerized, CI/CD-tested web platform featuring decoupled microservices and optimized machine learning inference engines. The system provides an extensible reference architecture demonstrating domain-specific ML model chaining, strict biological boundary enforcement, and secure user authentication.",
    architecture: [
      "Client: React 18 + Vite (Diagnostic Telemetry Forms, Dual Visual Advisory Cards)",
      "API Gateway: Node.js + Express (JWT Auth, Reverse Proxy to ML Server)",
      "ML Microservice: Python Flask (Stage 1 Classifier & Stage 2 Regressor)",
      "Database: Supabase PostgreSQL (Users, Schemes, Helpdesk with Auto-Seeding)"
    ],
    security: [
      "JWT-protected API routes for authenticated users with expiration handling",
      "Bcryptjs password hashing with 10 salt rounds",
      "Strict client and server-side biological boundary validation (e.g., pH 0-14, Humidity 0-100%)",
      "Sanitized error handling preventing database or model data leakage"
    ],
    metrics: [
      "99.55% test accuracy on Stage 1 RandomForestClassifier (22 crop classes)",
      "26/26 passing automated full-stack integration tests",
      "Sub-second inference time for 11-parameter agronomic telemetry translation"
    ],
    futureWork: [
      "Integration of real-time weather APIs for automatic climate telemetry ingestion",
      "Multilingual UI support to increase accessibility for regional Indian farmers",
      "Expansion of the canonical crop mapping dictionary for broader crop coverage"
    ]
  },
  {
    id: 2,
    title: "VoxNode",
    subtitle: "AI-Powered Voice-to-Mindmap Transcriber",
    category: "AI Integration",
    image: "/screenshot/voxnode.png",
    imageAlt: "VoxNode interface — voice recording transcribed to structured mind map",
    tech: ["React.js", "OpenAI API", "Tailwind CSS", "Node.js", "Express.js"],
    liveLink: "https://vox-map-mind.lovable.app/",
    githubLink: "https://github.com/GarvitSid/vox-map-mind.git",
    overview:
      "VoxNode is an AI-powered application that seamlessly transcribes spoken voice notes into clean, structured, interactive mind maps. It bridges the gap between raw verbal ideation and organized, actionable information.",
    problem:
      "Verbal brainstorming produces disorganized, transient ideas that are difficult to capture and structure. Manually transcribing and organizing voice notes into a usable format is time-consuming and error-prone.",
    solution:
      "Built a React frontend with a Web Speech API recorder feeding raw audio transcripts into an OpenAI prompt pipeline. The API response is parsed and rendered as an interactive, hierarchical mind map with Tailwind CSS.",
    outcome:
      "Users can speak freely and receive a clean, structured mindmap within seconds — eliminating manual note organization entirely and showcasing practical AI prompt engineering at the application level.",
    architecture: [
      "Client: React.js (Web Speech API → Transcript State)",
      "HTTP: Axios sending transcript to backend",
      "API: Node.js + Express (rate limiting, error handling)",
      "AI: OpenAI GPT API (prompt engineering → JSON mindmap)",
      "Render: React parsed JSON → SVG mindmap component",
    ],
    security: [
      "OpenAI API key stored server-side in .env (never exposed to client)",
      "Backend rate limiting to prevent API quota abuse",
      "Input sanitization before prompt injection to prevent prompt injection attacks",
      "Error boundary handling for malformed API responses",
    ],
    metrics: [
      "Average transcription-to-mindmap latency < 3 seconds",
      "Supports voice inputs up to 2 minutes in length",
      "Handles structured output with up to 4 levels of hierarchy",
    ],
    futureWork: [
      "Persistent mindmap saving with MongoDB",
      "Export to PDF / PNG",
      "Multi-language transcription support",
    ],
  },
  {
    id: 1,
    title: "Jobby App",
    subtitle: "Secure Full-Stack Job Search Portal",
    category: "Full-Stack SaaS",
    image: "/screenshot/jobbyapp.png",
    imageAlt: "Jobby App Dashboard — job listings with filters",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    liveLink: "https://jobby-app-jir5.onrender.com/",
    githubLink: "https://github.com/GarvitSid/Jobby-App.git",
    overview:
      "Jobby App is a comprehensive full-stack job search platform designed to connect job seekers with relevant opportunities. Users can securely log in, browse company profiles, and dynamically filter listings by salary and employment type — all without a single page reload.",
    problem:
      "Job seekers experience friction and slow load times when filtering through thousands of listings on traditional job boards, leading to poor UX. User session data must also be strictly secured to protect personal information.",
    solution:
      "Engineered a Single Page Application (SPA) with React for instant dynamic filtering via state management. Built a RESTful API with Node.js and Express, implementing JSON Web Tokens (JWT) so only authenticated users access the job database.",
    outcome:
      "Delivered a zero-reload search experience that lets users instantly filter jobs by salary and employment type, backed by a secure and scalable authentication pipeline.",
    architecture: [
      "Client: React.js (State Management, Dynamic Filtering)",
      "HTTP: Axios with Bearer Token in Headers",
      "API: Node.js + Express (Auth Middleware → Route Controllers)",
      "Database: MongoDB Atlas (Users, Jobs, CompanyDetails)",
    ],
    security: [
      "JWT stateless sessions for secure login/logout",
      "Bcrypt password hashing before database storage",
      "Custom middleware blocking unauthenticated /jobs & /profile requests",
      "Environment variables securing all DB URIs and secret keys",
    ],
    metrics: [
      "15+ secure REST API endpoints for auth and job retrieval",
      "Dynamic filtering across the full jobs dataset in <50ms",
      "100% reduction in unauthorized data access via JWT middleware",
    ],
    futureWork: [
      "Server-side pagination for scale",
      "Role-Based Access Control (RBAC) for Employer accounts",
    ],
  },
];
