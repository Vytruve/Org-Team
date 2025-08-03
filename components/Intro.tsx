import React from 'react';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const AnimatedLogo: React.FC = () => (
  <motion.a
    href="https://vytruve.org"
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
  >
    <svg className="h-28 w-28 text-white mb-6 animate-[float-up-down_6s_ease_in_out_infinite] mx-auto" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 40L20 0L40 40H30L20 15L10 40H0Z"></path>
    </svg>
  </motion.a>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const Intro: React.FC = () => {
  return (
    <section className="flex-grow flex items-center justify-center text-center py-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto"
      >
        <AnimatedLogo />
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter"
          style={{ textShadow: '0 0 20px rgba(128, 90, 213, 0.5)' }}
        >
          Vytruve Team
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Conheça as mentes que constroem o futuro.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Intro;