# Cyber-Gloss Portfolio

## Project Overview
This project is a single-page professional portfolio designed for a Senior QA Automation Engineer. It is built using the **Symbols/DOMQL v3** framework. The application features a dark-mode "Cyber-Gloss" aesthetic with advanced UI design patterns including glassmorphism, math-driven 3D tilt interactions, scroll-driven animations, and magnetic proximity buttons. It uses an asymmetrical responsive bento grid layout and is strictly driven by a central design system.

### Main Technologies & Architecture
- **Framework:** Symbols / DOMQL v3 (`smbls` version 3.14.1 / 3.8.9 specs)
- **Node Environment:** Node.js (v18+), Bun, npm
- **Core Architecture:**
  - `symbols/state.js`: Global state (profile and projects data source of truth).
  - `symbols/config.js`: Framework configuration (dark theme forced).
  - `symbols/designSystem/`: Centralized design tokens (colors, typography, spacing, themes, animations, icons).
  - `symbols/components/`: Reusable DOMQL component definitions (e.g., `GlassCard`, `HeroSection`, `InteractiveProjectTile`, `TechBadge`).
  - `symbols/functions/`: Imperative logic and effects (e.g., 3D tilt math, scroll reveal, magnetic effects).
  - `symbols/pages/`: Page composition and routing map.

## Building and Running
The project uses `bunx smbls` under the hood, managed via npm scripts in `package.json`.

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Start Local Development Server:**
    ```bash
    npm start
    # Behind the scenes: bunx smbls start
    ```
*   **Build for Production:**
    ```bash
    npm run build
    # Behind the scenes: bunx smbls build
    ```
*   **Publish:**
    ```bash
    npm run publish
    ```

## Development Conventions

This project strictly adheres to the **Symbols/DOMQL v3** rules. Any modifications or new component generation MUST follow these principles:

1.  **Component Definition:** Define components as objects (`export const ComponentName = { ... }`), never as functions. Reference components by PascalCase key to auto-extend.
2.  **Design System Tokens Only:** NEVER use raw pixel values, hex codes, or `rgba()` strings. All spacing (`padding`, `margin`, `gap`), typography (`fontSize`), and colors (`color`, `background`, `borderColor`) MUST use predefined tokens from `DESIGN.md` and `symbols/designSystem/`.
    *   *Correct:* `padding: 'A B'`, `color: 'cyber'`, `borderColor: 'white.08'` (using dot-notation for opacity).
    *   *Incorrect:* `padding: '16px 26px'`, `color: '#00f0ff'`, `borderColor: 'rgba(255,255,255,0.08)'`.
3.  **Flat Element API:** Set element properties directly on the element object (`el.text`, `el.padding`), not nested within a `props` object.
4.  **Reactivity and State:** Reactive functions MUST take `(el, s)` signatures (e.g., `text: (el, s) => s.title`). Update state via `s.update({ key: val })`, never by direct assignment (`s.key = val`).
5.  **No Direct DOM Manipulation & No Globals:** NEVER assign to `window`, `globalThis`, or `document`. Avoid raw DOM access (`document.querySelector`, `el.node.style`). Ephemeral effects (like 3D tilt tracking) using `el.node` reads and inline style writes are confined to specific helpers in `symbols/functions/` and called via the `el.call('fnName')` pattern.
6.  **Component Reuse:** Always attempt to reuse existing framework built-ins, shared library patterns, or project components before defining new ones. Avoid silent shadowing by checking existing component names.
7.  **File Placement (Frankability):** Mutable module-state or constants shared across files must live in `globalScope.js` or be bound to `el.scope`, avoiding variables declared at the top of component files to preserve serialization compatibility (`frank.toJSON`).
