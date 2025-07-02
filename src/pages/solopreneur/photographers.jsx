import React, { useState, useEffect } from 'react';

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
            'https://121clicks.com/wp-content/uploads/2018/11/cristina_venedict_fine_art_photography_14.jpg',
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

export default function PhotographerLanding() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [lightbox, setLightbox] = useState({ open: false, category: '', images: [], index: 0 });

    const nextSlide = () => setCarouselIndex((carouselIndex + 1) % carouselImages.length);
    const prevSlide = () => setCarouselIndex((carouselIndex - 1 + carouselImages.length) % carouselImages.length);

    // Auto-slide carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    // Lightbox navigation
    const lightboxNext = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }));
    const lightboxPrev = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans overflow-x-hidden">
            {/* Lightbox Overlay */}
            {lightbox.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox({ open: false, category: '', images: [], index: 0 })}>
                    <div className="relative max-w-3xl w-full px-4" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
                            onClick={() => setLightbox({ open: false, category: '', images: [], index: 0 })}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
                            onClick={lightboxPrev}
                            aria-label="Previous"
                        >
                            &#8592;
                        </button>
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-2 text-2xl hover:bg-pink-500 transition z-10"
                            onClick={lightboxNext}
                            aria-label="Next"
                        >
                            &#8594;
                        </button>
                        <img src={lightbox.images[lightbox.index]} alt="Enlarged view" className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-pink-500" />
                        <div className="text-center mt-4 text-pink-300 text-lg font-semibold capitalize">{lightbox.category} photo</div>
                    </div>
                </div>
            )}
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-28 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308)' }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">Capturing Moments, Creating Memories</h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-8">Professional Photography for Weddings, Portraits, Events & More</p>
                    <a href="#contact" className="px-10 py-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-black rounded-full shadow-lg hover:scale-105 transition font-bold text-lg">Book a Session</a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 text-center bg-black/80">
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">Meet Your Photographer</h2>
                <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">With a passion for storytelling and an eye for detail, I transform fleeting moments into timeless art. Whether it's a grand celebration or an intimate portrait, every frame is crafted with creativity and care.</div>
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" alt="Photographer" className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-pink-500 shadow-xl" />
            </section>

            {/* Carousel Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-800 to-black text-center">
                <h2 className="text-3xl font-semibold mb-10 text-yellow-400">Featured Shots</h2>
                <div className="relative max-w-2xl mx-auto">
                    <img src={carouselImages[carouselIndex]} alt="Featured" className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-all duration-500" />
                    <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-pink-500 text-white rounded-full p-3 shadow-lg transition z-10"><span className="text-2xl">&#8592;</span></button>
                    <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-pink-500 text-white rounded-full p-3 shadow-lg transition z-10"><span className="text-2xl">&#8594;</span></button>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                    {carouselImages.map((_, idx) => (
                        <span key={idx} className={`inline-block w-3 h-3 rounded-full ${idx === carouselIndex ? 'bg-pink-500' : 'bg-gray-500'}`}></span>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-6 bg-black/90">
                <h2 className="text-3xl font-semibold mb-10 text-pink-400">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {galleryImages.map((cat, idx) => (
                        <div
                            key={cat.category}
                            className="overflow-hidden rounded-2xl shadow-lg group relative cursor-pointer"
                            onClick={() => setLightbox({ open: true, category: cat.category, images: cat.images, index: 0 })}
                        >
                            <img src={cat.cover} alt={cat.category + ' cover'} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <span className="text-white text-lg font-semibold capitalize">View {cat.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-gray-800 to-black text-center">
                <h2 className="text-3xl font-semibold mb-10 text-yellow-400">What Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {testimonials.map(({ quote, author }, idx) => (
                        <div key={idx} className="bg-black/70 p-8 rounded-2xl shadow-lg border border-pink-500">
                            <p className="italic text-lg mb-4 text-gray-100">"{quote}"</p>
                            <p className="font-bold text-pink-400">{author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-black/80 text-center">
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
