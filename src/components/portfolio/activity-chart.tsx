"use client";

import { useEffect, useState } from "react";

interface BarData {
  label: string;
  value: number;
  hours: number;
  color: string;
}

export function ActivityChart() {
  const [animate, setAnimate] = useState(false);

  const barData: BarData[] = [
    { label: "Mon", value: 85, hours: 3.5, color: "#1FA89A" },
    { label: "Tue", value: 95, hours: 4.0, color: "#1FA89A" },
    { label: "Wed", value: 70, hours: 3.0, color: "#1FA89A" },
    { label: "Thu", value: 90, hours: 3.8, color: "#1FA89A" },
    { label: "Fri", value: 100, hours: 4.2, color: "#0B5D4E" },
    { label: "Sat", value: 50, hours: 2.0, color: "#6D28D9" },
    { label: "Sun", value: 40, hours: 1.5, color: "#6D28D9" },
  ];

  const totalHours = barData.reduce((sum, bar) => sum + bar.hours, 0);
  const avgHours = (totalHours / barData.length).toFixed(1);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Weekly Study Activity</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Hours dedicated to financial analysis learning</p>
      
      <div className="mt-8 flex items-end justify-between gap-2 sm:gap-3" style={{ height: "220px" }}>
        {barData.map((bar, index) => (
          <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2 h-full">
            <div className="relative w-full flex flex-col items-center justify-end" style={{ height: "180px" }}>
              {/* Value label on hover */}
              <div className={`mb-1 text-xs font-semibold transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`} style={{ color: bar.color }}>
                {bar.hours}h
              </div>
              {/* Bar */}
              <div
                className="w-full rounded-t-lg shadow-sm transition-all duration-1000 ease-out hover:opacity-80 cursor-pointer"
                style={{
                  height: animate ? `${(bar.value / 100) * 160}px` : "0px",
                  backgroundColor: bar.color,
                  minHeight: animate && bar.value > 0 ? "8px" : "0px",
                }}
              />
            </div>
            {/* Day label */}
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{bar.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">Total this week</p>
          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">{totalHours.toFixed(1)} hrs</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">Daily average</p>
          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">{avgHours} hrs</p>
        </div>
      </div>
    </section>
  );
}
