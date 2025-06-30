import { useState, useRef, useEffect } from 'react';

// Custom hook for scroll reveal
function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
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

const features = [
    {
        icon: '👥',
        title: 'Membership Site',
        desc: 'WordPress + MemberPress or custom portal for your community.'
    },
    {
        icon: '💳',
        title: 'Recurring Billing',
        desc: 'Automated monthly/annual payments and member access.'
    },
    {
        icon: '📅',
        title: 'Event Reminders',
        desc: 'Automated email/SMS reminders for meetups and events.'
    },
    {
        icon: '📚',
        title: 'Resource Library',
        desc: 'Deliver exclusive content and resources to your members.'
    }
];

const steps = [
    {
        icon: '🔍',
        title: '1. Discovery',
        desc: 'We clarify your vision and community goals.'
    },
    {
        icon: '🛠️',
        title: '2. Site & Portal Setup',
        desc: 'We build your membership site and member portal.'
    },
    {
        icon: '💳',
        title: '3. Billing & Access',
        desc: 'We set up recurring payments and member access.'
    },
    {
        icon: '🚀',
        title: '4. Launch & Automate',
        desc: 'You launch, we automate reminders and content delivery.'
    }
];

const testimonials = [
    {
        quote: '“I never thought I could run a paid community. Now I have members, events, and a real income stream!”',
        author: 'Linda, Genealogy Coach'
    }
];

