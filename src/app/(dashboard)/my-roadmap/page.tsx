"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Code, Lightbulb, Trophy, Users, Target, Gift, Edit3, Save, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/animated-background";

const phases = [
  {
    title: "Foundation",
    status: "Complete",
    progress: 100,
    duration: "2 weeks",
    reward: "Portfolio starter kit",
    description: "Build your fundamentals and confidence with core learning modules.",
    done: true,
    icon: BookOpen,
    skills: ["Excel", "SQL Basics", "Financial Literacy"],
    color: "#0B5D4E", // emerald-green
    bgColor: "bg-[#0B5D4E]",
    borderColor: "border-[#0B5D4E]",
    textColor: "text-[#0B5D4E]",
    lightBg: "bg-[#E8F7F3]"
  },
  {
    title: "Build Skills",
    status: "In progress",
    progress: 68,
    duration: "3 weeks",
    reward: "Mentor feedback pass",
    description: "Apply your knowledge through guided projects and hands-on practice.",
    done: false,
    icon: Code,
    skills: ["Python", "Data Analysis", "PowerBI"],
    color: "#1FA89A", // seafoam-teal
    bgColor: "bg-[#1FA89A]",
    borderColor: "border-[#1FA89A]",
    textColor: "text-[#1FA89A]",
    lightBg: "bg-[#E5F7F6]"
  },
  {
    title: "Gain Experience",
    status: "Next",
    progress: 18,
    duration: "4 weeks",
    reward: "Project certificate",
    description: "Work on real-world projects and build your professional portfolio.",
    done: false,
    icon: Lightbulb,
    skills: ["Financial Modeling", "Case Studies", "Portfolio Projects"],
    color: "#6D28D9", // violet-purple
    bgColor: "bg-[#6D28D9]",
    borderColor: "border-[#6D28D9]",
    textColor: "text-[#6D28D9]",
    lightBg: "bg-[#F3EBFF]"
  },
  {
    title: "Stand Out",
    status: "Locked",
    progress: 0,
    duration: "3 weeks",
    reward: "Industry badge",
    description: "Develop your personal brand and networking skills.",
    done: false,
    icon: Users,
    skills: ["LinkedIn Profile", "Networking", "Personal Branding"],
    color: "#F5B52E", // warm-gold
    bgColor: "bg-[#F5B52E]",
    borderColor: "border-[#F5B52E]",
    textColor: "text-[#F5B52E]",
    lightBg: "bg-[#FEF7E8]"
  },
  {
    title: "Achieve Goal",
    status: "Locked",
    progress: 0,
    duration: "4 weeks",
    reward: "Career readiness badge",
    description: "Prepare your story, portfolio, and presence for real opportunities.",
    done: false,
    icon: Trophy,
    skills: ["Interview Prep", "Resume Building", "Job Applications"],
    color: "#0B5D4E", // emerald-green
    bgColor: "bg-[#0B5D4E]",
    borderColor: "border-[#0B5D4E]",
    textColor: "text-[#0B5D4E]",
    lightBg: "bg-[#E8F7F3]"
  },
];

const modules = [
  {
    name: "Design systems essentials",
    percent: 92,
    duration: "4h",
    prereq: "Foundation complete",
    reward: "Certificate",
    active: true,
  },
  {
    name: "Case study sprint",
    percent: 64,
    duration: "6h",
    prereq: "Skill Build in progress",
    reward: "Peer review",
    active: true,
  },
  {
    name: "Career storytelling",
    percent: 24,
    duration: "3h",
    prereq: "Skill Build unlocked",
    reward: "Resume check",
    active: false,
  },
];

