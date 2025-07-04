import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import Countdown from 'react-countdown';

// Custom hook for intersection observer
function useInView(options = { threshold: 0.2 }) {
    const ref = useRef();
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            options
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [options]);
    return [ref, inView];
}

const ARTIST_NAME = 'Artistry Global';
const ARTIST_TAGLINE = 'Where Imagination Meets Canvas';
const ARTIST_BIO = `Artistry Global is a contemporary artist collective redefining the boundaries of visual storytelling. With bold colors, dynamic forms, and a passion for creative risk, our work invites you to see the world through a new lens.`;
const ARTIST_STATS = [
    { label: 'Solo Exhibitions', value: 24 },
    { label: 'Awards', value: 12 },
    { label: 'Collectors', value: 300, suffix: '+' },
];
const ARTWORKS = [
    'https://m.media-amazon.com/images/I/910AD6dqhXL._UF894,1000_QL80_.jpg',
    'https://indianfolkart.org/wp-content/uploads/2022/07/20220616-180740-scaled.jpg',
    'https://i.etsystatic.com/22601221/r/il/9b96ff/6257942955/il_fullxfull.6257942955_dijh.jpg',
    'https://atypicaladvantage.in/img/explore/img1.webp',
];
const PARTNERS = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
];
const OFFER_DURATION = 1000 * 60 * 60 * 24 * 3; // 3 days

const TESTIMONIALS = [
    {
        quote: "Artistry Global's work is a breath of fresh air—bold, emotional, and unforgettable.",
        author: 'Samantha R., Collector',
    },
    {
        quote: 'Every piece tells a story. The colors and energy are simply mesmerizing.',
        author: 'Liam T., Gallery Owner',
    },
    {
        quote: 'A true visionary. Their art inspires me every day.',
        author: 'Priya S., Fan',
    },
];

const FEATURED_WORK = {
    image: 'https://auntlizzy.com/wordpress/wp-content/uploads/2024/03/thumbnail_IMG_6078.jpg',
    title: 'Eclipse of Color',
    story: `This piece explores the interplay of shadow and light, using vibrant hues and dynamic brushwork to evoke a sense of movement and transformation. It was inspired by the artist's travels and the ever-changing sky.`,
};

