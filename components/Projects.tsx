'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link?: string;
  repo?: string;
  tags: string[];
  image?: string; // Optional image path
}

const projects: Project[] = [
  {
    title: "AM.Pause",
    description: "A community initiative focused on creating meaningful pauses in everyday life. Built with React and Firebase.",
    link: "https://www.am-pause.com", // Placeholder
    tags: ["Community", "React", "Frontend"]
  },
  {
    title: "Digital Name Card",
    description: "A modern networking tool designed to replace physical business cards with dynamic, shareable digital profiles.",
    link: "https://name-card.claunode.com",
    tags: ["Networking", "Next.js", "Vercel"]
  },
  {
    title: "Online Education Competition",
    description: "An educational platform designed for hosting and managing online competitions effectively. Built with Supabase.",
    link: "https://gogo.claunode.com/",
    tags: ["Supabase", "Education", "Platform"]
    // Add image: "/path/to/screencap.png" when available
  },
  {
    title: "NFC Web Writer",
    description: "A web-based tool for reading and writing NFC tags directly from the browser. Simple, fast, and no app required.",
    link: "https://claudiatsoi.github.io/webnfc/",
    tags: ["Utility", "Web NFC", "IoT"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-20 bg-secondary/50 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Current Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore what I&apos;ve been working on lately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-border bg-background rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {project.image ? (
                <div className="w-full h-48 rounded-lg mb-6 overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 w-full h-48 rounded-lg mb-6 flex items-center justify-center text-4xl group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-muted-foreground opacity-30 select-none">
                    {project.title.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-4">
                  {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Site
                    </Link>
                  )}
                  {project.repo && (
                    <Link href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
