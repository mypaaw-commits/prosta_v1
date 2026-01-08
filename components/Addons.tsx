import React from 'react';
import { SectionId } from '../types';
import { ADDONS } from '../constants';

const Addons: React.FC = () => {
  return (
    <section id={SectionId.ADDONS} className="py-24 bg-bauhaus-white border-b-4 border-bauhaus-black">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4">
          <span className="w-8 h-8 bg-bauhaus-red rounded-full"></span>
          Usługi dodatkowe (opcjonalnie)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ADDONS.map((addon, idx) => (
            <div key={idx} className="border-2 border-bauhaus-black p-6 hover:bg-white transition-colors bg-gray-50">
              <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                <h3 className="text-xl font-black uppercase text-bauhaus-black">{addon.title}</h3>
                {addon.price && <span className="bg-bauhaus-yellow px-2 py-1 text-sm font-bold border border-bauhaus-black mt-2 sm:mt-0">{addon.price}</span>}
              </div>
              <p className="text-gray-700 font-medium mb-2">{addon.description}</p>
              {addon.note && <p className="text-xs text-bauhaus-red font-bold uppercase mt-2">{addon.note}</p>}
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-center font-bold text-lg">Strona działa poprawnie również bez usług dodatkowych.</p>
      </div>
    </section>
  );
};

export default Addons;