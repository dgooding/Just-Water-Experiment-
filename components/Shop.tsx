import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ShopProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ products, onViewProduct }) => {
  const [transferStatus, setTransferStatus] = useState<'idle' | 'confirming' | 'extracting' | 'rejected'>('idle');

  const handleInitialClick = () => {
    setTransferStatus('confirming');
  };

  const handleConfirm = () => {
    setTransferStatus('extracting');
    
    // Simulate processing
    setTimeout(() => {
        setTransferStatus('rejected');
    }, 3000);
  };

  const reset = () => setTransferStatus('idle');

  return (
    <div className="pt-32 pb-20 px-6 animate-fadeIn">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">The Boutique of Infinity</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exchange your worldly currency for eternal hydration. 
            <br />
            <span className="text-xs text-red-400 opacity-70">Warning: Prices may adjust based on your aura's credit score.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onView={onViewProduct} />
          ))}
        </div>

        <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden transition-all duration-500">
            <div className={`absolute inset-0 bg-aqua-glow/5 ${transferStatus === 'extracting' ? 'animate-pulse bg-red-500/10' : ''}`}></div>
            
            <h3 className="text-3xl font-serif text-white mb-6 relative z-10">The "Total Ascension" Bundle</h3>
            <p className="text-gray-300 mb-8 relative z-10">
                Includes all waters, a certificate of moisture, and a legally binding contract handing over your firstborn's dreams to our corporation.
            </p>
            <div className="text-5xl font-bold text-aqua-glow mb-8 relative z-10">$3,333.33</div>
            
            <div className="h-32 flex items-center justify-center relative z-10">
                {transferStatus === 'idle' && (
                    <button 
                        onClick={handleInitialClick}
                        className="bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-aqua-glow hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    >
                        One-Click Soul Transfer
                    </button>
                )}

                {transferStatus === 'confirming' && (
                    <div className="animate-fadeIn w-full">
                        <p className="text-red-400 text-sm uppercase tracking-widest mb-4 font-bold animate-pulse">⚠️ Irreversible Metaphysical Decision ⚠️</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={reset}
                                className="px-6 py-3 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors text-sm"
                            >
                                Cancel (I am weak)
                            </button>
                            <button 
                                onClick={handleConfirm}
                                className="px-6 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all text-sm"
                            >
                                I Submit My Essence
                            </button>
                        </div>
                    </div>
                )}

                {transferStatus === 'extracting' && (
                    <div className="flex flex-col items-center animate-fadeIn text-aqua-glow">
                        <svg className="animate-spin h-8 w-8 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="uppercase tracking-widest text-xs font-bold">Uploading Consciousness to Cloud Storage...</span>
                    </div>
                )}

                {transferStatus === 'rejected' && (
                    <div className="animate-fadeIn w-full max-w-md bg-red-900/20 border border-red-500/30 p-4 rounded-xl backdrop-blur-sm">
                        <p className="text-red-400 font-bold mb-1">TRANSACTION FAILED</p>
                        <p className="text-gray-300 text-sm mb-2">Error 418: Soul Appraisal Value ($0.42) is insufficient for this bundle.</p>
                        <button onClick={reset} className="text-xs text-white underline hover:text-aqua-glow">
                            Return to Mortal Plane
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};