'use client';

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Get in Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 py-8 items-center">
          <Link 
            href="mailto:contact@claunode.com"
            className="flex flex-col items-center gap-4 group p-8 rounded-2xl hover:bg-secondary/50 transition-colors duration-300 w-full sm:w-64"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors"
            >
              <Mail className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="font-medium text-foreground">Email Me</span>
          </Link>

          <Link 
            href="https://www.linkedin.com/in/man-yee-claudia-tsoi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group p-8 rounded-2xl hover:bg-secondary/50 transition-colors duration-300 w-full sm:w-64"
          >
            <motion.div 
               whileHover={{ scale: 1.1, rotate: -5 }}
               className="bg-blue-500/10 p-4 rounded-full group-hover:bg-blue-500/20 transition-colors"
            >
              <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="font-medium text-foreground">LinkedIn</span>
          </Link>

          <Link 
            href="https://github.com/claudiatsoi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group p-8 rounded-2xl hover:bg-secondary/50 transition-colors duration-300 w-full sm:w-64"
          >
            <motion.div 
               whileHover={{ scale: 1.1, rotate: 5 }}
               className="bg-gray-800/10 p-4 rounded-full group-hover:bg-gray-800/20 transition-colors dark:bg-white/10 dark:group-hover:bg-white/20"
            >
              <Github className="h-8 w-8 text-gray-900 dark:text-white" />
            </motion.div>
            <span className="font-medium text-foreground">GitHub</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
