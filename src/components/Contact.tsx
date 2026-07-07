import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram, FileText, Maximize2, X } from 'lucide-react';
import { DATABASE } from '../data/database';

export function Contact() {
  const [expandedPdf, setExpandedPdf] = useState<'resume' | 'film' | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 animate-in fade-in slide-in-from-bottom-5 duration-500">
      {/* Biography and PDF attachments at the top of the contact page */}
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Biography */}
        <div className="lg:col-span-8 font-sans text-sm md:text-base leading-relaxed text-white space-y-6">
          <p className="relative">
            <span 
              className="mr-2 block md:inline font-sans font-black leading-none uppercase tracking-tight text-4xl md:text-5xl md:mb-0 mb-2"
            >
              <span className="text-[#E8A2A2]">BOOMIKA</span> <span className="text-[#E8A2A2]">VELINENI</span>
            </span>
            is a recent graduate from UC Santa Barbara with her B.A. in Communication, currently seeking opportunities in public relations, film production and distribution, and media outreach.
          </p>

          <p>
            Her experience spans public relations, film production, and marketing, with roles at the Santa Barbara International Film Festival, the Asian American International Film Festival, and AlygnAI. Across these experiences, she has supported filmmakers and industry professionals, contributed to festival operations, and developed marketing and sales materials for business partners.
          </p>

          <p>
            Outside of her internships, <span className="text-[#E8A2A2] font-bold">BOOMIKA</span> has worked on multiple student film productions in roles including producer, assistant director, and script supervisor. Witnessing the filmmaking process from development through production has deepened her appreciation for the creativity and craftsmanship behind every film while reinforcing her ambition to build a career in the entertainment industry.
          </p>

          {/* Social Channels */}
          <div className="pt-6 border-t border-border/10">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-4 font-mono">
              Social Channels
            </h3>
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/boomika-velineni/", icon: Linkedin, tint: "bg-[#D5E3E8]/80 hover:bg-[#D5E3E8]" },
                { label: "Twitter", href: "https://twitter.com/boomikavelineni", icon: Twitter, tint: "bg-[#EAE0DA]/80 hover:bg-[#EAE0DA]" },
                { label: "Instagram", href: "https://www.instagram.com/boomikavelineni", icon: Instagram, tint: "bg-[#EAC7C7]/80 hover:bg-[#EAC7C7]" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all hover:-translate-y-0.5 border border-black/5 shadow-xs ${social.tint}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4.5 w-4.5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: PDF Attachments */}
        <div className="lg:col-span-4 space-y-6">
          {/* Resume Section */}
          <div className="rounded-2xl bg-card p-5 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-border/20 pb-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <FileText className="h-3.5 w-3.5 text-[#E8A2A2]" />
                Resume
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setExpandedPdf('resume')}
                  className="flex items-center gap-1 text-xs font-mono text-[#E8A2A2] hover:underline hover:text-[#E8A2A2]/80 transition-colors"
                  aria-label="Expand Resume PDF"
                >
                  <Maximize2 className="h-3 w-3" />
                  Expand
                </button>
                <span className="text-border/20 text-[10px] font-mono">|</span>
                <a
                  href="/resume.pdf"
                  download
                  className="text-xs font-mono text-[#E8A2A2] hover:underline hover:text-[#E8A2A2]/80 transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="w-full h-[260px] overflow-hidden rounded-xl border border-border/10 bg-black/20">
              <iframe
                src="/resume.pdf#toolbar=0"
                className="w-full h-full"
                title="Boomika Velineni - Resume"
              />
            </div>
          </div>

          {/* Film Experience Section */}
          <div className="rounded-2xl bg-card p-5 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-border/20 pb-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <FileText className="h-3.5 w-3.5 text-[#E8A2A2]" />
                Film Experience
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setExpandedPdf('film')}
                  className="flex items-center gap-1 text-xs font-mono text-[#E8A2A2] hover:underline hover:text-[#E8A2A2]/80 transition-colors"
                  aria-label="Expand Film Experience PDF"
                >
                  <Maximize2 className="h-3 w-3" />
                  Expand
                </button>
                <span className="text-border/20 text-[10px] font-mono">|</span>
                <a
                  href="/film-experience.pdf"
                  download
                  className="text-xs font-mono text-[#E8A2A2] hover:underline hover:text-[#E8A2A2]/80 transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="w-full h-[260px] overflow-hidden rounded-xl border border-border/10 bg-black/20">
              <iframe
                src="/film-experience.pdf#toolbar=0"
                className="w-full h-full"
                title="Boomika Velineni - Film Experience"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PDF Expanded Overlay Modal */}
      {expandedPdf && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setExpandedPdf(null)}
        >
          <div 
            className="relative bg-[#181513] border border-border/20 w-full max-w-5xl h-[85vh] md:h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/20 bg-card">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#E8A2A2]" />
                <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                  {expandedPdf === 'resume' ? 'Resume' : 'Film Experience'}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={expandedPdf === 'resume' ? '/resume.pdf' : '/film-experience.pdf'}
                  download
                  className="text-xs font-mono text-[#E8A2A2] hover:underline hover:text-[#E8A2A2]/80 transition-colors"
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setExpandedPdf(null)}
                  className="rounded-lg p-1.5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close expanded viewer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Iframe */}
            <div className="flex-1 w-full bg-[#181513]">
              <iframe
                src={expandedPdf === 'resume' ? '/resume.pdf' : '/film-experience.pdf'}
                className="w-full h-full border-0"
                title={expandedPdf === 'resume' ? 'Boomika Velineni - Resume' : 'Boomika Velineni - Film Experience'}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
