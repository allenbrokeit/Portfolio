# DESIGN.md — Cyber-Gloss Design System

> **For AI Agents:** This file is the single source of truth for visual design decisions. Parse the embedded JSON blocks to extract exact token values. Never invent new tokens — use only what is defined here. All DOMQL3 components MUST reference these tokens by name, never by raw value.

---

## 1. Color System

### 1.1 Base Palette

These are the raw color primitives registered in `designSystem/color.js`. Reference them by their token name in any DOMQL3 `color`, `background`, or `borderColor` property.

```json
{
  "base-palette": {
    "black":       "black",
    "white":       "#ffffff",
    "gray":        "#4e4e50",
    "codGray":     "#171717",
    "blue":        "#0474f2",
    "green":       "#389d34",
    "red":         "#e15c55",
    "yellow":      "#EDCB38",
    "orange":      "#e97c16",
    "transparent": "rgba(0, 0, 0, 0)"
  }
}
```

### 1.2 Brand Palette (Cyber-Gloss)

The project's unique accent colors. These define the visual identity.

```json
{
  "brand-palette": {
    "cyber":   "#00f0ff",
    "neon":    "#8b5cf6",
    "surface": "#09090b",
    "glass":   "#18181b",
    "glow":    "#06b6d4"
  },
  "usage": {
    "cyber":   "Primary accent — headlines, glows, CTA borders, icon highlights",
    "neon":    "Secondary accent — orb lighting, status icons, decorative elements",
    "surface": "Page background — deepest black, document theme @dark",
    "glass":   "Card surface — glassmorphism base layer",
    "glow":    "Ambient orb color — spotlight and atmospheric lighting"
  }
}
```

### 1.3 Semantic Text Colors

Derived from the `gray` base using Symbols' tint modifier syntax. Array index 0 = @dark mode, index 1 = @light mode.

```json
{
  "semantic-text": {
    "title":    { "dark": "--gray 1 -168", "light": "--gray 1 +168", "role": "Primary headings, highest contrast" },
    "caption":  { "dark": "--gray 1 -68",  "light": "--gray 1 +68",  "role": "Subtitles, secondary headings" },
    "paragraph":{ "dark": "--gray 1 -42",  "light": "--gray 1 +42",  "role": "Body text, meta labels" },
    "disabled": { "dark": "--gray 1 -26",  "light": "--gray 1 +26",  "role": "Disabled text, footer copy" },
    "line":     { "dark": "--gray 1 -16",  "light": "--gray 1 +16",  "role": "Dividers, subtle borders" }
  }
}
```

### 1.4 Color Modifier Syntax

Symbols supports dot-notation opacity and tint modifiers. Use these patterns — never raw `rgba()`.

```json
{
  "opacity-modifiers": {
    "white.03": "rgba(255,255,255,0.03) — glass background",
    "white.06": "rgba(255,255,255,0.06) — glass-elevated background, badge bg",
    "white.08": "rgba(255,255,255,0.08) — glass border, card default border",
    "white.12": "rgba(255,255,255,0.12) — glass-elevated border",
    "white.15": "rgba(255,255,255,0.15) — card hover border",
    "cyber.08": "rgba(0,240,255,0.08)   — badge hover bg, button hover bg",
    "cyber.15": "rgba(0,240,255,0.15)   — badge border",
    "cyber.25": "rgba(0,240,255,0.25)   — CTA button border",
    "cyber.35": "rgba(0,240,255,0.35)   — badge hover border",
    "cyber.5":  "rgba(0,240,255,0.50)   — CTA button hover border"
  },
  "syntax-rule": "Use `color.opacity` (dot notation). Example: `borderColor: 'cyber.25'`. NEVER use `rgba()` directly in component code."
}
```

---

## 2. Typography System

### 2.1 Font Families

