import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Need computer repair or form fill-up help? Contact us for fast &
            reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="input"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address *"
                required
                className="input"
              />

              {/* Phone Input */}
              <div className="border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <PhoneInput
                  international
                  defaultCountry="BD"
                  value={phone}
                  onChange={setPhone}
                  className="w-full outline-none"
                />
              </div>

              <select className="input">
                <option value="">Select Service</option>
                <option>Computer Repair</option>
                <option>Software Installation</option>
                <option>Form Fill-Up</option>
                <option>Other</option>
              </select>

              <textarea
                rows="4"
                required
                placeholder="Describe your problem..."
                className="input resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <InfoItem
                  icon="📍"
                  title="Address"
                  text={["123 Tech Avenue", "Dhaka, Bangladesh"]}
                />
                <InfoItem
                  icon="📞"
                  title="Phone"
                  text={["+880 123 456 7890", "+880 987 654 3210"]}
                />
                <InfoItem
                  icon="✉️"
                  title="Email"
                  text={["info@citycomputer.com", "support@citycomputer.com"]}
                />
                <InfoItem
                  icon="⏰"
                  title="Business Hours"
                  text={[
                    "Mon–Fri: 9:00 AM – 6:00 PM",
                    "Sat: 9:00 AM – 4:00 PM",
                    "Sun: Closed",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind reusable input style */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            outline: none;
            transition: all 0.2s;
          }
          .input:focus {
            border-color: transparent;
            box-shadow: 0 0 0 2px rgb(59 130 246);
          }
        `}
      </style>
    </div>
  );
};

/* Contact Info Item Component */
const InfoItem = ({ icon, title, text }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
    {/* Icon */}
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-3xl">
      {icon}
    </div>

    {/* Text */}
    <div>
      <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>
      {text.map((line, i) => (
        <p key={i} className="text-gray-600 text-sm leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
