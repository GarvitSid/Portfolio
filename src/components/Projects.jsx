import { ExternalLink, Github, Briefcase, Bot, Leaf } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const categoryIcon = {
  'Full-Stack SaaS': <Briefcase size={13} />,
  'AI Integration': <Bot size={13} />,
  'Domain-Specific': <Leaf size={13} />,
};

// Placeholder gradient backgrounds when no screenshot is provided
const placeholderGradients = [
  'from-cyan-950 via-zinc-900 to-zinc-900',
  'from-violet-950 via-zinc-900 to-zinc-900',
  'from-emerald-950 via-zinc-900 to-zinc-900',
];

const ProjectCard = ({ project, index, onOpenCase }) => {
  const gradient = placeholderGradients[index % placeholderGradients.length];

  return (
    <div
      className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden
                 hover:border-cyan-500/40 transition-all duration-300
                 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] cursor-pointer"
      onClick={() => onOpenCase(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpenCase(project)}
      aria-label={`Open case study for ${project.title}`}
    >
      {/* Image / Placeholder */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="text-4xl font-extrabold text-white/10 font-mono select-none">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-300" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-950/70 border border-zinc-700/60 text-zinc-400">
          {categoryIcon[project.category]}
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-500 font-mono mb-3">{project.subtitle}</p>

        <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-5 line-clamp-3">
          {project.overview}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/8 text-cyan-400 border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            id={`live-demo-${project.id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            id={`source-${project.id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <Github size={14} />
            Source
          </a>
          <button
            className="ml-auto text-xs font-mono text-zinc-500 hover:text-cyan-400 transition-colors "
          ><span className="underline underline-offset-2">Case Study</span> 
             <span> → </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ onOpenCase }) => {
  return (
    <section id="projects" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 rounded-full mb-4" />
          <p className="text-zinc-400 text-sm max-w-xl">
            Click any card to open the full Case Study — including the
            Problem → Solution → Outcome breakdown, system architecture, and security details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCase={onOpenCase}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
