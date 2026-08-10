"use client";

import { Bell, Moon, Search, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./sidebar";

export function Topbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.style.colorScheme = shouldUseDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="border-b border-slate-200 bg-slate-50 px-4 py-3 lg:px-6 lg:py-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile Menu + Title */}
        <div className="flex items-center gap-3">
          <MobileSidebar />
          <div>
            <p className="text-xs text-slate-700 lg:text-sm dark:text-slate-200">Monday, August 10</p>
            <h2 className="text-base font-semibold text-slate-900 lg:text-xl dark:text-slate-100">
              Dashboard overview
            </h2>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 lg:gap-3">
          {/* Search - Hidden on mobile */}
          <div className="hidden items-center gap-2 px-1 py-1 text-sm text-slate-700 md:flex dark:text-slate-200">
            <Search className="h-4 w-4" />
            <span>Search courses</span>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setIsDark((value) => !value)}
            className="p-2 text-slate-800 transition hover:text-slate-600 dark:text-slate-100"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Notifications */}
          <button className="p-2 text-slate-800 dark:text-slate-100">
            <Bell className="h-4 w-4" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-900 lg:h-9 lg:w-9 dark:bg-slate-100" />
            <div className="hidden flex-col sm:flex">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Alicia</p>
              <button className="text-left text-xs font-medium text-slate-600 hover:underline dark:text-slate-300">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
