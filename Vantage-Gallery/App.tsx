
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import CreativeAssistant from './components/CreativeAssistant.tsx';
import { View } from './types.ts';
import { PROJECTS, NFTProject } from './constants.ts';
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook, X } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedProject, setSelectedProject] = useState<NFTProject | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const renderHome = () => (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1920&h=1080" 
            className="w-full h-full object-cover opacity-30 grayscale brightness-50 scale-105 transition-transform duration-[10s] hover:scale-100" 
            alt="Vantage Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mt-20">
          <p className="text-red-600 uppercase tracking-[0.7em] text-[10px] font-bold mb-10 animate-in fade-in duration-1000">Digital Scarcity. Refined.</p>
          <h1 className="text-6xl md:text-[11rem] font-serif italic mb-14 leading-[0.85] animate-in slide-in-from-bottom-12 duration-1000 select-none">
            On-Chain <br /> Cultural <span className="text-red-600">Legacy.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center space-y-12 md:space-y-0 md:space-x-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <p className="text-lg text-zinc-500 max-w-md font-light tracking-wide leading-relaxed">
              VANTAGE is a curated sanctuary for high-end digital artifacts. We bridge the gap between technical provenance and fine art.
            </p>
            <button 
              onClick={() => setView('work')}
              className="group flex items-center space-x-6 uppercase tracking-[0.5em] text-[10px] font-bold border-b border-zinc-900 hover:border-white transition-all pb-4 w-fit"
            >
              <span>Browse Genesis Drops</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-8 md:left-24 flex items-center space-x-8 opacity-20">
          <div className="w-px h-20 bg-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-600 h-full w-full animate-scroll-line" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.6em] font-medium font-bold">Discover</span>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="px-8 md:px-24 py-40 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-10">
          <h2 className="text-5xl md:text-8xl font-serif italic">Genesis <br /> Collections</h2>
          <div className="h-px flex-1 bg-zinc-900 mx-16 hidden md:block" />
          <button 
            onClick={() => setView('work')}
            className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 hover:text-red-600 transition-colors font-bold"
          >
            Archive [06]
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
          {PROJECTS.slice(0, 4).map((project, idx) => (
            <div key={project.id} className={idx % 2 === 1 ? 'md:mt-40' : ''}>
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-72 px-8 md:px-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden text-center relative">
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          <p className="text-red-600 uppercase tracking-[0.7em] text-[10px] font-bold">The Curation</p>
          <h3 className="text-4xl md:text-7xl font-serif italic leading-tight text-zinc-200">
            "We believe that the blockchain is the canvas of our generation, where provenance meets poetry."
          </h3>
          <div className="flex justify-center pt-20">
            <div className="w-px h-40 bg-gradient-to-b from-red-600 to-transparent" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif italic text-white/[0.02] select-none pointer-events-none">Ethereal</div>
      </section>
    </div>
  );

  const renderWork = () => (
    <div className="pt-48 px-8 md:px-24 pb-48 space-y-40 bg-black min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-b border-zinc-900 pb-24">
        <div className="space-y-6">
          <p className="text-red-600 uppercase tracking-[0.7em] text-[10px] font-bold">All Collections</p>
          <h2 className="text-7xl md:text-[12rem] font-serif italic leading-[0.8] animate-in slide-in-from-left duration-700">Drops.</h2>
        </div>
        <div className="flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold mb-4">
          <span className="text-white border-b border-red-600 pb-3 cursor-pointer">Live</span>
          <span className="hover:text-white transition-colors cursor-pointer">Sold Out</span>
          <span className="hover:text-white transition-colors cursor-pointer">Upcoming</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
            <ProjectCard 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="pt-48 px-8 md:px-24 pb-48 space-y-48 max-w-7xl mx-auto bg-black min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <div className="space-y-20 animate-in slide-in-from-left duration-1000">
          <p className="text-red-600 uppercase tracking-[0.7em] text-[10px] font-bold">Provenance</p>
          <h2 className="text-7xl md:text-[10rem] font-serif italic leading-[0.8] mb-12">The <br /> Gallery.</h2>
          <p className="text-2xl text-zinc-500 font-light leading-relaxed max-w-lg">
            VANTAGE was born from the desire to elevate digital art beyond speculation. We provide a space where artifacts are judged by their craft, not just their floor price.
          </p>
          <div className="flex space-x-16 pt-10">
            <div className="space-y-4">
              <span className="text-5xl font-serif italic text-white">42K</span>
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-700 font-bold">Artifacts Minted</p>
            </div>
            <div className="space-y-4">
              <span className="text-5xl font-serif italic text-white">12</span>
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-700 font-bold">Global Chains</p>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000&h=1400" 
            alt="Vantage Atmosphere" 
            className="w-full grayscale opacity-40 transition-transform duration-[3s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-24 py-40 border-y border-zinc-900">
        {[
          { title: 'Digital Soul', desc: 'Curating work that resonates with human emotion through digital mediums.' },
          { title: 'Verifiable Truth', desc: 'Leveraging on-chain metadata to ensure eternal provenance and royalty enforcement.' },
          { title: 'Spatial Future', desc: 'Designing collections optimized for high-fidelity spatial computing environments.' }
        ].map((point, i) => (
          <div key={i} className="space-y-10">
            <h4 className="text-4xl font-serif italic text-zinc-100">{point.title}</h4>
            <p className="text-zinc-600 font-light leading-relaxed text-base">{point.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="pt-48 px-8 md:px-24 pb-48 max-w-7xl mx-auto bg-black min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="space-y-32 animate-in slide-in-from-left duration-1000">
          <h2 className="text-8xl md:text-[11rem] font-serif italic leading-none">Apply.</h2>
          <div className="space-y-20">
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-[0.5em] text-red-600 mb-8 group-hover:translate-x-4 transition-transform duration-500 font-bold">Artist Submissions</p>
              <p className="text-3xl font-light text-zinc-500 group-hover:text-white transition-colors duration-500 leading-relaxed">curation@vantage.gallery</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-[0.5em] text-red-600 mb-8 group-hover:translate-x-4 transition-transform duration-500 font-bold">Collector Support</p>
              <p className="text-4xl font-light text-zinc-500 group-hover:text-white transition-colors duration-500 underline decoration-zinc-900 underline-offset-[16px] decoration-1">support@vantage.gallery</p>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-950 p-16 md:p-20 border border-zinc-900 rounded-sm shadow-2xl animate-in fade-in duration-1000 delay-300">
          <form className="space-y-16">
            <div className="space-y-6">
              <label className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 font-bold">Legal Identity</label>
              <input type="text" className="w-full bg-transparent border-b border-zinc-900 pb-6 focus:border-red-600 outline-none transition-colors text-2xl font-light text-zinc-200" placeholder="Artist Name / Alias" />
            </div>
            <div className="space-y-6">
              <label className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 font-bold">Portfolio Link</label>
              <input type="text" className="w-full bg-transparent border-b border-zinc-900 pb-6 focus:border-red-600 outline-none transition-colors text-2xl font-light text-zinc-200" placeholder="Artstation / Behance / Web3 ID" />
            </div>
            <div className="space-y-6">
              <label className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 font-bold">Proposal</label>
              <textarea className="w-full bg-transparent border-b border-zinc-900 pb-6 focus:border-red-600 outline-none transition-colors text-2xl font-light text-zinc-200 h-40 resize-none" placeholder="Describe your collection concept..." />
            </div>
            <button className="w-full py-8 bg-white text-black text-[10px] font-bold uppercase tracking-[0.7em] hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-2">
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderProjectDetail = () => {
    if (!selectedProject) return null;
    return (
      <div className="fixed inset-0 z-[100] bg-black overflow-y-auto animate-in fade-in slide-in-from-bottom duration-700">
        <button 
          onClick={() => setSelectedProject(null)}
          className="fixed top-10 right-10 z-[110] bg-white text-black p-6 rounded-full hover:scale-110 transition-transform shadow-2xl"
        >
          <X size={24} />
        </button>
        
        <div className="relative h-screen w-full">
          <img src={selectedProject.imageUrl} className="w-full h-full object-cover grayscale brightness-50" alt={selectedProject.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
          <div className="absolute bottom-32 left-8 md:left-24 max-w-6xl space-y-10">
            <p className="text-red-600 font-bold tracking-[0.7em] text-[10px] uppercase animate-in slide-in-from-bottom duration-700 delay-200">{selectedProject.client}</p>
            <h2 className="text-7xl md:text-[13rem] font-serif italic leading-[0.8] animate-in slide-in-from-bottom duration-1000 delay-300 select-none">{selectedProject.title}</h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-48 space-y-48 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 border-b border-zinc-900 pb-32">
             <div className="md:col-span-2 space-y-12">
                <p className="text-[10px] text-zinc-700 uppercase tracking-[0.6em] font-bold">Collection Intel</p>
                <p className="text-4xl font-serif italic leading-relaxed text-zinc-300">
                  {selectedProject.description}
                </p>
             </div>
             <div className="space-y-10">
                <p className="text-[10px] text-zinc-700 uppercase tracking-[0.6em] font-bold">Metadata</p>
                <ul className="text-sm space-y-4 text-zinc-600 font-light tracking-wide uppercase">
                   <li className="flex justify-between"><span>Chain</span> <span className="text-white">{selectedProject.chain}</span></li>
                   <li className="flex justify-between"><span>Supply</span> <span className="text-white">{selectedProject.supply}</span></li>
                   <li className="flex justify-between"><span>Floor</span> <span className="text-white">{selectedProject.floor}</span></li>
                   <li className="flex justify-between"><span>Type</span> <span className="text-white">{selectedProject.category}</span></li>
                </ul>
             </div>
             <div className="space-y-10">
                <p className="text-[10px] text-zinc-700 uppercase tracking-[0.6em] font-bold">Drop Date</p>
                <p className="text-sm text-zinc-600 font-light tracking-[0.3em]">{selectedProject.year}</p>
             </div>
          </div>
          
          <div className="space-y-48">
             <img src={selectedProject.imageUrl} className="w-full grayscale border border-zinc-900 transition-all duration-1000 hover:grayscale-0" alt="Collection Preview" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
               <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=1100" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute bottom-10 left-10">
                    <p className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold">Provenance Hash</p>
                    <p className="text-xs font-mono text-zinc-200">0x4a...e82f</p>
                  </div>
               </div>
               <div className="space-y-16">
                  <h4 className="text-6xl font-serif italic text-zinc-100">Immutable <br /> Art.</h4>
                  <p className="text-2xl text-zinc-600 font-light leading-relaxed italic">
                    "This collection represents a shift in digital ownership. Every token is a verified artifact of the artist's intent, secured by the chain."
                  </p>
                  <button className="px-12 py-6 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                    View on Marketplace
                  </button>
               </div>
             </div>
          </div>

          <div className="py-48 text-center border-t border-zinc-900">
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-[11px] uppercase tracking-[0.7em] border-b border-red-600 pb-4 hover:text-red-600 transition-all font-bold"
            >
              Return to Drops
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-red-600 selection:text-white scroll-smooth cursor-crosshair">
      <Navbar currentView={view} setView={setView} />
      
      <main className="relative z-10">
        {view === 'home' && renderHome()}
        {view === 'work' && renderWork()}
        {view === 'about' && renderAbout()}
        {view === 'contact' && renderContact()}
      </main>

      {renderProjectDetail()}

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black px-8 md:px-24 py-48">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
          <div className="col-span-1 md:col-span-2 space-y-20">
            <div className="text-7xl font-bold tracking-tighter">
              VANTAGE<span className="text-red-600">.</span>
            </div>
            <p className="text-zinc-600 max-w-lg font-light tracking-wide text-xl leading-relaxed">
              Global curated sanctuary for high-fidelity digital artifacts and on-chain culture.
            </p>
            <div className="flex space-x-16 text-zinc-700">
              <Twitter className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          
          <div className="space-y-16">
            <h4 className="text-[11px] uppercase tracking-[0.6em] text-zinc-400 font-bold">Ecosystem</h4>
            <ul className="space-y-8 text-zinc-700 text-[12px] tracking-[0.5em] uppercase font-bold">
              <li className="hover:text-red-600 transition-colors cursor-pointer" onClick={() => setView('work')}>Drops</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer" onClick={() => setView('about')}>Curation</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer" onClick={() => setView('contact')}>Submit</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Secondary</li>
            </ul>
          </div>
          
          <div className="space-y-16">
            <h4 className="text-[11px] uppercase tracking-[0.6em] text-zinc-400 font-bold">Whitelist</h4>
            <p className="text-zinc-700 text-sm font-light leading-relaxed">Join our dispatch for early access to Genesis artifacts.</p>
            <div className="flex border-b border-zinc-900 pb-6 focus-within:border-red-600 transition-colors">
              <input 
                type="email" 
                placeholder="WALLET / EMAIL" 
                className="bg-transparent text-[10px] w-full focus:outline-none placeholder:text-zinc-800 uppercase tracking-[0.5em] font-bold" 
              />
              <button className="text-red-600 hover:text-white transition-colors">
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-48 pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.6em] uppercase text-zinc-800 font-bold">
          <p>&copy; 2024 VANTAGE DIGITAL ASSETS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-20 mt-10 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Provancence</span>
            <span className="cursor-pointer hover:text-white transition-colors">Legal Dispatch</span>
          </div>
        </div>
      </footer>

      <CreativeAssistant />
    </div>
  );
};

export default App;
