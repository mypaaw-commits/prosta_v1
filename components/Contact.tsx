import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="bg-bauhaus-white py-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div className="border-4 border-bauhaus-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_#121212] relative">
          
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-bauhaus-red border-4 border-bauhaus-black"></div>

          <h2 className="text-4xl font-black mb-8 text-center uppercase">Formularz kontaktowy</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest">Imię i nazwisko <span className="text-bauhaus-red">*</span></label>
                <input required type="text" className="w-full bg-gray-50 border-2 border-bauhaus-black p-4 focus:outline-none focus:bg-white focus:border-bauhaus-blue transition-colors rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest">Adres e-mail <span className="text-bauhaus-red">*</span></label>
                <input required type="email" className="w-full bg-gray-50 border-2 border-bauhaus-black p-4 focus:outline-none focus:bg-white focus:border-bauhaus-blue transition-colors rounded-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest">Typ strony <span className="text-bauhaus-red">*</span></label>
                <div className="relative">
                  <select required className="w-full bg-gray-50 border-2 border-bauhaus-black p-4 focus:outline-none focus:bg-white focus:border-bauhaus-blue transition-colors rounded-none appearance-none cursor-pointer">
                    <option value="" disabled selected>Wybierz opcję...</option>
                    <option value="landing">Landing page</option>
                    <option value="viz">Wizytówka WWW</option>
                    <option value="simple">Prosta strona WWW</option>
                    <option value="unknown">Jeszcze nie wiem</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">▼</div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest">Treści i zdjęcia <span className="text-bauhaus-red">*</span></label>
                <div className="relative">
                  <select required className="w-full bg-gray-50 border-2 border-bauhaus-black p-4 focus:outline-none focus:bg-white focus:border-bauhaus-blue transition-colors rounded-none appearance-none cursor-pointer">
                    <option value="" disabled selected>Wybierz opcję...</option>
                    <option value="yes">Tak, mam komplet</option>
                    <option value="no">Nie, potrzebuję pomocy</option>
                    <option value="partial">Mam częściowo</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">▼</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest">Wiadomość</label>
              <textarea rows={4} className="w-full bg-gray-50 border-2 border-bauhaus-black p-4 focus:outline-none focus:bg-white focus:border-bauhaus-blue transition-colors rounded-none"></textarea>
            </div>
            
            <div className="flex items-start gap-3 mt-4">
              <input required type="checkbox" id="rodo" className="mt-1 w-5 h-5 border-2 border-bauhaus-black rounded-none cursor-pointer accent-bauhaus-black" />
              <label htmlFor="rodo" className="text-sm cursor-pointer select-none">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i obsługi zapytania, zgodnie z <a href="#polityka" className="underline decoration-bauhaus-red">polityką prywatności</a>.
              </label>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-bauhaus-black text-white py-5 text-xl font-bold uppercase hover:bg-bauhaus-red transition-colors border-2 border-transparent">
                Wyślij
              </button>
              <div className="flex justify-center gap-6 mt-4 text-sm font-bold text-gray-600 uppercase tracking-wide">
                <span>✔ jasna cena</span>
                <span>✔ bez zobowiązań</span>
                <span>✔ faktura VAT</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;