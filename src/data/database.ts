export interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface FilmCredit {
  id: string;
  title: string;
  role: string;
  type: string;
  director: string;
}

export interface ResumeDatabase {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  bio: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: string[];
  languages: string[];
  filmExperience: FilmCredit[];
}

export const DATABASE: ResumeDatabase = {
  name: "Boomika Velineni",
  title: "Film and Video Crew & PR Professional",
  email: "boomikavelineni@gmail.com",
  location: "San Ramon, CA",
  linkedin: "linkedin.com/in/boomika-velineni/",
  bio: "Recent graduate from the University of California, Santa Barbara with experience supporting film production, festival programming, and media relations. Worked across multiple student productions in roles including producer, assistant director, and script supervisor demonstrating strong leadership, organization, and team coordination skills.",
  experience: [
    {
      id: "exp-1",
      company: "Santa Barbara International Film Festival",
      location: "Santa Barbara, CA",
      role: "Cinema Society & Education Intern",
      period: "MARCH 2025 - JUNE 2026",
      bullets: [
        "Supported year-round screenings, receptions, and educational programming for filmmakers, industry professionals, and students."
      ]
    },
    {
      id: "exp-2",
      company: "Asian American International Film Festival",
      location: "Remote",
      role: "Festival Shorts Programmer",
      period: "MARCH 2026 - MAY 2026",
      bullets: [
        "Reviewed narrative and documentary short film submissions for the 49th Asian American International Film Festival."
      ]
    },
    {
      id: "exp-3",
      company: "Santa Barbara International Film Festival",
      location: "Santa Barbara, CA",
      role: "Public Relations Intern",
      period: "FEBRUARY 2026 - FEBRUARY 2026",
      bullets: [
        "Assisted publicity operations by preparing talent face sheets, compiling media breaks, and coordinating filmmakers, media representatives, and talent during red-carpet events."
      ]
    },
    {
      id: "exp-4",
      company: "AlygnAI",
      location: "San Francisco, CA",
      role: "Marketing & Communications Intern",
      period: "JULY 2025 - SEPTEMBER 2025",
      bullets: [
        "Created pitch decks, sales materials, and research-driven content to support marketing and brand visibility initiatives."
      ]
    },
    {
      id: "exp-5",
      company: "Santa Barbara International Film Festival",
      location: "Santa Barbara, CA",
      role: "Hospitality Intern",
      period: "FEBRUARY 2025 - FEBRUARY 2025",
      bullets: [
        "Prepared welcome materials for filmmakers and festival attendees while assisting with guest relations and event operations.",
        "Selected as one of six 'Intern of the Year' recipients among 80+ student interns."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of California, Santa Barbara",
      degree: "B.A. Communication",
      period: ""
    }
  ],
  skills: [
    "Content Development",
    "Copy Editing",
    "Film Production",
    "Film Programming",
    "Festival Operations",
    "Pre-Production Planning",
    "Production Management",
    "Event Coordination",
    "Guest Services",
    "Photography",
    "Videography",
    "Public Relations",
    "Media Outreach",
    "Research",
    "Script Supervision"
  ],
  languages: [
    "English - Native / Bilingual",
    "French - Limited Working",
    "Tamil - Limited Working",
    "Telugu - Native / Bilingual"
  ],
  filmExperience: [
    {
      id: "credit-1",
      title: "Writer’s Block",
      role: "Boom Operator",
      type: "Independent",
      director: "Dir. Eva Yu"
    },
    {
      id: "credit-2",
      title: "Tethered",
      role: "Grip",
      type: "Independent",
      director: "Dir. Sophia Mena, Aidan Wong"
    },
    {
      id: "credit-3",
      title: "The Analog Man",
      role: "BTS Videographer",
      type: "Reality / UCSB",
      director: "Dir. Sam Caruthers, Nicolai Oliva"
    },
    {
      id: "credit-4",
      title: "OffShore",
      role: "Boom Operator",
      type: "Green Screen / UCSB",
      director: "Dir. Haaram Kim"
    },
    {
      id: "credit-5",
      title: "Runner-Up",
      role: "Producer",
      type: "Reality / UCSB",
      director: "Dir. Brandon Hang"
    },
    {
      id: "credit-6",
      title: "The Perfectionist and the Playboy",
      role: "Producer",
      type: "Santa Barbara International Film Festival",
      director: "Dir. Sam Caruthers"
    },
    {
      id: "credit-7",
      title: "Natalie NEET",
      role: "BTS Photographer",
      type: "Independent",
      director: "Dir. Josh Whitesel"
    },
    {
      id: "credit-8",
      title: "Activate Paradise",
      role: "Boom Operator",
      type: "Independent",
      director: "Dir. Landon Lozano"
    },
    {
      id: "credit-9",
      title: "The Girl Next Door",
      role: "Script Supervisor",
      type: "Independent",
      director: "Dir. Maggie Seifert"
    },
    {
      id: "credit-10",
      title: "Don’t Trip",
      role: "1st Assistant Director",
      type: "Independent",
      director: "Dir. Serine Kugler"
    },
    {
      id: "credit-11",
      title: "Hammer Death",
      role: "Sound Mixer",
      type: "Independent",
      director: "Dir. Maddie Koenigsaeker, Tornike Bortsvadze"
    },
    {
      id: "credit-12",
      title: "Darling",
      role: "Writer, Director",
      type: "Independent",
      director: "Dir. Boomika Velineni"
    },
    {
      id: "credit-13",
      title: "Wildflower",
      role: "Script Supervisor",
      type: "Reality / UCSB",
      director: "Dir. Rushil Gupta"
    },
    {
      id: "credit-14",
      title: "WingmanAI",
      role: "1st Assistant Director",
      type: "Reality / UCSB",
      director: "Dir. Alejandro Contreras"
    }
  ]
};
