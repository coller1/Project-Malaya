"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, AlertCircle } from "lucide-react";

interface ReadinessCategory {
  name: string;
  score: number;
  status: "complete" | "progress" | "pending";
}

export function CareerReadinessScore() {
  const [overallScore, setOverallScore] = useState(0);
  const targetScore = 78;

  const categories: ReadinessCategory[] = [
    { name: "Financial Analysis", score: 88, status: "complete" },
    { name: "Excel & Modeling", score: 82, status: "complete" },
    { name: "Interview Readiness", score: 70, status: "progress" },
    { name: "Professional Network", score: 55, status: "progress" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setOverallScore(targetScore), 100);
    return () => clearTimeout(timer);
  }, [targetScore]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallScore / 100) * circumference;

  const getStatusIcon = (status: ReadinessCategory["status"]) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />;
      case "progress":
        return <Circle className="h-5 w-5 text-[#1FA89A] dark:text-[#7EE7D5]" />;
      case "pending":
        return <AlertCircle className="h-5 w-5 text-[#F5B52E]" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-[#0B5D4E] dark:text-[#1FA89A]";
    if (score >= 60) return "text-[#1FA89A] dark:text-[#7EE7D5]";
    return "text-[#F5B52E] dark:text-[#F5B52E]";
  };

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Career Readiness Score</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Your overall readiness for job market</p>
      
      <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row">
        {/* Circular Score Display */}
        <div className="relative flex items-center justify-center">
          <svg width="180" height="180" className="rotate-[-90deg]">
            {/* Background circle */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-slate-200 dark:text-slate-700"
            />
            {/* Progress circle */}
            <circle
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1500 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1FA89A" />
                <stop offset="100%" stopColor="#0B5D4E" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">{overallScore}%</span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Ready</span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="flex-1 space-y-3 w-full">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-3">
              {getStatusIcon(category.status)}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{category.name}</span>
                  <span className={`text-sm font-semibold ${getScoreColor(category.score)}`}>{category.score}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#1FA89A] to-[#0B5D4E] transition-all duration-1000 ease-out"
                    style={{ width: `${category.score}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-gradient-to-r from-[#E8F7F3] to-[#E8F7F3] p-4 dark:from-[#0B5D4E]/30 dark:to-[#1FA89A]/30">
        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Next Steps</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Expand your professional network and complete mock interviews to reach 90% readiness for financial analyst roles.
        </p>
      </div>
    </section>
  );
}
