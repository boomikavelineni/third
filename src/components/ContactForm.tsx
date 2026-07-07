import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, X } from 'lucide-react';
import { DATABASE } from '../data/database';

interface ContactFormProps {
  onClose?: () => void;
  title?: string;
}

export function ContactForm({ onClose, title = "SEND MESSAGE" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate contact form submission
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative bg-[#1f1a17] p-8 md:p-10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] border-4 border-[#E8A2A2] rounded-xl text-[#FAF9F5]">
      
      {/* Close button if inside a popup */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer animate-none"
          aria-label="Close form"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* GET IN TOUCH / LET'S CHAT. & COPYABLE EMAIL ADDRESS */}
      <div className="mb-8 space-y-4 pb-6 border-b border-[#2d2420]/60">
        <div className="space-y-1">
          <span className="block text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#E8A2A2] select-none">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-none">
            LET'S <span className="text-[#E8A2A2]">CHAT.</span>
          </h2>
        </div>

        <div className="flex items-center gap-3 w-full max-w-sm">
          <Mail className="h-5 w-5 text-[#E8A2A2] shrink-0" />
          <div className="inline-flex flex-1 items-center bg-[#181513] border border-border/40 rounded-xl px-4 py-2.5 shadow-inner justify-between truncate">
            <span className="font-mono text-xs sm:text-sm text-foreground font-semibold select-all truncate">
              {DATABASE.email}
            </span>
            
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(DATABASE.email);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="ml-4 shrink-0 text-[#E8A2A2] hover:text-[#FAF9F5] transition-colors cursor-pointer flex items-center gap-1.5 bg-transparent border-none"
              title="Copy email address"
            >
              {copied ? (
                <span className="text-[10px] font-bold text-[#8FA89B] font-mono">COPIED</span>
              ) : (
                <svg 
                  className="h-4.5 w-4.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a3 3 0 016 0m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isSent ? (
        <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in-95 duration-300">
          <CheckCircle2 className="h-14 w-14 text-[#8FA89B] mb-4" />
          <h3 className="text-xl font-black uppercase tracking-tight text-foreground">
            Message Sent!
          </h3>
          <p className="mt-3 text-sm text-neutral-300 max-w-xs leading-relaxed">
            Thank you for reaching out. I've received your message and will get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setIsSent(false)} 
            className="mt-6 text-xs font-black uppercase tracking-widest text-[#E8A2A2] hover:text-[#E8A2A2]/80 transition-colors cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="form-name" className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                Your Name
              </label>
              <input 
                required 
                type="text" 
                id="form-name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="w-full rounded-lg border border-border/60 bg-[#181513] px-3.5 py-2.5 text-sm font-medium text-foreground outline-none transition-all focus:border-[#E8A2A2]/60 focus:ring-1 focus:ring-[#E8A2A2]/40" 
                placeholder="Zendaya Coleman" 
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-email" className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                Email Address
              </label>
              <input 
                required 
                type="email" 
                id="form-email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="w-full rounded-lg border border-border/60 bg-[#181513] px-3.5 py-2.5 text-sm font-medium text-foreground outline-none transition-all focus:border-[#E8A2A2]/60 focus:ring-1 focus:ring-[#E8A2A2]/40" 
                placeholder="zendaya@example.com" 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-subject" className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
              Subject
            </label>
            <input 
              required 
              type="text" 
              id="form-subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleInputChange} 
              className="w-full rounded-lg border border-border/60 bg-[#181513] px-3.5 py-2.5 text-sm font-medium text-foreground outline-none transition-all focus:border-[#E8A2A2]/60 focus:ring-1 focus:ring-[#E8A2A2]/40" 
              placeholder="Projects, Collaborations, or a Quick Hello" 
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-message" className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
              Message
            </label>
            <textarea 
              required 
              id="form-message" 
              name="message" 
              rows={4} 
              value={formData.message} 
              onChange={handleInputChange} 
              className="w-full rounded-lg border border-border/60 bg-[#181513] px-3.5 py-2.5 text-sm font-medium text-foreground outline-none transition-all focus:border-[#E8A2A2]/60 focus:ring-1 focus:ring-[#E8A2A2]/40 resize-none" 
              placeholder="Write your message here..." 
            />
          </div>

          <button 
            disabled={isSending} 
            type="submit" 
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF9F5] hover:opacity-90 text-[#1C1815] px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:-translate-y-0.5 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
          >
            {isSending ? "Sending..." : (
              <>
                Send Message
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
