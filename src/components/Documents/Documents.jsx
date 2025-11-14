import React from 'react';

const Documents = () => {
  const documentSections = [
    {
      title: "Birth Certificate",
      items: [
        { name: "Copy of Parent's National ID", desc: "Required for verification of parental information." },
        { name: "Proof of Birth (e.g., Hospital Certificate)", desc: "Official document confirming the birth of the applicant." },
      ],
    },
    {
      title: "Driving License",
      items: [
        { name: "Copy of National ID", desc: "Required for identity verification." },
        { name: "Passport Size Photos (2)", desc: "Recent photos of the applicant." },
        { name: "Medical Certificate (if applicable)", desc: "Required for professional licenses or authority requirements." },
      ],
    },
    {
      title: "National ID (NID) Update",
      items: [
        { name: "Old NID Copy", desc: "Required for reference and verification." },
        { name: "Supporting Documents", desc: "Marriage, education, or other documents supporting requested changes." },
        { name: "Recent Passport Size Photo", desc: "Recent photo of the applicant for updating the NID." },
      ],
    },
    {
      title: "Admission Forms",
      items: [
        { name: "Academic Transcripts", desc: "Copies of academic records for eligibility verification." },
        { name: "Passport Size Photos (2)", desc: "Recent photos of the applicant." },
        { name: "National ID Copy", desc: "Required for identity verification." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      
      {/* Header */}
      <div className="text-center p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-md">
          Required Documents for Services
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Prepare the following documents to ensure smooth and efficient processing of your applications.
        </p>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-16 pb-12">
        {documentSections.map((section, index) => (
          <div
            key={index}
            className="card bg-white border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="card-body">
              <h2 className="card-title text-blue-600">{section.title}</h2>
              <ul className="mt-2 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">✔</span>
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Documents;
