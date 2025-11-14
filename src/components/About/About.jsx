import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col w-full">
      
      {/* Header */}
      <div className="p-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-md">
          Our Process
        </h1>
        <p className="mt-2 text-gray-600  mx-auto">
          We follow a simple step-by-step process to ensure your work is done accurately and efficiently.
        </p>
      </div>

      {/* FAQ / Process Section */}
      <div className="w-full mx-auto px-6 space-y-4 mb-12">

        {/* Computer Service */}
        <div className="collapse collapse-arrow bg-white border shadow-md hover:shadow-lg transition-all duration-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold text-blue-600">
            💻 Computer Service – Step by Step
          </div>
          <div className="collapse-content text-gray-600 space-y-2">
            <p>We provide quick and reliable computer repair and maintenance services.</p>
            <ol className="list-decimal ml-5 space-y-1">
              <li><strong>Bring Your Device:</strong> Visit our shop with your desktop or laptop.</li>
              <li><strong>Initial Checkup:</strong> Our technician will do a quick inspection.</li>
              <li><strong>Diagnosis:</strong> We identify hardware/software issues and provide a cost estimate.</li>
              <li><strong>Repair & Optimization:</strong> We perform repairs, updates, and cleaning if required.</li>
              <li><strong>Pickup:</strong> Devices are usually ready within <strong>2–3 days</strong> depending on complexity.</li>
            </ol>
          </div>
        </div>

        {/* Form Fill-Up Service */}
        <div className="collapse collapse-arrow bg-white border shadow-md hover:shadow-lg transition-all duration-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold text-blue-600">
            📝 Form Fill-Up Service – Step by Step
          </div>
          <div className="collapse-content text-gray-600 space-y-2">
            <p>We help you fill government and private forms correctly and on time.</p>
            <ol className="list-decimal ml-5 space-y-1">
              <li><strong>Prepare Documents:</strong> Bring your NID, birth certificate, photos, and required papers.</li>
              <li><strong>Verification:</strong> Our team checks all documents for correctness.</li>
              <li><strong>Digital Entry:</strong> We fill the form on the respective government/private portal.</li>
              <li><strong>Print & Submission:</strong> Forms are printed, signed, and submitted if needed.</li>
              <li><strong>Completion:</strong> Most forms are completed within <strong>2 hours</strong>.</li>
            </ol>
          </div>
        </div>

        {/* Optional: Admission Form */}
        <div className="collapse collapse-arrow bg-white border shadow-md hover:shadow-lg transition-all duration-300">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-semibold text-blue-600">
            🎓 Admission Form Fill-Up – Step by Step
          </div>
          <div className="collapse-content text-gray-600 space-y-2">
            <p>We make student admission form submission simple and error-free.</p>
            <ol className="list-decimal ml-5 space-y-1">
              <li><strong>Collect Requirements:</strong> Bring academic transcripts, photos, and ID copies.</li>
              <li><strong>Check Eligibility:</strong> We verify that your information matches the admission criteria.</li>
              <li><strong>Online/Offline Fill-Up:</strong> We complete the form with accurate details.</li>
              <li><strong>Submission & Payment:</strong> If needed, we guide you through fee payment and submission.</li>
              <li><strong>Confirmation:</strong> You receive a printed copy or online confirmation slip.</li>
            </ol>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
