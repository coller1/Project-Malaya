"use client";

import { useState } from "react";
import { Download, Edit, Eye, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ResumeBuilder() {
  const [resumeVersion, setResumeVersion] = useState("current");

  const resumeSections = [
    { title: "Personal Information", status: "complete", items: 4 },
    { title: "Professional Summary", status: "complete", items: 1 },
    { title: "Work Experience", status: "complete", items: 2 },
    { title: "Education", status: "complete", items: 2 },
    { title: "Technical Skills", status: "complete", items: 15 },
    { title: "Financial Models", status: "complete", items: 6 },
    { title: "Certifications", status: "complete", items: 6 },
  ];

  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Resume Builder</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Create and customize your professional resume</p>
        </div>
        <FileText className="h-6 w-6 text-slate-400" />
      </div>

      {/* Resume Preview Card */}
      <div className="mt-6 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="h-24 w-20 rounded-lg bg-white shadow-sm dark:bg-slate-700" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your Resume</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Last updated: Today</p>
              <div className="mt-2 flex gap-2">
                <Badge variant="outline" className="text-xs">PDF Ready</Badge>
                <Badge variant="secondary" className="text-xs">ATS Optimized</Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button variant="default" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Sections */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Resume Sections</h3>
          <Button variant="ghost" size="sm">
            <Plus className="mr-1 h-4 w-4" />
            Add Section
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {resumeSections.map((section, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">{section.title}</h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{section.items} {section.items === 1 ? 'item' : 'items'}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={section.status === "complete" ? "default" : "secondary"} className="text-xs">
                    {section.status === "complete" ? "Complete" : "Draft"}
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 rounded-xl bg-gradient-to-r from-[#E8F7F3] to-[#F3EBFF] p-4 dark:from-[#0B5D4E]/30 dark:to-[#6D28D9]/30">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Quick Actions</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">Tailor for IB Role</Button>
          <Button variant="secondary" size="sm">Check ATS Score</Button>
          <Button variant="secondary" size="sm">Generate Cover Letter</Button>
          <Button variant="secondary" size="sm">Export to LinkedIn</Button>
        </div>
      </div>
    </section>
  );
}
