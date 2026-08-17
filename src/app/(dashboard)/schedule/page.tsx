"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  Briefcase,
  AlertCircle,
  Bookmark,
  MapPin,
  Video,
  Calendar as CalendarIcon,
} from "lucide-react";

type ActivityType = "course" | "event" | "deadline" | "opportunity";

interface ScheduleItem {
  id: number;
  title: string;
  type: ActivityType;
  date: string;
  time?: string;
  location?: string;
  isVirtual?: boolean;
  description: string;
  courseProgress?: number;
}

interface SavedOpportunity {
  id: number;
  title: string;
  company: string;
  deadline: string;
  location: string;
}

const activities: ScheduleItem[] = [
  {
    id: 1,
    title: "Excel for Financial Modeling - Module 3",
    type: "course",
    date: "2026-08-17",
    time: "10:00 AM",
    location: "Online Course",
    isVirtual: true,
    description: "Complete lessons 24-28",
    courseProgress: 75
  },
  {
    id: 2,
    title: "Breaking into Investment Banking",
    type: "event",
    date: "2026-08-17",
    time: "2:00 PM",
    location: "Zoom",
    isVirtual: true,
    description: "Goldman Sachs webinar"
  },
  {
    id: 3,
    title: "Python for Data Analysis - Module 1",
    type: "course",
    date: "2026-08-18",
    time: "3:00 PM",
    location: "Online Course",
    isVirtual: true,
    description: "Start Python basics",
    courseProgress: 0
  },
  {
    id: 4,
    title: "Finance Career Fair 2026",
    type: "event",
    date: "2026-08-19",
    time: "10:00 AM",
    location: "NYC Convention Center",
    isVirtual: false,
    description: "Meet 50+ institutions"
  },
  {
    id: 5,
    title: "Coffee Chat with BlackRock Analyst",
    type: "event",
    date: "2026-08-20",
    time: "11:00 AM",
    location: "Google Meet",
    isVirtual: true,
    description: "Q&A with Sarah Martinez"
  },
];

const deadlines: ScheduleItem[] = [
  {
    id: 101,
    title: "Submit Project Proposal",
    type: "deadline",
    date: "2026-08-17",
    time: "11:59 PM",
    description: "Financial Modeling final project proposal"
  },
  {
    id: 102,
    title: "Complete Module 2 Assessment",
    type: "deadline",
    date: "2026-08-21",
    time: "11:59 PM",
    description: "Excel course module 2 final test"
  },
  {
    id: 103,
    title: "Submit Resume for Review",
    type: "deadline",
    date: "2026-08-28",
    time: "5:00 PM",
    description: "Career center resume feedback"
  },
];

const savedOpportunities: SavedOpportunity[] = [
  {
    id: 1,
    title: "Financial Analyst Intern",
    company: "JPMorgan Chase",
    deadline: "2026-08-30",
    location: "New York, NY"
  },
  {
    id: 2,
    title: "Data Analytics Intern",
    company: "Goldman Sachs",
    deadline: "2026-09-15",
    location: "Remote"
  },
  {
    id: 3,
    title: "Global Trading Competition",
    company: "Wharton School",
    deadline: "2026-09-01",
    location: "Online"
  },
];

// Simple calendar generator
function generateCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days = [];
  // Empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  return days;
}

