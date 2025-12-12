import React, { useState } from 'react';
import { Home } from './components/Home';
import { Origins } from './components/Origins';
import { Shop } from './components/Shop';
import { Cult } from './components/Cult';
import { ProductDetail } from './components/ProductDetail';
import { Product, ViewState } from './types';

// Extended product list with absurd lore
const products: Product[] = [
  {
    id: 'p1',
    name: 'Essence of Void',
    tagline: 'Filtered through a black hole.',
    price: 4999.99,
    features: ['Removes toxins and sins', '0% Matter, 100% Vibes', 'Bottle is invisible'],
    imageUrl: 'https://picsum.photos/400/600?grayscale&blur=2',
    longDescription: "Harvested from the edge of Event Horizon 7, this water has seen the end of time and found it 'quite dry'. It contains zero protons, zero neutrons, and exactly three grams of pure existential dread. Drinking it will make you forget your middle name and the concept of 'Tuesday'. Perfect for those who wish to cleanse their soul of personality."
  },
  {
    id: 'p2',
    name: 'Tears of Olympus',
    tagline: 'Actual tears of joy from Zeus.',
    price: 12500.00,
    features: ['Grants temporary levitation', 'Tastes like lightning', 'Requires waiver to drink'],
    imageUrl: 'https://picsum.photos/401/600?grayscale',
    longDescription: "We sent an intern to Mount Olympus with a bucket and a really good joke. Zeus laughed so hard he cried. We bottled it. This liquid is electrically charged and may cause your hair to stand up permanently. Warning: Do not consume if you are currently smiting your enemies, as it may cause double-smiting."
  },
  {
    id: 'p3',
    name: 'Primordial Soup',
    tagline: 'The goo that started it all.',
    price: 9.99,
    features: ['Contains single-celled organisms', 'Chewy texture', 'Might restart evolution'],
    imageUrl: 'https://picsum.photos/402/600?grayscale&blur=1',
    longDescription: "Before there was life, there was this goo. It's thick, it's warm, and it whispers to your DNA. Drink this and you might grow a vestigial tail or remember how to breathe underwater. It is technically 4 billion years expired, but the flavor profile is 'earthy' with notes of 'creation'."
  },
  {
    id: 'p4',
    name: 'Dehydrated Water',
    tagline: 'Just add water.',
    price: 50.00,
    features: ['Ultra lightweight', 'Perfect for travel', 'It is literally just an empty can'],
    imageUrl: 'https://picsum.photos/403/600?grayscale',
    longDescription: "The ultimate travel companion. We have removed 100% of the moisture from this water, leaving only the pure 'essence' of wetness. To consume, simply open the can and add regular water. You will immediately taste the difference (the difference is placebo). Warning: Choking hazard (because it is air)."
  },
  {
    id: 'p5',
    name: 'Liquid Gold',
    tagline: 'Not metallic. Just expensive.',
    price: 24000.00,
    features: ['Status symbol', 'Heavy water isotope', 'Glows in the dark'],
    imageUrl: 'https://picsum.photos/404/600?grayscale&blur=1',
    longDescription: "This is regular tap water that we played Mozart to for 10 years straight. Then we whispered stock market tips into the bottle. It is chemically identical to tap water, but spiritually, it is in a higher tax bracket. Consuming this will not hydrate you, but it will make you feel better than everyone else."
  },
  {
    id: 'p6',
    name: 'Cloud Juice',
    tagline: 'Milked from a cumulus.',
    price: 299.99,
    features: ['Fluffy mouthfeel', 'May cause raining', 'Ethically sourced'],
    imageUrl: 'https://picsum.photos/405/600?grayscale',
    longDescription: "We employ a team of sky-sherpas to gently squeeze free-range clouds over a bucket. No clouds are harmed in the process, though some are mildly annoyed. The taste is described as 'foggy' and 'high altitude'. Side effects include an uncontrollable urge to float and a fear of wind turbines."
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [returnView, setReturnView] = useState<ViewState>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewProduct = (product: Product, fromView: ViewState) => {
    setSelectedProduct(product);
    setReturnView(fromView);
    setCurrentView('product-detail');
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home products={products} onNavigate={setCurrentView} onViewProduct={(p) => handleViewProduct(p, 'home')} />;
      case 'origins':
        return <Origins />;
      case 'shop':
        return <Shop products={products} onViewProduct={(p) => handleViewProduct(p, 'shop')} />;
      case 'cult':
        return <Cult />;
      case 'product-detail':
        return selectedProduct ? (
            <ProductDetail 
                product={selectedProduct} 
                onBack={() => {
                  setCurrentView(returnView);
                  window.scrollTo(0, 0);
                }} 
            />
        ) : (
            <Shop products={products} onViewProduct={(p) => handleViewProduct(p, 'shop')} />
        );
      default:
        return <Home products={products} onNavigate={setCurrentView} onViewProduct={(p) => handleViewProduct(p, 'home')} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-100 font-sans selection:bg-aqua-glow selection:text-black flex flex-col">
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div 
          className="text-2xl font-serif font-bold text-white tracking-tighter cursor-pointer hover:text-aqua-glow transition-colors"
          onClick={() => setCurrentView('home')}
        >
          HydroSanctus
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
            <button 
              onClick={() => setCurrentView('origins')} 
              className={`hover:text-aqua-glow transition-colors ${currentView === 'origins' ? 'text-aqua-glow' : ''}`}
            >
              Origins
            </button>
            <button 
              onClick={() => setCurrentView('shop')} 
              className={`hover:text-aqua-glow transition-colors ${currentView === 'shop' || currentView === 'product-detail' ? 'text-aqua-glow' : ''}`}
            >
              Shop
            </button>
            <button 
              onClick={() => setCurrentView('cult')} 
              className={`hover:text-aqua-glow transition-colors ${currentView === 'cult' ? 'text-aqua-glow' : ''}`}
            >
              Cult
            </button>
        </div>
        <button 
          onClick={() => setCurrentView('cult')}
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm transition-colors"
        >
            {currentView === 'cult' ? 'Ascending...' : 'Login to Astral Plane'}
        </button>
      </nav>

      <main className="flex-grow relative">
        {renderView()}
      </main>

      <footer className="bg-black py-12 border-t border-white/10 text-center relative z-10">
        <p className="text-aqua-glow font-serif text-2xl mb-4">HydroSanctus</p>
        <p className="text-gray-600 text-xs max-w-lg mx-auto leading-relaxed px-4">
          DISCLAIMER: HydroSanctus is legally classified as "damp air." It does not cure cancer, measles, the plague, or bad personality. 
          If you experience levitation, please consult a geologist. Do not stare directly at the bottle. 
          No gods were harmed in the making of this water. No refunds if you fail to ascend.
        </p>
        <div className="mt-8 text-gray-700 text-[10px]">
            &copy; {new Date().getFullYear()} HydroSanctus Global Conglomerate & Cult. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;