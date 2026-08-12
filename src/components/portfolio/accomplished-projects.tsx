"use client";

import { ExternalLink, Code2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export function AccomplishedProjects() {
  const projects: Project[] = [
    {
      title: "Tech Company Valuation Model",
      description: "3-statement DCF model for SaaS company valuation with scenario analysis and sensitivity tables.",
      technologies: ["Excel", "DCF", "Financial Modeling", "Valuation"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "LBO Case Study Analysis",
      description: "Leveraged buyout model for private equity deal with IRR calculations and exit scenarios.",
      technologies: ["Excel", "LBO", "PE Analysis", "Financial Modeling"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "M&A Financial Analysis",
      description: "Merger model with accretion/dilution analysis and synergy valuation for horizontal merger.",
      technologies: ["Excel", "M&A", "Accretion/Dilution", "Synergy Analysis"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Portfolio Optimization Tool",
      description: "Python-based portfolio optimization using Modern Portfolio Theory with risk-return analysis.",
      technologies: ["Python", "Pandas", "NumPy", "MPT"],
      githubUrl: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Interactive financial dashboard with KPIs, charts, and automated reporting for executives.",
      technologies: ["Power BI", "Excel", "DAX", "Financial Metrics"],
      liveUrl: "#",
    },
    {
      title: "Credit Risk Model",
      description: "Statistical model for credit risk assessment using regression analysis and probability of default.",
      technologies: ["Python", "Statistical Analysis", "Risk Modeling", "Machine Learning"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Accomplished Projects</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Showcase of your completed work</p>
        </div>
        <Badge variant="secondary" className="text-xs">
          {projects.length} Projects
        </Badge>
      </div>
      
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
              {project.featured && (
              <div className="absolute -right-2 -top-2">
                <div className="flex items-center gap-1 rounded-full bg-[#F5B52E] px-2 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3 fill-white" />
                  Featured
                </div>
              </div>
            )}
            
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" className="flex-1">
                  <Code2 className="mr-1 h-3 w-3" />
                  Code
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Live
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
