import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Physics, usePlane, usePointToPointConstraint, useSphere } from '@react-three/cannon';

const features = [
  {
    icon: '🧵',
    title: 'Handmade Quality',
    desc: 'Showcase your unique, artisan craft goods with beautiful product galleries.'
  },
  {
    icon: '🛒',
    title: 'Easy Online Store',
    desc: 'Sell direct with a simple, modern e-commerce setup—no tech headaches.'
  },
  {
    icon: '📦',
    title: 'Seamless Orders',
    desc: 'Automate order tracking, shipping, and customer notifications.'
  },
  {
    icon: '💌',
    title: 'Customer Connection',
    desc: 'Grow your audience with email marketing and social media integration.'
  }
];

const steps = [
  {
    icon: '🖼️',
    title: '1. Gallery',
    desc: 'We build a stunning gallery for your crafts.'
  },
  {
    icon: '🛒',
    title: '2. Storefront',
    desc: 'Launch your online shop and start selling.'
  },
  {
    icon: '🚚',
    title: '3. Fulfillment',
    desc: 'Automate orders and shipping.'
  },
  {
    icon: '📣',
    title: '4. Grow',
    desc: 'Connect with customers and grow your brand.'
  }
];

const testimonials = [
  {
    quote: '“My sales doubled in the first month! The site looks amazing and is so easy to use.”',
    author: 'Priya, Macrame Artist'
  },
  {
    quote: '“I love how my products are showcased. My customers always compliment the shop!”',
    author: 'Sam, Woodworker'
  },
  {
    quote: '“Order management is a breeze now. I can focus on creating, not admin.”',
    author: 'Aditi, Ceramicist'
  }
];

const products = [
  {
    image: '/collections/boutique.jpg',
    title: 'Natural Jute Twine',
    desc: 'Eco-friendly, strong, and perfect for crafts.'
  },
  {
    image: '/collections/collection1.jpg',
    title: 'Cotton Macrame Cord',
    desc: 'Soft, durable, and ideal for macrame projects.'
  },
  {
    image: '/collections/collection2.jpg',
    title: 'Wooden Dowels',
    desc: 'Smooth, sturdy dowels for wall hangings and crafts.'
  }
];

