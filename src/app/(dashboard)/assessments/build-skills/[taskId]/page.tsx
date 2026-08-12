"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Upload, 
  FileText, 
  Target, 
  BookOpen, 
  CheckCircle2,
  Clock,
  AlertCircle,
  FileSpreadsheet,
  X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function BuildSkillsTaskPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mock task data - in real app, this would come from params/API
  const task = {
    id: 1,
    title: "Financial Modeling Practice: Build a 3-Statement Model",
    skillLevel: "Intermediate",
    estimatedTime: "90 min",
    dueDate: "Mar 15, 2024",
    status: "not-started",
    
    scenario: {
      title: "Tech Startup Valuation",
      description: "You are an analyst at a boutique investment bank. Your team has been approached by a Series B tech startup looking for a valuation. The company provides SaaS solutions for enterprise clients and has shown strong revenue growth over the past 3 years.",
      context: [
        "The company has raised $15M in Series A funding",
        "Current annual recurring revenue (ARR): $8M",
        "Customer churn rate: 5% annually",
        "Operating expenses include R&D, Sales & Marketing, and G&A",
        "The management team is seeking a $50M valuation"
      ]
    },

    objectives: [
      "Build a complete 3-statement financial model (Income Statement, Balance Sheet, Cash Flow)",
      "Project financials for the next 5 years based on provided assumptions",
      "Calculate key financial ratios and metrics",
      "Perform a DCF analysis to determine company valuation",
      "Create a sensitivity analysis table for key assumptions"
    ],

    skillsToGain: [
      { name: "Financial Modeling", level: "core" },
      { name: "3-Statement Modeling", level: "core" },
      { name: "DCF Valuation", level: "core" },
      { name: "Excel Formulas & Functions", level: "supporting" },
      { name: "Scenario Analysis", level: "supporting" },
      { name: "Financial Ratio Analysis", level: "supporting" }
    ],

    materials: [
      {
        name: "Financial Model Template",
        description: "Excel template with pre-formatted sheets",
        type: "xlsx",
        size: "2.5 MB"
      },
      {
        name: "Company Financial Data",
        description: "Historical financials and key assumptions",
        type: "pdf",
        size: "850 KB"
      },
      {
        name: "Industry Benchmarks",
        description: "Comparable company analysis data",
        type: "xlsx",
        size: "1.2 MB"
      },
      {
        name: "Instructions Guide",
        description: "Step-by-step modeling instructions",
        type: "pdf",
        size: "450 KB"
      }
    ],

    rubric: [
      { criteria: "Model Structure & Organization", points: 20 },
      { criteria: "Accuracy of Calculations", points: 30 },
      { criteria: "Financial Statement Links", points: 20 },
      { criteria: "DCF Valuation Methodology", points: 20 },
      { criteria: "Presentation & Formatting", points: 10 }
    ]
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const getFileIcon = (type: string) => {
    if (type === "xlsx") return <FileSpreadsheet className="h-5 w-5" />;
    return <FileText className="h-5 w-5" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <Link
          href="/assessments/build-skills"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Build Skills
        </Link>

        <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[#F5B52E] border-[#F5B52E]/50 dark:text-[#F5B52E]">
                  {task.skillLevel}
                </Badge>
                <Badge variant="secondary">
                  <Clock className="mr-1 h-3 w-3" />
                  {task.estimatedTime}
                </Badge>
              </div>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                {task.title}
              </h1>
              <div className="mt-4 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Due: {task.dueDate}
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Status: <span className="font-medium text-slate-900 dark:text-slate-100">{task.status === "not-started" ? "Not Started" : task.status}</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white">
              Start Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Scenario Section */}
      <Card className="p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-[#E8F7F3] p-2 dark:bg-[#1FA89A]/30">
            <BookOpen className="h-5 w-5 text-[#0B5D4E] dark:text-[#1FA89A]" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Scenario: {task.scenario.title}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {task.scenario.description}
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Key Context:</p>
              <ul className="space-y-1.5">
                {task.scenario.context.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0B5D4E] dark:text-[#1FA89A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Task Objectives */}
      <Card className="p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-[#F3EBFF] p-2 dark:bg-[#6D28D9]/30">
            <Target className="h-5 w-5 text-[#6D28D9] dark:text-[#A78BFA]" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Task Objectives
            </h2>
            <ul className="mt-4 space-y-3">
              {task.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#F3EBFF] text-xs font-semibold text-[#6D28D9] dark:bg-[#6D28D9]/50 dark:text-[#A78BFA]">
                    {index + 1}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Skills to Gain */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Skills You'll Develop
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {task.skillsToGain.map((skill, index) => (
            <div
              key={index}
              className={`rounded-lg border p-4 ${
                skill.level === "core"
                  ? "border-[#6D28D9]/30 bg-[#F3EBFF] dark:border-[#6D28D9] dark:bg-[#6D28D9]/20"
                  : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {skill.name}
                </span>
                <Badge
                  variant={skill.level === "core" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {skill.level}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Materials to Download */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Materials & Resources
          </h2>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download All
          </Button>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {task.materials.map((material, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all hover:border-[#6D28D9] hover:bg-[#F3EBFF] dark:border-slate-700 dark:bg-slate-800 dark:hover:border-[#6D28D9] dark:hover:bg-[#6D28D9]/20"
            >
              <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-700">
                {getFileIcon(material.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-slate-900 dark:text-slate-100">
                  {material.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {material.description}
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                  {material.type.toUpperCase()} • {material.size}
                </p>
              </div>
              <Button variant="ghost" size="sm" className="flex-shrink-0">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Upload Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Submit Your Work
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Upload your completed financial model for evaluation. Accepted formats: .xlsx, .xls
        </p>

        {/* Upload Area */}
        <div className="mt-6">
          {!uploadedFile ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
                isDragging
                  ? "border-[#6D28D9] bg-[#F3EBFF] dark:border-[#A78BFA] dark:bg-[#6D28D9]/20"
                  : "border-slate-300 bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800"
              }`}
            >
              <Upload className="mx-auto h-12 w-12 text-slate-400" />
              <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                Drag and drop your file here, or click to browse
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Maximum file size: 10MB
              </p>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileSelect}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
            </div>
          ) : (
            <div className="rounded-xl border border-[#0B5D4E] bg-[#E8F7F3] p-6 dark:border-[#1FA89A] dark:bg-[#0B5D4E]/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#0B5D4E] p-3 dark:bg-[#1FA89A]/30">
                    <FileSpreadsheet className="h-6 w-6 text-white dark:text-[#1FA89A]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0B5D4E] dark:text-[#1FA89A]">
                      {uploadedFile.name}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-[#0B5D4E] hover:text-[#0B5D4E]/80 dark:text-[#1FA89A]"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex items-center justify-between rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {uploadedFile ? (
              <span className="flex items-center gap-2 text-[#0B5D4E] dark:text-[#1FA89A]">
                <CheckCircle2 className="h-4 w-4" />
                File ready for submission
              </span>
            ) : (
              "Please upload your file to continue"
            )}
          </div>
          <Button
            size="lg"
            disabled={!uploadedFile}
            className="bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white disabled:opacity-50"
          >
            Submit for Grading
          </Button>
        </div>
      </Card>

      {/* Grading Rubric */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Grading Rubric
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Your submission will be evaluated based on the following criteria:
        </p>
        <div className="mt-6 space-y-3">
          {task.rubric.map((item, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3EBFF] text-sm font-semibold text-[#6D28D9] dark:bg-[#6D28D9]/50 dark:text-[#A78BFA]">
                  {index + 1}
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {item.criteria}
                </span>
              </div>
              <Badge variant="secondary" className="text-sm">
                {item.points} points
              </Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-[#F3EBFF] p-4 dark:bg-[#6D28D9]/20">
          <p className="text-sm font-medium text-[#6D28D9] dark:text-[#A78BFA]">
            Total Points: {task.rubric.reduce((sum, item) => sum + item.points, 0)} points
          </p>
          <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">
            You need 70% or higher to pass this assessment
          </p>
        </div>
      </Card>

      {/* Tips Section */}
      <Card className="border-[#1FA89A]/30 bg-[#E8F7F3] p-6 dark:border-[#1FA89A] dark:bg-[#0B5D4E]/20">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0B5D4E] dark:text-[#1FA89A]" />
          <div>
            <h3 className="font-semibold text-[#0B5D4E] dark:text-[#1FA89A]">
              Tips for Success
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-800 dark:text-slate-200">
              <li>• Review all materials before starting your model</li>
              <li>• Use clear labels and consistent formatting throughout</li>
              <li>• Double-check all formula links between statements</li>
              <li>• Include a summary page with key assumptions and outputs</li>
              <li>• Test your model with sensitivity analysis</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
