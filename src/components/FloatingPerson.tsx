import { useEffect, useState } from 'react';

const reactions = [
  { min: 0, max: 300, emoji: '🧑‍💼', label: 'neutral' }, // Hero
  { min: 301, max: 900, emoji: '🤔', label: 'thinking' }, // Value prop
  { min: 901, max: 1500, emoji: '😮', label: 'amazed' }, // Features
  { min: 1501, max: 2200, emoji: '😃', label: 'happy' }, // How it works
  { min: 2201, max: 99999, emoji: '🎉', label: 'celebrate' }, // Lead form
];

export default function FloatingPerson() {
  const [scrollY, setScrollY] = useState(0);
  const [reaction, setReaction] = useState(reactions[0].emoji);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      const found = reactions.find(r => y >= r.min && y <= r.max);
      setReaction(found ? found.emoji : reactions[0].emoji);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating effect: base top + scroll-based offset + sine wave
  const baseTop = 120;
  const float = Math.sin(scrollY / 120) * 24;
  const top = baseTop + scrollY * 0.18 + float;
  const left = 'calc(100vw - 90px)';

  return (
    <div
      style={{
        position: 'fixed',
        top: `${top}px`,
        left,
        zIndex: 50,
        fontSize: '3.5rem',
        transition: 'top 0.2s cubic-bezier(.4,2,.6,1)',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
      }}
      aria-label="Floating Person"
    >
      <span role="img" aria-label="person-reaction">{reaction}</span>
    </div>
  );
} 