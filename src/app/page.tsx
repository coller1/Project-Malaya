"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Target, TrendingUp, Users, Award, CheckCircle2, Sparkles, BarChart3, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#F5F1E8] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md dark:bg-slate-950/95 animate-in slide-in-from-top duration-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/newlogo.png"
              alt="MPATH Logo"
              width={240}
              height={80}
              className="h-16 w-auto sm:h-20"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-700 transition-all hover:scale-105 hover:text-[#16A085] dark:text-slate-300 dark:hover:text-[#48C9B0]"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="group relative overflow-hidden rounded-full bg-[#16A085] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg dark:bg-[#48C9B0] dark:text-slate-900 sm:px-6"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#1ABC9C] to-[#16A085] opacity-0 transition-opacity group-hover:opacity-100 dark:from-[#5FDDC1] dark:to-[#48C9B0]" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 sm:pt-32">
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#16A085]/5 blur-3xl transition-all duration-1000 dark:bg-[#48C9B0]/5 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
          <div className={`absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#F39C12]/5 blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
          {/* Floating orbs */}
          <div className="absolute left-1/4 top-1/3 h-2 w-2 animate-ping rounded-full bg-[#16A085]/30" style={{ animationDuration: '3s' }} />
          <div className="absolute right-1/3 top-1/2 h-3 w-3 animate-pulse rounded-full bg-[#F39C12]/20" style={{ animationDuration: '4s' }} />
          <div className="absolute left-1/2 bottom-1/4 h-2 w-2 animate-ping rounded-full bg-[#3498DB]/30" style={{ animationDuration: '5s' }} />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={`flex flex-col justify-center transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#16A085]/20 bg-[#16A085]/10 px-4 py-2 text-sm font-medium text-[#16A085] dark:border-[#48C9B0]/20 dark:bg-[#48C9B0]/10 dark:text-[#48C9B0] w-fit animate-in slide-in-from-left duration-700 delay-200">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Empowering Filipino Learners
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                <span className="inline-block animate-in slide-in-from-left duration-700 delay-300">Learn. Grow.</span>
                <br />
                <span className="inline-block animate-in slide-in-from-left duration-700 delay-500">Connect.{" "}</span>
                <span className="inline-block animate-in slide-in-from-left duration-700 delay-700 bg-gradient-to-r from-[#16A085] to-[#1ABC9C] bg-clip-text text-transparent dark:from-[#48C9B0] dark:to-[#5FDDC1]">
                  Thrive.
                </span>
              </h1>
              <p className={`mt-6 text-lg text-slate-600 dark:text-slate-300 transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Your personalized platform for career success. Whether you're pursuing tech, business, healthcare, creative arts, or any other field—MPATH guides you with tailored learning paths, skill assessments, and career guidance to achieve your goals.
              </p>
              <div className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/register"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#16A085] px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl dark:bg-[#48C9B0] dark:text-slate-900"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#1ABC9C] to-[#16A085] opacity-0 transition-opacity group-hover:opacity-100 dark:from-[#5FDDC1] dark:to-[#48C9B0]" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  Explore Pathways
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: "10K+", label: "Active Learners", delay: "delay-[900ms]" },
                  { value: "500+", label: "Courses", delay: "delay-[1100ms]" },
                  { value: "95%", label: "Success Rate", delay: "delay-[1300ms]" }
                ].map((stat, i) => (
                  <div key={i} className={`animate-in fade-in zoom-in duration-700 ${stat.delay}`}>
                    <div className="text-3xl font-bold text-[#16A085] dark:text-[#48C9B0]">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              {/* Abstract Illustration */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#16A085] via-[#16A085]/90 to-[#1ABC9C] shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated circles */}
                  <div className="absolute h-64 w-64 rounded-full bg-white/5 animate-pulse" style={{ animationDuration: '3s' }} />
                  <div className="absolute h-48 w-48 rounded-full bg-white/10 animate-pulse" style={{ animationDuration: '2s' }} />
                  <div className="absolute h-32 w-32 rounded-full bg-white/20 animate-pulse" style={{ animationDuration: '4s' }} />
                  
                  {/* Icons grid */}
                  <div className="relative grid grid-cols-2 gap-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/20">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/20">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/20">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/20">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards with animations */}
              <div className="absolute -right-4 top-8 hidden animate-in slide-in-from-right fade-in duration-1000 delay-[1500ms] lg:block">
                <div className="rounded-2xl border border-slate-200/50 bg-white p-4 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16A085]/10 animate-pulse">
                      <BarChart3 className="h-5 w-5 text-[#16A085] dark:text-[#48C9B0]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Career Growth</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Track Progress</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 bottom-12 hidden animate-in slide-in-from-left fade-in duration-1000 delay-[1700ms] lg:block">
                <div className="rounded-2xl border border-slate-200/50 bg-white p-4 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-2xl dark:border-slate-700/50 dark:bg-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 animate-pulse" style={{ animationDuration: '2s' }}>
                      <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">Next Session</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">In 2 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Everything You Need to Succeed
            </h2>
            <p className={`mt-4 text-lg text-slate-600 dark:text-slate-300 transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              A comprehensive platform for anyone pursuing their dream career
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-700 hover:border-[#16A085]/20 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-[#48C9B0]/20 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#16A085]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-[#48C9B0]/5" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#16A085]/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#16A085] dark:bg-[#48C9B0]/10 dark:group-hover:bg-[#48C9B0]">
                  <feature.icon className="h-6 w-6 text-[#16A085] transition-all duration-500 group-hover:scale-110 group-hover:text-white dark:text-[#48C9B0] dark:group-hover:text-slate-900" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#16A085] dark:text-white dark:group-hover:text-[#48C9B0]">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Your Journey in 4 Simple Steps
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              From exploring your options to achieving your career dreams
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#16A085] to-[#1ABC9C] text-2xl font-bold text-white shadow-lg transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-2xl dark:from-[#48C9B0] dark:to-[#5FDDC1] dark:text-slate-900">
                    <span className="transition-transform duration-500 group-hover:scale-110">{index + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#16A085] dark:text-white dark:group-hover:text-[#48C9B0]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full animate-pulse bg-gradient-to-r from-[#0B5D4E] to-transparent lg:block dark:from-[#7EE7D5]" style={{ animationDuration: '3s' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B5D4E] to-[#09493f] dark:from-[#0B5D4E]/20 dark:to-[#09493f]/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-in slide-in-from-bottom fade-in duration-1000">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-[#7EE7D5]">
              Why Choose MPATH?
            </h2>
            <p className="mt-4 text-lg text-white/90 dark:text-slate-300">
              Join thousands of learners who are pursuing their passions and building successful careers with MPATH.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:bg-white/20 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white transition-transform duration-300 hover:scale-125 dark:text-[#7EE7D5]" />
                  <span className="text-left text-sm text-white/90 dark:text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B5D4E] via-[#0B5D4E] to-[#09493f] px-8 py-16 text-center shadow-2xl transition-all duration-700 hover:shadow-[#0B5D4E]/50 dark:from-[#7EE7D5]/20 dark:via-[#0B5D4E]/20 dark:to-[#09493f]/20">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" style={{ animation: 'shimmer 3s infinite' }} />
            
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white transition-all duration-500 group-hover:scale-105 sm:text-4xl dark:text-[#7EE7D5]">
                Ready to Start Your Career Journey?
              </h2>
              <p className="mt-4 text-lg text-white/90 transition-all duration-500 group-hover:scale-105 dark:text-slate-300">
                Join MPATH today and take the first step towards your dream career.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0B5D4E] transition-all duration-300 hover:scale-110 hover:shadow-2xl dark:bg-[#7EE7D5] dark:text-slate-900"
                >
                  <span className="relative z-10">Get Started Free</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-slate-100 to-white opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 dark:from-[#6dd4c1] dark:to-[#7EE7D5]" />
                </Link>
                <Link
                  href="/login"
                  className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white/20 hover:shadow-xl"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/newlogo.png"
                alt="MPATH Logo"
                width={100}
                height={33}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 MPATH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: BookOpen,
    title: "Personalized Learning",
    description: "Curated courses and learning paths tailored to your career goals and current skill level.",
  },
  {
    icon: Target,
    title: "Skill Assessments",
    description: "Comprehensive assessments to identify your strengths and areas for growth in your chosen field.",
  },
  {
    icon: TrendingUp,
    title: "Career Roadmap",
    description: "Clear, step-by-step guidance from where you are now to where you want to be in your career.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with industry professionals and get personalized advice for your career path.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn recognized certifications to validate your skills and boost your professional credibility.",
  },
  {
    icon: CheckCircle2,
    title: "Portfolio Builder",
    description: "Showcase your projects, achievements, and skills to stand out to potential employers.",
  },
];

const steps = [
  {
    title: "Create Account",
    description: "Sign up and tell us about your career aspirations",
  },
  {
    title: "Take Assessment",
    description: "Discover your strengths and identify your learning path",
  },
  {
    title: "Follow Your Path",
    description: "Learn with personalized courses, projects, and mentorship",
  },
  {
    title: "Achieve Your Goals",
    description: "Land your dream job or advance in your chosen career",
  },
];

const benefits = [
  "Industry-aligned curriculum across multiple career fields",
  "Real-world projects and hands-on learning experiences",
  "Interactive learning with immediate feedback and support",
  "Flexible learning schedule that adapts to your lifestyle",
  "Lifetime access to course materials and regular updates",
  "Career support and professional development guidance",
];