const craftCategories = [
  {
    name: 'Decorative Crafts',
    desc: 'Artful creations to beautify your home and spaces.',
    products: [
      {
        title: 'Hand-Painted Vase',
        image: 'https://m.media-amazon.com/images/I/61dZBfGBu-L.jpg',
      },
      {
        title: 'Wall Macrame',
        image: 'https://brownliving.in/cdn/shop/files/macrame-owl-wall-hanging-sarmaya-sustainable-wall-decor-brown-living-sar136-794625.jpg?v=1714207247',
      },
      {
        title: 'Decorative Candles',
        image: 'https://4.imimg.com/data4/CG/BF/MY-22546348/artificial-decorative-candles-500x500.jpg',
      },
    ],
  },
  {
    name: 'Textile Crafts',
    desc: 'Beautiful and functional items made from fabric, yarn, or thread.',
    products: [
      {
        title: 'Handwoven Scarf',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_3zw1X7qR6nnrqNqUHe6Or4xfZmLRUSPXw&s',
      },
      {
        title: 'Embroidered Cushion',
        image: 'https://nestasia.in/cdn/shop/files/cushioncover_1_bb4a0b93-2249-4256-8732-9767bbc897b0.jpg?v=1704785089',
      },
      {
        title: 'Macrame Plant Hanger',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbplXUZtXEODGCOLRs70Vi68Bk4tSI7zol1w&s',
      },
    ],
  },
  {
    name: 'Paper Crafts',
    desc: 'Creative works using paper, from cards to origami.',
    products: [
      {
        title: 'Handmade Greeting Card',
        image: 'https://m.media-amazon.com/images/I/61+SPCYtqCL.jpg',
      },
      {
        title: 'Origami Crane',
        image: 'https://savingcranes.org/wp-content/uploads/2024/11/origami-crane_Washi-indigo-fans_600.jpg',
      },
      {
        title: 'Paper Flowers',
        image: 'https://cdn.shopify.com/s/files/1/1755/5237/files/Rosy_Bee_Paper_Flower_Final_3_600x600.png?v=1698184593',
      },
    ],
  },
  {
    name: 'Functional Crafts',
    desc: 'Handmade items that are both beautiful and useful.',
    products: [
      {
        title: 'Ceramic Mug',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_t5LbHMttAcJN5xyHTe2zdguV_OO8DvP7A&s',
      },
      {
        title: 'Wooden Bowl',
        image: 'https://m.media-amazon.com/images/I/81LbfZQPsuL.jpg',
      },
      {
        title: 'Knitted Coaster',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilYURt95aKK8BlZdMjxhfqQM1Ft4tOeK5RA&s',
      },
    ],
  },
  {
    name: 'Fashion Crafts',
    desc: 'Wearable art and accessories made by hand.',
    products: [
      {
        title: 'Beaded Necklace',
        image: 'https://rimli.in/cdn/shop/files/HarshiPearlBeadedNecklacenonsilverrimli05.webp?v=1712570249',
      },
      {
        title: 'Leather Bracelet',
        image: 'https://japam.in/cdn/shop/files/Libra_Zodiac_3.jpg?v=1736143078&width=1214',
      },
      {
        title: 'Crochet Hat',
        image: 'https://i.ytimg.com/vi/H5HO77Kjuqc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9UA7XvL0g958rfE2MLfoO4j6DiQ',
      },
    ],
  },
  {
    name: 'Pottery',
    desc: 'Hand-thrown and sculpted clay art and wares.',
    products: [
      {
        title: 'Stoneware Vase',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQe5ajd8CNkk0rYWbK-GEQ4_qEyP2SYZZQbw&s',
      },
      {
        title: 'Ceramic Plate',
        image: 'https://m.media-amazon.com/images/I/71sjkhA04DL.jpg',
      },
      {
        title: 'Clay Planter',
        image: 'https://www.zwende.com/cdn/shop/products/Happy_Earth_Studio_Table_Decor_Planters_Set_of_2_Src_20.jpg?v=1655876615&width=1080',
      },
    ],
  },
  {
    name: 'Jewelry Making',
    desc: 'Handcrafted adornments from beads, metal, and more.',
    products: [
      {
        title: 'Wire Wrapped Ring',
        image: 'https://images.squarespace-cdn.com/content/v1/5eaa356add3abf2466005deb/1592352773775-6H6CCP0NCLVI8JR2YQ4D/IMG_2351.jpg',
      },
      {
        title: 'Gemstone Earrings',
        image: 'https://attrangi.in/cdn/shop/files/roza-gemstone-long-western-earrings-or-gemzee-collection-attrangi-3.jpg?v=1739815371',
      },
      {
        title: 'Beaded Bracelet',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3nuZYKrmJDc7dvIzEmcnWaagfZtIJ2AHzA&s',
      },
    ],
  },
  {
    name: 'Knitting',
    desc: 'Cozy, creative projects with yarn and needles.',
    products: [
      {
        title: 'Chunky Knit Blanket',
        image: 'https://m.media-amazon.com/images/I/81aBdJgk78L.jpg',
      },
      {
        title: 'Handmade Socks',
        image: 'https://images.meesho.com/images/products/365508736/mirho_512.webp',
      },
      {
        title: 'Knitted Scarf',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkGoY5DfUDYm0NSEbUbYSGGc_Cdaccx972A&s',
      },
    ],
  },
  {
    name: 'Woodworking',
    desc: 'Functional and decorative pieces crafted from wood.',
    products: [
      {
        title: 'Hand-carved Spoon',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-T6Tu1IW2bx12IpUIAx70pEFFm-J7RZAFw&s',
      },
      {
        title: 'Wooden Jewelry Box',
        image: 'https://d2ma7w4w9grdob.cloudfront.net/media/63692Handmade-Wooden-Jewelry-Box-in-Multi-Colour-Finish-4.jpg',
      },
      {
        title: 'Rustic Wall Shelf',
        image: 'https://www.woodensure.com/assets/images/galleries/16791376161674885929m1FDP4UG.png',
      },
    ],
  },
  {
    name: 'Leatherwork',
    desc: 'Hand-stitched and tooled leather goods.',
    products: [
      {
        title: 'Leather Wallet',
        image: 'https://www.glidinggearcompany.com/cdn/shop/files/IMG_3164.jpg?v=1682422929',
      },
      {
        title: 'Key Fob',
        image: 'https://i.etsystatic.com/16348200/r/il/93e82c/2081880800/il_570xN.2081880800_62ia.jpg',
      },
      {
        title: 'Leather Notebook Cover',
        image: 'https://i.etsystatic.com/14324118/r/il/0dcf45/2517923186/il_570xN.2517923186_2i9n.jpg',
      },
    ],
  },
  {
    name: 'Origami',
    desc: 'The Japanese art of paper folding, from simple to intricate.',
    products: [
      {
        title: 'Origami Lotus',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC04uzSTeiNbFZolMmeZ1EPDezF5N7UjkvcA&s',
      },
      {
        title: 'Paper Crane',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGuZVTg21KAn-q3Je8Qnnc35Ex4nUsxystA&s',
      },
      {
        title: 'Origami Butterfly',
        image: 'https://www.origamispirit.com/wp-content/uploads/2011/05/Evis-butterfly.jpg',
      },
    ],
  },
];

