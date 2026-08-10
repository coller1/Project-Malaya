import { Flame } from "lucide-react";

export function RightSidePanel() {
  return (
    <aside className="space-y-4">
      <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-slate-500 dark:text-slate-400">Overall progress</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">You&apos;re doing great</h3>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#F7FCFA] p-4 dark:bg-slate-800/70">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 dark:bg-orange-500/20">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">7-day streak</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Stay consistent and keep the momentum.</p>
              </div>
            </div>
          </div>

          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-base font-semibold text-slate-900 dark:text-slate-100">
            <div className="absolute inset-0 rounded-full border-[10px] border-slate-200 dark:border-slate-700" />
            <div className="absolute inset-0 rounded-full border-[10px] border-[#0B5D4E] border-t-transparent" />
            <span>78%</span>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">Daily motivation</p>
        <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">Small steps every day still move you forward.</p>
      </section>

      <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Today&apos;s schedule</h3>
          <span className="text-sm text-slate-500 dark:text-slate-400">3 items</span>
        </div>

        <div className="mt-4 space-y-3">
          {[
            { title: "Design review", time: "09:00" },
            { title: "Mentor session", time: "13:30" },
            { title: "Study block", time: "19:00" },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800">
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.title}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{item.time}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Latest news</h3>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
          <div className="h-24 rounded-xl bg-[linear-gradient(135deg,#0B5D4E_0%,#7CC7A2_100%)]" />
          <div className="mt-3 h-3 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="mt-2 h-3 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>
      </section>
    </aside>
  );
}
