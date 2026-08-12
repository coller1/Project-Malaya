"use client";

import { Sparkles, TrendingUp, Target, Zap } from "lucide-react";

export function CareerInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Strong Financial Acumen",
      description: "Your financial modeling skills have improved by 40% this quarter. You're mastering advanced valuation techniques.",
      color: "text-[#0B5D4E] dark:text-[#1FA89A]",
      bgColor: "bg-[#E8F7F3] dark:bg-[#0B5D4E]/30",
    },
    {
      icon: Target,
      title: "Investment Banking Ready",
      description: "Based on your learning path, you're well-positioned for IB analyst roles. Your DCF and LBO models are portfolio-ready.",
      color: "text-[#1FA89A] dark:text-[#7EE7D5]",
      bgColor: "bg-[#E8F7F3] dark:bg-[#1FA89A]/30",
    },
    {
      icon: Zap,
      title: "High Demand Certifications",
      description: "You've completed CFA Level I prep and Excel certifications - credentials that are in the top 15% demand for analysts.",
      color: "text-[#6D28D9] dark:text-[#A78BFA]",
      bgColor: "bg-[#F3EBFF] dark:bg-[#6D28D9]/30",
    },
  ];

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-[#F5B52E]" />
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">AI Career Insights</h2>
      </div>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Personalized recommendations based on your learning journey</p>
      
      <div className="mt-6 space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 p-4 transition-all hover:shadow-md dark:border-slate-700"
          >
            <div className="flex items-start gap-3">
              <div className={`rounded-lg p-2 ${insight.bgColor}`}>
                <insight.icon className={`h-5 w-5 ${insight.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{insight.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
