# SIM Activity Dashboard

A responsive dashboard for monitoring a global SIM card fleet. Built with React, Vite, Tailwind CSS, and Recharts.

## Features

- SIM fleet stats (total, active, suspended, new)
- Data usage and SMS analytics chart with date range filtering
- Filterable recent activity feed
- Responsive layout with a collapsible sidebar

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Sidebar.jsx
│   ├── StatCard.jsx
│   ├── UsageChart.jsx
│   ├── ActivityList.jsx
│   ├── ActivityItem.jsx
│   └── Dropdown.jsx
├── hooks/
│   └── useDashboardData.js
└── data/
    └── mockData.js
```
