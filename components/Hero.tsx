import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Abstract Water Background */}
      <div className="absolute inset-0 bg-aqua-deep z-0">
         <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aqua-mid via-aqua-deep to-black"></div>
         {/* Animated bubbles */}
         <div className="absolute bottom-0 left-[10%] w-4 h-4 bg-white/20 rounded-full animate-[float_4s_infinite_ease-in-out]"></div>
         <div className="absolute bottom-0 left-[20%] w-8 h-8 bg-white/10 rounded-full animate-[float_7s_infinite_ease-in-out_1s]"></div>
         <div className="absolute bottom-0 right-[15%] w-6 h-6 bg-aqua-glow/20 rounded-full animate-[float_5s_infinite_ease-in-out_0.5s]"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-5xl">
        <p className="text-aqua-glow tracking-[0.5em] text-sm md:text-base font-bold mb-6 animate-fadeIn">
          EST. BEFORE TIME ITSELF
        </p>
        <h1 className="text-6xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-aqua-light to-white mb-8 text-glow leading-tight">
          HydroSanctus
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
          The only water proven* to cure mortality, laziness, and bad credit. 
          <br/>
          <span className="text-xs text-gray-500">*proven by our founder in a dream he had once.</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('shop')}
            className="px-8 py-4 bg-aqua-glow text-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(159,255,203,0.4)]"
          >
            Ascend Now (Shop)
          </button>
          <button 
            onClick={() => onNavigate('origins')}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            View The Prophecy
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-aqua-light/50">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};