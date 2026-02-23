# 📐 Next.js Project Structure - Visual Reference

## 🗂️ Complete File Tree

```
my-portfolio/                          (Your Next.js project root)
│
├── 📁 app/                            (Next.js App Router)
│   │
│   ├── 📁 components/                 (All UI components)
│   │   ├── 📄 AboutSection.tsx        ✅ 'use client' | About section
│   │   ├── 📄 ContactSection.tsx      ✅ 'use client' | Contact form
│   │   ├── 📄 ExperienceSection.tsx   ✅ 'use client' | Timeline
│   │   ├── 📄 FloatingShapes.tsx      ✅ 'use client' | Background
│   │   ├── 📄 Footer.tsx              ✅ 'use client' | Footer
│   │   ├── 📄 GridBackground.tsx      ✅ Server     | Grid pattern
│   │   ├── 📄 HeroSection.tsx         ✅ 'use client' | Hero
│   │   ├── 📄 Navigation.tsx          ✅ 'use client' | Nav bar
│   │   ├── 📄 ProjectsSection.tsx     ✅ 'use client' | Projects
│   │   └── 📄 TechStackSection.tsx    ✅ 'use client' | Tech stack
│   │
│   ├── 📄 layout.tsx                  ✅ Root layout (Server Component)
│   ├── 📄 page.tsx                    ✅ Home page ('use client')
│   ├── 📄 globals.css                 ✅ Global styles + Tailwind
│   └── 📄 favicon.ico                 ⚙️  (Next.js default)
│
├── 📁 public/                         (Static assets)
│   └── (Your images, icons, etc.)
│
├── 📄 next.config.js                  ✅ Next.js config
├── 📄 tailwind.config.ts              ✅ Tailwind config
├── 📄 tsconfig.json                   ⚙️  TypeScript config
├── 📄 package.json                    ✅ Dependencies
├── 📄 .gitignore                      ⚙️  Git ignore
└── 📄 README.md                       📖 Your readme

Legend:
✅ = Files you need to copy/create
⚙️  = Next.js default files
📖 = Documentation
```

---

## 📋 Component Hierarchy

```
page.tsx ('use client')
│
├── GridBackground (server)
│
├── Navigation ('use client')
│   └── Mobile Menu (conditional)
│
├── FloatingShapes ('use client')
│   ├── Blob 1
│   ├── Blob 2
│   └── Blob 3
│
├── HeroSection ('use client')
│   ├── Gradient Text
│   ├── CTA Buttons
│   └── Scroll Indicator
│
├── AboutSection ('use client')
│   ├── Profile Circle
│   ├── About Text
│   └── Skill Tags (map)
│
├── TechStackSection ('use client')
│   └── Tech Cards (map)
│       ├── Icon
│       ├── Name
│       └── Description
│
├── ProjectsSection ('use client')
│   └── Project Cards (map)
│       ├── Image
│       ├── Title
│       ├── Description
│       ├── Tech Badges
│       └── Action Buttons
│
├── ExperienceSection ('use client')
│   └── Timeline Items (map)
│       ├── Icon
│       ├── Content Card
│       └── Dot Indicator
│
├── ContactSection ('use client')
│   ├── Contact Form
│   │   ├── Name Input
│   │   ├── Email Input
│   │   ├── Message Textarea
│   │   └── Submit Button
│   └── Social Links (map)
│
└── Footer ('use client')
    ├── Copyright
    ├── Social Icons
    └── Back to Top
```

---

## 🎨 Style Architecture

```
globals.css
│
├── @import fonts (Google Fonts)
│
├── @tailwind directives
│   ├── base
│   ├── components
│   └── utilities
│
├── CSS Variables (:root)
│   ├── --deep-black
│   ├── --neon-blue
│   ├── --soft-purple
│   └── Glass effects
│
├── Base Styles (@layer base)
│   ├── Body defaults
│   └── Typography
│
└── Custom Utilities
    ├── Scrollbar
    ├── Selection
    └── Focus styles
```

---

## 🔄 Data Flow

```
page.tsx
   │
   ├─→ Layout Components (Static)
   │   ├─→ GridBackground
   │   ├─→ Navigation
   │   └─→ FloatingShapes
   │
   └─→ Section Components (With Data)
       │
       ├─→ HeroSection
       │   └─ Static content
       │
       ├─→ AboutSection
       │   └─ skills[] array
       │
       ├─→ TechStackSection
       │   └─ techStack[] array
       │
       ├─→ ProjectsSection
       │   └─ projects[] array
       │
       ├─→ ExperienceSection
       │   └─ timeline[] array
       │
       ├─→ ContactSection
       │   ├─ Form state (useState)
       │   └─ socials[] array
       │
       └─→ Footer
           └─ Static content
```

---

## 📦 Import Map

