import React from 'react';
import { SectionId } from '../types';
import { FAQ_ITEMS } from '../constants';

const Faq: React.FC = () => {
  return (
    <section id={SectionId.FAQ} className="py-24 bg-bauhaus-black text-bauhaus-white border-b-4 border-bauhaus-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Najczęściej zadawane pytania</h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={idx} className="group border-2 border-bauhaus-white bg-[#1a1a1a] open:bg-bauhaus-white open:text-bauhaus-black transition-colors duration-300">
              <summary className="cursor-pointer p-6 font-bold text-xl flex justify-between items-center select-none">
                {item.question}
                <span className="text-3xl group-open:rotate-45 transition-transform duration-300 text-bauhaus-yellow group-open:text-bauhaus-red">+</span>
              </summary>
              <div className="p-6 pt-0 text-lg leading-relaxed border-t-2 border-transparent group-open:border-bauhaus-black opacity-90">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;