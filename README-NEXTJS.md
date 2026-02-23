# Next.js Portfolio - Setup Instructions

This is a modern, premium dark-themed developer portfolio built with **Next.js 14**, featuring glassmorphism effects, smooth animations with Motion (Framer Motion), and a futuristic design.

## 🚀 Quick Start with Next.js

### Option 1: Create a New Next.js Project

1. **Create a new Next.js project:**
```bash
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --app --no-src-dir
cd portfolio-nextjs
```

2. **Install required dependencies:**
```bash
npm install motion lucide-react
```

3. **Copy the following files from this project:**
   - `/src/app/components/` → `/app/components/`
   - `/src/app/layout.tsx` → `/app/layout.tsx`
   - `/src/app/page.tsx` → `/app/page.tsx`
   - `/src/styles/fonts.css` → Create `/app/fonts.css`
   - `/src/styles/theme.css` → Update your `tailwind.config.ts`

4. **Update your `tailwind.config.ts`:**
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0B0F19',
        'neon-blue': '#00F5FF',
        'soft-purple': '#7F5AF0',
      },
    },
  },
  plugins: [],
};
export default config;
```

5. **Run the development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 📦 File Structure for Next.js

```
portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingShapes.tsx
│   │   └── GridBackground.tsx
│   ├── fonts.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Key Features

- ✅ **Next.js 14 App Router** - Modern React Server Components
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS v4** - Utility-first styling
- ✅ **Motion (Framer Motion)** - Smooth animations
- ✅ **Glassmorphism Design** - Modern UI effects
- ✅ **Fully Responsive** - Mobile, tablet, and desktop
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Custom Scrollbar** - Branded scroll experience
- ✅ **Scroll Animations** - Reveal on scroll effects

## 🔧 Customization

### Change Your Name and Info

Edit `/app/components/HeroSection.tsx`:
```typescript
<h1>Hi, I'm <span>Your Name</span></h1>
```

### Update Projects

Edit `/app/components/ProjectsSection.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Your description',
    tech: ['Tech1', 'Tech2'],
    // ...
  }
];
```

### Modify Colors

Edit your Tailwind config or inline styles to change:
- Deep Black: `#0B0F19`
- Neon Blue: `#00F5FF`
- Soft Purple: `#7F5AF0`

## 📝 Component Overview

All components use the `'use client'` directive as they contain interactive elements and animations.

### Main Components:
- **HeroSection** - Full-screen hero with gradient text and CTA buttons
- **AboutSection** - Profile section with skills tags
- **TechStackSection** - Grid of tech stack cards
- **ProjectsSection** - Featured projects with glassmorphism cards
- **ExperienceSection** - Animated timeline
- **ContactSection** - Contact form with social links
- **Navigation** - Sticky header with mobile menu
- **Footer** - Minimal footer with links

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Tips

1. All animations use CSS transforms for GPU acceleration
2. Images lazy load by default in Next.js
3. Components only render animations when in viewport
4. Smooth scroll is CSS-based

## 📄 License

Free to use for personal and commercial projects.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
