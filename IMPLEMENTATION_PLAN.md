# Cyber-Gloss Portfolio — Implementation Plan

> **For AI Assistants:** This document is the source of truth for the project architecture. Reference it before modifying any file. All code MUST follow Symbols/DOMQL v3 rules (see CLAUDE.md). Use `symbols-mcp` tools for all generation, auditing, and validation.

## Project Overview

Single-page professional portfolio for a Senior QA Automation Engineer. Built with Symbols/DOMQL v3 framework (smbls 3.8.9). Dark-mode "Cyber-Gloss" aesthetic with glassmorphism, 3D interactions, and scroll-driven animations.

## Architecture Map

```
symbols/
├── state.js ................ Global state (profile + projects seed data)
├── config.js ............... Framework config (dark theme forced)
├── app.js .................. App root (empty)
├── designSystem/
│   ├── color.js ............ Base + cyber/neon/surface/glass/glow tokens
│   ├── theme.js ............ Base + glass/glass-elevated/hero/badge themes
│   ├── animation.js ........ Base + orbFloat/scrollReveal/shimmer
│   ├── icons.js ............ mapPin/briefcase/chevronDown/mail/github/linkedin/externalLink/code + tech logos
│   ├── font_family.js ...... Inter + JetBrains Mono
│   ├── typography.js ....... Default (base:16, ratio:1.25)
│   ├── spacing.js .......... Default (base:16, ratio:1.618)
│   └── timing.js ........... Default bezier
├── components/
│   ├── index.js ............ export * from each component file
│   ├── GlassCard.js ........ Reusable glassmorphism container
│   ├── AmbientOrb.js ....... Background animated light effect
│   ├── HeroSection.js ...... 100vh intro with headline + profile info
│   ├── TechBadge.js ........ Individual tech skill pill
│   ├── TechMarquee.js ...... Auto-scrolling badge carousel
│   ├── InteractiveProjectTile.js .. GlassCard + 3D tilt + project data
│   ├── BentoProjectGrid.js . CSS Grid asymmetrical layout
│   ├── SpotlightWrapper.js . Mouse-tracking radial glow utility
│   ├── MagneticButton.js ... Button with magnetic cursor effect
│   ├── ScrollRevealSection.js .. IntersectionObserver fade-in wrapper
│   └── ContactSection.js ... CTA + social links
├── functions/
│   ├── index.js ............ export * from each function file
│   ├── initScrollReveal.js . IntersectionObserver setup (el.call pattern)
│   ├── initTiltEffect.js ... 3D card tilt math
│   └── initMagneticEffect.js  Magnetic proximity math
├── pages/
│   ├── index.js ............ Route map: { '/': main }
│   └── main.js ............. Page composition (extends: 'Page')
└── index.html .............. SEO-optimized entry point
```

## Component Hierarchy

```
main (Page)
├── AmbientOrb (position: absolute, z-index: 0)
├── HeroSection (tag: 'section', 100vh)
│   ├── Headline (text from state)
│   ├── Subtitle (text from state)
│   ├── StatusBadge (Icon + text)
│   ├── LocationBadge (Icon + text)
│   └── ScrollIndicator (animated Icon)
├── ScrollRevealSection
│   └── TechMarquee
│       └── TechBadge[] (children + childExtends, childrenAs: 'state')
├── ScrollRevealSection
│   └── BentoProjectGrid (display: grid)
│       └── InteractiveProjectTile[] (children + childExtends, childrenAs: 'state')
│           ├── ProjectTitle (text from state)
│           ├── ProjectSummary (text from state)
│           └── TagList > TechBadge[] (children + childExtends)
└── ScrollRevealSection
    └── ContactSection
        ├── MagneticButton (Contact CTA)
        └── SocialLinks (Icon + Link)
```

## Critical DOMQL v3 Rules Quick Reference

| Rule | Correct | Wrong |
|---|---|---|
| Components | `export const X = { ... }` (object) | `export const X = () => { ... }` (function) |
| Imports | PascalCase key auto-extends | `import { X } from './X.js'` |
| Extends | `extends: 'ComponentName'` (string) | `extends: ComponentVar` (variable) |
| Flex layout | `flow: 'x'` or `flow: 'y'` | `extends: 'Flex'` |
| Text | `text: 'hello'` | `extends: 'Text'` |
| Box | just use props | `extends: 'Box'` |
| Colors | `color: 'white.7'` (dot-notation) | `color: 'white .7'` (space) |
| Spacing | `padding: 'A B'` (tokens) | `padding: '16px 26px'` (px) |
| State updates | `s.update({ key: val })` | `s.key = val` |
| Icons | `extends: 'Icon', icon: 'name'` | `tag: 'svg'`, inline SVG |
| Events | `onClick: (e, el, s) => ...` | `on: { click: fn }` |
| Design system | lowercase (`color`, `theme`) | UPPERCASE (`COLOR`, `THEME`) |

## Imperative DOM Usage (Accepted Exceptions)

These effects require `el.node` reads (permitted by Rule 39) and ephemeral `el.node.style.transform` writes for 60fps mouse-tracking:

1. **3D Tilt** — `getBoundingClientRect()` read → `style.transform` write
2. **Magnetic Button** — `getBoundingClientRect()` read → `style.transform` write  
3. **Scroll Reveal** — IntersectionObserver setup in `onRender` with `__initialized` guard

All logic lives in `functions/` and is called via `el.call('fnName')`.

## State Shape

```js
{
  profile: {
    name: "Allen",
    headline: "Senior Software QA Automation Engineer & Tech Lead",
    location: "Davao City, Philippines",
    status: "Actively seeking new professional opportunities",
    coreSkills: ["Java", "Kotlin", "Swift", "JavaScript", "DOMQL3", "SQLite", "Automation Frameworks"]
  },
  projects: [
    { id: "proj_1", title: "...", summary: "...", tags: [...], bentoSize: "large" },
    { id: "proj_2", title: "...", summary: "...", tags: [...], bentoSize: "medium" },
    { id: "proj_3", title: "...", summary: "...", tags: [...], bentoSize: "large" },
    { id: "proj_4", title: "...", summary: "...", tags: [...], bentoSize: "medium" }
  ]
}
```

## Design Tokens Added

| Token | Value | Usage |
|---|---|---|
| `cyber` | `#00f0ff` | Primary accent, headlines, glows |
| `neon` | `#8b5cf6` | Secondary accent, tags, orb |
| `surface` | `#09090b` | Page background |
| `glass` | `#18181b` | Card surfaces |
| `glow` | `#06b6d4` | Ambient orb, spotlight |
