import { NavLink } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center text-center">
          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
              Get in Touch
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:raflierlangga19@gmail.com"
                  className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fas fa-envelope" />
                  raflierlangga19@gmail.com
                </a>
              </li>
              <li className="text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
                <i className="fas fa-map-marker-alt" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-4">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-400 hover:text-emerald-500 transition-colors text-2xl"
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 text-center">
          <p className="text-slate-400">
            &copy; {year} Rafli Erlangga. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
