import { labData } from '../data/labData';

export default function Courses() {
  return (
    <section id="courses" className="py-32 lg:py-48 relative overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-500">
      <div className="section-container relative">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-[.2em] mb-6">Pro-Education</span>
          <h2 className="section-title">Specialized <span className="gradient-text">Academic</span> Training</h2>
          <p className="section-subtitle mx-auto mt-6">Empowering the next generation of researchers with technical certification programs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {labData.courses.map((course, idx) => (
            <div key={course.id} className="premium-glass-hover p-12 flex flex-col group" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-start gap-8 mb-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-hydro-500/10 to-teal-500/10 dark:from-hydro-500/20 dark:to-teal-500/20 border border-hydro-500/10 flex items-center justify-center text-hydro-600 dark:text-hydro-400 shrink-0 group-hover:scale-110 transition-transform duration-700">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">{course.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      course.level === 'Advanced' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20' :
                      course.level === 'Beginner' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' :
                      'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                    }`}>{course.level}</span>
                    <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em]">{course.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-10 flex-grow font-medium">{course.description}</p>

              <div className="flex flex-wrap gap-2 mb-12">
                {course.topics.map(topic => (
                  <span key={topic} className="glass-tag">{topic}</span>
                ))}
              </div>

              <button className="btn-primary w-full justify-center group-hover:shadow-[0_20px_50px_-10px_rgba(18,120,245,0.7)] transition-shadow">Register Interest</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
