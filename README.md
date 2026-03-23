# Zaid Mayers - Portfolio

### [View Live Demo](#)

---

## Introduction

Welcome to the source code of Zaid Mayers' personal portfolio. This project is a modern, fully responsive web application built to showcase skills, research experience, projects, and professional background as a Machine Learning & AI Engineer and Data Scientist.

Built with a focus on clean design, smooth user experience, and high performance — leveraging **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**, with all animations powered by **Framer Motion**.

## Key Features

- **Modern Tech Stack:** Built with Next.js (App Router), React, and TypeScript.
- **Black & White Theme:** A clean, minimal monochrome design with a dark background and white accents.
- **Stunning Animations:** Fluid, performant animations using Framer Motion including a 3D carousel for projects.
- **Fully Responsive:** Mobile-first design that looks great on all devices.
- **Component-Based Architecture:** Organized into logical, reusable components for easy maintenance.
- **SEO Optimized:** Built with SEO best practices via Next.js server-side rendering.
- **Interactive Sections:**
  - **Hero:** Animated introduction with social links and resume download.
  - **About:** Background summary, contact info, and education (MS + BTech).
  - **Experience:** Professional timeline with research projects and PI details.
  - **Projects:** 3D rotating carousel showcasing featured work.
  - **Skills:** Visual skill cards grouped by category (ML/AI, Programming, Cloud, Database).
  - **Contact:** Contact form with social links.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/[your-repo].git
   cd [your-repo]
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   # or npm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
.
├── public/                   # Static assets (resume PDF, images)
├── src/
│   ├── app/                  # Next.js App Router, pages, and layouts
│   │   └── (root)/page.tsx   # Main portfolio page
│   ├── components/
│   │   ├── Base/Portfolio/   # Section components (Hero, About, Experience, etc.)
│   │   ├── Base/             # Header, Footer
│   │   ├── Global/           # Colors, theme provider
│   │   └── ui/               # shadcn/ui components
│   └── data/
│       └── portfolioData.ts  # All portfolio content (skills, projects, experience)
├── tailwind.config.ts
└── ...
```

### Updating Content

All portfolio content lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). To update:

- **Skills** → edit `skillsData`
- **Projects** → edit `projects`
- **Experience** → edit `experiences`
- **Education** → edit `education`
- **Navigation** → edit `navigation`

---

## Deployment

This portfolio is deployed on **Vercel**.

1. Push your code to a GitHub repository.
2. Sign up at [Vercel](https://vercel.com/) and import your repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Every push to `main` triggers an automatic redeploy.

---

## Contact

**Zaid Mayers**
- **Email:** [zaidmayers2@gmail.com](mailto:zaidmayers2@gmail.com)
- **LinkedIn:** [linkedin.com/in/zaid-mayers-b1ba7121a](https://linkedin.com/in/zaid-mayers-b1ba7121a/)

---

## License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.
