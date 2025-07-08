'use client';

import React from 'react';

export default function CuraCartPatternBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] select-none overflow-hidden w-full h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0 z-[-1]"
        style={{ minWidth: '100vw', minHeight: '100vh' }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Subtle dot pattern background */}
        <rect width="1920" height="1080" fill="url(#dotBgPattern)" />

        {/* Rotating flower group */}
        <g className="rotate-flower" transform-origin="960 540">
          {/* Sacred geometry: Flower of Life pattern */}
          <g opacity="0.212">
            {[...Array(7)].map((_, i) => (
              <circle
                key={i}
                cx={960}
                cy={540}
                r={180 + i * 80}
                stroke="url(#chakraGradient)"
                strokeWidth={i % 2 === 0 ? 2.5 : 1.2}
                fill="none"
              />
            ))}
          </g>
          {/* Lotus petals (mandala style) */}
          <g opacity="18">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <ellipse
                  key={i}
                  cx={960}
                  cy={540}
                  rx={60}
                  ry={220}
                  fill="url(#lotusGradient)"
                  transform={`rotate(${angle} 960 540)`}
                  style={{ mixBlendMode: 'lighten' }}
                />
              );
            })}
          </g>
          {/* Lotus petals (mandala style) */}
          <g opacity="18">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <ellipse
                  key={i}
                  cx={1960}
                  cy={940}
                  rx={160}
                  ry={1220}
                  fill="url(#lotusGradient)"
                  transform={`rotate(${angle} 960 540)`}
                  style={{ mixBlendMode: 'lighten' }}
                />
              );
            })}
          </g>
          {/* Chakra/hospital cross at center */}
          <g opacity="0.6">
            <rect x={930} y={500} width={60} height={80} rx={18} fill="url(#crossGradient)" />
            <rect x={940} y={510} width={40} height={60} rx={12} fill="#fff" opacity="0.18" />
            <rect x={950} y={520} width={20} height={40} rx={6} fill="#818CF8" opacity="0.18" />
          </g>
          {/* Subtle mandala dots */}
          <g opacity="0.12">
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24;
              const r = 340;
              const x = 960 + r * Math.cos((angle * Math.PI) / 180);
              const y = 540 + r * Math.sin((angle * Math.PI) / 180);
              return <circle key={i} cx={x} cy={y} r={10} fill="url(#dotGradient)" />;
            })}
          </g>
        </g>

        {/* Gradients and pattern defs */}
        <defs>
          {/* Dot pattern for background */}
          <pattern id="dotBgPattern" patternUnits="userSpaceOnUse" width="40" height="40">
            <circle cx="20" cy="20" r="2.5" fill="#e0e7ff" opacity="0.18" />
          </pattern>
          <radialGradient id="chakraGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A5B4FC" />
            <stop offset="100%" stopColor="#F472B6" />
          </radialGradient>
          <radialGradient id="lotusGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#818CF8" />
          </radialGradient>
          <radialGradient id="crossGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#34D399" />
          </radialGradient>
          <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F9A8D4" />
            <stop offset="100%" stopColor="#A5B4FC" />
          </radialGradient>
        </defs>

        {/* Add CSS animation style */}
        <style>{`
          .rotate-flower {
            animation: rotateFlower 60s linear infinite;
            transform-origin: 960px 540px;
          }
          @keyframes rotateFlower {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </svg>
    </div>
  );
}
