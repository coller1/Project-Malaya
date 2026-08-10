"use client";

import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Lock,
  PlayCircle,
  FileText,
  Clock,
  Award,
  Download,
  BookOpen
} from "lucide-react";

// Course data structure
const courseData = {
  id: 1,
  title: "Excel for Financial Modeling",
  instructor: "Michael Chen",
  totalLessons: 32,
  duration: "12 hours",
  level: "Intermediate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Financial Modeling",
      lessons: [
        { id: 1, title: "What is Financial Modeling?", duration: "8:30", completed: true, locked: false, type: "video" },
        { id: 2, title: "Excel Basics Review", duration: "12:45", completed: true, locked: false, type: "video" },
        { id: 3, title: "Setting Up Your Workspace", duration: "10:20", completed: true, locked: false, type: "video" },
        { id: 4, title: "Module 1 Quiz", duration: "10 min", completed: true, locked: false, type: "quiz" },
      ]
    },
    {
      id: 2,
      title: "Advanced Excel Functions",
      lessons: [
        { id: 5, title: "INDEX and MATCH Functions", duration: "15:30", completed: true, locked: false, type: "video" },
        { id: 6, title: "VLOOKUP and HLOOKUP", duration: "14:20", completed: false, locked: false, type: "video" },
        { id: 7, title: "Conditional Functions (IF, AND, OR)", duration: "18:45", completed: false, locked: false, type: "video" },
        { id: 8, title: "Practice Exercise", duration: "20 min", completed: false, locked: false, type: "exercise" },
        { id: 9, title: "Module 2 Quiz", duration: "15 min", completed: false, locked: false, type: "quiz" },
      ]
    },
    {
      id: 3,
      title: "Financial Statement Analysis",
      lessons: [
        { id: 10, title: "Building Income Statement Models", duration: "22:30", completed: false, locked: true, type: "video" },
        { id: 11, title: "Balance Sheet Modeling", duration: "25:15", completed: false, locked: true, type: "video" },
        { id: 12, title: "Cash Flow Statement", duration: "20:40", completed: false, locked: true, type: "video" },
        { id: 13, title: "Module 3 Quiz", duration: "20 min", completed: false, locked: true, type: "quiz" },
      ]
    },
    {
      id: 4,
      title: "Data Visualization & Dashboards",
      lessons: [
        { id: 14, title: "Creating Dynamic Charts", duration: "16:30", completed: false, locked: true, type: "video" },
        { id: 15, title: "Building Financial Dashboards", duration: "28:45", completed: false, locked: true, type: "video" },
        { id: 16, title: "Final Project", duration: "60 min", completed: false, locked: true, type: "project" },
      ]
    },
  ]
};

// Quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of financial modeling?",
    options: [
      "To create colorful spreadsheets",
      "To forecast financial performance and support decision-making",
      "To learn Excel shortcuts",
      "To impress colleagues"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which Excel function is best for looking up values in a table?",
    options: [
      "SUM",
      "AVERAGE",
      "VLOOKUP",
      "COUNT"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What does the INDEX-MATCH combination provide over VLOOKUP?",
    options: [
      "Slower performance",
      "More flexibility and ability to look left",
      "Simpler syntax",
      "Less accuracy"
    ],
    correctAnswer: 1
  },
];

