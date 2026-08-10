export function ProgressCard() {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Current streak</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">You&apos;ve kept your streak alive for 6 days.</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          On track
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">6 days</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Consistency score</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">92%</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">This week</p>
          </div>
        </div>

        <div className="mt-5 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-2 w-[92%] rounded-full bg-emerald-500" />
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-slate-200 p-4 dark:border-slate-700">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Next milestone</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Complete 2 more lessons to hit your weekly target.</p>
      </div>
    </section>
  );
}