export default function MyRoadmapPage() {
  const [isEditGoalOpen, setIsEditGoalOpen] = useState(false);
  const [isSaveCurrentOpen, setIsSaveCurrentOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState("Financial Analyst");
  const [newGoal, setNewGoal] = useState("");
  const [newIndustry, setNewIndustry] = useState("");
  const [savedGoals, setSavedGoals] = useState<string[]>([]);

  const careerGoals = [
    "Financial Analyst",
    "Software Engineer",
    "UX Designer",
    "Data Analyst",
    "Marketing Specialist",
    "Cybersecurity Analyst",
    "Business Analyst",
    "Product Manager",
    "Data Scientist",
    "Electrician",
    "Welder",
    "Plumber",
    "HVAC Technician",
    "Automotive Technician",
    "Construction Manager",
    "Heavy Equipment Operator",
    "Industrial Mechanic",
    "CNC Machinist",
  ];

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Aviation",
    "Marketing",
    "Government",
    "Consulting",
    "Construction",
    "Manufacturing",
    "Automotive",
    "Energy & Utilities",
  ];

  const handleSaveCurrentGoal = () => {
    if (!savedGoals.includes(currentGoal)) {
      setSavedGoals([...savedGoals, currentGoal]);
    }
    setIsSaveCurrentOpen(false);
  };

  const handleChangeGoal = () => {
    if (newGoal && newIndustry) {
      setCurrentGoal(newGoal);
      setIsEditGoalOpen(false);
      setNewGoal("");
      setNewIndustry("");
    }
  };

  return (
    <>
      <AnimatedBackground />
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <section className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="relative">
          <Image
            src="/roadmapgoalimage.png"
            alt="Career goal illustration"
            width={1400}
            height={520}
            className="w-full object-cover"
            style={{ width: 1330, height: 340 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          
          {/* Current Goal Info */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-slate-900/95">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Current Goal</p>
              <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">{currentGoal}</p>
            </div>
            <button 
              onClick={() => setIsEditGoalOpen(true)}
              className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              <Edit3 className="h-4 w-4" />
              Edit Goal
            </button>
          </div>
        </div>
      </section>

      {/* Edit Goal Modal */}
      <Dialog open={isEditGoalOpen} onOpenChange={setIsEditGoalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage Your Career Goals</DialogTitle>
            <DialogDescription>
              Change your career path or save your current progress to explore other goals.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Save Current Goal Section */}
            <div className="rounded-2xl border-2 border-[#0B5D4E] bg-[#E8F7F3] p-4 dark:border-[#7EE7D5] dark:bg-[#0B5D4E]/10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Save className="h-5 w-5 flex-shrink-0 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      Save your current progress
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      Save progress on <strong>{currentGoal}</strong> before switching to a new goal. You can return to this goal anytime without losing:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• All completed courses and lessons</li>
                      <li>• Your current phase progress</li>
                      <li>• Earned certificates and badges</li>
                    </ul>
                  </div>
                </div>
                <Button
                  onClick={handleSaveCurrentGoal}
                  disabled={savedGoals.includes(currentGoal)}
                  className="flex-shrink-0 bg-[#0B5D4E] hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
                >
                  {savedGoals.includes(currentGoal) ? "Saved" : "Save Progress"}
                </Button>
              </div>
            </div>

            {/* Saved Goals */}
            {savedGoals.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Your Saved Career Paths
                  </h3>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                    {savedGoals.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {savedGoals.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => {
                        setNewGoal(goal);
                        setNewIndustry("Technology"); // Auto-select a default
                      }}
                      className="rounded-full bg-[#E8F7F3] px-3 py-1.5 text-sm font-medium text-[#0B5D4E] transition hover:bg-[#d4efe9] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5] dark:hover:bg-[#0B5D4E]/30"
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Click a saved goal to quickly switch back to it
                </p>
              </div>
            )}

            <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
              <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">
                Or Choose a New Career Path
              </h3>

              {/* Career Goal Selection */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-slate-100">
                  What career do you want to pursue?
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {careerGoals.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setNewGoal(goal)}
                      className={`rounded-2xl border-2 px-4 py-3 text-sm font-medium transition ${
                        newGoal === goal
                          ? "border-[#0B5D4E] bg-[#E8F7F3] text-[#0B5D4E] dark:border-[#7EE7D5] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5]"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry Selection */}
              <div className="mt-6">
                <label className="mb-3 block text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Which industry interests you?
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setNewIndustry(industry)}
                      className={`rounded-2xl border-2 px-4 py-3 text-sm font-medium transition ${
                        newIndustry === industry
                          ? "border-[#0B5D4E] bg-[#E8F7F3] text-[#0B5D4E] dark:border-[#7EE7D5] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5]"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* Warning */}
              {newGoal && newGoal !== currentGoal && (
                <div className="mt-6 rounded-2xl border border-[#F5B52E]/30 bg-[#FEF7E8] p-4 dark:border-[#F5B52E]/20 dark:bg-[#F5B52E]/10">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 flex-shrink-0 text-[#F5B52E]" />
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">
                        Your roadmap will be updated
                      </p>
                      <p className="mt-1 text-slate-700 dark:text-slate-300">
                        Switching from <strong>{currentGoal}</strong> to <strong>{newGoal}</strong> will change your
                        courses and phases to match your new goal.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-4 dark:border-slate-700">
            <Button
              variant="outline"
              onClick={() => {
                setIsEditGoalOpen(false);
                setNewGoal("");
                setNewIndustry("");
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleChangeGoal}
              disabled={!newGoal || !newIndustry}
              className="bg-[#0B5D4E] hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
            >
              Change Goal
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Your journey
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Roadmap phases
            </h2>
          </div>
          <div className="rounded-full bg-[#E8F7F3] px-3 py-1 text-sm font-medium text-[#0B5D4E] dark:bg-slate-800 dark:text-[#7EE7D5]">
            5 milestones ahead
          </div>
        </div>

        {/* Horizontal Phase Timeline */}
        <div className="mt-8 relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-10 h-1 bg-slate-200 dark:bg-slate-700" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />
          
          {/* Phases */}
          <div className="relative flex items-start justify-between gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isCompleted = phase.done;
              const isInProgress = phase.status === "In progress";
              const isLocked = phase.status === "Locked";
              
              return (
                <div key={phase.title} className="flex flex-1 flex-col items-center">
                  {/* Icon Circle */}
                  <div className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 transition-all ${
                    isCompleted 
                      ? `${phase.borderColor} ${phase.bgColor}` 
                      : isInProgress
                        ? `${phase.borderColor} bg-white dark:${phase.borderColor} dark:bg-slate-900`
                        : 'border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="h-9 w-9 text-white dark:text-white" />
                    ) : (
                      <Icon className={`h-8 w-8 ${
                        isInProgress 
                          ? phase.textColor 
                          : 'text-slate-400 dark:text-slate-500'
                      }`} />
                    )}
                  </div>
                  
                  {/* Phase Details Card */}
                  <div className={`mt-4 w-full rounded-2xl border p-4 transition-all h-[280px] flex flex-col ${
                    isCompleted
                      ? `${phase.borderColor} ${phase.lightBg} dark:${phase.borderColor} dark:${phase.bgColor}/10`
                      : isInProgress
                        ? `${phase.borderColor} bg-white dark:${phase.borderColor} dark:bg-slate-900`
                        : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-sm font-bold ${
                        isCompleted || isInProgress
                          ? 'text-slate-900 dark:text-slate-100'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}>
                        {phase.title}
                      </h3>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        phase.done 
                          ? `${phase.bgColor} text-white` 
                          : isInProgress
                            ? `${phase.bgColor}/10 ${phase.textColor}`
                            : "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                      }`}>
                        {phase.status}
                      </span>
                    </div>

                    <p className={`text-xs mb-3 line-clamp-2 ${
                      isCompleted || isInProgress
                        ? 'text-slate-600 dark:text-slate-400'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      {phase.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-3 flex-1">
                      <p className={`text-xs font-medium mb-1 ${
                        isCompleted || isInProgress
                          ? 'text-slate-700 dark:text-slate-300'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}>
                        Key Skills:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {phase.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              isCompleted || isInProgress
                                ? 'bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                                : 'bg-slate-200 text-slate-400 dark:bg-slate-700 dark:text-slate-600'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto space-y-2">
                    {/* Progress Bar */}
                    {phase.progress > 0 && (
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Progress</span>
                          <span className={`font-semibold ${phase.textColor}`}>{phase.progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div 
                            className={`h-1.5 rounded-full ${phase.bgColor} progress-bar-animated ${isInProgress ? 'progress-bar-shimmer' : ''}`}
                            style={{ width: `${phase.progress}%` }} 
                          />
                        </div>
                      </div>
                    )}

                    {/* Duration and Reward */}
                    <div className={`flex items-center justify-between text-xs ${
                      isCompleted || isInProgress
                        ? 'text-slate-500 dark:text-slate-400'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}>
                      <span className="flex items-center gap-1">
                        <Clock3 className="h-3 w-3" />
                        {phase.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Gift className="h-3 w-3" />
                        {phase.reward}
                      </span>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Learning modules
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
              Current focus areas
            </h2>
          </div>
          <button className="flex items-center gap-2 rounded-full bg-[#0B5D4E] px-4 py-2 text-sm font-medium text-white">
            Continue learning
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {modules.map((module) => (
            <div key={module.name} className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-full p-2 ${module.active ? "bg-[#E8F7F3] text-[#0B5D4E]" : "bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-300"}`}>
                    {module.active ? <BookOpen className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{module.name}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1"><Clock3 className="h-4 w-4" />{module.duration}</span>
                      <span>Prereq: {module.prereq}</span>
                      <span>Reward: {module.reward}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="min-w-[120px]">
                    <div className="flex items-center justify-between text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span>Progress</span>
                      <span>{module.percent}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-2 rounded-full bg-[#0B5D4E]" style={{ width: `${module.percent}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