export default function SchedulePage() {
  const [currentDate] = useState(new Date(2026, 7, 17)); // August 17, 2026
  const [selectedView, setSelectedView] = useState<"upcoming" | "saved">("upcoming");

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarDays = generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

  // Check if a date has activities
  const hasActivity = (day: number | null) => {
    if (!day) return false;
    const dateStr = `2026-08-${day.toString().padStart(2, '0')}`;
    return activities.some(a => a.date === dateStr) || deadlines.some(d => d.date === dateStr);
  };

  const isToday = (day: number | null) => {
    return day === 17; // August 17
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Schedule
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Your courses, events, deadlines, and saved opportunities
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <ChevronLeft className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </button>
                <button className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <ChevronRight className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Day names */}
              {dayNames.map(day => (
                <div key={day} className="py-2 text-center text-xs font-medium text-slate-600 dark:text-slate-400">
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`relative aspect-square p-1 ${
                    day ? 'cursor-pointer' : ''
                  }`}
                >
                  {day && (
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-lg text-sm transition ${
                        isToday(day)
                          ? 'bg-[#0B5D4E] font-bold text-white dark:bg-[#7EE7D5] dark:text-slate-900'
                          : hasActivity(day)
                            ? 'bg-slate-100 font-medium text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100'
                            : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {day}
                      {hasActivity(day) && !isToday(day) && (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#0B5D4E] dark:bg-[#7EE7D5]" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#0B5D4E] dark:bg-[#7EE7D5]" />
                <span className="text-slate-600 dark:text-slate-400">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-[#0B5D4E] dark:bg-[#7EE7D5]" />
                <span className="text-slate-600 dark:text-slate-400">Has Activity</span>
              </div>
            </div>
          </div>

          {/* Deadlines Section */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-[#F5B52E]" />
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                Upcoming Deadlines
              </h2>
            </div>
            <div className="space-y-3">
              {deadlines.map(deadline => (
                <div key={deadline.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {deadline.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {deadline.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>
                      {new Date(deadline.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {deadline.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="mb-4 flex gap-2">
            <button
              onClick={() => setSelectedView("upcoming")}
              className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                selectedView === "upcoming"
                  ? "bg-[#0B5D4E] text-white dark:bg-[#7EE7D5] dark:text-slate-900"
                  : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              Upcoming Activities
            </button>
            <button
              onClick={() => setSelectedView("saved")}
              className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                selectedView === "saved"
                  ? "bg-[#0B5D4E] text-white dark:bg-[#7EE7D5] dark:text-slate-900"
                  : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              Saved Opportunities
            </button>
          </div>

          {/* Upcoming Activities */}
          {selectedView === "upcoming" && (
            <div className="space-y-4">
              {activities.map(activity => (
                <div
                  key={activity.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
                      {activity.type === "course" ? (
                        <BookOpen className="h-4 w-4 text-[#1FA89A]" />
                      ) : (
                        <CalendarIcon className="h-4 w-4 text-[#6D28D9]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                            {activity.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            {activity.description}
                          </p>
                        </div>
                        <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                          {activity.type === "course" ? "Course" : "Event"}
                        </span>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          <span>
                            {new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        {activity.time && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{activity.time}</span>
                          </div>
                        )}
                        {activity.location && (
                          <div className="flex items-center gap-1">
                            {activity.isVirtual ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                            <span>{activity.location}</span>
                          </div>
                        )}
                      </div>

                      {activity.courseProgress !== undefined && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-600 dark:text-slate-400">Progress</span>
                            <span className="font-semibold text-[#0B5D4E] dark:text-[#7EE7D5]">
                              {activity.courseProgress}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <div
                              className="h-2 rounded-full bg-[#1FA89A]"
                              style={{ width: `${activity.courseProgress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Saved Opportunities */}
          {selectedView === "saved" && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-[#0B5D4E]/20 bg-[#E8F7F3] p-4 dark:border-[#7EE7D5]/20 dark:bg-[#0B5D4E]/10">
                <div className="flex items-start gap-3">
                  <Bookmark className="h-5 w-5 flex-shrink-0 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <p className="font-medium">Opportunities you've bookmarked</p>
                    <p className="mt-1 text-xs">These are saved from the Opportunities page so you don't miss application deadlines.</p>
                  </div>
                </div>
              </div>

              {savedOpportunities.map(opportunity => (
                <div
                  key={opportunity.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
                      <Briefcase className="h-4 w-4 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                            {opportunity.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            {opportunity.company}
                          </p>
                        </div>
                        <Bookmark className="h-4 w-4 flex-shrink-0 fill-[#F5B52E] text-[#F5B52E]" />
                      </div>
                      
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 text-[#F5B52E]" />
                          <span className="font-medium text-[#F5B52E]">
                            Deadline: {new Date(opportunity.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{opportunity.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
