import React from 'react';
import { SectionId } from '../types';
import { FUNCTIONALITY_BAD, FUNCTIONALITY_GOOD } from '../constants';
import { motion } from 'framer-motion';

const Functionality: React.FC = () => {
  return (
    <section id={SectionId.FUNCTIONALITY} className="py-24 bg-bauhaus-black text-bauhaus-white border-b-4 border-bauhaus-white">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
          Dlaczego strona internetowa ma <span className="text-bauhaus-yellow">działać</span>, a nie tylko wyglądać
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-bauhaus-white">
          {/* Bad Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-bauhaus-white bg-[#1a1a1a]"
          >
            <h3 className="text-2xl font-bold mb-8 text-bauhaus-red flex items-center">
              <span className="text-4xl mr-4">✕</span> NAJCZĘSTSZE PROBLEMY
            </h3>
            <ul className="space-y-6">
              {FUNCTIONALITY_BAD.map((item, i) => (
                <li key={i} className="text-lg opacity-80 flex items-center">
                   <span className="w-2 h-2 bg-bauhaus-red rounded-full mr-4"></span>
                   {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Good Column */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="p-8 md:p-12 bg-bauhaus-black relative overflow-hidden"
          >
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-bauhaus-blue rounded-bl-full opacity-20"></div>

            <h3 className="text-2xl font-bold mb-8 text-bauhaus-yellow flex items-center">
              <span className="text-4xl mr-4">✓</span> JAK POWINNA DZIAŁAĆ
            </h3>
            <ul className="space-y-6 relative z-10">
              {FUNCTIONALITY_GOOD.map((item, i) => (
                <li key={i} className="text-xl font-bold flex items-center">
                  <span className="w-3 h-3 bg-bauhaus-yellow mr-4 transform rotate-45"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Functionality;