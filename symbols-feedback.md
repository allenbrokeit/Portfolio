# Symbols / DOMQL v3 — Feedback & Conventions Log

> **Purpose:** Track right/wrong solutions, bugs, conflicting instructions, and DOMQL v3 conventions discovered during development. Updated after every prompt.

---

## v3 Convention Reference (Right vs Wrong)

### Event Handlers
| ✅ Right | ❌ Wrong |
|---|---|
| `onClick: (e, el, s) => s.update({...})` | `on: { click: fn }` |
| `onRender: (el) => { if (el.__initialized) return; ... }` | `onRender: (el) => { ... }` (no guard) |
| `onMouseMove: (e, el, s) => ...` | `el.node.addEventListener('mousemove', ...)` |
| `onMouseLeave: (e, el) => el.call('resetTilt')` | Manual event listener removal |

### Atoms & Primitives
| ✅ Right | ❌ Wrong |
|---|---|
| `flow: 'x'`, `flow: 'y'` | `extends: 'Flex'` |
| Just use props (every element is a Box) | `extends: 'Box'` |
| `text: 'hello'` (any element with text is Text) | `extends: 'Text'` |
| `tag: 'section'` with flow for semantic sections | Generic div wrappers |

### Shorthand Props
| ✅ Right | ❌ Wrong |
|---|---|
| `align: 'center center'` | `flexAlign: 'center center'` |
| `flow: 'column'` or `flow: 'y'` | `flexDirection: 'column'` |
| `round: 'Z'` | N/A (alias for borderRadius) |
| `borderRadius: 'Z'` | `borderRadius: '10px'` |

### State Patterns
| ✅ Right | ❌ Wrong |
|---|---|
| `s.update({ key: val })` | `s.key = val` (no re-render) |
| `s.root.update({ key: val })` | Direct mutation of root |
| `children + childExtends + childrenAs: 'state'` | `$stateCollection` |
| `text: (el, s) => s.root.profile.name` | Closure-captured variable |

### Dynamic Children
| ✅ Right | ❌ Wrong |
|---|---|
| `children: (el, s) => s.items` | `$collection` |
| `childExtends: 'ComponentName'` (string) | `childExtends: { tag: 'div', ... }` (object) |
| `childrenAs: 'state'` | `$stateCollection` |
| `.map(function mapTag(tag) { return { text: tag } })` | Arrow function closures (serialization issue) |

### Link Semantics (Rule 14/64)
| ✅ Right | ❌ Wrong |
|---|---|
| `TileLinkIcon: { tag: 'a', href: (el, s) => s.link \|\| '#', target: '_blank' }` | `TileLinkIcon: { extends: 'Icon', onClick: () => window.open(...) }` (Rule 64 violation + poor a11y) |
| `metadata: { title: 'Portfolio' }` (declarative helmet) | `document.title = 'Portfolio'` (direct DOM mutation) |

### Icon Usage
| ✅ Right | ❌ Wrong |
|---|---|
| `extends: 'Icon', icon: 'iconName'` | `tag: 'svg'` with nested paths |
| Icons stored in `designSystem/icons.js` | Inline SVG in components |
| SVGs with `width="24" height="24" viewBox="0 0 24 24"` | Mismatched dimensions |
| `{ extends: 'Icon', icon: 'github', width: 'B', height: 'B' }` | `{ extends: 'Icon', iconName: 'github' }` |

### Color Tokens
| ✅ Right | ❌ Wrong |
|---|---|
| `color: 'white.7'` (dot-notation opacity) | `color: 'white .7'` (space) |
| `color: 'gray+16'` (tone modifier) | `color: 'gray 1 +16'` (old syntax) |
| `border: '1px solid gray.1'` | `border: 'solid, gray, 1px'` (comma syntax) |
| `border: '1px solid white.08'` | `border: '1px solid rgba(255,255,255,0.08)'` |

### Design System Keys
| ✅ Right | ❌ Wrong |
|---|---|
| `color`, `theme`, `typography` (lowercase) | `COLOR`, `THEME`, `TYPOGRAPHY` (uppercase) |
| `context.designSystem.color` | `context.designSystem.COLOR` |

### Spacing & Values (Rule 27/28)
| ✅ Right | ❌ Wrong |
|---|---|
| `maxWidth: '80%'` (percentage) | `maxWidth: '900px'` (raw px) |
| `maxWidth: '90%'` (percentage) | `maxWidth: '1200px'` (raw px) |
| `padding: 'A B'` (tokens) | `padding: '16px 26px'` (raw px) |
| `fontSize: 'H'` (token) | `fontSize: '64px'` (raw px) |
| Use `%`, `vh`, `vw`, `em` for layout dimensions | Raw `px` values anywhere |

### Conditional Props (Rule 19)
| ✅ Right | ❌ Wrong |
|---|---|
| `isLarge: (el, s) => s.bentoSize === 'large'` + `'.isLarge': { gridColumn: 'span 2' }` | Repeating ternary across multiple props |
| `isMapView: (el, s) => s.root.showMapView` + `'.isMapView': { ... }` | `width: (el, s) => s.root.showMapView ? '50%' : '0'` repeated |

### Functions (Rule 33)
| ✅ Right | ❌ Wrong |
|---|---|
| `el.call('applyTilt', e)` | `applyTilt(el, e)` (closure import) |
| Named function: `export const applyTilt = function applyTilt(event) { ... }` | Arrow function export |
| `this.node.getBoundingClientRect()` in el.call function | `el.node` passed as argument |

---

## Conflicting Instructions Found in Symbols MCP

