import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Birth Certificate & National ID",
      desc: "Streamlined application process with expert guidance.",
      img: "https://via.placeholder.com/200x150?text=Birth+Certificate",
    },
    {
      title: "Driving License Application",
      desc: "Quick and hassle-free driving license form fill-up.",
      img: "https://via.placeholder.com/200x150?text=Driving+License",
    },
    {
      title: "Admission Form Fill-Up",
      desc: "Accurate and timely government & private form submissions.",
      img: "https://via.placeholder.com/200x150?text=Admission+Form",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      {/* Header */}
      <div className="p-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-md">
          Our Services
        </h1>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          We offer a range of services to get your work done quickly, securely,
          and efficiently.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16 pb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-white border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            {/* <figure>
              <img src={service.img} alt={service.title} className="rounded-t-lg" />
            </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-3xl py-4 text-blue-600">
                {service.title}
              </h2>
              <p className="text-gray-500">{service.desc}</p>
              <Link to="/contact" className="btn btn-primary btn-sm mt-3">
                Get Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
