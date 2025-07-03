import React from 'react';
import YogaThreeBackground from '../../components/YogaThreeBackground';

export default function YogaLandingPage() {
  return (
    <main className="font-inter text-gray-900 bg-white relative min-h-screen">
      {/* Three.js Background */}
      <YogaThreeBackground />
      
      {/* Modern Header */}
      <header className="relative z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🪷</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">
                Yoga Bliss
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              {[
                { name: 'About', href: '#about' },
                { name: 'Classes', href: '#offerings' },
                { name: 'Instructor', href: '#instructor' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'Pricing', href: '#pricing' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Book Trial
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Transform Your Mind & Body</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
                  Find Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Inner Peace
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Join our transformative Yoga & Pilates classes designed to strengthen your body, 
              calm your mind, and awaken your spirit through ancient practices and modern techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300">
                Watch Classes
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Main image with reflection effect */}
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 transform rotate-6 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main image */}
              <img 
                src="/yoga-main.avif" 
                alt="Yoga Practice" 
                className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 z-10"
              />
              
              {/* Reflection effect */}
              <div className="absolute top-full left-0 w-full h-full overflow-hidden rounded-3xl z-0" style={{transform: 'scaleY(-1) translateY(-10px)'}}>
                <img 
                  src="/yoga-main.avif" 
                  alt="Yoga Practice Reflection" 
                  className="w-full h-full object-cover rounded-3xl opacity-20 blur-sm"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
                  }}
                />
              </div>
              
              {/* Shimmer overlay effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 z-10 pointer-events-none"></div>
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-violet-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-white/20">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Our Practice
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer a harmonious blend of calming Yoga flows and energizing Pilates workouts. 
              Led by certified instructors with years of experience, our sessions are designed to 
              build strength, enhance flexibility, and cultivate inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated classes designed for every level and goal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🧘‍♀️',
                title: 'Hatha Yoga',
                description: 'Classic postures for balance, mindfulness, and deep inner connection.',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                emoji: '🔥',
                title: 'Power Yoga',
                description: 'Dynamic flows to build stamina, strength, and cardiovascular health.',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                emoji: '💪',
                title: 'Pilates',
                description: 'Core-focused strength training for mobility and postural alignment.',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((offering) => (
              <div key={offering.title} className="group">
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${offering.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {offering.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{offering.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="relative z-10 py-24 px-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
              <img 
                src="/instructor.jpg" 
                alt="Instructor Emily" 
                className="relative w-80 h-80 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Your Guide</p>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Meet Emily
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Certified Yoga & Pilates Instructor with 10+ years of experience in guiding people to healthier, 
                mindful lifestyles. Emily combines traditional teachings with modern techniques to create 
                transformative experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/60 backdrop-blur-xl rounded-2xl">
                  <div className="text-2xl font-bold text-purple-600">RYT-500</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-xl rounded-2xl">
                  <div className="text-2xl font-bold text-pink-600">1000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Weekly Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect time for your practice
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="grid gap-4">
              {[
                ['Monday', '7:00 AM', 'Hatha Yoga', 'purple'],
                ['Tuesday', '6:00 PM', 'Pilates', 'pink'],
                ['Wednesday', '7:00 AM', 'Power Yoga', 'violet'],
                ['Thursday', '6:00 PM', 'Pilates', 'pink'],
                ['Friday', '7:00 AM', 'Hatha Yoga', 'purple'],
                ['Saturday', '9:00 AM', 'Power Yoga', 'violet'],
              ].map(([day, time, type, color]) => (
                <div key={day} className="flex items-center justify-between p-4 bg-white/60 rounded-2xl hover:bg-white/80 transition-colors">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
                    <div className="font-semibold text-gray-900">{day}</div>
                  </div>
                  <div className="text-gray-600 text-center w-20">{time}</div>
                  <div className="font-medium text-purple-600 flex-1 text-right">{type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible membership options to suit your lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$19',
                period: 'per month',
                features: ['2 classes per week', 'Group sessions', 'Basic guidance', 'Community access'],
                popular: false
              },
              {
                name: 'Pro',
                price: '$39',
                period: 'per month',
                features: ['Unlimited classes', 'Priority booking', 'Personalized tips', 'Workshop access'],
                popular: true
              },
              {
                name: 'Elite',
                price: '$59',
                period: 'per month',
                features: ['1-on-1 sessions', 'Custom meal plans', 'Weekly check-ins', 'Exclusive events'],
                popular: false
              }
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-pink-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' : 'border-2 border-purple-300 text-purple-600 hover:bg-purple-50'}`}>
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who have discovered the power of mindful movement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm font-bold">🪷</span>
                </div>
                <h3 className="text-xl font-bold">Yoga Bliss</h3>
              </div>
              <p className="text-purple-200">
                Transform your life through mindful movement and ancient wisdom.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-purple-200">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#offerings" className="hover:text-white transition-colors">Classes</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-purple-200">
                <li>📍 123 Wellness Street</li>
                <li>📞 +91 98765 43210</li>
                <li>✉️ hello@yogabliss.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  📱
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  🐦
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-200">
            <p>&copy; {new Date().getFullYear()} Yoga Bliss Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
