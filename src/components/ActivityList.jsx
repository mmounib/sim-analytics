import ActivityItem from "./ActivityItem";
import Dropdown from "./Dropdown";

const statusFilterOptions = [
  { value: "all", label: "All Activity" },
  { value: "activation", label: "Activations" },
  { value: "download", label: "Downloads" },
  { value: "suspension", label: "Suspensions" },
  { value: "system", label: "System" },
];

export default function ActivityList({
  activities,
  statusFilter,
  onStatusFilterChange,
  loading,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col h-[560px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-bold text-slate-800">
          Recent Activity
        </h2>
      </div>

      {/* Status filter */}
      <div className="mb-4">
        <Dropdown
          options={statusFilterOptions}
          value={statusFilter}
          onChange={onStatusFilterChange}
        />
      </div>

      {/* Activity list */}
      <div className="flex-1 overflow-y-auto pr-2 -mr-2">
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <div className="w-6 h-6 border-2 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        ) : activities.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-sm text-slate-400">
            No activities found
          </div>
        ) : (
          <div className="space-y-1">
            {activities.map((activity) => (
              <ActivityItem
                key={activity.id}
                type={activity.type}
                title={activity.title}
                description={activity.description}
                time={activity.time}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
