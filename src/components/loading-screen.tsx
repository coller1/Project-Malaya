"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar smoothly
    const duration = 3000; // 3 seconds (reduced from 5)
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
      }
      setProgress(currentProgress);
    }, interval);

    // Start fade out animation after loading completes
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3200); // Start fading at 3.2 seconds

    // Remove component completely after fade out
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3700); // Remove at 3.7 seconds

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#E8F7F3] to-white dark:from-slate-950 dark:to-slate-900 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#0B5D4E]/10 blur-3xl animate-pulse" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#1FA89A]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D28D9]/5 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with scale animation */}
        <div className="animate-logo-scale" style={{ animationDuration: '2.5s' }}>
          <div className="relative h-40 w-40 sm:h-48 sm:w-48">
            <Image
              src="/mpathlogo2.png"
              alt="MPATH Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading bar with JavaScript-driven progress */}
        <div className="w-64 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-[#1FA89A] to-[#0B5D4E] transition-all duration-100 ease-linear" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Loading text */}
        <div className="animate-fade-in text-center" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Welcome to MPATH
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Your journey to success starts here
          </p>
        </div>
      </div>
    </div>
  );
}
