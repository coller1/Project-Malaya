"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Download,
  ExternalLink,
  Send,
  Save,
  Clock,
  Award,
} from "lucide-react";
import AnimatedBackground from "@/components/animated-background";

export default function ProjectWorkspacePage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = use(params);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [projectLink, setProjectLink] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock project data (in real app, fetch based on projectId)
  const project = {
    id: projectId,
    title: "KPI Dashboard for Small Business",
    description: "Build an interactive dashboard to monitor monthly business performance",
    estimatedTime: "2-3 hours",
    deliverables: ["Excel Dashboard", "Performance Report"],
    instructions: `
      In this project, you will build a comprehensive KPI dashboard for a small business owner to track their monthly performance.

      **Scenario:**
      You've been hired by a local retail store to create a dashboard that helps them monitor key business metrics including sales, inventory, and customer satisfaction.

      **Requirements:**
      1. Create an Excel workbook with multiple sheets
      2. Include at least 5 KPIs (Sales Revenue, Profit Margin, Inventory Turnover, Customer Satisfaction, Monthly Growth)
      3. Use pivot tables to organize data
      4. Create charts and visualizations
      5. Design a clean, professional dashboard layout
      6. Add filtering options for different time periods

      **Data Provided:**
      - Download the sample dataset below which includes 12 months of sales data
      - The dataset contains: Date, Product, Quantity Sold, Revenue, Cost, Customer Rating

      **Submission Requirements:**
      - Upload your completed Excel workbook (.xlsx)
      - Include a 1-page report explaining your dashboard design choices
      - Provide a link if you've created an online version (optional)
    `,
    resources: [
      { name: "Sample Sales Data.xlsx", url: "#", size: "124 KB" },
      { name: "KPI Dashboard Template.xlsx", url: "#", size: "89 KB" },
      { name: "Dashboard Design Guide.pdf", url: "#", size: "2.1 MB" },
    ],
    rubric: [
      { criteria: "Data Analysis & KPIs", points: 30, description: "Correct calculation and presentation of key metrics" },
      { criteria: "Dashboard Design", points: 25, description: "Visual appeal, clarity, and usability" },
      { criteria: "Excel Skills", points: 25, description: "Proper use of formulas, pivot tables, and charts" },
      { criteria: "Report Quality", points: 20, description: "Clear explanation of design decisions" },
    ],
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles([...uploadedFiles, ...files]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F7F3] dark:bg-[#0B5D4E]/20">
            <CheckCircle2 className="h-10 w-10 text-[#0B5D4E] dark:text-[#7EE7D5]" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Project Submitted Successfully!
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Your project has been submitted for review. You'll receive feedback within 3-5 business days.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/assessments/gain-experience"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-750"
            >
              Back to Projects
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 rounded-2xl bg-[#0B5D4E] px-6 py-3 font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
            >
              <Award className="h-5 w-5" />
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative space-y-6">
      <AnimatedBackground />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <Link
          href="/assessments/gain-experience"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gain Experience
        </Link>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Clock className="h-4 w-4" />
          <span>Est. Time: {project.estimatedTime}</span>
        </div>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-3">
        {/* Main Content - 2/3 */}
        <div className="space-y-6 lg:col-span-2">
          {/* Project Brief */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {project.title}
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <div className="mt-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Project Instructions
              </h3>
              <div className="prose prose-sm max-w-none text-slate-600 dark:prose-invert dark:text-slate-400">
                {project.instructions.split('\n').map((line, i) => (
                  <p key={i} className="whitespace-pre-wrap">{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Resources & Templates
            </h3>
            <div className="space-y-3">
              {project.resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white p-2 dark:bg-slate-900">
                      <FileText className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {resource.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {resource.size}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-[#0B5D4E] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Area */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Submit Your Work
            </h3>

            {/* File Upload */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Upload Files
              </label>
              <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/60">
                <Upload className="mx-auto h-10 w-10 text-slate-400" />
                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                  Click to upload or drag and drop
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Excel, PDF, DOCX up to 50MB
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="mt-4 inline-block cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Choose Files
                </label>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                        <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {file}
                        </span>
                      </div>
                      <button className="text-sm text-red-600 hover:underline dark:text-red-400">
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Link */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Project Link (Optional)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://..."
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Notes for Reviewer (Optional)
              </label>
              <textarea
                placeholder="Add any context or notes about your submission..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 focus:border-[#0B5D4E] focus:outline-none focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => alert("Draft saved!")}
                className="flex-1 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-750"
              >
                <Save className="mr-2 inline-block h-4 w-4" />
                Save Draft
              </button>
              <button
                onClick={handleSubmit}
                disabled={uploadedFiles.length === 0}
                className="flex-1 rounded-2xl bg-[#0B5D4E] px-6 py-3 font-semibold text-white transition hover:bg-[#09493f] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
              >
                <Send className="mr-2 inline-block h-4 w-4" />
                Submit Project
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - 1/3 */}
        <div className="space-y-6">
          {/* Deliverables Checklist */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Required Deliverables
            </h3>
            <div className="space-y-3">
              {project.deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60"
                >
                  <div className="mt-0.5 rounded-full border-2 border-slate-300 p-0.5 dark:border-slate-600">
                    <div className="h-3 w-3 rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {deliverable}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grading Rubric */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Grading Rubric
            </h3>
            <div className="space-y-4">
              {project.rubric.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {item.criteria}
                    </span>
                    <span className="text-sm font-bold text-[#0B5D4E] dark:text-[#7EE7D5]">
                      {item.points} pts
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="border-t border-slate-200 pt-3 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Total Points
                  </span>
                  <span className="text-lg font-bold text-[#0B5D4E] dark:text-[#7EE7D5]">
                    100
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Notice */}
          <div className="rounded-2xl border border-[#F5B52E]/30 bg-[#FEF7E8] p-4 dark:border-[#F5B52E]/20 dark:bg-[#F5B52E]/10">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#F5B52E]" />
              <div className="text-sm">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Need Help?
                </p>
                <p className="mt-1 text-slate-700 dark:text-slate-300">
                  Check the discussion forum or request mentor support if you get stuck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
