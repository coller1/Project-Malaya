export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute left-10 top-10 h-96 w-96 animate-float rounded-full bg-[#0B5D4E]/10 blur-2xl dark:bg-[#1FA89A]/10" />
      <div className="absolute right-10 top-32 h-[500px] w-[500px] animate-float rounded-full bg-[#1FA89A]/10 blur-2xl animation-delay-2000 dark:bg-[#0B5D4E]/10" />
      <div className="absolute bottom-20 left-1/4 h-[450px] w-[450px] animate-float rounded-full bg-[#6D28D9]/10 blur-2xl animation-delay-4000 dark:bg-[#6D28D9]/10" />
      <div className="absolute right-20 bottom-10 h-96 w-96 animate-float rounded-full bg-[#F5B52E]/10 blur-2xl animation-delay-6000 dark:bg-[#F5B52E]/10" />
    </div>
  );
}
