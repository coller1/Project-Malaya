"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Briefcase,
  GraduationCap,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Bell,
  BellOff,
  User,
} from "lucide-react";

type EventType = "webinar" | "workshop" | "career-fair" | "networking" | "seminar" | "meetup";
type EventStatus = "upcoming" | "today" | "this-week";

interface Event {
  id: number;
  title: string;
  type: EventType;
  date: string;
  time: string;
  duration: string;
  location: string;
  isVirtual: boolean;
  host: string;
  attendees: number;
  maxAttendees?: number;
  description: string;
  tags: string[];
  status: EventStatus;
  registrationUrl: string;
}

const events: Event[] = [
  // Today's Events
  {
    id: 1,
    title: "Breaking into Investment Banking",
    type: "webinar",
    date: "Aug 17, 2026",
    time: "2:00 PM",
    duration: "1 hour",
    location: "Zoom",
    isVirtual: true,
    host: "Goldman Sachs Recruiters",
    attendees: 234,
    maxAttendees: 500,
    description: "Learn insider tips on landing your first investment banking role from Goldman Sachs recruiters.",
    tags: ["Career", "Finance", "IB"],
    status: "today",
    registrationUrl: "#"
  },
  {
    id: 2,
    title: "Financial Modeling Bootcamp",
    type: "workshop",
    date: "Aug 17, 2026",
    time: "4:00 PM",
    duration: "3 hours",
    location: "Online Workshop",
    isVirtual: true,
    host: "Wall Street Prep",
    attendees: 145,
    maxAttendees: 200,
    description: "Hands-on workshop covering advanced Excel modeling techniques used in M&A and valuation.",
    tags: ["Excel", "Modeling", "Technical"],
    status: "today",
    registrationUrl: "#"
  },

  // This Week
  {
    id: 3,
    title: "Finance Career Fair 2026",
    type: "career-fair",
    date: "Aug 19, 2026",
    time: "10:00 AM",
    duration: "4 hours",
    location: "New York Convention Center",
    isVirtual: false,
    host: "NYC Finance Alliance",
    attendees: 890,
    maxAttendees: 2000,
    description: "Meet with 50+ top financial institutions including JPMorgan, Morgan Stanley, Citi, and more.",
    tags: ["Networking", "Jobs", "In-Person"],
    status: "this-week",
    registrationUrl: "#"
  },
  {
    id: 4,
    title: "Coffee Chat: Life as a Financial Analyst",
    type: "networking",
    date: "Aug 20, 2026",
    time: "11:00 AM",
    duration: "45 mins",
    location: "Google Meet",
    isVirtual: true,
    host: "Sarah Martinez, CFA",
    attendees: 28,
    maxAttendees: 30,
    description: "Informal Q&A session with a senior financial analyst from BlackRock. Ask anything!",
    tags: ["Mentorship", "Q&A", "Casual"],
    status: "this-week",
    registrationUrl: "#"
  },
  {
    id: 5,
    title: "Python for Finance Masterclass",
    type: "seminar",
    date: "Aug 21, 2026",
    time: "6:00 PM",
    duration: "2 hours",
    location: "Harvard Business School",
    isVirtual: false,
    host: "Dr. Michael Chen",
    attendees: 67,
    maxAttendees: 100,
    description: "Learn how to use Python for financial analysis, data visualization, and automated reporting.",
    tags: ["Python", "Data Analytics", "Technical"],
    status: "this-week",
    registrationUrl: "#"
  },

  // Upcoming
  {
    id: 6,
    title: "Women in Finance Networking Night",
    type: "meetup",
    date: "Aug 25, 2026",
    time: "7:00 PM",
    duration: "2 hours",
    location: "Manhattan Finance Club",
    isVirtual: false,
    host: "Women in Finance Association",
    attendees: 156,
    maxAttendees: 200,
    description: "Connect with female finance professionals and students. Includes panel discussion and networking.",
    tags: ["Networking", "Diversity", "Panel"],
    status: "upcoming",
    registrationUrl: "#"
  },
  {
    id: 7,
    title: "AI & Machine Learning in Trading",
    type: "webinar",
    date: "Aug 26, 2026",
    time: "3:00 PM",
    duration: "90 mins",
    location: "Microsoft Teams",
    isVirtual: true,
    host: "Citadel Securities",
    attendees: 412,
    maxAttendees: 1000,
    description: "Explore how AI and ML are transforming algorithmic trading and quantitative finance.",
    tags: ["AI", "Trading", "Technology"],
    status: "upcoming",
    registrationUrl: "#"
  },
  {
    id: 8,
    title: "Excel Power User Workshop",
    type: "workshop",
    date: "Aug 28, 2026",
    time: "1:00 PM",
    duration: "3 hours",
    location: "Online Workshop",
    isVirtual: true,
    host: "Financial Modeling Institute",
    attendees: 189,
    maxAttendees: 300,
    description: "Master advanced Excel functions, pivot tables, macros, and Power Query for financial analysis.",
    tags: ["Excel", "Skills", "Hands-on"],
    status: "upcoming",
    registrationUrl: "#"
  },
  {
    id: 9,
    title: "Mock Interview Practice Session",
    type: "workshop",
    date: "Aug 30, 2026",
    time: "5:00 PM",
    duration: "2 hours",
    location: "Zoom Breakout Rooms",
    isVirtual: true,
    host: "Career Development Center",
    attendees: 45,
    maxAttendees: 60,
    description: "Practice technical and behavioral interviews with peers and get feedback from career coaches.",
    tags: ["Interview Prep", "Practice", "Feedback"],
    status: "upcoming",
    registrationUrl: "#"
  },
];

