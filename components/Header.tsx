import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VytruveLogo: React.FC = () => (
  <a href="https://vytruve.org" target="_blank" rel="noopener noreferrer" aria-label="Vytruve Homepage">
    <svg className="h-8 w-8 text-white" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 40L20 0L40 40H30L20 15L10 40H0Z"></path>
    </svg>
  </a>
);

const navLinks = [
  { name: "Truvesoftware", href: "https://truvesoftware.com" },
  { name: "vyAI", href: "https://vytruve.org/vyAI" },
  { name: "Vyst - Forge", href: "https://vytruve.org/Vyst-Forge" },
  { name: "About Us", href: "#" },
];

const mobileNavLinks = [...navLinks, { name: "Contato", href: "#" }];


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between bg-black/20 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 shadow-lg">
            <VytruveLogo />
            <nav className="hidden md:flex items-center gap-8">
               {navLinks.map((item) => (
                <a key={item.name} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">{item.name}</a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                Contato
              </a>
              <button onClick={toggleMenu} className="md:hidden z-50 text-white">
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="space-y-1.5"
                >
                  <motion.span
                    variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
                    className="block h-0.5 w-6 bg-current"
                  />
                  <motion.span
                    variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                    className="block h-0.5 w-6 bg-current"
                  />
                  <motion.span
                    variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }}
                    className="block h-0.5 w-6 bg-current"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 flex items-center justify-center"
            onClick={toggleMenu}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-10 text-2xl"
            >
              {mobileNavLinks.map((item) => (
                <motion.a key={item.name} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" variants={itemVariants} className="text-gray-300 hover:text-white transition-colors duration-300">{item.name}</motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;