import Link from "next/link";
import Image from "next/image";
import { BookOpen, CalendarDays, Clock3, Sparkles } from "lucide-react";

const stats = [
  { label: "Modules in progress", value: "4", color: "bg-[#0B5D4E]", icon: BookOpen },
  { label: "Events joined", value: "12", color: "bg-[#6D28D9]", icon: CalendarDays },
  { label: "Deadlines this week", value: "3", color: "bg-[#F5B52E]", icon: Clock3 },
  { label: "Mentor sessions", value: "2", color: "bg-[#1FA89A]", icon: Sparkles },
];

export function RoadmapCard() {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative overflow-hidden rounded-[16px] border border-slate-200 bg-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-slate-700 dark:bg-slate-800">
        <Image
          src="/roadmap.png"
          alt="Roadmap preview"
          width={800}
          height={420}
          className="h-[260px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 max-w-[70%]">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-black">
            Daily motivation
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[#0B5D4E]">
            Keep going — your next milestone is closer than it feels.
          </h3>
        </div>

        <Link
          href="/my-roadmap"
          className="absolute bottom-5 left-5 rounded-md bg-[#0B5D4E] px-4 py-2 text-sm font-medium text-white"
        >
          Continue my roadmap
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div className={`h-2.5 w-12 rounded-full ${item.color}`} />
                <div className="rounded-full bg-white p-2 text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
