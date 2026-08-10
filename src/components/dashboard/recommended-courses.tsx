const courses = [
  { title: "UI Design Foundations", tag: "Design", time: "4 lessons", progress: "82%" },
  { title: "Advanced React Patterns", tag: "Frontend", time: "6 lessons", progress: "64%" },
  { title: "Product Strategy Basics", tag: "Business", time: "3 lessons", progress: "91%" },
];

export function RecommendedCourses() {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recommended for you</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Pick up where you left off.</p>
        </div>
        <button className="text-sm font-medium text-indigo-600">See all</button>
      </div>

      <div className="mt-6 space-y-3">
        {courses.map((course) => (
          <div key={course.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{course.title}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {course.tag} • {course.time}
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {course.progress}
              </span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2 rounded-full bg-indigo-600" style={{ width: course.progress }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
