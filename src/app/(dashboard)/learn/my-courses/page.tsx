"use client";

import { useState } from "react";
import { BookOpen, Clock, Award, PlayCircle, CheckCircle2, Lock, Target, GraduationCap } from "lucide-react";

// Roadmap-based courses (assigned based on career path)
const roadmapCourses = [
  {
    id: 1,
    title: "Financial Analysis Fundamentals",
    instructor: "Sarah Johnson",
    progress: 100,
    totalLessons: 24,
    completedLessons: 24,
    duration: "8 hours",
    level: "Beginner",
    category: "Finance",
    phase: "Foundation",
    thumbnail: "/roadmap.png",
    description: "Master the fundamentals of financial analysis including financial statements, ratios, and forecasting techniques.",
    skills: ["Financial Statements", "Ratio Analysis", "Forecasting"],
    certificateAvailable: true,
    isLocked: false,
    completedDate: "March 15, 2024"
  },
  {
    id: 2,
    title: "Excel for Financial Modeling",
    instructor: "Michael Chen",
    progress: 75,
    totalLessons: 32,
    completedLessons: 24,
    duration: "12 hours",
    level: "Intermediate",
    category: "Technical Skills",
    phase: "Foundation",
    thumbnail: "/roadmap.png",
    description: "Learn advanced Excel techniques for building professional financial models and performing complex data analysis.",
    skills: ["Excel Formulas", "Pivot Tables", "Data Visualization"],
    certificateAvailable: true,
    isLocked: false,
    completedDate: null
  },
  {
    id: 3,
    title: "Python for Data Analysis",
    instructor: "Emily Rodriguez",
    progress: 0,
    totalLessons: 20,
    completedLessons: 0,
    duration: "10 hours",
    level: "Intermediate",
    category: "Programming",
    phase: "Build Skills",
    thumbnail: "/roadmap.png",
    description: "Use Python libraries like Pandas and NumPy to analyze and visualize financial data effectively.",
    skills: ["Python", "Pandas", "Data Visualization"],
    certificateAvailable: true,
    isLocked: true,
    prerequisite: "Complete Excel for Financial Modeling",
    completedDate: null
  },
  {
    id: 4,
    title: "SQL Database Essentials",
    instructor: "David Park",
    progress: 0,
    totalLessons: 16,
    completedLessons: 0,
    duration: "6 hours",
    level: "Beginner",
    category: "Database",
    phase: "Build Skills",
    thumbnail: "/roadmap.png",
    description: "Learn SQL fundamentals to query, manipulate, and manage data in relational databases.",
    skills: ["SQL Queries", "Database Design", "Data Management"],
    certificateAvailable: false,
    isLocked: true,
    prerequisite: "Complete Excel for Financial Modeling",
    completedDate: null
  },
  {
    id: 5,
    title: "Financial Modeling Projects",
    instructor: "Robert Williams",
    progress: 0,
    totalLessons: 12,
    completedLessons: 0,
    duration: "15 hours",
    level: "Advanced",
    category: "Projects",
    phase: "Gain Experience",
    thumbnail: "/roadmap.png",
    description: "Apply your skills to real-world financial modeling projects and build your portfolio.",
    skills: ["DCF Models", "LBO Analysis", "Portfolio Building"],
    certificateAvailable: true,
    isLocked: true,
    prerequisite: "Complete Python for Data Analysis and SQL Database Essentials",
    completedDate: null
  },
];

// Other courses (additional certifications not on roadmap)
const otherCourses = [
  {
    id: 6,
    title: "Investment Portfolio Management",
    instructor: "Thomas Anderson",
    progress: 45,
    totalLessons: 18,
    completedLessons: 8,
    duration: "12 hours",
    level: "Intermediate",
    category: "Investments",
    thumbnail: "/roadmap.png",
    description: "Master portfolio construction, asset allocation, and risk management strategies for optimal returns.",
    skills: ["Portfolio Theory", "Asset Allocation", "Risk Management"],
    certificateAvailable: true,
    isLocked: false,
    completedDate: null
  },
  {
    id: 7,
    title: "Blockchain & Cryptocurrency",
    instructor: "Kevin Zhang",
    progress: 10,
    totalLessons: 20,
    completedLessons: 2,
    duration: "14 hours",
    level: "Intermediate",
    category: "FinTech",
    thumbnail: "/roadmap.png",
    description: "Understand blockchain technology and cryptocurrency markets from technical and investment perspectives.",
    skills: ["Blockchain", "Crypto Trading", "Smart Contracts"],
    certificateAvailable: true,
    isLocked: false,
    completedDate: null
  },
];

