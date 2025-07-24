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
    <main className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-100 to-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-100 via-emerald-200 to-emerald-900 rounded-full blur-3xl opacity-40 z-0" />
        
        <span className="absolute left-12 top-24 text-5xl animate-bounce z-10">🌱</span>
        <span className="absolute right-20 top-40 text-4xl animate-pulse z-10">🌿</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-bounce z-10">🚜</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-pulse z-10">📸</span>
        
        <h1 className="text-5xl font-bold mb-6 max-w-3xl relative z-10 text-emerald-900 drop-shadow">
          Grow Your Landscaping Business
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-emerald-800 relative z-10 leading-relaxed">
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
          <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">
            Built for Landscape Professionals
          </h2>
          <p className="text-xl text-center mb-12 text-emerald-700 max-w-3xl mx-auto">
            Tools designed specifically for outdoor service businesses
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landscapeFeatures.map((feature, _idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-emerald-400"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-emerald-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Focus */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-900">
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
          <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">
            Plans That Scale With Your Business
          </h2>
          <p className="text-xl text-center mb-12 text-emerald-700">
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
            className="text-emerald-600 hover:text-emerald-800 font-semibold"
          >
            ← Back to Service Selection
          </Link>
        </div>
      </section>
    </main>
  );
} 