import React from 'react';

export interface PolaroidProps {
  key?: string | number;
  src: string;
  alt: string;
  caption?: string;
  rotate?: string;
  tape?: 'top' | 'left' | 'right';
  className?: string;
  eager?: boolean;
}

export function Polaroid({
  src,
  alt,
  caption,
  rotate = "rotate-1",
  tape,
  className = "",
  eager = false
}: PolaroidProps) {
  return (
    <div className={`polaroid ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-1 ${className}`}>
      {tape === "top" && (
        <span className="washi-tape left-1/2 -top-3 -translate-x-1/2 -rotate-3 bg-[#A0C3D2]/55" />
      )}
      {tape === "left" && (
        <span className="washi-tape -left-4 top-6 -rotate-12" />
      )}
      {tape === "right" && (
        <span className="washi-tape -right-4 top-6 rotate-12 bg-[#D5E3E8]/60" />
      )}
      <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-200">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading={eager ? "eager" : "lazy"}
          referrerPolicy="no-referrer"
        />
      </div>
      {caption && (
        <p className="absolute bottom-2 left-0 right-0 text-center text-[10px] italic text-neutral-500">
          {caption}
        </p>
      )}
    </div>
  );
}
