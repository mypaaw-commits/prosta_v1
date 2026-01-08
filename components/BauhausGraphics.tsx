import React from 'react';
import { motion } from 'framer-motion';

export const Circle: React.FC<{ className?: string, delay?: number }> = ({ className = "", delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay, type: "spring" }}
    viewport={{ once: true }}
    className={`rounded-full ${className}`}
  />
);

export const Square: React.FC<{ className?: string, delay?: number }> = ({ className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay, ease: "circOut" }}
    viewport={{ once: true }}
    className={`${className}`}
  />
);

export const Triangle: React.FC<{ className?: string, delay?: number }> = ({ className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "backOut" }}
    viewport={{ once: true }}
    className={`w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86.6px] border-l-transparent border-r-transparent border-b-current ${className}`}
    style={{ width: 0, height: 0 }} 
  />
);

export const HalfCircle: React.FC<{ className?: string, direction?: 'up' | 'down' | 'left' | 'right', delay?: number }> = ({ className = "", direction = 'up', delay = 0 }) => {
  const borderRadius = {
    up: '100px 100px 0 0',
    down: '0 0 100px 100px',
    left: '100px 0 0 100px',
    right: '0 100px 100px 0'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className={`${className}`}
      style={{ borderRadius: borderRadius[direction] }}
    />
  );
};