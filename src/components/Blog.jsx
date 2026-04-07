import { useState } from 'react';
import { labData } from '../data/labData';
import BlogModal from './BlogModal';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <section id="blog" className="py-32 lg:py-48 relative overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-500">
      <div className="section-container relative">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl text-left">
            <span className="inline-block px-4 py-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-[.2em] mb-6">Lab Insights</span>
            <h2 className="section-title">Latest <span className="gradient-text">Scientific</span> Articles</h2>
          </div>
          <button className="btn-secondary">View All Insights</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {labData.blog.map((post, idx) => (
            <article 
              key={post.id} 
              onClick={() => openPost(post)}
              className="premium-glass-hover group overflow-hidden flex flex-col" 
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-[16/10] bg-slate-100 dark:bg-white/[0.05] overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                    <span className="glass-tag bg-white/20 border-white/30 text-white">{post.date}</span>
                 </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 line-clamp-2 tracking-tight group-hover:text-hydro-500 transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/[0.05]">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none flex items-center gap-2 group-hover:text-hydro-500 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-hydro-500" />
                    Read Article
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.05] flex items-center justify-center text-slate-400 dark:text-gray-500 group-hover:text-hydro-500 group-hover:bg-hydro-50 dark:group-hover:bg-hydro-500/10 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPost(null);
        }} 
      />
    </section>
  );
}
