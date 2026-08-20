import { LearningStatistics } from "@/components/portfolio/learning-statistics";
import { ActivityChart } from "@/components/portfolio/activity-chart";
import { CareerReadinessScore } from "@/components/portfolio/career-readiness-score";
import { CareerInsights } from "@/components/portfolio/career-insights";
import { AccomplishedProjects } from "@/components/portfolio/accomplished-projects";
import { Certificates } from "@/components/portfolio/certificates";
import { ResumeBuilder } from "@/components/portfolio/resume-builder";
import AnimatedBackground from "@/components/animated-background";

export default function PortfolioPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="space-y-6">
      {/* Header */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Portfolio</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">Your portfolio</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Showcase your work, build your story, and keep your achievements visible.
        </p>
      </div>

      {/* Learning Statistics - Round Progress Bars */}
      <LearningStatistics />

      {/* Weekly Activity - Bar Graph with Animations */}
      <ActivityChart />

      {/* Career Readiness and AI Insights Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CareerReadinessScore />
        <CareerInsights />
      </div>

      {/* Accomplished Projects */}
      <AccomplishedProjects />

      {/* Certificates */}
      <Certificates />

      {/* Resume Builder */}
      <ResumeBuilder />
    </div>
    </>
  );
}
