import React, { useState, useEffect, useRef } from 'react';

const galleryImages = [
    {
        category: 'wedding',
        cover: 'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
        images: [
            'https://www.brides.com/thmb/LMyiMPxRFx82BLiHZC8lySJFnGo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marriage-pose-photo-recirc-kyle-john-1-29-4f97523aa049471992292e8d6ddc41ee.jpg',
            'https://www.redveds.com/wp-content/uploads/2023/06/NR-REDVEDS-39-1365x2048.jpg',
            'https://hips.hearstapps.com/hmg-prod/images/wedding-wishes-bride-and-groom-surrounded-by-their-friends-66abb2eac5cde.jpg?crop=1xw:0.8433521923620934xh;0,0.0456xh&resize=1200:*',
            'https://stefaniciottiphotography.com/wp-content/uploads/2023/09/Ashley_Andre_Knotting_Hill_Place_Wedding_Venue_Little_Elm_Texas_2023-243.jpg',
            'https://assets.vogue.in/photos/652e516c88d1804dc9a1a159/3:4/w_2560%2Cc_limit/Wedding.jpeg'
        ]
    },
    {
        category: 'portraits',
        cover: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/chilled-young-black-male-model-in-studio-portrait-free-image.jpeg?w=2210&quality=70',
        images: [
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/chilled-young-black-male-model-in-studio-portrait-free-image.jpeg?w=2210&quality=70',
            'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?cs=srgb&dl=pexels-tomaz-barcellos-999425-1987301.jpg&fm=jpg',
            'https://i.pinimg.com/736x/b5/aa/70/b5aa70465b13aee35de3b2ce250fabc1.jpg',
            'https://images.squarespace-cdn.com/content/v1/5264f7c9e4b0a3247c641860/1534825000745-2149Z46TTP0PBL9V1LFY/george_027.jpg?format=1500w'
            // ...more forest images
        ]
    },
    {
        category: 'party',
        cover: 'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg',
        images: [
            'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg',
            'https://t4.ftcdn.net/jpg/00/52/49/99/360_F_52499954_7GYIvjNH8kxJguysNrJHMQxHhuMMkDZi.jpg',
            'https://media.istockphoto.com/id/1193488504/photo/lady-at-the-new-years-eve-party.jpg?s=612x612&w=0&k=20&c=GsFfx5eH92NvUtqiQkR170n9krD09WdOuccY1QjaJ04=',
            'https://media.istockphoto.com/id/1298329918/photo/birthday-celebratory-toast-with-string-lights-and-champagne-silhouettes.jpg?s=612x612&w=0&k=20&c=PaDeMR5-r0NdlxghuVF9tRqR5XkCdNdTzxrkofv0Syk=',
            // ...more forest images
        ]
    },
    {
        category: 'office',
        cover: 'https://static.vecteezy.com/system/resources/thumbnails/033/350/522/small/modern-room-office-black-background-ai-generated-photo.jpg',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/New_office.jpg/1200px-New_office.jpg',
            'https://media.istockphoto.com/id/1011792694/photo/elevated-view-of-a-busy-open-plan-office.jpg?s=612x612&w=0&k=20&c=f-bXShoO_CyU0f1uSIDMk1CXj2IgCRqkG3KKOgBua9o=',
            'https://static.vecteezy.com/system/resources/thumbnails/013/526/396/small_2x/working-together-group-of-young-modern-people-in-smart-casual-wear-discussing-business-and-smiling-while-sitting-in-the-creative-office-photo.jpg',
            // ...more forest images
        ]
    },
    {
        category: 'night sky',
        cover: 'https://geographical.co.uk/wp-content/uploads/Night-sky-photography.jpg',
        images: [
            'https://geographical.co.uk/wp-content/uploads/Night-sky-photography.jpg',
            'https://images.newscientist.com/wp-content/uploads/2021/08/19144039/pri195400933.jpg',
            'https://images.unsplash.com/photo-1641895949711-4269f58f2b5c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnJ5JTIwbmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D',
            'https://news.openspaceauthority.org/hubfs/Starry%20Night%202-1.jpeg',
            // ...more forest images
        ]
    },
    {
        category: 'hall events',
        cover: 'https://www.chennaiconventioncentre.com/wp-content/uploads/2024/05/Max-banquet-hall-spaces.jpg',
        images: [
            'https://www.chennaiconventioncentre.com/wp-content/uploads/2024/05/Max-banquet-hall-spaces.jpg',
            'https://renaissancebanquet.com/wp-content/uploads/2023/06/renaissance-banquet-hall-grand-ballroom-new-amenities.jpg',
            'https://ramyashotels.com/wp-content/uploads/2021/09/banquet-hall-trichy.jpg',
            'https://theclubmumbai.com/wp-content/uploads/2023/08/banquet_03.jpg',
            // ...more forest images
        ]
    },
    // ...other categories
];

