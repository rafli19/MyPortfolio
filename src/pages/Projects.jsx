import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";

const ALL_TAGS = ["All", "Tailwind", "JavaScript", "React", "Laravel", "MySQL"];

function ProjectCard({ image, title, description, tags, demo, github }) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-full text-xs border border-emerald-200 dark:border-emerald-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-500 text-white py-2 rounded-full text-center text-sm font-semibold hover:bg-emerald-400 transition-colors"
          >
            <i className="fas fa-external-link-alt mr-1" /> Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 py-2 rounded-full text-center text-sm hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <i className="fab fa-github mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const ALL_TAGS = [
    "All",
    "Tailwind",
    "JavaScript",
    "React",
    "Laravel",
    "MySQL",
  ];

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.tags.some((tag) =>
            tag.toLowerCase().includes(activeTag.toLowerCase()),
          ),
        );

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-emerald-500 dark:text-emerald-400 font-medium tracking-widest uppercase text-sm mb-2">
            What I've built
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            Projects
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "bg-emerald-500 text-white"
                  : "border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/rafli19?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-400 text-emerald-500 dark:text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200"
          >
            <i className="fab fa-github" /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
