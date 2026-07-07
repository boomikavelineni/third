import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Play, 
  X 
} from "lucide-react";
import { useRouter } from "./Router";

export interface ProjectorSlide {
  id: string;
  projectFile: string;
  projectName: string;
  role: string;
  event: string;
  img: string;
  caption: string;
  path: string;
  label: string;
  color: string;
  name: string;
}

export const slides: ProjectorSlide[] = [
  {
    id: "natalie-neet",
    projectFile: "NATALIE_NEET.mov",
    projectName: "Natalie NEET",
    role: "Assistant Director & Producer",
    event: "SBIFF 2026",
    img: "https://cine-hub-forge.lovable.app/__l5e/assets-v1/f8fe0a9a-95b2-4932-a106-2d24427c9f1f/3a194c1dd22e.jpg",
    caption: "On-set production capture from Natalie NEET (January 2026), capturing the lead performance under tungsten set-lighting. Boomika served as Assistant Director, coordinating scene setups, crew calls, and logs.",
    path: "/multimedia",
    label: "Explore Film Room",
    color: "#EAC7C7",
    name: "Natalie NEET"
  },
  {
    id: "perfectionist-playboy",
    projectFile: "PERF_PLAYBOY.mov",
    projectName: "The Perfectionist & The Playboy",
    role: "Outreach Lead & Stills",
    event: "Independent Release",
    img: "https://cine-hub-forge.lovable.app/__l5e/assets-v1/facd6215-ee07-4db6-a13b-986f0d162df9/ac0d5748567a.jpg",
    caption: "Stills framing from Sam Caruthers' drama piece, The Perfectionist and the Playboy. Boomika curated behind-the-scenes diaries, still photo archives, and targeted public relations campaigns.",
    path: "/multimedia",
    label: "Browse Gallery Room",
    color: "#D5E3E8",
    name: "The Perfectionist & The Playboy"
  },
  {
    id: "the-analog-man",
    projectFile: "ANALOG_MAN.mov",
    projectName: "The Analog Man",
    role: "BTS Cinematographer",
    event: "Student Film Production",
    img: "https://boomika-velineni-604259525472.us-east1.run.app/analog_man_thumbnail.jpg",
    caption: "A title still of Sam Caruthers and Nicolai Oliva's short film, THE ANALOG MAN (June 2025). Photographed to document high-grain aesthetic and nostalgic camera department setups.",
    path: "/multimedia",
    label: "Watch Interactive Reel",
    color: "#EAE0DA",
    name: "The Analog Man"
  },
  {
    id: "hsm-review",
    projectFile: "HSM_CRITIC.pdf",
    projectName: "High School Musical Analysis",
    role: "Critic & Arts Reporter",
    event: "The Wildcat Tribune",
    img: "https://cine-hub-forge.lovable.app/__l5e/assets-v1/09ad98ee-201f-4f8c-a688-308714ef6f0e/50b3565ec1b1.jpg",
    caption: "Capturing local theater cast during the grand finale of High School Musical. Reviewed and edited in Dougherty Valley student newspaper archives as a highlighted arts review.",
    path: "/writing",
    label: "Read Tribune Review",
    color: "#F2E4D8",
    name: "High School Musical Analysis"
  },
  {
    id: "sbiff-operations",
    projectFile: "SBIFF_OPS.log",
    projectName: "Film Festivals & PR",
    role: "PR & Event Operations",
    event: "Santa Barbara Int. Film Festival",
    img: "https://cine-hub-forge.lovable.app/__l5e/assets-v1/57c6564f-8921-4dff-ae4b-7a5132ec866e/7c77f62ac021.jpg",
    caption: "Guest liaison duties and scheduling coordinator at major independent film events, bridging international talent outreach with local community screenings and panel sessions.",
    path: "/about",
    label: "View Professional Bio",
    color: "#E8D8CD",
    name: "Film Festivals & PR"
  }
];

