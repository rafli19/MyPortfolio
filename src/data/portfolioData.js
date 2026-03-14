// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain", level: 90 },
      { name: "CSS3", icon: "devicon-css3-plain", level: 85 },
      { name: "JavaScript", icon: "devicon-javascript-plain", level: 80 },
      { name: "React", icon: "devicon-react-original", level: 85 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    skills: [
      { name: "PHP", icon: "devicon-php-plain", level: 85 },
      { name: "Laravel", icon: "devicon-laravel-plain", level: 85 },
      { name: "Node.js", icon: "devicon-nodejs-plain", level: 80 },
      { name: "REST API", icon: "fas fa-plug", level: 85 },
    ],
  },
  {
    category: "Database & Tools",
    icon: "fas fa-database",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain", level: 85 },
      { name: "MongoDB", icon: "devicon-mongodb-plain", level: 75 },
      { name: "Git", icon: "devicon-git-plain", level: 80 },
      { name: "GitHub", icon: "devicon-github-original", level: 80 },
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 1,
    image: "img/projects/1_BrickTechService.png",
    title: "Laptop Service Website",
    description:
      "Website layanan servis laptop di Jakarta dengan tampilan modern menggunakan Tailwind CSS — mencakup informasi layanan repair hardware/software, upgrade SSD/RAM, dan konsultasi gratis.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    demo: "https://bricktech.rafvoid.my.id/",
    github:
      "https://github.com/rafli19/MiniProject-Tailwind-FWD9-RafliErlangga",
  },
  {
    id: 2,
    image: "img/projects/2_Cinenova.png",
    title: "Cinenova",
    description:
      "Platform streaming film ala Netflix dengan arsitektur fullstack terpisah — Frontend dibangun dengan React 19, sementara Backend menggunakan Laravel 12 dengan Sanctum untuk autentikasi berbasis token.",
    tags: [
      "Javascript",
      "React 19",
      "Laravel 12",
      "Sanctum",
      "Tailwind",
      "MySQL",
    ],
    demo: "https://app.rafvoid.my.id/",
    github: "https://github.com/rafli19/HandsOn-day20-FWD9-RafliErlangga",
  },
  {
    id: 3,
    image: "img/projects/3_POS-APP.png",
    title: "POS App",
    description:
      "Aplikasi Point of Sales fullstack dengan 3 role (Admin, Owner, User) dan arsitektur terpisah antara Frontend React dan Backend Laravel API — mencakup manajemen produk, transaksi, dan laporan penjualan.",
    tags: [
      "Javascript",
      "React 19",
      "Laravel 12",
      "Sanctum",
      "Tailwind",
      "MySQL",
    ],
    demo: "https://pos-app.rafvoid.my.id/login",
    github: "https://github.com/rafli19/Hands-on_day16_FWD9_RafliErlangga",
  },
  {
    id: 4,
    image: "img/projects/4_WALLET-APP.png",
    title: "Wallet App",
    description:
      "Mini Wallet SPA fullstack dengan fitur top-up, transfer antar user, dan riwayat mutasi. Dibangun dengan React 19 + Laravel Sanctum, dilengkapi validasi ketat dan database transaction rollback.",
    tags: [
      "Javascript",
      "React 19",
      "Laravel 12",
      "Sanctum",
      "Tailwind",
      "MySQL",
    ],
    demo: "https://walletapp.rafvoid.my.id/login",
    github: "https://github.com/rafli19/Assignment-Day16-FWD9-RafliErlangga",
  },
];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/rafli-e-a2396b134/",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/rafli19",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/erlangfly19/",
    icon: "fab fa-instagram",
    label: "Instagram",
  },
];

// ─── CONTACT OPTIONS ──────────────────────────────────────────────────────────

export const INTEREST_OPTIONS = [
  "Job Opportunity",
  "Collaboration",
  "Freelance Project",
];