const SOCIALS = [
    { name: 'Instagram', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' },
    { name: 'Twitter', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
    { name: 'Behance', url: '#', icon: 'https://cdn-icons-png.flaticon.com/512/145/145799.png' },
];

export default function ArtistPortfolio() {
    const [offerComplete, setOfferComplete] = useState(false);
    const [offerDeadline, setOfferDeadline] = useState(null);
    useEffect(() => {
        setOfferDeadline(Date.now() + OFFER_DURATION);
    }, []);

    // Intersection observer for stats and offer
    const [statsRef, statsInView] = useInView();
    const [offerRef, offerInView] = useInView();

    // Animation for hero
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => setHeroVisible(true), 200);
    }, []);

    // Fixed background image (artistic theme)
    const backgroundImage = 'https://static.vecteezy.com/system/resources/previews/041/949/957/non_2x/abstract-and-creative-art-background-with-brush-texture-and-scribbled-lines-in-collage-design-style-creative-design-suitable-for-sports-banner-or-poster-vector.jpg';

    // Navbar links
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Works', href: '#works' },
        { name: 'Partners', href: '#partners' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <main
            className="min-h-screen flex items-center justify-center py-10 font-sans"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white/60 backdrop-blur-md border-b border-white/30 shadow-lg rounded-b-2xl">
                <div className="flex items-center gap-2">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artists-pallete%5Cpaint-icon%5Cbuisness%5Cart-logo-design-template-b42a72fd5b35eb7fe268d18c229cf7ad_screen.jpg?ts=1715443253" alt="Logo" className="w-10 h-10 rounded-full shadow" />
                    <span className="text-2xl font-extrabold text-black">{ARTIST_NAME}</span>
                </div>
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="font-semibold text-gray-700 hover:text-pink-500 transition text-lg tracking-wide uppercase">{link.name}</a>
                    ))}
                    <a href="#works" className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold shadow hover:scale-105 transition">Shop Prints</a>
                </div>
                {/* Mobile hamburger (not functional for brevity) */}
                <div className="md:hidden">
                    <span className="block w-8 h-1 bg-pink-400 mb-1 rounded"></span>
                    <span className="block w-8 h-1 bg-yellow-400 mb-1 rounded"></span>
                    <span className="block w-8 h-1 bg-purple-400 rounded"></span>
                </div>
                
            </nav>

            <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/80 border border-white/60 shadow-2xl backdrop-blur-md mt-24 overflow-hidden relative">
                {/* HERO */}
                <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 rounded-t-3xl" style={{ backgroundImage: 'url(https://c8.alamy.com/comp/2RBGBXP/young-man-artist-siting-and-making-drawing-on-canvas-feeling-creative-2RBGBXP.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute bg-black/50 w-full h-full duration-500 flex items-end justify-center pb-4"></div>
                    <div className={`mb-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artists-pallete%5Cpaint-icon%5Cbuisness%5Cart-logo-design-template-b42a72fd5b35eb7fe268d18c229cf7ad_screen.jpg?ts=1715443253" alt="Artist portrait" className="w-48 h-48 object-cover rounded-[2.5rem] border-4 border-pink-300 shadow-2xl mx-auto ring-8 ring-white/40" />
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-extrabold mb-2 leading-tight drop-shadow-xl bg-gradient-to-r from-fuchsia-600 via-yellow-400 to-indigo-600 bg-clip-text text-transparent tracking-tight transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{ARTIST_NAME}</h1>
                    <div className={`text-lg md:text-2xl font-semibold mb-4 tracking-wide uppercase transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'} text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]`} style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>{ARTIST_TAGLINE}</div>
                    <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'} text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]`} style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>{ARTIST_BIO}</p>
                    {/* SVG divider */}
                    <svg className="absolute left-0 bottom-0 w-full h-12" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,30 Q720,90 1440,30 V60 H0 Z" fill="#fff" fillOpacity="0.8" /></svg>
                </section>

                {/* ABOUT */}
                <section id="about" className="py-20 px-6 bg-white/80 text-center relative">
                    <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 tracking-tight">About the Artistry</h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="text-lg text-gray-700 mb-8 leading-relaxed">{ARTIST_BIO}</div>
                        
                        <div className="grid md:grid-cols-2 gap-12 mt-12">
                            {/* Artistic Journey */}
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-pink-600 mb-4">Artistic Journey</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    My artistic journey began in the vibrant streets of Mumbai, where I discovered my passion for capturing the essence of human emotion through color and form. Over the past decade, I've evolved from traditional techniques to contemporary expressions, always pushing the boundaries of visual storytelling.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Each piece I create is a reflection of my experiences, travels, and the diverse cultures that have shaped my perspective. From the bustling markets of India to the serene landscapes of Europe, every destination has left its mark on my artistic voice.
                                </p>
                            </div>

                            {/* Creative Process */}
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-yellow-600 mb-4">Creative Process</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    My creative process is deeply intuitive, beginning with meditation and reflection. I believe that art emerges from a place of inner stillness, where emotions and memories flow freely onto the canvas. Each stroke is intentional, each color choice meaningful.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    I work primarily with acrylics and mixed media, experimenting with textures, layering, and unconventional materials. This approach allows me to create depth and dimension that invites viewers to explore beyond the surface.
                                </p>
                            </div>
                        </div>

                        {/* Inspiration & Philosophy */}
                        <div className="mt-12 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-3xl p-8 border-2 border-pink-100">
                            <h3 className="text-2xl font-bold text-purple-600 mb-4">Inspiration & Philosophy</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-sm">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Emotion</h4>
                                    <p className="text-gray-600">Capturing the raw, unfiltered emotions that connect us all as human beings.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Nature</h4>
                                    <p className="text-gray-600">Drawing inspiration from the organic forms and rhythms of the natural world.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">Culture</h4>
                                    <p className="text-gray-600">Celebrating the rich tapestry of human culture and shared experiences.</p>
                                </div>
                            </div>
                        </div>

                        {/* Artistic Statement */}
                        <div className="mt-12 text-center">
                            <blockquote className="italic text-xl text-gray-700 mb-6 font-medium leading-relaxed">
                                "Art is not what you see, but what you make others see. Through my work, I invite viewers to see the world through my eyes, to feel what I feel, and to discover their own stories within the colors and forms."
                            </blockquote>
                            <p className="text-gray-600 font-semibold">— Artistry Global</p>
                        </div>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full h-8 pointer-events-none select-none">
                        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,20 Q720,60 1440,20 V40 H0 Z" fill="#fdf2f8" fillOpacity="0.7" /></svg>
                    </div>
                </section>

                    {/* Sell Direct & Mission Cards */}
                <section className="py-16 px-6 bg-gradient-to-br from-pink-50/80 to-yellow-50/80">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Sell Direct Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-pink-200 shadow-2xl hover:shadow-pink-300/50 transition-all duration-500 group">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-pink-600 mb-3">Sell Direct</h3>
                            </div>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    Purchase artwork directly from the artist. Skip galleries and intermediaries to get 
                                    authentic pieces with personal connection and competitive pricing.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        No gallery commissions or hidden fees
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Direct communication with the artist
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        Custom commissions and personalized pieces
                                    </li>
                                </ul>
                                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                                    Shop Directly
                                </button>
                            </div>
                        </div>

                        {/* Our Mission Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-200 shadow-2xl hover:shadow-yellow-300/50 transition-all duration-500 group">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-yellow-600 mb-3">Our Mission</h3>
                            </div>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    To inspire and connect through the universal language of art. We believe every piece 
                                    tells a story and every creation has the power to transform spaces and lives.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        Creating meaningful artistic experiences
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        Bridging cultures through visual storytelling
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                        Making art accessible to everyone
                                    </li>
                                </ul>
                                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section ref={statsRef} className="flex flex-wrap justify-center gap-8 px-6 mt-16 mb-16">
                    {ARTIST_STATS.map((stat, idx) => (
                        <div key={stat.label} className={`bg-white rounded-2xl shadow-lg p-8 min-w-[180px] flex flex-col items-center border border-pink-100 transition-all duration-700 ${statsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} delay-[${idx * 120}ms]`}>
                            <span className="text-4xl font-bold text-pink-500 mb-2">
                                {statsInView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} /> : stat.value + (stat.suffix || '')}
                            </span>
                            <span className="text-gray-700 font-semibold tracking-wide uppercase">{stat.label}</span>
                        </div>
                    ))}
                </section>

                {/* OFFER */}
                <section ref={offerRef} className="flex justify-center mb-16 px-6">
                    <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 max-w-2xl w-full">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">Limited Edition Prints Available!</h3>
                            <p className="mb-2">Order your signed print before the offer ends. Each print is crafted with museum-quality materials and comes with a certificate of authenticity.</p>
                            <span className="font-semibold">Time left:</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            {offerComplete ? (
                                <span className="text-xl font-bold">Offer Ended</span>
                            ) : offerDeadline && offerInView ? (
                                <Countdown
                                    date={offerDeadline}
                                    onComplete={() => setOfferComplete(true)}
                                    renderer={({ days, hours, minutes, seconds }) => (
                                        <span className="text-3xl font-mono font-bold bg-white/20 px-4 py-2 rounded-xl shadow">
                                            {days}d {hours}h {minutes}m {seconds}s
                                        </span>
                                    )}
                                />
                            ) : null}
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY */}
                <section className="py-20 px-6 bg-gradient-to-br from-pink-50/80 to-yellow-50/80 text-center relative">
                    <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-yellow-400 to-indigo-600 tracking-tight">Philosophy</h2>
                    <blockquote className="italic text-2xl max-w-2xl mx-auto text-gray-700 mb-6 font-semibold">“Art enables us to find ourselves and lose ourselves at the same time.”</blockquote>
                    <div className="max-w-2xl mx-auto text-lg text-gray-700 mb-8 leading-relaxed">At Artistry Global, we believe that art is a journey—a way to connect, to question, and to celebrate the beauty of the world. Our philosophy is rooted in curiosity, courage, and the joy of creative discovery.</div>
                </section>

                {/* FEATURED WORK */}
                <section className="py-20 px-6 bg-white/90 text-center flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1 flex justify-center">
                        <img src={FEATURED_WORK.image} alt={FEATURED_WORK.title} className="w-full max-w-md h-80 object-cover rounded-3xl shadow-2xl border-4 border-yellow-200" />
                    </div>
                    <div className="flex-1 text-left md:text-left">
                        <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 tracking-tight">Featured Work</h2>
                        <div className="text-2xl font-bold text-pink-500 mb-2">{FEATURED_WORK.title}</div>
                        <div className="text-lg text-gray-700 mb-4 leading-relaxed">{FEATURED_WORK.story}</div>
                    </div>
                </section>

                {/* Works */}
                <section id="works" className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-pink-50/80 text-center relative">
                    {/* <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 tracking-tight">Gallery</h2> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {ARTWORKS.map((art, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-pink-100">
                                <img src={art} alt={`Artwork ${i + 1}`} className="w-full h-72 object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                                    <span className="text-white text-lg font-semibold tracking-wide">Artwork {i + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-8 pointer-events-none select-none">
                        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,20 Q720,60 1440,20 V40 H0 Z" fill="#fff7ed" fillOpacity="0.7" /></svg>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-20 px-6 bg-gradient-to-br from-yellow-50/80 to-pink-50/80 text-center">
                    <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-yellow-400 to-indigo-600 tracking-tight">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-pink-100">
                                <p className="italic text-lg mb-4 text-gray-700">“{t.quote}”</p>
                                <p className="font-bold text-pink-500">{t.author}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PARTNERS */}
                <section id="partners" className="py-16 px-6 bg-white/10 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-pink-500">Partners</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {PARTNERS.map((logo, i) => (
                            <img key={i} src={logo} alt="Partner logo" className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300 bg-white rounded-xl shadow p-2" />
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-20 px-6 bg-white/90 text-center flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 tracking-tight">Let's Connect</h2>
                    <div className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">Have a project in mind, want to collaborate, or just want to say hello? Fill out the form below or reach out on social media!</div>
                    <div className="w-full max-w-xl mx-auto relative animate-fadeinup shadow-2xl rounded-3xl bg-white/80 backdrop-blur-md border-2 border-pink-200 p-8 flex flex-col gap-6">
                        <form className="flex flex-col gap-4">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" /></svg>
                                </span>
                                <input type="text" placeholder="Your Name" className="pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-900 placeholder-gray-500 w-full" />
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm8 8l8-5v10l-8-5zm0 0L4 7v10l8-5z" fill="currentColor" /></svg>
                                </span>
                                <input type="email" placeholder="Your Email" className="pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-900 placeholder-gray-500 w-full" />
                            </div>
                            <div className="relative">
                                <span className="absolute left-3 top-4 text-pink-400">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z" fill="currentColor" /></svg>
                                </span>
                                <textarea placeholder="Your Message" rows={4} className="pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-900 placeholder-gray-500 w-full resize-none"></textarea>
                            </div>
                            <button type="submit" className="mt-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition text-lg tracking-wide">Send Message</button>
                        </form>
                        <div className="flex justify-center gap-4 mt-6">
                            {SOCIALS.map(s => (
                                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 hover:bg-yellow-200 transition shadow text-pink-500 hover:text-yellow-600">
                                    <img src={s.icon} alt={s.name} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                        <div className="absolute -inset-1 rounded-3xl pointer-events-none border-4 border-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 opacity-40"></div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-pink-50 py-10 px-6 text-gray-700 border-t border-pink-100 mt-10 rounded-b-3xl">
                    <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block w-10 h-10 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full"></span>
                            <span className="text-2xl font-extrabold text-pink-500">{ARTIST_NAME}</span>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#about" className="hover:text-pink-500 transition">About</a>
                            <a href="#gallery" className="hover:text-pink-500 transition">Works</a>
                            <a href="#" className="hover:text-pink-500 transition">Contact</a>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center text-xs text-pink-400 mt-2">
                            <a href="#" className="hover:text-pink-600 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-pink-600 transition">Terms & Conditions</a>
                            <a href="#" className="hover:text-pink-600 transition">Copyright Policy</a>
                            <a href="#" className="hover:text-pink-600 transition">Code of Conduct</a>
                            <a href="#" className="hover:text-pink-600 transition">Fees & Charges</a>
                        </div>
                        <div className="text-center text-xs text-pink-400 mt-4">&copy; {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.</div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
