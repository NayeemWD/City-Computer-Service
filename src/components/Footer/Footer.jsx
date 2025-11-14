
const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white py-6 text-center mt-auto">
      <div className="flex justify-center gap-6 mb-2">
        <a href="/policies" className="hover:text-blue-300 transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-blue-300 transition-colors">
          Terms of Service
        </a>
      </div>
      <p className="text-sm">© 2025 City Computer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
