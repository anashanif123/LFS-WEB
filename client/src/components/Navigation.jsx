import { motion } from "framer-motion";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glassmorphism"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            data-testid="brand-logo"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Search className="text-white text-sm" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Findit
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              data-testid="nav-testimonials"
            >
              Stories
            </button>
          </div>

          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu className="text-xl" />
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-left"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-left"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium text-left"
                data-testid="mobile-nav-testimonials"
              >
                Stories
              </button>
              <button 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-2xl font-semibold text-left"
                data-testid="button-get-started-mobile"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
