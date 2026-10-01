import { motion } from 'framer-motion'
import {
  Sprout,
  Bot,
  Volume2,
  BookOpen,
  Briefcase,
  ExternalLink,
  Sparkles,
  Layers,
} from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/content'

const projectStyles = [
  {
    icon: Sprout,
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    iconBg: 'bg-emerald-500/20 text-emerald-300',
    categoryBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  {
    icon: Bot,
    accentGradient: 'from-purple-600 via-violet-600 to-indigo-700',
    iconBg: 'bg-violet-500/20 text-violet-300',
    categoryBadge: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
  {
    icon: Volume2,
    accentGradient: 'from-sky-600 via-blue-600 to-indigo-700',
    iconBg: 'bg-sky-500/20 text-sky-300',
    categoryBadge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  },
  {
    icon: BookOpen,
    accentGradient: 'from-amber-600 via-orange-600 to-rose-700',
    iconBg: 'bg-amber-500/20 text-amber-300',
    categoryBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    icon: Briefcase,
    accentGradient: 'from-indigo-600 via-purple-600 to-pink-700',
    iconBg: 'bg-indigo-500/20 text-indigo-300',
    categoryBadge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400">
            Portfolio Work
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Intelligent AI architectures, RAG conversational models, speech synthesis, and workflow management systems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const style = projectStyles[idx % projectStyles.length]
            const Icon = style.icon

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Visual Banner Header */}
                <div
                  className={`relative flex h-40 items-center justify-between px-6 bg-gradient-to-br ${style.accentGradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                  
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>

                  {project.category && (
                    <span
                      className={`relative z-10 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide backdrop-blur-md ${style.categoryBadge}`}
                    >
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.name}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-400 border-l-2 border-indigo-500/40 pl-3">
                      {project.emphasis}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-800/90 border border-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Meta */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 transition-all"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Code
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                        <Sparkles className="h-3 w-3 text-indigo-400" />
                        Code available on request
                      </div>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10 transition-all"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                        <Layers className="h-3 w-3" />
                        Active Project
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
