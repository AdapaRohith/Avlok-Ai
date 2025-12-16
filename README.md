# AVLOK AI Website

A premium dark-themed animated website for AVLOK AI - an AI Automation & Consulting company.

## Features

- 🌙 **Dark Theme** - Premium dark mode design with cyan accent colors
- ✨ **Smooth Animations** - Powered by Framer Motion and GSAP
- 🎨 **Glassmorphism** - Modern glass-effect UI components
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Built with Next.js 14
- 🎯 **Conversion Focused** - Designed to convert visitors into leads

## Tech Stack

- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP, Lenis (smooth scroll)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Main page component
├── components/
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Hero.tsx        # Hero section with particles
│   ├── Services.tsx    # Services grid section
│   ├── HowItWorks.tsx  # Animated timeline section
│   ├── WhyAvlok.tsx    # Stats and highlights section
│   ├── Consultation.tsx # Contact form with validation
│   ├── Footer.tsx      # Footer with social links
│   └── SmoothScroll.tsx # Lenis smooth scroll wrapper
```

## Sections

1. **Hero** - Full-screen hero with animated gradient background and particles
2. **Services** - Card grid showcasing AI automation services
3. **How It Works** - Animated timeline explaining the process
4. **Why AVLOK** - Statistics and highlights with animated counters
5. **Consultation** - Glassmorphism contact form with validation
6. **Footer** - Minimal footer with social links

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  'avlok-bg': '#0b0f14',
  'avlok-accent': '#00e5ff',
  'avlok-accent-secondary': '#1f8cff',
  'avlok-text': '#ffffff',
  'avlok-text-secondary': '#cfd8dc',
}
```

### Fonts

The website uses Inter, Poppins, and Montserrat fonts. Modify in `src/app/layout.tsx`.

## Building for Production

```bash
npm run build
npm run start
```

## License

© 2024 AVLOK AI. All rights reserved.
