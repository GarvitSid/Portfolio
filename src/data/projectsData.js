// src/data/projectsData.js
// Separation of Concerns: All content lives here. UI components never need to change.

export const projectsData = [
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
    id: 3,
    title: "AgroInOne",
    subtitle: "Domain-Specific Agriculture Data Platform",
    category: "Domain-Specific",
    image: "/screenshot/agroinone.png",
    imageAlt: "AgroInOne dashboard — agriculture data and workflow management",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    liveLink: "https://agroinone-main.onrender.com/",
    githubLink: "https://github.com/GarvitSid/AgroInOne.git",
    overview:
      "AgroInOne is a research-driven, full-stack MERN application built for the agriculture domain. It centralizes crop data, market pricing, and farm operational records into a single, intuitive management dashboard.",
    problem:
      "Indian agricultural workflows suffer from fragmented data — farmers track pricing, crop cycles, and inventory in separate, offline systems (or none at all), leading to poor decision-making and financial losses.",
    solution:
      "Designed a domain-specific data schema in MongoDB Atlas to model crops, pricing, and farm units. Built a RESTful Express API with full CRUD operations and a React frontend allowing farmers or agri-businesses to manage workflows in one place.",
    outcome:
      "Produced a deployable proof-of-concept demonstrating real-world problem-solving in a niche domain, well beyond tutorial-following — a critical differentiator for off-campus recruitment.",
    architecture: [
      "Client: React.js (Dashboard, CRUD Forms, Data Tables)",
      "HTTP: Fetch API with protected route headers",
      "API: Node.js + Express (CRUD Controllers per resource)",
      "Database: MongoDB Atlas (Crops, Pricing, FarmUnits, Users)",
    ],
    security: [
      "JWT-protected API routes for authenticated users only",
      "Input validation middleware on all POST/PUT endpoints",
      "Environment variable management for Atlas connection string",
      "CORS policy restricted to known frontend domains",
    ],
    metrics: [
      "5 MongoDB collections modelling the full agri-domain",
      "20+ API endpoints covering all CRUD operations",
      "Responsive UI rendering data tables up to 500 records without pagination lag",
    ],
    futureWork: [
      "Real-time market price integration via government agri-APIs",
      "SMS alerts for crop cycle reminders (Twilio)",
      "Data export to CSV for offline use",
    ],
  },
];
