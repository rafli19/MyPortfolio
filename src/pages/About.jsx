import { SOCIAL_LINKS } from "../data/portfolioData";

const EXPERIENCES = [
  {
    role: "Asisten Laboratorium Komputer",
    company: "Universitas Muhammadiyah Prof. Dr. Hamka",
    period: "Mar 2020 – Jul 2022",
    desc: "Membantu pelaksanaan praktikum, melakukan pemeliharaan rutin perangkat keras dan lunak, serta memberikan dukungan teknis kepada mahasiswa dan staf selama sesi laboratorium.",
  },
  {
    role: "Customer Service",
    company: "PT. Telkom Indonesia Witel Bogor",
    period: "Apr 2022 – Jun 2022",
    desc: "Monitoring kegiatan Sales Force, Orbit, dan ODP, serta menyusun laporan penjualan harian dan bulanan menggunakan Google Spreadsheet dan Ms. Excel.",
  },
  {
    role: "Operasional & Administrasi",
    company: "PT. Inti Prima Rasa",
    period: "Sep 2024 – Feb 2025",
    desc: "Mengelola stock opname harian dan bulanan, membuat Delivery Order, serta memastikan akurasi data sistem dan koordinasi dengan tim operasional dan gudang.",
  },
  {
    role: "Bootcamp Full Stack Web Developer",
    company: "Dibimbing.id",
    period: "Sep 2025 – March 2026",
    desc: "Mendalami frontend dan backend development untuk membangun aplikasi web end-to-end yang scalable dan user-friendly.",
  },
];

export default function About() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-500 dark:text-emerald-400 font-medium tracking-widest uppercase text-sm mb-2">
            Get to know me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            About Me
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-400/20 rounded-2xl translate-x-4 translate-y-4" />
            <img
              src="img/photo_profile.png"
              alt="Rafli Erlangga"
              className="relative w-full rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Halo, Saya Rafli! 👋
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                Lulusan S1 Teknik Informatika UHAMKA 2023. Memiliki pengalaman
                sebagai Asisten Lab Komputer, Customer Service di Telkom
                Indonesia, hingga Operasional & Administrasi di PT. Inti Prima
                Rasa.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Dari latar belakang tersebut, saya beralih fokus ke dunia
                pengembangan web dan saat ini sedang mendalami Full Stack Web
                Development di Dibimbing.id, mencakup frontend maupun backend
                development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "fas fa-graduation-cap",
                  label: "Education",
                  value: "S1 Teknik Informatika",
                },
                {
                  icon: "fas fa-university",
                  label: "University",
                  value: "Muhammadiyah University Prof. Dr. Hamka, 2023",
                },
                {
                  icon: "fas fa-map-marker-alt",
                  label: "Location",
                  value: "Jakarta, Indonesia",
                },
                {
                  icon: "fas fa-briefcase",
                  label: "Status",
                  value: "Open to Work",
                },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
                >
                  <i
                    className={`${icon} text-emerald-500 dark:text-emerald-400 mb-2`}
                  />
                  <p className="text-xs text-slate-400 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-slate-700 dark:text-slate-200 text-sm font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-400 transition-all"
                >
                  <i className={`${icon} text-lg`} />
                </a>
              ))}
            </div>

            <a
              href="assets/Resume_RafliErlangga.pdf"
              download
              className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-colors"
            >
              <i className="fas fa-download" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-10 text-center">
            Experience
          </h2>
          <div className="relative border-l-2 border-emerald-200 dark:border-emerald-400/30 ml-4">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="mb-10 ml-8 relative">
                <span className="absolute -left-11 w-5 h-5 bg-emerald-500 dark:bg-emerald-400 rounded-full border-4 border-slate-100 dark:border-slate-900 top-1" />
                <p className="text-xs text-emerald-500 dark:text-emerald-400 font-medium tracking-widest uppercase mb-1">
                  {exp.period}
                </p>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {exp.role}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400/80 text-sm font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
