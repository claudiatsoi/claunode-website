'use client';

import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    role: "Account & Project Manager",
    focus: "Key Account Management, BD Developement and Event Management",
    location: "Based in Hong Kong"
  },
  {
    role: "Vibe Coder",
    focus: "New Business Ideas & Full-Stack Development",
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
    <section id="about" className="py-24 scroll-mt-20 bg-background px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
        >
          About me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed max-w-none"
        >
          <p className="mb-6">
            Multifaceted professional combining expertise in project management with a passion for web development and linguistics. Based in <strong>Hong Kong</strong>.
          </p>
          <p className="mb-6">
            Currently working as an <strong>Account &amp; Project Manager</strong> in Event SaaS. Founder of <strong>CantOne Culture</strong>, leading initiatives to bridge communication gaps through Cantonese language education.
          </p>
          <p>
            Background in <strong>Neuroscience &amp; Linguistics</strong>, with a drive to build intuitive, user-centric technical solutions.
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

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border space-y-6"
        >
          <h3 className="text-xl font-semibold text-foreground">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">Project & Account Management</p>
              <p>Event SaaS · Stakeholder Communication · Agile workflows</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Web Development</p>
              <p>Next.js · React · TypeScript · Tailwind CSS · Supabase · Firebase</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Languages</p>
              <p>English · Cantonese · Mandarin</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Education</p>
              <p>Neuroscience &amp; Linguistics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
