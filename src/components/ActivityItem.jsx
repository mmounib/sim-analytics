import { activityDotColors } from "../data/mockData";

export default function ActivityItem({ type, title, description, time }) {
  const dotColor = activityDotColors[type] || "bg-gray-400";

  return (
    <div className="flex items-start gap-3 py-3 group">
      <div className="mt-1.5 flex-shrink-0">
        <span
          className={`block w-2.5 h-2.5 rounded-full ${dotColor} ring-2 ring-offset-2 ring-transparent`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5 truncate">{description}</p>
        <p className="text-[11px] text-slate-400 mt-1">{time}</p>
      </div>
    </div>
  );
}
