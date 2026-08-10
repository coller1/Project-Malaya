"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

const quotes = [
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Anonymous"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  }
];

export function InspirationalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0B5D4E] to-[#7CC7A2] dark:from-[#7EE7D5] dark:to-[#0B5D4E]">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold text-slate-900 dark:text-slate-100">
            Daily Inspiration
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="relative">
            <svg
              className="absolute -left-2 -top-2 h-8 w-8 text-[#0B5D4E]/20 dark:text-[#7EE7D5]/20"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.2L11 22h4v-3h3v-3h2l1.7-1.7c.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.5 0 1 .1 1.5.2l1.3-1.3C18.7 9.5 17.4 9 16 9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7c0-1.9-.8-3.7-2-4.9l-1.4 1.4c.9.9 1.4 2.1 1.4 3.5 0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5h.1L15.4 8H10z" />
            </svg>
            <p className="px-6 text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              "{quote.text}"
            </p>
            <svg
              className="absolute -bottom-2 -right-2 h-8 w-8 rotate-180 text-[#0B5D4E]/20 dark:text-[#7EE7D5]/20"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.2L11 22h4v-3h3v-3h2l1.7-1.7c.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.5 0 1 .1 1.5.2l1.3-1.3C18.7 9.5 17.4 9 16 9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7c0-1.9-.8-3.7-2-4.9l-1.4 1.4c.9.9 1.4 2.1 1.4 3.5 0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5h.1L15.4 8H10z" />
            </svg>
          </div>
          
          <p className="text-center text-sm font-medium text-[#0B5D4E] dark:text-[#7EE7D5]">
            — {quote.author}
          </p>

          <div className="rounded-2xl bg-gradient-to-r from-[#0B5D4E]/10 to-[#7CC7A2]/10 p-4 dark:from-[#7EE7D5]/10 dark:to-[#0B5D4E]/10">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              You're on the right path. Keep moving forward and trust the process. Every step counts! 🌟
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-2xl bg-[#0B5D4E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
          >
            Start My Day
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
