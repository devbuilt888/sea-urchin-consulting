import React from 'react';

// Modern Sacred Geometry Background
export default function YogaThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Modern cutting-edge gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20"></div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-violet-100/20"></div>
      
      {/* Full-screen subtle concentric circles pattern with animation */}
      <svg className="absolute inset-0 w-full h-full opacity-12 animate-pulse" viewBox="0 0 1400 900" style={{animationDuration: '8s'}}>
        {/* Minimal Flower of Life Pattern */}
        <defs>
          <pattern id="modernCircles" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <circle cx="70" cy="70" r="35" fill="none" stroke="#a855f7" strokeWidth="0.5"/>
            <circle cx="35" cy="40" r="35" fill="none" stroke="#ec4899" strokeWidth="0.5"/>
            <circle cx="105" cy="40" r="35" fill="none" stroke="#06b6d4" strokeWidth="0.5"/>
            <circle cx="35" cy="100" r="35" fill="none" stroke="#10b981" strokeWidth="0.5"/>
            <circle cx="105" cy="100" r="35" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
            <circle cx="0" cy="70" r="35" fill="none" stroke="#f59e0b" strokeWidth="0.3"/>
            <circle cx="140" cy="70" r="35" fill="none" stroke="#8b5cf6" strokeWidth="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#modernCircles)"/>
      </svg>

      {/* Lotus Mandala 1 - Top Left (Purple) */}
      <div className="absolute top-16 left-8 w-64 h-64 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin" style={{animationDuration: '180s'}}>
          <g transform="translate(200,200)">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M 0,-70 Q -35,-35 0,0 Q 35,-35 0,-70"
                fill="url(#modernLotusGradient)"
                transform={`rotate(${i * 45})`}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="modernLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf4ff"/>
              <stop offset="40%" stopColor="#e879f9"/>
              <stop offset="80%" stopColor="#a855f7"/>
              <stop offset="100%" stopColor="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lotus Mandala 2 - Top Right (Golden) */}
      <div className="absolute top-20 right-12 w-56 h-56 opacity-18">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin" style={{animationDuration: '240s', animationDirection: 'reverse'}}>
          <g transform="translate(200,200)">
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d="M 0,-60 Q -25,-30 0,0 Q 25,-30 0,-60"
                fill="url(#modernLotusGradient2)"
                transform={`rotate(${i * 30})`}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="modernLotusGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef7cd"/>
              <stop offset="40%" stopColor="#fde047"/>
              <stop offset="80%" stopColor="#eab308"/>
              <stop offset="100%" stopColor="#ca8a04"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lotus Mandala 3 - Bottom Left (Cyan/Blue) */}
      <div className="absolute bottom-32 left-16 w-72 h-72 opacity-12">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-pulse" style={{animationDuration: '12s'}}>
          <g transform="translate(200,200)">
            {[...Array(16)].map((_, i) => (
              <path
                key={i}
                d="M 0,-80 Q -30,-40 0,0 Q 30,-40 0,-80"
                fill="url(#centerLotusGradient)"
                transform={`rotate(${i * 22.5})`}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="centerLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0f9ff"/>
              <stop offset="50%" stopColor="#7dd3fc"/>
              <stop offset="100%" stopColor="#0ea5e9"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lotus Mandala 4 - Bottom Right (Emerald Green) */}
      <div className="absolute bottom-20 right-8 w-60 h-60 opacity-16">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin" style={{animationDuration: '200s'}}>
          <g transform="translate(200,200)">
            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                d="M 0,-65 Q -30,-32 0,0 Q 30,-32 0,-65"
                fill="url(#emeraldLotusGradient)"
                transform={`rotate(${i * 36})`}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="emeraldLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0fdf4"/>
              <stop offset="40%" stopColor="#86efac"/>
              <stop offset="80%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lotus Mandala 5 - Mid Right (Rose/Coral) */}
      <div className="absolute top-1/2 right-2 w-48 h-48 opacity-14" style={{transform: 'translateY(-50%)'}}>
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin" style={{animationDuration: '160s', animationDirection: 'reverse'}}>
          <g transform="translate(200,200)">
            {[...Array(14)].map((_, i) => (
              <path
                key={i}
                d="M 0,-55 Q -25,-27 0,0 Q 25,-27 0,-55"
                fill="url(#roseLotusGradient)"
                transform={`rotate(${i * 25.7})`}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="roseLotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff7ed"/>
              <stop offset="40%" stopColor="#fdba74"/>
              <stop offset="80%" stopColor="#ea580c"/>
              <stop offset="100%" stopColor="#c2410c"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CSS Animations for smooth floating */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
} 