export function Projector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjecting, setIsProjecting] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lampIntensity, setLampIntensity] = useState(1);
  const { navigate } = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setLampIntensity(0.93 + Math.random() * 0.10);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const slideCount = slides.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slideCount);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-visible">
      
      {/* Giant Pink Archival Connection Line / Semi-Circle connecting Reel to left Cards */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Desktop version: centered on the right where the reel is */}
        <svg className="hidden lg:block w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="88%" 
            cy="50%" 
            r="44%" 
            fill="none" 
            stroke="#E8A2A2" 
            strokeWidth="1.5" 
            strokeDasharray="6, 12" 
            className="opacity-25"
          />
          <circle 
            cx="88%" 
            cy="50%" 
            r="52%" 
            fill="none" 
            stroke="#E8A2A2" 
            strokeWidth="1" 
            strokeDasharray="2, 6" 
            className="opacity-20"
          />
          <circle 
            cx="88%" 
            cy="50%" 
            r="48%" 
            fill="none" 
            stroke="#E8A2A2" 
            strokeWidth="2.5" 
            className="opacity-[0.18]"
          />
          <circle 
            cx="88%" 
            cy="50%" 
            r="38%" 
            fill="none" 
            stroke="#E8A2A2" 
            strokeWidth="1" 
            className="opacity-15"
          />
        </svg>

        {/* Mobile/Tablet version: centered in the lower area where the reel is */}
        <svg className="block lg:hidden w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="50%" 
            cy="82%" 
            r="38%" 
            fill="none" 
            stroke="#E8A2A2" 
            strokeWidth="2" 
            strokeDasharray="4, 8" 
            className="opacity-20"
          />
          <circle 
            cx="50%" 
            cy="82%" 
            r="48%" 
            fill="none" 
            stroke="#E8A2A2" 
            strokeWidth="1" 
            className="opacity-15"
          />
        </svg>
      </div>

      {/* Left Column: The Projector Screen (Archive Projector) */}
      <div className="flex flex-col z-20 col-span-1 lg:col-span-9 w-full">
        
        {/* TOP BOX: The sleek card frame */}
        <div className="rounded-[24px] bg-[#110e0c]/90 border border-[#2d2420] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden group">
          
          {/* Aspect ratio frame (3:2 cinema still format) */}
          <div className="aspect-[3/2] w-full relative overflow-hidden bg-neutral-950 rounded-xl border border-[#2d2420]/60">
            
            {/* Projection Vignette Shadows */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]" />

            {/* Film Scratches and flickering filter when projecting */}
            {isProjecting && (
              <>
                <div className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-white/10 opacity-30 z-10 pointer-events-none animate-pulse" />
                <div className="absolute top-0 bottom-0 right-[25%] w-[1.5px] bg-white/5 opacity-20 z-10 pointer-events-none" />
                <div 
                  className="absolute inset-0 bg-yellow-200/5 mix-blend-color-burn pointer-events-none z-10"
                  style={{ opacity: (lampIntensity - 0.9) * 0.4 }}
                />
              </>
            )}

            {/* SCREEN IMAGES (With clean fade transitions) */}
            <AnimatePresence mode="wait">
              {isProjecting ? (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0.1, scale: 1.04 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    filter: `brightness(${1.02 * lampIntensity}) contrast(1.05)`
                  }}
                  exit={{ opacity: 0.1, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img 
                    src={activeSlide.img} 
                    alt={activeSlide.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ) : (
                <motion.div 
                  key="off-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center text-neutral-600 font-mono text-[10px] uppercase tracking-widest gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
                  <span>Projector Standby</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* HOVER OVERLAY SYSTEM (Expand Still and Left/Right Hotspots) */}
            {isProjecting && (
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Left 35% Hotspot (Go backward) */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-black/50 to-transparent flex items-center justify-start pl-4 cursor-pointer text-white/50 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-8 w-8 filter drop-shadow-md" />
                </button>

                {/* Right 35% Hotspot (Go forward) */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-0 top-0 bottom-0 w-[35%] bg-gradient-to-l from-black/50 to-transparent flex items-center justify-end pr-4 cursor-pointer text-white/50 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-8 w-8 filter drop-shadow-md" />
                </button>

                {/* Centered Expand Still Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="pointer-events-auto bg-[#E8A2A2] hover:bg-white text-neutral-950 font-mono font-black text-[9px] uppercase tracking-widest px-3 py-1.5 rounded shadow-lg flex items-center gap-1.5 transform hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <Maximize2 className="h-3 w-3" />
                    Expand Still
                  </button>
                </div>
              </div>
            )}

            {/* Live Feed Pill Overlay (Exactly matching "▶ LIVE FEED" format) */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/95 border border-white/10 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase text-white tracking-widest font-bold shadow-lg pointer-events-none select-none">
              <Play className="h-2.5 w-2.5 fill-[#E8A2A2] text-[#E8A2A2]" />
              <span>LIVE FEED</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BOX: The caption/details block (Separated and structured beautifully) */}
        <div className="mt-6 rounded-[24px] bg-[#110e0c]/65 border border-[#2d2420] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Metadata Grid (PROJECT FILE, ROLE, EVENT) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-[#0e0b0a]/70 border border-[#2d2420]/75 rounded-xl p-4 md:p-5">
            {/* PROJECT FILE */}
            <div className="flex flex-col justify-center sm:border-r border-[#2d2420]/40 sm:pr-4">
              <span className="text-[9px] uppercase text-[#a87c7c] tracking-[0.15em] font-mono block">
                PROJECT FILE
              </span>
              <span className="text-[11px] sm:text-xs text-[#E8A2A2] font-mono truncate mt-1 block font-semibold">
                {activeSlide.projectFile}
              </span>
            </div>

            {/* ROLE */}
            <div className="flex flex-col justify-center sm:border-r border-[#2d2420]/40 sm:px-4">
              <span className="text-[9px] uppercase text-[#a87c7c] tracking-[0.15em] font-mono block">
                ROLE
              </span>
              <span className="text-[11px] sm:text-xs text-white font-mono uppercase truncate mt-1 block font-bold">
                {activeSlide.role}
              </span>
            </div>

            {/* EVENT */}
            <div className="flex flex-col justify-center sm:pl-4">
              <span className="text-[9px] uppercase text-[#a87c7c] tracking-[0.15em] font-mono block">
                EVENT
              </span>
              <span className="text-[11px] sm:text-xs text-[#FAF9F5]/90 font-sans uppercase truncate mt-1 block font-medium">
                {activeSlide.event}
              </span>
            </div>
          </div>

          {/* Dashed Separator */}
          <div className="border-t border-dashed border-[#2d2420]/80 my-6" />

          {/* Caption quote block */}
          <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#FAF9F5]/90 font-mono italic">
            "{activeSlide.caption}"
          </p>

          {/* Footer frame count & non-link 16MM ARCHIVE PROJECTOR label */}
          <div className="mt-6 pt-4 border-t border-[#2d2420]/50 flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#E8A2A2]/40 uppercase tracking-widest">
              * Frame {activeIndex + 1} of {slideCount}
            </span>
            
            <div className="inline-flex items-center gap-1.5 text-[#EAC7C7] font-bold font-mono text-[10px] uppercase tracking-wider select-none">
              <Sparkles className="h-3.5 w-3.5 text-[#E8A2A2] animate-pulse" />
              <span>16MM ARCHIVE PROJECTOR</span>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column: Giant Rotating Mechanical Reel (Same big size as before) */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-visible col-span-1 lg:col-span-3">
        {/* Giant Half-Offscreen Mechanical Reel Container (positioned off-screen to the right) */}
        <div className="absolute -right-[160px] sm:-right-[240px] md:-right-[280px] lg:-right-[320px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] z-0 flex items-center justify-center overflow-visible">
          {/* Blueprint Circular / Radial Background Grid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.08]">
            <svg className="w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="none">
              <circle cx="300" cy="300" r="100" fill="none" stroke="#E8A2A2" strokeWidth="0.5" strokeDasharray="2, 4" />
              <circle cx="300" cy="300" r="220" fill="none" stroke="#E8A2A2" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="280" fill="none" stroke="#E8A2A2" strokeWidth="0.5" strokeDasharray="4, 8" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="#E8A2A2" strokeWidth="0.5" strokeDasharray="3, 6" />
              <line x1="300" y1="0" x2="300" y2="600" stroke="#E8A2A2" strokeWidth="0.5" strokeDasharray="3, 6" />
            </svg>
          </div>

          <svg 
            className="w-full h-full cursor-pointer overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:scale-[1.01] transition-transform duration-300" 
            viewBox="0 0 800 800"
            onClick={handleNext}
            title="Click the mechanical wheel to rotate to the next slide"
          >
            {/* STATIC CHASSIS/MECHANICAL STRUCTURE (Behind the rotating reel) */}
            <g opacity="0.85">
              {/* Curved metal mounting arm */}
              <path 
                d="M 120 150 C 350 200, 350 600, 120 650" 
                fill="none" 
                stroke="#2D2420" 
                strokeWidth="24" 
                strokeLinecap="round" 
              />
              <path 
                d="M 120 150 C 350 200, 350 600, 120 650" 
                fill="none" 
                stroke="#5E3B3B" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
              
              {/* Central heavy spindle bracket */}
              <circle cx="400" cy="400" r="75" fill="#1C1815" stroke="#5E3B3B" strokeWidth="3" />
              <circle cx="400" cy="400" r="45" fill="#2D2420" />
            </g>

            {/* ROTATING MECHANICAL REEL WHEEL */}
            <motion.g
              animate={{ rotate: activeIndex * 60 }}
              transition={{ type: "spring", stiffness: 40, damping: 14 }}
              className="origin-center"
            >
              {/* Outer Rim */}
              <circle cx="400" cy="400" r="380" fill="none" stroke="#2D2420" strokeWidth="12" />
              <circle cx="400" cy="400" r="374" fill="none" stroke="#5E3B3B" strokeWidth="3" />
              
              {/* Inner track representing film coil */}
              <circle cx="400" cy="400" r="260" fill="none" stroke="#1C1815" strokeWidth="120" opacity="0.9" />
              <circle cx="400" cy="400" r="310" fill="none" stroke="#E8A2A2" strokeWidth="1.5" strokeDasharray="8, 12" opacity="0.2" />
              <circle cx="400" cy="400" r="280" fill="none" stroke="#E8A2A2" strokeWidth="1" strokeDasharray="4, 16" opacity="0.15" />
              <circle cx="400" cy="400" r="230" fill="none" stroke="#E8A2A2" strokeWidth="2" strokeDasharray="12, 8" opacity="0.25" />
              <circle cx="400" cy="400" r="210" fill="none" stroke="#8A5A5A" strokeWidth="1" opacity="0.15" />

              {/* Sprocket holes along the outer edge of the film coil */}
              <circle cx="400" cy="400" r="322" fill="none" stroke="#FFD2D2" strokeWidth="4" strokeDasharray="6, 14" opacity="0.18" />

              {/* Structural Spokes */}
              {Array.from({ length: 8 }).map((_, idx) => {
                const angle = (idx * 360) / 8;
                return (
                  <g key={`spoke-${idx}`} transform={`rotate(${angle} 400 400)`}>
                    {/* Heavy wooden/metal main spoke */}
                    <line x1="400" y1="400" x2="400" y2="28" stroke="#5E3B3B" strokeWidth="3.5" opacity="0.85" />
                    {/* Elegant laser-cut accent line inside spoke */}
                    <line x1="400" y1="320" x2="400" y2="50" stroke="#8A5A5A" strokeWidth="1" />
                    
                    {/* Structural holes inside spokes */}
                    <circle cx="400" cy="110" r="14" fill="#181513" stroke="#5E3B3B" strokeWidth="2" />
                    <circle cx="400" cy="180" r="22" fill="#181513" stroke="#5E3B3B" strokeWidth="2" />
                    <circle cx="400" cy="270" r="28" fill="#181513" stroke="#5E3B3B" strokeWidth="2" />
                  </g>
                );
              })}

              {/* Central Sprocket Holes */}
              <circle cx="400" cy="400" r="60" fill="none" stroke="#8A5A5A" strokeWidth="4" />
              {Array.from({ length: 6 }).map((_, idx) => {
                const angle = (idx * 360) / 6;
                return (
                  <circle
                    key={`hub-hole-${idx}`}
                    cx={400 + Math.cos((angle * Math.PI) / 180) * 35}
                    cy={400 + Math.sin((angle * Math.PI) / 180) * 35}
                    r="10"
                    fill="#181513"
                    stroke="#5E3B3B"
                    strokeWidth="1.5"
                  />
                );
              })}
            </motion.g>

            {/* Concentric-ringed double-ring spindle button (stripped of icon/# and compressed to fit tightly against the inner core) */}
            <g className="cursor-pointer group" onClick={handleNext}>
              {/* Outer ring-2 equivalent glow */}
              <circle cx="400" cy="400" r="30" fill="none" stroke="#E8A2A2" strokeWidth="1.5" opacity="0.3" className="transition-opacity group-hover:stroke-opacity-60" />
              {/* Main button border */}
              <circle cx="400" cy="400" r="25" fill="#181513" stroke="#5E3B3B" strokeWidth="2" />
              {/* Inner concentric ring */}
              <circle cx="400" cy="400" r="19" fill="none" stroke="#8A5A5A" strokeWidth="1" opacity="0.5" />
              {/* Central pin / core */}
              <circle cx="400" cy="400" r="8" fill="#1C1815" stroke="#5E3B3B" strokeWidth="1.5" />
              <circle cx="400" cy="400" r="4" fill="#E8A2A2" />
            </g>
          </svg>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 right-4 flex items-center gap-4 z-55">
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full bg-[#1C1815] border border-[#2D2420] hover:border-[#E8A2A2] text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-6 items-center justify-center relative">
              {/* Image side */}
              <div className="w-full md:w-3/5 bg-neutral-900 border border-[#2D2420] rounded-lg overflow-hidden shadow-2xl relative">
                <img 
                  src={activeSlide.img} 
                  alt={activeSlide.name} 
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Context metadata card */}
              <div className="w-full md:w-2/5 bg-[#1C1815] border border-[#2D2420] rounded-xl p-6 shadow-2xl max-w-sm">
                <span className="text-[10px] font-mono text-[#E8A2A2] tracking-[0.25em] uppercase font-bold block mb-1">
                  16mm Frame Expanded
                </span>
                <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wide leading-tight">
                  {activeSlide.name}
                </h2>
                <div className="mt-2 inline-block bg-neutral-900 border border-[#2A201B] rounded-md px-3 py-1 font-mono text-xs text-[#FAF9F5] uppercase">
                  Role: {activeSlide.role}
                </div>

                <div className="mt-6 border-t border-dashed border-[#2D2420] pt-4">
                  <p className="text-sm text-neutral-300 leading-relaxed font-mono italic">
                    "{activeSlide.caption}"
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => {
                      setIsLightboxOpen(false);
                      navigate(activeSlide.path);
                    }}
                    className="flex-1 bg-[#EAC7C7] hover:bg-[#E8A2A2] text-neutral-900 font-mono font-black text-xs uppercase tracking-wider py-3 rounded-md text-center transition-colors cursor-pointer"
                  >
                    Go to section
                  </button>
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="px-4 bg-neutral-900 hover:bg-neutral-800 border border-[#2D2420] text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
