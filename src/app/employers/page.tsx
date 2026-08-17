"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Building2,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

const stats = [
  { label: "Active Learners", value: "10,000+", icon: Users },
  { label: "Skills Mastered", value: "150+", icon: Award },
  { label: "Career Paths", value: "18", icon: Target },
  { label: "Job Ready Rate", value: "94%", icon: TrendingUp },
];

const careerPaths = [
  "Financial Analyst",
  "Software Engineer",
  "Data Analyst",
  "Electrician",
  "Welder",
  "HVAC Technician",
  "Business Analyst",
  "UX Designer",
  "Marketing Specialist",
  "Plumber",
  "Construction Manager",
  "Cybersecurity Analyst",
];

const benefits = [
  {
    icon: Target,
    title: "Pre-Screened Candidates",
    description: "All MPATH learners complete verified assessments and real-world projects before appearing in the talent pool."
  },
  {
    icon: Award,
    title: "Skills-Based Matching",
    description: "Find candidates based on actual skills mastered, not just resumes. See their portfolios, certificates, and project work."
  },
  {
    icon: TrendingUp,
    title: "Career-Ready Talent",
    description: "Our learners complete structured roadmaps with hands-on experience, making them ready to contribute from day one."
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description: "Access professionals across 18 career paths, from tech and finance to skilled trades like welding and electrical work."
  },
];

const testimonials = [
  {
    company: "TechCorp Solutions",
    logo: "/MPATH LOGO.png",
    quote: "We hired 3 software engineers from MPATH last year. Their hands-on training meant they were productive immediately.",
    author: "Sarah Chen",
    role: "Head of Engineering",
    location: "San Francisco, CA"
  },
  {
    company: "BuildRight Construction",
    logo: "/MPATH LOGO.png",
    quote: "Finding skilled electricians and welders used to take months. Through MPATH, we connected with certified candidates in weeks.",
    author: "Michael Torres",
    role: "Operations Director",
    location: "Austin, TX"
  },
  {
    company: "Global Finance Group",
    logo: "/MPATH LOGO.png",
    quote: "MPATH graduates understand real-world financial modeling. The quality of talent is exceptional for entry-level positions.",
    author: "Jennifer Park",
    role: "Talent Acquisition Lead",
    location: "New York, NY"
  },
];

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header/Nav */}
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/MPATH LOGO.png"
              alt="MPath logo"
              width={150}
              height={50}
              className="block h-auto w-32 object-contain dark:hidden"
            />
            <Image
              src="/DARKMODE.png"
              alt="MPath logo dark"
              width={150}
              height={50}
              className="hidden h-auto w-32 object-contain dark:block"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              Student Login
            </Link>
            <Link
              href="/register"
              className="rounded-2xl bg-[#0B5D4E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B5D4E] to-[#1FA89A] py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/roadmap.png')] bg-cover bg-center" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Hire Job-Ready Talent from MPATH
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              Connect with 10,000+ skilled learners across tech, finance, and skilled trades who have completed real-world projects and verified assessments.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="/employers/candidates"
                className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#0B5D4E] transition hover:bg-slate-50"
              >
                Find Candidates
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="rounded-2xl border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
                Request Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <Icon className="h-8 w-8 text-white" />
                  <p className="mt-4 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Access Talent Across 18 Career Paths
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              From software engineers to skilled trades, find the right candidates for your needs
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {careerPaths.map((path) => (
              <div
                key={path}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {path}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Why Hire from MPATH?
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              We ensure every candidate is vetted, skilled, and ready to contribute
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F7F3] dark:bg-[#0B5D4E]/20">
                    <Icon className="h-8 w-8 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              Find and hire qualified candidates in three simple steps
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B5D4E] text-xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Post Your Job
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Create a job posting with required skills, experience level, and location. We'll match it with relevant MPATH learners.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1FA89A] text-xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Review Candidates
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Browse candidate profiles with portfolios, completed projects, certifications, and verified skill assessments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6D28D9] text-xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                Hire with Confidence
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Connect directly with candidates, schedule interviews, and hire job-ready professionals who fit your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Trusted by Leading Companies
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              See what employers are saying about hiring from MPATH
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/60"
              >
                <div className="flex items-center gap-1 text-[#F5B52E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-700 dark:text-slate-300">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Building2 className="h-3 w-3" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0B5D4E] to-[#1FA89A] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Find Your Next Hire?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join hundreds of companies hiring skilled, job-ready talent through MPATH
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#0B5D4E] transition hover:bg-slate-50">
              Post a Job Now
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="rounded-2xl border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 MPATH. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
