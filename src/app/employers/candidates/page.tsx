"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Award,
  Star,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Mail,
  Download,
  ChevronDown,
} from "lucide-react";

type CandidateType = {
  id: number;
  name: string;
  careerGoal: string;
  location: string;
  experience: string;
  skills: string[];
  completedCourses: number;
  certificates: number;
  portfolioProjects: number;
  roadmapProgress: number;
  availability: "Immediate" | "2 Weeks" | "1 Month";
  avatar: string;
  bio: string;
  topSkills: string[];
};

const candidates: CandidateType[] = [
  {
    id: 1,
    name: "Maria Santos",
    careerGoal: "Financial Analyst",
    location: "New York, NY",
    experience: "Entry Level",
    skills: ["Excel", "Financial Modeling", "SQL", "Python", "Data Analysis"],
    completedCourses: 8,
    certificates: 3,
    portfolioProjects: 5,
    roadmapProgress: 92,
    availability: "Immediate",
    avatar: "",
    bio: "Recent graduate with strong foundation in financial analysis and modeling. Completed comprehensive roadmap with real-world projects.",
    topSkills: ["Financial Modeling", "Excel", "SQL"]
  },
  {
    id: 2,
    name: "James Chen",
    careerGoal: "Software Engineer",
    location: "San Francisco, CA",
    experience: "Junior (1 year)",
    skills: ["JavaScript", "React", "Node.js", "Python", "Git", "SQL"],
    completedCourses: 12,
    certificates: 5,
    portfolioProjects: 8,
    roadmapProgress: 100,
    availability: "2 Weeks",
    avatar: "",
    bio: "Full-stack developer with hands-on experience building web applications. Specialized in React and Node.js with strong problem-solving skills.",
    topSkills: ["React", "Node.js", "JavaScript"]
  },
  {
    id: 3,
    name: "Robert Williams",
    careerGoal: "Electrician",
    location: "Austin, TX",
    experience: "Apprentice (2 years)",
    skills: ["Residential Wiring", "Commercial Electrical", "Blueprint Reading", "Safety Standards", "Troubleshooting"],
    completedCourses: 6,
    certificates: 4,
    portfolioProjects: 3,
    roadmapProgress: 78,
    availability: "1 Month",
    avatar: "",
    bio: "Certified electrician apprentice with 2 years hands-on experience. Completed advanced electrical courses and safety certifications.",
    topSkills: ["Residential Wiring", "Commercial Electrical", "Safety Standards"]
  },
  {
    id: 4,
    name: "Sarah Johnson",
    careerGoal: "Data Analyst",
    location: "Remote",
    experience: "Mid-Level (3 years)",
    skills: ["Python", "SQL", "Tableau", "PowerBI", "Statistics", "Machine Learning"],
    completedCourses: 15,
    certificates: 7,
    portfolioProjects: 12,
    roadmapProgress: 100,
    availability: "Immediate",
    avatar: "",
    bio: "Experienced data analyst with expertise in business intelligence and predictive analytics. Strong track record of data-driven decision making.",
    topSkills: ["Python", "SQL", "Tableau"]
  },
  {
    id: 5,
    name: "Michael Torres",
    careerGoal: "Welder",
    location: "Houston, TX",
    experience: "Journeyman (5 years)",
    skills: ["MIG Welding", "TIG Welding", "Stick Welding", "Pipe Welding", "Blueprint Reading", "Fabrication"],
    completedCourses: 5,
    certificates: 6,
    portfolioProjects: 4,
    roadmapProgress: 88,
    availability: "2 Weeks",
    avatar: "",
    bio: "Certified journeyman welder with 5 years experience in structural and pipe welding. Multiple certifications in advanced welding techniques.",
    topSkills: ["MIG Welding", "TIG Welding", "Pipe Welding"]
  },
  {
    id: 6,
    name: "Emily Davis",
    careerGoal: "UX Designer",
    location: "Seattle, WA",
    experience: "Entry Level",
    skills: ["Figma", "User Research", "Prototyping", "Wireframing", "Adobe XD", "Design Systems"],
    completedCourses: 10,
    certificates: 4,
    portfolioProjects: 9,
    roadmapProgress: 95,
    availability: "Immediate",
    avatar: "",
    bio: "Creative UX designer with strong user-centered design approach. Portfolio includes mobile and web application designs with user testing.",
    topSkills: ["Figma", "User Research", "Prototyping"]
  },
  {
    id: 7,
    name: "David Martinez",
    careerGoal: "HVAC Technician",
    location: "Phoenix, AZ",
    experience: "Entry Level",
    skills: ["HVAC Installation", "Maintenance", "Refrigeration", "EPA Certified", "Troubleshooting", "Customer Service"],
    completedCourses: 7,
    certificates: 5,
    portfolioProjects: 2,
    roadmapProgress: 82,
    availability: "Immediate",
    avatar: "",
    bio: "EPA-certified HVAC technician with comprehensive training in installation and maintenance. Strong technical and customer service skills.",
    topSkills: ["HVAC Installation", "Maintenance", "EPA Certified"]
  },
  {
    id: 8,
    name: "Jennifer Lee",
    careerGoal: "Marketing Specialist",
    location: "Los Angeles, CA",
    experience: "Junior (1 year)",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Social Media", "Google Analytics", "Email Marketing"],
    completedCourses: 9,
    certificates: 4,
    portfolioProjects: 7,
    roadmapProgress: 90,
    availability: "2 Weeks",
    avatar: "",
    bio: "Results-driven marketing specialist with expertise in digital campaigns and content strategy. Proven track record in increasing engagement.",
    topSkills: ["Digital Marketing", "SEO", "Content Strategy"]
  },
];

