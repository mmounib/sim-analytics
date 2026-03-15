import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import Dropdown from "./Dropdown";

const dateRangeOptions = [
  { value: "Last 7 Days", label: "Last 7 Days" },
  { value: "Last 30 Days", label: "Last 30 Days" },
  { value: "Last 90 Days", label: "Last 90 Days" },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-lg shadow-lg px-4 py-3">
        <p className="text-xs font-semibold text-slate-700 mb-1.5">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-xs text-slate-500">
            <span
              className="inline-block w-2 h-2 rounded-full mr-1.5"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}:{" "}
            <span className="font-semibold text-slate-700">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function UsageChart({
  data,
  dateRange,
  onDateRangeChange,
  loading,
}) {
  const [activeMetric, setActiveMetric] = useState("data"); // "data" or "sms"

  return (
    <div className="bg-white rounded-xl border border-gray-100 sm:p-5 p-3 shadow-sm flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <div>
          <h2 className="text-base md:text-lg font-bold text-slate-800">
            Usage Analytics
          </h2>
          <p className="text-[10px] md:text-xs text-slate-400 mt-0.5">
            Data and SMS traffic over time
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Metric Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveMetric("data")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeMetric === "data"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Data Usage
            </button>
            <button
              onClick={() => setActiveMetric("sms")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeMetric === "sms"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              SMS Count
            </button>
          </div>

          <Dropdown
            className="w-36"
            options={dateRangeOptions}
            value={dateRange}
            onChange={onDateRangeChange}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 sm:mt-6 mt-3">
        {loading ? (
          <div className="flex items-center justify-center h-[300px] sm:h-[450px]">
            <div className="w-6 h-6 border-2 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="h-[300px] sm:h-[450px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
              >
                <defs>
                  <linearGradient
                    id="dataUsageGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="smsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f1f5f9"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={26}
                  iconType="circle"
                  iconSize={10}
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => (
                    <span className="text-xs sm:text-sm text-slate-500 ml-1">
                      {value}
                    </span>
                  )}
                />

                {activeMetric === "data" && (
                  <Area
                    type="monotone"
                    dataKey="dataUsage"
                    name="Data Usage (GB)"
                    stroke="#4f46e5"
                    strokeWidth={2.5}
                    fill="url(#dataUsageGradient)"
                    dot={{
                      r: 4,
                      fill: "#4f46e5",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 6,
                      fill: "#4f46e5",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                )}

                {activeMetric === "sms" && (
                  <Area
                    type="monotone"
                    dataKey="smsCount"
                    name="SMS Count"
                    stroke="#94a3b8"
                    strokeWidth={2.5}
                    fill="url(#smsGradient)"
                    dot={{
                      r: 4,
                      fill: "#94a3b8",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 6,
                      fill: "#94a3b8",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