function CourseFlipCard({ course }: { course: typeof roadmapCourses[0] | typeof otherCourses[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isRoadmapCourse = 'phase' in course;

  return (
    <div
      className={`group relative h-[380px] w-full perspective-1000 ${
        course.isLocked ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onMouseEnter={() => !course.isLocked && setIsFlipped(true)}
      onMouseLeave={() => !course.isLocked && setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 backface-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
          course.isLocked ? 'opacity-60' : ''
        }`}>
          <div className="flex h-full flex-col">
            {/* Locked Overlay */}
            {course.isLocked && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[24px] bg-slate-900/60 backdrop-blur-sm">
                <Lock className="h-12 w-12 text-white mb-3" />
                <p className="text-sm font-semibold text-white text-center px-6">
                  {'prerequisite' in course ? course.prerequisite : 'Complete previous courses to unlock'}
                </p>
              </div>
            )}

            {/* Course Image - Skeleton Loader Only */}
            <div className="relative h-40 overflow-hidden rounded-2xl">
              {/* Skeleton loader animation */}
              <div className="absolute inset-0 skeleton-loader" />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${
                isRoadmapCourse
                  ? 'bg-gradient-to-br from-[#0B5D4E]/30 to-[#1FA89A]/30'
                  : 'bg-gradient-to-br from-[#6D28D9]/30 to-[#A78BFA]/30'
              }`} />
              
              {course.progress === 100 && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-[#0B5D4E]">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </span>
                </div>
              )}
              
              <div className="absolute bottom-3 left-3 z-10 flex gap-2">
                <span className="inline-block rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-900">
                  {course.category}
                </span>
                {isRoadmapCourse && (
                  <span className="inline-block rounded-full bg-[#F5B52E]/90 px-2 py-1 text-xs font-medium text-white">
                    {course.phase}
                  </span>
                )}
              </div>
            </div>

            {/* Course Info */}
            <div className="mt-4 flex-1">
              <h3 className="line-clamp-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {course.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                by {course.instructor}
              </p>

              {/* Progress */}
              {!course.isLocked && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Progress</span>
                    <span className="font-semibold text-[#0B5D4E] dark:text-[#7EE7D5]">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className={`h-2 rounded-full progress-bar-animated ${
                        course.progress === 100
                          ? 'bg-[#0B5D4E] dark:bg-[#7EE7D5]'
                          : isRoadmapCourse
                            ? 'bg-[#1FA89A] progress-bar-shimmer'
                            : 'bg-[#6D28D9]'
                      }`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <BookOpen className="h-3 w-3" />
                  <span>{course.completedLessons}/{course.totalLessons}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Clock className="h-3 w-3" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Award className="h-3 w-3" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>

            {/* Continue/Locked Button */}
            {!course.isLocked ? (
              <button 
                onClick={() => window.location.href = `/learn/course/${course.id}`}
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
                  course.progress === 100
                    ? 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                    : isRoadmapCourse
                      ? 'bg-[#1FA89A] text-white hover:bg-[#1A9688]'
                      : 'bg-[#6D28D9] text-white hover:bg-[#5B21B6]'
                }`}
              >
                {course.progress === 100 ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    View Certificate
                  </>
                ) : (
                  <>
                    <PlayCircle className="h-4 w-4" />
                    {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  </>
                )}
              </button>
            ) : (
              <div className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                <Lock className="h-4 w-4" />
                Locked
              </div>
            )}
          </div>
        </div>

        {/* Back of card */}
        {!course.isLocked && (
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {course.title}
              </h3>
              
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                {course.description}
              </p>

              {/* Phase Badge for Roadmap Courses */}
              {isRoadmapCourse && (
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#FEF7E8] px-3 py-1 text-xs font-medium text-[#F5B52E] dark:bg-[#F5B52E]/20">
                    <Target className="h-3 w-3" />
                    Roadmap: {course.phase}
                  </span>
                </div>
              )}

              {/* Skills */}
              <div className="mt-4">
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                  What you'll learn:
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        isRoadmapCourse
                          ? 'bg-[#E5F7F6] text-[#1FA89A] dark:bg-[#1FA89A]/20 dark:text-[#7CC7A2]'
                          : 'bg-[#F3EBFF] text-[#6D28D9] dark:bg-[#6D28D9]/20 dark:text-[#A78BFA]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Status */}
              {course.certificateAvailable && (
                <div className={`mt-4 flex items-center gap-2 rounded-2xl px-3 py-2 ${
                  course.progress === 100
                    ? 'bg-[#E8F7F3] dark:bg-[#0B5D4E]/20'
                    : 'bg-[#F3EBFF] dark:bg-[#6D28D9]/20'
                }`}>
                  <CheckCircle2 className={`h-4 w-4 ${
                    course.progress === 100
                      ? 'text-[#0B5D4E] dark:text-[#7EE7D5]'
                      : 'text-[#6D28D9] dark:text-[#A78BFA]'
                  }`} />
                  <span className={`text-xs font-medium ${
                    course.progress === 100
                      ? 'text-[#0B5D4E] dark:text-[#7EE7D5]'
                      : 'text-[#6D28D9] dark:text-[#A78BFA]'
                  }`}>
                    {course.progress === 100 ? 'Certificate Earned' : 'Certificate Available'}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-auto space-y-2">
                <button 
                  onClick={() => window.location.href = `/learn/course/${course.id}`}
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white transition ${
                    course.progress === 100
                      ? 'bg-[#0B5D4E] hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900'
                      : isRoadmapCourse
                        ? 'bg-[#1FA89A] hover:bg-[#1A9688]'
                        : 'bg-[#6D28D9] hover:bg-[#5B21B6]'
                  }`}
                >
                  {course.progress === 100 ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      View Certificate
                    </>
                  ) : (
                    <>
                      <PlayCircle className="h-4 w-4" />
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </>
                  )}
                </button>
                <button className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750">
                  View Syllabus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MyCoursesPage() {
  const totalRoadmapCourses = roadmapCourses.length;
  const completedRoadmapCourses = roadmapCourses.filter(c => c.progress === 100).length;
  const inProgressRoadmapCourses = roadmapCourses.filter(c => c.progress > 0 && c.progress < 100).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          My Courses
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Track your learning progress across roadmap and additional courses
        </p>
      </div>

      {/* Roadmap Courses Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-[#1FA89A]" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Roadmap Courses
              </h2>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Courses designed for your Financial Analyst career path
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              {completedRoadmapCourses}/{totalRoadmapCourses} completed
            </span>
            <span className="text-slate-600 dark:text-slate-400">•</span>
            <span className="text-slate-600 dark:text-slate-400">
              {inProgressRoadmapCourses} in progress
            </span>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-medium text-slate-700 dark:text-slate-300">Overall Roadmap Progress</span>
            <span className="font-semibold text-[#1FA89A]">
              {Math.round((completedRoadmapCourses / totalRoadmapCourses) * 100)}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-3 rounded-full bg-[#1FA89A] progress-bar-animated"
              style={{ width: `${(completedRoadmapCourses / totalRoadmapCourses) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roadmapCourses.map((course) => (
            <CourseFlipCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Other Courses Section */}
      {otherCourses.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#6D28D9]" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Additional Certifications
                </h2>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Extra courses you've enrolled in for additional skills
              </p>
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {otherCourses.length} courses
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherCourses.map((course) => (
              <CourseFlipCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
