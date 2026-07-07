import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from './Router';
import { Multimedia } from './Multimedia';
import { Writing } from './Writing';
import { Film } from './Film';
import { ChevronDown, Check, Film as FilmIcon, FileText, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type SubPage = 'multimedia' | 'writing' | 'film';

interface Option {
  id: SubPage;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export function Works() {
  const { pathname, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine the sub-page based on the current path
  const getSubPageFromPath = (path: string): SubPage => {
    if (path.includes('writing')) return 'writing';
    if (path.includes('film')) return 'film';
    return 'multimedia'; // Default resting page
  };

  const activeSubPage = getSubPageFromPath(pathname);

  const options: Option[] = [
    {
      id: 'multimedia',
      label: 'MULTIMEDIA',
      icon: <LayoutGrid className="h-4 w-4" />,
      description: 'Production stills, BTS content, and video reels'
    },
    {
      id: 'writing',
      label: 'WRITING',
      icon: <FileText className="h-4 w-4" />,
      description: 'Arts journalism, reviews, and event reporting'
    },
    {
      id: 'film',
      label: 'FILM',
      icon: <FilmIcon className="h-4 w-4" />,
      description: 'Filmography, technical crew logs, and director credits'
    }
  ];

  const handleSelect = (id: SubPage) => {
    setIsOpen(false);
    navigate(`/works/${id}`);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeOption = options.find(opt => opt.id === activeSubPage) || options[0];

  const renderSubPage = () => {
    switch (activeSubPage) {
      case 'writing':
        return <Writing />;
      case 'film':
        return <Film />;
      case 'multimedia':
      default:
        return <Multimedia />;
    }
  };

  return (
    <div className="min-h-screen bg-[#181513] text-[#FAF9F5] pt-8 pb-16 sm:pb-24">
      {/* Premium Dropdown Container */}
      <div className="mx-auto max-w-6xl px-6 mb-4 flex flex-col items-start relative z-40">
        <div ref={dropdownRef} className="relative w-full max-w-xs sm:max-w-sm">
          {/* Label indicating section */}
          <span className="block text-left text-[9px] font-mono uppercase tracking-[0.3em] text-[#a87c7c] mb-2 font-bold select-none">
            CURRENT CATEGORY
          </span>

          {/* Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-[#110e0c]/90 border border-[#2d2420] hover:border-[#E8A2A2]/60 rounded-xl px-5 py-3 text-sm font-black tracking-widest text-[#FAF9F5] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#E8A2A2]">{activeOption.icon}</span>
              <span>{activeOption.label}</span>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#FAF9F5]/40"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>

          {/* Dropdown Options List */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-2 bg-[#110e0c] border border-[#2d2420] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 p-1"
              >
                {options.map((option) => {
                  const isSelected = option.id === activeSubPage;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className={`w-full flex items-center justify-between rounded-lg px-4 py-3 text-left transition-all duration-200 group ${
                        isSelected 
                          ? 'bg-[#E8A2A2]/10 text-white font-semibold' 
                          : 'text-[#FAF9F5]/70 hover:bg-[#1a1513] hover:text-[#FAF9F5]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`transition-colors duration-200 ${isSelected ? 'text-[#E8A2A2]' : 'text-neutral-500 group-hover:text-[#E8A2A2]'}`}>
                          {option.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-black uppercase tracking-wider">{option.label}</span>
                          <span className="text-[10px] text-neutral-500 mt-0.5 font-mono">{option.description}</span>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="text-[#E8A2A2]">
                          <Check className="h-4 w-4" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Embedded Component View */}
      <div className="relative z-10">
        {renderSubPage()}
      </div>
    </div>
  );
}

export default Works;
