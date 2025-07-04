'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html, Stars } from '@react-three/drei';
import Link from 'next/link';
import * as THREE from 'three';

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
  { icon: '🎨', title: 'Stunning Portfolio', desc: 'A gallery-style layout to exhibit your artworks and photography beautifully.' },
  { icon: '🛍️', title: 'Integrated Shop', desc: 'Sell prints and downloads directly from your website using Stripe or PayPal.' },
  { icon: '📷', title: 'High-Resolution Display', desc: 'Ensure your visual creations are shown in the highest quality possible.' },
  { icon: '📊', title: 'Insightful Analytics', desc: 'Track site visitors, popular works, and shop performance easily.' },
];

const testimonials = [
  { quote: '“My art found its audience online, and I sold more prints in a month than ever before!”', author: 'Lena, Mixed Media Artist' },
  { quote: '“Clients love the visual impact of my new portfolio site!”', author: 'Chris, Photographer' },
  { quote: '“This site made my Etsy store feel obsolete — it’s that good.”', author: 'Sam, Illustrator' }
];

function FloatingCanvasArt() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ height: 400 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Stars radius={80} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Suspense fallback={<Html center>Loading...</Html>}>
        <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
          <mesh>
            <dodecahedronGeometry args={[2]} />
            <meshStandardMaterial color={'#e0b0ff'} wireframe={false} roughness={0.3} metalness={0.7} />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Suspense>
    </Canvas>
  );
}

export default function ArtistLandingPage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 font-sans overflow-x-hidden">
      <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingCanvasArt />
        </div>
        <div className="relative z-10 bg-black/70 backdrop-blur-lg p-8 rounded-xl shadow-xl">
          <h1>Solopreneur Portfolio</h1>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Your Art, Your Gallery
          </h1>
          <p className="text-sm sm:text-xl max-w-xl mb-6 text-gray-300">
            Launch a stunning portfolio and sell your creative work online with ease.
          </p>
          <a
            href="#book"
            className="bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300 font-semibold px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

      <section className="w-full flex justify-center px-4 -mt-8 sm:-mt-12 mb-8 sm:mb-12  z-10">
        <div className="bg-gray-800/90 backdrop-blur-lg border-4 border-purple-500 shadow-xl rounded-2xl px-6 sm:px-8 py-6 sm:py-8 max-w-6xl w-full z-10" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/sunset-mountains-wild-mountains-landscape_263779-1389.jpg?semt=ais_hybrid&w=740)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="text-center mb-4 bg-black/50 backdrop-blur-lg rounded-2xl p-4">
            <span className="text-2xl mb-2 block animate-float">🧭</span>
            <span className="uppercase text-xs tracking-widest text-purple-100 font-bold">Explore Artist Demos</span><br />
            <span className="text-xs tracking-widest text-purple-100 font-bold">Choose a starting point tailored for your craft.</span>
          </div>
          <div className="h-[350px] sm:h-[200px] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <Link href="/solopreneur/photographers" className="h-[100px] sm:h-[200px] flex items-end justify-center p-4 border border-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-black/50 backdrop-blur-lg rounded-2xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* <div className="text-2xl mb-2">📷</div> */}
              <div className="font-semibold text-gray-100 bg-black/50 backdrop-blur-lg rounded-lg p-2">Photographers</div>
            </Link>
            <Link href="/solopreneur/artists" className="h-[100px] sm:h-[200px] flex items-end justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 border border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer" style={{ backgroundImage: 'url(https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0917/usr/images/news/main_image/137/abstract-elegance-6-.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* <div className="text-2xl mb-2">🎨</div> */}
              <div className="font-semibold text-gray-100 bg-black/50 backdrop-blur-lg rounded-lg p-2">Artists</div>
            </Link>
            <Link href="/solopreneur/craft-makers" className="h-[100px] sm:h-[200px] flex items-end justify-center bg-gradient-to-br from-gray-800 to-gray-950 rounded-lg p-4 border border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer" style={{
              backgroundImage: "url(https://i0.wp.com/outliermedia.org/wp-content/uploads/2021/01/Untitled-design-35.png?fit=900%2C600&ssl=1)",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              {/* <div className="text-2xl mb-2">🧵</div> */}
              <div className="font-semibold text-gray-100 bg-black/50 backdrop-blur-lg rounded-lg p-2">Craft Goods</div>
            </Link>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className={`overflow-hidden sm:overflow-visible py-20 px-6 text-center transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="relative text-xl sm:text-3xl text-violet-900 font-semibold mb-12 bg-white p-4 rounded-2xl shadow-lg z-100 sm:z-1">Why Artists Love This</h2>
        <div className='flex absolute  top-[-40px] left-0 justify-center items-center animate-float-slow'>
          <img src="https://media.istockphoto.com/id/577949148/photo/vintage-stylized-photo-of-paintbrushes-closeup-and-artist-palett.jpg?s=612x612&w=0&k=20&c=8fuPBz7S5wGDOMix0t0ubL0578WpIslf8INTDYBQU4Y=" alt="" className='sm:w-[400px] h-[400px] brightness-30 sm:brightness-50 blur-xs' style={{ clipPath: 'polygon(0 1%, 70% 0, 79% 100%, 9% 100%)' }} />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={`bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-100 border-t-4 border-purple-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: featuresVisible ? `${idx * 0.1 + 0.2}s` : '0s' }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-gray-100">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className='flex absolute sm:bottom-70 sm:right-[-70px] sm:top-0 md:top-0 md top-250 right-[-35px] justify-center items-center z-9 animate-float'>
          <img src="https://i.pinimg.com/474x/85/43/10/8543108ec25f74c16829b6889474fc65.jpg" alt="" className='w-[400px] h-[400px] brightness-80' style={{ clipPath: 'polygon(33% 0, 100% 0, 79% 100%, 9% 100%)' }} />
        </div>
      </section>

      <section className="py-20 px-6 mb-20 bg-gradient-to-br from-gray-800 to-black text-center">
        <h2 className="relative text-3xl font-semibold mb-10 text-purple-900 bg-white p-4 rounded-2xl shadow-lg z-100 sm:z-1">What Creators Say</h2>
        <div className="max-w-xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl shadow-lg p-8 min-h-[160px] flex flex-col items-center">
            <blockquote className="text-lg italic text-gray-300 mb-4">
              {testimonials[testimonialIdx].quote}
            </blockquote>
            <div className="text-purple-400 font-semibold">{testimonials[testimonialIdx].author}</div>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === testimonialIdx ? 'bg-purple-500' : 'bg-gray-600'} transition`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
      `}</style>
    </main>
  );
}
