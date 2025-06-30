import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-50 to-pink-50 font-sans">
      {/* Floating icon */}
      <span className="text-6xl mb-6 animate-float">🚀</span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 text-center drop-shadow-lg">Welcome to Your Modern Landing Pages</h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-10 text-center max-w-xl">Create beautiful, effective landing pages for service businesses. Explore a live example below!</p>
      <Link
        href="/passionpreneur"
        className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg"
      >
        Passionpreneur Landing Page
      </Link>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