```json
{
  "font-families": {
    "default": {
      "token": "Default",
      "stack": "Inter, system-ui, -apple-system, sans-serif",
      "weights": [300, 400, 500, 600, 700, 800, 900],
      "source": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      "role": "All UI text — headings, body, labels, buttons"
    },
    "monospace": {
      "token": "Mono",
      "stack": "JetBrains Mono, Fira Code, monospace",
      "weights": [400, 500, 700],
      "source": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap",
      "role": "Code snippets, technical labels, terminal-style text"
    }
  }
}
```

### 2.2 Type Scale

Generated from `base: 16, ratio: 1.25` (Major Third scale). Tokens are single uppercase letters. Use these tokens as `fontSize` values — never raw pixel values.

```json
{
  "type-scale": {
    "Y":  { "px": 12.8,  "rem": "0.8rem",   "role": "Caption, fine print, footer" },
    "Z":  { "px": 16,    "rem": "1rem",      "role": "Base body text, default" },
    "A":  { "px": 20,    "rem": "1.25rem",   "role": "Large body, card summary, subtitle" },
    "B":  { "px": 25,    "rem": "1.5625rem", "role": "Section subtitle, hero headline" },
    "C":  { "px": 31.25, "rem": "1.953rem",  "role": "Section heading (h3), marquee title" },
    "D":  { "px": 39.06, "rem": "2.441rem",  "role": "Major heading (h2), section title" },
    "E":  { "px": 48.83, "rem": "3.052rem",  "role": "Display heading" },
    "F":  { "px": 61.04, "rem": "3.815rem",  "role": "Hero title @mobileL" },
    "G":  { "px": 76.29, "rem": "4.768rem",  "role": "Hero title @tabletS" },
    "H":  { "px": 95.37, "rem": "5.96rem",   "role": "Hero title — largest display" }
  },
  "note": "Sub-tokens (Y1, Y2, Z1, Z2, A1, A2, etc.) exist between main tokens when subSequence: true."
}
```

### 2.3 Font Weights in Use

```json
{
  "font-weights": {
    "400": "Regular — body text, subtitles, secondary headings",
    "500": "Medium — badges, labels, UI elements",
    "600": "Semi-bold — CTA buttons, emphasized text",
    "700": "Bold — headings (h2, h3), section titles, card titles",
    "800": "Extra-bold — hero title (h1) only"
  }
}
```

### 2.4 Text Styles (Predefined Combinations)

```json
{
  "text-styles": {
    "hero-title": {
      "tag": "h1",
      "fontSize": "H",
      "fontWeight": "800",
      "letterSpacing": "-0.04em",
      "lineHeight": "0.9",
      "color": "white",
      "responsive": { "@tabletS": "G", "@mobileL": "F" }
    },
    "hero-headline": {
      "tag": "h2",
      "fontSize": "B",
      "fontWeight": "400",
      "lineHeight": "1.4",
      "color": "caption"
    },
    "section-title": {
      "tag": "h2",
      "fontSize": "D",
      "fontWeight": "700",
      "color": "white",
      "responsive": { "@mobileL": "C" }
    },
    "section-subtitle": {
      "tag": "h3",
      "fontSize": "C",
      "fontWeight": "700",
      "color": "white"
    },
    "card-title": {
      "tag": "h3",
      "fontSize": "A",
      "fontWeight": "700",
      "lineHeight": "1.2",
      "color": "white"
    },
    "body": {
      "fontSize": "Z",
      "fontWeight": "400",
      "lineHeight": "1.6",
      "color": "paragraph"
    },
    "body-lead": {
      "fontSize": "A",
      "fontWeight": "400",
      "lineHeight": "1.6",
      "color": "paragraph"
    },
    "caption": {
      "fontSize": "Y",
      "fontWeight": "400",
      "color": "disabled"
    },
    "badge-label": {
      "fontSize": "Y",
      "fontWeight": "500",
      "letterSpacing": "0.02em",
      "color": "cyber"
    }
  }
}
```

---

## 3. Spatial System (Spacing & Layout)