const eventTypeConfig = {
  webinar: { icon: Video, label: "Webinar" },
  workshop: { icon: BookOpen, label: "Workshop" },
  "career-fair": { icon: Briefcase, label: "Career Fair" },
  networking: { icon: Users, label: "Networking" },
  seminar: { icon: GraduationCap, label: "Seminar" },
  meetup: { icon: User, label: "Meetup" },
};

function EventCard({ event }: { event: Event }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const config = eventTypeConfig[event.type];
  const Icon = config.icon;
  const spotsLeft = event.maxAttendees ? event.maxAttendees - event.attendees : null;

  return (
    <div className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Type Badge & Status */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
          <Icon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
          <span className="text-xs font-semibold uppercase text-slate-600 dark:text-slate-400">
            {config.label}
          </span>
        </div>
        
        {event.status === "today" && (
          <span className="rounded-full bg-[#F5B52E] px-3 py-1 text-xs font-semibold text-white">
            Today
          </span>
        )}
      </div>

      {/* Event Title & Host */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {event.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Hosted by {event.host}
        </p>
      </div>

      {/* Event Details */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Calendar className="h-4 w-4" />
          <span>{event.date} at {event.time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Clock className="h-4 w-4" />
          <span>{event.duration}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          {event.isVirtual ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
          <span>{event.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Users className="h-4 w-4" />
          <span>
            {event.attendees} registered
            {spotsLeft && spotsLeft > 0 && spotsLeft < 50 && (
              <span className="ml-1 text-[#F5B52E]">• {spotsLeft} spots left</span>
            )}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
        {event.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-2">
        <button
          onClick={() => setIsRegistered(!isRegistered)}
          className={`flex-1 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
            isRegistered
              ? "border-2 border-[#0B5D4E] bg-transparent text-[#0B5D4E] hover:bg-[#0B5D4E]/5 dark:border-[#7EE7D5] dark:text-[#7EE7D5]"
              : "bg-[#0B5D4E] text-white hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
          }`}
        >
          {isRegistered ? (
            <span className="flex items-center justify-center gap-2">
              <BellOff className="h-4 w-4" />
              Registered
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Bell className="h-4 w-4" />
              Register
            </span>
          )}
        </button>
        <button className="rounded-2xl border border-slate-200 bg-white p-2.5 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750">
          <ExternalLink className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </button>
      </div>
    </div>
  );
}

export default function UpcomingEventsPage() {
  const [selectedFilter, setSelectedFilter] = useState<EventStatus | "all">("all");

  const filteredEvents = selectedFilter === "all" 
    ? events 
    : events.filter(event => event.status === selectedFilter);

  const todayEvents = events.filter(e => e.status === "today");
  const thisWeekEvents = events.filter(e => e.status === "this-week");
  const upcomingEvents = events.filter(e => e.status === "upcoming");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Upcoming Events
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Stay connected with webinars, workshops, and networking opportunities
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: "All Events", value: "all" },
          { label: "Today", value: "today" },
          { label: "This Week", value: "this-week" },
          { label: "Upcoming", value: "upcoming" },
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value as any)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedFilter === filter.value
                ? "bg-[#0B5D4E] text-white dark:bg-[#7EE7D5] dark:text-slate-900"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="py-12 text-center">
          <Calendar className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            No events found for this filter.
          </p>
          <button
            onClick={() => setSelectedFilter("all")}
            className="mt-4 text-sm font-medium text-[#0B5D4E] hover:underline dark:text-[#7EE7D5]"
          >
            View all events
          </button>
        </div>
      )}
    </div>
  );
}
