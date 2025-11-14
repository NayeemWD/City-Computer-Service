import React from "react";

const Pricing = () => {
  const services = [
    { name: "Birth Certificate Fill-Up", price: "100 BDT", popular: false },
    { name: "Driving License Fill-Up", price: "200 BDT", popular: true },
    { name: "Passport Application Fill-Up", price: "250 BDT", popular: false },
    { name: "National ID Card Fill-Up", price: "150 BDT", popular: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      
      {/* Header */}
      <div className="text-center p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-md">
          Transparent Pricing
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Clear and upfront pricing for all our form fill-up services.  
          No hidden fees — just simple and affordable rates.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 pb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-white border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="card-body items-center text-center">
              {service.popular && (
                <div className="badge badge-primary mb-2">Most Popular</div>
              )}
              <h2 className="card-title text-blue-600">{service.name}</h2>
              <p className="text-3xl font-bold text-blue-800 mt-2">{service.price}</p>
              <p className="text-gray-500 text-sm mt-1">Per application</p>
              <button className="btn btn-primary btn-sm mt-4">Get Service</button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Pricing;
