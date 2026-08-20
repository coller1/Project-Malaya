"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Award,
  Mail,
  Download,
  Calendar,
  ExternalLink,
  GraduationCap,
  FolderOpen,
  Star,
  CheckCircle2,
  Code,
  Wrench,
  TrendingUp,
} from "lucide-react";
import AnimatedBackground from "@/components/animated-background";

// Mock data - in real app, fetch based on candidateId
const candidatesData: any = {
  "1": {
    id: 1,
    name: "Maria Santos",
    careerGoal: "Financial Analyst",
    location: "New York, NY",
    experienceLevel: "Entry Level",
    email: "maria.santos@email.com",
    phone: "(555) 123-4567",
    availability: "Immediate",
    bio: "Recent graduate with strong foundation in financial analysis and modeling. Completed comprehensive roadmap with real-world projects and seeking opportunities to apply analytical skills in a dynamic financial environment.",
    skills: ["Excel", "Financial Modeling", "SQL", "Python", "Data Analysis", "PowerBI", "Valuation", "Financial Reporting"],
    stats: {
      completedCourses: 8,
      certificates: 3,
      portfolioProjects: 5,
      roadmapProgress: 92,
    },
    education: [
      {
        degree: "Bachelor of Science in Finance",
        school: "University of New York",
        year: "2023-2026",
        gpa: "3.8/4.0"
      }
    ],
    experience: [
      {
        title: "Financial Analyst Intern",
        company: "JPMorgan Chase",
        period: "Jun 2025 - Aug 2025",
        description: "Supported investment banking team with financial modeling, valuation analysis, and market research for M&A transactions.",
        achievements: [
          "Built DCF models for 5+ client projects",
          "Automated reporting processes saving 10 hours/week",
          "Presented findings to senior analysts"
        ]
      }
    ],
    projects: [
      {
        title: "KPI Dashboard for Small Business",
        description: "Built an interactive Excel dashboard monitoring monthly business performance including sales, inventory, and customer metrics.",
        skills: ["Excel", "Pivot Tables", "Data Visualization"],
        status: "Completed",
        score: 94
      },
      {
        title: "Investment Portfolio Analysis",
        description: "Analyzed portfolio risk and returns using historical data, implemented diversification strategies.",
        skills: ["Python", "Financial Analysis", "Statistics"],
        status: "Completed",
        score: 88
      },
      {
        title: "Aritzia Sales Performance Analysis",
        description: "Analyzed quarterly sales data and provided strategic recommendations for retail optimization.",
        skills: ["Excel", "Business Analysis", "PowerBI"],
        status: "Completed",
        score: 92
      }
    ],
    certificates: [
      {
        name: "Financial Modeling & Valuation",
        issuer: "MPATH Career Academy",
        date: "Jan 2026",
        credentialId: "MPATH-FM-2026-001"
      },
      {
        name: "Advanced Excel for Finance",
        issuer: "MPATH Career Academy",
        date: "Dec 2025",
        credentialId: "MPATH-EX-2025-089"
      },
      {
        name: "SQL for Data Analysis",
        issuer: "MPATH Career Academy",
        date: "Nov 2025",
        credentialId: "MPATH-SQL-2025-134"
      }
    ]
  },
  "2": {
    id: 2,
    name: "James Chen",
    careerGoal: "Software Engineer",
    location: "San Francisco, CA",
    experienceLevel: "Junior (1 year)",
    email: "james.chen@email.com",
    phone: "(555) 234-5678",
    availability: "2 Weeks",
    bio: "Full-stack developer with hands-on experience building web applications. Specialized in React and Node.js with strong problem-solving skills and passion for clean, maintainable code.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Git", "SQL", "TypeScript", "REST APIs", "MongoDB"],
    stats: {
      completedCourses: 12,
      certificates: 5,
      portfolioProjects: 8,
      roadmapProgress: 100,
    },
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        year: "2022-2026",
        gpa: "3.9/4.0"
      }
    ],
    experience: [
      {
        title: "Junior Software Engineer",
        company: "TechStart Inc",
        period: "Jul 2025 - Present",
        description: "Develop and maintain full-stack web applications using React and Node.js. Collaborate with design and product teams.",
        achievements: [
          "Built 3 major features serving 10k+ users",
          "Reduced page load time by 40%",
          "Mentored 2 junior developers"
        ]
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
        skills: ["React", "Node.js", "MongoDB"],
        status: "Completed",
        score: 96
      },
      {
        title: "Real-time Chat Application",
        description: "Built real-time messaging app with Socket.io, user presence, typing indicators, and message history.",
        skills: ["React", "Node.js", "Socket.io"],
        status: "Completed",
        score: 94
      }
    ],
    certificates: [
      {
        name: "Full-Stack Web Development",
        issuer: "MPATH Career Academy",
        date: "Feb 2026",
        credentialId: "MPATH-FS-2026-042"
      },
      {
        name: "React Advanced Patterns",
        issuer: "MPATH Career Academy",
        date: "Jan 2026",
        credentialId: "MPATH-RC-2026-018"
      }
    ]
  },
  "3": {
    id: 3,
    name: "Robert Williams",
    careerGoal: "Electrician",
    location: "Austin, TX",
    experienceLevel: "Apprentice (2 years)",
    email: "robert.williams@email.com",
    phone: "(555) 345-6789",
    availability: "1 Month",
    bio: "Certified electrician apprentice with 2 years hands-on experience in residential and commercial electrical work. Completed advanced electrical courses and safety certifications with focus on quality workmanship.",
    skills: ["Residential Wiring", "Commercial Electrical", "Blueprint Reading", "Safety Standards", "Troubleshooting", "NEC Code", "Conduit Bending", "Panel Installation"],
    stats: {
      completedCourses: 6,
      certificates: 4,
      portfolioProjects: 3,
      roadmapProgress: 78,
    },
    education: [
      {
        degree: "Electrical Apprenticeship Program",
        school: "Texas State Technical College",
        year: "2024-2026",
        gpa: "3.7/4.0"
      }
    ],
    experience: [
      {
        title: "Electrical Apprentice",
        company: "Bright Electrical Services",
        period: "Jan 2024 - Present",
        description: "Assist licensed electricians in residential and commercial projects, including installations, repairs, and maintenance.",
        achievements: [
          "Completed 50+ residential wiring projects",
          "Zero safety incidents in 2 years",
          "Earned OSHA 10-Hour certification"
        ]
      }
    ],
    projects: [
      {
        title: "Residential Rewiring Project",
        description: "Complete electrical rewiring of 3-bedroom home including new panel, circuits, outlets, and lighting fixtures.",
        skills: ["Residential Wiring", "Panel Installation", "Safety Standards"],
        status: "Completed",
        score: 90
      },
      {
        title: "Commercial Lighting Installation",
        description: "Installed LED lighting system in 5,000 sq ft commercial space with automated controls.",
        skills: ["Commercial Electrical", "Conduit Work", "Blueprint Reading"],
        status: "Completed",
        score: 92
      }
    ],
    certificates: [
      {
        name: "OSHA 10-Hour Safety Training",
        issuer: "OSHA",
        date: "Mar 2025",
        credentialId: "OSHA-10-TX-2025-4891"
      },
      {
        name: "NEC Code Certification",
        issuer: "MPATH Career Academy",
        date: "Feb 2026",
        credentialId: "MPATH-NEC-2026-003"
      },
      {
        name: "Residential Electrical Installation",
        issuer: "Texas State Technical College",
        date: "Jan 2025",
        credentialId: "TSTC-RE-2025-221"
      }
    ]
  }
};

