import React, { useState, useEffect } from 'react';
import { NAVIGATION, APP_NAME } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-bauhaus-black ${scrolled ? 'bg-bauhaus-white py-2' : 'bg-bauhaus-white py-4 md:bg-transparent md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-8 flex justify-between items-center">
        <a href="#" className="text-3xl md:text-4xl font-black tracking-tighter text-bauhaus-black relative group uppercase">
          <span className="relative z-10">{APP_NAME}</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-bauhaus-yellow -z-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAVIGATION.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-bold text-bauhaus-black hover:text-bauhaus-red transition-colors relative"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 border-2 border-bauhaus-black hover:bg-bauhaus-black hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bauhaus-white border-b-4 border-bauhaus-black p-8 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            {NAVIGATION.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-bauhaus-black hover:pl-4 transition-all duration-300 border-l-4 border-transparent hover:border-bauhaus-blue"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;