import React, { useState, useEffect } from "react";
import { 
  Film, 
  Play, 
  Calendar, 
  Maximize2, 
  X, 
  ChevronDown, 
  FileText, 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight 
} from "lucide-react";

// Types for production data structure matching the reference layout
interface Still {
  src: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  focalLength?: string;
}

interface ProjectVideo {
  label: string;
  href: string;
  icon?: string;
}

interface ProjectCTA {
  label: string;
  href: string;
}

interface Project {
  id: string;
  title: string;
  sidebarTitle?: string;
  when: string;
  director?: string;
  writers?: string;
  camera?: string;
  blurb: string;
  stills: Still[];
  isVideo?: boolean;
  videoSrc?: string;
  video?: ProjectVideo;
  cta?: ProjectCTA;
}

const pf = [
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/f8fe0a9a-95b2-4932-a106-2d24427c9f1f/3a194c1dd22e.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/57c6564f-8921-4dff-ae4b-7a5132ec866e/7c77f62ac021.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/4a84e405-2a9e-4b7a-9748-4345454a699a/63b9ed392b0a.jpg"
];

const Ee = [
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/facd6215-ee07-4db6-a13b-986f0d162df9/ac0d5748567a.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/31de29ab-8fcb-4b10-9455-fd8e6cc2ff3a/4272322bef8f.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/494a7b6b-b763-4bef-b45f-288e795f362e/e6d598e9756f.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/0b63ba6a-6f89-4a80-870b-1bec15db156b/8945313f10c4.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/aa84b5a8-da8c-4767-8fc2-152f9dfe0c5b/5ce67a7ac562.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/ae8836e2-d1f6-41aa-ae0d-bf9f58f01c40/7c3a974c7e95.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/575aa4c1-d2c2-445f-9b56-cb1c01858372/0b33adafb4b0.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/ba1ef659-4f92-4be1-89ec-cb596a1c6121/38b4d1c049fa.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/75ca3161-eea1-49d0-90a0-1eaf25c14422/4efc5991dd68.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/22db7a14-9e4f-45b6-83b0-4bdad9c692ad/e507b9bfa451.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/41fefc5c-785d-4279-bc00-33d339a53397/7ce2d958b1a0.jpg"
];

const Vd = [
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/84fd6e27-9081-49e5-840c-77ed0c7b0f19/3251246f8a8b.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/79eeaea0-c383-44d1-861d-c95a34b5ef80/25a4bf3d33b8.jpg"
];

const zn = [
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/eef50904-7e72-499f-8fa3-ff4edb971750/60244cb60da0.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/54adb6d2-8f54-4963-8713-49dabd0ddc17/c4563de1675b.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/09ad98ee-201f-4f8c-a688-308714ef6f0e/50b3565ec1b1.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/1a6a574f-e6ab-43f4-9e4c-303705b40433/1d5aa2f6ce46.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/5703db45-ea33-43ef-853b-662b19b1a522/3314f54766aa.jpg"
];

