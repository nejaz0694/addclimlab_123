import { useState } from 'react';
import { labData } from '../data/labData';
import BioModal from './BioModal';

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="about" className="py-32 lg:py-48 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-hydro-500/10 dark:bg-hydro-500/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] animate-float-delayed" />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20 lg:mb-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-xl bg-hydro-500/10 text-hydro-600 dark:text-hydro-400 text-xs font-black uppercase tracking-[.2em] mb-6">About the Lab</span>
            <h2 className="section-title">Pushing the Frontiers of <span className="gradient-text">Water & Climate</span> Science</h2>
          </div>
          <p className="section-subtitle lg:mb-4">
             Our mission is to bridge the gap between complex climate models and sustainable water resource management through open-source innovation and professional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: 'Global Impact',
              desc: 'Addressing critical water challenges across transboundary river basins, from the Himalayas to arid coastal regions.',
              icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            },
            {
              title: 'Open Science',
              desc: 'Committed to reproducible research. Our Python & GEE computational frameworks are freely shared with the global community.',
              icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
            },
            {
              title: 'Pro-Education',
              desc: 'Providing specialized technical certification in Hydrological Modelling, Earth Engine, and Hydraulic Analysis.',
              icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
            },
          ].map((item, id) => (
            <div key={id} className="premium-glass-hover p-10">
              <div className="w-16 h-16 rounded-2xl bg-hydro-500/10 dark:bg-hydro-500/20 flex items-center justify-center text-hydro-600 dark:text-hydro-400 mb-8 border border-hydro-500/20">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
             <div className="h-px flex-1 bg-slate-200 dark:bg-white/[0.08]" />
             <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 dark:text-gray-500">Research Faculty & Engineers</h3>
             <div className="h-px flex-1 bg-slate-200 dark:bg-white/[0.08]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {labData.team.map((member, index) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="premium-glass-hover p-8 text-center group appearance-none flex flex-col items-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500 mb-6`}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white text-3xl font-black">{member.avatar}</span>
                  )}
                </div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 leading-tight tracking-tight">{member.name}</h4>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 dark:text-gray-500 mb-6">{member.role}</p>
                
                <div className="mt-auto flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.05] group-hover:border-hydro-500/50 transition-all">
                   <span className="text-[10px] font-black text-hydro-600 dark:text-hydro-400 uppercase tracking-widest">Biography</span>
                   <svg className="w-3 h-3 text-hydro-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                   </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BioModal 
        member={selectedMember} 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  );
}