### 3.1 Spacing Scale

Generated from `base: 16, ratio: 1.618` (Golden Ratio). Tokens are single uppercase letters. Use these for all `padding`, `margin`, `gap`, `width`, `height`, `top`, `bottom`, `left`, `right`.

```json
{
  "spacing-scale": {
    "X":  { "px": 3,    "rem": "0.1875rem", "role": "Micro — badge inline padding" },
    "Y":  { "px": 6,    "rem": "0.375rem",  "role": "Tiny — icon-text gaps, tag gaps, micro margins" },
    "Z":  { "px": 10,   "rem": "0.625rem",  "role": "Small — inner gaps, badge padding, border-radius" },
    "A":  { "px": 16,   "rem": "1rem",      "role": "Base — standard gaps, margins, icon sizes, font base" },
    "B":  { "px": 26,   "rem": "1.625rem",  "role": "Medium — card padding, section gaps, icon sizes" },
    "C":  { "px": 42,   "rem": "2.625rem",  "role": "Large — section padding, bottom offsets" },
    "D":  { "px": 67,   "rem": "4.1875rem", "role": "XL — section vertical padding, major margins" },
    "E":  { "px": 109,  "rem": "6.8125rem", "role": "2XL — reserved for large spacing" },
    "F":  { "px": 177,  "rem": "11.0625rem","role": "3XL — contact section padding" },
    "G":  { "px": 286,  "rem": "17.875rem", "role": "4XL — secondary orb dimension" },
    "H":  { "px": 463,  "rem": "28.9375rem","role": "5XL — primary orb dimension" }
  },
  "sub-tokens": {
    "Z1": "~8px (between Y and Z)",
    "Z2": "~9px (between Z1 and Z)",
    "A1": "~12px (between Z and A)",
    "A2": "~14px (between A1 and A)",
    "B1": "~20px (between A and B)",
    "B2": "~23px (between B1 and B)"
  },
  "rule": "NEVER use raw px values. Use tokens (A, B, C) or percentages (80%, 90%). Sub-tokens (Z1, A1) are available for fine adjustments."
}
```

### 3.2 Spacing Patterns in Use

```json
{
  "common-patterns": {
    "card-padding":        "padding: 'B'          → 26px all sides",
    "badge-padding":       "padding: 'X Z'        → 3px top/bottom, 10px left/right",
    "button-padding":      "padding: 'Z1 B'       → ~8px top/bottom, 26px left/right",
    "section-padding":     "padding: 'C 0'        → 42px top/bottom, 0 left/right",
    "hero-padding":        "padding: 'D B'        → 67px top/bottom, 26px left/right",
    "contact-padding":     "padding: 'F B'        → 177px top/bottom, 26px left/right",
    "grid-padding":        "padding: '0 B'        → 0 top/bottom, 26px left/right",
    "grid-padding-mobile": "padding: '0 A'        → 0 top/bottom, 16px left/right",
    "standard-gap":        "gap: 'A'              → 16px",
    "tight-gap":           "gap: 'Y'              → 6px",
    "section-gap":         "gap: 'B'              → 26px",
    "auto-center":         "margin: '0 auto'"
  }
}
```

### 3.3 Responsive Breakpoints

Symbols provides built-in responsive tokens. Use `@tokenName` as object keys.

```json
{
  "breakpoints": {
    "@mobileS":  { "max-width": "320px",  "role": "Small phones" },
    "@mobileM":  { "max-width": "375px",  "role": "Medium phones" },
    "@mobileL":  { "max-width": "425px",  "role": "Large phones — single column layout" },
    "@tabletS":  { "max-width": "768px",  "role": "Small tablets — two column layout" },
    "@tabletM":  { "max-width": "1024px", "role": "Large tablets" },
    "@desktopS": { "max-width": "1200px", "role": "Small desktops" },
    "@desktopM": { "max-width": "1440px", "role": "Standard desktops" },
    "@desktopL": { "max-width": "1920px", "role": "Large desktops" }
  },
  "usage-rule": "Place responsive overrides as object keys: '@tabletS': { fontSize: 'G' }. These are max-width media queries.",
  "active-breakpoints": ["@tabletS", "@mobileL"]
}
```