const ORIGINAL_PROJECTS_DATA: Project[] = [
  {
    id: "natalie-neet",
    title: "Natalie NEET",
    when: "January 2026",
    director: "Josh Whitesel",
    camera: "Canon EOS 70D",
    blurb: "Behind-the-scenes of Natalie NEET.",
    stills: [
      { src: pf[0], aperture: "f/2.8", shutterSpeed: "1/125s", iso: "800", focalLength: "50mm" },
      { src: pf[1], aperture: "f/4.0", shutterSpeed: "1/160s", iso: "400", focalLength: "35mm" },
      { src: pf[2], aperture: "f/2.8", shutterSpeed: "1/100s", iso: "1600", focalLength: "85mm" }
    ]
  },
  {
    id: "perfectionist-playboy",
    title: "The Perfectionist and the Playboy",
    when: "December 2025",
    director: "Sam Caruthers",
    camera: "Sony ZV-E10 II",
    blurb: "Behind-the-scenes of The Perfectionist and the Playboy.",
    stills: [
      { src: Ee[0], aperture: "f/1.8", shutterSpeed: "1/200s", iso: "320", focalLength: "50mm" },
      { src: Ee[1], aperture: "f/2.8", shutterSpeed: "1/125s", iso: "640", focalLength: "35mm" },
      { src: Ee[2], aperture: "f/2.0", shutterSpeed: "1/160s", iso: "400", focalLength: "35mm" },
      { src: Ee[3], aperture: "f/1.8", shutterSpeed: "1/160s", iso: "500", focalLength: "50mm" },
      { src: Ee[4], aperture: "f/2.4", shutterSpeed: "1/125s", iso: "800", focalLength: "28mm" },
      { src: Ee[5], aperture: "f/1.8", shutterSpeed: "1/200s", iso: "400", focalLength: "50mm" },
      { src: Ee[6], aperture: "f/2.8", shutterSpeed: "1/160s", iso: "320", focalLength: "35mm" },
      { src: Ee[7], aperture: "f/4.0", shutterSpeed: "1/125s", iso: "640", focalLength: "24mm" },
      { src: Ee[8], aperture: "f/2.2", shutterSpeed: "1/100s", iso: "800", focalLength: "50mm" },
      { src: Ee[9], aperture: "f/2.0", shutterSpeed: "1/160s", iso: "400", focalLength: "35mm" },
      { src: Ee[10], aperture: "f/1.8", shutterSpeed: "1/200s", iso: "320", focalLength: "50mm" }
    ]
  },
  {
    id: "the-analog-man",
    title: "THE ANALOG MAN",
    when: "June 2025",
    director: "Sam Caruthers & Nicolai Oliva",
    camera: "Canon Rebel T7i",
    blurb: "Behind-the-scenes reel featuring the cast and crew of The Analog Man.",
    isVideo: true,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-vintage-projector-playing-a-film-41718-large.mp4",
    video: { label: "Watch on Instagram", href: "https://www.instagram.com/reel/DKifceES-0s/", icon: "insta" },
    stills: [
      { src: "/analog_man_thumbnail.jpg", aperture: "f/2.0", shutterSpeed: "1/48s", iso: "250", focalLength: "25mm" }
    ]
  },
  {
    id: "hsm",
    title: "Dougherty Valley's High School Musical",
    sidebarTitle: "HIGH SCHOOL MUSICAL",
    when: "March 2022",
    writers: "Boomika Velineni & Nayja Shah",
    camera: "Canon EOS Rebel T2i",
    blurb: "Photos taken for The Wildcat Tribune in accompaniment of the corresponding review article.",
    cta: { label: "Read original review", href: "https://thewildcattribune.com/14878/ae/dvhs-drama-returns-with-a-whimsical-performance-of-the-high-school-musical/" },
    stills: [
      { src: zn[2], aperture: "f/4.0", shutterSpeed: "1/160s", iso: "640", focalLength: "50mm" },
      { src: zn[1], aperture: "f/3.5", shutterSpeed: "1/125s", iso: "1000", focalLength: "35mm" },
      { src: zn[0], aperture: "f/4.5", shutterSpeed: "1/200s", iso: "800", focalLength: "18mm" },
      { src: zn[3], aperture: "f/4.0", shutterSpeed: "1/250s", iso: "1200", focalLength: "85mm" },
      { src: zn[4], aperture: "f/2.8", shutterSpeed: "1/200s", iso: "1600", focalLength: "50mm" }
    ]
  }
];

const INSTAGRAM_EMBED_HTML = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DKifceES-0s/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#181513; border:0; border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:100%;"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DKifceES-0s/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DKifceES-0s/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by @theanalogmanfilm</a></p></div></blockquote>`;

const getProjectDisplayName = (project: Project): string => {
  if (project.id === "the-analog-man") return "The Analog Man";
  if (project.id === "hsm") return "High School Musical";
  return project.sidebarTitle || project.title;
};

