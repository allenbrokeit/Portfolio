# Portfolio Web App

A single-page professional portfolio built for a Senior QA Automation Engineer, leveraging the Symbols/DOMQL v3 framework. It features a dark-mode "Cyber-Gloss" aesthetic with glassmorphism, 3D interactions, and scroll-driven animations to deliver a modern, high-performance personal showcase. 

**Repository:** [https://github.com/allenbrokeit/Portfolio](https://github.com/allenbrokeit/Portfolio)

## Features & Use Cases

### Features
* **Glassmorphism UI**: Advanced UI design using backdrop filters, custom CSS layers, and defined tokens for a sleek, modern look.
* **3D Tilt Interactions**: Interactive project tiles featuring math-driven 3D tilt effects via ephemeral DOM manipulations.
* **Scroll-Driven Animations**: Dynamic content presentation using `IntersectionObserver`-based fade-in wrappers.
* **Magnetic Proximity Buttons**: Call-to-action buttons with magnetic cursor tracking for an engaging user experience.
* **Responsive Bento Grid**: An asymmetrical layout system optimized for both desktop and mobile viewing.
* **Design System Driven**: Strict adherence to central design tokens for color, typography, spacing, and animations.
* **Dynamic Projects List**: Easily configurable global state file manages the grid's project tiles, automatically applying themes and layout sizes.

### Use Cases
* **Professional Showcase**: Acts as an interactive resume and primary point of contact for tech professionals.
* **Project Display**: Effectively highlights work history, core skills, and specific projects in a visually engaging format.

## Prerequisites

Ensure you have the following installed before setting up the project:
* **Node.js** (v18 or higher recommended)
* **Bun** (Required for the CLI commands as defined in the default scripts)
* **npm** (for installing dependencies)

## Installation

Follow these steps to set up your local development environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/allenbrokeit/Portfolio.git
   cd Portfolio
   ```

2. Install the local dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (if applicable):
   Create a `.env` file in the root directory and configure necessary keys.
   ```bash
   [INSERT ENVIRONMENT VARIABLES SETUP HERE]
   ```

## Running the Application

To start the local development server, run the following command:

```bash
npm start
```
*(This command executes `bunx smbls start` behind the scenes. The application will typically be available at `http://localhost:1234` or the port specified by Parcel.)*

To build the application for production:
```bash
npm run build
```

## Testing

Instructions for executing the automated test suite:

```bash
[INSERT TEST COMMAND HERE]
```
*(Currently no testing framework is defined in the package.json. Please add your preferred framework such as Jest or Playwright and configure the command here.)*

## MIT License

This project is licensed under the [MIT License](./LICENSE).

---
*Created and maintained by G. Allen Johnson.*