const careerFilters = [
  "All Careers",
  "Financial Analyst",
  "Software Engineer",
  "Data Analyst",
  "UX Designer",
  "Marketing Specialist",
  "Electrician",
  "Welder",
  "HVAC Technician",
  "Plumber",
];

const experienceLevels = ["All Levels", "Entry Level", "Junior (1-2 years)", "Mid-Level (3-5 years)", "Senior (5+ years)"];
const availabilityOptions = ["All", "Immediate", "2 Weeks", "1 Month"];

function CandidateCard({ candidate }: { candidate: CandidateType }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-[#0B5D4E] to-[#1FA89A]" />

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {candidate.name}
              </h3>
              <p className="mt-1 font-medium text-[#0B5D4E] dark:text-[#7EE7D5]">
                {candidate.careerGoal}
              </p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                candidate.availability === "Immediate"
                  ? "bg-[#E8F7F3] text-[#0B5D4E] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5]"
                  : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              }`}
            >
              {candidate.availability}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{candidate.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{candidate.experience}</span>
            </div>
          </div>

          <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
            {candidate.bio}
          </p>

          {/* Top Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {candidate.topSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#E8F7F3] px-3 py-1 text-xs font-medium text-[#0B5D4E] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5]"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-4 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/60">
            <div className="text-center">
              <p className="text-xs text-slate-600 dark:text-slate-400">Courses</p>
              <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                {candidate.completedCourses}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 dark:text-slate-400">Certificates</p>
              <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                {candidate.certificates}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 dark:text-slate-400">Projects</p>
              <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                {candidate.portfolioProjects}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 dark:text-slate-400">Progress</p>
              <p className="mt-1 text-lg font-bold text-[#0B5D4E] dark:text-[#7EE7D5]">
                {candidate.roadmapProgress}%
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-2">
            <Link 
              href={`/employers/candidates/${candidate.id}`}
              className="flex-1 rounded-2xl bg-[#0B5D4E] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
            >
              View Full Profile
            </Link>
            <button className="rounded-2xl border border-slate-200 bg-white p-2 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750">
              <Mail className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            </button>
            <button className="rounded-2xl border border-slate-200 bg-white p-2 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750">
              <Download className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCareer, setSelectedCareer] = useState("All Careers");
  const [selectedExperience, setSelectedExperience] = useState("All Levels");
  const [selectedAvailability, setSelectedAvailability] = useState("All");

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.careerGoal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCareer =
      selectedCareer === "All Careers" || candidate.careerGoal === selectedCareer;

    const matchesExperience =
      selectedExperience === "All Levels" || candidate.experience.includes(selectedExperience.split(" ")[0]);

    const matchesAvailability =
      selectedAvailability === "All" || candidate.availability === selectedAvailability;

    return matchesSearch && matchesCareer && matchesExperience && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/employers" className="flex items-center gap-2">
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
              href="/employers"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              Back to Home
            </Link>
            <button className="rounded-2xl bg-[#0B5D4E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]">
              Post a Job
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Find Candidates
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Browse {candidates.length} verified, job-ready candidates from MPATH
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, career goal, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>

          {/* Filters */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Career Path
              </label>
              <select
                value={selectedCareer}
                onChange={(e) => setSelectedCareer(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              >
                {careerFilters.map((career) => (
                  <option key={career} value={career}>
                    {career}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Experience Level
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Availability
              </label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              >
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Showing {filteredCandidates.length} candidate{filteredCandidates.length !== 1 ? "s" : ""}
          </p>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            <Filter className="h-4 w-4" />
            More Filters
          </button>
        </div>

        {/* Candidates Grid */}
        <div className="space-y-4">
          {filteredCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCandidates.length === 0 && (
          <div className="py-12 text-center">
            <Search className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600" />
            <p className="mt-4 text-slate-500 dark:text-slate-400">
              No candidates match your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
