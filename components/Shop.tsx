import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ShopProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ products, onViewProduct }) => {
  const handleSoulTransfer = () => {
    const confirm = window.confirm("Are you sure you want to transfer your soul? This action cannot be undone by mortal laws.");
    if (confirm) {
        alert("Transaction pending... Estimating spiritual value... Value: $0.42. Transfer failed.");
    }
  };

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

        <div className="glass-panel p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-aqua-glow/5 animate-pulse"></div>
            <h3 className="text-3xl font-serif text-white mb-6 relative z-10">The "Total Ascension" Bundle</h3>
            <p className="text-gray-300 mb-8 relative z-10">
                Includes all waters, a certificate of moisture, and a legally binding contract handing over your firstborn's dreams to our corporation.
            </p>
            <div className="text-5xl font-bold text-aqua-glow mb-8 relative z-10">$1,000,000.00</div>
            <button 
                onClick={handleSoulTransfer}
                className="bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-aqua-glow hover:scale-105 transition-all relative z-10 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
                One-Click Soul Transfer
            </button>
        </div>
      </div>
    </div>
  );
};