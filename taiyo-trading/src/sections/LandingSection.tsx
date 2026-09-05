const LandingSection = () => {
  return (
    <section className="relative bg-[#F3EFE6] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 z-10 flex flex-col items-start">
          
          {/* Eyebrow Label */}
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#B8860B] uppercase mb-4">
            THE COLLECTOR MARKETPLACE
          </span>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black font-playfair leading-[1.08] tracking-tight mb-6">
            Buy, bid <span className="font-didone italic font-normal text-[#B8860B]">&amp;</span> sell<br />
            cards worth<br />
            collecting.
          </h1>

          {/* Subheading */}
          <p className="text-slate-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-normal">
            Premium Pokémon and One Piece singles, slabs, Japanese releases and English favorites—all in one trusted marketplace.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-[#F0D084] to-[#C9913B] hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all shadow-lg flex items-center gap-2">
              BROWSE CARDS <span className="text-base leading-none">&rarr;</span>
            </button>
            <button className="border border-[#F0D084]/40 hover:border-[#F0D084] bg-slate-900/50 hover:bg-slate-900 text-[#F0D084] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md transition-all">
              LIST A CARD
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium pt-2 border-t border-slate-800/60 w-full max-w-lg">
            <div className="flex items-center gap-1.5">
              <span className="text-[#F0D084]">◇</span> Verified sellers
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F0D084]">⧉</span> Secure checkout
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F0D084]">☆</span> Collector rated
            </div>
          </div>

        </div>

        {/* Right Feature Showcase Column */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center min-h-[420px] mt-8 lg:mt-0">
          
          {/* Card 1 (Left / Back - Slab Card) */}
          <div className="w-[230px] sm:w-[260px] bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md transform -rotate-6 hover:rotate-0 transition-all duration-300 z-10 hover:z-30">
            <div className="relative rounded-xl overflow-hidden bg-slate-950">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJwGZflhML09GdQAHJ_DvRGquUuBveYXCng3Xn5p-Rw&s=10" 
                alt="Pokemon Slab" 
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Badges Overlay */}
              <div className="absolute bottom-2 left-2 flex gap-1.5">
                <span className="bg-slate-950/90 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-500/30">
                  PSA 10
                </span>
                <span className="bg-slate-950/90 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                  EN
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center px-1 pt-2.5 pb-1">
              <span className="text-sm font-semibold text-slate-200 font-playfair">Pokémon</span>
              <span className="text-xs text-slate-400">From <strong className="text-white">$45</strong></span>
            </div>
          </div>

          {/* Card 2 (Right / Front - Luffy Raw/Full Art) */}
          <div className="w-[230px] sm:w-[260px] bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md transform rotate-6 -ml-16 sm:-ml-20 mt-10 hover:rotate-0 transition-all duration-300 z-20 hover:z-30">
            <div className="relative rounded-xl overflow-hidden bg-slate-950">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXS0UYjUOXbiOaeI0bgLTpkeB01Q2EXTTiLRjpPJzng&s" 
                alt="One Piece Card" 
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Badges Overlay */}
              <div className="absolute bottom-2 left-2 flex gap-1.5">
                <span className="bg-slate-950/90 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                  JP
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center px-1 pt-2.5 pb-1">
              <span className="text-sm font-semibold text-slate-200 font-playfair">One Piece</span>
              <span className="text-xs text-slate-400">From <strong className="text-white">$88</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default LandingSection;