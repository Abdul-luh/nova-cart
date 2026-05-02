# NovaCart Analytics Dashboard

A high-fidelity, futuristic, and fully multi-page analytics dashboard for **NovaCart** — a digital marketplace platform. Built with a premium SaaS aesthetic using glassmorphism, neon accents, and real-time simulated data across eight dedicated analytical views.

---

## 🌟 Features

### 🗂️ Multi-Page Application
Full client-side routing powered by `react-router-dom` with a persistent layout (sidebar + top navigation) across all pages:

| Route | Page | Description |
|---|---|---|
| `/` | **Dashboard** | Live KPI cards, revenue charts, activity feed |
| `/orders` | **Orders** | Transaction table with live search & status filter |
| `/listings` | **Listings** | Marketplace products with search & category filter |
| `/users` | **Users** | Buyer/seller management with search & custom role dropdown |
| `/fraud` | **Fraud Center** | AI threat feed with search & risk-level filter |
| `/payments` | **Payments** | Revenue overview, withdrawal queue, gateway status |
| `/reports` | **Reports** | Aggregated analytics and downloadable summaries |
| `/settings` | **Settings** | Platform configuration and preferences |

### 🔍 Fully Functional Search
Every page with tabular data has a **live, controlled search** that filters results in real time:
- **Orders** — search by order ID, buyer, seller, or product; filter by status
- **Listings** — search by title or seller; filter by category
- **Users** — search by username, email, or location; filter by role (custom styled dropdown)
- **Fraud Center** — search by transaction ID, user, or flag reason; filter by risk level
- **Top Nav** — global search across users, orders, sellers, and assets with an animated results dropdown

### 🎨 Design System
- Dark mode with `glassmorphism` panels (`backdrop-blur`, `bg-white/5`, `border-white/10`)
- Neon accent palette: **cyan** (`#00f2fe`), **purple** (`#a855f7`), **lime**, and **blue**
- Ambient radial gradient background (fixed, non-scrolling)
- Custom text glow utilities: `.text-glow-cyan`, `.text-glow-purple`, `.text-glow-lime`
- Scrollbars hidden globally — all overflow areas remain scrollable without visible bars
- Smooth hover micro-animations throughout

### 🧩 Key Components
- **`TopNav`** — global search with dropdown results, notifications centre, user profile
- **`Sidebar`** — collapsible navigation with active route highlighting
- **`KPICards`** — live-updating metric tiles with trend indicators
- **`MainCharts`** — revenue line chart with date-range filtering (Recharts)
- **`SecondaryMetrics`** — traffic source breakdown, conversion funnels
- **`ActivityFeed`** — real-time order event stream
- **`RoleDropdown`** — fully custom glassmorphism dropdown with per-role colour coding

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript ~6.0](https://www.typescriptlang.org/) |
| Build Tool | [Vite 8](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) with custom neon & glass utilities |
| Routing | [React Router DOM 7](https://reactrouter.com/) |
| Charts | [Recharts 3](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Utilities | `clsx`, `tailwind-merge` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**
- npm

### Installation & Dev Server

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Scripts

```bash
npm run build    # Production build (tsc + vite)
npm run preview  # Preview the production build locally
npm run lint     # ESLint
```

---

## 🏗️ Project Structure

```
src/
├── components/
│   └── dashboard/
│       ├── TopNav.tsx          # Global search + notifications
│       ├── Sidebar.tsx         # Route navigation
│       ├── KPICards.tsx        # Live metric tiles
│       ├── MainCharts.tsx      # Revenue chart + date filter
│       ├── SecondaryMetrics.tsx
│       └── ActivityFeed.tsx
├── layouts/
│   └── DashboardLayout.tsx     # Persistent shell (Sidebar + TopNav + <Outlet />)
├── pages/
│   ├── Dashboard.tsx
│   ├── Orders.tsx              # Live search + status filter
│   ├── Listings.tsx            # Live search + category filter
│   ├── Users.tsx               # Live search + custom role dropdown
│   ├── FraudCenter.tsx         # Live search + risk filter
│   ├── Payments.tsx
│   ├── Reports.tsx
│   └── Settings.tsx
├── App.tsx                     # Router setup
├── index.css                   # Tailwind directives + global styles (scrollbar, glow)
└── main.tsx
```

---

## 📜 License

Internal dashboard — all rights reserved.
