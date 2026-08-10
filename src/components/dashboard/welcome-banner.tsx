export function WelcomeBanner() {
  return (
    <section className="rounded-[20px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Welcome back</p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Your next breakthrough starts with one focused lesson.
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          You&apos;re making steady progress. Keep the streak going and finish today&apos;s plan.
        </p>
      </div>
    </section>
  );
}
