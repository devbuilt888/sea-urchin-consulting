import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center font-sans p-4 overflow-hidden" style={{ background: 'radial-gradient(ellipse at 60% 40%, #a259e6 0%, #6d28d9 60%, #a21caf 100%)' }}>
      {/* Animated pastel blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] bg-pink-200 rounded-full blur-3xl opacity-60 animate-blob1 z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-50 animate-blob2 z-0" />
      <div className="absolute top-1/2 left-[-80px] w-[180px] h-[180px] bg-yellow-100 rounded-full blur-2xl opacity-40 animate-blob3 z-0" />
      {/* Floating emoji/SVGs */}
      <span className="absolute left-16 top-32 text-4xl animate-float z-10">✨</span>
      <span className="absolute right-24 top-40 text-4xl animate-float-slow z-10">🎨</span>
      <span className="absolute left-1/3 bottom-24 text-4xl animate-float z-10">💡</span>
      <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">🌈</span>
      {/* Animated sparkles */}
      <span className="absolute left-1/2 top-24 text-2xl animate-sparkle z-10">✨</span>
      <span className="absolute right-1/3 bottom-40 text-xl animate-sparkle-delay z-10">✨</span>
      {/* Main content */}
      <span className="text-6xl mb-6 animate-float relative z-10">🚀</span>
      <h1 className="inline-block animate-wiggle text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-lg relative z-10"><span className="inline-block animate-wiggle ">Welcome</span> to Your Modern Landing <span className="inline-block animate-wiggle">Pages</span></h1>
      <p className="text-lg text-white md:text-2xl text-gray-600 mb-10 text-center max-w-xl relative z-10">Create beautiful, effective landing pages for service businesses. Explore a live example below!</p>
      <div className="flex flex-col justify-evenly flex-wrap md:flex-row gap-4 relative z-10">
        <Link
          href="/passion-preneur/passionpreneur"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Passionpreneur Landing Page
        </Link>
        <Link
          href="/retailer-digital/retailer-digital"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Retailer Digital Landing Page
        </Link>
        <Link
          href="/solopreneur/solopreneur-portfolio"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Solopreneur Landing Page
        </Link>
        <Link
          href="/retiree-mvp"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Retiree MVP Landing Page
        </Link>
        <Link
          href="/local-services-modern"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Local Services Modern Landing Page
        </Link>
        <Link
          href="/retiree-membership"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Retiree Membership Landing Page
        </Link>
        <Link
          href="/midmarket-tech"
          className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Midmarket Tech Landing Page
        </Link>
        <Link
        href="/ops-logistics"
        className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Ops Consultant Landing Page
        </Link>
        <Link
        href="/fintech-innovators"
        className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Fintech Innovators Landing Page
        </Link>
        <Link
        href="/retail-ecommerce"
        className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Retail Ecommerce Landing Page
        </Link>
        <Link
        href="/healthcare-it"
        className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Healthcare IT Landing Page
        </Link>
        <Link
        href="/hr-peopleops"
        className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          HR PeopleOps Landing Page
        </Link>
        <Link
        href="/test-animations"
        className="px-2 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 font-semibold text-md text-center md:text-lg md:text-md md:px-8 md:py-4"
        >
          Test animations Landing Page
        </Link>
      </div>
    </main>
  );
}