### 3.4 Layout Constraints

```json
{
  "layout-constraints": {
    "max-widths": {
      "hero-content":  "80%",
      "hero-subtitle": "70%",
      "contact-text":  "60%",
      "grid-container": "90%"
    },
    "grid-columns": {
      "desktop":  "repeat(3, 1fr)",
      "tablet":   "repeat(2, 1fr)",
      "mobile":   "1fr"
    },
    "z-index-layers": {
      "orbs":    "0",
      "content": "1"
    },
    "rule": "Use percentages for max-width. Use repeat(N, 1fr) for grids. Use vh/vw for viewport-relative dimensions. NEVER raw px."
  }
}
```

---

## 4. Object Styles (Global Visual Rules)

### 4.1 Border Radius

```json
{
  "border-radius": {
    "radius-sm": { "token": "Y", "px": 6,    "role": "Badge pill corners" },
    "radius-md": { "token": "Z", "px": 10,   "role": "Cards, buttons, inputs" },
    "radius-full": { "value": "50%",          "role": "Circular elements (orbs)" }
  },
  "rule": "Use spacing tokens (Y, Z) for border-radius. Use '50%' for circles. Never raw px."
}
```

### 4.2 Borders

```json
{
  "borders": {
    "card-default":    "1px solid white.08",
    "card-hover":      "borderColor: white.15",
    "badge-default":   "1px solid cyber.15",
    "badge-hover":     "borderColor: cyber.35",
    "button-default":  "1px solid cyber.25",
    "button-hover":    "borderColor: cyber.5",
    "footer-divider":  "1px solid white.06"
  },
  "rule": "Border format: '1px solid <color-token>.<opacity>'. Use borderColor for hover overrides."
}
```

### 4.3 Shadows & Glows

```json
{
  "shadows": {
    "shadow-none":     "none — default for glassmorphism (use backdrop-filter instead)",
    "glow-orb-cyan":   "filter: blur(120px) on cyber-colored element at opacity .3",
    "glow-orb-purple": "filter: blur(100px) on neon-colored element at opacity .2",
    "pulse-glow":      "animation: pulseGlow — expanding ring of rgba(0,240,255,0.4)"
  },
  "rule": "This project uses backdrop-filter glassmorphism instead of box-shadow for elevation. Use filter: blur() for ambient glows."
}
```

### 4.4 Glassmorphism Layers

```json
{
  "glassmorphism": {
    "glass": {
      "background": "white.03",
      "backdropFilter": "blur(16px)",
      "borderColor": "white.08",
      "usage": "Standard cards, containers — theme: 'glass'"
    },
    "glass-elevated": {
      "background": "white.06",
      "backdropFilter": "blur(24px)",
      "borderColor": "white.12",
      "usage": "Elevated elements, CTA buttons — theme: 'glass-elevated'"
    }
  },
  "rule": "Apply via theme: 'glass' or theme: 'glass-elevated'. Do NOT manually set backdrop-filter on individual components."
}
```

### 4.5 Transitions & Timing

```json
{
  "transitions": {
    "default-bezier":  "cubic-bezier(.29, .67, .51, .97)",
    "smooth-out":      "cubic-bezier(0.16, 1, 0.3, 1)",
    "standard-ease":   "ease",
    "common-patterns": {
      "card-all":      "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      "tilt-transform":"transform 0.15s ease-out, border-color 0.3s ease",
      "magnetic-btn":  "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background 0.3s ease",
      "badge-hover":   "all 0.2s ease",
      "color-hover":   "color 0.2s ease",
      "opacity-hover": "opacity 0.2s ease"
    }
  }
}
```

### 4.6 Animations

