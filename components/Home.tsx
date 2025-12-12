import React, { useEffect, useState } from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { ProductCard } from './ProductCard';
import { Oracle } from './Oracle';
import { Product, ViewState } from '../types';
import { generateAbsurdTestimonial } from '../services/geminiService';

interface HomeProps {
  products: Product[];
  onNavigate: (view: ViewState) => void;
  onViewProduct: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ products, onNavigate, onViewProduct }) => {
  const [testimonial, setTestimonial] = useState<{name: string, location: string, quote: string} | null>(null);

  useEffect(() => {
    generateAbsurdTestimonial().then(setTestimonial);
  }, []);

  return (
    <div className="animate-fadeIn">
      <Hero onNavigate={onNavigate} />
      
      <Features />

      <section className="py-24 px-6 bg-gradient-to-b from-black to-aqua-deep/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4 text-white">The Collection</h2>
            <p className="text-gray-400">Warning: May cause spontaneous enlightenment.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 3).map(p => (
              <ProductCard key={p.id} product={p} onView={onViewProduct} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
                onClick={() => onNavigate('shop')}
                className="text-aqua-glow border-b border-aqua-glow pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm"
            >
                View Full Catalog →
            </button>
          </div>
        </div>
      </section>

      <Oracle />

      {/* Dynamic Testimonial Section */}
      <section className="py-20 px-6 bg-aqua-mid/10 border-y border-white/5">
        <div className="container mx-auto text-center max-w-3xl">
          <svg className="w-12 h-12 text-aqua-glow mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699V12.9996L14.017 7.99955V5.99955L9.01699 10.9996L5.01699 10.9996V21H14.017ZM21.017 21V10.9996H17.017L12.017 5.99955L12.017 7.99955L17.017 12.9996V16H14.017C12.9124 16 12.017 16.8954 12.017 18V21H21.017Z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-200 mb-8 leading-relaxed">
            "{testimonial ? testimonial.quote : "Loading the truth..."}"
          </blockquote>
          <div className="text-aqua-light font-bold tracking-widest uppercase text-sm">
            — {testimonial ? testimonial.name : "..."} <span className="text-gray-600">|</span> {testimonial ? testimonial.location : "..."}
          </div>
        </div>
      </section>
    </div>
  );
};