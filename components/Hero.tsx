'use client';

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          Hi, I&apos;m Claudia.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto"
        >
          Account & Project Manager | Vibe Web Developer | Language Tutor | Founder of CantOne Culture
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Leveraging my background in Neuroscience, Linguistics and project management to build intuitive technical solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            See What I&apos;m Building
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors font-medium"
          >
            Get in Touch
            <Mail className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
