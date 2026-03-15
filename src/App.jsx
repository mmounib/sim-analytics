import { useState } from "react";
import StatCard from "./components/StatCard";
import UsageChart from "./components/UsageChart";
import ActivityList from "./components/ActivityList";
import Sidebar from "./components/Sidebar";
import { useDashboardData } from "./hooks/useDashboardData";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {
    stats,
    usageData,
    activities,
    dateRange,
    setDateRange,
    statusFilter,
    setStatusFilter,
    loading,
  } = useDashboardData();

  const statCards = [
    stats.totalSims,
    stats.active,
    stats.suspended,
    stats.newSims,
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      {/* ── Sidebar ── */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* ── Main Content ── */}
      <div className="flex-1 max-w-[1600px] mx-auto w-full">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              SIM Usage
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -mr-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* ── Header ── */}
          <header className="mb-6 lg:mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                SIM Activity Dashboard
              </h1>
              <p className="text-xs md:text-sm text-slate-400 mt-1">
                Monitor your global SIM fleet connectivity and usage.
              </p>
            </div>
          </header>

          {/* ── Stat Cards ── */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-12 lg:gap-4 gap-2 mb-6">
            {statCards.map((card) => (
              <StatCard
                key={card.title}
                title={card.title}
                value={card.value}
                subtitle={card.subtitle}
                subtitleColor={card.subtitleColor}
                icon={card.icon}
              />
            ))}
          </section>

          {/* ── Charts and Activity ── */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <UsageChart
                data={usageData}
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
                loading={loading}
              />
            </div>

            <div className="lg:col-span-1">
              <ActivityList
                activities={activities}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                loading={loading}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
