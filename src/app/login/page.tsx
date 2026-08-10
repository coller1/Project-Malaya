"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="relative hidden w-full lg:block lg:w-1/2">
          <Image
            src="/abea012d-2b4b-4d3f-8b91-91b76bbad804.png"
            alt="Auth illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        <div className="relative flex w-full items-center justify-center p-8 sm:p-12 lg:w-1/2 lg:p-16">
          {/* Background overlay image in lower part */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 overflow-hidden">
            <Image
              src="/image 15.png"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 w-full max-w-lg">
            {/* MPath Logo */}
            <div className="mb-2 flex justify-center">
              <Image
                src="/MPATH%20LOGO.png"
                alt="MPath logo"
                width={300}
                height={300}
                className="block h-auto w-full max-w-[300px] object-contain dark:hidden"
              />
              <Image
                src="/DARKMODE.png"
                alt="MPath logo dark"
                width={300}
                height={300}
                className="hidden h-auto w-full max-w-[300px] object-contain dark:block"
              />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">Welcome back</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Continue your learning journey and pick up where you left off.</p>

            <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-[#0B5D4E] focus:ring-[#0B5D4E] dark:border-slate-600 dark:bg-slate-800"
                  />
                  <span className="text-slate-600 dark:text-slate-300">Remember me</span>
                </label>
                <Link href="#" className="font-medium text-[#0B5D4E] hover:underline dark:text-[#7EE7D5]">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#0B5D4E] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
              >
                Sign in
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-50 px-4 text-slate-500 dark:bg-slate-950 dark:text-slate-400">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>

            <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-semibold text-[#0B5D4E] hover:underline dark:text-[#7EE7D5]">
                Create one
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
