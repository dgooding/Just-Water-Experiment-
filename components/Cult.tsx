import React, { useState } from 'react';

export const Cult: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'joined'>('idle');

  const joinCult = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
        setStatus('joined');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen animate-fadeIn flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
            <div className="inline-block mb-4">
                <svg className="w-16 h-16 text-aqua-glow animate-[spin_10s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h1 className="text-5xl font-serif text-white mb-2">The Order of the Eternal Drip</h1>
            <p className="text-aqua-light uppercase tracking-widest text-sm">Est. Tomorrow</p>
        </div>

        {status === 'joined' ? (
             <div className="glass-panel p-12 rounded-2xl text-center border-2 border-aqua-glow shadow-[0_0_100px_rgba(159,255,203,0.2)] animate-float">
                <h2 className="text-4xl font-serif text-aqua-glow mb-6">Welcome, Initiate.</h2>
                <p className="text-white text-lg mb-6">
                    You have successfully renounced dry land. 
                    Your bank account will now automatically transfer 10% of your income to "The Reservoir."
                </p>
                <p className="text-gray-400 text-sm">
                    Please stand by for telepathic instructions from the Grand Hydrator.
                </p>
             </div>
        ) : (
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
                <h2 className="text-3xl font-serif text-white mb-6">Membership Requirements</h2>
                <ul className="space-y-4 mb-8 text-gray-300">
                    <li className="flex items-center">
                        <span className="text-red-500 mr-4">✖</span>
                        Must renounce all other liquids (coffee, tea, lava).
                    </li>
                    <li className="flex items-center">
                        <span className="text-aqua-glow mr-4">✓</span>
                        Must act superior to people who drink tap water.
                    </li>
                    <li className="flex items-center">
                        <span className="text-aqua-glow mr-4">✓</span>
                        Must be willing to vibrate at 432Hz.
                    </li>
                    <li className="flex items-center">
                        <span className="text-aqua-glow mr-4">✓</span>
                        Must sign a non-disclosure agreement regarding the taste (it tastes like water).
                    </li>
                </ul>

                <form onSubmit={joinCult} className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name (Or Spirit Name)</label>
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-aqua-glow focus:outline-none" placeholder="e.g. Moonchild H2O" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Blood Type</label>
                        <select className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-aqua-glow focus:outline-none">
                            <option>A Positive</option>
                            <option>O Negative</option>
                            <option>Liquid</option>
                            <option>Gatorade</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-aqua-glow text-black font-bold py-4 rounded-lg hover:bg-white transition-colors"
                    >
                        {status === 'submitting' ? 'Uploading Soul...' : 'Pledge Allegiance to the Liquid'}
                    </button>
                </form>
            </div>
        )}

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 border border-white/5 rounded-xl">
                <div className="text-3xl font-bold text-white mb-1">12K</div>
                <div className="text-xs text-gray-500 uppercase">Acolytes</div>
            </div>
            <div className="p-4 border border-white/5 rounded-xl">
                <div className="text-3xl font-bold text-white mb-1">∞</div>
                <div className="text-xs text-gray-500 uppercase">Gallons Consumed</div>
            </div>
            <div className="p-4 border border-white/5 rounded-xl">
                <div className="text-3xl font-bold text-white mb-1">0</div>
                <div className="text-xs text-gray-500 uppercase">Refunds Given</div>
            </div>
        </div>
      </div>
    </div>
  );
};