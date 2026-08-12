"use client";

import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, FileText, Briefcase, Users, TrendingUp, BookOpen, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function StandOutAssessmentsPage() {
  const careerReadinessModules = [
    {
      id: 1,
      title: "Portfolio Review",
      description: "Your completed projects and portfolio showcase",
      icon: Award,
      status: "available",
      items: [
        { name: "Aritzia Sales Analysis", type: "Case Study", status: "completed" },
        { name: "KPI Dashboard Project", type: "Dashboard", status: "in-progress" },
      ],
      action: "View Portfolio",
    },
    {
      id: 2,
      title: "Resume & Applications",
      description: "Resume builder, cover letter templates, and application toolkit",
      icon: FileText,
      status: "available",
      items: [
        { name: "Resume Builder", type: "Tool", status: "not-started" },
        { name: "Cover Letter Template", type: "Resource", status: "not-started" },
        { name: "LinkedIn Optimization", type: "Guide", status: "not-started" },
      ],
      action: "Start Building",
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Practice common and technical interview questions",
      icon: Users,
      status: "available",
      items: [
        { name: "Behavioral Questions", type: "Practice", status: "not-started" },
        { name: "Technical Questions", type: "Practice", status: "not-started" },
        { name: "Mock Interview", type: "Simulation", status: "locked" },
      ],
      action: "Start Practice",
    },
    {
      id: 4,
      title: "Career Insights",
      description: "Industry trends, career paths, and professional development",
      icon: TrendingUp,
      status: "available",
      items: [
        { name: "Industry Trends Report", type: "Reading", status: "not-started" },
        { name: "Career Pathways Guide", type: "Resource", status: "not-started" },
        { name: "Skill Development Plan", type: "Personalized", status: "not-started" },
      ],
      action: "Explore Insights",
    },
    {
      id: 5,
      title: "Networking Resources",
      description: "Connect with professionals and build your network",
      icon: Briefcase,
      status: "locked",
      items: [
        { name: "Networking Events", type: "Events", status: "locked" },
        { name: "Mentorship Program", type: "Program", status: "locked" },
        { name: "Alumni Network", type: "Community", status: "locked" },
      ],
      action: "Unlock",
    },
    {
      id: 6,
      title: "Continuous Learning",
      description: "Recommended resources to keep growing",
      icon: BookOpen,
      status: "available",
      items: [
        { name: "Recommended Books", type: "Reading List", status: "available" },
        { name: "Podcasts & Videos", type: "Media", status: "available" },
        { name: "Industry Newsletters", type: "Subscription", status: "not-started" },
      ],
      action: "Browse Resources",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />;
      case "in-progress":
        return <div className="h-4 w-4 rounded-full border-2 border-orange-600 border-t-transparent animate-spin dark:border-orange-400" />;
      case "locked":
        return <Lock className="h-4 w-4 text-slate-400" />;
      default:
        return <div className="h-4 w-4 rounded-full border-2 border-slate-300 dark:border-slate-700" />;
    }
  };

  const stats = {
    portfolioItems: 1,
    skillsEarned: 12,
    certificatesEarned: 3,
    careerReadiness: 35,
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
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                Stand Out
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Career Preparation
              </h1>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Showcase your skills, prepare for opportunities, and build your professional brand
              </p>
            </div>
          </div>

          {/* Right Side - Stats Dashboard */}
          <div className="flex flex-shrink-0 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Portfolio Items</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.portfolioItems}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Skills Earned</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.skillsEarned}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Certificates</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stats.certificatesEarned}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Career Readiness Progress
          </h2>
          <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
            {stats.careerReadiness}%
          </span>
        </div>
        <Progress value={stats.careerReadiness} className="h-3" />
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
          Complete more activities to increase your career readiness score
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {careerReadinessModules.map((module) => {
          const IconComponent = module.icon;
          const isLocked = module.status === "locked";
          
          return (
            <div
              key={module.id}
              className={`rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                isLocked ? "opacity-60" : "transition-all hover:shadow-md"
              }`}
            >
              {/* Header */}
              <div className="mb-4 flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  isLocked 
                    ? "bg-slate-200 dark:bg-slate-800" 
                    : "bg-gradient-to-br from-orange-500 to-orange-600"
                } shadow-md`}>
                  <IconComponent className={`h-6 w-6 ${isLocked ? "text-slate-400" : "text-white"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {module.title}
                    </h3>
                    {isLocked && (
                      <Badge variant="outline" className="border-slate-400 text-slate-400">
                        Locked
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {module.description}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="mb-4 space-y-2">
                {module.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                disabled={isLocked}
                className={`w-full rounded-xl py-3 font-medium text-white transition-colors ${
                  isLocked
                    ? "cursor-not-allowed bg-slate-400 dark:bg-slate-700"
                    : "bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                }`}
              >
                {module.action}
              </button>
            </div>
          );
        })}
      </div>

      {/* Additional Resources */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Recommended Next Steps
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
            <Briefcase className="mt-0.5 h-5 w-5 text-orange-600 dark:text-orange-400" />
            <div className="flex-1">
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Explore Opportunities
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Browse internships, fellowships, and entry-level positions that match your profile
              </p>
            </div>
            <Link
              href="/opportunities"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              Browse
            </Link>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
            <Users className="mt-0.5 h-5 w-5 text-orange-600 dark:text-orange-400" />
            <div className="flex-1">
              <p className="font-medium text-slate-900 dark:text-slate-100">
                Attend Upcoming Events
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Join career fairs, workshops, and networking events to connect with professionals
              </p>
            </div>
            <Link
              href="/upcoming-events"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              View Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
