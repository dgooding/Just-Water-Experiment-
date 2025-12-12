import React from 'react';

export const Origins: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen relative overflow-hidden animate-fadeIn">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-aqua-light rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The Primal Drip</h1>
          <p className="text-xl text-aqua-glow font-light italic">Before matter, there was moisture.</p>
        </div>

        <div className="space-y-12">
          <div className="glass-panel p-8 md:p-12 rounded-2xl relative">
            <span className="absolute -top-6 -left-6 text-9xl text-aqua-deep opacity-50 font-serif">1</span>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">The Discovery (1402 B.C.)</h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              Our founder, <strong className="text-white">Hieronymus P. Splash</strong>, was meditating in a cave that doesn't exist on any known map. 
              While contemplating the dryness of existence, he licked a stalactite that whispered the secrets of the universe into his taste buds. 
              That single drop contained more data than the entire internet combined. He instantly forgot how to do math but learned how to levitate slightly (about 2mm).
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-2xl relative">
            <span className="absolute -top-6 -right-6 text-9xl text-aqua-deep opacity-50 font-serif">2</span>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 text-right">The Refining Process</h3>
            <p className="text-gray-300 leading-relaxed relative z-10 text-right">
              HydroSanctus is not merely "bottled." It is <em className="text-aqua-glow">interrogated</em>. 
              We filter our water through diamonds, then through a cloud of pure anxiety, and finally through the ghost of a 17th-century poet. 
              This strips the water of its physical insecurities, leaving only confident, alpha-male H2O molecules that dominate your cellular structure.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-2xl relative">
            <span className="absolute -top-6 -left-6 text-9xl text-aqua-deep opacity-50 font-serif">3</span>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">The Prophecy</h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              Ancient texts (which we wrote yesterday) predict a "Great Dehydration." 
              Only those who consume HydroSanctus will retain their liquid form. 
              Non-believers will simply turn into freeze-dried powder to be used as garnish for the cosmic soup. 
              The choice is yours. Ascend, or become dust.
            </p>
          </div>

          <div className="text-center mt-20">
             <div className="inline-block p-6 border border-aqua-glow/30 rounded-xl bg-black/50">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Corporate Motto</p>
                <p className="text-2xl font-serif text-white">"Moisture is the Essence of Wetness."</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};