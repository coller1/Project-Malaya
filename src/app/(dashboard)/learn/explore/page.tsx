"use client";

import { useState } from "react";
import { BookOpen, Clock, Award, Star, Users, TrendingUp } from "lucide-react";

const availableCourses = [
  {
    id: 1,
    title: "Advanced Financial Modeling",
    instructor: "Robert Williams",
    rating: 4.8,
    students: 2340,
    duration: "15 hours",
    level: "Advanced",
    category: "Finance",
    price: "$99",
    thumbnail: "/roadmap.png",
    description: "Build sophisticated financial models for valuation, M&A, and investment analysis using industry best practices.",
    skills: ["DCF Valuation", "LBO Modeling", "M&A Analysis"],
    certificateIncluded: true,
    trending: true
  },
  {
    id: 2,
    title: "Data Visualization with PowerBI",
    instructor: "Jennifer Lee",
    rating: 4.9,
    students: 3120,
    duration: "10 hours",
    level: "Intermediate",
    category: "Data Analytics",
    price: "$79",
    thumbnail: "/roadmap.png",
    description: "Create interactive dashboards and reports to communicate data insights effectively using PowerBI.",
    skills: ["PowerBI Desktop", "DAX", "Dashboard Design"],
    certificateIncluded: true,
    trending: true
  },
  {
    id: 3,
    title: "Machine Learning for Finance",
    instructor: "Dr. Alex Kumar",
    rating: 4.7,
    students: 1890,
    duration: "20 hours",
    level: "Advanced",
    category: "AI & ML",
    price: "$149",
    thumbnail: "/roadmap.png",
    description: "Apply machine learning algorithms to financial forecasting, risk management, and trading strategies.",
    skills: ["Python ML", "Predictive Analytics", "Risk Modeling"],
    certificateIncluded: true,
    trending: false
  },
  {
    id: 4,
    title: "Business Intelligence Fundamentals",
    instructor: "Maria Garcia",
    rating: 4.6,
    students: 4230,
    duration: "8 hours",
    level: "Beginner",
    category: "Business Analytics",
    price: "$59",
    thumbnail: "/roadmap.png",
    description: "Learn the foundations of business intelligence and how to turn data into actionable insights.",
    skills: ["BI Concepts", "Data Warehousing", "Reporting"],
    certificateIncluded: true,
    trending: false
  },
  {
    id: 5,
    title: "Investment Portfolio Management",
    instructor: "Thomas Anderson",
    rating: 4.9,
    students: 2890,
    duration: "12 hours",
    level: "Intermediate",
    category: "Investments",
    price: "$89",
    thumbnail: "/roadmap.png",
    description: "Master portfolio construction, asset allocation, and risk management strategies for optimal returns.",
    skills: ["Portfolio Theory", "Asset Allocation", "Risk Management"],
    certificateIncluded: true,
    trending: true
  },
  {
    id: 6,
    title: "Blockchain & Cryptocurrency",
    instructor: "Kevin Zhang",
    rating: 4.5,
    students: 1560,
    duration: "14 hours",
    level: "Intermediate",
    category: "FinTech",
    price: "$95",
    thumbnail: "/roadmap.png",
    description: "Understand blockchain technology and cryptocurrency markets from technical and investment perspectives.",
    skills: ["Blockchain", "Crypto Trading", "Smart Contracts"],
    certificateIncluded: true,
    trending: false
  },
];

function CourseFlipCard({ course }: { course: typeof availableCourses[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[380px] w-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-full flex-col">
            {/* Course Image - Skeleton Loader Only */}
            <div className="relative h-40 overflow-hidden rounded-2xl">
              {/* Skeleton loader animation */}
              <div className="absolute inset-0 skeleton-loader" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/30 to-[#A78BFA]/30" />
              
              {course.trending && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F5B52E] px-2 py-1 text-xs font-semibold text-white">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 left-3 z-10">
                <span className="inline-block rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-900">
                  {course.category}
                </span>
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

              {/* Rating & Students */}
              <div className="mt-3 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1 text-[#F5B52E]">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Users className="h-3 w-3" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
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

            {/* Price & Enroll */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-[#0B5D4E] dark:text-[#7EE7D5]">
                {course.price}
              </span>
              <button className="rounded-2xl bg-[#0B5D4E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-full flex-col">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {course.title}
            </h3>
            
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-4">
              {course.description}
            </p>

            {/* Skills */}
            <div className="mt-4">
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                What you'll learn:
              </p>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F3EBFF] px-3 py-1 text-xs font-medium text-[#6D28D9] dark:bg-[#6D28D9]/20 dark:text-[#A78BFA]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Badge */}
            {course.certificateIncluded && (
              <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#E8F7F3] px-3 py-2 dark:bg-[#0B5D4E]/20">
                <Award className="h-4 w-4 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                <span className="text-xs font-medium text-[#0B5D4E] dark:text-[#7EE7D5]">
                  Certificate Included
                </span>
              </div>
            )}

            {/* Course Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-3 text-xs dark:bg-slate-800">
              <div>
                <p className="text-slate-500 dark:text-slate-400">Rating</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  {course.rating} ⭐
                </p>
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400">Students</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  {course.students.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex items-center gap-2">
              <span className="text-xl font-bold text-[#0B5D4E] dark:text-[#7EE7D5]">
                {course.price}
              </span>
              <button className="flex-1 rounded-2xl bg-[#0B5D4E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExploreCoursesPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Finance", "Data Analytics", "AI & ML", "Business Analytics", "Investments", "FinTech"];

  const filteredCourses = filter === "all" 
    ? availableCourses 
    : availableCourses.filter(course => course.category === filter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Explore Courses
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Discover {availableCourses.length} courses to advance your career
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === category
                ? "bg-[#0B5D4E] text-white dark:bg-[#7EE7D5] dark:text-slate-900"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {category === "all" ? "All Courses" : category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseFlipCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            No courses found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
