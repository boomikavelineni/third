import React, { useEffect } from 'react';
import { useRouter } from './Router';
import { About } from './About';

export const MA_IMAGES = [
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/f8fe0a9a-95b2-4932-a106-2d24427c9f1f/3a194c1dd22e.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/57c6564f-8921-4dff-ae4b-7a5132ec866e/7c77f62ac021.jpg",
  "https://cine-hub-forge.lovable.app/__l5e/assets-v1/4a84e405-2a9e-4b7a-9748-4345454a699a/63b9ed392b0a.jpg"
];

export const SE_IMAGES = [
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

export function Home() {
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div className="flex flex-col bg-[#181513]">
      {/* Netflix-Style Hero Banner */}
      <section id="hero-section" className="relative w-full h-[85vh] min-h-[620px] overflow-hidden flex items-center justify-start">
        {/* Background photo */}
        <div 
          className="absolute inset-0 bg-cover bg-[85%_center]"
          style={{ 
            backgroundImage: `url(${MA_IMAGES[0]})`,
            opacity: 0.85,
          }}
        />
        {/* Seamless Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181513] via-[#181513] via-[#181513]/85 via-[#181513]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-[#181513]/50 to-transparent" />
        
        {/* Hero content - responsively positioned and aligned on mobile */}
        <div className="absolute bottom-32 left-6 sm:left-8 md:static md:z-10 md:w-full md:max-w-6xl md:mx-auto md:pl-8 md:pr-16 flex flex-col items-start text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-kurale font-medium text-[#FAF9F5] tracking-wide relative select-none leading-none">
            Boomika Velineni
          </h1>
          
          <div className="mt-2 md:mt-4 text-[#FAF9F5]/90 font-space text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase font-bold">
            <span className="text-[#E8A2A2]">భూమిక</span> • CREATIVE STRATEGIST
          </div>
        </div>

        {/* Film-TV badge in the corner (hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex absolute bottom-6 right-8 font-space text-[10px] tracking-[0.3em] text-[#FAF9F5]/40 items-center gap-2">
          <span className="h-4 w-[3px] bg-[#E8A2A2]" />
          FILM-TV
        </div>
      </section>

      {/* About Section with full-width Polka Dots (and absolutely NO borders or lines!) */}
      <section id="about-section" className="relative w-full bg-[#181513] bg-[radial-gradient(#221c19_1.2px,transparent_1.2px)] [background-size:24px_24px] overflow-hidden scroll-mt-24">
        <About />
      </section>
    </div>
  );
}

export default Home;
