import React from 'react';
import { SectionId } from '../types';
import { CHOICE_CARDS } from '../constants';
import { motion } from 'framer-motion';
import { Square } from './BauhausGraphics';

const Choice: React.FC = () => {
  return (
    <section id={SectionId.CHOICE} className="py-24 bg-bauhaus-white border-b-4 border-bauhaus-black relative overflow-hidden">
      <Square className="absolute -left-20 top-40 w-60 h-60 bg-bauhaus-yellow opacity-30 rotate-12" />
      
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Landing page, wizytówka WWW czy prosta strona firmowa – <span className="text-bauhaus-blue">co wybrać?</span>
          </h2>
          <p className="text-xl font-medium border-l-4 border-bauhaus-red pl-6 py-2">
            Nie wiesz, czego potrzebujesz? Sprawdź najczęstsze scenariusze. Dobieramy rozwiązanie do Twojego celu, nie wciskamy najdroższej opcji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CHOICE_CARDS.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border-4 border-bauhaus-black p-8 bg-white hover:shadow-[12px_12px_0px_0px_#1A459C] transition-shadow duration-300"
            >
              <h3 className="text-2xl font-black mb-6 uppercase text-bauhaus-black">{card.title}</h3>
              <ul className="space-y-3">
                {card.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-bauhaus-red mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-lg leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold mb-8 bg-bauhaus-black text-bauhaus-white inline-block px-4 py-2 transform -rotate-1">
            Cena zależy od struktury strony, a nie nazw zakładek.
          </p>
          <div className="block">
            <a href={`#${SectionId.PRICING}`} className="text-xl font-bold underline decoration-4 decoration-bauhaus-yellow hover:text-bauhaus-blue hover:decoration-bauhaus-red transition-all">
              Zobacz ofertę stron WWW &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;