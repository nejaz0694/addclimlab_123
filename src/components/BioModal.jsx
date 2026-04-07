export default function BioModal({ member, isOpen, onClose }) {
  if (!member) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Subtle Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl animate-fade-in" 
        onClick={onClose} 
      />

      <div className={`relative w-full max-w-4xl bg-slate-50 dark:bg-dark-900/90 rounded-[2rem] border border-white/40 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-20 scale-95'}`}>
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-200/50 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white hover:rotate-90 transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="grid md:grid-cols-5 h-full">
          {/* Left Side: Avatar & Basic Info */}
          <div className={`md:col-span-2 p-12 bg-gradient-to-br ${member.color} flex flex-col items-center justify-center text-center text-white relative`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-32 h-32 rounded-[2.5rem] bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center overflow-hidden shadow-2xl animate-float">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl font-black">{member.avatar}</span>
                )}
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-2 leading-tight">{member.name}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">{member.role}</p>
            </div>
          </div>

          {/* Right Side: Bio & Details */}
          <div className="md:col-span-3 p-12 lg:p-16 overflow-y-auto max-h-[80vh] custom-scrollbar">
            <div className="mb-10">
              <span className="glass-tag mb-4 inline-block">Professional Bio</span>
              <p className="text-lg font-medium text-slate-700 dark:text-gray-200 leading-relaxed italic mb-8">
                &ldquo;{member.bio}&rdquo;
              </p>
              
              <div className="premium-glass p-6 bg-hydro-500/5 border-hydro-500/10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-hydro-600 dark:text-hydro-400 mb-2">Primary Affiliation</h4>
                <p className="text-sm font-bold text-slate-800 dark:text-white leading-relaxed">{member.affiliation || 'Department of Hydrology Research'}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-hydro-600 dark:text-hydro-400 mb-4">Research Specialization</h4>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">{member.focus || 'Hydrological & Climate Modelling'}</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-hydro-600 dark:text-hydro-400 mb-4">Scientific Network</h4>
                 <div className="flex gap-3">
                   {member.links?.orcid && (
                     <a href={member.links.orcid} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 flex items-center justify-center text-[10px] font-black text-orange-600 hover:bg-orange-100 transition-colors" title="ORCID Profile">ID</a>
                   )}
                   {member.links?.scholar && (
                     <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-[10px] font-black text-slate-400 hover:text-hydro-500 transition-colors" title="Google Scholar">GS</a>
                   )}
                   {member.links?.github && (
                     <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-[10px] font-black text-slate-400 hover:text-hydro-500 transition-colors" title="GitHub">GH</a>
                   )}
                   {member.links?.profile && (
                     <a href={member.links.profile} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-[10px] font-black text-slate-400 hover:text-hydro-500 transition-colors" title="University Profile">PRO</a>
                   )}
                 </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/5 flex items-center justify-between gap-6">
               <a href={member.cv || '#'} className="btn-primary py-3.5 px-7 text-xs flex-1 justify-center">Download Full CV</a>
               <a href={`mailto:${member.email}`} className="btn-secondary py-3.5 px-7 text-xs flex-1 justify-center">Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