```json
{
  "animations": {
    "fadeInUp":      { "duration": "variable",  "role": "Scroll indicator bounce, general entry" },
    "fadeOutDown":   { "duration": "variable",  "role": "Exit animation" },
    "marquee":       { "duration": "30s",       "role": "Tech badge infinite scroll", "timing": "linear" },
    "orbFloat":      { "duration": "20-25s",    "role": "Ambient orb slow drift", "timing": "ease-in-out" },
    "orbColorShift": { "duration": "variable",  "role": "Orb opacity pulse" },
    "pulseGlow":     { "duration": "variable",  "role": "CTA button glow ring" }
  },
  "patterns": {
    "scroll-indicator": "fadeInUp 2s ease-in-out infinite alternate",
    "marquee-track":    "marquee 30s linear infinite",
    "orb-primary":      "orbFloat 20s ease-in-out infinite",
    "orb-secondary":    "orbFloat 25s ease-in-out infinite reverse"
  }
}
```

---

## 5. Theme System

Themes are applied via `theme: 'tokenName'`. They bundle `background`, `color`, `backdropFilter`, and `borderColor` together and auto-switch between @dark and @light modes.

```json
{
  "themes": {
    "document":       "Page-level theme — surface bg, title text",
    "dialog":         "Modal overlays — blurred dark bg",
    "field":          "Form inputs — dark field bg, white text",
    "primary":        "Primary action — blue bg, white text",
    "warning":        "Destructive — red bg, white text",
    "success":        "Positive — green bg, white text",
    "none":           "Transparent — no bg, no color",
    "transparent":    "Inherit — currentColor text, transparent bg",
    "glass":          "Glassmorphism card — white.03 bg, blur(16px), white.08 border",
    "glass-elevated": "Elevated glass — white.06 bg, blur(24px), white.12 border",
    "hero":           "Full-bleed section — surface bg, white text",
    "badge":          "Tech pill — white.06 bg, cyber text, cyber.15 border"
  },
  "rule": "Always prefer theme over manual background/color/border combinations. If a theme exists for your use case, use it."
}
```

---

## 6. Icon System

All icons are 24×24 SVG, stroke-based (except github which is fill), using `currentColor`. Registered in `designSystem/icons.js`.

```json
{
  "icons": {
    "mapPin":       "Location marker — hero meta",
    "briefcase":    "Professional status — hero meta",
    "chevronDown":  "Scroll indicator — hero bottom",
    "mail":         "Email/contact — CTA button",
    "github":       "GitHub social link",
    "linkedin":     "LinkedIn social link",
    "externalLink": "External URL — project tile header",
    "code":         "Code/development indicator",
    "arrowRight":   "Navigation arrow",
    "sparkles":     "Decorative accent"
  },
  "usage": "extends: 'Icon', icon: '<name>', width: '<token>', height: '<token>', color: '<color-token>'",
  "standard-sizes": {
    "inline-icon":  { "width": "A", "height": "A" },
    "display-icon": { "width": "B", "height": "B" }
  }
}
```

---

## 7. Component Style Principles

> **For AI Agents:** These are declarative rules, not DOMQL3 code. Use them to determine the correct visual properties when generating components.

### 7.1 Buttons

```
BUTTON/PRIMARY (MagneticButton):
  default   → theme: glass-elevated | padding: Z1 B | fontSize: Z | fontWeight: 600
              borderRadius: Z | border: 1px solid cyber.25 | color: cyber
              transition: transform 0.2s smooth-out, border-color 0.3s ease, background 0.3s ease
  hover     → borderColor: cyber.5 | background: cyber.08
  active    → transform: scale(0.97)
  disabled  → opacity: .5 | pointerEvents: none | cursor: default

BUTTON/SECONDARY (not yet implemented):
  default   → theme: glass | padding: Z1 B | fontSize: Z | fontWeight: 500
              border: 1px solid white.08 | color: caption
  hover     → borderColor: white.15

BUTTON/TERTIARY (Link-style):
  default   → background: none | padding: 0 | color: caption | fontSize: Z
  hover     → color: cyber
```

