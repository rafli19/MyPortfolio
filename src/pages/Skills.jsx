import { useEffect, useRef, useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

function SkillBar({ name, icon, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
          {icon && (
            <i className={`${icon} text-emerald-500 dark:text-emerald-400`} />
          )}
          {name}
        </span>
        <span className="text-emerald-500 dark:text-emerald-400 text-sm font-semibold">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

const EXTRA_SKILLS = [
  "Responsive Design",
  "REST API",
  "MVC Pattern",
  "Agile / Scrum",
  "Problem Solving",
  "Debugging",
  "Team Collaboration",
  "IT Support",
];

export default function Skills() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-500 dark:text-emerald-400 font-medium tracking-widest uppercase text-sm mb-2">
            What I can do
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            Skills & Tech Stack
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => (
            <div
              key={category}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 flex items-center justify-center">
                  <i
                    className={`${icon} text-emerald-500 dark:text-emerald-400`}
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {category}
                </h2>
              </div>
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Other Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {EXTRA_SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
