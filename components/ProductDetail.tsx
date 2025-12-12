import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'rejected'>('idle');

  const handlePay = () => {
    setPaymentStatus('processing');
    
    // Fake processing delay
    setTimeout(() => {
        setPaymentStatus('rejected');
    }, 2500);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen animate-fadeIn relative">
      <div className="container mx-auto max-w-6xl">
        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
            <button 
                onClick={onBack}
                className="text-aqua-light hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-xs font-bold"
            >
                ← Return to Reality
            </button>

            <button 
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="Close"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
             {/* Decorative sheen */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-aqua-glow/5 to-transparent pointer-events-none"></div>

            {/* Image Section */}
            <div className="relative group">
                <div className="absolute inset-0 bg-aqua-glow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-[500px] object-cover rounded-xl relative z-10 shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <p className="text-xs text-aqua-glow uppercase tracking-widest">Purity Level</p>
                    <p className="text-white font-bold">100.0001%</p>
                </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">{product.name}</h1>
                <p className="text-xl text-aqua-glow italic mb-8 border-l-4 border-aqua-light pl-4">
                    {product.tagline}
                </p>

                <div className="space-y-6 mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">The Legend</h3>
                    <p className="text-gray-200 leading-relaxed text-lg">
                        {product.longDescription || "This water is so mysterious, describing it would cause the text to evaporate."}
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Molecular Benefits</h3>
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
                <div className="border-t border-white/10 pt-8 mt-auto">
                    <div className="flex items-end justify-between mb-6">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Mortal Price</p>
                            <p className="text-4xl font-bold text-white">${product.price.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                             <p className="text-xs text-red-400 uppercase tracking-widest mb-1">Stock</p>
                             <p className="text-white">Only 2 drops left</p>
                        </div>
                    </div>

                    {paymentStatus === 'idle' && (
                        <button 
                            onClick={handlePay}
                            className="w-full bg-aqua-light hover:bg-aqua-glow text-black font-bold py-5 rounded-xl transition-all shadow-[0_0_30px_rgba(0,165,207,0.3)] hover:shadow-[0_0_50px_rgba(159,255,203,0.5)] text-lg uppercase tracking-widest"
                        >
                            Initiate Transaction
                        </button>
                    )}

                    {paymentStatus === 'processing' && (
                        <button disabled className="w-full bg-aqua-deep border border-aqua-light/30 text-white font-bold py-5 rounded-xl cursor-wait flex items-center justify-center gap-3">
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
                            <p className="text-sm">Reason: "Buyer's soul is too dry."</p>
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
      </div>
    </div>
  );
};