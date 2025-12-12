import React, { useState } from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Cures The Incurable",
    description: "Measles? Black Plague? General Malaise? Our H2O molecules are trained in martial arts to kick diseases out of your body.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    doctorExplanation: "Dr. Spigot (PhD in Wetness) explains: 'Standard medicine attacks viruses. Primitive! HydroSanctus molecules are microscopic ninjas. They sneak into your cells wearing tiny camouflage, locate the bad vibes, and perform a roundhouse kick at the atomic level. We have observed bacteria actually apologizing before leaving the body. It is not biology; it is intimidation.'"
  },
  {
    title: "Quantum Hydration",
    description: "We align the spin of every electron in the bottle. If you drink it, you might briefly vibrate into a parallel dimension where you are rich.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    doctorExplanation: "Professor H2O (No relation) states: 'Most water is lazy. The electrons spin randomly like teenagers at a dance. We force our electrons to spin in a perfect Fibonacci sequence. When this enters your bloodstream, you become 40% probability wave. This allows you to phase through minor obstacles like turnstiles, bad conversations, and tax laws.'"
  },
  {
    title: "Negative Calories",
    description: "Drinking this water actually burns calories. Drink 5 liters and you will cease to exist physically, becoming a being of pure light.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    doctorExplanation: "The Surgeon General of Atlantis reports: 'This water is so cold it actually freezes time in your stomach. Your metabolism panics and starts burning fat just to keep the timeline intact. We call this 'Thermodynamic Panic.' Effectively, for every sip you take, your body owes the universe energy. You are not dieting; you are paying a debt to physics.'"
  }
];

export const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aqua-light rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-aqua-glow uppercase mb-4">Scientific Miracles</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Why We Are Better Than Medicine</h3>
          <p className="text-gray-400 mt-4 text-sm animate-pulse">(Click a miracle for scientific proof)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div 
                key={idx} 
                onClick={() => setSelectedFeature(feat)}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-2xl hover:border-aqua-glow hover:bg-white/5 transition-all cursor-pointer transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-aqua-mid/30 rounded-full flex items-center justify-center text-aqua-glow mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-aqua-glow group-hover:text-black">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-aqua-glow transition-colors">{feat.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feat.description}</p>
              <div className="mt-4 text-aqua-light text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                Read Medical Report 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Overlay */}
      {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedFeature(null)}></div>
              <div className="relative bg-aqua-deep border border-aqua-glow/30 p-8 md:p-12 rounded-3xl max-w-2xl w-full shadow-[0_0_50px_rgba(159,255,203,0.2)] animate-fadeIn">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-aqua-glow text-black rounded-full flex items-center justify-center mb-6 animate-[bounce_2s_infinite] shadow-[0_0_30px_rgba(159,255,203,0.6)]">
                          {selectedFeature.icon}
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-2">{selectedFeature.title}</h3>
                      <div className="h-1 w-20 bg-aqua-glow mb-8"></div>
                      
                      <div className="bg-black/40 p-6 rounded-xl border border-white/5 mb-8 w-full">
                          <p className="text-lg text-gray-200 italic leading-relaxed font-serif">
                             "{selectedFeature.doctorExplanation}"
                          </p>
                      </div>

                      <div className="flex w-full justify-between items-center px-4 md:px-12 bg-white/5 py-4 rounded-lg">
                        <div className="text-center">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Peer Reviewed By</p>
                            <p className="text-aqua-light font-bold text-sm">A Dolphin</p>
                        </div>
                        <div className="w-px bg-white/10 h-8"></div>
                        <div className="text-center">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Confidence Level</p>
                            <p className="text-aqua-light font-bold text-sm">110%</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};