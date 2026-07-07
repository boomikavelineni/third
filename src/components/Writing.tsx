import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

export const ARTICLES = [
  {
    name: "The Wildcat Tribune",
    href: "https://thewildcattribune.com/staff_name/boomika-velineni/",
    description: "Dougherty Valley High School's student newspaper. Features and reviews covering arts, entertainment, and campus life."
  },
  {
    name: "Headliners in Education",
    href: "https://hieshowcase.com/staff_name/boomika-velineni/",
    description: "National student journalism showcase spotlighting reporting from writers across the country."
  }
];

export function Writing() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="text-5xl font-black leading-[0.95] text-foreground md:text-7xl uppercase">
        JOURNALISM
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Selected articles published in student newspapers are linked below.
      </p>
      
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {ARTICLES.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-primary/40"
          >
            <div className="mb-6 flex items-center justify-start">
              {article.name === "The Wildcat Tribune" ? (
                <div className="overflow-hidden rounded-xl border border-border/50 w-12 h-12 flex items-center justify-center bg-black shadow-sm">
                  <img 
                    src="/wildcat_tribune_logo.jpg" 
                    alt="The Wildcat Tribune Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="inline-flex rounded-xl bg-secondary p-3 text-secondary-foreground">
                  <Newspaper className="h-6 w-6" />
                </div>
              )}
            </div>
            <h2 className="mb-2 text-2xl font-black text-foreground">
              {article.name}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {article.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary">
              Read articles
              <ExternalLink className="h-3 w-3" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
export default Writing;