export default function CandidateProfilePage({ params }: { params: Promise<{ candidateId: string }> }) {
  const { candidateId } = use(params);
  const candidate = candidatesData[candidateId] || candidatesData["1"];

  return (
    <>
      <AnimatedBackground />
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          href="/employers/candidates"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Candidates
        </Link>

        {/* Header Card */}
        <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Side - Profile Info */}
            <div className="flex gap-6">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1FA89A] to-[#0B5D4E] text-3xl font-bold text-white">
                {candidate.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {candidate.name}
                </h1>
                <p className="mt-1 text-lg font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
                  {candidate.careerGoal}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {candidate.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {candidate.experienceLevel}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Available: {candidate.availability}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Actions */}
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#0B5D4E] px-6 py-3 font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]">
                <Mail className="h-4 w-4" />
                Contact Candidate
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-750">
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-6 text-slate-600 dark:text-slate-400">
            {candidate.bio}
          </p>

          {/* Contact Info */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-medium text-slate-500 dark:text-slate-400">Email</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{candidate.email}</p>
            </div>
            <div>
              <p className="font-medium text-slate-500 dark:text-slate-400">Phone</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{candidate.phone}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[20px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E8F7F3] p-3 dark:bg-[#0B5D4E]/20">
                <GraduationCap className="h-6 w-6 text-[#0B5D4E] dark:text-[#1FA89A]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {candidate.stats.completedCourses}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Courses</p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#F3EBFF] p-3 dark:bg-[#6D28D9]/20">
                <Award className="h-6 w-6 text-[#6D28D9]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {candidate.stats.certificates}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Certificates</p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#E5F7F6] p-3 dark:bg-[#1FA89A]/20">
                <FolderOpen className="h-6 w-6 text-[#1FA89A]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {candidate.stats.portfolioProjects}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects</p>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#FEF7E8] p-3 dark:bg-[#F5B52E]/20">
                <TrendingUp className="h-6 w-6 text-[#F5B52E]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {candidate.stats.roadmapProgress}%
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Progress</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Experience */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Experience
                </h2>
              </div>
              <div className="space-y-6">
                {candidate.experience.map((exp: any, index: number) => (
                  <div key={index} className="border-l-2 border-[#0B5D4E] pl-4 dark:border-[#1FA89A]">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
                      {exp.company}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                      {exp.description}
                    </p>
                    {exp.achievements && (
                      <ul className="mt-3 space-y-1">
                        {exp.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#0B5D4E] dark:text-[#1FA89A]" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Projects */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Portfolio Projects
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Showcase of completed work
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {candidate.projects.length} Projects
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {candidate.projects.map((project: any, index: number) => (
                  <div
                    key={index}
                    className="group relative rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
                  >
                    {project.score >= 90 && (
                      <div className="absolute -right-2 -top-2">
                        <div className="flex items-center gap-1 rounded-full bg-[#F5B52E] px-2 py-1 text-xs font-semibold text-white">
                          <Star className="h-3 w-3 fill-white" />
                          Featured
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {project.status}
                      </span>
                      {project.score && (
                        <div className="rounded-lg bg-[#0B5D4E] px-3 py-1 dark:bg-[#7EE7D5]">
                          <p className="text-sm font-bold text-white dark:text-slate-900">
                            {project.score}%
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Education
                </h2>
              </div>
              <div className="space-y-4">
                {candidate.education.map((edu: any, index: number) => (
                  <div key={index} className="border-l-2 border-[#6D28D9] pl-4">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#6D28D9]">
                      {edu.school}
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <span>{edu.year}</span>
                      <span>•</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Skills
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Certificates
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {candidate.certificates.length}
                </span>
              </div>
              <div className="space-y-3">
                {candidate.certificates.map((cert: any, index: number) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 transition-all hover:shadow-lg dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-[#0B5D4E] p-2 dark:bg-[#0B5D4E]/30">
                        <Award className="h-5 w-5 text-white dark:text-[#1FA89A]" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {cert.name}
                        </h3>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                          {cert.issuer} • {cert.date}
                        </p>
                        
                        <p className="mt-2 text-xs font-mono text-slate-400 dark:text-slate-500">
                          {cert.credentialId}
                        </p>
                      </div>

                      <div className="flex gap-1">
                        <button className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                          <Download className="h-3.5 w-3.5" />
                        </button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap Progress */}
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  MPATH Progress
                </h2>
              </div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Career Roadmap</span>
                <span className="font-semibold text-[#0B5D4E] dark:text-[#1FA89A]">
                  {candidate.stats.roadmapProgress}%
                </span>
              </div>
              <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="h-3 rounded-full bg-[#0B5D4E] dark:bg-[#1FA89A]"
                  style={{ width: `${candidate.stats.roadmapProgress}%` }}
                />
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                This candidate has completed {candidate.stats.roadmapProgress}% of their career roadmap,
                demonstrating commitment to continuous learning and skill development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
