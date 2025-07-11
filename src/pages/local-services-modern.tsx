import { useState, useRef, useEffect } from 'react';

// Custom hook for scroll reveal
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, visible] as const;
}

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const features = [
  {
    icon: '📅',
    title: 'Smart Booking Portal',
    description: 'Let customers book jobs 24/7. No more phone tag or missed calls.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: '💰',
    title: 'Automated Invoicing',
    description: 'Generate estimates and invoices instantly. Integrates with QuickBooks/Xero.',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: '📱',
    title: 'Real-Time Updates',
    description: 'SMS/email confirmations keep everyone in the loop automatically.',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: '🚫',
    title: 'No More Double-Booking',
    description: 'Live scheduling prevents conflicts. Your team always knows what\'s next.',
    color: 'from-purple-500 to-pink-600'
  }
];

const steps = [
  {
    number: '01',
    title: 'Setup Your Portal',
    description: 'We build your custom booking system in 1-2 days.'
  },
  {
    number: '02',
    title: 'Connect Your Tools',
    description: 'Integrate QuickBooks/Xero for seamless invoicing.'
  },
  {
    number: '03',
    title: 'Train Your Team',
    description: 'Simple training - your team will be up and running fast.'
  },
  {
    number: '04',
    title: 'Go Live',
    description: 'Start taking bookings and growing your business.'
  }
];

