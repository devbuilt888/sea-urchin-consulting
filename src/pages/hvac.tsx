import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HVACFanBackground from '../components/HVACFanBackground';

const hvacFeatures = [
  {
    icon: '📅',
    title: 'Maintenance Scheduling',
    desc: 'Automated seasonal maintenance reminders and service scheduling for all your clients'
  },
  {
    icon: '🌡️',
    title: 'System Diagnostics',
    desc: 'Digital forms and checklists for HVAC inspections and system health reports'
  },
  {
    icon: '📋',
    title: 'Contract Management',
    desc: 'Manage service contracts, warranty tracking, and recurring maintenance agreements'
  },
  {
    icon: '⚡',
    title: 'Energy Audits',
    desc: 'Built-in energy audit tools and efficiency reporting for customer recommendations'
  }
];

const pricing = [
  {
    name: 'Basic',
    price: '$399',
    period: '/month',
    features: [
      'Customer scheduling',
      'Basic invoicing',
      'Service reminders',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    features: [
      'Maintenance scheduling',
      'Contract management',
      'System diagnostics',
      'Energy audit tools',
      'SMS notifications',
      'QuickBooks sync',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$899',
    period: '/month',
    features: [
      'Multi-technician dispatch',
      'Advanced reporting',
      'Custom integrations',
      'Fleet management',
      'White-label options',
      'Dedicated support'
    ]
  }
];

export default function HVAC() {
  const [isFrozen, setIsFrozen] = useState(false);
  const [isThawing, setIsThawing] = useState(false);
  const [snowParticles, setSnowParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let freezeTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear existing timeouts
      clearTimeout(scrollTimeout);
      clearTimeout(freezeTimeout);

      // If we were frozen, start thawing
      if (isFrozen) {
        setIsThawing(true);
        setIsFrozen(false);
        
        // Create snow particles effect - more particles from card areas
        const particles = Array.from({ length: 30 }, (_, i) => {
          // Some particles come from feature card positions
          const isFromCard = i < 16; // First 16 particles come from cards
          let x, y;
          
          if (isFromCard) {
            // Approximate card positions (4 cards in a grid)
            const cardIndex = Math.floor(i / 4);
            const cardWidth = window.innerWidth / 4;
            x = (cardIndex * cardWidth) + (Math.random() * cardWidth * 0.8) + (cardWidth * 0.1);
            y = Math.random() * 300 + 400; // Around where feature cards are
          } else {
            x = Math.random() * window.innerWidth;
            y = Math.random() * window.innerHeight;
          }
          
          return { id: i, x, y };
        });
        setSnowParticles(particles);

        // Clear snow particles after animation
        setTimeout(() => {
          setSnowParticles([]);
          setIsThawing(false);
        }, 1500); // Slightly longer to match the gradual effect
      }

      // Set timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        // Start freezing process after 3 seconds of no scrolling (longer for gradual effect)
        freezeTimeout = setTimeout(() => {
          if (!isThawing) {
            setIsFrozen(true);
          }
        }, 3000);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(freezeTimeout);
    };
  }, [isFrozen, isThawing]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-100 to-white text-gray-900 font-sans relative overflow-x-hidden">
      <HVACFanBackground />
      
      {/* Freeze Overlay */}
      <div className={`fixed inset-0 pointer-events-none z-20 transition-all duration-3000 ${
        isFrozen ? 'freeze-overlay-active' : 'freeze-overlay-inactive'
      }`} />
      
      {/* Snow Particles */}
      {snowParticles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {snowParticles.map((particle) => (
            <div
              key={particle.id}
              className="snow-particle"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className={`relative z-10 transition-all duration-2000 ${
        isFrozen ? 'frozen-content' : ''
      }`}>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-900 rounded-full blur-3xl opacity-40 z-0" />
        
        <span className="absolute left-12 top-24 text-5xl animate-bounce z-10">❄️</span>
        <span className="absolute right-20 top-40 text-4xl animate-pulse z-10">🌡️</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-bounce z-10">📅</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-pulse z-10">⚡</span>
        
        <h1 className="text-5xl font-bold mb-6 max-w-3xl relative z-10 text-blue-900 drop-shadow windy-text-strong">
          Transform Your HVAC Business
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-blue-800 relative z-10 leading-relaxed windy-text">
          From seasonal maintenance to emergency repairs - manage your entire HVAC operation 
          with intelligent scheduling and automated customer communications.
        </p>
        <a
          href="#pricing"
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Start Your Free Trial
        </a>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900 windy-text-medium">
            HVAC-Specific Tools & Features
          </h2>
          <p className="text-xl text-center mb-12 text-blue-700 max-w-3xl mx-auto windy-text">
            Designed for heating, cooling, and ventilation professionals
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hvacFeatures.map((feature, _idx) => (
              <div
                key={feature.title}
                className={`bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-400 feature-card ${
                  isFrozen ? 'feature-card-frozen' : ''
                }`}
                style={{ 
                  '--freeze-delay': `${_idx * 0.8}s`,
                  '--card-index': _idx 
                } as React.CSSProperties}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900 windy-text-medium">
            Pricing Built for HVAC Companies
          </h2>
          <p className="text-xl text-center mb-12 text-blue-700 windy-text">
            Scale with your business, from solo contractors to large teams
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, _idx) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-blue-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-3 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{plan.name}</h3>
                  <div className="mb-6">
                                          <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Never Miss Another Seasonal Opportunity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Winter Prep</h3>
              <p className="text-blue-800">
                Automated reminders for furnace maintenance, filter changes, and heating system checks before the cold season hits.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Summer Ready</h3>
              <p className="text-orange-800">
                AC tune-ups, coolant checks, and energy efficiency audits scheduled automatically for peak cooling season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
                      <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
            <h3 className="text-3xl font-bold text-center mb-4 text-blue-900">
              Ready to Streamline Your HVAC Operations?
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Schedule a demo and see how our platform can help you manage seasonal workflows and grow your business
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Team Size</option>
                <option value="solo">Solo contractor</option>
                <option value="small">2-5 technicians</option>
                <option value="medium">6-15 technicians</option>
                <option value="large">16+ technicians</option>
              </select>
              <textarea
                placeholder="What's your biggest HVAC business challenge?"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Get My Custom Demo
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Free consultation with HVAC industry experts. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/local-services-modern"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Service Selection
          </Link>
        </div>
      </section>
      </div>
      
      {/* Windy Text CSS Animations */}
      <style jsx>{`
        @keyframes windyGust {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          10% { transform: translateX(3px) translateY(-1px) rotate(0.5deg); }
          20% { transform: translateX(-2px) translateY(1px) rotate(-0.3deg); }
          30% { transform: translateX(4px) translateY(-2px) rotate(0.7deg); }
          40% { transform: translateX(-1px) translateY(2px) rotate(-0.2deg); }
          50% { transform: translateX(2px) translateY(-1px) rotate(0.4deg); }
          60% { transform: translateX(-3px) translateY(1px) rotate(-0.5deg); }
          70% { transform: translateX(1px) translateY(-2px) rotate(0.3deg); }
          80% { transform: translateX(-2px) translateY(1px) rotate(-0.4deg); }
          90% { transform: translateX(1px) translateY(-1px) rotate(0.2deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        }

        @keyframes windyGustMedium {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          12% { transform: translateX(5px) translateY(-2px) rotate(0.8deg); }
          25% { transform: translateX(-3px) translateY(2px) rotate(-0.5deg); }
          38% { transform: translateX(6px) translateY(-3px) rotate(1deg); }
          50% { transform: translateX(-2px) translateY(3px) rotate(-0.3deg); }
          62% { transform: translateX(4px) translateY(-2px) rotate(0.6deg); }
          75% { transform: translateX(-4px) translateY(2px) rotate(-0.7deg); }
          88% { transform: translateX(2px) translateY(-3px) rotate(0.4deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        }

        @keyframes windyGustStrong {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          8% { transform: translateX(8px) translateY(-3px) rotate(1.2deg); }
          16% { transform: translateX(-5px) translateY(3px) rotate(-0.8deg); }
          24% { transform: translateX(9px) translateY(-4px) rotate(1.5deg); }
          32% { transform: translateX(-3px) translateY(4px) rotate(-0.5deg); }
          40% { transform: translateX(6px) translateY(-3px) rotate(1deg); }
          48% { transform: translateX(-6px) translateY(3px) rotate(-1deg); }
          56% { transform: translateX(4px) translateY(-4px) rotate(0.7deg); }
          64% { transform: translateX(-7px) translateY(2px) rotate(-1.2deg); }
          72% { transform: translateX(5px) translateY(-2px) rotate(0.8deg); }
          80% { transform: translateX(-4px) translateY(3px) rotate(-0.6deg); }
          88% { transform: translateX(3px) translateY(-3px) rotate(0.5deg); }
          96% { transform: translateX(-2px) translateY(2px) rotate(-0.3deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        }

        .windy-text {
          animation: windyGust 4.5s ease-in-out infinite;
          animation-delay: 0.2s;
          transform-origin: center;
        }

        .windy-text-medium {
          animation: windyGustMedium 3.8s ease-in-out infinite;
          animation-delay: 0.5s;
          transform-origin: center;
        }

        .windy-text-strong {
          animation: windyGustStrong 3.2s ease-in-out infinite;
          animation-delay: 0s;
          transform-origin: center;
        }

        /* Add slight randomization to elements */
        .windy-text:nth-child(2n) {
          animation-delay: 1.2s;
          animation-duration: 4.8s;
        }

        .windy-text-medium:nth-child(3n) {
          animation-delay: 0.8s;
          animation-duration: 4.1s;
        }

                 .windy-text-strong:nth-child(odd) {
           animation-delay: 0.3s;
           animation-duration: 3.5s;
         }

         /* Freeze Overlay Effects */
         .freeze-overlay-inactive {
           background: transparent;
           backdrop-filter: none;
         }

         .freeze-overlay-active {
           background: linear-gradient(
             135deg,
             rgba(173, 216, 230, 0.3) 0%,
             rgba(176, 196, 222, 0.4) 25%,
             rgba(135, 206, 235, 0.35) 50%,
             rgba(176, 224, 230, 0.3) 75%,
             rgba(173, 216, 230, 0.25) 100%
           );
           backdrop-filter: blur(1px) brightness(1.1) contrast(0.95);
         }

         /* Frozen Content Effects */
         .frozen-content {
           filter: hue-rotate(20deg) saturate(0.7) brightness(1.1);
         }

         .frozen-content * {
           text-shadow: 0 0 10px rgba(173, 216, 230, 0.5);
         }

         /* Snow Particles */
         @keyframes snowFall {
           0% {
             opacity: 1;
             transform: translateY(0px) rotate(0deg) scale(1);
           }
           100% {
             opacity: 0;
             transform: translateY(100px) rotate(360deg) scale(0.3);
           }
         }

         @keyframes snowShake {
           0%, 100% {
             transform: translateX(0px);
           }
           25% {
             transform: translateX(-3px);
           }
           75% {
             transform: translateX(3px);
           }
         }

         .snow-particle {
           position: absolute;
           width: 6px;
           height: 6px;
           background: radial-gradient(
             circle,
             rgba(255, 255, 255, 0.9) 0%,
             rgba(173, 216, 230, 0.7) 50%,
             rgba(176, 224, 230, 0.5) 100%
           );
           border-radius: 50%;
           animation: snowFall 1s ease-out forwards, snowShake 0.2s ease-in-out 3;
           box-shadow: 
             0 0 6px rgba(255, 255, 255, 0.8),
             0 0 12px rgba(173, 216, 230, 0.4);
         }

         .snow-particle:nth-child(odd) {
           animation-delay: 0.1s;
           animation-duration: 1.2s, 0.25s;
         }

         .snow-particle:nth-child(even) {
           animation-delay: 0.05s;
           animation-duration: 0.8s, 0.15s;
         }

         .snow-particle:nth-child(3n) {
           width: 8px;
           height: 8px;
           animation-duration: 1.5s, 0.3s;
         }

         .snow-particle:nth-child(4n) {
           width: 4px;
           height: 4px;
           animation-duration: 0.6s, 0.1s;
         }

         /* Feature Card Progressive Freeze Effects */
         .feature-card {
           position: relative;
           overflow: hidden;
         }

         .feature-card::before {
           content: '';
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: linear-gradient(
             180deg,
             rgba(173, 216, 230, 0.7) 0%,
             rgba(176, 196, 222, 0.6) 25%,
             rgba(135, 206, 235, 0.5) 50%,
             rgba(176, 224, 230, 0.4) 75%,
             rgba(173, 216, 230, 0.3) 100%
           );
           opacity: 0;
           transform: translateY(-100%);
           transition: all 4s ease-in-out;
           transition-delay: var(--freeze-delay);
           pointer-events: none;
           border-radius: 1rem;
         }

         .feature-card-frozen::before {
           opacity: 1;
           transform: translateY(0%);
         }

         .feature-card-frozen {
           background: linear-gradient(
             180deg,
             rgba(255, 255, 255, 0.95) 0%,
             rgba(240, 248, 255, 0.9) 50%,
             rgba(230, 245, 255, 0.85) 100%
           );
           transition: all 4s ease-in-out;
           transition-delay: var(--freeze-delay);
         }

         .feature-card-frozen * {
           color: rgba(30, 58, 138, 0.8) !important;
           text-shadow: 0 0 8px rgba(173, 216, 230, 0.6);
           transition: all 4s ease-in-out;
           transition-delay: var(--freeze-delay);
         }

         .feature-card-frozen .text-5xl {
           filter: hue-rotate(180deg) saturate(0.5) brightness(1.2);
           transition: all 4s ease-in-out;
           transition-delay: var(--freeze-delay);
         }

         /* Ice crystals effect on frozen cards */
         .feature-card-frozen::after {
           content: '';
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background-image: 
             radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
             radial-gradient(circle at 80% 30%, rgba(173, 216, 230, 0.4) 1px, transparent 1px),
             radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.2) 3px, transparent 3px),
             radial-gradient(circle at 90% 80%, rgba(176, 224, 230, 0.3) 2px, transparent 2px),
             radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.25) 2px, transparent 2px);
           background-size: 50px 50px, 30px 30px, 40px 40px, 25px 25px, 35px 35px;
           opacity: 0;
           animation: iceFormation 4s ease-in-out forwards;
           animation-delay: calc(var(--freeze-delay) + 2s);
           pointer-events: none;
           border-radius: 1rem;
         }

         @keyframes iceFormation {
           0% {
             opacity: 0;
             transform: scale(0.8);
           }
           50% {
             opacity: 0.6;
             transform: scale(1.05);
           }
           100% {
             opacity: 0.8;
             transform: scale(1);
           }
         }

         /* Progressive freeze wave effect */
         @keyframes freezeWave {
           0% {
             transform: translateY(-100%) scaleY(0);
           }
           50% {
             transform: translateY(-50%) scaleY(0.5);
           }
           100% {
             transform: translateY(0%) scaleY(1);
           }
         }

         .feature-card-frozen::before {
           animation: freezeWave 4s ease-in-out forwards;
           animation-delay: var(--freeze-delay);
         }

         /* Thawing effect when scrolling resumes */
         .feature-card:not(.feature-card-frozen) {
           animation: thawShake 0.6s ease-in-out;
         }

         @keyframes thawShake {
           0%, 100% {
             transform: translateX(0) translateY(0) rotate(0deg);
           }
           10% {
             transform: translateX(-2px) translateY(-1px) rotate(-0.5deg);
           }
           20% {
             transform: translateX(2px) translateY(1px) rotate(0.5deg);
           }
           30% {
             transform: translateX(-1px) translateY(-2px) rotate(-0.3deg);
           }
           40% {
             transform: translateX(1px) translateY(2px) rotate(0.3deg);
           }
           50% {
             transform: translateX(-1px) translateY(-1px) rotate(-0.2deg);
           }
           60% {
             transform: translateX(1px) translateY(1px) rotate(0.2deg);
           }
           70% {
             transform: translateX(-0.5px) translateY(-0.5px) rotate(-0.1deg);
           }
           80% {
             transform: translateX(0.5px) translateY(0.5px) rotate(0.1deg);
           }
           90% {
             transform: translateX(0) translateY(0) rotate(0deg);
           }
         }

         /* Enhanced ice crystal patterns for gradual freeze */
         .feature-card-frozen::after {
           background-image: 
             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.4) 1px, transparent 2px),
             radial-gradient(circle at 85% 25%, rgba(173, 216, 230, 0.5) 1px, transparent 1px),
             radial-gradient(circle at 35% 65%, rgba(255, 255, 255, 0.3) 2px, transparent 3px),
             radial-gradient(circle at 75% 75%, rgba(176, 224, 230, 0.4) 1px, transparent 2px),
             radial-gradient(circle at 25% 85%, rgba(255, 255, 255, 0.35) 1px, transparent 2px),
             radial-gradient(circle at 65% 45%, rgba(173, 216, 230, 0.3) 2px, transparent 3px),
             radial-gradient(circle at 45% 25%, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
             radial-gradient(circle at 85% 85%, rgba(176, 224, 230, 0.35) 1px, transparent 2px);
           background-size: 40px 40px, 25px 25px, 35px 35px, 20px 20px, 30px 30px, 45px 45px, 28px 28px, 22px 22px;
         }
       `}</style>
    </main>
  );
} 