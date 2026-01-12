
import React from 'react';
import { View } from '../types.ts';
import { NAV_LINKS } from '../constants.ts';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[80] flex justify-between items-center px-8 md:px-24 py-10 mix-blend-difference">
      <div 
        className="cursor-pointer group flex items-baseline"
        onClick={() => setView('home')}
      >
        <span className="text-2xl md:text-3xl font-bold tracking-tighter transition-transform duration-500 group-hover:scale-105 text-white">
          VANTAGE<span className="text-red-600">.</span>
        </span>
      </div>
      
      <div className="flex space-x-8 md:space-x-16">
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => setView(link.view)}
            className={`text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500 hover:text-red-600 ${
              currentView === link.view ? 'text-red-600' : 'text-white'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