const testimonials = [
  {
    name: 'Carlos Rodriguez',
    role: 'Owner, Rodriguez HVAC',
    quote: 'We stopped losing jobs and our team is always in sync. Invoicing is a breeze now!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Sarah Thompson',
    role: 'Owner, Thompson Plumbing',
    quote: 'No more double-booking! Our customers love the online booking. Best $6K we ever spent.',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg'
  },
  {
    name: 'Mike Johnson',
    role: 'Owner, Johnson Landscaping',
    quote: 'From manual paperwork to automated everything. We\'re booking 40% more jobs now.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

const videoSources:string[] = [
  "https://www.shutterstock.com/shutterstock/videos/3548074267/preview/stock-footage-a-woman-holds-money-on-a-background-of-a-sink-with-water-utility-estimates-repairs-and-plumbing.webm",
  "https://www.shutterstock.com/shutterstock/videos/3541782671/preview/stock-footage-professional-hvac-technician-performing-a-commercial-air-conditioner-installation-and-maintenance.webm",
  "https://media.istockphoto.com/id/2164967460/video/father-and-child-planting-sapling-in-forest-at-sunset.mp4?s=mp4-640x640-is&k=20&c=4CwRdJQbNTO9dargjk833IvIGTIJKbdQ2-QAWxTT7Xo="
];
const AlternatingVideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    };

    videoElement.addEventListener('ended', handleEnded);
    return () => videoElement.removeEventListener('ended', handleEnded);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch((err) => {
        console.error('Autoplay error:', err);
      });
    }
  }, [currentVideoIndex]);

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 w-full h-screen object-cover z-0"
      src={videoSources[currentVideoIndex]}
      autoPlay
      muted
      playsInline
    />
  );
};
export default function ModernLandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [heroRef, heroVisible] = useReveal(0.3);
  const [featuresRef, featuresVisible] = useReveal(0.2);
  const [stepsRef, stepsVisible] = useReveal(0.2);
  const [testimonialsRef, testimonialsVisible] = useReveal(0.2);
  const [contactRef, contactVisible] = useReveal(0.2);

  // Handle scroll for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'how-it-works', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Background Video */}
      <AlternatingVideoBackground />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 z-10" />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-white font-bold text-xl">OpsModern</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'features', label: 'Features' },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="relative z-20">
      
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          
          <div className={`fixed z-[-1000] text-center max-w-4xl mx-auto transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Losing Jobs
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Start Growing
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Plumbers, landscapers, HVAC: $4K–$9K. No more manual quoting, lost jobs, or double-booking. We automate your ops.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg animate-pulse-glow hover:cursor-pointer">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200 cursor-pointer">
                Watch Demo
              </button>
            </div> */}
        </div>
      </section>

              {/* About Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 sm:py-40 relative overflow-hidden"  style={{borderRadius:'50px 50px 0px 0px',  boxShadow: '0 -20px 30px rgba(0, 0, 0, 0.4)', }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(147, 51, 234, 0.1) 50%, transparent 60%)
              `,
              backgroundSize: '100px 100px, 150px 150px, 200px 200px, 250px 250px',
              backgroundPosition: '0 0, 50px 50px, 100px 100px, 150px 150px'
            }} />
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.05) 10px, rgba(59, 130, 246, 0.05) 20px),
                repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(147, 51, 234, 0.05) 10px, rgba(147, 51, 234, 0.05) 20px)
              `,
              backgroundSize: '40px 40px, 60px 60px'
            }} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              About OpsModern
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              We're on a mission to modernize local service businesses. Our platform transforms how plumbers, landscapers, HVAC professionals, and other service providers operate in the digital age.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Founded with the belief that every local service business deserves access to enterprise-level tools, OpsModern eliminates the chaos of manual scheduling and brings modern efficiency to service providers. We're not just another software company - we're your partner in growth, success, and business transformation.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Today, we serve over 5,000 businesses across the country, helping them increase bookings, streamline operations, and grow their revenue. Our commitment to 24/7 support and continuous innovation ensures that our clients always have the tools they need to succeed in an increasingly competitive market.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Everything you need to succeed in the digital age
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                    featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: featuresVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 animate-rotate-slow`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" ref={stepsRef} className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Simple steps to get you started
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`text-center ${
                    stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: stepsVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto animate-scale-in">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
            </div>
          </div>
        </section>

        {/* Plumbers Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Built for Plumbers
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Stop losing jobs to competitors. Get more bookings, faster payments, and happy customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://metropha.com/wp-content/uploads/2018/07/The-Indispensable-Benefits-of-Professional-Plumbing-_-Plumbers-in-Cleveland-TN.jpg" 
                    alt="Professional plumber at work"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">🔧</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Emergency Calls</h4>
                          <p className="text-sm text-gray-600">24/7 booking available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-6 py-3 shadow-lg animate-bounce-in">
                  <div className="text-center">
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-sm">More Jobs</div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
                      📱
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Smart Job Scheduling</h3>
                      <p className="text-white/70">Customers book online 24/7. No more missed calls or phone tag. Your team gets instant notifications.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
                      💰
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Instant Estimates</h3>
                      <p className="text-white/70">Generate professional estimates in seconds. Integrates with QuickBooks for seamless invoicing.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white text-xl">
                      🚫
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">No Double-Booking</h3>
                      <p className="text-white/70">Live calendar prevents scheduling conflicts. Your team always knows what's next.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">40% More Jobs</h3>
                <p className="text-white/70">Average increase in bookings</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50% Faster</h3>
                <p className="text-white/70">Payment processing time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  😊
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">95% Satisfaction</h3>
                <p className="text-white/70">Customer satisfaction rate</p>
              </div>
            </div>
        </div>
      </section>

        {/* Landscapers Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Perfect for Landscapers
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Transform your landscaping business. Book more jobs, manage crews, and grow your revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
                      🌿
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Seasonal Scheduling</h3>
                      <p className="text-white/70">Manage spring cleanups, summer maintenance, and fall services with smart scheduling.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-xl">
                      👥
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Crew Management</h3>
                      <p className="text-white/70">Assign jobs to your best crews. Track progress and keep customers updated.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl">
                      💰
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Recurring Revenue</h3>
                      <p className="text-white/70">Set up maintenance contracts and automatic billing for steady income.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://bluewell.com.au/wp-content/uploads/2023/01/featured-image-landscaper-1.jpeg" 
                    alt="Professional landscaper at work"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">🌱</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Maintenance Plans</h4>
                          <p className="text-sm text-gray-600">Recurring revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-6 py-3 shadow-lg animate-bounce-in">
                  <div className="text-center">
                    <div className="text-2xl font-bold">60%</div>
                    <div className="text-sm">More Revenue</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">60% More Revenue</h3>
                <p className="text-white/70">From maintenance contracts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">3x Faster</h3>
                <p className="text-white/70">Job scheduling time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  😊
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">98% Retention</h3>
                <p className="text-white/70">Customer retention rate</p>
              </div>
            </div>
        </div>
      </section>

        {/* HVAC Section */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                HVAC Professionals
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Handle emergency calls, maintenance contracts, and installations with ease.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.blueashair.com/wp-content/uploads/2021/03/bafa-ac-install.jpg" 
                    alt="HVAC technician at work"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">❄️</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Emergency Service</h4>
                          <p className="text-sm text-gray-600">24/7 availability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-6 py-3 shadow-lg animate-bounce-in">
                  <div className="text-center">
                    <div className="text-2xl font-bold">80%</div>
                    <div className="text-sm">Faster Response</div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-xl">
                      🚨
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Emergency Priority</h3>
                      <p className="text-white/70">Emergency calls get priority scheduling. No more lost customers to competitors.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl">
                      🔧
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Service Contracts</h3>
                      <p className="text-white/70">Manage maintenance contracts and recurring service appointments automatically.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
                      💰
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Parts & Labor</h3>
                      <p className="text-white/70">Track parts inventory and labor costs. Generate detailed invoices instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">80% Faster</h3>
                <p className="text-white/70">Emergency response time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">90% Efficiency</h3>
                <p className="text-white/70">Job completion rate</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  😊
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99% Satisfaction</h3>
                <p className="text-white/70">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* All Professions Section */}
        <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Works for Every Trade
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Whether you're a plumber, landscaper, HVAC tech, or any service professional - we've got you covered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Trade Cards */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 animate-rotate-slow">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Plumbers</h3>
                <p className="text-white/70">Emergency calls, installations, repairs</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 animate-rotate-slow">
                  🌿
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Landscapers</h3>
                <p className="text-white/70">Maintenance, design, seasonal work</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 animate-rotate-slow">
                  ❄️
                </div>
                <h3 className="text-xl font-bold text-white mb-4">HVAC Techs</h3>
                <p className="text-white/70">Installation, repair, maintenance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 animate-rotate-slow">
                  🛠️
                </div>
                <h3 className="text-xl font-bold text-white mb-4">All Trades</h3>
                <p className="text-white/70">Electricians, painters, cleaners</p>
              </div>
            </div>
            
            {/* Universal Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl">
                      📱
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Mobile App</h3>
                      <p className="text-white/70">Your team can access jobs, update status, and communicate from anywhere.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-xl">
                      💳
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Payment Processing</h3>
                      <p className="text-white/70">Accept credit cards, digital payments, and recurring billing automatically.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl">
                      📊
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Analytics & Reports</h3>
                      <p className="text-white/70">Track performance, revenue, and customer satisfaction with detailed reports.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xl">👥</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Team Management</h4>
                          <p className="text-sm text-gray-600">All trades supported</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-3 shadow-lg animate-bounce-in">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm">Trades Supported</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section id="testimonials" ref={testimonialsRef} className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Trusted by thousands of businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 ${
                    testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: testimonialsVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Join thousands of satisfied customers today
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-black z-20 py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-white font-bold text-xl">OpsModern</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Modernizing local service businesses with smart booking, automated invoicing, and real-time dispatch solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Integrations</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">API</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Mobile App</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Live Chat</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Training</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Status</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Press</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Partners</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-white/60 text-sm">
                  © 2024 OpsModern. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Cookie Policy</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white/60 text-sm">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-white/60 text-sm">SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 