const makers = [
  {
    name: 'Ananya Sharma',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Founder and Creative Director',
  },
  {
    name: 'Priya Patel',
    img: 'https://randomuser.me/api/portraits/women/69.jpg',
    bio: 'Jewelry Designer',
  },
  {
    name: 'Samir Mehta',
    img: 'https://randomuser.me/api/portraits/men/70.jpg',
    bio: 'Pottery Artist',
  },
  {
    name: 'Riya Gupta',
    img: 'https://randomuser.me/api/portraits/women/71.jpg',
    bio: 'Knitting Master',
  },
];
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
  return [ref, visible];
}

// Animated SVG wave for header bottom
function AnimatedWave() {
  return (
    <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none z-10">
      <svg
        className="w-full h-12 md:h-16 animate-wave"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          id="wavePath"
          d="M0,40 Q360,80 720,40 T1440,40 V80 H0 Z"
          fill="url(#waveGradient)"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="M0,40 Q360,80 720,40 T1440,40 V80 H0 Z;
                    M0,40 Q360,0 720,40 T1440,40 V80 H0 Z;
                    M0,40 Q360,80 720,40 T1440,40 V80 H0 Z"
          />
        </path>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e7c9a9" />
            <stop offset="100%" stopColor="#f5eee6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Animated floating shapes for hero
function HeroFloatingShapes() {
  return (
    <>
      <svg className="absolute left-10 top-10 w-32 h-32 opacity-30 animate-float-slow z-0" viewBox="0 0 200 200" fill="none">
        <path d="M40,-60C52,-52,60,-40,65,-25C70,-10,72,8,65,22C58,36,42,46,25,55C8,64,-10,72,-25,65C-40,58,-52,36,-60,15C-68,-6,-72,-28,-65,-45C-58,-62,-40,-74,-22,-70C-4,-66,24,-68,40,-60Z" fill="#bfa181" />
      </svg>
      <svg className="absolute right-10 top-32 w-24 h-24 opacity-20 animate-float z-0" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" fill="#f5eee6" />
      </svg>
      <svg className="absolute left-1/3 bottom-10 w-28 h-28 opacity-25 animate-float-slow z-0" viewBox="0 0 200 200" fill="none">
        <rect x="30" y="30" width="140" height="140" rx="40" fill="#e7c9a9" />
      </svg>
    </>
  );
}

// Add keyframes for wave and float
const styleTag2 = `
@keyframes wave {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50px); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(30px); }
}
.animate-wave { animation: wave 8s linear infinite alternate; }
.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
`;
if (typeof window !== 'undefined' && !document.getElementById('header-wave-keyframes')) {
  const style = document.createElement('style');
  style.id = 'header-wave-keyframes';
  style.innerHTML = styleTag2;
  document.head.appendChild(style);
}

function ModernHeader() {
  return (
    <header className="relative w-full">
      {/* Top Layer: Logo + Name */}
      <div
        className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-gradient-to-r from-[#6b4f27] via-[#a47551] to-[#c8b08e] shadow-lg gap-2 md:gap-0"

      >
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93PJj_Q7AG22ABFjaJTRsN27bL5nlkJfVww&s" alt="Craft Makers Logo" className="w-10 h-10 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow" />
        </div>
        <div className="mt-2 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">Craft Makers</span>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 px-2 sm:px-6 md:px-12 py-2 sm:py-3 bg-gradient-to-r from-[#f5eee6] via-[#e7c9a9] to-[#bfa181] shadow-md relative z-10"
      >
        <a href="#home" className="px-4 sm:px-5 py-2 rounded-full font-semibold bg-white/90 text-[#6b4f27] shadow hover:bg-[#e7c9a9] transition text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">Home</a>
        <a href="#about" className="px-4 sm:px-5 py-2 rounded-full font-semibold bg-white/90 text-[#6b4f27] shadow hover:bg-[#e7c9a9] transition text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">About</a>
        <a href="#services" className="px-4 sm:px-5 py-2 rounded-full font-semibold bg-white/90 text-[#6b4f27] shadow hover:bg-[#e7c9a9] transition text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">Services</a>
        <a href="#contact" className="px-4 sm:px-5 py-2 rounded-full font-semibold bg-white/90 text-[#6b4f27] shadow hover:bg-[#e7c9a9] transition text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">Contact</a>
    </nav>
    </header>
  );
}

const CLOTH_WIDTH = 2.2;
const CLOTH_HEIGHT = 1.3;
const SEG_X = 16;
const SEG_Y = 12;
const PARTICLE_RADIUS = 0.03;

function idx(x, y) {
  return y * (SEG_X + 1) + x;
}

const Particle = React.forwardRef(({ position, fixed }, ref) => {
  const [sphereRef, api] = useSphere(() => ({
    mass: fixed ? 0 : 0.1,
    position,
    type: fixed ? 'Static' : 'Dynamic',
    args: [PARTICLE_RADIUS],
    sleepSpeedLimit: 0.01,
    sleepTimeLimit: 0.1,
  }));
  React.useImperativeHandle(ref, () => ({ api }));
  return <mesh ref={sphereRef} visible={false} />;
});

function Constraint({ a, b }) {
  usePointToPointConstraint(a, b, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] });
  return null;
}

function ClothSim({ mouse, active }) {
  const particles = React.useMemo(() => Array.from({ length: (SEG_X + 1) * (SEG_Y + 1) }, () => React.createRef()), []);
  const pinRef = particles[0];

  // Store positions for all particles
  const positionsRef = React.useRef(Array((SEG_X + 1) * (SEG_Y + 1)).fill([0, 0, 0]));

  // Subscribe to each particle's position
  React.useEffect(() => {
    const unsubscribes = particles.map((ref, i) => {
      if (!ref.current) return null;
      return ref.current.api.position.subscribe((v) => {
        positionsRef.current[i] = v;
      });
    });
    return () => {
      unsubscribes.forEach((unsub) => unsub && unsub());
    };
  }, [particles]);

  React.useEffect(() => {
    if (!active) return;
    if (!pinRef.current) return;
    pinRef.current.api.position.set(mouse[0], mouse[1], 0);
  }, [mouse, active, pinRef]);

  const particlePositions = React.useMemo(() => {
    const arr = [];
    for (let y = 0; y <= SEG_Y; y++) {
      for (let x = 0; x <= SEG_X; x++) {
        const px = (x / SEG_X - 0.5) * CLOTH_WIDTH;
        const py = (0.5 - y / SEG_Y) * CLOTH_HEIGHT;
        arr.push([px, py, 0]);
      }
    }
    return arr;
  }, []);

  const constraints = React.useMemo(() => {
    const arr = [];
    for (let y = 0; y <= SEG_Y; y++) {
      for (let x = 0; x <= SEG_X; x++) {
        if (x < SEG_X) arr.push([idx(x, y), idx(x + 1, y)]);
        if (y < SEG_Y) arr.push([idx(x, y), idx(x, y + 1)]);
      }
    }
    return arr;
  }, []);

  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < positionsRef.current.length; i++) {
      const [px, py, pz] = positionsRef.current[i];
      posAttr.setXYZ(i, px, py, pz);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <Physics gravity={[0, -6, 0]} iterations={20} allowSleep={false}>
      {particlePositions.map((pos, i) => (
        <Particle key={i} ref={particles[i]} position={pos} fixed={i === 0 && active} />
      ))}
      {constraints.map(([a, b], i) => (
        <Constraint key={i} a={particles[a]} b={particles[b]} />
      ))}
      <mesh ref={meshRef}>
        <planeGeometry args={[CLOTH_WIDTH, CLOTH_HEIGHT, SEG_X, SEG_Y]} />
        <meshStandardMaterial color="#c81d1d" side={2} roughness={0.6} metalness={0.2} />
      </mesh>
    </Physics>
  );
}

function ThreeHeroWithCloth({ onPointerMove, onPointerLeave, onPointerEnter, mouse, active }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerEnter={onPointerEnter}
        shadows
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
        <Suspense fallback={null}>
          <ClothSim mouse={mouse} active={active} />
        </Suspense>
      </Canvas>
    </div>
  );
}



