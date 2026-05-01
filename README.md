# Cyber-Gloss Portfolio

A single-page professional portfolio built for a Senior QA Automation Engineer, leveraging the Symbols/DOMQL v3 framework. It features a dark-mode "Cyber-Gloss" aesthetic with glassmorphism, 3D interactions, and scroll-driven animations to deliver a modern, high-performance personal showcase.

## Features & Use Cases

### Features
* **Glassmorphism UI**: Advanced UI design using backdrop filters, custom CSS layers, and defined tokens (`white.03`, `white.06`) for a sleek, modern look.
* **3D Tilt Interactions**: Interactive project tiles featuring math-driven 3D tilt effects via ephemeral DOM manipulations (`initTiltEffect.js`).
* **Scroll-Driven Animations**: Dynamic content presentation using `IntersectionObserver`-based fade-in wrappers (`ScrollRevealSection.js`).
* **Magnetic Proximity Buttons**: Call-to-action buttons with magnetic cursor tracking for an engaging user experience.
* **Responsive Bento Grid**: An asymmetrical layout system (`BentoProjectGrid.js`) optimized for both desktop and mobile viewing.
* **Design System Driven**: Strict adherence to central design tokens for color, typography, spacing, and animations.

### Use Cases
* **Professional Showcase**: Acts as an interactive resume and primary point of contact for tech professionals.
* **Project Display**: Effectively highlights work history, core skills (e.g., Java, Kotlin, Swift, DOMQL3), and specific projects in a visually engaging format.

## Prerequisites

Ensure you have the following installed before setting up the project:
* **Node.js** (v18 or higher recommended)
* **Bun** (Required for the CLI commands as defined in `package.json`)
* **npm** (for installing dependencies)

## Installation

Follow these steps to set up your local development environment:

1. Clone the repository:
   ```bash
   git clone [INSERT REPOSITORY URL HERE]
   cd Portfolio
   ```

2. Install the local dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   [INSERT ENVIRONMENT VARIABLES SETUP HERE]
   ```

## Running the Application

To start the local development server, run the following command:

```bash
npm start
```
*(This command executes `bunx smbls start` behind the scenes.)*

To build the application for production:
```bash
npm run build
```

## Testing

Instructions for executing the automated test suite:

```bash
[INSERT TEST COMMAND HERE]
```
