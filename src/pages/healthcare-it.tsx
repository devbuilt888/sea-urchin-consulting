import { useState } from 'react';
import dynamic from 'next/dynamic';

const CuraCartPatternBg = dynamic(() => import('../components/CuraCartPatternBg'), {
  ssr: false,
});

const categories = [
  { icon: '💊', label: 'Medicine', offer: 'SAVE 25%' },
  { icon: '🧪', label: 'Lab Tests', offer: 'UPTO 70% OFF' },
  { icon: '👨‍⚕️', label: 'Doctor Consult', offer: '' },
  { icon: '🧴', label: 'Healthcare', offer: 'UPTO 60% OFF' },
  { icon: '📝', label: 'Health Blogs', offer: '' },
  { icon: '💳', label: 'PLUS', offer: 'SAVE 5% EXTRA' },
  { icon: '🎁', label: 'Offers', offer: '' },
  { icon: '🛒', label: 'Value Store', offer: 'UPTO 50% OFF' },
];

export default function HealthcareIT() {
  const [search, setSearch] = useState('');
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 text-gray-900 font-sans overflow-x-hidden relative z-0">
      <CuraCartPatternBg />
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl text-teal-600 font-extrabold">CuraCart</span>
            <span className="italic text-xs text-teal-400">Your Trusted Health Partner</span>
          </div>

          {/* User/Cart */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-gray-700 cursor-pointer"><span className="text-xl">👤</span> Hello, Log in</span>
            <span className="flex items-center gap-1 text-pink-600 cursor-pointer"><span className="text-xl">🎁</span> Offers</span>
            <span className="flex items-center gap-1 text-gray-700 cursor-pointer"><span className="text-2xl">🛒</span> Cart</span>
          </div>
        </div>
        {/* Nav */}
        <nav className="w-full border-t border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto flex items-center gap-8 px-4 py-2 text-gray-700 text-sm font-medium overflow-x-auto">
            <a href="#" className="hover:text-teal-600">Medicine</a>
            <a href="#" className="hover:text-teal-600">Lab Tests</a>
            <a href="#" className="hover:text-teal-600">Doctor Consult</a>
            <a href="#" className="hover:text-teal-600">Healthcare</a>
            <a href="#" className="hover:text-teal-600">Health Blogs</a>
            <a href="#" className="hover:text-teal-600">PLUS</a>
            <a href="#" className="hover:text-teal-600">Offers</a>
            <a href="#" className="hover:text-teal-600">Value Store</a>
          </div>
        </nav>
      </header>

      <section>
        <div
          className="relative w-full h-screen mb-20 flex bg-amber-200 justify-end"
          style={{
            backgroundImage:
              'url(https://www.singlecare.com/blog/wp-content/uploads/2021/08/Blog_082321_Immunosuppressants_affect_COVID_vaccine.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        {/* Rotating Hospitality Icons */}
<div className="absolute inset-0 z-0 pointer-events-none">
  {[
    { img: 'https://cdn-icons-png.flaticon.com/512/7196/7196460.png', top: '10%', left: '10%' },
    { img: 'https://cdn-icons-png.flaticon.com/512/2904/2904131.png', top: '10%', left: '80%' }, 
    { img: 'https://cdn-icons-png.flaticon.com/512/9696/9696215.png', top: '60%', left: '10%' }, 
    { img: 'https://cdn-icons-png.flaticon.com/512/4178/4178695.png', top: '75%', left: '70%' },
    { img: 'https://static.vecteezy.com/system/resources/previews/046/593/438/non_2x/capsule-with-viruses-3d-free-png.png', top: '20%', left: '30%' }, 
    { img: 'https://static.vecteezy.com/system/resources/thumbnails/022/923/884/small/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png', top: '45%', left: '50%' }, 
  ].map((item, idx) => (
    <div
      key={idx}
      className="absolute animate-spin-slow"
      style={{
        top: item.top,
        left: item.left,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img
        src={item.img}
        alt="hospitality icon"
        className="w-20 h-20 opacity-70 object-contain"
      />
    </div>
  ))}
</div>




          {/* Right Content */}
          <div className="w-1/2 h-full flex items-center justify-center relative z-10">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Welcome to CuraCart</h2>
              <p className="text-gray-600">
                Your trusted health partner for fast, secure, and reliable medicine delivery.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
    .animate-spin-slow {
      animation: spin 20s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.1);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }
  `}</style>
      </section>

      {/* Hero/Search */}
      <section className="w-full py-10 px-4 bg-gradient-to-r from-blue-50 via-white to-amber-50 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">What are you looking for?</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-teal-200 rounded-lg shadow text-teal-600 font-semibold hover:bg-teal-50 transition"><span className="text-xl">📄</span> Order with prescription. <span className="text-teal-700 font-bold ml-1">UPLOAD NOW →</span></button>
        </div>
        <div className="w-full max-w-2xl flex items-center bg-white rounded-full shadow-lg px-4 py-2 mb-8 border border-gray-100">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none px-2 py-2 text-lg text-gray-700 placeholder:text-gray-400"
            placeholder="Search for Health Drinks, Medicines, etc."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="ml-2 px-6 py-2 bg-teal-600 text-white rounded-full font-semibold shadow hover:bg-teal-700 transition">Search</button>
        </div>
        {/* Categories */}
        <div className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-8 mt-4">
          {categories.map(cat => (
            <div key={cat.label} className="flex flex-col items-center min-w-[110px]">
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow border border-gray-100 text-4xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-gray-800 text-base text-center">{cat.label}</div>
              {cat.offer && <div className="text-xs text-pink-600 font-bold mt-1">{cat.offer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Problems We Help Solve */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-teal-700 text-center">Problems We Help Solve</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-pink-300">
            <h3 className="font-semibold text-lg mb-2">Inefficient Intake & Triage</h3>
            <p className="text-gray-600 text-sm">Manual processes delay patient care and overwhelm staff.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-pink-300">
            <h3 className="font-semibold text-lg mb-2">Data Privacy & HIPAA Concerns</h3>
            <p className="text-gray-600 text-sm">Keeping up with compliance while managing patient data securely is challenging.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-pink-300">
            <h3 className="font-semibold text-lg mb-2">Disconnected Systems</h3>
            <p className="text-gray-600 text-sm">EHRs, billing, and scheduling tools often don’t talk to each other.</p>
          </div>
        </div>
      </section>

      {/* From Problems to Solutions */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-8">From Problems to Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded shadow">
            <h3 className="text-lg font-bold text-red-600 mb-2">The Challenges</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Inefficient patient intake and triage</li>
              <li>HIPAA and data-privacy struggles</li>
              <li>Siloed EHR, billing, and scheduling systems</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded shadow">
            <h3 className="text-lg font-bold text-green-600 mb-2">Our Solutions</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Streamlined digital intake & smart triage</li>
              <li>End-to-end encrypted, HIPAA-compliant platform</li>
              <li>Fully integrated care coordination systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CIO/VP Patient Experience Section */}
      <section className="w-full flex justify-center py-10 px-4 ">
        <div className="max-w-3xl w-full bg-white/80 rounded-2xl shadow-lg border-t-4 border-indigo-300 flex flex-col md:flex-row items-center gap-8 p-8">
          {/* Icon cluster */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl">🏥</span>
            <span className="text-4xl">👔</span>
            <span className="text-4xl">💡</span>
          </div>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">For CIOs & Patient Experience Leaders</h2>
            <div className="text-md text-gray-700 mb-2 font-semibold">Empowering Regional Clinics & Small Hospitals</div>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><span className="font-bold text-indigo-600">Digital Transformation:</span> Streamline operations and enable secure, cloud-based patient management.</li>
              <li><span className="font-bold text-indigo-600">Patient Satisfaction:</span> Enhance patient journeys with digital touchpoints and real-time feedback.</li>
              <li><span className="font-bold text-indigo-600">Operational Efficiency:</span> Reduce costs and improve care delivery with integrated digital tools.</li>
              <li><span className="font-bold text-indigo-600">AI Chatbots:</span> Pre-visit triage and instant FAQs for patients, improving access and efficiency.</li>
              <li><span className="font-bold text-indigo-600">Secure Data Integration:</span> Unified, secure data layer across all systems for seamless interoperability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-teal-200">
          <span className="text-3xl mb-2">🚚</span>
          <div className="font-bold text-lg mb-1 text-teal-700">Fast Home Delivery</div>
          <div className="text-gray-600">Get medicines and health products delivered to your doorstep quickly and safely.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-teal-200">
          <span className="text-3xl mb-2">🩺</span>
          <div className="font-bold text-lg mb-1 text-teal-700">Licensed Pharmacists</div>
          <div className="text-gray-600">Expert advice and support from certified professionals, always available for you.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border-t-4 border-teal-200">
          <span className="text-3xl mb-2">🔒</span>
          <div className="font-bold text-lg mb-1 text-teal-700">Privacy & Security</div>
          <div className="text-gray-600">Your health data and orders are always safe, secure, and confidential.</div>
        </div>
      </section>

      {/* About us */}
      <section className="max-w-4xl mx-auto py-12 px-4 ">

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-white rounded-2xl shadow p-6 flex-1 justify-center items-center text-center border-t-4 border-teal-200">
            <h2 className="text-2xl font-bold mb-8 text-teal-700 text-center">About Us</h2>
            <div className='flex justify-center items-center'>
              <img src="https://img.freepik.com/premium-photo/drawing-pills-green-bottle-with-brown-top_910054-37823.jpg" className='w-100' alt="" />
            </div>
            <div className="italic text-gray-700 mb-2 text-sm ">
              Curacart is a modern healthcare company focused on simplifying access to essential medicines. Through its digital-first approach, Curacart provides an easy-to-use platform where users can order prescription medications online and have them delivered directly to their doorstep. The company aims to ensure timely, reliable, and affordable access to healthcare, especially for patients managing chronic conditions.

              Curacart works only with licensed pharmacies and follows strict quality assurance processes to guarantee the authenticity and safety of every product. Customers can also access detailed prescription information, dosage instructions, and refill reminders—helping improve treatment adherence and patient outcomes.

              What sets Curacart apart is its focus on convenience and care. The platform supports personalized services such as automated refill alerts, pharmacist consultations, and transparent pricing, making it easier for individuals and families to stay on track with their medications.

              In a world where healthcare is becoming increasingly digital, Curacart stands at the forefront of innovation—combining technology, trust, and compassion to enhance everyday wellness. Whether managing long-term health needs or short-term recovery, Curacart is committed to being a reliable partner in every patient&apos;s healthcare journey.</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-teal-700 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-full text-3xl mb-3 border border-teal-200">📄</div>
            <div className="font-semibold mb-1">Upload Prescription</div>
            <div className="text-gray-600 text-sm">Snap a photo or upload your doctor&apos;s prescription.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-full text-3xl mb-3 border border-teal-200">🛒</div>
            <div className="font-semibold mb-1">Choose Products & Delivery</div>
            <div className="text-gray-600 text-sm">Select medicines, health products, and delivery slot.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-full text-3xl mb-3 border border-teal-200">🏠</div>
            <div className="font-semibold mb-1">Get at Your Doorstep</div>
            <div className="text-gray-600 text-sm">Sit back and relax while we deliver to your home.</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-teal-700 text-center">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-white rounded-2xl shadow p-6 flex-1 text-center border-t-4 border-teal-200">
            <div className="italic text-gray-700 mb-2">&quot;Super fast delivery and genuine medicines. I trust them for my family&apos;s health!&quot;</div>
            <div className="font-bold text-teal-700">— Priya S.</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex-1 text-center border-t-4 border-teal-200">
            <div className="italic text-gray-700 mb-2">&quot;Easy to upload prescription and order. Customer support is excellent!&quot;</div>
            <div className="font-bold text-teal-700">— Rahul M.</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-teal-700 text-center">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      {/* Lead Form */}
      <section className="max-w-xl mx-auto mb-20 py-12 px-4">
        <h2 className="text-xl font-bold mb-4 text-teal-700 text-center">Transfer Your Prescription or Get Started</h2>
        <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border-t-4 border-teal-200">
          <input type="text" placeholder="Your Name" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <input type="tel" placeholder="Phone Number" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <input type="text" placeholder="Prescription Details (optional)" className="rounded-lg px-4 py-3 bg-teal-50 text-gray-700 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400" />
          <button type="submit" className="px-6 py-3 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 hover:scale-105 transition-transform duration-200 font-semibold">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-teal-600 via-teal-500 to-blue-500 mt-16 mb-20 z-20 relative text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <span className="text-2xl font-extrabold mb-1">CuraCart</span>
            <span className="italic text-xs opacity-80 mb-2">Your Trusted Health Partner</span>
            <span className="text-xs opacity-60">© {new Date().getFullYear()} CuraCart. All rights reserved.</span>
          </div>
          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-6 text-sm font-medium items-center">
            <a href="#" className="hover:text-yellow-200 transition">Medicine</a>
            <a href="#" className="hover:text-yellow-200 transition">Lab Tests</a>
            <a href="#" className="hover:text-yellow-200 transition">Doctor Consult</a>
            <a href="#" className="hover:text-yellow-200 transition">Healthcare</a>
            <a href="#" className="hover:text-yellow-200 transition">Offers</a>
            <a href="#" className="hover:text-yellow-200 transition">Contact</a>
          </div>
          {/* Contact info */}
          <div className="flex flex-col items-center md:items-end text-sm">
            <div className="mb-1"><span className="font-semibold">Customer Care:</span> +91 90000 00000</div>
            <div className="mb-1"><span className="font-semibold">Email:</span> support@curacart.com</div>
            <div><span className="font-semibold">Address:</span> 123 Health St, Mumbai, India</div>
          </div>
        </div>
        <div className="w-full h-px bg-white/20 mt-2 mb-0" />
        <div className="text-center text-xs py-3 opacity-70">Made with ❤️ for your health & wellness</div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-teal-600/90 shadow-lg py-4 flex justify-center items-center z-50 backdrop-blur-md">
        <span className="mr-4 font-semibold text-white">Need medicines or lab tests?</span>
        <button className="px-6 py-3 bg-white text-teal-600 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition-transform duration-200 font-semibold">Join Us</button>
      </div>
    </main>
  );
} 

// FAQ Accordion Component
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: 'How does CuraCart help improve patient experience at clinics and hospitals?',
      a: 'CuraCart provides digital tools for appointment scheduling, pre-visit triage, and real-time feedback, making the patient journey smoother and more efficient.'
    },
    {
      q: 'Are AI chatbots secure and compliant with healthcare regulations?',
      a: 'Yes, our AI chatbots are built with security and compliance in mind, ensuring patient data privacy and adherence to healthcare standards.'
    },
    {
      q: 'Can CuraCart integrate with our existing hospital/clinic systems?',
      a: 'Absolutely! CuraCart features a secure data-integration layer that connects seamlessly with your current EHR, billing, and management systems.'
    },
    {
      q: 'Is CuraCart suitable for small and regional clinics?',
      a: 'Yes, CuraCart is designed to be scalable and cost-effective, making it ideal for clinics and hospitals of all sizes.'
    },
    {
      q: 'How quickly can we get started with CuraCart?',
      a: 'Most clinics and hospitals can be onboarded within a few days, with full support from our implementation team.'
    },
  ];
  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <div key={idx} className="border border-teal-100 rounded-lg bg-white shadow">
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-teal-700 focus:outline-none"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`faq-${idx}`}
          >
            <span>{item.q}</span>
            <span className="ml-2 text-xl">{open === idx ? '−' : '+'}</span>
          </button>
          {open === idx && (
            <div id={`faq-${idx}`} className="px-4 pb-4 text-gray-700 animate-fade-in">
              {item.a}
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
} 