const carouselImages = [
    'https://img.freepik.com/free-photo/multiple-selection-alcohol-drinks-small-glasses_114579-1869.jpg?semt=ais_hybrid&w=740',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
];

const heroBackgroundImages = [
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    'https://sarahgodfrey.net/wp-content/uploads/sites/7012/2022/02/Couple_Skiing_Photoshoot_DevilsHead_WI-4.jpg',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
];

const testimonials = [
    {
        quote: 'The photos captured the essence of our wedding day perfectly. Absolutely stunning!',
        author: 'Priya & Arjun',
    },
    {
        quote: 'Professional, creative, and a joy to work with. Highly recommended!',
        author: 'Rohit S.',
    },
    {
        quote: 'Every shot tells a story. The gallery is breathtaking!',
        author: 'Meera D.',
    },
];

// Custom hook for intersection observer (fixed: not to be called inside loops)
function useInView(ref, options) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            options
        );
        observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return inView;
}

export default function PhotographerLanding() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [heroBackgroundIndex, setHeroBackgroundIndex] = useState(0);
    const [lightbox, setLightbox] = useState({ open: false, category: '', images: [], index: 0 });
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [hoveredImg, setHoveredImg] = useState(null);

    // For gallery animation
    const galleryRefs = useRef([]);
    const [galleryInView, setGalleryInView] = useState([]);

    // For testimonials animation
    const testimonialRefs = useRef([]);
    const [testimonialInView, setTestimonialInView] = useState([]);

    // For staggered animation
    const getDelay = idx => ({ animationDelay: `${idx * 120}ms` });

    // Determine which categories to show
    const categoriesToShow = showAllCategories ? galleryImages : galleryImages.slice(0, 3);

    // Set up intersection observer for gallery
    useEffect(() => {
        setGalleryInView(Array(categoriesToShow.length).fill(false));
        const observers = [];
        categoriesToShow.forEach((_, idx) => {
            if (!galleryRefs.current[idx]) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setGalleryInView(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            observer.observe(galleryRefs.current[idx]);
            observers.push(observer);
        });
        return () => observers.forEach(observer => observer.disconnect());
    }, [categoriesToShow.length]);

    // Set up intersection observer for testimonials
    useEffect(() => {
        setTestimonialInView(Array(testimonials.length).fill(false));
        const observers = [];
        testimonials.forEach((_, idx) => {
            if (!testimonialRefs.current[idx]) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTestimonialInView(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.15 }
            );
            observer.observe(testimonialRefs.current[idx]);
            observers.push(observer);
        });
        return () => observers.forEach(observer => observer.disconnect());
    }, [testimonials.length]);

    const nextSlide = () => setCarouselIndex((carouselIndex + 1) % carouselImages.length);
    const prevSlide = () => setCarouselIndex((carouselIndex - 1 + carouselImages.length) % carouselImages.length);

    // Auto-slide carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    // Auto-slide hero background
    useEffect(() => {
        const interval = setInterval(() => {
            setHeroBackgroundIndex((prev) => (prev + 1) % heroBackgroundImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [heroBackgroundImages.length]);

    // Lightbox navigation
    const lightboxNext = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }));
    const lightboxPrev = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
            {/* Add header and navbar at the top */}
            <header className=" fixed top-0 z-30 w-full bg-gradient-to-r from-[#6b4f27] via-[#a47551] to-[#c8b08e] shadow-lg ">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo/Title */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl text-yellow-400 font-extrabold">Photographer</span>
                    </div>
                    {/* Navbar */}
                    <nav className="flex items-center gap-8 text-white text-base font-medium">
                        <a href="#" className="hover:text-yellow-400 transition">Home</a>
                        <a href="#about" className="hover:text-yellow-400 transition">About</a>
                        <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
                        <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
                    </nav>
                </div>
            </header>
            {/* Lightbox Overlay */}
            {lightbox.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox({ open: false, category: '', images: [], index: 0 })}>
                    <div className="relative max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full px-4" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute w-10 h-10 top-5 right-10 bg-black/70 text-white rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
                            onClick={() => setLightbox({ open: false, category: '', images: [], index: 0 })}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <button
                            className="absolute left-12 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-fit rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
                            onClick={lightboxPrev}
                            aria-label="Previous"
                        >
                            &#8592;
                        </button>
                        <button
                            className="absolute right-12 top-1/2 -translate-y-1/2 bg-black/70 text-white w-10 h-fit rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
                            onClick={lightboxNext}
                            aria-label="Next"
                        >
                            &#8594;
                        </button>
                        <img src={lightbox.images[lightbox.index]} alt="Enlarged view" className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-pink-500 animate-scalein" />
                        <div className="text-center mt-4 text-pink-300 text-lg font-semibold capitalize">{lightbox.category} photo</div>
                    </div>
                </div>
            )}
            {/* Hero Section */}
            <section
                className="relative flex flex-col md:flex-row items-center justify-center text-center px-6 pt-32 pb-28 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
            >
                {/* Bokeh/flare background shapes */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                    {/* Bokeh circles */}
                    <div className="absolute left-1/4 top-10 w-60 h-60 bg-violet-900/10 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute right-4 top-1/3 w-40 h-40 bg-pink-900/10 rounded-full blur-2xl animate-bounce" />
                    <div className="absolute left-1/3 bottom-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse-slow" />
                    {/* Faint grid overlay */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="800" height="400" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-xl md:w-1/2 mb-10 md:mb-0 md:mr-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-xl text-yellow-400 animate-float">
                        Capturing Moments, Creating Memories
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-8">
                        Professional Photography for Weddings, Portraits, Events & More
                    </p>
                    <a
                        href="#contact"
                        className="px-10 py-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-black rounded-full shadow-lg hover:scale-105 transition font-bold text-lg"
                    >
                        Book a Session
                    </a>
                </div>
               
                <div className="relative md:w-[600px] md:h-full w-full flex flex-col items-center border border-white rounded-xl p-4 flex items-center ">
                    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg flex items-center justify-center w-full h-100">
                        <img
                            src={heroBackgroundImages[heroBackgroundIndex]}
                            alt={`Portfolio ${heroBackgroundIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg transition-all duration-700"
                        />
                    </div>
                    <div className="absolute top-50 right-[-10px] bg-gray-900 p-2 rounded-2xl shadow-lg flex items-center justify-center w-[160px] h-[250px] border border-white p-3 animate-float">
                        <img
                            src={heroBackgroundImages[heroBackgroundIndex]}
                            alt={`Portfolio ${heroBackgroundIndex + 1}`}
                            className="w-full h-full object-cover rounded-xl transition-all duration-700"
                        />
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section id="about" className='bg-gradient-to-b from-black via-gray-700 to-black px-auto py-20 flex justify-center'>
                <div className="relative max-w-4xl px-6 py-14 bg-gradient-to-b from-black via-gray-800 to-black rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                    {/* Decorative background shapes */}
                    <div className="absolute -top-10 -left-10 w-60 h-56 bg-yellow-900 rounded-full blur-2xl z-0 animate-bounce" />
                    <div className="absolute -bottom-30 right-0 w-30 h-30 bg-pink-500 rounded-full blur-3xl z-0 animate-bounce" />
                    {/* Portfolio Image with glow */}
                    <div className="flex-shrink-0 relative z-10">
                        <div className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-400 rounded-2xl shadow-2xl">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/011/155/410/small_2x/wild-photography-and-photo-studio-logo-vector.jpg"
                                alt="Portfolio website preview"
                                className="w-48 h-48 rounded-2xl object-cover bg-gray-800 shadow-xl border-4 border-gray-900"
                                style={{ boxShadow: '0 0 32px 0 rgba(255, 221, 51, 0.15)' }}
                            />
                        </div>
                    </div>
                    {/* About Content */}
                    <div className="flex-1 text-left relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                            About Us
                        </h2>
                        <p className="text-lg text-white/90 mb-8">
                            Welcome to our website! Here you can explore a curated selection of my best work, from weddings and portraits to events and creative projects. Easily browse galleries, read client testimonials, and book your next session—all in one place.
                        </p>
                        {/* Highlight Features */}
                        <div className="flex flex-col sm:flex-row gap-8 mt-6">
                            <div className="text-center flex-1">
                                <div className="text-xl font-extrabold text-yellow-400 mb-1">Easy Booking</div>
                                <div className="text-sm text-white/70">Schedule your session online</div>
                            </div>
                            <div className="text-center flex-1">
                                <div className="text-xl font-extrabold text-pink-400 mb-1">Portfolio Highlights</div>
                                <div className="text-sm text-white/70">Curated galleries & projects</div>
                            </div>
                            <div className="text-center flex-1">
                                <div className="text-xl font-extrabold text-purple-400 mb-1">Client Stories</div>
                                <div className="text-sm text-white/70">Read real testimonials</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* E-commerce Section */}
            <section className='bg-gradient-to-b from-black via-gray-700 to-black px-auto py-20 flex justify-center'>
                <div className="relative w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#181818] via-[#232526] to-[#181818] py-20 px-6 rounded-3xl my-20 shadow-2xl max-w-5xl mx-auto overflow-hidden">
                    {/* Decorative glowing shapes */}
                    <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl z-0" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-2xl z-0" />
                    {/* Images Side */}
                    <div className="relative flex-1 flex justify-center mb-10 md:mb-0 min-h-[240px] z-10 ">
                        {/* Background images */}
                        <img
                            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                            alt="Product 1"
                            className={`w-40 h-40 object-cover rounded-xl shadow-2xl absolute left-0 top-12 border-4 border-gray-900 transition-all duration-300 ${hoveredImg === 0 ? 'z-30 scale-105' : 'z-0'} animate-sparkle`}
                            style={{ boxShadow: '0 8px 32px 0 rgba(255, 221, 51, 0.10)' }}
                            onMouseEnter={() => setHoveredImg(0)}
                            onMouseLeave={() => setHoveredImg(null)}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                            alt="Product 2"
                            className={`w-40 h-40 object-cover rounded-xl shadow-2xl absolute left-80 top-0 border-4 border-gray-900 transition-all duration-300 ${hoveredImg === 1 ? 'z-30 scale-105' : 'z-10'} animate-sparkle`}
                            style={{ boxShadow: '0 8px 32px 0 rgba(236, 72, 153, 0.10)' }}
                            onMouseEnter={() => setHoveredImg(1)}
                            onMouseLeave={() => setHoveredImg(null)}
                        />
                        {/* Foreground image with price and cart */}
                        <div
                            className={`relative transition-all duration-300 ${hoveredImg === 2 ? 'z-40 scale-110' : 'z-20'}`}
                            onMouseEnter={() => setHoveredImg(2)}
                            onMouseLeave={() => setHoveredImg(null)}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                                alt="Small Dusk Vase"
                                className="w-52 h-52 object-cover rounded-2xl shadow-2xl border-4 border-gray-900 animate-blob1"
                                style={{ boxShadow: '0 12px 48px 0 rgba(255, 221, 51, 0.18)' }}
                            />
                            {/* Price tag */}
                            {/* <div className="absolute top-4 left-4 bg-white/90 rounded-xl px-4 py-2 text-gray-900 font-bold shadow-lg text-base flex items-center gap-2 border border-yellow-300">
                                <span className="text-yellow-500 font-extrabold">$30</span> Small Dusk Vase
                            </div> */}
                            {/* Cart button */}
                            <button className="absolute bottom-4 right-4 bg-yellow-400 hover:bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center shadow-xl border-4 border-white/80 hover:scale-110 transition-all duration-200 animate-wiggle">
                                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                                    <circle cx="7" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Text Side */}
                    <div className="flex-1 flex flex-col items-start md:pl-16 z-10">
                        <div className="text-4xl mb-4 text-white flex items-center gap-3 font-extrabold">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path d="M6 6h15l-1.5 9h-13z" />
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                            </svg>
                            <span>Sell online. <span className="text-yellow-400">Commission free.</span></span>
                        </div>
                        <p className="text-gray-300 mb-8 max-w-md text-lg">
                            The Format Store is e-commerce made easy. Sell your unique products, services, and digital downloads online. You self-fulfill orders with no commission.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-black rounded-full font-bold shadow-xl hover:from-yellow-300 hover:to-pink-300 hover:text-black transition text-lg tracking-wide"
                        >
                            Start Selling Today
                            <span className="ml-3 text-2xl">→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Sell Direct & Mission Cards */}
            <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-black">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Sell Direct Card */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-pink-500/30 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Sell Direct</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                Skip the middleman and connect directly with your photographer. Get personalized service, 
                                custom packages, and competitive pricing without agency fees.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                    No booking fees or hidden costs
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                    Direct communication and planning
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                    Custom packages tailored to your needs
                                </li>
                            </ul>
                            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                                Book Directly
                            </button>
                        </div>
                    </div>

                    {/* Our Mission Card */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-pink-400 mb-3">Our Mission</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                To capture life's most precious moments with artistry and authenticity. We believe every 
                                story deserves to be told beautifully, creating timeless memories that last forever.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    Authentic storytelling through photography
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    Artistic vision meets technical excellence
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    Creating lasting memories for generations
                                </li>
                            </ul>
                            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="w-full bg-white pb-12">
                {/* Top Image */}
                <div className="w-full">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" // Replace with your own image
                        alt="Colorful bath bombs"
                        className="w-full h-80 object-cover object-center"
                    />
                </div>
                {/* Three Columns */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 mt-12">
                    <div>
                        <h3 className="text-xl font-bold text-yellow-600 mb-3">What is Branding Photography?</h3>
                        <p className="text-gray-700 text-base">
                            Branding photography harnesses lifestyle and product photography and professional portraiture to show the complete story of your brand. Together we will create a library of custom images that define your brand and can be used for all marketing purposes, from your website to online stores to social media and print advertising, and more.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-600 mb-3">What is Product Photography?</h3>
                        <p className="text-gray-700 text-base">
                            Product Photography shows your fabulous creations in the best light for your e-commerce needs, from layflat to lifestyle to a pure white background for your online store, Amazon and more outlets. Create a consistent, clean look with images optimized for the web, as well as print media.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-600 mb-3">What is a Personal Branding Session?</h3>
                        <p className="text-gray-700 text-base">
                            Personal Branding Photography combines both professional headshots and lifestyle/environmental portraits (carefully curated shots of you doing what you do best, in your element) for a full suite of visual imagery that tells your brand’s story clearly and effectively.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id='gallery' className="py-20 px-6 bg-black/90">
                <h2 className="text-3xl font-bold mb-10 text-yellow-400">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categoriesToShow.map((cat, idx) => (
                        <div
                            key={cat.category}
                            ref={el => (galleryRefs.current[idx] = el)}
                            className={`overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer opacity-0 translate-y-8${galleryInView[idx] ? ' animate-fadeinup' : ''}`}
                            style={getDelay(idx)}
                            onClick={() => setLightbox({ open: true, category: cat.category, images: cat.images, index: 0 })}
                        >
                            <img src={cat.cover} alt={cat.category + ' cover'} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <span className="text-white text-lg font-semibold capitalize">View {cat.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {galleryImages.length > 3 && (
                    <div className="flex justify-center mt-18">
                        <button
                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition"
                            onClick={() => setShowAllCategories(v => !v)}
                        >
                            {showAllCategories ? 'Show Less' : 'Extend'}
                        </button>
                    </div>
                )}
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-700  to-black text-center">
                <h2 className="text-3xl font-bold mb-10 text-pink-400">What Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {testimonials.map(({ quote, author }, idx) => (
                        <div
                            key={idx}
                            ref={el => (testimonialRefs.current[idx] = el)}
                            className={`bg-black/70 p-8 rounded-2xl shadow-lg border border-pink-500 opacity-0 translate-y-8${testimonialInView[idx] ? ' animate-fadeinup' : ''}`}
                            style={getDelay(idx)}
                        >
                            <p className="italic text-lg mb-4 text-gray-100">"{quote}"</p>
                            <p className="font-bold text-pink-400">{author}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Pricing Section */}
            <section className="bg-gradient-to-b from-black via-gray-800 to-black py-16 flex flex-col items-center">
                {/* Most Popular Label */}
                <div className="w-full max-w-5xl flex justify-center relative mb-0">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-black text-xs font-bold px-8 py-2 rounded-t-lg tracking-widest shadow z-10">
                        MOST POPULAR FOR PHOTOGRAPHERS
                    </div>
                </div>
                {/* Pricing Cards */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                    {/* Basic */}
                    <div className="bg-gray-800 flex flex-col items-center py-12 px-6 ">
                        <div className="text-lg font-bold mb-2 text-yellow-300">BASIC</div>
                        <div className="text-sm text-gray-300 mb-6">Start your creative career</div>
                        <div className="mb-2 text-gray-500 text-lg">
                            <span className="line-through">$10</span>
                        </div>
                        <div className="text-4xl font-extrabold mb-1 text-white">$8<span className="text-lg font-normal">/mo</span></div>
                        <div className="text-gray-300 mb-1">billed annually</div>
                        <div className="text-gray-500 text-sm mb-8">or $12 monthly</div>
                        <button className="bg-yellow-400 text-black rounded-full px-8 py-3 font-semibold text-base shadow hover:bg-yellow-300 transition">Buy Basic</button>
                    </div>
                    {/* Pro */}
                    <div className="bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 text-black flex flex-col items-center py-16 px-6 relative">
                        <div className="text-lg font-bold mb-2 text-black">PRO</div>
                        <div className="text-sm text-black/80 mb-6">Build your business</div>
                        <div className="mb-2 text-black/60 text-lg">
                            <span className="line-through">$17</span>
                        </div>
                        <div className="text-4xl font-extrabold mb-1 text-black">$11<span className="text-lg font-normal">/mo</span></div>
                        <div className="text-black mb-1">billed annually</div>
                        <div className="text-black/60 text-sm mb-8">or $24 monthly</div>
                        <button className="bg-black text-yellow-400 rounded-full px-8 py-3 font-semibold text-base shadow hover:bg-gray-900 hover:text-yellow-300 transition">Buy Pro</button>
                    </div>
                    {/* Pro Plus */}
                    <div className="bg-gray-800 flex flex-col items-center py-12 px-6">
                        <div className="text-lg font-bold mb-2 text-purple-300">PRO PLUS</div>
                        <div className="text-sm text-gray-300 mb-6">Grow your business</div>
                        <div className="mb-2 text-gray-500 text-lg">
                            <span className="line-through">$26</span>
                        </div>
                        <div className="text-4xl font-extrabold mb-1 text-white">$13<span className="text-lg font-normal">/mo</span></div>
                        <div className="text-gray-300 mb-1">billed annually</div>
                        <div className="text-gray-500 text-sm mb-8">or $36 monthly</div>
                        <button className="bg-purple-400 text-black rounded-full px-8 py-3 font-semibold text-base shadow hover:bg-purple-300 transition">Buy Pro Plus</button>
                    </div>
                </div>
                {/* See Top Features Button */}
                <div className="mt-10">
                    <button className="bg-black text-yellow-400 rounded-full px-8 py-4 font-semibold text-lg flex items-center gap-2 hover:bg-gray-900 hover:text-yellow-300 transition">
                        See Top Features <span className="text-2xl">→</span>
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black via-gray-700 to-black text-center">
                <h2 className="text-3xl font-semibold mb-6 text-pink-400">Let's Connect</h2>
                <p className="text-gray-300 mb-8">Ready to capture your story? Reach out for bookings or inquiries.</p>
                <form className="max-w-lg mx-auto flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="px-4 py-3 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-900 text-white" />
                    <input type="email" placeholder="Your Email" className="px-4 py-3 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-900 text-white" />
                    <textarea placeholder="Your Message" rows={4} className="px-4 py-3 border border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-900 text-white"></textarea>
                    <button type="submit" className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition">Send Message</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-black py-6 px-4 text-center text-sm text-gray-400 border-t border-gray-800">
                <div className="mb-2">&copy; {new Date().getFullYear()} Your Photography. All rights reserved.</div>
                <div className="flex justify-center gap-4">
                    <a href="#" className="hover:text-pink-400 transition">Instagram</a>
                    <a href="#" className="hover:text-pink-400 transition">Facebook</a>
                    <a href="mailto:hello@yourphotography.com" className="hover:text-pink-400 transition">hello@yourphotography.com</a>
                </div>
            </footer>
        </main>
    );
}
