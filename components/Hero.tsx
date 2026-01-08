import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="min-h-[80vh] pt-24 relative overflow-hidden flex flex-col items-center justify-center border-b-4 border-bauhaus-black bg-bauhaus-white text-center">
      {/* Subtle Bauhaus Accent */}
      <div className="absolute top-0 left-0 w-24 h-24 border-r-4 border-b-4 border-bauhaus-black bg-bauhaus-yellow opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-bauhaus-blue opacity-20"></div>

      <div className="container mx-auto px-4 z-10 max-w-4xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tighter mb-12 text-bauhaus-black"
        >
          Prosta strona www,<br className="hidden md:block"/> która działa. <span className="text-bauhaus-red">Bez kombinowania.</span>
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href={`#${SectionId.CONTACT}`} className="inline-block bg-bauhaus-black text-bauhaus-white text-xl sm:text-2xl font-bold px-12 py-5 hover:bg-bauhaus-red hover:scale-105 transition-all duration-300 shadow-[8px_8px_0px_0px_#F2C94C]">
            Zamów prostą stronę
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;