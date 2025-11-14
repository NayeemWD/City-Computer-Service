
const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
      {/* Terms Content */}
      <div className="flex-grow flex justify-center items-start py-12 px-6">
        <div className="bg-white shadow-lg border rounded-2xl p-8 max-w-3xl w-full animate-fadeIn">
          <h1 className="text-3xl font-bold text-blue-800">Terms of Service</h1>
          <p className="mt-2 text-gray-500">Last Updated: July 31, 2025</p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Welcome to <strong>FormFill BD</strong>. These Terms of Service
            ("Terms") govern your use of our website and services. By accessing
            or using our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-blue-700">
            Acceptance of Terms
          </h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            By using our services, you confirm that you accept these Terms and
            agree to comply with them. If you do not agree, please discontinue
            use immediately.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-blue-700">Services</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            We provide form fill-up and computer services. All services are
            subject to availability and the submission of required documents.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-blue-700">
            User Responsibilities
          </h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>Provide accurate and complete information</li>
            <li>Use services only for lawful purposes</li>
            <li>Keep your account credentials secure</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 text-blue-700">
            Limitation of Liability
          </h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            FormFill BD is not liable for any indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-blue-700">
            Changes to Terms
          </h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            We may update these Terms from time to time. Any changes will be
            reflected here with an updated "Last Updated" date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
