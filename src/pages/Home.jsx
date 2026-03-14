import { Link } from "react-router-dom";
import {
  SOCIAL_LINKS,
  PROJECTS,
  SKILL_CATEGORIES,
} from "../data/portfolioData";

const STATS = [
  { value: "8+", label: "Projects Built" },
  { value: "2+", label: "Years IT Experience" },
  { value: "8+", label: "Technologies" },
  { value: "100%", label: "Passion for Code" },
];

const FEATURED_PROJECTS = PROJECTS.slice(0, 2);
const ALL_SKILLS = SKILL_CATEGORIES.flatMap((cat) => cat.skills).slice(0, 8);

export default function Home() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      {/* ── HERO ── */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 text-sm px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
                Available for work
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100 leading-[1.1] mb-5">
                Rafli
                <br />
                Erlangga
              </h1>

              <p className="text-xl md:text-2xl text-emerald-600 dark:text-emerald-400 font-medium mb-6">
                Junior Full Stack Web Developer
              </p>

              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
                Suka bikin hal-hal yang jalan di browser. Dari UI yang nyaman
                dipakai sampai backend yang nggak drama. Lagi ngembangin skill
                di Dibimbing.id setelah sebelumnya ngurusin jaringan dan
                infrastruktur IT.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                <Link
                  to="/contact"
                  className="bg-emerald-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
                >
                  Hubungi Saya
                </Link>
                <Link
                  to="/projects"
                  className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-7 py-3 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Lihat Projects
                </Link>
                <a
                  href="assets/Resume_RafliErlangga.pdf"
                  download
                  className="border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 px-7 py-3 rounded-lg font-semibold hover:border-slate-400 dark:hover:border-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  <i className="fas fa-download mr-2 text-sm" />
                  Resume
                </a>
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-400 transition-all"
                  >
                    <i className={`${icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-emerald-100 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/30 absolute -bottom-3 -right-3" />
                <img
                  src="img/photo_profile.png"
                  alt="Rafli Erlangga"
                  className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border border-slate-200 dark:border-slate-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-1">
                  {value}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium uppercase tracking-widest mb-3">
                Sedikit tentang saya
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-5 leading-tight">
                IT Support yang beralih jadi Developer
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Mulai dari maintenance jaringan dan helpdesk di PT. Inti Prima
                Rasa, saya sadar passion saya lebih ke membangun, bukan hanya
                memperbaiki. Dari situ mulai serius belajar web development.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Sekarang fokus di full stack — React di frontend, Laravel/Node
                di backend. Suka tantangan, suka belajar hal baru, dan selalu
                cari cara bikin kode yang lebih clean dari kemarin.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-500 dark:text-emerald-400 font-medium hover:gap-3 transition-all"
              >
                Selengkapnya <i className="fas fa-arrow-right text-sm" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "fas fa-graduation-cap",
                  title: "S1 Teknik Informatika",
                  sub: "UHAMKA, 2023",
                },
                {
                  icon: "fas fa-briefcase",
                  title: "IT Support",
                  sub: "PT. Inti Prima Rasa",
                },
                {
                  icon: "fas fa-laptop-code",
                  title: "Bootcamp Fullstack",
                  sub: "Dibimbing.id",
                },
                {
                  icon: "fas fa-map-marker-alt",
                  title: "Jakarta",
                  sub: "Indonesia",
                },
              ].map(({ icon, title, sub }) => (
                <div
                  key={title}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4"
                >
                  <i
                    className={`${icon} text-emerald-500 dark:text-emerald-400 mb-3 text-lg`}
                  />
                  <p className="text-slate-700 dark:text-slate-200 font-medium text-sm">
                    {title}
                  </p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium uppercase tracking-widest mb-3 text-center">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">
              Yang saya pakai sehari-hari
            </h2>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {ALL_SKILLS.map(({ name, icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2.5 rounded-lg text-sm hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all cursor-default"
                >
                  {icon && (
                    <i
                      className={`${icon} text-emerald-500 dark:text-emerald-400`}
                    />
                  )}
                  {name}
                </span>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-emerald-500 transition-colors"
              >
                Lihat semua skill <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-emerald-500 dark:text-emerald-400 text-sm font-medium uppercase tracking-widest mb-3">
                  Projects
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
                  Yang baru selesai
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-slate-400 text-sm hover:text-emerald-500 transition-colors"
              >
                Semua projects <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {FEATURED_PROJECTS.map(
                ({ id, image, title, description, tags, demo, github }) => (
                  <div
                    key={id}
                    className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-500 transition-all"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-slate-800 dark:text-slate-100 font-bold text-lg mb-2">
                        {title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-400/20 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-emerald-500 text-white py-2 rounded-lg text-center text-sm font-semibold hover:bg-emerald-400 transition-colors"
                        >
                          Live Demo
                        </a>
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 py-2 rounded-lg text-center text-sm hover:border-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-emerald-500 transition-colors"
              >
                Semua projects <i className="fas fa-arrow-right text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white dark:bg-slate-800/50">
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Ada project yang mau digarap?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Terbuka untuk peluang kerja, kolaborasi, maupun freelance. Yuk
            ngobrol!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
          >
            <i className="fas fa-paper-plane text-sm" />
            Kirim Pesan
          </Link>
        </div>
      </section>
    </div>
  );
}
