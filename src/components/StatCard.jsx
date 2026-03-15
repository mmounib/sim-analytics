const iconMap = {
  sim: (
    <svg
      className="w-5 h-5 text-slate-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  active: (
    <svg
      className="w-5 h-5 text-emerald-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  suspended: (
    <svg
      className="w-5 h-5 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  new: (
    <svg
      className="w-5 h-5 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <line x1="12" y1="9" x2="12" y2="15" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  ),
};

export default function StatCard({
  title,
  value,
  subtitle,
  subtitleColor = "text-slate-500",
  icon,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 sm:p-5 p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <span className="text-xs md:text-sm font-medium text-slate-500">
          {title}
        </span>
        <span className="p-1.5 rounded-lg bg-slate-50">
          {iconMap[icon] || iconMap.sim}
        </span>
      </div>
      <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
        {value}
      </span>
      <span className={`text-[10px] md:text-xs font-medium ${subtitleColor}`}>
        {subtitle}
      </span>
    </div>
  );
}
