import React from 'react';
import Link from 'next/link';

const landscapeFeatures = [
  {
    icon: '📋',
    title: 'Project Planning',
    desc: 'Visual project timelines, material lists, and crew scheduling for landscaping jobs'
  },
  {
    icon: '🌿',
    title: 'Seasonal Scheduling',
    desc: 'Automated scheduling for spring cleanups, summer maintenance, and fall preparations'
  },
  {
    icon: '🚜',
    title: 'Equipment Tracking',
    desc: 'Track mowers, tools, and equipment across job sites with maintenance reminders'
  },
  {
    icon: '📸',
    title: 'Photo Documentation',
    desc: 'Before/after photos with client approval workflows and progress tracking'
  }
];

const services = [
  {
    title: 'Lawn Care',
    icon: '🌱',
    description: 'Weekly mowing, fertilization, and lawn maintenance services',
    color: 'bg-green-100'
  },
  {
    title: 'Landscape Design',
    icon: '🎨',
    description: 'Custom garden design, plant selection, and installation projects',
    color: 'bg-blue-100'
  },
  {
    title: 'Hardscaping',
    icon: '🪨',
    description: 'Patios, walkways, retaining walls, and outdoor living spaces',
    color: 'bg-gray-100'
  },
  {
    title: 'Tree Services',
    icon: '🌳',
    description: 'Tree trimming, removal, and plant health care services',
    color: 'bg-amber-100'
  }
];