export function Multimedia() {
  const [activeProjIndex, setActiveProjIndex] = useState<number>(0);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  // Load Instagram Embed Script dynamically when inline playing is activated
  useEffect(() => {
    if (isPlayingVideo) {
      let script = document.getElementById("instagram-embed-script") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script already exists, force Instagram to re-process the new DOM elements
        try {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        } catch (e) {
          console.error("Failed to process Instagram Embeds", e);
        }
      }

      const timer = setTimeout(() => {
        try {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        } catch (e) {
          console.error("Failed to process Instagram Embeds in timeout", e);
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isPlayingVideo, activeProjIndex]);

  // Sort projects in reverse-alphabetical order of display names exactly matching reference URL
  const sortedProjects = [...ORIGINAL_PROJECTS_DATA].sort((a, b) => 
    getProjectDisplayName(b).localeCompare(getProjectDisplayName(a))
  );

  const activeProject = sortedProjects[activeProjIndex];
  const activeStill = activeProject.stills[activeImgIndex];

  // Handle keyboard navigation for the lightbox modal
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, activeProjIndex, activeImgIndex]);

  const handleSelectProject = (idx: number) => {
    setActiveProjIndex(idx);
    setActiveImgIndex(0);
    setIsPlayingVideo(false);
  };

  const selectImage = (idx: number) => {
    setActiveImgIndex(idx);
    setIsPlayingVideo(false);
  };

  const handleNext = () => {
    setIsPlayingVideo(false);
    setActiveImgIndex((prev) => (prev + 1) % activeProject.stills.length);
  };

  const handlePrev = () => {
    setIsPlayingVideo(false);
    setActiveImgIndex((prev) => (prev - 1 + activeProject.stills.length) % activeProject.stills.length);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-20 text-foreground bg-[#181513]">
      
      {/* 2-COLUMN LAYOUT MATCHING THE DESIRED URL LAYOUT */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        
        {/* LEFT COLUMN: FEATURED WORKS LIST & ACTIVE PROJECT SPEC SHEET (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6 mx-auto w-full max-w-md lg:max-w-none lg:mx-0">
          
          {/* FEATURED WORKS LIST */}
          <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-[10px] font-mono font-black uppercase tracking-widest text-primary flex items-center gap-1.5 justify-center lg:justify-start">
              <Film className="h-3 w-3" />
              Featured Works
            </h2>
            
            {/* Desktop Works List */}
            <div className="hidden md:block space-y-3">
              {sortedProjects.map((project, idx) => {
                const isActive = idx === activeProjIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleSelectProject(idx)}
                    className={`w-full p-4 rounded-xl border transition-all flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left gap-3 lg:gap-0 cursor-pointer ${
                      isActive 
                        ? "bg-[#EAC7C7] text-[#181513] border-[#d6a5a5] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)] scale-[1.01] font-black" 
                        : "bg-background hover:bg-[#2c2420] text-foreground border-border/60 hover:border-[#EAC7C7]/60"
                    }`}
                  >
                    <div className="min-w-0">
                      <h3 className="text-sm font-black tracking-tight truncate font-sans">
                        {getProjectDisplayName(project)}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-1 rounded-md shrink-0 border ${
                      isActive 
                        ? "bg-[#3A2A2A] border-[#8A5A5A]/30 text-[#FAF9F5] font-black" 
                        : "bg-card border-border text-muted-foreground"
                    }`}>
                      {project.isVideo ? "1 Video" : `${project.stills.length} Still${project.stills.length > 1 ? "s" : ""}`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Dropdown Select */}
            <div className="block md:hidden relative">
              <select
                value={activeProjIndex}
                onChange={(e) => handleSelectProject(Number(e.target.value))}
                className="w-full appearance-none rounded-xl border border-border/60 bg-background px-4 py-3 text-sm font-black tracking-tight text-foreground shadow-sm focus:border-[#EAC7C7] focus:outline-none focus:ring-1 focus:ring-[#EAC7C7] cursor-pointer font-sans"
              >
                {sortedProjects.map((project, idx) => {
                  const displayName = getProjectDisplayName(project);
                  return (
                    <option key={project.id} value={idx}>
                      {displayName}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* ACTIVE PROJECT SPEC SHEET CARD (lg:block - hidden on mobile) */}
          <div className="hidden lg:block rounded-2xl border border-border/40 bg-card p-6 shadow-sm relative overflow-hidden">
            <div className="space-y-4">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary justify-center lg:justify-start font-mono">
                  <FileText className="h-3 w-3" />
                  Spec Sheet
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-foreground mt-1 text-center lg:text-left font-sans">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5 font-mono justify-center lg:justify-start">
                  <Calendar className="h-3 w-3 text-primary" />
                  {activeProject.when}
                </p>
              </div>

              <div className="border-t border-border/40 pt-4 text-center lg:text-left">
                <p className="text-sm leading-relaxed text-neutral-600 italic font-sans">
                  "{activeProject.blurb}"
                </p>
              </div>

              <div className="border-t border-border/40 pt-4 space-y-2">
                {activeProject.director && (
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-xs gap-1 lg:gap-0 font-mono">
                    <span className="text-muted-foreground">
                      {activeProject.director.includes("&") ? "Directors:" : "Director:"}
                    </span>
                    <span className="font-bold text-foreground text-right">
                      {activeProject.director}
                    </span>
                  </div>
                )}
                {activeProject.writers && (
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-xs gap-1 lg:gap-0 font-mono">
                    <span className="text-muted-foreground">Writers:</span>
                    <span className="font-bold text-foreground text-right">
                      {activeProject.writers}
                    </span>
                  </div>
                )}
                {activeProject.camera && (
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-xs gap-1 lg:gap-0 font-mono">
                    <span className="text-muted-foreground">Camera:</span>
                    <span className="font-bold text-foreground text-right">
                      {activeProject.camera}
                    </span>
                  </div>
                )}
              </div>

              {(activeProject.cta || activeProject.video) && (
                <div className="pt-2">
                  {activeProject.isVideo ? (
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a2a2] border border-[#d68d8d] px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[#181513] transition-all hover:bg-[#df8989] hover:-translate-y-0.5 cursor-pointer font-mono"
                    >
                      Play Video Inline
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <a
                      href={activeProject.cta ? activeProject.cta.href : activeProject.video?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a2a2] border border-[#d68d8d] px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[#181513] transition-all hover:bg-[#df8989] hover:-translate-y-0.5 cursor-pointer font-mono"
                    >
                      {activeProject.cta ? activeProject.cta.label : activeProject.video?.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MAIN SCREEN VIEWPORT & THUMBNAILS (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-6 mx-auto w-full max-w-md lg:max-w-none lg:mx-0 animate-in fade-in duration-500 delay-100">
          
          {/* THE CINEMA DISPLAY SCREEN */}
          <div className="relative rounded-2xl border-4 border-neutral-900 bg-neutral-950 shadow-2xl overflow-hidden group">
            <div className="relative aspect-[3/2] w-full flex items-center justify-center bg-neutral-900 overflow-hidden">
              
              {activeProject.isVideo ? (
                isPlayingVideo ? (
                  <div className="absolute inset-0 w-full h-full bg-[#181513] flex flex-col justify-start overflow-y-auto select-text scrollbar-thin z-20">
                    <div className="sticky top-0 flex items-center justify-between px-4 py-3 bg-[#221c19] border-b border-border text-foreground z-30 shadow-md">
                      <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
                        Inline Video Player
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsPlayingVideo(false)}
                        className="text-[10px] font-mono font-black uppercase tracking-wider bg-[#EAC7C7] hover:bg-[#e4b2b2] text-[#181513] px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 shadow-md"
                      >
                        <X className="h-3 w-3" />
                        Close Video
                      </button>
                    </div>
                    <div className="flex justify-center p-4 bg-[#181513] min-h-0 w-full">
                      <div 
                        className="w-full max-w-[420px]"
                        dangerouslySetInnerHTML={{ __html: INSTAGRAM_EMBED_HTML }}
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group/img focus:outline-none flex items-center justify-center"
                    aria-label="Play video inline"
                  >
                    <img
                      src={activeStill.src}
                      alt={`${activeProject.title} Still ${activeImgIndex + 1}`}
                      className="h-full w-full object-cover select-none transition-all duration-700 group-hover/img:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="bg-black/85 backdrop-blur-md text-white px-5 py-3 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-2.5 shadow-xl border border-white/15 group-hover/img:scale-105 transition-transform duration-300 font-mono">
                        <Play className="h-4 w-4 fill-[#EAC7C7] text-[#EAC7C7]" />
                        Play Video
                      </span>
                    </div>
                  </button>
                )
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute inset-0 w-full h-full cursor-zoom-in group/img focus:outline-none"
                  aria-label="Expand image"
                >
                  <img
                    src={activeStill.src}
                    alt={`${activeProject.title} Still ${activeImgIndex + 1}`}
                    className="h-full w-full object-cover select-none transition-all duration-700 group-hover/img:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/img:bg-black/20 flex items-center justify-center">
                    <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg font-mono">
                      <Maximize2 className="h-3.5 w-3.5" />
                      Expand Still
                    </span>
                  </div>
                </button>
              )}

              {/* Viewport Left / Right Slide Navigation Overlay */}
              {activeProject.stills.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white border border-neutral-800 shadow-md backdrop-blur-sm transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 hover:bg-neutral-900 hover:scale-105 z-10 cursor-pointer"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white border border-neutral-800 shadow-md backdrop-blur-sm transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 hover:bg-neutral-900 hover:scale-105 z-10 cursor-pointer"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* LOWER IMAGE THUMBNAILS FILMSTRIP (lg:block - hidden on mobile) */}
          <div className="hidden lg:block space-y-3">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2 justify-center lg:justify-start font-mono">
              <Camera className="h-3.5 w-3.5" />
              IMAGE PREVIEW
            </h3>
            <div className={`flex gap-3 overflow-x-auto pt-3.5 pb-4 px-3.5 ${activeProject.stills.length > 3 ? "justify-start" : "justify-center"} lg:justify-start snap-x [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-neutral-100 [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full`}>
              {activeProject.stills.map((still, idx) => {
                const isCurrent = idx === activeImgIndex;
                return (
                  <button
                    key={still.src}
                    onClick={() => selectImage(idx)}
                    className={`relative aspect-[3/2] w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all snap-start cursor-pointer ${
                      isCurrent
                        ? "border-neutral-900 ring-2 ring-[#EAC7C7] scale-[1.06]"
                        : "border-border/60 hover:border-neutral-400 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={still.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {activeProject.isVideo && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-[10px] font-mono font-bold bg-[#EAC7C7] text-foreground px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Film className="h-2.5 w-2.5" />
                          VID
                        </span>
                      </div>
                    )}
                    {isCurrent && !activeProject.isVideo && (
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <span className="text-[9px] font-mono font-bold bg-neutral-900/80 text-white px-1.5 py-0.5 rounded">
                          ACTV
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE PROJECT SPEC SHEET (Mobile only lg:hidden) */}
          <div className="block lg:hidden rounded-2xl border border-border/40 bg-card p-6 shadow-sm relative overflow-hidden mt-6">
            <div className="space-y-4">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary justify-center lg:justify-start font-mono">
                  <FileText className="h-3 w-3" />
                  Spec Sheet
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-foreground mt-1 text-center lg:text-left font-sans">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5 font-mono justify-center lg:justify-start">
                  <Calendar className="h-3 w-3 text-primary" />
                  {activeProject.when}
                </p>
              </div>

              <div className="border-t border-border/40 pt-4 text-center lg:text-left">
                <p className="text-sm leading-relaxed text-neutral-600 italic font-sans">
                  "{activeProject.blurb}"
                </p>
              </div>

              <div className="border-t border-border/40 pt-4 space-y-2">
                {activeProject.director && (
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-xs gap-1 lg:gap-0 font-mono">
                    <span className="text-muted-foreground">
                      {activeProject.director.includes("&") ? "Directors:" : "Director:"}
                    </span>
                    <span className="font-bold text-foreground text-right">
                      {activeProject.director}
                    </span>
                  </div>
                )}
                {activeProject.writers && (
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-xs gap-1 lg:gap-0 font-mono">
                    <span className="text-muted-foreground">Writers:</span>
                    <span className="font-bold text-foreground text-right">
                      {activeProject.writers}
                    </span>
                  </div>
                )}
                {activeProject.camera && (
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-xs gap-1 lg:gap-0 font-mono">
                    <span className="text-muted-foreground">Camera:</span>
                    <span className="font-bold text-foreground text-right">
                      {activeProject.camera}
                    </span>
                  </div>
                )}
              </div>

              {(activeProject.cta || activeProject.video) && (
                <div className="pt-2">
                  {activeProject.isVideo ? (
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a2a2] border border-[#d68d8d] px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[#181513] transition-all hover:bg-[#df8989] hover:-translate-y-0.5 cursor-pointer font-mono"
                    >
                      Play Video Inline
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <a
                      href={activeProject.cta ? activeProject.cta.href : activeProject.video?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a2a2] border border-[#d68d8d] px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[#181513] transition-all hover:bg-[#df8989] hover:-translate-y-0.5 cursor-pointer font-mono"
                    >
                      {activeProject.cta ? activeProject.cta.label : activeProject.video?.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300 animate-in fade-in">
          {/* Backdrop Click Dismiss */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsLightboxOpen(false)} />
          
          {/* Lightbox Controls & Metadata HUD */}
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300 pointer-events-auto">
              {activeProject.title} {activeProject.isVideo ? "— Video" : `— ${activeImgIndex + 1} / ${activeProject.stills.length}`}
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/80 border border-neutral-800 text-white hover:bg-neutral-800 hover:scale-105 transition-all pointer-events-auto cursor-pointer"
              aria-label="Close fullscreen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Lightbox Main Stage Area */}
          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center z-10">
            {activeProject.isVideo ? (
              <video
                src={activeProject.videoSrc}
                poster="/analog_man_thumbnail.jpg"
                controls
                autoPlay
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src={activeStill.src}
                alt={`${activeProject.title} Expanded Still`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl select-none"
                referrerPolicy="no-referrer"
              />
            )}

            {/* Left/Right controls (if multiple stills exist) */}
            {activeProject.stills.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/90 text-white border border-neutral-800 hover:bg-neutral-800 transition-all shadow-xl hover:scale-105 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/90 text-white border border-neutral-800 hover:bg-neutral-800 transition-all shadow-xl hover:scale-105 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
