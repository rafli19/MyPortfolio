import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="text-center">
        <p className="text-8xl font-bold text-emerald-500 dark:text-emerald-400 mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          Page Not Found
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Halaman yang kamu cari tidak ada.
        </p>
        <Link
          to="/"
          className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
