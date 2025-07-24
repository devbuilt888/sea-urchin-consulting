import React from 'react';
import Link from 'next/link';

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
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-green-100 to-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-100 via-green-200 to-green-900 rounded-full blur-3xl opacity-40 z-0" />
        
        <span className="absolute left-12 top-24 text-5xl animate-bounce z-10">❄️</span>
        <span className="absolute right-20 top-40 text-4xl animate-pulse z-10">🌡️</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-bounce z-10">📅</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-pulse z-10">⚡</span>
        
        <h1 className="text-5xl font-bold mb-6 max-w-3xl relative z-10 text-green-900 drop-shadow">
          Transform Your HVAC Business
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-green-800 relative z-10 leading-relaxed">
          From seasonal maintenance to emergency repairs - manage your entire HVAC operation 
          with intelligent scheduling and automated customer communications.
        </p>
        <a
          href="#pricing"
          className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Start Your Free Trial
        </a>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-900">
            HVAC-Specific Tools & Features
          </h2>
          <p className="text-xl text-center mb-12 text-green-700 max-w-3xl mx-auto">
            Designed for heating, cooling, and ventilation professionals
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hvacFeatures.map((feature, _idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-green-400"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-green-900">
            Pricing Built for HVAC Companies
          </h2>
          <p className="text-xl text-center mb-12 text-green-700">
            Scale with your business, from solo contractors to large teams
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, _idx) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-green-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-green-600 text-white text-center py-3 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-green-900">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-green-100 text-green-900 hover:bg-green-200'
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
          <h2 className="text-3xl font-bold mb-8 text-green-900">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">
            <h3 className="text-3xl font-bold text-center mb-4 text-green-900">
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
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
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
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            ← Back to Service Selection
          </Link>
        </div>
      </section>
    </main>
  );
} 