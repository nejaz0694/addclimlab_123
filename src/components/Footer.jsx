export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-hydro-900/40 via-transparent to-transparent opacity-50" />
      
      <div className="section-container relative">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-hydro-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-hydro-500/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.613.282a6 6 0 01-3.998.549l-2.631-.526a2 2 0 00-1.32.221m0 0a2 2 0 00-.72 1.404v3.541a2 2 0 00.83 1.642L11 22l6.17-2.645A2 2 0 0018 17.712v-3.541a2 2 0 00-.572-1.414z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-5.414.586l1.414 1.414m10 0l1.414-1.414M10 21V5a2 2 0 012-2h0a2 2 0 012 2v16" /></svg>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter block leading-none">HydroLab</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-hydro-400 block mt-1">Research Group</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed">
              Advancing global water security through innovative hydrological modeling and climate resilience research. Dedicated to open science and professional excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-hydro-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Research', 'Courses', 'Resources', 'Blog'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-black text-gray-400 hover:text-white transition-colors uppercase tracking-tight">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-hydro-400 mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm font-bold text-gray-400">University Campus</li>
              <li className="text-sm font-bold text-gray-400">hydrolab@research.edu</li>
              <li className="text-sm font-bold text-gray-400">+123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
            &copy; {currentYear} Hydrology Research Lab. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Cookies', 'Terms'].map(link => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-hydro-400 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