const pricing = [
  {
    name: 'Starter',
    price: '$349',
    period: '/month',
    features: [
      'Route planning',
      'Basic scheduling',
      'Customer management',
      'Simple invoicing',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '$549',
    period: '/month',
    features: [
      'Seasonal scheduling',
      'Equipment tracking',
      'Photo documentation',
      'Project management',
      'Crew coordination',
      'QuickBooks sync',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$849',
    period: '/month',
    features: [
      'Multi-location support',
      'Advanced reporting',
      'Custom workflows',
      'Fleet management',
      'Client portal access',
      'API integrations',
      'Dedicated support'
    ]
  }
];

export default function Landscapers() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative overflow-x-hidden">
      {/* Tall Grass Background */}
      <div className="grass-field fixed inset-0 z-0 pointer-events-none">
        {/* Generate multiple grass blades */}
                {Array.from({ length: 120 }, (_, i) => {
          const grassX = Math.random() * 100;
          return (
            <div
              key={i}
              className="grass-blade"
              style={{
                '--grass-height': `${Math.random() * 80 + 60}px`,
                '--grass-width': `${Math.random() * 4 + 2}px`,
                '--grass-left': `${grassX}%`,
                '--grass-delay': Math.random() * 4,
                '--grass-intensity': Math.random() * 8 + 3,
                '--grass-hue': Math.random() * 40 + 100,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Overlaying Foreground Grass */}
      <div className="grass-field-overlay fixed inset-0 z-50 pointer-events-none">
        {/* Generate foreground grass blades */}
                {Array.from({ length: 80 }, (_, i) => {
          const grassX = Math.random() * 100;
          return (
            <div
              key={`overlay-${i}`}
              className="grass-blade-overlay"
              style={{
                '--grass-height': `${Math.random() * 120 + 80}px`,
                '--grass-width': `${Math.random() * 6 + 3}px`,
                '--grass-left': `${grassX}%`,
                '--grass-delay': Math.random() * 6,
                '--grass-intensity': Math.random() * 12 + 8,
                '--grass-hue': Math.random() * 30 + 110,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-100 via-emerald-200 to-emerald-900 rounded-full blur-3xl opacity-40 z-0" />
        
        <span className="absolute left-12 top-24 text-5xl animate-bounce z-10">🌱</span>
        <span className="absolute right-20 top-40 text-4xl animate-pulse z-10">🌿</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-bounce z-10">🚜</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-pulse z-10">📸</span>
        
        <h1 className="text-5xl font-bold mb-6 max-w-3xl relative z-10 text-green-800 drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0, 100, 0, 0.3)'}}>
          Grow Your Landscaping Business
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-green-700 relative z-10 leading-relaxed" style={{textShadow: '0 1px 2px rgba(0, 100, 0, 0.2)'}}>
          From seasonal cleanups to major installations - manage your entire landscaping operation 
          with smart scheduling, crew coordination, and project tracking.
        </p>
        <a
          href="#pricing"
          className="px-8 py-4 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Start Growing Today
        </a>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">
            Services We Support
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, _idx) => (
              <div
                key={service.title}
                className={`${service.color} rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200`}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-800" style={{textShadow: '0 2px 4px rgba(0, 100, 0, 0.25)'}}>
            Built for Landscape Professionals
          </h2>
          <p className="text-xl text-center mb-12 text-green-700 max-w-3xl mx-auto" style={{textShadow: '0 1px 2px rgba(0, 100, 0, 0.15)'}}>
            Tools designed specifically for outdoor service businesses
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landscapeFeatures.map((feature, _idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-emerald-400"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-800" style={{textShadow: '0 1px 2px rgba(0, 100, 0, 0.2)'}}>{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Focus */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800" style={{textShadow: '0 2px 4px rgba(0, 100, 0, 0.25)'}}>
            Seasonal Workflow Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-xl p-6">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-semibold mb-3 text-pink-900">Spring</h3>
              <p className="text-pink-800">
                Cleanup scheduling, mulch delivery coordination, and planting project management.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-900">Summer</h3>
              <p className="text-yellow-800">
                Automated mowing schedules, irrigation management, and maintenance tracking.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Fall</h3>
              <p className="text-orange-800">
                Leaf cleanup coordination, winterization services, and equipment storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-800" style={{textShadow: '0 2px 4px rgba(0, 100, 0, 0.25)'}}>
            Plans That Scale With Your Business
          </h2>
          <p className="text-xl text-center mb-12 text-green-700" style={{textShadow: '0 1px 2px rgba(0, 100, 0, 0.15)'}}>
            From solo landscapers to large landscape companies
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, _idx) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-emerald-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-emerald-600 text-white text-center py-3 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-emerald-900">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-600">
            <h3 className="text-3xl font-bold text-center mb-4 text-emerald-900">
              Ready to Streamline Your Landscape Business?
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Get a personalized demo tailored to your specific landscaping services and team size
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Primary Service Type</option>
                <option value="lawn-care">Lawn Care & Maintenance</option>
                <option value="design">Landscape Design & Installation</option>
                <option value="hardscape">Hardscaping & Outdoor Living</option>
                <option value="tree-service">Tree & Plant Services</option>
                <option value="full-service">Full-Service Landscaping</option>
              </select>
              <textarea
                placeholder="Tell us about your biggest landscaping business challenge"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
              >
                Schedule My Demo
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Free consultation with landscaping industry specialists. No pressure, just solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/local-services-modern"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            ← Back to Service Selection
          </Link>
        </div>
      </section>
      </div>

      {/* Grass Animation Styles */}
      <style jsx>{`
        .grass-field {
          bottom: 0;
          height: 100vh;
          background: linear-gradient(
            to top,
            rgba(34, 139, 34, 0.1) 0%,
            rgba(50, 155, 50, 0.05) 30%,
            transparent 60%
          );
        }

                 .grass-blade {
           position: absolute;
           bottom: 0;
           left: var(--grass-left);
           width: var(--grass-width);
           height: var(--grass-height);
           background: linear-gradient(
             to top,
             hsl(var(--grass-hue), 60%, 25%) 0%,
             hsl(var(--grass-hue), 70%, 35%) 40%,
             hsl(var(--grass-hue), 80%, 45%) 80%,
             hsl(var(--grass-hue), 90%, 55%) 100%
           );
           border-radius: 50% 50% 50% 50% / 10% 10% 90% 90%;
           transform-origin: bottom center;
           opacity: 0.6;
           will-change: transform;
           backface-visibility: hidden;
         }

         /* Simplified wind effect - better performance */
         .grass-blade {
           animation: grassSimpleWave 6s ease-in-out infinite;
           animation-delay: calc(var(--grass-delay) * 1s);
         }

                 /* Simple wave animation - performance optimized */
         @keyframes grassSimpleWave {
           0%, 100% {
             transform: rotate(0deg) translateX(0px);
           }
           25% {
             transform: rotate(calc(var(--grass-intensity) * 0.5deg)) translateX(1px);
           }
           50% {
             transform: rotate(calc(var(--grass-intensity) * 0.8deg)) translateX(2px);
           }
           75% {
             transform: rotate(calc(var(--grass-intensity) * 0.3deg)) translateX(1px);
           }
         }

         /* Background grass height variations */
         .grass-blade:nth-child(4n) {
           height: calc(var(--grass-height) * 1.2);
           opacity: 0.5;
         }

         .grass-blade:nth-child(6n) {
           height: calc(var(--grass-height) * 0.7);
           opacity: 0.7;
         }

        /* Ensure content stays above grass */
        section {
          position: relative;
          z-index: 10;
        }

        

         /* Overlaying Foreground Grass Styles */
         .grass-field-overlay {
           bottom: 0;
           height: 100vh;
           background: transparent;
         }

         .grass-blade-overlay {
           position: absolute;
           bottom: 0;
           left: var(--grass-left);
           width: var(--grass-width);
           height: var(--grass-height);
           background: linear-gradient(
             to top,
             hsl(var(--grass-hue), 70%, 20%) 0%,
             hsl(var(--grass-hue), 80%, 30%) 30%,
             hsl(var(--grass-hue), 85%, 40%) 60%,
             hsl(var(--grass-hue), 90%, 50%) 85%,
             hsl(var(--grass-hue), 95%, 60%) 100%
           );
           border-radius: 50% 50% 50% 50% / 10% 10% 90% 90%;
           transform-origin: bottom center;
           opacity: 0.5;
           will-change: transform;
           backface-visibility: hidden;
         }

         /* Simplified overlay wind effect - better performance */
         .grass-blade-overlay {
           animation: grassOverlayWave 7s ease-in-out infinite;
           animation-delay: calc(var(--grass-delay) * 1s);
         }

         /* Simple overlay wave animation - performance optimized */
         
         @keyframes grassOverlayWave {
           0%, 100% {
             transform: rotate(0deg) translateX(0px);
           }
           30% {
             transform: rotate(calc(var(--grass-intensity) * 0.7deg)) translateX(2px);
           }
           60% {
             transform: rotate(calc(var(--grass-intensity) * 1.1deg)) translateX(3px);
           }
           90% {
             transform: rotate(calc(var(--grass-intensity) * 0.4deg)) translateX(1px);
           }
         }

         /* Simplified height variations */
         .grass-blade-overlay:nth-child(3n) {
           height: calc(var(--grass-height) * 1.2);
           opacity: 0.4;
         }

         .grass-blade-overlay:nth-child(5n) {
           height: calc(var(--grass-height) * 0.8);
           opacity: 0.6;
         }
      `}</style>
    </main>
  );
} 