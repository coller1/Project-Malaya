"use client";

import { useState } from "react";

const recommended = [
  {
    title: "Product Design Systems",
    meta: "UI/UX • 5 lessons",
    description: "Explore reusable patterns and modern UI systems for faster design execution.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Career Growth Essentials",
    meta: "Career • 3 lessons",
    description: "Learn how to position yourself better for opportunities and professional momentum.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
];

const events = [
  {
    title: "Live Webinar: AI in Learning",
    meta: "Today • 4:00 PM",
    description: "A live session on practical AI workflows and how to use them in everyday learning.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Seminar: Building Your Brand",
    meta: "Tomorrow • 11:00 AM",
    description: "A focused seminar on storytelling, positioning, and visibility in your field.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
  },
];

export function TabsPanel() {
  const [activeTab, setActiveTab] = useState<"recommended" | "upcoming">("recommended");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const items = activeTab === "recommended" ? recommended : events;

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2">
        <button
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === "recommended"
              ? "bg-[#0B5D4E] text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
          onClick={() => {
            setActiveTab("recommended");
            setOpenItem(null);
          }}
        >
          Recommended for you
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === "upcoming"
              ? "bg-[#0B5D4E] text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
          onClick={() => {
            setActiveTab("upcoming");
            setOpenItem(null);
          }}
        >
          Upcoming events
        </button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => {
          const isOpen = openItem === item.title;

          return (
            <div key={item.title} className="group h-[240px] [perspective:1000px]">
              <button
                className="relative h-full w-full text-left [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                onClick={() => setOpenItem(isOpen ? null : item.title)}
                style={{ transform: isOpen ? "rotateY(180deg)" : undefined }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-[16px] border border-slate-200 bg-slate-50 [backface-visibility:hidden] dark:border-slate-700 dark:bg-slate-800">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/80">{activeTab === "recommended" ? "Recommended" : "Event"}</p>
                    <p className="mt-1 font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-white/80">{item.meta}</p>
                  </div>
                </div>

                <div className="absolute inset-0 overflow-hidden rounded-[16px] border border-slate-200 bg-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.meta}</p>
                  <div className="mt-3 h-3 w-3/4 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="mt-2 h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
