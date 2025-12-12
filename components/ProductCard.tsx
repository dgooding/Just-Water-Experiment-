import React, { useRef, useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onView }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (inverted for natural tilt feel)
    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onView(product)}
        className="group relative h-full cursor-pointer perspective-1000"
        style={{ perspective: '1000px' }}
    >
        <div 
            className="glass-panel rounded-2xl p-6 flex flex-col h-full transition-transform duration-100 ease-out"
            style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Holographic Glare Effect */}
            <div 
                className="absolute inset-0 rounded-2xl pointer-events-none z-50 mix-blend-overlay transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                    opacity: glare.opacity
                }}
            />

            <div className="relative h-64 mb-6 overflow-hidden rounded-xl bg-black/20 transform-style-3d translate-z-10" style={{ transform: 'translateZ(20px)' }}>
                <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-serif text-white drop-shadow-lg">{product.name}</h3>
                <p className="text-aqua-glow text-sm drop-shadow-md">{product.tagline}</p>
                </div>
            </div>
            
            <div className="flex-1 space-y-4" style={{ transform: 'translateZ(10px)' }}>
                <ul className="space-y-2">
                {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="mr-2 text-aqua-light">✦</span>
                    {feat}
                    </li>
                ))}
                </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-aqua-light/20 flex items-center justify-between" style={{ transform: 'translateZ(10px)' }}>
                <span className="text-2xl font-bold text-white">${product.price.toLocaleString()}</span>
                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onView(product);
                }}
                className="px-4 py-2 bg-transparent border border-aqua-glow text-aqua-glow rounded hover:bg-aqua-glow hover:text-black transition-colors font-semibold uppercase text-xs tracking-widest"
                >
                Acquire
                </button>
            </div>
        </div>
    </div>
  );
};