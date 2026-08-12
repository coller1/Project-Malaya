"use client";

import Link from "next/link";
import { BookOpen, Code, Briefcase, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AssessmentsPage() {
  const assessmentCategories = [
    {
      id: 1,
      title: "Foundation",
      slug: "foundation",
      icon: BookOpen,
      description: "Quizzes and knowledge checks from your learning modules",
      color: "bg-gradient-to-br from-[#1FA89A] to-[#0B5D4E]",
      hoverColor: "group-hover:from-[#0B5D4E] group-hover:to-[#0B5D4E]",
      borderColor: "border-[#1FA89A]/30 dark:border-[#1FA89A]/50",
      textColor: "text-[#0B5D4E] dark:text-[#1FA89A]",
      bgAccent: "bg-[#E8F7F3] dark:bg-[#0B5D4E]/30",
      progress: 65,
      completed: 13,
      total: 20,
      badge: "In Progress",
    },
    {
      id: 2,
      title: "Build Skills",
      slug: "build-skills",
      icon: Code,
      description: "Test proficiency with hands-on skill exercises",
      color: "bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6]",
      hoverColor: "group-hover:from-[#6D28D9] group-hover:to-[#6D28D9]",
      borderColor: "border-[#6D28D9]/30 dark:border-[#6D28D9]/50",
      textColor: "text-[#6D28D9] dark:text-[#A78BFA]",
      bgAccent: "bg-[#F3EBFF] dark:bg-[#6D28D9]/30",
      progress: 40,
      completed: 6,
      total: 15,
      badge: "Active",
    },
    {
      id: 3,
      title: "Gain Experience",
      slug: "gain-experience",
      icon: Briefcase,
      description: "Evaluate your completed project work",
      color: "bg-gradient-to-br from-[#1FA89A] to-[#0B5D4E]",
      hoverColor: "group-hover:from-[#1FA89A] group-hover:to-[#0B5D4E]",
      borderColor: "border-[#1FA89A]/30 dark:border-[#1FA89A]/50",
      textColor: "text-[#0B5D4E] dark:text-[#1FA89A]",
      bgAccent: "bg-[#E8F7F3] dark:bg-[#0B5D4E]/30",
      progress: 20,
      completed: 1,
      total: 5,
      badge: "Started",
    },
    {
      id: 4,
      title: "Stand Out",
      slug: "stand-out",
      icon: Award,
      description: "Review your portfolio and career readiness",
      color: "bg-gradient-to-br from-[#F5B52E] to-[#F59E0B]",
      hoverColor: "group-hover:from-[#F5B52E] group-hover:to-[#F5B52E]",
      borderColor: "border-[#F5B52E]/30 dark:border-[#F5B52E]/50",
      textColor: "text-[#F5B52E] dark:text-[#F5B52E]",
      bgAccent: "bg-[#FEF7E8] dark:bg-[#F5B52E]/30",
      progress: 0,
      completed: 0,
      total: 8,
      badge: "Not Started",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header - No Container */}
      <div className="space-y-6 border-b border-slate-200 pb-8 dark:border-slate-800">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Assessments
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
            Track Your Progress
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Review quizzes, skill checks, and milestones across all roadmap stages.
          </p>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Completion Rate</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">42%</p>
            <p className="text-xs text-[#0B5D4E] dark:text-[#1FA89A]">+12% this week</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Time Invested</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">24hrs</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Last 30 days</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Assessments Passed</p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">20/48</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">28 remaining</p>
          </div>
        </div>
      </div>

      {/* Assessment Categories Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {assessmentCategories.map((category) => {
          const IconComponent = category.icon;
          const isLocked = category.badge === "Locked";
          
          const CardContent = (
            <>
              {/* Colored Background Accent */}
              <div className={`absolute inset-0 ${category.color} opacity-[0.03] rounded-[24px]`} />
              <div className={`absolute right-0 top-0 h-48 w-48 ${category.color} opacity-[0.08] blur-3xl`} />

              {/* Header with Badge */}
              <div className="relative mb-4 flex items-start justify-between">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} shadow-lg`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category.bgAccent} ${category.textColor} border ${category.borderColor}`}
                >
                  {category.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                {/* Progress Section with Color */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {category.completed} of {category.total} completed
                    </span>
                    <span className={`text-base font-bold ${category.textColor}`}>
                      {category.progress}%
                    </span>
                  </div>
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className={`h-full ${category.color} transition-all duration-300`}
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>

                {/* Action Button with Color */}
                <div className={`mt-6 flex items-center gap-2 text-sm font-semibold transition-all ${
                  isLocked 
                    ? "text-slate-400 dark:text-slate-600" 
                    : `${category.textColor} group-hover:gap-3`
                }`}>
                  {isLocked ? "Complete previous stages" : "Continue Assessment"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </>
          );

          return isLocked ? (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-[24px] border ${category.borderColor} bg-white p-6 text-left shadow-sm dark:bg-slate-900 cursor-not-allowed opacity-60`}
            >
              {CardContent}
            </div>
          ) : (
            <Link
              key={category.id}
              href={`/assessments/${category.slug}`}
              className={`group relative overflow-hidden rounded-[24px] border-2 ${category.borderColor} bg-white p-6 text-left shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-slate-900 block`}
            >
              {CardContent}
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Recent Assessment Activity
        </h2>
        <div className="space-y-3">
          {[
            { name: "Excel Fundamentals Quiz", stage: "Foundation", score: "85%", time: "2 hours ago" },
            { name: "Financial Modeling Exercise", stage: "Build Skills", score: "92%", time: "1 day ago" },
            { name: "Data Awareness Test", stage: "Foundation", score: "78%", time: "3 days ago" },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{activity.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {activity.stage} • {activity.time}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#0B5D4E] dark:text-[#1FA89A]">{activity.score}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Score</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
