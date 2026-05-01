# NovaCart Analytics Dashboard

A high-fidelity, futuristic, and responsive real-time analytics dashboard for **NovaCart**. This standalone application showcases a premium SaaS aesthetic using modern web technologies to present simulated, live-updating metrics in a visually stunning interface.

## 🌟 Features

- **Futuristic UI/UX**: Designed with a sleek dark mode, glassmorphism effects, and neon accents (cyan and purple) for a highly immersive experience.
- **Dynamic Data Visualization**: Integrated with Recharts to display interactive charts including revenue trends, sales distributions, and more.
- **Simulated Live Metrics**: KPIs and charts mimic real-time data updates, creating a dynamic and "alive" feel.
- **Responsive Layout**: Fully responsive design that adapts beautifully across desktop, tablet, and mobile devices.
- **Modern Component Architecture**: Modular React components for easy maintenance and scalability (e.g., `TopNav`, `DashboardHeader`, `KPICards`, `MainCharts`, `SecondaryMetrics`, `ActivityFeed`).

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (with custom neon and glassmorphic utilities)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Utility**: `clsx` and `tailwind-merge` for robust class name management.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd analytics-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 🏗️ Project Structure

- `src/components/dashboard/`: Contains the core dashboard components (charts, nav, KPIs, etc.).
- `src/App.tsx`: The main application entry point, structuring the layout and background ambient effects.
- `tailwind.config.js`: Custom Tailwind configurations including colors (`neon-cyan`, `neon-purple`), animations, and typography.
- `package.json`: Project dependencies and scripts.

## 📜 License

Internal Dashboard. All rights reserved.
