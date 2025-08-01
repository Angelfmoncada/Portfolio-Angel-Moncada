import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2021 – Present",
    title: "Systems Engineering Student – Pontificia Universidad Católica de Honduras",
    description: `Currently pursuing a 5-year degree in Systems Engineering. Throughout this journey, I've consistently applied classroom theory to practical builds in areas such as web systems, cloud architecture, cybersecurity, and data management.`,
    type: "education"
  },
  {
    id: 2,
    year: "2022 – Present",
    title: "Freelance Fullstack Developer",
    description: `Since 2022, I've developed and delivered web-based solutions for clients as a freelance fullstack developer. I specialize in crafting complete systems using technologies like React, Node.js, Tailwind, Supabase, and PostgreSQL—ensuring clean codebases, responsive design, and business-aligned functionality.`,
    type: "experience"
  },
  {
    id: 3,
    year: "Projects & Practical Experience",
    title: "30+ Development Projects",
    description: "Over the past few years, I've contributed to and led more than 30 projects—academic, freelance, and personal. These include everything from admin dashboards to mobile-friendly platforms, always emphasizing scalability, maintainability, and intuitive user experience.",
    type: "project"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              {/* Update about me content to reflect Angel's background */}
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">full-stack developer and software engineer</span> with over five years of academic training and hands-on experience. I've worked on more than 30 real-world initiatives, including freelance contracts and web platforms using modern technologies.
              </p>
              <p className="text-muted-foreground mb-4">
                My expertise includes software development, databases, networking, infrastructure, and systems analysis. I bridge both frontend and backend skills to deliver robust, elegant digital products.
              </p>
              <p className="text-muted-foreground mb-4">
                I'm driven by the challenge of crafting high-performance, user-centric solutions. With an analytical and flexible mindset, I'm constantly seeking opportunities to learn, grow, and innovate.
              </p>
              {/* List Angel's language proficiencies */}
              <p className="text-muted-foreground mt-6">
                <span className="font-semibold text-blue-400">Native Language:</span> Spanish
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-blue-400">English Level:</span> C2
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : item.type === 'project' ? (
                      <ProjectIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const ProjectIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
