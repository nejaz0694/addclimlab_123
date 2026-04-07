import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 lg:py-48 relative overflow-hidden bg-slate-50/50 dark:bg-dark-900/50 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-hydro-500/[0.03] dark:bg-hydro-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 rounded-xl bg-hydro-500/10 text-hydro-600 dark:text-hydro-400 text-xs font-black uppercase tracking-[.2em] mb-6">Collaboration</span>
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle mx-auto mt-6">Interested in collaboration, graduate studies, or research partnerships?</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="premium-glass p-8 space-y-8">
              {[
                { label: 'Official Email', value: 'hydrolab@research.edu', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'Campus Location', value: 'Department of Hydrology, University Campus', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-hydro-500/10 border border-hydro-500/10 flex items-center justify-center text-hydro-600 dark:text-hydro-400 group-hover:bg-hydro-500/20 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-1">{item.label}</p>
                    <p className="text-sm font-black text-slate-800 dark:text-white leading-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="premium-glass p-8">
               <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-6">Connect With Us</h4>
               <div className="flex gap-4">
                  {['GitHub', 'Twitter', 'LinkedIn', 'Youtube'].map(s => (
                    <a key={s} href="#" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-gray-500 hover:text-hydro-500 hover:bg-hydro-500/10 transition-all text-[10px] font-black tracking-tighter">
                      {s.slice(0, 2).toUpperCase()}
                    </a>
                  ))}
               </div>
            </div>
            
            <div className="premium-glass p-10 bg-gradient-to-br from-hydro-600/10 to-teal-500/10 border-hydro-500/20">
               <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight tracking-tight">Open Research Positions</h4>
               <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 font-medium">We are currently seeking motivated PhD candidates for glacio-hydrological modeling projects.</p>
               <button className="btn-primary w-full justify-center py-4">View Vacancies</button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="premium-glass p-10 lg:p-14 space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 ml-1">Full Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Engr. Nuaman Ejaz" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-hydro-500/50 transition-all font-medium text-sm" required />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 ml-1">Email Address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="nuaman@research.edu" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-hydro-500/50 transition-all font-medium text-sm" required />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 ml-1">Subject</label>
                <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} placeholder="PhD Inquiry" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-hydro-500/50 transition-all font-medium text-sm" required />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 ml-1">Your Message</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={6} placeholder="Tell us about your research background..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.07] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-hydro-500/50 transition-all font-medium text-sm resize-none" required />
              </div>
              <button type="submit" className={`btn-primary w-full justify-center py-5 text-lg font-black tracking-tight ${submitted ? 'bg-emerald-600 shadow-emerald-500/40' : ''}`}>
                {submitted ? 'Message Sent Successfully!' : 'Send Inquiry Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
