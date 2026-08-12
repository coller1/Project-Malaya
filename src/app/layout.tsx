import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/components/app-wrapper";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MPATH - Your Career Journey",
  description: "Master your path to financial analyst success with personalized learning, assessments, and career guidance",
  icons: {
    icon: [
      { url: "/mpathlogo2.png", type: "image/png" }
    ],
    apple: [
      { url: "/mpathlogo2.png", type: "image/png" }
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/mpathlogo2.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/mpathlogo2.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