// Add keyframes for animated gradient
const styleTag = `
@keyframes gradientMove {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}
`;
if (typeof window !== 'undefined' && !document.getElementById('animated-gradient-keyframes')) {
  const style = document.createElement('style');
  style.id = 'animated-gradient-keyframes';
  style.innerHTML = styleTag;
  document.head.appendChild(style);
}

function AnimatedBlobBg() {
  return (
    <svg className="absolute -top-24 -left-24 w-[40vw] h-[40vw] opacity-30 z-0 animate-pulse" viewBox="0 0 600 600" fill="none">
      <g filter="url(#blur1)">
        <path fill="#a78bfa" d="M300,520Q220,600,120,520Q20,440,80,320Q140,200,260,120Q380,40,480,120Q580,200,520,320Q460,440,380,520Q300,600,300,520Z" />
      </g>
      <defs>
        <filter id="blur1" x="0" y="0" width="600" height="600" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>
    </svg>
  );
}

function FloatingCTA() {
  return (
    <a href="#contact" className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-pink-500 to-teal-400 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold hover:scale-105 hover:shadow-pink-300 transition-all duration-300 backdrop-blur-lg">
      Get in Touch
    </a>
  );
}

export default function CraftMakersShowcase() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [featuresRef, featuresVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [productsRef, productsVisible] = useReveal();
  const [testimonialsRef, testimonialsVisible] = useReveal();

  // Parallax effect for hero floating icons
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const handleScroll = () => setParallax(window.scrollY / 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories ? craftCategories : craftCategories.slice(0, 6);

  // Hero cloth mouse logic
  const [mouse, setMouse] = useState([0, 0]);
  const [clothActive, setClothActive] = useState(false);
  const heroRef = useRef();

  // Map screen mouse to 3D plane coordinates
  const handlePointerMove = (e) => {
    const bounds = heroRef.current.getBoundingClientRect();
    // Normalize to [-2.5, 2.5] horizontally, [-1.5, 1.5] vertically
    const x = ((e.clientX - bounds.left) / bounds.width) * 5 - 2.5;
    const y = -(((e.clientY - bounds.top) / bounds.height) * 3 - 1.5);
    setMouse([x, y]);
  };
  const handlePointerEnter = () => setClothActive(true);
  const handlePointerLeave = () => setClothActive(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5eee6] via-[#e7c9a9] to-[#bfa181] text-[#4b2e09] font-sans relative overflow-x-hidden">
      <ModernHeader />
      <AnimatedBlobBg />
      {/* Hero Section with 3D Canvas and floating shapes */}
      <section ref={heroRef} className="w-full relative flex flex-col items-center justify-center text-center min-h-[60vh] py-16 sm:py-24 px-2 sm:px-4 overflow-hidden bg-gradient-to-br from-[#f5eee6] via-[#e7c9a9] to-[#bfa181]">
        <HeroFloatingShapes />
        <div className="relative z-10 w-full max-w-2xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl px-4 sm:px-8 py-8 sm:py-12 mt-8 border border-[#e7c9a9]">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 bg-white drop-shadow-lg animate-wave rounded-xl">Craft Makers</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8 text-[#6b4f27]">Discover, shop, and celebrate the world of handmade crafts. Unique, sustainable, and made with love by real artisans.</p>
          <a href="#categories" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#a47551] to-[#bfa181] text-white rounded-full font-bold shadow hover:bg-[#c8b08e] hover:text-[#6b4f27] transition-all duration-300 text-base sm:text-lg">Explore Craft Categories</a>
        </div>
        <AnimatedWave />
      </section>
      {/* About the Company */}
      <section id="about" className="w-full max-w-4xl mx-auto py-10 sm:py-16 px-2 sm:px-4 text-center bg-white/80 rounded-3xl shadow-lg mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#a47551] border-b-3 border-[#e7c9a9] pb-6">About Our Company</h2>
        <p className="text-base sm:text-lg text-[#6b4f27] mb-6">Craft Makers is a collective of passionate artisans and creators, dedicated to celebrating the beauty of handmade crafts. We believe in the power of creativity, sustainability, and community. Our platform connects makers and lovers of crafts, offering a curated showcase of unique, high-quality creations from around the world.</p>
      </section>
      {/* Company Journey */}
      <section className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-2 sm:px-4 bg-[#f5eee6] rounded-3xl shadow-lg mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-[#a47551] text-center border-b-3 border-[#e7c9a9] pb-6">Our Journey</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex-1 flex flex-col items-center mb-6 md:mb-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#bfa181] flex items-center justify-center mb-2 font-bold text-white">2018</div>
            <div className="text-[#6b4f27] mb-4 text-sm sm:text-base">Founded as a small local craft fair in Jaipur, India.</div>
          </div>
          <div className="flex-1 flex flex-col items-center mb-6 md:mb-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e7c9a9] flex items-center justify-center mb-2 font-bold text-[#6b4f27]">2020</div>
            <div className="text-[#6b4f27] mb-4 text-sm sm:text-base">Launched our online platform, connecting artisans nationwide.</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c8b08e] flex items-center justify-center mb-2 font-bold text-[#6b4f27]">2023</div>
            <div className="text-[#6b4f27] mb-4 text-sm sm:text-base">Reached 10,000+ customers and expanded to global shipping.</div>
            </div>
        </div>
      </section>
      {/* Motive & Goal */}
      <section className="w-full max-w-4xl mx-auto py-10 sm:py-16 px-2 sm:px-4 text-center shadow-xl rounded-[40px] sm:rounded-[100px] bg-[#f5eee6] mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#a47551]">Our Motive & Goal</h2>
        <p className="text-base sm:text-lg text-[#6b4f27] mb-6">Our mission is to nurture creativity, support artisans, and make handmade crafts accessible to all. We aim to build a thriving, sustainable community where every maker can shine and every customer can find something truly special.</p>
      </section>
      {/* Craft Categories */}
      <section id="services" className="w-full max-w-6xl mx-auto py-10 sm:py-16 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#a47511] text-center">Our services</h2>
        {visibleCategories.map((cat, idx) => (
          <div key={cat.name} className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#a47551] tracking-tight">{cat.name}</h2>
            <p className="text-base sm:text-lg text-[#6b4f27] mb-6">{cat.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {cat.products.map((prod, i) => (
                <div key={prod.title} className="bg-[#f5eee6] rounded-2xl shadow p-4 sm:p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-[#e7c9a9] border">
                  <img src={prod.image} alt={prod.title} className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl mb-4 shadow max-w-full" />
                  <h3 className="text-base sm:text-lg font-semibold text-[#6b4f27] mb-1 text-center">{prod.title}</h3>
              </div>
              ))}
            </div>
            {idx < visibleCategories.length - 1 && <div className="my-8 sm:my-12 border-t border-dashed border-[#e7c9a9]" />}
            </div>
          ))}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            className="px-5 sm:px-6 py-2 sm:py-3 bg-[#a47551] text-white rounded-full font-bold shadow hover:bg-[#bfa181] hover:text-[#6b4f27] transition-all duration-300 text-base sm:text-lg"
            onClick={() => setShowAllCategories((v) => !v)}
          >
            {showAllCategories ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </section>
      {/* About the Owner */}
      <section className="w-full max-w-4xl mx-auto py-10 sm:py-16 px-2 sm:px-4 flex flex-col md:flex-row items-center gap-6 sm:gap-10 bg-[#f5eee6] rounded-3xl shadow-lg mt-8 sm:mt-12">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Owner" className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#bfa181] shadow-lg mb-6 md:mb-0" />
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#a47551]">Meet the Founder: Ananya Sharma</h2>
          <p className="text-base sm:text-lg text-[#6b4f27] mb-2">Ananya is a lifelong crafter, entrepreneur, and advocate for sustainable, ethical artistry. Her vision is to empower makers and inspire creativity in every home.</p>
          <blockquote className="italic text-[#a47551] border-l-4 border-[#e7c9a9] pl-4">“Every handmade piece tells a story. I started Craft Makers to help those stories reach the world.”</blockquote>
        </div>
      </section>
      {/* Meet the Makers */}
      <section className="w-full max-w-6xl mx-auto py-10 sm:py-16 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#a47551] text-center">Meet the Makers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {makers.map((m, i) => (
            <div key={i} className="flex flex-col items-center bg-[#f5eee6] rounded-2xl shadow p-4 sm:p-6">
              <img src={m.img} alt={m.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#bfa181] shadow mb-4" />
              <h3 className="font-bold text-base sm:text-lg mb-1 text-[#6b4f27]">{m.name}</h3>
              <p className="text-[#a47551] text-xs sm:text-sm text-center">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="w-full max-w-5xl mx-auto py-10 sm:py-16 px-2 sm:px-4 text-center bg-[#f5eee6] rounded-3xl shadow-lg mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#a47551]">Why Choose Craft Makers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl mb-2">🌱</span>
            <h3 className="font-bold text-base sm:text-lg mb-1 text-[#6b4f27]">Sustainable</h3>
            <p className="text-[#a47551] text-xs sm:text-base">Eco-friendly materials and ethical practices.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl mb-2">🎨</span>
            <h3 className="font-bold text-base sm:text-lg mb-1 text-[#6b4f27]">Unique Designs</h3>
            <p className="text-[#a47551] text-xs sm:text-base">Every piece is one-of-a-kind and handmade.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl mb-2">🤝</span>
            <h3 className="font-bold text-base sm:text-lg mb-1 text-[#6b4f27]">Support Artisans</h3>
            <p className="text-[#a47551] text-xs sm:text-base">Directly empower local and global makers.</p>
            </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl mb-2">🚚</span>
            <h3 className="font-bold text-base sm:text-lg mb-1 text-[#6b4f27]">Fast Delivery</h3>
            <p className="text-[#a47551] text-xs sm:text-base">Reliable, eco-conscious shipping worldwide.</p>
          </div>
        </div>
      </section>
      <FloatingCTA />
      {/* Contact Us Book Section */}
      <section id="contact" className="w-full max-w-4xl mx-auto py-10 sm:py-16 px-2 sm:px-4 flex flex-col md:flex-row items-stretch gap-0 md:gap-10 bg-[#f5eee6] rounded-[32px] shadow-2xl mt-8 m-4 sm:mt-16 relative overflow-hidden border border-[#e7c9a9]" style={{boxShadow: '0 8px 32px 0 rgba(107,79,39,0.10)'}}>
        {/* Book spine */}
        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-[#e7c9a9] via-[#bfa181] to-[#e7c9a9] shadow-inner rounded-full z-10" style={{transform: 'translateX(-50%)'}}></div>
        {/* Left page (form) */}
        <div className="flex-1 flex flex-col justify-center items-center bg-[#f5eee6] px-4 py-8 md:py-4 md:rounded-l-[32px] relative z-20 shadow-none md:shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#a47551]">Contact Us</h2>
          <form className="w-full max-w-xs flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="rounded px-3 py-2 text-[#6b4f27] bg-white/80 border border-[#e7c9a9] focus:outline-none" />
            <input type="email" placeholder="Your Email" className="rounded px-3 py-2 text-[#6b4f27] bg-white/80 border border-[#e7c9a9] focus:outline-none" />
            <textarea placeholder="Your Message" rows={4} className="rounded px-3 py-2 text-[#6b4f27] bg-white/80 border border-[#e7c9a9] focus:outline-none" />
            <button type="submit" className="bg-[#a47551] text-white font-bold rounded px-3 py-2 hover:bg-[#bfa181] hover:text-[#6b4f27] transition">Send Message</button>
          </form>
        </div>
        {/* Right page (info/socials) */}
        <div className="flex-1 flex flex-col justify-center items-center bg-[#f5eee6] px-2 py-8 md:py-0 md:rounded-r-[32px] relative z-20 shadow-none md:shadow-lg text-center">
          <h3 className="text-lg font-bold text-[#a47551] mb-2">Get in Touch</h3>
          <p className="text-[#6b4f27] mb-2">Email: <a href="mailto:hello@craftmakers.com" className="underline">hello@craftmakers.com</a></p>
          <p className="text-[#6b4f27] mb-2">Phone: +91 98765 43210</p>
          <p className="text-[#6b4f27] mb-4">Jaipur, India</p>
          <div className="hidden md:flex gap-4 justify-center mt-2">
            <a href="#" className="text-[#a47551] hover:text-[#bfa181] text-2xl"><i className="fab fa-instagram"></i>Instagram</a>
            <a href="#" className="text-[#a47551] hover:text-[#bfa181] text-2xl"><i className="fab fa-facebook"></i>Facebook</a>
            <a href="#" className="text-[#a47551] hover:text-[#bfa181] text-2xl"><i className="fab fa-pinterest"></i>Pinterest</a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-[#6b4f27] text-[#f5eee6] py-10 sm:py-12 px-2 sm:px-4 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-lg mb-2">Craft Makers</h3>
            <p className="text-sm mb-4">Celebrating handmade creativity. Join our community of makers and craft lovers!</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#e7c9a9]">Instagram</a>
              <a href="#" className="hover:text-[#e7c9a9]">Facebook</a>
              <a href="#" className="hover:text-[#e7c9a9]">Pinterest</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Navigation</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#categories" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="text-sm space-y-1">
              <li>Email: hello@craftmakers.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Jaipur, India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="rounded px-3 py-2 text-[#6b4f27]" />
              <button type="submit" className="bg-[#e7c9a9] text-[#6b4f27] font-bold rounded px-3 py-2 hover:bg-[#bfa181] transition">Subscribe</button>
            </form>
          </div>
      </div>
        <div className="text-center text-xs text-[#e7c9a9] mt-8">&copy; {new Date().getFullYear()} Craft Makers. All rights reserved.</div>
      </footer>
    </main>
  );
}
