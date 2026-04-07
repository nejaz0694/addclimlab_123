import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function BlogModal({ post, isOpen, onClose }) {
  if (!post) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 transition-all duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-2xl animate-fade-in" 
        onClick={onClose} 
      />

      <div className={`relative w-full max-w-3xl bg-white dark:bg-dark-950 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-20 scale-95'}`}>
        {/* Header Header */}
        <div className={`h-40 ${post.color} relative overflow-hidden flex items-end p-10`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white tracking-tighter mb-2">{post.title}</h2>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{post.date}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-10 lg:p-16 overflow-y-auto max-h-[60vh] custom-scrollbar">
          <div className="prose prose-slate dark:prose-invert prose-img:rounded-2xl prose-img:shadow-xl prose-pre:bg-slate-900 prose-pre:rounded-xl max-w-none text-lg">
             <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/5 flex items-center gap-6">
             <button onClick={onClose} className="btn-primary py-4 px-10 text-xs">Close Article</button>
             <button className="btn-secondary py-4 px-10 text-xs">Share Insights</button>
          </div>
        </div>
      </div>
    </div>
  );
}
