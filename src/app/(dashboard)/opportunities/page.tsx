"use client";

import { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Video, 
  Trophy, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building2, 
  Calendar,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Filter,
  TrendingUp
} from "lucide-react";

type OpportunityType = "internship" | "job" | "seminar" | "webinar" | "competition" | "all";

interface Opportunity {
  id: number;
  title: string;
  company: string;
  type: OpportunityType;
  location: string;
  salary?: string;
  duration?: string;
  date?: string;
  deadline: string;
  description: string;
  skills: string[];
  isFeatured?: boolean;
  logo?: string;
  applyUrl: string;
}

const opportunities: Opportunity[] = [
  // Internships
  {
    id: 1,
    title: "Financial Analyst Intern",
    company: "JPMorgan Chase",
    type: "internship",
    location: "New York, NY",
    salary: "$25-30/hr",
    duration: "3 months",
    deadline: "March 30, 2026",
    description: "Join our Investment Banking division to work on financial modeling, valuation, and market analysis projects.",
    skills: ["Excel", "Financial Modeling", "Valuation"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 2,
    title: "Data Analytics Intern",
    company: "Goldman Sachs",
    type: "internship",
    location: "Remote",
    salary: "$28/hr",
    duration: "4 months",
    deadline: "April 15, 2026",
    description: "Work with our analytics team to derive insights from financial data and build automated reporting systems.",
    skills: ["Python", "SQL", "Data Visualization"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 3,
    title: "Investment Research Intern",
    company: "BlackRock",
    type: "internship",
    location: "San Francisco, CA",
    salary: "$30/hr",
    duration: "6 months",
    deadline: "April 5, 2026",
    description: "Support our investment research team in analyzing market trends and building financial models for portfolio decisions.",
    skills: ["Research", "Financial Analysis", "Bloomberg Terminal"],
    applyUrl: "#"
  },

  // Jobs
  {
    id: 4,
    title: "Junior Financial Analyst",
    company: "Deloitte",
    type: "job",
    location: "Chicago, IL",
    salary: "$65k-75k/year",
    deadline: "May 1, 2026",
    description: "Full-time position working on client projects involving financial planning, analysis, and strategic recommendations.",
    skills: ["Financial Modeling", "Excel", "PowerPoint"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Morgan Stanley",
    type: "job",
    location: "New York, NY",
    salary: "$70k-85k/year",
    deadline: "April 20, 2026",
    description: "Analyze complex datasets to support trading strategies and risk management decisions.",
    skills: ["SQL", "Python", "Tableau"],
    applyUrl: "#"
  },
  {
    id: 6,
    title: "Business Analyst",
    company: "Accenture",
    type: "job",
    location: "Boston, MA",
    salary: "$68k-78k/year",
    deadline: "May 10, 2026",
    description: "Work with clients to identify business problems and develop data-driven solutions.",
    skills: ["Business Analysis", "SQL", "Process Improvement"],
    applyUrl: "#"
  },

  // Seminars
  {
    id: 7,
    title: "Career Development in Finance",
    company: "Harvard Business School",
    type: "seminar",
    location: "Boston, MA",
    date: "April 18, 2026",
    deadline: "April 10, 2026",
    description: "In-person seminar covering career paths in finance, networking strategies, and industry insights from top professionals.",
    skills: ["Career Planning", "Networking", "Finance"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 8,
    title: "Financial Modeling Masterclass",
    company: "Wall Street Prep",
    type: "seminar",
    location: "New York, NY",
    date: "May 5, 2026",
    deadline: "April 25, 2026",
    description: "Intensive 2-day workshop on advanced financial modeling techniques used in investment banking.",
    skills: ["Financial Modeling", "Valuation", "Excel"],
    applyUrl: "#"
  },

  // Webinars
  {
    id: 9,
    title: "Breaking into Investment Banking",
    company: "CFA Institute",
    type: "webinar",
    location: "Online",
    date: "April 12, 2026",
    deadline: "April 11, 2026",
    description: "Free online session with industry experts sharing tips on landing your first role in investment banking.",
    skills: ["Career Guidance", "Investment Banking", "Interview Prep"],
    applyUrl: "#"
  },
  {
    id: 10,
    title: "Data Science for Finance",
    company: "DataCamp",
    type: "webinar",
    location: "Online",
    date: "April 22, 2026",
    deadline: "April 21, 2026",
    description: "Learn how to apply machine learning and data science techniques to financial analysis and trading.",
    skills: ["Python", "Machine Learning", "Finance"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 11,
    title: "ESG Investing Trends 2026",
    company: "Bloomberg",
    type: "webinar",
    location: "Online",
    date: "May 8, 2026",
    deadline: "May 7, 2026",
    description: "Explore the latest trends in sustainable investing and ESG analysis with Bloomberg experts.",
    skills: ["ESG", "Sustainable Investing", "Analysis"],
    applyUrl: "#"
  },

  // Competitions
  {
    id: 12,
    title: "Global Trading Competition",
    company: "Wharton School",
    type: "competition",
    location: "Online",
    date: "May 15-20, 2026",
    deadline: "May 1, 2026",
    description: "Compete against students worldwide in a simulated trading environment. Top 10 teams win cash prizes up to $10,000.",
    skills: ["Trading", "Market Analysis", "Strategy"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 13,
    title: "Financial Modeling Case Challenge",
    company: "McKinsey & Company",
    type: "competition",
    location: "Online",
    date: "April 28, 2026",
    deadline: "April 20, 2026",
    description: "Solve a real-world business case using financial modeling. Winners get interviews with McKinsey.",
    skills: ["Financial Modeling", "Case Study", "Problem Solving"],
    isFeatured: true,
    applyUrl: "#"
  },
  {
    id: 14,
    title: "Investment Pitch Competition",
    company: "Yale SOM",
    type: "competition",
    location: "New Haven, CT",
    date: "June 5, 2026",
    deadline: "May 15, 2026",
    description: "Pitch your investment thesis to a panel of venture capitalists. $15,000 in prizes for top teams.",
    skills: ["Pitch Deck", "Valuation", "Presentation"],
    applyUrl: "#"
  }
];

const opportunityTypeConfig = {
  internship: { icon: GraduationCap, color: "text-[#1FA89A]", bg: "bg-[#E5F7F6]", darkBg: "dark:bg-[#1FA89A]/20" },
  job: { icon: Briefcase, color: "text-[#0B5D4E]", bg: "bg-[#E8F7F3]", darkBg: "dark:bg-[#0B5D4E]/20" },
  seminar: { icon: Users, color: "text-[#6D28D9]", bg: "bg-[#F3EBFF]", darkBg: "dark:bg-[#6D28D9]/20" },
  webinar: { icon: Video, color: "text-[#F5B52E]", bg: "bg-[#FEF7E8]", darkBg: "dark:bg-[#F5B52E]/20" },
  competition: { icon: Trophy, color: "text-[#DC2626]", bg: "bg-red-50", darkBg: "dark:bg-red-900/20" },
  all: { icon: Filter, color: "text-slate-600", bg: "bg-slate-100", darkBg: "dark:bg-slate-800" }
};

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const [isSaved, setIsSaved] = useState(false);
  const config = opportunityTypeConfig[opportunity.type];
  const Icon = config.icon;

  return (
    <div className={`group relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${
      opportunity.isFeatured ? 'ring-2 ring-[#F5B52E]/20' : ''
    }`}>
      {/* Featured Badge */}
      {opportunity.isFeatured && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#F5B52E] px-3 py-1 text-xs font-semibold text-white shadow-sm">
            <TrendingUp className="h-3 w-3" />
            Featured
          </span>
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={() => setIsSaved(!isSaved)}
        className="absolute top-6 right-6 rounded-full p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        {isSaved ? (
          <BookmarkCheck className="h-5 w-5 fill-[#F5B52E] text-[#F5B52E]" />
        ) : (
          <Bookmark className="h-5 w-5 text-slate-400" />
        )}
      </button>

      {/* Type Badge */}
      <div className={`inline-flex items-center gap-1.5 rounded-full ${config.bg} ${config.darkBg} px-3 py-1.5`}>
        <Icon className={`h-4 w-4 ${config.color}`} />
        <span className={`text-xs font-semibold uppercase ${config.color}`}>
          {opportunity.type}
        </span>
      </div>

      {/* Company & Title */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {opportunity.title}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <Building2 className="h-4 w-4 text-slate-400" />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {opportunity.company}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <MapPin className="h-4 w-4" />
          <span>{opportunity.location}</span>
        </div>
        
        {opportunity.salary && (
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <DollarSign className="h-4 w-4" />
            <span>{opportunity.salary}</span>
          </div>
        )}
        
        {opportunity.duration && (
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Clock className="h-4 w-4" />
            <span>{opportunity.duration}</span>
          </div>
        )}
        
        {opportunity.date && (
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="h-4 w-4" />
            <span>{opportunity.date}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
        {opportunity.description}
      </p>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {opportunity.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Deadline & Apply */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Deadline</p>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {opportunity.deadline}
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-2xl bg-[#0B5D4E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]">
          Apply Now
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function OpportunitiesPage() {
  const [selectedType, setSelectedType] = useState<OpportunityType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesType = selectedType === "all" || opp.type === selectedType;
    const matchesSearch = 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const counts = {
    all: opportunities.length,
    internship: opportunities.filter(o => o.type === "internship").length,
    job: opportunities.filter(o => o.type === "job").length,
    seminar: opportunities.filter(o => o.type === "seminar").length,
    webinar: opportunities.filter(o => o.type === "webinar").length,
    competition: opportunities.filter(o => o.type === "competition").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Opportunities
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Discover internships, jobs, events, and competitions to advance your career
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search opportunities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pl-4 pr-4 text-sm placeholder:text-slate-400 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(opportunityTypeConfig) as OpportunityType[]).map((type) => {
          const config = opportunityTypeConfig[type];
          const Icon = config.icon;
          const count = counts[type];
          
          return (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedType === type
                  ? `${config.bg} ${config.darkBg} ${config.color}`
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="capitalize">{type === "all" ? "All" : type}s</span>
              <span className={`rounded-full px-2 py-0.5 text-xs ${
                selectedType === type
                  ? "bg-white/50 dark:bg-slate-900/30"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'opportunity' : 'opportunities'}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-600 dark:text-slate-400">Sort by:</span>
          <button className="font-medium text-[#0B5D4E] hover:underline dark:text-[#7EE7D5]">
            Deadline
          </button>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredOpportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>

      {/* Empty State */}
      {filteredOpportunities.length === 0 && (
        <div className="py-12 text-center">
          <Filter className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            No opportunities found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedType("all");
              setSearchQuery("");
            }}
            className="mt-4 text-sm font-medium text-[#0B5D4E] hover:underline dark:text-[#7EE7D5]"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
