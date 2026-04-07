import { labData } from '../data/labData';

export default function Hero() {
  const { hero } = labData;
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg-v2.png"
          alt="Atmospheric Glacial Landscape"
          className="w-full h-full object-cover scale-105 animate-float-delayed"
        />
        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 dark:from-dark-950/80 via-transparent to-slate-50 dark:to-dark-950 transition-colors duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 dark:from-dark-950/40 via-transparent to-slate-900/20 dark:to-dark-950/40" />
        <div className="vignette-overlay" />
      </div>

      <div className="relative section-container text-center z-10 pt-20 pb-32">
        <div className="animate-fade-in-down mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/40 dark:bg-white/[0.05] backdrop-blur-3xl border border-white/50 dark:border-white/[0.1] text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white shadow-2xl">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]" />
            Global Research Excellence
          </span>
        </div>

        <div className="relative inline-block mb-10 p-6 rounded-[3rem] bg-white/10 dark:bg-transparent backdrop-blur-sm lg:backdrop-blur-0">
           {/* Animated blobs behind title for depth */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-900/10 dark:bg-transparent rounded-[3rem] blur-3xl lg:hidden" />
           
           <h1 className="animate-fade-in-up hero-title mb-8 max-w-6xl mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
             {hero.title.split(' ').map((word, i) => (
               ['Hydrology', '&', 'Climate'].includes(word) ? <span key={i} className="gradient-text">{word} </span> : word + ' '
             ))}
           </h1>
        </div>

        <div className="max-w-4xl mx-auto mb-14 relative group">
          <div className="absolute -inset-4 bg-slate-900/5 dark:bg-black/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
          <p className="relative animate-fade-in-up text-xl sm:text-2xl text-slate-900 dark:text-white font-bold leading-relaxed transition-colors drop-shadow-[0_2px_8px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_15px_rgba(0,0,0,1)] px-6 py-2" style={{ animationDelay: '0.2s' }}>
            {hero.subtitle}
          </p>
        </div>

        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-6"
          style={{ animationDelay: '0.4s' }}
        >
          <a href="#research" className="btn-primary bg-gradient-to-r from-[#1e40af] to-[#2996ff] hover:shadow-[0_0_30px_rgba(30,64,175,0.4)]">Explore Research</a>
          <a href="#courses" className="btn-secondary">Our Courses</a>
        </div>

        <div
          className="animate-fade-in-up mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4"
          style={{ animationDelay: '0.6s' }}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="premium-glass bg-white/70 dark:bg-black/50 px-8 py-8 group hover:translate-y-[-8px] transition-all duration-500 border-white/60 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2 relative z-10">{stat.value}</div>
              <div className="text-[14px] font-black uppercase tracking-[0.25em] text-slate-900 dark:text-white/80 group-hover:text-[#1e40af] dark:group-hover:text-hydro-400 transition-colors relative z-10">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-hydro-500 rounded-full" />
         </div>
      </div>
    </section>
  );
}
