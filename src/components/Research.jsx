import { useState } from 'react';
import { labData } from '../data/labData';

export default function Research() {
  const { research } = labData;
  const [activeCategory, setActiveCategory] = useState(research.categories[0].id);

  const filteredProjects = research.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="research" className="py-32 lg:py-48 relative overflow-hidden bg-slate-50/50 dark:bg-dark-900/50 transition-colors duration-500">
      <div className="section-container relative">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-black uppercase tracking-[.2em] mb-6">Our Portfolio</span>
          <h2 className="section-title">Global <span className="gradient-text">Research</span> Initiatives</h2>
          <p className="section-subtitle mx-auto mt-6">
            Pioneering solutions for complex hydrological challenges across the globe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {research.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-hydro-600 to-teal-500 text-white shadow-[0_10px_30px_-10px_rgba(18,120,245,0.5)] scale-105'
                  : 'premium-glass text-slate-500 dark:text-gray-400 hover:text-hydro-500 dark:hover:text-hydro-400'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="premium-glass-hover p-10 flex flex-col" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-hydro-500/10 dark:bg-hydro-500/20 flex items-center justify-center text-3xl border border-hydro-500/10">
                  {research.categories.find(c => c.id === project.category)?.icon}
                </div>
                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  project.status === 'Published' 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">{project.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="glass-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/[0.05]">
                <button className="text-xs font-black uppercase tracking-widest text-hydro-600 dark:text-hydro-400 hover:text-hydro-500 transition-colors">Publication</button>
                <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.05] flex items-center justify-center text-slate-400 dark:text-gray-500 hover:text-hydro-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
