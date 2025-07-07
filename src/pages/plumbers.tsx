import { useState } from 'react';
import PipesThreeBackground from '../components/PipesThreeBackground';

const plumberFeatures = [
  {
    icon: '🚨',
    title: 'Emergency Dispatch',
    desc: 'Get emergency calls routed directly to available plumbers with GPS tracking'
  },
  {
    icon: '💰',
    title: 'Instant Quotes',
    desc: 'Generate professional estimates on-site with parts pricing and labor costs'
  },
  {
    icon: '🔧',
    title: 'Parts Inventory',
    desc: 'Track van inventory, auto-order supplies, and manage supplier relationships'
  },
  {
    icon: '📞',
    title: 'Customer Follow-up',
    desc: 'Automated follow-up calls and maintenance reminders for repeat business'
  }
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    features: [
      'Basic scheduling',
      'Customer database',
      'Invoice generation',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '$499',
    period: '/month',
    features: [
      'Emergency dispatch',
      'Parts inventory tracking',
      'Automated estimates',
      'SMS notifications',
      'QuickBooks integration',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/month',
    features: [
      'Multi-location support',
      'Advanced reporting',
      'Custom integrations',
      'Team management',
      'White-label options',
      '24/7 phone support'
    ]
  }
];

export default function Plumbers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-100 to-white text-gray-900 font-sans">
      <PipesThreeBackground />
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-900 rounded-full blur-3xl opacity-40 z-0" />
        
        <span className="absolute left-12 top-24 text-5xl animate-bounce z-10">🔧</span>
        <span className="absolute right-20 top-40 text-4xl animate-pulse z-10">🚨</span>
        <span className="absolute left-1/3 bottom-20 text-4xl animate-bounce z-10">💰</span>
        <span className="absolute right-1/4 bottom-32 text-4xl animate-pulse z-10">📞</span>
        
        <h1 className="text-5xl font-bold mb-6 max-w-3xl relative z-10 text-blue-900 drop-shadow">
          Modernize Your Plumbing Business
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-blue-800 relative z-10 leading-relaxed">
          From emergency calls to follow-up maintenance - streamline your entire plumbing operation 
          with our custom portal and automation system.
        </p>
        <a
          href="#pricing"
          className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
        >
          Get Started Today
        </a>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            Built Specifically for Plumbers
          </h2>
          <p className="text-xl text-center mb-12 text-blue-700 max-w-3xl mx-auto">
            Every feature designed around the unique challenges of plumbing services
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plumberFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-400"
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
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-center mb-12 text-blue-700">
            Choose the plan that fits your plumbing business size
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
            <h3 className="text-3xl font-bold text-center mb-4 text-blue-900">
              Ready to Modernize Your Plumbing Business?
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Get a personalized demo and see how our platform can transform your operations
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Tell us about your current challenges"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Free Demo
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              No spam, no commitments. Just a personalized demo of how we can help your plumbing business.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="/local-services-modern"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Service Selection
          </a>
        </div>
      </section>
    </main>
  );
} 