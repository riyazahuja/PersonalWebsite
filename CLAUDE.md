# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Riyaz Ahuja's personal portfolio website, built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site showcases research in automated theorem proving and machine learning for formal mathematics.

## Development Commands

```bash
npm run dev      # Start development server (default port 3000)
npm run build    # Create production build
npm run lint     # Run ESLint
npm start        # Start production server
```

Note: `next.config.mjs` has `ignoreBuildErrors` and `ignoreDuringBuilds` enabled for TypeScript and ESLint.

## Architecture

### Data Layer
All content (news, publications, projects, talks, past work) is stored in `lib/data.ts`. This file defines:
- TypeScript interfaces: `NewsItem`, `Publication`, `OtherProject`, `Talk`, `PastWork`
- Data arrays: `newsItems[]`, `publications[]`, `otherProjects[]`, `talks[]`, `pastWork[]`
- Helper functions: `getPublicationById()`, `getNewsItemById()`, `getPublishedPublications()`, `getInProgressPublications()`

When adding new content, edit the arrays in `lib/data.ts` directly. No CMS or database is used.

### Routing Structure
- `/` - Single-page portfolio with all sections:
  - Hero with video background and typing animation
  - About section with social links in left margin
  - News section with scrolling "breaking news" banners
  - Research section with publications (published + in-progress with divider/fade)
  - Projects section
  - Other section (Talks and Past Work subsections)

All content is on one page with scroll-based navigation.

### Component Patterns

**Section Components** (all use consistent left-margin link pattern):
- `AboutSection.tsx` - Biography with social links in left margin
- `NewsSection.tsx` - News items with scrolling banners top/bottom, optional links in left margin
- `ResearchSection.tsx` - Publications with paper/GitHub/website links in left margin, divider separates published from in-progress (faded)
- `ProjectsSection.tsx` - Other projects with GitHub links in left margin
- `OtherSection.tsx` - Talks and Past Work subsections with links in left margin

**Hero Component** (`components/Hero.tsx`)
- Background video (autoplay, loop, muted, no controls): `/public/videos/hero-background.mp4`
- Typing animation: "hi, i'm riyaz."
- Floating navigation that moves on scroll (desktop only)
- Scroll indicator to jump to About section
- Active section highlighting in navigation based on scroll position
- Text color changed to papyrus-white for video overlay

**Custom Cursor** (`components/CustomCursor.tsx`)
- Desktop only (min-width: 1024px, hover: hover, pointer: fine)
- Follows mouse, grows on hover over clickable elements
- Disabled on mobile/touch devices

**Left Margin Link Pattern**:
All sections use absolute positioning at `-left-20` or `-left-24` for icons/links aligned to content. Icons are graphite-gray with aureate-gold hover state.

### Design System

**Fonts:**
- Inter: Body text, UI elements
- Lora: Headings (h1-h6)
- JetBrains Mono: Captions, code, monospace elements

**Brand Colors** (defined in `tailwind.config.ts`):
- `stagira-indigo` (#1A1B3E) - Primary brand color
- `aureate-gold` (#F3B23E) - Accent/highlights
- `papyrus-white` (#FAF7F2) - Background
- `sage-green` (#5FA07A) - Status: In Research
- `crimson-red` (#C44545) - Physics, News
- `graphite-gray` (#646473) - Text, neutral elements

**Typography Scale:**
- h1: 64px / 110% line-height / 700 weight
- h2: 48px / 115% / 600
- h3: 36px / 120% / 600
- body-1: 18px / 160% / 400
- body-2: 16px / 160% / 400
- caption: 14px / 150% / 400

**Category Color Mapping:**
- Math → stagira-indigo
- Physics → crimson-red
- Bio → sage-green
- Chem → aureate-gold
- Interface → graphite-gray
- News → crimson-red
- Essay → stagira-indigo

### Scrolling Banners
News section uses `animate-scroll-left` and `animate-scroll-right` for infinite horizontal scrolling "BREAKING NEWS" text. Animations defined in `tailwind.config.ts` with 30s linear infinite timing.

### Navigation Behavior
Navigation is fixed in top-right corner. On scroll (desktop ≥1160px), it moves from top: 5% to top: 35vh. Active section determined by scroll position with a sampling point at viewport_top + viewport_height/3. Navigation items: about, news, research, projects, other.

### Image Handling
`next.config.mjs` sets `images.unoptimized: true`. All images are in `/public/images/`.

## Key Files to Understand

- `lib/data.ts` - All content and data structures (news, publications, projects, talks, past work)
- `app/globals.css` - Global styles, Leon Bubova-inspired layout, custom scrollbar
- `tailwind.config.ts` - Design system tokens, custom animations (including scroll-left/scroll-right)
- `components/Hero.tsx` - Hero with video background, typing animation, and navigation
- `components/AboutSection.tsx` - About with left-margin social links pattern
- `components/NewsSection.tsx` - News with scrolling banners
- `components/ResearchSection.tsx` - Publications with divider/fade for in-progress items
- `app/page.tsx` - Single-page portfolio composition