export default function RetireeMembership() {
    const [testimonialIdx, setTestimonialIdx] = useState(0);
    const [featuresRef, featuresVisible] = useReveal();
    const [stepsRef, stepsVisible] = useReveal();
    const [testimonialsRef, testimonialsVisible] = useReveal();

    return (
        <main className="min-h-screen text-gray-100 font-sans overflow-x-hidden relative" style={{ background: 'radial-gradient(ellipse at 60% 40%, #7c3aed 0%, #fbbf24 60%, #fff 100%)' }}>
            {/* Hero */}
            <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-100 via-purple-200 to-purple-900 rounded-full blur-3xl opacity-40 z-0" />
                <span className="absolute left-12 top-24 text-5xl animate-float-slow z-10">👥</span>
                <span className="absolute right-20 top-40 text-4xl animate-float z-10">💳</span>
                <span className="absolute left-1/3 bottom-20 text-4xl animate-float z-10">📅</span>
                <span className="absolute right-1/4 bottom-32 text-4xl animate-float-slow z-10">📚</span>
                <span className="bg-white text-black p-2 rounded-t-lg">
                    <span className="inline-block animate-pulse font-bold">
                        Retiree-Founder Launching
                    </span>
                </span>

                <h1 className="text-5xl font-bold mb-4 max-w-2xl relative z-10 text-yellow-200 drop-shadow bg-black py-2 px-4 rounded-[100px]"> Niche Membership Community</h1>
                <h6 className="text-lg text-yellow-100 mb-2 relative z-10">Recurring Revenue, Engaged Members, Zero Tech Hassle</h6>
                <p className="text-xl max-w-xl mb-8 text-purple-100 relative z-10">
                    Hobby coaches, veteran organizers: $6K–$10K. No more spreadsheets or lost fees. We build your membership site, set up billing, and automate your community.
                </p>
                <a
                    href="#leadform"
                    className="px-8 py-4 bg-yellow-400 text-purple-900 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold text-lg relative z-10"
                >
                    Book a Free Discovery Call
                </a>
            </section>

            {/* Pain Points */}
            <section className="flex flex-col items-center px-4 mb-12">
                <div className="bg-purple-800/80 border-l-4 border-yellow-400 shadow-lg rounded-xl px-8 py-6 max-w-2xl w-full flex flex-col items-center">
                    <span className="uppercase text-xs tracking-widest text-yellow-300 font-bold mb-2">Pain Points</span>
                    <div className="text-lg font-semibold text-yellow-100 mb-1">No way to manage members</div>
                    <div className="text-lg font-semibold text-yellow-100 mb-1">No way to collect fees</div>
                    <div className="text-lg font-semibold text-yellow-100 mb-1">No way to deliver exclusive content</div>
                </div>
            </section>

            {/* Features */}
            <section ref={featuresRef} className={`py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl font-semibold mb-12 text-yellow-200">Everything You Need for Your Community</h2>
                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {features.map((f, idx) => (
                        <div
                            key={f.title}
                            className={`bg-purple-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border-t-4 border-yellow-200 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
                        >
                            <span className="text-4xl mb-4">{f.icon}</span>
                            <h3 className="text-xl font-bold mb-2 text-yellow-100">{f.title}</h3>
                            <p className="text-purple-100">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it works timeline/stepper */}
            <section ref={stepsRef} className={`py-20 px-6 bg-gradient-to-br from-purple-900 via-yellow-500 to-black text-center shadow-inner rounded-2xl max-w-5xl mx-auto my-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl font-semibold mb-12 text-white">How It Works</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 relative">
                    {steps.map((step, i) => (
                        <div key={step.title} className={`flex flex-col items-center flex-1 min-w-[120px] relative z-10 group transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: stepsVisible ? `${i * 0.1 + 0.2}s` : '0s' }}>
                            <div
                                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-4 border-yellow-200 bg-purple-900 shadow-lg text-3xl transition-transform duration-200 group-hover:scale-110 animate-step-float`}
                                style={{ animationDelay: `${i * 0.5}s`, backgroundColor: i === 0 ? '#fef9c3' : i === 1 ? '#e0e7ff' : i === 2 ? '#fde68a' : '#fbbf24' }}
                            >
                                {step.icon}
                            </div>
                            <div className="font-semibold mb-1 text-lg text-yellow-100">{step.title}</div>
                            <div className="text-purple-100 text-sm mb-2 max-w-[140px] mx-auto">{step.desc}</div>
                            {/* {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-2 bg-gradient-to-r from-yellow-100 to-purple-100 z-0" />
                            )} */}
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial carousel */}
            <section ref={testimonialsRef} className={`py-20 px-6 mb-20 bg-gradient-to-br from-yellow-50 to-purple-900 text-center transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl font-semibold mb-10 text-yellow-200">What Clients Say</h2>
                <div className="max-w-xl mx-auto">
                    <div className="relative bg-purple-800/80 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
                        <blockquote className="text-lg italic text-yellow-100 mb-4 transition-all duration-500 animate-fade-in">
                            {testimonials[testimonialIdx].quote}
                        </blockquote>
                        <div className="text-yellow-300 font-semibold">{testimonials[testimonialIdx].author}</div>
                    </div>
                </div>
            </section>

            {/* Lead capture form placeholder */}
            <section id="leadform" className="flex flex-col items-center px-4 mb-32">
                <div className="bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl px-8 py-12 max-w-xl w-full flex flex-col items-center mb-20">
                    <span className="uppercase text-xs tracking-widest text-yellow-700 font-bold mb-4">Get Started</span>
                    <div className="text-lg font-semibold text-purple-900 mb-8 text-center">Ready to launch your membership community?<br />Leave your email and we'll reach out for a free discovery call.</div>
                    {/* Replace with real form integration */}
                    <form className="w-full flex flex-col gap-4">
                        <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-purple-100 text-purple-900 placeholder:text-purple-400 border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                        <button type="submit" className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold">Request Free Call</button>
                    </form>
                    <div className="text-xs text-purple-500 mt-4">We respect your privacy. No spam, ever.</div>
                </div>
            </section>

            {/* Sticky CTA bar */}
            <div className="fixed bottom-0 left-0 w-full bg-purple-900/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
                <span className="mr-4 font-semibold text-yellow-200">Ready to build your community?</span>
                <a
                    href="#leadform"
                    className="px-6 py-3 bg-yellow-400 text-purple-900 rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition-transform duration-200 font-semibold"
                >
                    Book a Free Discovery Call
                </a>
            </div>

            {/* Animations */}
            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes step-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
          100% { transform: translateY(0); }
        }
        .animate-step-float {
          animation: step-float 3.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
        </main>
    );
} 