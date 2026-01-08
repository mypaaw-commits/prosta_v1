import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Choice from './components/Choice';
import Functionality from './components/Functionality';
import Inclusions from './components/Inclusions';
import Pricing from './components/Pricing';
import Addons from './components/Addons';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bauhaus-white text-bauhaus-black font-sans selection:bg-bauhaus-yellow selection:text-bauhaus-black">
      <Navigation />
      <main>
        <Hero />
        <Choice />
        <Functionality />
        <Inclusions />
        <Pricing />
        <Addons />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;