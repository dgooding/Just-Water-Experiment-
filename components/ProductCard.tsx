import React from 'react';
import { Product } from '../types';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  
  const handleAcquire = () => {
    const responses = [
      "Access Denied: Your vibes are too low frequency.",
      "Added to cart. Warning: This item weighs 400 tons spiritually.",
      "Error 418: I'm a teapot, and this water is too pure for me.",
      "Insufficient funds. Have you tried manifesting more money?",
      "Item reserved. Please prepare a blood sacrifice for shipping."
    ];
    alert(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(159,255,203,0.2)] group">
      <div className="relative h-64 mb-6 overflow-hidden rounded-xl bg-black/20">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-serif text-white">{product.name}</h3>
          <p className="text-aqua-glow text-sm">{product.tagline}</p>
        </div>
      </div>
      
      <div className="flex-1 space-y-4">
        <ul className="space-y-2">
          {product.features.map((feat, i) => (
            <li key={i} className="flex items-start text-sm text-gray-300">
              <span className="mr-2 text-aqua-light">✦</span>
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-aqua-light/20 flex items-center justify-between">
        <span className="text-2xl font-bold text-white">${product.price.toLocaleString()}</span>
        <button 
          onClick={handleAcquire}
          className="px-4 py-2 bg-transparent border border-aqua-glow text-aqua-glow rounded hover:bg-aqua-glow hover:text-black transition-colors font-semibold uppercase text-xs tracking-widest"
        >
          Acquire
        </button>
      </div>
    </div>
  );
};