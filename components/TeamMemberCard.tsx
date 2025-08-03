
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeamMember } from '../types';

const getInitials = (name: string): string => {
  const words = name.split(' ').filter(Boolean);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

const createProfileUrlFromName = (name: string): string => {
  const slug = name
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove all non-word chars except hyphens
  return `https://vytruve.org/${slug}`;
};


const SocialIcon: React.FC<{
  href: string;
  children: React.ReactNode;
  variants: any;
  position: string;
}> = ({ href, children, variants, position }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`absolute z-0 w-14 h-14 bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-indigo-600 transition-all duration-300 shadow-lg ${position}`}
    >
        {children}
    </motion.a>
);

const TeamMemberCircle: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const initials = getInitials(member.name);
  const profileUrl = createProfileUrlFromName(member.name);

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 25 } },
  };

  return (
    <motion.div
        className="relative flex flex-col items-center gap-4"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label={member.name}
    >
      <div className="relative w-44 h-44 flex items-center justify-center">
        <AnimatePresence>
            {isHovered && (
            <>
                <SocialIcon href={member.githubUrl} variants={iconVariants} position="-top-4 -left-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </SocialIcon>
                <SocialIcon href={member.linkedinUrl} variants={iconVariants} position="-bottom-4 -right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </SocialIcon>
            </>
            )}
        </AnimatePresence>

        <motion.a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 block w-40 h-40 rounded-full cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            aria-label={`View profile for ${member.name}`}
        >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-700 to-purple-800 flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
                <span className="text-5xl font-extrabold text-white/90 select-none" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    {initials}
                </span>
            </div>
        </motion.a>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-indigo-300 font-medium">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCircle;