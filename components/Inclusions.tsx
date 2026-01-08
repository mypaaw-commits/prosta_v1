import React from 'react';
import { SectionId } from '../types';
import { INCLUSIONS } from '../constants';

const Inclusions: React.FC = () => {
  return (
    <section id={SectionId.INCLUSIONS} className="py-24 bg-bauhaus-white border-b-4 border-bauhaus-black relative">
       <div className="absolute left-0 bottom-0 w-full h-4 bg-bauhaus-red"></div>
       
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
          Co dokładnie dostajesz <br/>w <span className="underline decoration-bauhaus-blue decoration-8">każdej</span> stronie internetowej
        </h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {INCLUSIONS.map((item, i) => (
                <li key={i} className="flex items-start text-lg font-medium">
                  <div className="w-6 h-6 border-2 border-bauhaus-black bg-bauhaus-blue mr-4 mt-1 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-bauhaus-yellow border-4 border-bauhaus-black p-8 shadow-[8px_8px_0px_0px_#000]">
              <p className="font-bold text-lg mb-4">
                Standardowo pracujemy na treściach i materiałach dostarczonych przez klienta.
              </p>
              <p className="font-bold text-lg">
                Jeśli chcesz, żebyśmy przygotowali treści lub zdjęcia — jest to usługa dodatkowa.
              </p>
            </div>
            <p className="text-right font-black mt-4 uppercase tracking-wider text-sm">To są standardy, nie dodatki.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusions;