import React from 'react';

// Geometric 3D Shapes Background
export default function GeometricThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-50"></div>
      
      {/* Animated geometric shapes */}
      
      {/* Floating Cubes */}
      <div className="absolute top-20 left-16 w-16 h-16 opacity-20 animate-float-slow">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg transform rotate-45 animate-spin-slow"></div>
      </div>
      
      <div className="absolute top-1/3 right-20 w-12 h-12 opacity-15 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg transform rotate-45 animate-spin-slow"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-32 w-20 h-20 opacity-25 animate-float-slow" style={{animationDelay: '4s'}}>
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg transform rotate-45 animate-spin-slow"></div>
      </div>

      {/* Triangular Prisms */}
      <div className="absolute top-1/4 left-1/3 w-14 h-14 opacity-18 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-0 h-0 border-l-7 border-r-7 border-b-14 border-l-transparent border-r-transparent border-b-emerald-500 animate-spin-slow shadow-lg"></div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-22 animate-float-slow" style={{animationDelay: '3s'}}>
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-rose-500 animate-spin-slow shadow-lg"></div>
      </div>
      
      <div className="absolute top-2/3 left-1/4 w-10 h-10 opacity-20 animate-float" style={{animationDelay: '5s'}}>
        <div className="w-0 h-0 border-l-5 border-r-5 border-b-10 border-l-transparent border-r-transparent border-b-yellow-500 animate-spin-slow shadow-lg"></div>
      </div>

      {/* Hexagonal Shapes */}
      <div className="absolute top-1/2 right-16 w-18 h-18 opacity-16 animate-float" style={{animationDelay: '2.5s'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <polygon 
            points="50,5 85,25 85,75 50,95 15,75 15,25" 
            fill="url(#hexGradient1)" 
            stroke="rgba(59, 130, 246, 0.5)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#1e40af"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-1/2 w-12 h-12 opacity-14 animate-float-slow" style={{animationDelay: '1.5s'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <polygon 
            points="50,5 85,25 85,75 50,95 15,75 15,25" 
            fill="url(#hexGradient2)" 
            stroke="rgba(168, 85, 247, 0.5)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Circular Orbs with 3D effect */}
      <div className="absolute top-16 right-1/3 w-24 h-24 opacity-12 animate-float" style={{animationDelay: '3.5s'}}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-300 via-teal-500 to-teal-700 shadow-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="absolute bottom-1/2 left-20 w-16 h-16 opacity-18 animate-float-slow" style={{animationDelay: '6s'}}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 shadow-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="absolute top-3/4 right-32 w-20 h-20 opacity-15 animate-float" style={{animationDelay: '0.5s'}}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-300 via-indigo-500 to-indigo-700 shadow-2xl animate-pulse-slow"></div>
      </div>

      {/* Diamond Shapes */}
      <div className="absolute top-1/3 left-1/6 w-14 h-14 opacity-20 animate-float-slow" style={{animationDelay: '4.5s'}}>
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 transform rotate-45 shadow-lg animate-spin-slow"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 w-10 h-10 opacity-16 animate-float" style={{animationDelay: '2.8s'}}>
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 shadow-lg animate-spin-slow"></div>
      </div>

      {/* Octagonal Shapes */}
      <div className="absolute top-1/2 left-1/3 w-16 h-16 opacity-14 animate-float" style={{animationDelay: '1.8s'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <polygon 
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" 
            fill="url(#octGradient1)" 
            stroke="rgba(251, 191, 36, 0.5)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="octGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Rectangular Prisms */}
      <div className="absolute bottom-1/3 left-1/4 w-18 h-12 opacity-22 animate-float-slow" style={{animationDelay: '3.2s'}}>
        <div className="w-full h-full bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg transform skew-x-12 animate-spin-slow"></div>
      </div>
      
      <div className="absolute top-2/3 right-1/4 w-14 h-10 opacity-19 animate-float" style={{animationDelay: '5.5s'}}>
        <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg transform skew-x-12 animate-spin-slow"></div>
      </div>

      {/* Star Shapes */}
      <div className="absolute top-1/4 right-1/3 w-12 h-12 opacity-17 animate-float" style={{animationDelay: '4.2s'}}>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <polygon 
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" 
            fill="url(#starGradient1)" 
            stroke="rgba(34, 197, 94, 0.5)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="starGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e"/>
              <stop offset="100%" stopColor="#16a34a"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Pyramid Shapes */}
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 opacity-21 animate-float-slow" style={{animationDelay: '6.5s'}}>
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 transform rotate-45 shadow-lg animate-spin-slow clip-path-triangle"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-16px) translateX(0px); }
          75% { transform: translateY(-8px) translateX(-4px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-12px) translateX(6px); }
          50% { transform: translateY(-24px) translateX(0px); }
          75% { transform: translateY(-12px) translateX(-6px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .border-l-7 { border-left-width: 28px; }
        .border-r-7 { border-right-width: 28px; }
        .border-b-14 { border-bottom-width: 56px; }
        .border-l-8 { border-left-width: 32px; }
        .border-r-8 { border-right-width: 32px; }
        .border-b-16 { border-bottom-width: 64px; }
        .border-l-5 { border-left-width: 20px; }
        .border-r-5 { border-right-width: 20px; }
        .border-b-10 { border-bottom-width: 40px; }
        .w-18 { width: 4.5rem; }
        .h-18 { height: 4.5rem; }
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
} 