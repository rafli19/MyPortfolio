import { useState } from "react";
import emailjs from "@emailjs/browser";
import { INTEREST_OPTIONS, SOCIAL_LINKS } from "../data/portfolioData";

const CONTACT_INFO = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "raflierlangga19@gmail.com",
    href: "mailto:raflierlangga19@gmail.com",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Jakarta, Indonesia",
    href: null,
  },
];

export default function Contact() {
  const [interest, setInterest] = useState("Job Opportunity");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        "service_y7v57s9",
        "template_g7atq79",
        {
          from_name: form.name,
          from_email: form.email,
          interest: interest,
          message: form.message,
        },
        "6wKbiVdDvqX7Lv1Qn",
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-500 dark:text-emerald-400 font-medium tracking-widest uppercase text-sm mb-2">
            Let's talk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
            Get In Touch
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-5xl mx-auto">
          <div className="flex-1 space-y-8">
            <div>
              <p className="text-4xl font-light leading-tight text-slate-800 dark:text-slate-100">
                Mari kita bahas
              </p>
              <p className="text-4xl font-light leading-tight text-slate-800 dark:text-slate-100">
                sesuatu
              </p>
              <p className="text-4xl font-bold text-emerald-500 dark:text-emerald-400">
                yang menarik.
              </p>
              <div className="mt-6 w-16 h-0.5 bg-emerald-500 dark:bg-emerald-400" />
              <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                Saya selalu menyambut kolaborasi profesional, proyek freelance,
                maupun pertukaran ide inovatif.
              </p>
            </div>

            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`${icon} text-emerald-500 dark:text-emerald-400`}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-700 dark:text-slate-300">
                        {value}
                      </p>
                    )}
                  </div>
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
          </div>

          <div className="flex-1 w-full bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-slate-400">What brings you here?</p>

              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setInterest(option)}
                    className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-200 ${
                      interest === option
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {["name", "email"].map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field === "name" ? "Your name" : "Your email"}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-b border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-emerald-500 focus:outline-none bg-transparent transition-colors duration-200 peer"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 peer-focus:w-full" />
                </div>
              ))}

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-b border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-emerald-500 focus:outline-none bg-transparent transition-colors duration-200 peer resize-none"
                />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 peer-focus:w-full" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 text-white py-4 rounded-md font-semibold hover:bg-emerald-400 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane transition-transform group-hover:translate-x-1" />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 rounded-lg p-3">
                  <i className="fas fa-check-circle" />
                  Pesan terkirim! Terima kasih, saya balas secepatnya via email.
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/20 rounded-lg p-3">
                  <i className="fas fa-exclamation-circle" />
                  Gagal mengirim pesan. Silakan coba lagi.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
