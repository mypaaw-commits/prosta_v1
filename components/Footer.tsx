import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bauhaus-black text-bauhaus-white py-12 border-t-4 border-bauhaus-yellow relative z-10">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2 uppercase">{APP_NAME}</h2>
          <p className="opacity-60 text-sm font-medium">© {new Date().getFullYear()} PROSTA STRONA. WSZELKIE PRAWA ZASTRZEŻONE.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-bold tracking-wider">
          <a href="#polityka" className="hover:text-bauhaus-yellow transition-colors border-b-2 border-transparent hover:border-bauhaus-yellow">POLITYKA PRYWATNOŚCI</a>
          <a href="#" className="hover:text-bauhaus-yellow transition-colors border-b-2 border-transparent hover:border-bauhaus-yellow">REGULAMIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;