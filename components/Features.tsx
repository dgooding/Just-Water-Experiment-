import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Cures The Incurable",
    description: "Measles? Black Plague? General Malaise? Our H2O molecules are trained in martial arts to kick diseases out of your body.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Quantum Hydration",
    description: "We align the spin of every electron in the bottle. If you drink it, you might briefly vibrate into a parallel dimension where you are rich.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Negative Calories",
    description: "Drinking this water actually burns calories. Drink 5 liters and you will cease to exist physically, becoming a being of pure light.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

export const Features: React.FC = () => {
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-2xl hover:border-aqua-glow/50 transition-colors">
              <div className="w-16 h-16 bg-aqua-mid/30 rounded-full flex items-center justify-center text-aqua-glow mb-6">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{feat.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};