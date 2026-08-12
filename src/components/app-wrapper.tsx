"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./loading-screen";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Always show intro on every page load (even refreshes)
    // Comment out sessionStorage check to show animation every time
    /*
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (hasSeenIntro) {
      setIsLoading(false);
      setShowContent(true);
      return;
    }
    
    sessionStorage.setItem("hasSeenIntro", "true");
    */
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-300 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
