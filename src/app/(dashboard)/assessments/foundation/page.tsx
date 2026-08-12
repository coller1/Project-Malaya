"use client";

import Link from "next/link";
import { ArrowLeft, Clock, CheckCircle2, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FoundationAssessmentsPage() {
  const assessments = [
    {
      id: 1,
      title: "Financial Literacy Basics",
      description: "Understanding money, financial systems, and basic statements",
      questions: 15,
      duration: "20 min",
      difficulty: "Beginner",
      status: "completed",
      score: 87,
      lastAttempt: "2 days ago",
    },
    {
      id: 2,
      title: "Introduction to Accounting",
      description: "Accounting principles, debits, credits, and financial statements",
      questions: 20,
      duration: "25 min",
      difficulty: "Beginner",
      status: "completed",
      score: 92,
      lastAttempt: "5 days ago",
    },
    {
      id: 3,
      title: "Excel Fundamentals",
      description: "Navigating Excel, formulas, functions, and basic charts",
      questions: 18,
      duration: "30 min",
      difficulty: "Intermediate",
      status: "in-progress",
      score: 65,
      lastAttempt: "1 day ago",
    },
    {
      id: 4,
      title: "Data Awareness",
      description: "Types of data, reading tables and charts, identifying trends",
      questions: 12,
      duration: "15 min",
      difficulty: "Beginner",
      status: "not-started",
      score: null,
      lastAttempt: null,
    },
    {
      id: 5,
      title: "Business Mathematics",
      description: "Percentages, ratios, profit margins, and growth calculations",
      questions: 16,
      duration: "20 min",
      difficulty: "Intermediate",
      status: "not-started",
      score: null,
      lastAttempt: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-[#0B5D4E] hover:bg-[#0B5D4E]/90 text-white">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-[#1FA89A] hover:bg-[#1FA89A]/90 text-white">In Progress</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-[#0B5D4E] dark:text-[#1FA89A]";
      case "Intermediate":
        return "text-[#F5B52E] dark:text-[#F5B52E]";
      case "Advanced":
        return "text-[#DC2626] dark:text-[#EF4444]";
      default:
        return "text-slate-600 dark:text-slate-400";
    }
  };

  const stats = {
    totalAssessments: 20,
    completed: 13,
    averageScore: 82,
    timeSpent: "6h 30m",
  };

  return (
    <div className="space-y-6">
      {/* Header with Icon and Stats Panel */}
      <div className="space-y-6 border-b border-slate-200 pb-6 dark:border-slate-800">
        <Link
          href="/assessments"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Assessments
        </Link>

        <div className="flex items-start justify-between gap-8">
          {/* Left Side - Title with Icon */}
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1FA89A] to-[#0B5D4E] shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#1FA89A]">
                Foundation
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Knowledge Assessments
              </h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Test your fundamental knowledge with quizzes from your learning modules
              </p>
            </div>
          </div>

          {/* Right Side - Stats Dashboard with Progress Circles */}
          <div className="flex flex-shrink-0 gap-4">
            {/* Progress Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  <svg className="h-20 w-20 -rotate-90 transform">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-slate-200 dark:text-slate-700"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - (stats.completed / stats.totalAssessments))}`}
                      className="text-[#1FA89A] dark:text-[#7EE7D5] transition-all duration-300"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {Math.round((stats.completed / stats.totalAssessments) * 100)}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Progress</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {stats.completed}/{stats.totalAssessments}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">assessments</p>
                </div>
              </div>
            </div>

            {/* Average Score Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  <svg className="h-20 w-20 -rotate-90 transform">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-slate-200 dark:text-slate-700"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - (stats.averageScore / 100))}`}
                      className="text-[#0B5D4E] dark:text-[#1FA89A] transition-all duration-300"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {stats.averageScore}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Average Score</p>
                  <p className="mt-1 text-2xl font-bold text-[#0B5D4E] dark:text-[#1FA89A]">
                    {stats.averageScore}%
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">overall</p>
                </div>
              </div>
            </div>

            {/* Time Spent Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F7F3] dark:bg-[#0B5D4E]/30">
                  <Clock className="h-8 w-8 text-[#0B5D4E] dark:text-[#1FA89A]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Time Spent</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {stats.timeSpent}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">learning time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment List - Improved Cards */}
      <div className="space-y-4">
        {assessments.map((assessment) => (
          <div
            key={assessment.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
          >
            <div className="flex items-center justify-between gap-6">
              {/* Left - Content */}
              <div className="flex-1 space-y-3">
                {/* Title and Status */}
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {assessment.title}
                  </h3>
                  {getStatusBadge(assessment.status)}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {assessment.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span>{assessment.questions} questions</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span>{assessment.duration}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className={getDifficultyColor(assessment.difficulty)}>
                    {assessment.difficulty}
                  </span>
                </div>

                {/* Score Display */}
                {assessment.status === "completed" && (
                  <div className="inline-flex items-center gap-2 rounded-lg bg-[#E8F7F3] px-3 py-1.5 text-sm dark:bg-[#0B5D4E]/20">
                    <CheckCircle2 className="h-4 w-4 text-[#0B5D4E] dark:text-[#1FA89A]" />
                    <span className="font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
                      {assessment.score}% • {assessment.lastAttempt}
                    </span>
                  </div>
                )}

                {assessment.status === "in-progress" && (
                  <div className="inline-flex items-center gap-2 rounded-lg bg-[#E8F7F3] px-3 py-1.5 text-sm dark:bg-[#1FA89A]/20">
                    <div className="h-4 w-4 rounded-full border-2 border-[#0B5D4E] border-t-transparent animate-spin dark:border-[#1FA89A]" />
                    <span className="font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
                      {assessment.score}% • {assessment.lastAttempt}
                    </span>
                  </div>
                )}
              </div>

              {/* Right - Action Button */}
              <button className="flex h-10 items-center rounded-lg bg-[#1FA89A] px-6 font-medium text-white transition-colors hover:bg-[#0B5D4E] dark:bg-[#1FA89A] dark:hover:bg-[#0B5D4E]">
                {assessment.status === "not-started" && "Start"}
                {assessment.status === "in-progress" && "Continue"}
                {assessment.status === "completed" && "Retake"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
