import { labData } from '../data/labData';

export default function Consultancy() {
  const { consultancy } = labData;
  if (!consultancy) return null;

  return (
    <section id="consultancy" className="py-32 lg:py-48 relative overflow-hidden bg-slate-50 dark:bg-dark-900/50 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hydro-500/5 dark:bg-hydro-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-black uppercase tracking-[.2em] mb-6">Expert Solutions</span>
          <h2 className="section-title">{consultancy.title}</h2>
          <p className="section-subtitle mx-auto mt-6">{consultancy.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {consultancy.services.map((service, idx) => (
            <div 
              key={service.id} 
              className="premium-glass-hover p-12 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-teal-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 font-medium leading-relaxed mb-8">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="glass-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="premium-glass p-12 lg:p-16 bg-gradient-to-br from-hydro-600/5 to-teal-500/5 border-hydro-500/20 max-w-4xl mx-auto">
             <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Need a customized technical solution?</h3>
             <p className="text-slate-600 dark:text-gray-400 font-medium text-lg mb-10">Our team offers high-end modelling and analysis services for government agencies, NGOs, and private partners globally.</p>
             <a href="#contact" className="btn-primary px-12 py-5 text-lg">Inquire for Consultancy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
