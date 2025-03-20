# Personal Portfolio Website

A personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS to showcase my projects and skills as a software engineer.

## Live Demo

[Check out the live website](https://darrenzhang.dev/) (Replace with your actual deployment URL)

## Features

- 🎨 Modern and responsive design with animations
- 📱 Mobile-friendly interface
- 🌙 Dark mode design
- 🔍 SEO optimized
- ⚡ Fast loading with Next.js
- 📊 Section for skills and technologies
- 🚀 Project showcase with GitHub links
- 📝 Contact information
- 📄 Resume download

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Sections

- **Hero** - Introduction and social links
- **About** - Personal information and background
- **Projects** - Featured projects with descriptions and links
- **Skills** - Technologies and programming languages
- **Contact** - Ways to get in touch
- **Footer** - Quick links and additional contact info

## Project Structure

```
personal-website/
├── public/                  # Static files
│   ├── images/              # Images used in the website
│   └── Darren Zhang Resume.pdf  # Resume file
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/          # React components
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── NavBar.tsx
│       ├── ProjectsSection.tsx
│       └── SkillsSection.tsx
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/darrenzhang905/personal-website.git
   cd personal-website
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Future Enhancements

- Blog section
- Animation improvements

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Deployment](https://vercel.com/) - By Vercel

---

Built by Darren Zhang
