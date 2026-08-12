"use client";

import Link from "next/link";
import { ArrowLeft, Code, Clock, Target, CheckCircle2, Play, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function BuildSkillsAssessmentsPage() {
  const skillAssessments = [
    {
      id: 1,
      title: "Financial Modeling Practice",
      description: "Build income statements and calculate key financial metrics",
      skillLevel: "Intermediate",
      estimatedTime: "45 min",
      exerciseType: "Hands-on Excel",
      status: "completed",
      score: 92,
      feedback: "Excellent work! Your formulas were accurate.",
      lastAttempt: "3 days ago",
    },
    {
      id: 2,
      title: "Data Cleaning Challenge",
      description: "Clean and prepare a sales dataset for analysis",
      skillLevel: "Intermediate",
      estimatedTime: "30 min",
      exerciseType: "Practical Task",
      status: "completed",
      score: 88,
      feedback: "Great attention to detail in formatting.",
      lastAttempt: "1 week ago",
    },
    {
      id: 3,
      title: "SQL Query Practice",
      description: "Write queries to extract and analyze customer data",
      skillLevel: "Beginner",
      estimatedTime: "40 min",
      exerciseType: "Coding Exercise",
      status: "in-progress",
      score: 65,
      feedback: null,
      lastAttempt: "Yesterday",
    },
    {
      id: 4,
      title: "Excel Dashboard Creation",
      description: "Build an interactive dashboard with pivot tables and charts",
      skillLevel: "Advanced",
      estimatedTime: "60 min",
      exerciseType: "Project-based",
      status: "not-started",
      score: null,
      feedback: null,
      lastAttempt: null,
    },
    {
      id: 5,
      title: "Financial Ratio Analysis",
      description: "Calculate and interpret key financial ratios",
      skillLevel: "Intermediate",
      estimatedTime: "35 min",
      exerciseType: "Practical Task",
      status: "not-started",
      score: null,
      feedback: null,
      lastAttempt: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-[#0B5D4E] hover:bg-[#0B5D4E]/90 text-white">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white">In Progress</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-[#E8F7F3] text-[#0B5D4E] dark:bg-[#0B5D4E]/30 dark:text-[#1FA89A]";
      case "Intermediate":
        return "bg-[#FEF7E8] text-[#F5B52E] dark:bg-[#F5B52E]/30 dark:text-[#F5B52E]";
      case "Advanced":
        return "bg-[#FEE5E5] text-[#DC2626] dark:bg-[#DC2626]/30 dark:text-[#EF4444]";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  const stats = {
    totalExercises: 15,
    completed: 6,
    averageScore: 85,
    skillsPracticed: 8,
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
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] shadow-lg">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6D28D9] dark:text-[#A78BFA]">
                Build Skills
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Practical Exercises
              </h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Test your proficiency with hands-on exercises and practical assignments
              </p>
            </div>
          </div>

          {/* Right Side - Stats Dashboard */}
          <div className="flex flex-shrink-0 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Progress</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.completed}/{stats.totalExercises}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Average Score</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.averageScore}%
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Skills Practiced</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.skillsPracticed}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Skill Development Progress
          </h2>
          <span className="text-sm font-medium text-[#6D28D9] dark:text-[#A78BFA]">
            {stats.completed} of {stats.totalExercises} completed
          </span>
        </div>
        <Progress value={40} className="h-3" />
      </div>

      {/* Exercise List */}
      <div className="space-y-4">
        {skillAssessments.map((exercise) => (
          <div
            key={exercise.id}
            className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              {/* Content */}
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {exercise.title}
                  </h3>
                  {getStatusBadge(exercise.status)}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {exercise.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${getSkillLevelColor(exercise.skillLevel)}`}>
                    {exercise.skillLevel}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {exercise.exerciseType}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3 w-3" />
                    {exercise.estimatedTime}
                  </div>
                </div>

                {/* Feedback & Score */}
                {exercise.status === "completed" && exercise.feedback && (
                  <div className="mt-4 rounded-lg bg-[#E8F7F3] p-3 dark:bg-[#0B5D4E]/20">
                    <div className="flex items-start gap-2">
                      <Star className="mt-0.5 h-4 w-4 text-[#0B5D4E] dark:text-[#1FA89A]" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
                          Score: {exercise.score}%
                        </p>
                        <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
                          {exercise.feedback}
                        </p>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                          Completed {exercise.lastAttempt}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {exercise.status === "in-progress" && (
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-[#6D28D9] dark:text-[#A78BFA]" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Progress: <span className="text-[#6D28D9] dark:text-[#A78BFA]">{exercise.score}%</span>
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">• Last worked on {exercise.lastAttempt}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2">
                <Link href={`/assessments/build-skills/${exercise.id}`}>
                  <button className="flex items-center gap-2 rounded-xl bg-[#6D28D9] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6D28D9]/90 dark:bg-[#6D28D9] dark:hover:bg-[#8B5CF6]">
                    {exercise.status === "not-started" && (
                      <>
                        <Play className="h-4 w-4" />
                        Start Exercise
                      </>
                    )}
                    {exercise.status === "in-progress" && (
                      <>
                        <Play className="h-4 w-4" />
                        Continue
                      </>
                    )}
                    {exercise.status === "completed" && (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Review
                      </>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
