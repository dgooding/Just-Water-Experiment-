import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'rejected'>('idle');

  // Scroll to top immediately when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handlePay = () => {
    setPaymentStatus('processing');
    
    // Fake processing delay
    setTimeout(() => {
        setPaymentStatus('rejected');
    }, 2500);
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-6 min-h-screen animate-fadeIn relative flex flex-col items-center">
      
      {/* Improved Exit Navigation - Sticky Top for Mobile convenience, relative for desktop */}
      <div className="w-full max-w-6xl mb-6 flex justify-between items-center z-40 sticky top-20 md:relative md:top-0 bg-black/80 md:bg-transparent p-4 md:p-0 rounded-xl backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none">
          <button 
              onClick={onBack}
              className="group flex items-center gap-3 text-aqua-light hover:text-white transition-all px-4 py-2 rounded-full hover:bg-white/10"
          >
              <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              <span className="uppercase tracking-widest text-xs font-bold">Return to Shop</span>
          </button>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 glass-panel p-6 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_100px_rgba(0,165,207,0.1)]">
             {/* Decorative sheen */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-aqua-glow/5 to-transparent pointer-events-none"></div>

            {/* Image Section */}
            <div className="relative group order-2 md:order-1">
                <div className="absolute inset-0 bg-aqua-glow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl relative z-10 shadow-2xl border border-white/10"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <p className="text-xs text-aqua-glow uppercase tracking-widest">Purity Level</p>
                    <p className="text-white font-bold">100.0001%</p>
                </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center relative z-10 order-1 md:order-2">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">{product.name}</h1>
                <p className="text-lg md:text-xl text-aqua-glow italic mb-8 border-l-4 border-aqua-light pl-4 opacity-90">
                    {product.tagline}
                </p>

                <div className="space-y-6 mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2">The Legend</h3>
                    <p className="text-gray-200 leading-relaxed text-lg font-light">
                        {product.longDescription || "This water is so mysterious, describing it would cause the text to evaporate."}
                    </p>
                </div>

                <div className="space-y-4 mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2">Molecular Benefits</h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {product.features.map((feat, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                                <div className="w-1.5 h-1.5 bg-aqua-glow rounded-full mr-3 shadow-[0_0_10px_#9fffcb]"></div>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Purchase Section */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-auto">
                    <div className="flex items-end justify-between mb-6">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Mortal Price</p>
                            <p className="text-3xl md:text-4xl font-bold text-white">${product.price.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                             <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Stock</p>
                             <p className="text-white font-mono">Only 2 drops left</p>
                        </div>
                    </div>

                    {paymentStatus === 'idle' && (
                        <button 
                            onClick={handlePay}
                            className="w-full bg-aqua-light hover:bg-aqua-glow text-black font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,165,207,0.2)] hover:shadow-[0_0_40px_rgba(159,255,203,0.4)] text-lg uppercase tracking-widest hover:scale-[1.02] active:scale-95"
                        >
                            Initiate Transaction
                        </button>
                    )}

                    {paymentStatus === 'processing' && (
                        <button disabled className="w-full bg-aqua-deep border border-aqua-light/30 text-white font-bold py-4 rounded-xl cursor-wait flex items-center justify-center gap-3">
                            <svg className="animate-spin h-5 w-5 text-aqua-glow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Liquidating Assets...
                        </button>
                    )}

                    {paymentStatus === 'rejected' && (
                        <div className="w-full bg-red-900/30 border border-red-500/50 text-red-200 p-4 rounded-xl text-center animate-pulse">
                            <p className="font-bold mb-1">TRANSACTION DECLINED</p>
                            <p className="text-sm">Reason: "Aura Credit Score too low. Have you tried being richer?"</p>
                            <button 
                                onClick={() => setPaymentStatus('idle')}
                                className="mt-2 text-xs underline hover:text-white"
                            >
                                Try Again (Harder)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Bottom Exit Button */}
        <div className="mt-12 text-center pb-12">
            <button 
                onClick={onBack}
                className="text-gray-500 hover:text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all uppercase tracking-widest text-xs font-bold border border-transparent hover:border-white/20"
            >
                Close and Continue Browsing
            </button>
        </div>
      </div>
    </div>
  );
};