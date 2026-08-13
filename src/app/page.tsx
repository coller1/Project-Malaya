"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Target, TrendingUp, Users, Award, CheckCircle2, Sparkles, BarChart3, Calendar } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState({ learners: 0, courses: 0, success: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Start counting animation after a brief delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
      
      // Animate learners count to 10000
      let learnerCount = 0;
      const learnersInterval = setInterval(() => {
        learnerCount += 250;
        if (learnerCount >= 10000) {
          learnerCount = 10000;
          clearInterval(learnersInterval);
        }
        setCounts(prev => ({ ...prev, learners: learnerCount }));
      }, 15);

      // Animate courses count to 500
      let courseCount = 0;
      const coursesInterval = setInterval(() => {
        courseCount += 12;
        if (courseCount >= 500) {
          courseCount = 500;
          clearInterval(coursesInterval);
        }
        setCounts(prev => ({ ...prev, courses: courseCount }));
      }, 15);

      // Animate success rate to 95
      let successCount = 0;
      const successInterval = setInterval(() => {
        successCount += 2;
        if (successCount >= 95) {
          successCount = 95;
          clearInterval(successInterval);
        }
        setCounts(prev => ({ ...prev, success: successCount }));
      }, 25);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#F5F1E8] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="relative z-50 w-full animate-in slide-in-from-top duration-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/newlogo.png"
              alt="MPATH Logo"
              width={300}
              height={100}
              className="h-20 w-auto sm:h-24 lg:h-28"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-700 transition-all hover:scale-105 hover:text-[#0B5D4E] dark:text-slate-300 dark:hover:text-[#0B5D4E]"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="group relative overflow-hidden rounded-full bg-[#0B5D4E] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#1FA89A] hover:shadow-lg hover:shadow-[#0B5D4E]/30 dark:bg-[#0B5D4E] dark:text-white dark:hover:bg-[#1FA89A] sm:px-6"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 sm:py-12">
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1FA89A]/5 blur-3xl transition-all duration-1000 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
          <div className={`absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#F5B52E]/5 blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
          {/* Floating orbs */}
          <div className="absolute left-1/4 top-1/3 h-2 w-2 animate-ping rounded-full bg-[#1FA89A]/30" style={{ animationDuration: '3s' }} />
          <div className="absolute right-1/3 top-1/2 h-3 w-3 animate-pulse rounded-full bg-[#F5B52E]/20" style={{ animationDuration: '4s' }} />
          <div className="absolute left-1/2 bottom-1/4 h-2 w-2 animate-ping rounded-full bg-[#6D28D9]/30" style={{ animationDuration: '5s' }} />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={`flex flex-col justify-center transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1FA89A]/20 bg-[#1FA89A]/10 px-4 py-2 text-sm font-medium text-[#0B5D4E] dark:border-[#1FA89A]/30 dark:bg-[#1FA89A]/10 dark:text-[#1FA89A] w-fit animate-in slide-in-from-left duration-700 delay-200">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Empowering Filipino Learners
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                <span className="inline-block animate-in slide-in-from-left duration-700 delay-300">Learn. Grow.</span>
                <br />
                <span className="inline-block animate-in slide-in-from-left duration-700 delay-500">Connect.{" "}</span>
                <span className="inline-block animate-in slide-in-from-left duration-700 delay-700 text-[#6D28D9] dark:text-[#6D28D9]">
                  Thrive.
                </span>
              </h1>
              
              {/* Warm Gold Line */}
              <div className="mt-6 h-1 w-24 bg-[#F5B52E] rounded-full"></div>
              
              <p className={`mt-6 text-lg text-slate-600 dark:text-slate-300 transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Empowering Filipino learners with skills, opportunities, and pathways to a better future.
              </p>
              <div className={`mt-8 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/register"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0B5D4E] px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-[#1FA89A] hover:shadow-2xl dark:bg-[#0B5D4E] dark:text-white dark:hover:bg-[#1FA89A]"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  Explore Pathways
                </Link>
              </div>

              {/* Warm Gold Line below buttons */}
              <div className="mt-8 h-1 w-24 bg-[#F5B52E] rounded-full"></div>

              <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-6">
                <div className={`animate-in fade-in zoom-in duration-700 delay-[900ms]`}>
                  <div className="text-3xl font-bold text-[#1FA89A] dark:text-[#1FA89A]">
                    {counts.learners >= 1000 ? `${Math.floor(counts.learners / 1000)}K+` : `${counts.learners}+`}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Active Learners</div>
                </div>
                <div className={`animate-in fade-in zoom-in duration-700 delay-[1100ms]`}>
                  <div className="text-3xl font-bold text-[#1FA89A] dark:text-[#1FA89A]">{counts.courses}+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Courses</div>
                </div>
                <div className={`animate-in fade-in zoom-in duration-700 delay-[1300ms]`}>
                  <div className="text-3xl font-bold text-[#1FA89A] dark:text-[#1FA89A]">{counts.success}%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Success Rate</div>
                </div>
              </div>
            </div>
            <div className={`relative flex items-center transition-all duration-1000 delay-300 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              {/* People image - match left content height */}
              <div className="relative w-full">
                <Image
                  src="/people.png"
                  alt="Students learning together"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Grow Connect Thrive Section - Below Hero */}
      <section className="relative py-0 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {/* LEARN */}
              <div className="flex flex-col items-center border-b border-slate-200 p-8 text-center transition-all hover:bg-slate-50 sm:border-b-0 sm:border-r dark:border-slate-700 dark:hover:bg-slate-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B5D4E]">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wider text-[#0B5D4E]">
                  LEARN
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Quality education and continuous skill development
                </p>
              </div>

              {/* GROW */}
              <div className="flex flex-col items-center border-b border-slate-200 p-8 text-center transition-all hover:bg-slate-50 sm:border-b-0 lg:border-r dark:border-slate-700 dark:hover:bg-slate-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#1FA89A]">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wider text-[#1FA89A]">
                  GROW
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Personal growth through meaningful experiences
                </p>
              </div>

              {/* CONNECT */}
              <div className="flex flex-col items-center border-b border-slate-200 p-8 text-center transition-all hover:bg-slate-50 sm:border-r lg:border-b-0 dark:border-slate-700 dark:hover:bg-slate-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#6D28D9]">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wider text-[#6D28D9]">
                  CONNECT
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Building community that supports each other
                </p>
              </div>

              {/* THRIVE */}
              <div className="flex flex-col items-center p-8 text-center transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F5B52E]">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wider text-[#F5B52E]">
                  THRIVE
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Achieve dreams and create lasting impact
                </p>
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
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-700 hover:border-[#1FA89A]/20 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-[#1FA89A]/20 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-[#1FA89A]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#1FA89A]/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#1FA89A]">
                  <feature.icon className="h-6 w-6 text-[#1FA89A] transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#1FA89A] dark:text-white dark:group-hover:text-[#1FA89A]">
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
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#1FA89A] text-2xl font-bold text-white shadow-lg transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-2xl dark:bg-[#1FA89A] dark:text-white">
                    <span className="transition-transform duration-500 group-hover:scale-110">{index + 1}</span>
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#1FA89A] dark:text-white dark:group-hover:text-[#1FA89A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full animate-pulse bg-[#1FA89A] lg:block" style={{ animationDuration: '3s' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-[#0B5D4E]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-in slide-in-from-bottom fade-in duration-1000">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-white">
              Why Choose MPATH?
            </h2>
            <p className="mt-4 text-lg text-white/90 dark:text-white/80">
              Join thousands of learners who are pursuing their passions and building successful careers with MPATH.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:bg-white/20 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white transition-transform duration-300 hover:scale-125 dark:text-white" />
                  <span className="text-left text-sm text-white/90 dark:text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-[#0B5D4E] px-8 py-16 text-center shadow-2xl transition-all duration-700 hover:shadow-[#0B5D4E]/50 dark:bg-[#0B5D4E]">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" style={{ animation: 'shimmer 3s infinite' }} />
            
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white transition-all duration-500 group-hover:scale-105 sm:text-4xl dark:text-white">
                Ready to Start Your Career Journey?
              </h2>
              <p className="mt-4 text-lg text-white/90 transition-all duration-500 group-hover:scale-105 dark:text-slate-300">
                Join MPATH today and take the first step towards your dream career.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0B5D4E] transition-all duration-300 hover:scale-110 hover:bg-[#0B5D4E] hover:text-white hover:shadow-2xl dark:bg-white dark:text-[#0B5D4E] dark:hover:bg-[#0B5D4E] dark:hover:text-white"
                >
                  <span className="relative z-10">Get Started Free</span>
                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
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
                src="/mpathlogo2.png"
                alt="MPATH Logo"
                width={200}
                height={67}
                className="h-12 w-auto sm:h-16"
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
