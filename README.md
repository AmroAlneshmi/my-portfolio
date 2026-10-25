<div align="center">

# عمرو النشمي — Portfolio

**Personal portfolio website for Amr Al-Nashmi — Web Developer & Designer**

[![Live Site](https://img.shields.io/badge/🔗_Live_Site-amrneshmi.vercel.app-000?style=for-the-badge&logo=vercel&logoColor=white)](https://amrneshmi.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## ✨ Overview

A modern, fully responsive Arabic (RTL) portfolio website showcasing my work, skills, and background as a web developer and graphic designer. The site features a cinematic hero section with a creative clip-path photo reveal, smooth interactions, and a clean dark-themed layout designed to leave a strong first impression.

**🌐 Live at → [amrneshmi.vercel.app](https://amrneshmi.vercel.app/)**

---

## 🚀 Features

- **Cinematic Hero Section** — Full-screen photo with a dynamic clip-path reveal and blurred background effect
- **Interactive Skills Showcase** — Filterable skill categories (Programming / Design) with hover-driven image gallery
- **Right-to-Left (RTL) Layout** — Fully Arabic interface with native RTL support and Arabic typography (Badeen Display & Kufam fonts)
- **Certificates & Achievements** — Dedicated section highlighting certifications and community involvement
- **Responsive Design** — Fluid layout that adapts seamlessly from mobile to desktop
- **Optimized Performance** — WebP images, lazy loading, `fetchPriority` hints, and async decoding for fast load times
- **Contact Section** — Direct links to email, phone, and WhatsApp for easy communication

---

## 🛠️ Tech Stack

| Category       | Technology                                                        |
| -------------- | ----------------------------------------------------------------- |
| **Framework**  | [React 19](https://react.dev) with React Compiler                |
| **Build Tool** | [Vite 8](https://vite.dev)                                       |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com)                        |
| **Typography** | [Google Fonts](https://fonts.google.com) — Badeen Display, Kufam |
| **Deployment** | [Vercel](https://vercel.com)                                     |
| **Images**     | WebP format with lazy loading & priority hints                   |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/           # Images (WebP) & data configuration
│   │   ├── data.js       # Skills, certificates & languages data
│   │   ├── amr.webp      # Hero & footer portrait
│   │   └── *.webp        # Skill icons (React, JS, CSS, PHP, etc.)
│   ├── components/
│   │   ├── Header.jsx    # Navigation bar
│   │   ├── Hero.jsx      # Cinematic hero with clip-path effect
│   │   ├── About.jsx     # About me section
│   │   ├── Skills.jsx    # Interactive filterable skills gallery
│   │   ├── Certificates.jsx  # Certifications & achievements
│   │   ├── Languages.jsx     # Spoken languages
│   │   └── Footer.jsx    # Contact info & portrait
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry (RTL, Arabic lang)
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/AmroAlneshmi/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📬 Contact

| Channel      | Link                                                                           |
| ------------ | ------------------------------------------------------------------------------ |
| **Email**    | [amroalnashmi8@hotmail.com](mailto:amroalnashmi8@hotmail.com)                  |
| **Phone**    | [+966 57 677 0740](tel:+966576770740)                                          |
| **WhatsApp** | [Chat on WhatsApp](https://wa.me/966576770740)                                 |

---

<div align="center">

**Built with ❤️ by Amr Al-Nashmi**

</div>
