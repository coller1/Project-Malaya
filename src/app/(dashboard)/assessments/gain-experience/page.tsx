"use client";

import Link from "next/link";
import { ArrowLeft, Briefcase, Clock, FolderOpen, CheckCircle2, Play, FileText, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function GainExperienceAssessmentsPage() {
  const projects = [
    {
      id: 1,
      title: "Aritzia Sales Performance Analysis",
      description: "Analyze quarterly sales data and provide strategic recommendations",
      projectType: "Business Case Study",
      estimatedTime: "3-4 hours",
      deliverables: ["Excel Workbook", "Executive Summary", "Presentation Slides"],
      status: "completed",
      score: 94,
      portfolioReady: true,
      skillsDemonstrated: ["Excel", "Financial Analysis", "Data Visualization", "Business Reasoning"],
      lastWorked: "1 week ago",
    },
    {
      id: 2,
      title: "KPI Dashboard for Small Business",
      description: "Build an interactive dashboard to monitor monthly business performance",
      projectType: "Dashboard Project",
      estimatedTime: "2-3 hours",
      deliverables: ["Excel Dashboard", "Performance Report"],
      status: "in-progress",
      score: null,
      portfolioReady: false,
      skillsDemonstrated: ["Excel", "Pivot Tables", "Dashboard Design", "Data Visualization"],
      lastWorked: "2 days ago",
    },
    {
      id: 3,
      title: "Investment Recommendation Report",
      description: "Research and recommend investment opportunities based on financial analysis",
      projectType: "Research Project",
      estimatedTime: "4-5 hours",
      deliverables: ["Investment Report", "Financial Comparison Table", "Presentation"],
      status: "not-started",
      score: null,
      portfolioReady: false,
      skillsDemonstrated: ["Financial Statement Analysis", "Research", "Critical Thinking", "Communication"],
      lastWorked: null,
    },
    {
      id: 4,
      title: "Customer Segmentation Analysis",
      description: "Segment customers based on purchasing behavior and demographics",
      projectType: "Data Analysis",
      estimatedTime: "3-4 hours",
      deliverables: ["Analysis Report", "Visualizations", "Recommendations"],
      status: "locked",
      score: null,
      portfolioReady: false,
      skillsDemonstrated: ["Data Analysis", "Excel", "Statistical Thinking", "Business Strategy"],
      lastWorked: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-[#0B5D4E] hover:bg-[#0B5D4E]/90 text-white">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-[#1FA89A] hover:bg-[#1FA89A]/90 text-white">In Progress</Badge>;
      case "locked":
        return <Badge variant="outline" className="border-slate-400 text-slate-400">Locked</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  const stats = {
    totalProjects: 5,
    completed: 1,
    inProgress: 1,
    portfolioItems: 1,
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
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#1FA89A]">
                Gain Experience
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Project Assessments
              </h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Complete realistic, career-relevant projects and build your portfolio
              </p>
            </div>
          </div>

          {/* Right Side - Stats Dashboard */}
          <div className="flex flex-shrink-0 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Total Projects</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.totalProjects}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Completed</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.completed}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Portfolio Items</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.portfolioItems}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Project Completion
          </h2>
          <span className="text-sm font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
            {stats.completed} of {stats.totalProjects} completed
          </span>
        </div>
        <Progress value={20} className="h-3" />
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => {
          const isLocked = project.status === "locked";
          
          return (
            <div
              key={project.id}
              className={`rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                isLocked ? "opacity-60" : "transition-all hover:shadow-md"
              }`}
            >
              {/* Header */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                    {getStatusBadge(project.status)}
                    {project.portfolioReady && (
                      <Badge className="bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white">
                        <Award className="mr-1 h-3 w-3" />
                        Portfolio Ready
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
                  <FolderOpen className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {project.projectType}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>{project.estimatedTime}</span>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Deliverables
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                    >
                      <FileText className="h-3 w-3" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Demonstrated */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Skills Demonstrated
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skillsDemonstrated.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#E8F7F3] px-3 py-1 text-xs font-medium text-[#0B5D4E] dark:bg-[#0B5D4E]/30 dark:text-[#1FA89A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Score & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  {project.status === "completed" && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Score: <span className="text-[#0B5D4E] dark:text-[#1FA89A]">{project.score}%</span>
                        </p>
                        <p className="text-xs text-slate-500">Completed {project.lastWorked}</p>
                      </div>
                    </div>
                  )}
                  {project.status === "in-progress" && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Last worked on {project.lastWorked}
                    </p>
                  )}
                  {isLocked && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Complete previous projects to unlock
                    </p>
                  )}
                </div>

                <button
                  disabled={isLocked}
                  className={`flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-colors ${
                    isLocked
                      ? "cursor-not-allowed bg-slate-400 dark:bg-slate-700"
                      : "bg-[#0B5D4E] hover:bg-[#0B5D4E]/90 dark:bg-[#1FA89A] dark:hover:bg-[#1FA89A]/90"
                  }`}
                >
                  {project.status === "not-started" && (
                    <>
                      <Play className="h-4 w-4" />
                      Start Project
                    </>
                  )}
                  {project.status === "in-progress" && (
                    <>
                      <Play className="h-4 w-4" />
                      Continue
                    </>
                  )}
                  {project.status === "completed" && (
                    <>
                      <Award className="h-4 w-4" />
                      View Portfolio
                    </>
                  )}
                  {isLocked && (
                    <>
                      <span>Locked</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
