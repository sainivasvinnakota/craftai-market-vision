
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-sage font-poppins font-bold text-xl">Craft</span>
              <span className="text-white font-poppins font-bold text-xl">AI</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Empowering rural artisans with AI-powered market insights
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/trends" className="text-gray-300 hover:text-white text-sm">Market Trends</Link></li>
              <li><Link to="/keywords" className="text-gray-300 hover:text-white text-sm">Keyword Analysis</Link></li>
              <li><Link to="/colors" className="text-gray-300 hover:text-white text-sm">Color Palettes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">Get the latest insights delivered to your inbox</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-terracotta focus:border-terracotta rounded-l-md"
              />
              <button
                type="submit"
                className="bg-terracotta hover:bg-terracotta/90 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-300">© 2025 CraftAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