### 7.2 Form Inputs

```
INPUT/DEFAULT:
  default   → theme: field | padding: Z A | fontSize: Z | borderRadius: Z
              border: 1px solid white.08
  focus     → borderColor: cyber.25 | outline: none
  error     → borderColor: red | color: red
  disabled  → opacity: .5 | pointerEvents: none

TEXTAREA:
  Same as INPUT/DEFAULT with minHeight: D
```

### 7.3 Cards

```
CARD/GLASS (GlassCard):
  default   → theme: glass | padding: B | borderRadius: Z
              border: 1px solid white.08 | overflow: hidden
              transition: all 0.3s smooth-out
  hover     → borderColor: white.15
  interactive → cursor: pointer | willChange: transform
              onMouseMove: 3D tilt via el.call('applyTilt')
              onMouseLeave: reset via el.call('resetTilt')

CARD/ELEVATED:
  default   → theme: glass-elevated | padding: B | borderRadius: Z
              border: 1px solid white.12
  hover     → borderColor: white.15
```

### 7.4 Badges

```
BADGE/TECH (TechBadge):
  default   → theme: badge | tag: span | padding: X Z | borderRadius: Y
              border: 1px solid cyber.15 | fontSize: Y | fontWeight: 500
              letterSpacing: 0.02em | whiteSpace: nowrap
              transition: all 0.2s ease
  hover     → borderColor: cyber.35 | background: cyber.08
```

### 7.5 Sections

```
SECTION/HERO:
  → tag: section | flow: y | align: center center | minHeight: 100vh
    padding: D B | gap: B | textAlign: center | zIndex: 1

SECTION/CONTENT:
  → tag: section | flow: y | position: relative | zIndex: 1
    Wrap in ScrollRevealSection for fade-in on scroll

SECTION/FOOTER:
  → tag: footer | flow: x | align: center center | padding: B
    borderTop: 1px solid white.06 | marginTop: D
```

### 7.6 Links

```
LINK/SOCIAL:
  default   → extends: Link | flow: x | align: center center | gap: Y
              color: caption | transition: color 0.2s ease
  hover     → color: cyber
  attrs     → target: _blank | rel: noopener noreferrer
```

---

## 8. Accessibility Standards

```json
{
  "accessibility": {
    "aria-labels": "All interactive sections MUST have attr: { 'aria-label': '...' }",
    "semantic-tags": {
      "hero":    "tag: 'section'",
      "grid":    "tag: 'section'",
      "footer":  "tag: 'footer'",
      "heading": "tag: 'h1' through 'h3' — one h1 per page"
    },
    "link-safety": "External links: target: '_blank', rel: 'noopener noreferrer'",
    "focus-visible": "Interactive elements must be keyboard-navigable",
    "contrast": "Title text on surface background exceeds WCAG AA (white on #09090b = 19.3:1)"
  }
}
```

---

## 9. File-to-Token Mapping

Quick reference for which file controls which tokens.

```json
{
  "token-sources": {
    "designSystem/color.js":       "All color tokens (base + brand + semantic)",
    "designSystem/theme.js":       "All theme tokens (document, glass, badge, etc.)",
    "designSystem/typography.js":  "Font size scale config (base: 16, ratio: 1.25)",
    "designSystem/spacing.js":     "Spacing scale config (base: 16, ratio: 1.618)",
    "designSystem/font_family.js": "Font family definitions (Inter, JetBrains Mono)",
    "designSystem/timing.js":      "Default bezier curve",
    "designSystem/animation.js":   "Keyframe animation definitions",
    "designSystem/icons.js":       "SVG icon registry",
    "designSystem/media.js":       "Custom breakpoints (empty — uses built-in)",
    "config.js":                   "globalTheme: 'dark'"
  }
}
```
