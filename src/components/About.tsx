import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  FileText
} from 'lucide-react';
import { DATABASE } from '../data/database';
import { Projector } from './Projector';

export function About() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-12">
        {/* Bio Grid */}
        <div className="mt-4 grid gap-6 md:grid-cols-4 items-start overflow-visible">
          
          {/* Main Content Column containing only the Projector */}
          <div className="md:col-span-3 animate-in fade-in slide-in-from-bottom-3 duration-500 overflow-visible">
            <Projector />
          </div>

          {/* Sidebar Column (EDUCATION, BASED, CONTACT box, Resume PDF) */}
          <div className="relative z-30 space-y-6 md:col-span-1 animate-in fade-in slide-in-from-bottom-5 duration-500 delay-100 h-fit">
            
            {/* Sidebar Info */}
            <aside className="space-y-6 rounded-2xl bg-card p-6 h-fit shadow-sm">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-[#E8A2A2]" />
                  Education
                </div>
                {DATABASE.education.map(edu => (
                  <div key={edu.id}>
                    <p className="text-sm font-bold text-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period && `${edu.degree} (${edu.period})` || edu.degree}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-[#E8A2A2]" />
                  Based
                </div>
                <p className="text-sm text-foreground">{DATABASE.location}</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <FileText className="h-3.5 w-3.5 text-[#E8A2A2]" />
                  Contact
                </div>
                <a
                  href={`mailto:${DATABASE.email}`}
                  className="text-sm text-foreground hover:text-[#E8A2A2] break-all transition-colors"
                >
                  {DATABASE.email}
                </a>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
