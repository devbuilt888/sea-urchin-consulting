import React from 'react';

const icons = [
  { icon: '💊', style: 'left-[10%] top-[15%] text-5xl animate-rotate-float-slow' },
  { icon: '🩺', style: 'left-[75%] top-[20%] text-6xl animate-rotate-float' },
  { icon: '🚚', style: 'left-[18%] top-[70%] text-4xl animate-rotate-float' },
  { icon: '🧪', style: 'left-[80%] top-[65%] text-5xl animate-rotate-float-slow' },
  { icon: '🏥', style: 'left-[40%] top-[30%] text-4xl animate-rotate-float' },
  { icon: '💉', style: 'left-[60%] top-[75%] text-5xl animate-rotate-float' },
  { icon: '👨‍⚕️', style: 'left-[30%] top-[80%] text-6xl animate-rotate-float-slow' },
  { icon: '🛒', style: 'left-[85%] top-[40%] text-4xl animate-rotate-float' },
];

export default function CuraCartPatternBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none">
      {icons.map((item, i) => (
        <span
          key={i}
          className={`absolute ${item.style} opacity-15 blur-[1px] drop-shadow-lg`}
          style={{
            animationDelay: `${i * 0.7}s`,
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
          }}
        >
          {item.icon}
        </span>
      ))}
      <style jsx>{`
        @keyframes rotate-float {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(180deg) translateY(-18px); }
          100% { transform: rotate(360deg) translateY(0); }
        }
        .animate-rotate-float {
          animation: rotate-float 15s linear infinite;
        }
        .animate-rotate-float-slow {
          animation: rotate-float 25s linear infinite;
        }
      `}</style>
    </div>
  );
} 