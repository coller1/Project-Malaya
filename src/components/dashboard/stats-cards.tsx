import { BookOpen, Clock3, Target } from "lucide-react";

const stats = [
  { label: "Courses in progress", value: "8", detail: "+2 this month", icon: BookOpen },
  { label: "Hours studied", value: "46h", detail: "+8h this week", icon: Clock3 },
  { label: "Weekly goal", value: "74%", detail: "Great pace", icon: Target },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              <div className="rounded-full bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.detail}</p>
          </div>
        );
      })}
    </div>
  );
}
