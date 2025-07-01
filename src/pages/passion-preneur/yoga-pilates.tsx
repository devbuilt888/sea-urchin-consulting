import React from 'react';

export default function YogaLandingPage() {
  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-pink-600 text-2xl font-bold">Yoga Bliss</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#about" className="hover:text-pink-500">About</a>
            <a href="#offerings" className="hover:text-pink-500">Offerings</a>
            <a href="#instructor" className="hover:text-pink-500">Instructor</a>
            <a href="#schedule" className="hover:text-pink-500">Schedule</a>
            <a href="#gallery" className="hover:text-pink-500">Gallery</a>
            <a href="#pricing" className="hover:text-pink-500">Pricing</a>
            <a href="#faq" className="hover:text-pink-500">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-50 to-white px-6 py-16">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold text-pink-700 leading-tight">Find Your Inner Peace with Yoga</h1>
          <p className="text-lg">Join our Yoga & Pilates classes to transform your body and calm your mind.</p>
          <a href="#signup" className="inline-block mt-4 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition">Book Your Free Trial</a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="/yoga-main.avif" alt="Yoga Pose" className="w-80 rounded-xl shadow-xl" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-pink-600">About Our Practice</h2>
        <p className="text-lg">We offer calming Yoga & energizing Pilates classes. Led by certified instructors, our sessions help build strength, flexibility, and peace of mind.</p>
      </section>

      {/* Offerings */}
      <section id="offerings" className="py-20 bg-pink-50 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-12 text-pink-600">Our Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['🧘‍♀️', 'Hatha Yoga', 'Classic postures for balance and mindfulness.'],
            ['🔥', 'Power Yoga', 'Dynamic flows to build stamina.'],
            ['💪', 'Pilates', 'Core-focused strength & mobility.']
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor Bio */}
      <section id="instructor" className="py-20 px-6 bg-white text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-pink-600">Meet Your Instructor</h2>
        <img src="/instructor.jpg" alt="Instructor" className="w-40 h-40 mx-auto rounded-full mb-4 object-cover" />
        <p className="text-lg text-gray-700 mb-2 font-semibold">Emily</p>
        <p className="text-gray-600">Certified Yoga & Pilates Instructor with 10+ years of experience in guiding people to healthier, mindful lifestyles.</p>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-pink-100 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8 text-pink-600">Benefits of Yoga & Pilates</h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg text-gray-700">
          <li>✅ Improves Flexibility & Posture</li>
          <li>✅ Reduces Stress & Anxiety</li>
          <li>✅ Boosts Strength & Core Stability</li>
          <li>✅ Enhances Mental Clarity & Sleep</li>
        </ul>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-pink-600">Weekly Schedule</h2>
        <table className="w-full border-collapse border border-pink-300 text-gray-700">
          <thead>
            <tr>
              <th className="border border-pink-300 p-3">Day</th>
              <th className="border border-pink-300 p-3">Time</th>
              <th className="border border-pink-300 p-3">Class</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Mon', '7:00 AM', 'Hatha Yoga'],
              ['Tue', '6:00 PM', 'Pilates'],
              ['Wed', '7:00 AM', 'Power Yoga'],
              ['Thu', '6:00 PM', 'Pilates'],
              ['Fri', '7:00 AM', 'Hatha Yoga'],
              ['Sat', '9:00 AM', 'Power Yoga'],
            ].map(([day, time, type]) => (
              <tr key={day}>
                <td className="border border-pink-300 p-3">{day}</td>
                <td className="border border-pink-300 p-3">{time}</td>
                <td className="border border-pink-300 p-3">{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-pink-50 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-10 text-pink-600">Studio Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['/yoga1.jpg', '/yoga2.jpg', '/yoga3.jpg'].map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="rounded-lg shadow-md object-cover w-full h-60" />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-pink-600">What Clients Say</h2>
        <div className="space-y-10">
          {[
            ['"The classes helped me heal both mentally and physically."', 'Aisha, New Delhi'],
            ['"My flexibility and energy improved drastically."', 'Rahul, Bangalore'],
            ['"The best decision I made for my self-care journey."', 'Sanya, Mumbai']
          ].map(([quote, name]) => (
            <div key={name} className="bg-pink-50 p-6 rounded-xl shadow text-gray-700">
              <p className="italic mb-2">{quote}</p>
              <span className="font-semibold text-pink-700">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-white to-pink-50 text-center px-6">
        <h2 className="text-4xl font-semibold mb-12 text-pink-600">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['Starter', '₹999/mo', '2 classes/week, Group session'],
            ['Pro', '₹1999/mo', 'Unlimited classes, Priority booking'],
            ['1-on-1', '₹2999/mo', 'Personalized guidance, Weekly goals']
          ].map(([tier, price, desc]) => (
            <div key={tier} className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">{tier}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-4">{price}</p>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-pink-600">Frequently Asked Questions</h2>
        <div className="text-left space-y-6">
          <div>
            <h4 className="font-bold text-pink-700">Do I need experience?</h4>
            <p className="text-gray-700">Not at all! Our classes welcome beginners and experts alike.</p>
          </div>
          <div>
            <h4 className="font-bold text-pink-700">What should I bring?</h4>
            <p className="text-gray-700">Just a yoga mat and a water bottle. We'll provide the rest!</p>
          </div>
          <div>
            <h4 className="font-bold text-pink-700">How do I cancel?</h4>
            <p className="text-gray-700">You can cancel anytime by emailing us or visiting your account settings.</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="signup" className="py-20 px-6 bg-white text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-pink-600">Ready to Begin?</h2>
        <p className="mb-6 text-gray-700">Leave your email and we’ll get in touch with a free trial class invite.</p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button type="submit" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition">Request Free Trial</button>
        </form>
      </section>

      {/* CTA Banner */}
      <div className="bg-pink-600 text-white text-center py-6">
        <p className="text-lg font-semibold">Transform your life with Yoga & Pilates. Book your free trial today!</p>
        <a href="#signup" className="inline-block mt-3 px-6 py-2 bg-white text-pink-600 font-semibold rounded-full hover:bg-pink-100 transition">Join Now</a>
      </div>

      {/* Footer */}
      <footer className="bg-pink-100 text-center py-6 text-sm text-pink-800">
        <div>© {new Date().getFullYear()} Yoga Bliss Studio. All Rights Reserved.</div>
        <div>Follow us on Instagram @yogabliss</div>
      </footer>
    </main>
  );
}
