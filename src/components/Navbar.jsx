import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Consultancy', href: '#consultancy' },
    { name: 'Courses', href: '#courses' },
    { name: 'Resources', href: '#resources' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'py-4 bg-white/70 dark:bg-dark-950/70 backdrop-blur-3xl border-b border-slate-200 dark:border-white/[0.05] shadow-2xl' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="section-container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-[1.2rem] bg-gradient-to-br from-hydro-600 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.613.282a6 6 0 01-3.998.549l-2.631-.526a2 2 0 00-1.32.221m0 0a2 2 0 00-.72 1.404v3.541a2 2 0 00.83 1.642L11 22l6.17-2.645A2 2 0 0018 17.712v-3.541a2 2 0 00-.572-1.414z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-5.414.586l1.414 1.414m10 0l1.414-1.414M10 21V5a2 2 0 012-2h0a2 2 0 012 2v16" /></svg>
          </div>
          <div>
            <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter block leading-none">HydroLab</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-hydro-600 dark:text-hydro-400 block mt-1">Research Group</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-gray-500 hover:text-hydro-600 dark:hover:text-white transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-hydro-500 rounded-full group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-white/[0.08]" />

          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/[0.1] transition-all group"
            >
              {theme === 'dark' 
                ? <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                : <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              }
            </button>
            <a href="#contact" className="btn-primary py-3.5 px-7 text-xs">Collaborate</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-slate-900 dark:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-950/95 backdrop-blur-3xl border-b border-slate-200 dark:border-white/[0.05] p-10 animate-fade-in">
           <div className="flex flex-col gap-6 items-center">
             {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-black uppercase tracking-widest text-slate-500 dark:text-gray-400 hover:text-hydro-500 transition-colors">{link.name}</a>
             ))}
             <button onClick={toggleTheme} className="text-xs font-black uppercase tracking-widest text-hydro-600 mt-4">Toggle Theme</button>
           </div>
        </div>
      )}
    </nav>
  );
}
