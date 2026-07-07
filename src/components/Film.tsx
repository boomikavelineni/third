import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film as FilmIcon, Search, Eye, Users, Layers, Award } from 'lucide-react';
import { DATABASE, FilmCredit } from '../data/database';

export function Film() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter categorization based on role
  const getCategory = (credit: FilmCredit) => {
    const roleLower = credit.role.toLowerCase();
    if (roleLower.includes('director') || roleLower.includes('producer')) {
      return 'Directing & Producing';
    }
    if (roleLower.includes('script') || roleLower.includes('assistant director')) {
      return 'Script & AD';
    }
    if (roleLower.includes('sound') || roleLower.includes('operator') || roleLower.includes('grip') || roleLower.includes('videographer') || roleLower.includes('photographer') || roleLower.includes('mixer')) {
      return 'Production & Crew';
    }
    return 'Other';
  };

  const categories = ['All', 'Directing & Producing', 'Script & AD', 'Production & Crew'];

  const filteredCredits = DATABASE.filmExperience.filter(credit => {
    const matchesSearch = credit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          credit.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          credit.director.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    return getCategory(credit) === activeFilter && matchesSearch;
  });

  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* Sub-header */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
            Film <span className="text-[#E8A2A2]">Credits</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground font-mono">
            A comprehensive filmography highlighting technical on-set crew positions, production coordination, and creative direction.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-dashed border-[#2d2420]/60 pb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#E8A2A2] text-[#181513] shadow-[0_4px_12px_rgba(232,162,162,0.25)]'
                    : 'bg-[#1a1715] text-[#FAF9F5]/60 hover:text-[#FAF9F5] border border-[#2d2420]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground/60">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, role..."
              className="w-full bg-[#110e0c]/85 border border-[#2d2420] rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-[#FAF9F5] placeholder-[#FAF9F5]/30 focus:outline-none focus:border-[#E8A2A2] focus:ring-1 focus:ring-[#E8A2A2]/30 transition-all"
            />
          </div>
        </div>

        {/* Credits Grid */}
        <motion.div 
          layout
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCredits.map((credit, idx) => {
              const cat = getCategory(credit);
              return (
                <motion.div
                  key={credit.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="group relative rounded-2xl bg-[#110e0c]/60 border border-[#2d2420]/60 p-5 sm:p-6 transition-all duration-300 hover:border-[#E8A2A2]/45 hover:bg-[#110e0c]/80 flex flex-col justify-between"
                >
                  <div>
                    {/* Top tag / indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#a87c7c]">
                        {credit.type}
                      </span>
                      <div className="text-xs text-[#E8A2A2]/70 group-hover:text-[#E8A2A2] transition-colors">
                        <FilmIcon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Movie Title */}
                    <h3 className="text-lg sm:text-xl font-sans font-black uppercase tracking-tight text-[#FAF9F5] group-hover:text-white transition-colors">
                      {credit.title}
                    </h3>

                    {/* Role Block */}
                    <div className="mt-3 inline-block bg-[#E8A2A2]/10 border border-[#E8A2A2]/15 rounded-lg px-3 py-1.5">
                      <span className="text-[10px] uppercase text-[#E8A2A2] tracking-[0.1em] font-mono block font-bold">
                        {credit.role}
                      </span>
                    </div>
                  </div>

                  {/* Director / Footer Info */}
                  <div className="mt-6 pt-4 border-t border-[#2d2420]/40 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#FAF9F5]/75">
                      {credit.director}
                    </span>
                    <span className="text-[10px] font-mono text-[#FAF9F5]/30">
                      ID: {credit.id.replace('credit-', '#')}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredCredits.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-mono text-sm">No credits found matching your selection.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Film;
