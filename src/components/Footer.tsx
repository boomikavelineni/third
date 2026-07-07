import React from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export function FilmStrip() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-t border-[#332b27]/20 bg-[#14110f]">
      <div className="flex items-center justify-between px-2 gap-1 md:gap-2">
        {Array.from({ length: 60 }).map((_, index) => (
          <div
            key={index}
            className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#E8A2A2] shadow-[0_0_8px_rgba(232,162,162,0.85)] animate-pulse shrink-0"
            style={{
              animationDelay: `${index * 0.05}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-[#14110f]">
      <FilmStrip />
      
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E8A2A2] text-center md:text-left order-2 md:order-1">
            © 2026 BOOMIKA VELINENI
          </p>
          
          <div className="flex items-center gap-6 order-1 md:order-2">
            <a
              href="mailto:boomikavelineni@gmail.com"
              className="text-[#E8A2A2] transition-colors hover:text-[#FAF9F5]"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/boomika-velineni/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8A2A2] transition-colors hover:text-[#FAF9F5]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/boomikavelineni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8A2A2] transition-colors hover:text-[#FAF9F5]"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/boomikavelineni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8A2A2] transition-colors hover:text-[#FAF9F5]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
