"use client";

import { useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  value: number;
  total: number;
  color: string;
}

function CircularProgress({ value, total, color, size = 120 }: { value: number; total: number; color: string; size?: number }) {
  const [progress, setProgress] = useState(0);
  const percentage = (value / total) * 100;
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-slate-200 dark:text-slate-700"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">of {total}</span>
      </div>
    </div>
  );
}

function StatCard({ label, value, total, color }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <CircularProgress value={value} total={total} color={color} />
      <p className="mt-4 text-center text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
    </div>
  );
}

export function LearningStatistics() {
  const stats = [
    { label: "Finance Courses", value: 15, total: 20, color: "#0B5D4E" },
    { label: "Financial Models", value: 12, total: 15, color: "#1FA89A" },
    { label: "Learning Hours", value: 180, total: 200, color: "#6D28D9" },
    { label: "Case Studies", value: 8, total: 10, color: "#F5B52E" },
  ];

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Learning Statistics</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Track your learning journey with detailed metrics</p>
      
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
