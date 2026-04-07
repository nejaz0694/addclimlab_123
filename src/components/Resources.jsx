import { labData } from '../data/labData';

export default function Resources() {
  return (
    <section id="resources" className="py-32 lg:py-48 relative overflow-hidden bg-slate-50/50 dark:bg-dark-900/50 transition-colors duration-500">
      <div className="section-container relative">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-black uppercase tracking-[.2em] mb-6">Open Source</span>
          <h2 className="section-title">Computational <span className="gradient-text">Resources</span></h2>
          <p className="section-subtitle mx-auto mt-6">Automated workflows and script repositories for scientific reproducibility.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {labData.resources.map((cat) => (
            <div key={cat.id} className="premium-glass overflow-hidden flex flex-col">
              <div className="p-10 border-b border-slate-200 dark:border-white/[0.05] bg-white/[0.2] dark:bg-white/[0.02]">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">{cat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-500 mt-2 font-medium">{cat.description}</p>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-white/[0.05] bg-white/[0.1] dark:bg-transparent">
                {cat.resources.map((res) => (
                  <div key={res.name} className="flex items-center gap-6 p-8 hover:bg-white/40 dark:hover:bg-white/[0.03] transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-[10px] font-black text-slate-400 dark:text-gray-500 group-hover:text-hydro-500 transition-colors">{res.format.toUpperCase()}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-black text-slate-800 dark:text-white group-hover:text-hydro-500 transition-colors uppercase tracking-tight">{res.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-gray-500 mt-1 font-medium">{res.desc || "Standard script implementation."}</p>
                    </div>
                    <div className="hidden sm:flex flex-col items-end gap-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{res.size}</span>
                      <button className="text-[10px] font-black text-hydro-500 uppercase tracking-[0.2em] hover:text-hydro-400 transition-colors">Download</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
