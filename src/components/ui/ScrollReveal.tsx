'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({ 
  children, 
  className = '',
  threshold = 0.1 
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  );
}