export default function CourseLessonPage() {
  const [currentLessonId, setCurrentLessonId] = useState(6);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(true);

  // Find current lesson
  const getCurrentLesson = () => {
    for (const module of courseData.modules) {
      const lesson = module.lessons.find(l => l.id === currentLessonId);
      if (lesson) return { lesson, module };
    }
    return null;
  };

  const currentData = getCurrentLesson();
  const currentLesson = currentData?.lesson;
  const currentModule = currentData?.module;

  // Navigation
  const goToNextLesson = () => {
    const allLessons = courseData.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      if (!nextLesson.locked) {
        setCurrentLessonId(nextLesson.id);
        setShowQuiz(nextLesson.type === "quiz");
        setQuizSubmitted(false);
        setQuizAnswers({});
      }
    }
  };

  const goToPreviousLesson = () => {
    const allLessons = courseData.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
    if (currentIndex > 0) {
      const prevLesson = allLessons[currentIndex - 1];
      setCurrentLessonId(prevLesson.id);
      setShowQuiz(prevLesson.type === "quiz");
      setQuizSubmitted(false);
      setQuizAnswers({});
    }
  };

  const selectLesson = (lessonId: number, isLocked: boolean, lessonType: string) => {
    if (!isLocked) {
      setCurrentLessonId(lessonId);
      setShowQuiz(lessonType === "quiz");
      setQuizSubmitted(false);
      setQuizAnswers({});
    }
  };

  // Quiz functions
  const handleQuizAnswer = (questionId: number, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  if (!currentLesson) return <div>Lesson not found</div>;

  return (
    <div className="flex h-[calc(100vh-120px)] gap-6">
      {/* Main Content Area */}
      <div className="flex-1 space-y-4">
        {/* Course Header */}
        <div className="rounded-[24px] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {courseData.title}
              </h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                by {courseData.instructor}
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750">
              <Download className="h-4 w-4" />
              Resources
            </button>
          </div>
        </div>

        {/* Video/Content Player */}
        <div className="rounded-[24px] border border-slate-200 bg-white overflow-hidden dark:border-slate-800 dark:bg-slate-900">
          {!showQuiz ? (
            <>
              {/* Video Player Area */}
              <div className="relative aspect-video bg-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle className="mx-auto h-20 w-20 text-white/80 mb-4" />
                    <p className="text-white/90 text-lg font-medium">{currentLesson.title}</p>
                    <p className="text-white/60 text-sm mt-2">Duration: {currentLesson.duration}</p>
                  </div>
                </div>
              </div>

              {/* Lesson Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {currentLesson.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Module {currentModule?.id}: {currentModule?.title}
                    </p>
                  </div>
                  {currentLesson.completed && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F7F3] px-3 py-1 text-sm font-medium text-[#0B5D4E] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5]">
                      <CheckCircle2 className="h-4 w-4" />
                      Completed
                    </span>
                  )}
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                  <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">About this lesson</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    In this lesson, you'll learn advanced techniques for using VLOOKUP and HLOOKUP functions to retrieve data from tables. 
                    These are essential skills for financial modeling and data analysis.
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={goToPreviousLesson}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous Lesson
                  </button>
                  <button
                    onClick={goToNextLesson}
                    className="flex items-center gap-2 rounded-2xl bg-[#0B5D4E] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
                  >
                    Next Lesson
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Quiz View
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {currentLesson.title}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Test your understanding of {currentModule?.title}
                </p>
              </div>

              {!quizSubmitted ? (
                <div className="space-y-6">
                  {quizQuestions.map((q, qIndex) => (
                    <div key={q.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                      <p className="font-medium text-slate-900 dark:text-slate-100 mb-4">
                        {qIndex + 1}. {q.question}
                      </p>
                      <div className="space-y-3">
                        {q.options.map((option, index) => (
                          <label
                            key={index}
                            className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${
                              quizAnswers[q.id] === index
                                ? 'border-[#0B5D4E] bg-[#E8F7F3] dark:border-[#7EE7D5] dark:bg-[#0B5D4E]/20'
                                : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              checked={quizAnswers[q.id] === index}
                              onChange={() => handleQuizAnswer(q.id, index)}
                              className="h-4 w-4 text-[#0B5D4E] focus:ring-[#0B5D4E]"
                            />
                            <span className="text-sm text-slate-700 dark:text-slate-200">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="w-full rounded-2xl bg-[#0B5D4E] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#09493f] disabled:opacity-50 disabled:cursor-not-allowed dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
                  >
                    Submit Quiz
                  </button>
                </div>
              ) : (
                // Quiz Results
                <div className="space-y-6">
                  <div className="rounded-2xl border border-[#0B5D4E] bg-[#E8F7F3] p-8 text-center dark:border-[#7EE7D5] dark:bg-[#0B5D4E]/20">
                    <Award className="mx-auto h-16 w-16 text-[#0B5D4E] dark:text-[#7EE7D5] mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      Quiz Completed!
                    </h3>
                    <p className="text-4xl font-bold text-[#0B5D4E] dark:text-[#7EE7D5] mb-2">
                      {calculateScore()}%
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      You got {Object.values(quizAnswers).filter((ans, idx) => ans === quizQuestions[idx].correctAnswer).length} out of {quizQuestions.length} correct
                    </p>
                  </div>

                  {/* Review Answers */}
                  <div className="space-y-4">
                    {quizQuestions.map((q, qIndex) => {
                      const userAnswer = quizAnswers[q.id];
                      const isCorrect = userAnswer === q.correctAnswer;
                      
                      return (
                        <div key={q.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                          <p className="font-medium text-slate-900 dark:text-slate-100 mb-4">
                            {qIndex + 1}. {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((option, index) => {
                              const isUserAnswer = userAnswer === index;
                              const isCorrectAnswer = q.correctAnswer === index;
                              
                              return (
                                <div
                                  key={index}
                                  className={`flex items-center gap-3 rounded-xl border p-3 ${
                                    isCorrectAnswer
                                      ? 'border-[#0B5D4E] bg-[#E8F7F3] dark:border-[#7EE7D5] dark:bg-[#0B5D4E]/20'
                                      : isUserAnswer && !isCorrect
                                        ? 'border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-900/20'
                                        : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                                  }`}
                                >
                                  {isCorrectAnswer && <CheckCircle2 className="h-4 w-4 text-[#0B5D4E] dark:text-[#7EE7D5]" />}
                                  <span className="text-sm text-slate-700 dark:text-slate-200">{option}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={goToNextLesson}
                    className="w-full rounded-2xl bg-[#0B5D4E] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
                  >
                    Continue to Next Lesson
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Syllabus Sidebar */}
      <div className={`transition-all duration-300 ${isSyllabusOpen ? 'w-96' : 'w-12'}`}>
        <div className="sticky top-6 h-fit">
          {isSyllabusOpen ? (
            <div className="rounded-[24px] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              {/* Header */}
              <div className="border-b border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Course Content</h3>
                  </div>
                  <button
                    onClick={() => setIsSyllabusOpen(false)}
                    className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    {courseData.totalLessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {courseData.duration}
                  </span>
                </div>
              </div>

              {/* Modules & Lessons */}
              <div className="max-h-[calc(100vh-280px)] overflow-y-auto p-4">
                <div className="space-y-4">
                  {courseData.modules.map((module) => (
                    <div key={module.id} className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Module {module.id}: {module.title}
                      </h4>
                      <div className="space-y-1">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => selectLesson(lesson.id, lesson.locked, lesson.type)}
                            disabled={lesson.locked}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                              currentLessonId === lesson.id
                                ? 'bg-[#E8F7F3] text-[#0B5D4E] dark:bg-[#0B5D4E]/20 dark:text-[#7EE7D5]'
                                : lesson.locked
                                  ? 'cursor-not-allowed text-slate-400 dark:text-slate-600'
                                  : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex-shrink-0">
                              {lesson.locked ? (
                                <Lock className="h-4 w-4" />
                              ) : lesson.completed ? (
                                <CheckCircle2 className="h-4 w-4 text-[#0B5D4E] dark:text-[#7EE7D5]" />
                              ) : (
                                <Circle className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="truncate font-medium">{lesson.title}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-500">{lesson.duration}</p>
                            </div>
                            {lesson.type === "quiz" && (
                              <FileText className="h-4 w-4 text-[#6D28D9]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Footer */}
              <div className="border-t border-slate-200 p-4 dark:border-slate-700">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Course Progress</span>
                  <span className="font-semibold text-[#0B5D4E] dark:text-[#7EE7D5]">28%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-[#0B5D4E] dark:bg-[#7EE7D5] progress-bar-animated"
                    style={{ width: '28%' }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