```
page.tsx
├── import HeroSection from './components/HeroSection'
├── import AboutSection from './components/AboutSection'
├── import TechStackSection from './components/TechStackSection'
├── import ProjectsSection from './components/ProjectsSection'
├── import ExperienceSection from './components/ExperienceSection'
├── import ContactSection from './components/ContactSection'
├── import Navigation from './components/Navigation'
├── import Footer from './components/Footer'
├── import FloatingShapes from './components/FloatingShapes'
└── import GridBackground from './components/GridBackground'

Each Component
├── import { motion } from 'motion/react'
├── import { useInView } from 'motion/react' (if needed)
├── import { useRef, useState } from 'react' (if needed)
└── import { Icon1, Icon2 } from 'lucide-react'

layout.tsx
├── import type { Metadata } from 'next'
├── import './globals.css'
└── export metadata, RootLayout
```

---

## 🎯 Key Dependencies

```
package.json
├── next (14.x) ────────────→ Framework
├── react (18.3.1) ─────────→ UI Library
├── react-dom (18.3.1) ─────→ DOM Renderer
├── typescript (5.x) ───────→ Type Safety
├── tailwindcss (4.x) ──────→ Styling
├── motion (12.23.24) ──────→ Animations
└── lucide-react (0.487.0) ─→ Icons
```

---

## 🔧 Configuration Files

```
next.config.js
└── Basic Next.js setup
    ├── reactStrictMode: true
    └── swcMinify: true

tailwind.config.ts
└── Tailwind configuration
    ├── content: ["./app/**/*.tsx"]
    └── theme.extend
        ├── colors (custom)
        ├── backgroundImage
        └── boxShadow

tsconfig.json
└── TypeScript configuration
    ├── compilerOptions
    └── include/exclude paths

package.json
└── Project metadata
    ├── scripts (dev, build, start)
    ├── dependencies
    └── devDependencies
```

---

## 🎨 Color System

```
Brand Colors
│
├── Primary: #0B0F19 (Deep Black)
│   └── Used for: Main background
│
├── Accent 1: #00F5FF (Neon Blue)
│   └── Used for: Links, highlights, glows
│
└── Accent 2: #7F5AF0 (Soft Purple)
    └── Used for: Secondary highlights, gradients

Gradients
│
├── Purple→Blue: linear-gradient(135deg, #7F5AF0, #00F5FF)
├── White→Blue: linear-gradient(135deg, #FFF, #00F5FF)
└── Blue→Purple: linear-gradient(180deg, #00F5FF, #7F5AF0)

Glassmorphism
│
├── Background: rgba(255, 255, 255, 0.05)
├── Border: rgba(255, 255, 255, 0.1)
└── Backdrop: blur(10px-20px)
```

---

## ⚡ Animation System

```
Motion Animations
│
├── Scroll-based
│   ├── useInView hook
│   └── once: true (trigger once)
│
├── Initial State
│   ├── opacity: 0
│   └── y: 20-50 (start position)
│
├── Animate State
│   ├── opacity: 1
│   └── y: 0 (end position)
│
├── Transitions
│   ├── duration: 0.3-0.8s
│   ├── delay: staggered (0.1-0.2s)
│   └── ease: easeInOut
│
└── Hover Effects
    ├── scale: 1.02-1.1
    ├── y: -8 (lift)
    └── boxShadow: glow
```

---

## 📱 Responsive Breakpoints

```
Mobile First Approach

< 768px (Mobile)
├── Single column
├── Hamburger menu
├── Reduced padding
└── Simplified layout

768px - 1024px (Tablet)
├── 2 columns
├── Medium padding
└── Balanced layout

> 1024px (Desktop)
├── Multi-column
├── Full features
├── Maximum padding
└── Side-by-side layouts
```

---

## 🚀 Build Process

```
Development
npm run dev
├── Hot reload
├── Source maps
└── Fast refresh

Production Build
npm run build
├── Optimize
├── Minify
├── Generate static
└── Create .next/

Start Production
npm run start
└── Serve optimized build
```

---

## 📊 Performance Budget

```
Target Metrics
│
├── First Contentful Paint: < 1.8s
├── Largest Contentful Paint: < 2.5s
├── Time to Interactive: < 3.8s
├── Cumulative Layout Shift: < 0.1
└── Total Blocking Time: < 300ms

Lighthouse Scores
│
├── Performance: 95+
├── Accessibility: 95+
├── Best Practices: 100
└── SEO: 100
```

---

## 🔒 Security Checklist

```
✅ No API keys in code
✅ Environment variables for secrets
✅ HTTPS enabled (Vercel auto)
✅ Content Security Policy ready
✅ No eval() usage
✅ Dependencies updated
✅ npm audit clean
```

---

This visual reference shows exactly how your Next.js portfolio is structured!
Use this as a quick reference when building or customizing. 🎯
