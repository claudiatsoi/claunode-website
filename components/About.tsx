'use client';

import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    role: "Account & Project Manager",
    focus: "Event SaaS Project Management",
    location: "Based in Hong Kong"
  },
  {
    role: "Vibe Coder",
    focus: "New Business Ideas",
    location: "Based in Hong Kong"
  },
  {
    role: "Language Specialist",
    focus: "Cantonese",
    location: "Based in Hong Kong"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed max-w-none"
        >
          <p className="mb-6">
            Hi, I&apos;m Claudia. I&apos;m a multifaceted professional combining expertise in project management with a passion for web development and linguistics.
          </p>
          <p className="mb-6">
            As the founder of <strong>CantOne Culture</strong>, I&apos;ve led initiatives to bridge communication gaps through language education. My technical journey is driven by a desire to build intuitive, user-centric solutions that make a real impact.
          </p>
          <p>
            When I&apos;m not coding or managing projects, you can find me exploring new technologies, tutoring languages, or working on community-driven initiatives like AM.Pause.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
          {roles.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              className="space-y-4"
            >
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Role</h3>
                <p className="text-muted-foreground">{item.role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Focus</h3>
                <p className="text-muted-foreground">{item.focus}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
