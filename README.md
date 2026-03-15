# SIM Activity Dashboard

A responsive analytics dashboard for monitoring and managing a global SIM card fleet. Built with React, Vite, Tailwind CSS, and Recharts.

## Features

- **Fleet Overview** – At-a-glance stat cards showing total, active, suspended, and newly provisioned SIMs
- **Usage Analytics** – Interactive area chart with toggleable Data Usage (GB) and SMS Count metrics across configurable time ranges (7, 30, or 90 days)
- **Activity Feed** – Scrollable, filterable log of recent SIM events (activations, profile downloads, suspensions, system events)
- **Navigation Sidebar** – Sticky desktop sidebar with mobile drawer and active-state highlighting
- **Responsive Design** – Mobile-first layout that adapts gracefully from small screens to wide desktops

## Tech Stack

| Category | Technology |
|---|---|
| UI Library | React 19 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Charts | Recharts 2 |
| Language | JavaScript (JSX / ES Modules) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/mmounib/sim-analytics.git
cd sim-analytics
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads on file changes.

### Building for Production

```bash
npm run build
```

Output is written to the `dist/` directory.

### Previewing the Production Build

```bash
npm run preview
```

## Project Structure

```
sim-analytics/
├── index.html                  # HTML entry point (loads Inter font, mounts React)
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme (custom brand & dashboard colors)
├── postcss.config.js           # PostCSS (Tailwind + Autoprefixer)
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root layout component
    ├── index.css               # Tailwind directives + global styles
    ├── components/
    │   ├── Sidebar.jsx         # Navigation sidebar (desktop fixed / mobile drawer)
    │   ├── StatCard.jsx        # Summary metric card
    │   ├── UsageChart.jsx      # Data/SMS usage area chart
    │   ├── ActivityList.jsx    # Filterable recent-activity feed
    │   ├── ActivityItem.jsx    # Single activity row
    │   └── Dropdown.jsx        # Reusable accessible dropdown
    ├── hooks/
    │   └── useDashboardData.js # Custom hook – state, filtering, simulated fetch
    └── data/
        └── mockData.js         # Static mock data (stats, usage series, activities)
```

## Configuration

The dashboard currently runs entirely on mock data defined in `src/data/mockData.js`. To connect it to a real API, replace the data-fetching logic inside `src/hooks/useDashboardData.js` with actual HTTP calls.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Create an optimized production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally for testing |

## License

This project is open source. See the repository for details.
