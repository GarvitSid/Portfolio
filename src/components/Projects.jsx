import {
  ExternalLink,
  Github,
  Briefcase,
  Bot,
  Leaf,
  GraduationCap,
  Sprout,
  Sparkles,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import TiltCard from './ui/TiltCard';
import StatCounter from './ui/StatCounter';

const categoryIcon = {
  'EdTech & AI': <GraduationCap size={13} />,
  'Full-Stack AI & AgriTech': <Sprout size={13} />,
  'Full-Stack SaaS': <Briefcase size={13} />,
  'AI Integration': <Bot size={13} />,
  'Domain-Specific': <Leaf size={13} />,
};

const placeholderGradients = [
  'from-cyan-950 via-zinc-900 to-zinc-900',
  'from-emerald-950 via-zinc-900 to-zinc-900',
  'from-violet-950 via-zinc-900 to-zinc-900',
  'from-sky-950 via-zinc-900 to-zinc-900',
];

const ProjectCard = ({ project, index, onOpenCase }) => {
  const gradient = placeholderGradients[index % placeholderGradients.length];
  const isFeatured = Boolean(project.featured);

  // Bento grid sizing: Featured card is double-width on Row 1 (4/6), AgroInOne (2/6), Row 2 balanced (3/6 + 3/6)
  const gridSpanClass = isFeatured
    ? 'md:col-span-2 lg:col-span-4'
    : index === 1
      ? 'lg:col-span-2'
      : 'lg:col-span-3';

  return (
    <Reveal delay={index * 80} className={gridSpanClass}>
      <TiltCard
        as="article"
        className="group h-full bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 transition-colors duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        innerClassName="flex flex-col"
      >
        {/* Image / Placeholder */}
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${
            isFeatured ? 'h-56 md:h-64' : 'h-48'
          }`}
        >
          {project.image ? (
            <picture>
              {project.webpImage && (
                <source srcSet={project.webpImage} type="image/webp" />
              )}
              <img
                src={project.image}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </picture>
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
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-950/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Category badge */}
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-sm border border-zinc-700/60 text-zinc-300">
            {categoryIcon[project.category] ?? <Sparkles size={13} />}
            {project.category}
          </span>

          {isFeatured && (
            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 backdrop-blur-sm">
              <Sparkles size={11} />
              Featured Case Study
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 font-mono mb-3">{project.subtitle}</p>

          <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-5 line-clamp-3">
            {project.overview}
          </p>

          {/* Highlight metric chips */}
          {project.highlights?.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
              {project.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-zinc-950/70 border border-zinc-800/90 rounded-lg px-3 py-2"
                >
                  <p className="text-sm font-bold font-mono text-cyan-400">
                    <StatCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      decimals={item.decimals ?? 0}
                    />
                  </p>
                  <p className="text-[11px] text-zinc-500 truncate">{item.label}</p>
                </div>
              ))}
            </div>
          )}

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

          {/* Action row — links sit above stretched card button */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              id={`live-demo-${project.id}`}
              className="relative z-10 flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              id={`source-${project.id}`}
              className="relative z-10 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={14} />
              Source
            </a>

            <button
              type="button"
              data-project-slug={project.slug}
              onClick={(e) => onOpenCase(project, e.currentTarget)}
              aria-label={`Open case study for ${project.title}`}
              className="ml-auto text-xs font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors focus-visible:outline-none after:content-[''] after:absolute after:inset-0 after:z-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-cyan-400"
            >
              <span className="underline underline-offset-2">Case Study</span>{' '}
              <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
};

const Projects = ({ onOpenCase }) => {
  return (
    <section id="projects" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          label="Projects"
          title="Featured"
          accent="Projects"
          description="Select any card to open the full Case Study — including the Problem → Solution → Outcome breakdown, system architecture, security controls, and tested metrics."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7">
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
