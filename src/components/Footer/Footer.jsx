
const Footer = () => {
  return (
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
  );
};

export default Footer;
