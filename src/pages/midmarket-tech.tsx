import { useState, useRef, useEffect } from 'react';
import TechThreeBackground from '../components/TechThreeBackground';

// Custom hook for advanced scroll animations
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}

const modernFeatures = [
  {
    icon: '🚀',
    title: 'Next-Gen Architecture',
    description: 'Microservices, serverless, and edge computing for maximum scalability',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🤖',
    title: 'AI/ML Integration',
    description: 'End-to-end machine learning pipelines with real-time inference',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: '⚡',
    title: 'DevOps Excellence',
    description: 'Automated CI/CD, containerization, and infrastructure as code',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🔗',
    title: 'Legacy Transformation',
    description: 'Seamless integration bridges between legacy and modern systems',
    gradient: 'from-orange-500 to-red-500'
  }
];

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'GraphQL', category: 'API' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'Terraform', category: 'Infrastructure' },
  { name: 'Monitoring', category: 'Observability' }
];

const processSteps = [
  {
    phase: '01',
    title: 'Strategic Assessment',
    description: 'Deep technical audit and roadmap planning',
    details: 'Architecture review, performance analysis, and growth planning'
  },
  {
    phase: '02',
    title: 'System Design',
    description: 'Modern architecture and technology selection',
    details: 'Microservices design, API specification, and database architecture'
  },
  {
    phase: '03',
    title: 'Implementation',
    description: 'Agile development with continuous integration',
    details: 'Sprint-based delivery, automated testing, and performance optimization'
  },
  {
    phase: '04',
    title: 'Deployment & Scale',
    description: 'Production deployment and monitoring',
    details: 'DevOps automation, monitoring setup, and performance tuning'
  }
];

export default function MidMarketTech() {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);
  const [stackRef, stackVisible] = useScrollAnimation(0.1);
  const [processRef, processVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <TechThreeBackground />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8">
              <span className="text-cyan-300 font-semibold">For Mid-Market Tech Leaders</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Modernize Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform legacy systems into cutting-edge platforms. 
              <span className="text-cyan-300"> Microservices, AI/ML, and DevOps excellence</span> 
              for companies ready to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Start Your Transformation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$10M+</div>
                <div className="text-gray-400">Revenue Scaled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Companies Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                <div className="text-gray-400">Faster Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-32 px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade solutions designed for mid-market companies ready to compete with industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section 
        ref={stackRef}
        className="py-32 px-6 bg-gradient-to-br from-gray-900/20 to-black/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Modern Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Battle-tested technologies that power the world's fastest-growing companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className={`group p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${stackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="text-sm text-cyan-400 mb-2 font-semibold">{tech.category}</div>
                <div className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {tech.name}
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-32 px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven methodology that delivers results in 90 days or less
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.phase}
                className={`group relative transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {step.phase}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <p className="text-gray-500 text-sm">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-32 px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join 50+ companies that have already modernized their tech stack and accelerated their growth
            </p>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 mb-12">
              <form className="max-w-md mx-auto space-y-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Free Assessment
                </button>
          </form>
              <p className="text-gray-500 text-sm mt-4">
                Free 30-minute consultation • No obligation • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
          <span className="relative z-10">💬 Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </button>
      </div>
    </div>
  );
} 