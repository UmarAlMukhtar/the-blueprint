"use client";
import { Github, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-16 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              READY TO <br /> <span className="text-accent italic">EVOLVE?</span>
            </h2>
            <a 
              href="mailto:umar1868807@gmail.com" 
              className="group inline-flex items-center gap-2 text-xl font-mono hover:text-accent transition-colors"
            >
              LET&apos;S TALK <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-8">
              <a href="https://github.com/UmarAlMukhtar" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://linkedin.com/in/umaralmukhtaribrahimkutty" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" /></a>
                <a href="https://instagram.com/umaralmukhtar_" target="_blank" rel="noopener noreferrer"><Instagram className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" /></a>
              <a href="https://x.com/UmarAlMukhtar_" target="_blank" rel="noopener noreferrer"><Twitter className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" /></a>
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-12 md:mt-0 text-[10px] font-mono tracking-widest text-gray-500 hover:text-white uppercase"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <a href="https://github.com/UmarAlMukhtar" target="_blank" rel="noopener noreferrer"><p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © 2026 UMAR — ALL RIGHTS RESERVED
          </p></a>
          <div className="flex gap-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            <a href="https://github.com/UmarAlMukhtar/the-blueprint" target="_blank" rel="noopener noreferrer"><span className="hover:text-white cursor-pointer transition-colors">Privacy</span></a>  
            <a href="https://github.com/UmarAlMukhtar/the-blueprint" target="_blank" rel="noopener noreferrer"><span className="hover:text-white cursor-pointer transition-colors">Archive</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}