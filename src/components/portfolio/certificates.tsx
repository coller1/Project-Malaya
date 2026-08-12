"use client";

import { Award, Download, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
}

export function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "CFA Level I Preparation",
      issuer: "CFA Institute",
      issueDate: "Jan 2024",
      credentialId: "CFA-L1-2024",
      verifyUrl: "#",
      skills: ["Financial Analysis", "Portfolio Management", "Ethics", "Quantitative Methods"],
    },
    {
      title: "Financial Modeling & Valuation",
      issuer: "Wall Street Prep",
      issueDate: "Dec 2023",
      credentialId: "WSP-FMV-123",
      verifyUrl: "#",
      skills: ["DCF Analysis", "LBO Modeling", "M&A Analysis", "Excel"],
    },
    {
      title: "Investment Banking Certificate",
      issuer: "Corporate Finance Institute",
      issueDate: "Nov 2023",
      credentialId: "CFI-IB-789",
      verifyUrl: "#",
      skills: ["Investment Banking", "Pitch Books", "Deal Structuring", "Valuation"],
    },
    {
      title: "Advanced Excel for Finance",
      issuer: "Bloomberg Terminal",
      issueDate: "Oct 2023",
      credentialId: "BMG-EXL-456",
      skills: ["Excel VBA", "Financial Functions", "Data Analysis", "Macros"],
    },
    {
      title: "Python for Finance",
      issuer: "DataCamp",
      issueDate: "Sep 2023",
      credentialId: "DC-PYF-321",
      verifyUrl: "#",
      skills: ["Python", "Pandas", "NumPy", "Financial Analytics"],
    },
    {
      title: "SQL for Financial Analysis",
      issuer: "Coursera",
      issueDate: "Aug 2023",
      credentialId: "CERT-SQL-678",
      verifyUrl: "#",
      skills: ["SQL", "Database Management", "Data Querying", "Financial Reporting"],
    },
  ];

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Certificates Earned</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Professional certifications and course completions</p>
        </div>
        <Badge variant="secondary" className="text-xs">
          {certificates.length} Certificates
        </Badge>
      </div>
      
      <div className="mt-6 space-y-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 transition-all hover:shadow-lg dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-[#0B5D4E] p-3 dark:bg-[#0B5D4E]/30">
                <Award className="h-6 w-6 text-white dark:text-[#1FA89A]" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {cert.issuer} • {cert.issueDate}
                </p>
                
                {cert.credentialId && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
                {cert.verifyUrl && (
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
