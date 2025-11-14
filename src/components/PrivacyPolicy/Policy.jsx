
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="p-10 text-left max-w-3xl">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="mt-4">Last Updated: July 31, 2025</p>
        <p className="mt-4">At FormFill BD, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
        <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Personal Information (e.g., name, address, National ID)</li>
          <li>Documents submitted for form fill-up services</li>
          <li>Usage data (e.g., service requests)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6">How We Use Your Information</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>To provide and maintain our services</li>
          <li>To process your form fill-up requests</li>
          <li>To improve our services and user experience</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6">Data Security</h2>
        <p className="mt-2">We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or disclosure.</p>
        <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
        <p className="mt-2">You have the right to access, correct, or delete your personal information. Contact us at [contact email] to exercise these rights.</p>
        <h2 className="text-xl font-semibold mt-6">Changes to This Policy</h2>
        <p className="mt-2">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;