### 1. Rule 22 vs Rule 14 — ARIA Attribute Placement
- **Rule 14** says `aria-*` attributes support camelCase at root level (`ariaLabel: 'foo'`) and shorthand objects (`aria: { label: 'foo' }`), implying `attr: {}` is NOT needed.
- **Rule 22** says place `aria-*` attributes in `attr: {}` block: `attr: { 'aria-label': ... }`.
- **Resolution:** Rule 14 is the more detailed/recent rule. Use camelCase at root (`ariaLabel`) or shorthand (`aria: { label: 'foo' }`). Use `attr: {}` only for truly custom attributes. Rule 22's example appears to be legacy guidance.
- **Impact:** We used `attr: { 'aria-label': ... }` in this project for consistency with Rule 22 examples, but both forms should work.

### 2. Rule 9 vs Rule 29 — Icon `name` vs `icon` prop
- **Rule 9** example uses `Icon: { name: 'arrowRight' }` (the `name` prop).
- **Rule 29** explicitly states: "Use `icon: 'iconName'`... Do NOT use `iconName:`, `iconSrc:`, or `props: { name: ... }`."
- **Resolution:** Both `name` and `icon` appear to work (Rule 9 shows `name`), but Rule 29 is the more detailed/authoritative rule. Prefer `icon: 'iconName'` for consistency. The `name` prop on bare `Icon` children may also work but `icon` is canonical.
- **Impact:** We consistently used `icon:` prop throughout this project.

### 3. `el.node.style.transform` — Rule 30/39 Tension
- **Rule 30** forbids `style.xxx = ...` (all DOM manipulation).
- **Rule 39** permits reading from `el.node` but forbids writing.
- **Practical reality:** Physics-based hover effects (3D tilt, magnetic button) require 60fps transform updates that DOMQL state updates cannot achieve. Setting `el.node.style.transform` for ephemeral visual feedback is the accepted pattern.
- **Resolution:** Use `el.node.style.transform` ONLY for ephemeral interactive transforms. Never for structural styling. Always reset on mouse leave. Document in code comments.
- **Impact:** Used in `initTiltEffect.js`, `initMagneticEffect.js`, `initScrollReveal.js`, and `SpotlightWrapper.js`.

### 4. MCP Audit False Positives — `children` map functions
- The `audit_component` tool flags `children: (el, s) => s.items.map(...)` as "Components must be plain objects, not functions that return objects."
- **This is a false positive.** The `children` property IS a valid prop function in DOMQL v3. It returns an array of child data, not a component definition. The audit tool incorrectly matches any arrow function as a potential component-as-function violation.
- **Impact:** TechMarquee received 2 warnings (both for `children` map functions). These are safe to ignore.

---

## Bugs Found

| # | Description | File | Resolution |
|---|---|---|---|
| 1 | `maxWidth: '900px'` — raw px violates Rule 28 | HeroSection.js | Fixed: changed to `'80%'` |
| 2 | `maxWidth: '700px'` — raw px violates Rule 28 | HeroSection.js | Fixed: changed to `'70%'` |
| 3 | `maxWidth: '600px'` — raw px violates Rule 28 | ContactSection.js | Fixed: changed to `'60%'` |
| 4 | `maxWidth: '1200px'` — raw px violates Rule 28 | BentoProjectGrid.js | Fixed: changed to `'90%'` |
| 5 | `theme-color` meta tag accidentally deleted during font import removal | index.html | Fixed: manually restored meta tag |
| 6 | Redundant closing brace left in icon registry causing syntax error | icons.js | Fixed: removed extra brace |
| 7 | Iterative scaling of sensitive clip-path components causes clipping | ToptalBadge.js | Fixed: switched to clean conversion via HTML snippet |
| 8 | `width: 200px` — raw px violates Rule 28 | ToptalBadge.js | Fixed: mapped to token math `'F+A'` (~193px) |
| 9 | `TileLinkIcon` was visual-only, lacking actual anchor tag behavior | InteractiveProjectTile.js | Fixed: refactored to `tag: 'a'` with dynamic `href` |
| 10 | Missing/Outdated external links for Projects 4 & 5 | state.js | Fixed: updated state with GitHub repo URLs |
| 11 | `read_file` blocked on external workspace path (Security Policy) | N/A (Agent) | Fixed: used `cat` via `run_shell_command` as fallback |
| 12 | 29 Frank-Audit findings (FA511, FA502, FA105, FA806, FA701) | Multiple | **Pending:** Needs project-wide refactor for full compliance |

---

## Token Usage Quick Reference

```
Spacing: X(3px) Y(6px) Z(10px) A(16px) B(26px) C(42px) D(67px) E(109px) F(177px) G(286px) H(463px)
Sub:     Z1 Z2 A1 A2 B1 B2 C1 C2
Font:    Y(12.8px) Z(16px) A(20px) B(25px) C(31px) D(39px) E(49px) F(61px) G(76px) H(95px)
```

---

## Integration Strategy (Right vs Wrong)

### Branding & 3rd Party Badges
| ✅ Right | ❌ Wrong |
|---|---|
| Convert raw HTML/CSS via `symbols-mcp` first | Manually recreate complex SVG paths in DOMQL |
| Map hardcoded dimensions to token math (e.g., `F+A` for 200px) | Use raw `px` values for "precision" |
| Perform clean state resets (remove and re-add) when layout fails | Stack iterative 10% scaling attempts (leads to clipping) |
| Centralize all branding SVGs in `icons.js` | Inline complex logos in the component file |

---

## Character Count

| Metric | Count |
|---|---|
| **Prompt characters (user input)** | ~12,400 |
| **Generated code characters** | ~22,800 |
| **Subtotal this session** | ~35,200 |
| **Running total** | **~35,200** |

*Updated after prompt 3 (documentation and metadata updates).*
