import React, { useState, useEffect } from 'react';
import { Link, useRouter } from './Router';
import { motion, AnimatePresence } from 'motion/react';

export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "#contact", label: "Contact", isModal: true }
];

interface HeaderProps {
  onContactClick?: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { pathname } = useRouter();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const isHomeOrAbout = pathname === '/' || pathname === '/about';
    if (!isHomeOrAbout) {
      setIsSolid(true);
      return;
    }

    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  const isCurrentRoute = (to: string) => {
    if (to === "/") {
      return pathname === "/";
    }
    if (to === "/works") {
      return pathname.startsWith("/works") || pathname === "/multimedia" || pathname === "/writing" || pathname === "/film";
    }
    return pathname.startsWith(to);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isSolid ? 'bg-[#181513] border-b border-[#3a302c]/50 shadow-md' : 'bg-transparent border-b border-transparent shadow-none'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5 w-full">
        <nav className="flex w-full justify-between items-center text-center">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = isCurrentRoute(item.to);
            const showBrackets = isActive || hoveredIndex === idx;

            if (item.isModal) {
              return (
                <button
                  key={item.to}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onContactClick) onContactClick();
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-1 sm:px-2 md:px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all flex items-center justify-center border border-transparent text-[#FAF9F5]/80 hover:text-[#FAF9F5] select-none cursor-pointer bg-transparent"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Left Bracket indicator - desktop only */}
                    <AnimatePresence initial={false}>
                      {showBrackets && (
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ type: "spring", stiffness: 350, damping: 22 }}
                          className="hidden md:inline absolute -left-5 text-[#E8A2A2] font-semibold text-sm"
                        >
                          ▸
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <span className="relative z-10">
                      {item.label}
                    </span>

                    {/* Right Bracket indicator - desktop only */}
                    <AnimatePresence initial={false}>
                      {showBrackets && (
                        <motion.span
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ type: "spring", stiffness: 350, damping: 22 }}
                          className="hidden md:inline absolute -right-5 text-[#E8A2A2] font-semibold text-sm"
                        >
                          ◂
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-1 sm:px-2 md:px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all flex items-center justify-center border border-transparent text-[#FAF9F5]/80 hover:text-[#FAF9F5] select-none"
              >
                <div className="relative flex items-center justify-center">
                  {/* Left Bracket indicator - desktop only */}
                  <AnimatePresence initial={false}>
                    {showBrackets && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        className="hidden md:inline absolute -left-5 text-[#E8A2A2] font-semibold text-sm"
                      >
                        ▸
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <span className="relative z-10">
                    {item.label}
                  </span>

                  {/* Right Bracket indicator - desktop only */}
                  <AnimatePresence initial={false}>
                    {showBrackets && (
                      <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        className="hidden md:inline absolute -right-5 text-[#E8A2A2] font-semibold text-sm"
                      >
                        ◂
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-1 right-1 sm:left-2 sm:right-2 h-[2px] bg-[#E8A2A2] shadow-[0_0_8px_rgba(232,162,162,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

