import React, { useState, useEffect } from 'react';
import { ArrowRight, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { PROJECTS } from './constants.ts';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white cursor-crosshair">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-8 md:px-20 py-10 flex justify-between items-center ${scrolled ? 'bg-black/80 backdrop-blur-md py-6' : 'bg-transparent'}`}>
        <a href="#" className="text-2xl font-bold tracking-tighter">VANTAGE<span className="text-red-600">.</span></a>
        
        <div className="hidden md:flex space-x-16">
          {['Drops', 'Curation', 'Apply'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMobileMenu(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[200] bg-black p-10 flex flex-col animate-in fade-in slide-in-from-right duration-500">
          <button className="self-end" onClick={() => setMobileMenu(false)}><X className="w-10 h-10" /></button>
          <div className="flex flex-col space-y-12 mt-20">
            {['Drops', 'Curation', 'Apply'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-6xl font-serif italic" onClick={() => setMobileMenu(false)}>
                {link}.
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[110vh] w-full flex items-center px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110 animate-[pulse_10s_infinite_alternate]" 
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-7xl">
          <p className="text-red-600 uppercase tracking-[0.8em] text-[10px] font-bold mb-10 animate-in fade-in duration-1000">EST. 2024 / ARCHIVE</p>
          <h1 className="text-7xl md:text-[12rem] font-serif italic mb-14 leading-[0.8] tracking-tighter">
            Digital <br /> Soul, Curated <br /> <span className="text-red-600">On-Chain.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center space-y-10 md:space-y-0 md:space-x-24">
            <p className="text-lg text-zinc-500 max-w-sm font-light leading-relaxed">
              We bridge the boundary between technical precision and artistic poetry in the world of decentralized artifacts.
            </p>
            <a href="#drops" className="group flex items-center space-x-6 uppercase tracking-[0.6em] text-[10px] font-bold border-b border-zinc-900 hover:border-red-600 transition-all pb-4">
              <span>View Drops</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-8 md:left-24 flex items-center space-x-10 opacity-30">
          <div className="w-[1px] h-24 bg-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-600 h-full w-full animate-scroll-line" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.8em] font-bold">Discover</span>
        </div>
      </section>

      {/* Grid Section */}
      <section id="drops" className="px-8 md:px-24 py-56 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-10 border-b border-zinc-900 pb-20">
          <h2 className="text-6xl md:text-9xl font-serif italic">The <br /> Portfolio.</h2>
          <span className="text-[10px] uppercase tracking-[0.8em] text-zinc-700 font-bold">Volume 01 // Genesis</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`group relative cursor-pointer ${idx % 2 === 1 ? 'md:mt-40' : ''}`}>
              <div className="overflow-hidden aspect-[16/11] bg-zinc-950 border border-zinc-900 relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="mt-12 flex justify-between items-start">
                <div>
                   <p className="text-red-600 text-[9px] font-bold uppercase tracking-[0.5em] mb-3">{project.category}</p>
                   <h3 className="text-4xl md:text-5xl font-serif italic tracking-tight">{project.title}</h3>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{project.client}</p>
                  <p className="text-[9px] text-zinc-700 uppercase tracking-[0.4em] mt-2">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section id="curation" className="py-80 px-8 md:px-24 bg-zinc-950 border-y border-zinc-900 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-20 relative z-10">
          <p className="text-red-600 uppercase tracking-[0.8em] text-[10px] font-bold">The Vision</p>
          <h3 className="text-5xl md:text-8xl font-serif italic leading-tight text-white tracking-tight">
            "Art is the trace of <span className="text-zinc-500">humanity</span> in a digital vacuum."
          </h3>
          <div className="flex justify-center pt-24">
            <div className="w-[1px] h-48 bg-gradient-to-b from-red-600 to-transparent" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-white/[0.01] select-none pointer-events-none uppercase">Aesthetics</div>
      </section>

      {/* Contact Form */}
      <section id="apply" className="py-64 px-8 md:px-24 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          <div className="space-y-32">
            <h2 className="text-8xl md:text-[13rem] font-serif italic leading-none tracking-tighter">Submit.</h2>
            <div className="space-y-20">
              <div className="group border-b border-zinc-900 pb-10 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.6em] text-red-600 font-bold mb-6">Artists</p>
                <p className="text-4xl font-light text-zinc-500 group-hover:text-white transition-colors">curation@vantage.gallery</p>
              </div>
              <div className="group border-b border-zinc-900 pb-10 hover:border-red-600 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.6em] text-red-600 font-bold mb-6">Press</p>
                <p className="text-4xl font-light text-zinc-500 group-hover:text-white transition-colors">dispatch@vantage.gallery</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-950 p-12 md:p-24 border border-zinc-900 rounded-sm">
            <form className="space-y-16">
              <input type="text" placeholder="ARTIST IDENTITY" className="w-full bg-transparent border-b border-zinc-900 pb-6 focus:border-red-600 outline-none text-2xl font-light tracking-wide placeholder:text-zinc-800" />
              <input type="text" placeholder="PORTFOLIO URL" className="w-full bg-transparent border-b border-zinc-900 pb-6 focus:border-red-600 outline-none text-2xl font-light tracking-wide placeholder:text-zinc-800" />
              <textarea placeholder="PROPOSAL BRIEF" className="w-full bg-transparent border-b border-zinc-900 pb-6 focus:border-red-600 outline-none text-2xl font-light tracking-wide h-40 resize-none placeholder:text-zinc-800" />
              <button className="w-full py-10 bg-white text-black font-bold uppercase tracking-[0.8em] text-[11px] hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-2">
                Send Dossier
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black px-8 md:px-24 py-48">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-40">
          <div className="col-span-1 md:col-span-2 space-y-12">
            <div className="text-7xl font-bold tracking-tighter">VANTAGE<span className="text-red-600">.</span></div>
            <p className="text-zinc-600 max-w-sm font-light text-xl leading-relaxed">Global curated sanctuary for high-fidelity digital artifacts.</p>
            <div className="flex space-x-12 text-zinc-600">
              <Twitter className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold">Registry</h4>
            <ul className="space-y-6 text-zinc-600 text-[11px] font-bold uppercase tracking-[0.5em]">
              <li><a href="#drops" className="hover:text-red-600">Archive</a></li>
              <li><a href="#curation" className="hover:text-red-600">Philosophy</a></li>
              <li><a href="#apply" className="hover:text-red-600">Apply</a></li>
            </ul>
          </div>
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold">Dispatch</h4>
            <div className="flex border-b border-zinc-900 pb-4">
              <input type="text" placeholder="WALLET" className="bg-transparent text-[10px] w-full focus:outline-none placeholder:text-zinc-800 uppercase tracking-widest font-bold" />
              <button className="text-red-600 font-bold text-lg">→</button>
            </div>
          </div>
        </div>
        <div className="mt-48 pt-12 border-t border-zinc-900 text-[10px] uppercase tracking-[0.6em] text-zinc-800 font-bold flex flex-col md:flex-row justify-between items-center gap-8">
          <p>&copy; 2024 VANTAGE DIGITAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-16">
            <span>Provenance</span>
            <span>Legal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;