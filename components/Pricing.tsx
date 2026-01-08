import React from 'react';
import { SectionId } from '../types';
import { PRICING_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id={SectionId.PRICING} className="py-24 bg-gray-100 border-b-4 border-bauhaus-black">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase">Ile kosztuje prosta strona</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`border-4 border-bauhaus-black bg-white p-8 flex flex-col h-full relative ${idx === 2 ? 'md:-mt-4 shadow-[16px_16px_0px_0px_#D93025]' : 'shadow-[8px_8px_0px_0px_#121212]'}`}
            >
              {idx === 2 && (
                <div className="absolute top-0 right-0 bg-bauhaus-red text-white text-xs font-bold px-3 py-1 uppercase tracking-widest transform translate-x-2 -translate-y-1/2 border-2 border-bauhaus-black">
                  Najpopularniejszy
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 uppercase">{item.title}</h3>
              <div className="text-4xl font-black mb-8 text-bauhaus-blue">{item.price}</div>
              
              <ul className="mb-8 flex-grow space-y-3">
                {item.features.map((feat, i) => (
                  <li key={i} className="text-sm font-medium border-b border-gray-200 pb-2 last:border-0">
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href={`#${SectionId.CONTACT}`}
                className={`block text-center w-full py-3 text-lg font-black border-2 border-bauhaus-black transition-all ${idx === 2 ? 'bg-bauhaus-black text-white hover:bg-bauhaus-blue' : 'bg-transparent hover:bg-bauhaus-black hover:text-white'}`}
              >
                ZAMÓW
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 font-medium text-gray-600 max-w-2xl mx-auto">
          Jeśli zakres się zmienia, zmienia się cena — zawsze ustalana wcześniej.
        </p>
      </div>
    </section>
  );
};

export default Pricing;