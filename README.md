# ⏳ Countdown - Coming Soon Landing Page

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4-FF6B6B?style=for-the-badge&logo=mailgun&logoColor=white)](https://www.emailjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#-license)

A modern, responsive "Launching Soon" landing page built with React 18, Vite, and custom CSS. Features a dynamic 3D flip-clock countdown timer, background video backdrop, and an integrated email subscription form powered by EmailJS.

---

## ✨ Features

- 🕒 **Animated Flip Clock**: Dynamic 3D flip-card countdown timer powered by `@leenguyen/react-flip-clock-countdown`.
- 🎥 **Full-Screen Video Background**: Seamless ambient background video (`video.mp4`) with overlay shading for aesthetic contrast.
- 📬 **Email Notification Signup**: Interactive subscription form integrated with **EmailJS** for instant email notification submissions.
- 📱 **Fully Responsive Design**: Custom responsive breakpoints optimized across desktop, tablet, and mobile viewports.
- ⚡ **Lightning Fast**: Powered by **Vite 6** HMR and React 18 for minimal build footprints and rapid loading speeds.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 18](https://react.dev/)
- **Build Tool / Bundler:** [Vite 6](https://vitejs.dev/)
- **Countdown Component:** [`@leenguyen/react-flip-clock-countdown`](https://www.npmjs.com/package/@leenguyen/react-flip-clock-countdown)
- **Email Service Integration:** [`@emailjs/browser`](https://www.emailjs.com/)
- **Styling:** Custom CSS3 with Google Fonts (*JetBrains Mono*, *Orbitron*, *Poppins*)
- **Linting:** ESLint 9

---

## 📁 Directory Structure

```
countdown/
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Media files (video.mp4 background)
│   ├── components/          # React components
│   │   ├── Main.jsx         # Hero section, countdown clock & email form logic
│   │   └── Main.css         # Styling for hero component and media queries
│   ├── App.jsx              # Root application component
│   ├── App.css              # Main application styles
│   ├── index.css            # Base global styles
│   └── main.jsx             # React DOM entry point
├── index.html               # Main HTML entry file
├── package.json             # Dependencies and npm scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16+ recommended) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Syber-Tek/Countdown.git
   cd Countdown
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes the app for production in the `dist` directory. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs ESLint to check for code formatting and code quality issues. |

---

## 📄 License

MIT License © 2026 Syber-Tek
