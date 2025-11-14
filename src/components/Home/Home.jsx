import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Your Trusted Partner for Computer Solutions
            </h1>
            <p className="text-gray-600 mb-6">
              Expert computer repair, software installation, and laptop
              servicing. Fast, reliable, and affordable solutions for your home
              and business.
            </p>
            <div className="flex gap-4 mb-6">
              <button className="btn btn-sm btn-outline">
                💻 Computer Repair
              </button>
              <button className="btn btn-sm btn-outline">
                ⚙️ Software Install
              </button>
              <button className="btn btn-sm btn-outline">
                🖥️ Laptop Servicing
              </button>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="What service do you need today? (e.g. laptop screen fix)"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            <img
              src="/Selection (1).png"
              alt="Technician"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Comprehensive Services */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Laptop Repair",
                desc: "Diagnose and fix all laptop issues, from screen replacement to battery problems.",
              },
              {
                icon: "🖥️",
                title: "Desktop Service",
                desc: "System upgrades, component repairs, RAM upgrades, and performance optimization.",
              },
              {
                icon: "⚙️",
                title: "OS Installation",
                desc: "Windows, macOS, Linux, and essential software setup.",
              },
              {
                icon: "🔧",
                title: "Hardware Upgrade",
                desc: "Enhance your system with new RAM, SSDs, graphics cards, and other components.",
              },
              {
                icon: "💾",
                title: "Data Recovery",
                desc: "Recover lost or corrupted data from hard drives, SSDs, and various storage devices.",
              },
              {
                icon: "🌐",
                title: "Network Solutions",
                desc: "Setup and optimize routers and office networks for seamless connectivity.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="card bg-base-100 border shadow-sm hover:shadow-lg transition-all">
                <div className="card-body items-center text-center">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="card-title text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <button className="btn btn-sm btn-ghost mt-2">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose City Computer */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose City Computer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Service",
                desc: "Quick diagnostics and efficient repairs to get you productive in no time.",
              },
              {
                icon: "✓",
                title: "Genuine Parts",
                desc: "We use only high-quality authentic parts for all replacements.",
              },
              {
                icon: "👨‍💼",
                title: "Expert Technicians",
                desc: "Our certified and experienced professionals ensure precise solutions.",
              },
              {
                icon: "🏠",
                title: "Home Service",
                desc: "Enjoy the convenience of on-site computer repair service at your location.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                quote:
                  "City Computer saved my day! Fast, friendly, and very professional service. Highly recommended!",
              },
              {
                name: "Jane Smith",
                quote:
                  "Excellent data recovery! They successfully got all my important files back in perfect condition.",
              },
              {
                name: "Peter Jones",
                quote:
                  "Great PC upgrade here. The technician was knowledgeable, prompt. Will definitely return for future needs.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="card bg-base-100 border shadow-sm">
                <div className="card-body">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Reliable Computer Service?
          </h2>
          <p className="mb-6">
            Contact us today for a free diagnostic or to book your service.
            We're here to help!
          </p>
          <Link to="/services">
            <button className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">City Computer</h3>
            <p className="text-sm text-gray-600">
              Your trusted partner for all computer needs.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Services</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Laptop Repair</li>
              <li>OS Installation</li>
              <li>Data Recovery</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600">📞 +1 (555) 123-4567</p>
            <p className="text-sm text-gray-600">
              📍 123 Tech Avenue, Suite 100
            </p>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-gray-600">
          <p>© 2025 City Computer. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
