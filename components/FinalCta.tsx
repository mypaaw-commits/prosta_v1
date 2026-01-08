import React from 'react';
import { SectionId } from '../types';
import { HalfCircle } from './BauhausGraphics';

const FinalCta: React.FC = () => {
  return (
    <section id={SectionId.FINAL_CTA} className="py-24 bg-bauhaus-yellow border-b-4 border-bauhaus-black relative overflow-hidden">
      <HalfCircle className="absolute -bottom-20 left-10 w-40 h-20 bg-bauhaus-white opacity-40" direction="up" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-bauhaus-black">
          Zamów prostą stronę,<br/> która działa
        </h2>
        <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto">
          Bez ukrytych kosztów, bez skomplikowanych umów. Czysty konkret.
        </p>
        <a 
          href={`#${SectionId.CONTACT}`} 
          className="inline-block bg-bauhaus-black text-white text-xl font-bold px-16 py-6 border-4 border-transparent hover:bg-white hover:text-bauhaus-black hover:border-bauhaus-black transition-all duration-300 shadow-[10px_10px_0px_0px_#fff]"
        >
          ZAMÓW PROSTĄ STRONĘ
        </a>
      </div>
    </section>
  );
};

export default FinalCta;