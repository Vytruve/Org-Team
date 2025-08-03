import React from 'react';

const VytruveLogo: React.FC = () => (
  <a href="https://vytruve.org" target="_blank" rel="noopener noreferrer" aria-label="Vytruve Homepage">
    <svg className="h-10 w-10 text-white" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 40L20 0L40 40H30L20 15L10 40H0Z"></path>
    </svg>
  </a>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const solutionsLinks = [
  { name: "Truvesoftware", href: "https://truvesoftware.com" },
  { name: "vyAI", href: "https://vytruve.org/vyAI" },
  { name: "Vyst - Forge", href: "https://vytruve.org/Vyst-Forge" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1">
            <VytruveLogo />
            <p className="mt-4 text-gray-400 text-sm">
              Construindo o futuro com tecnologia e inovação.
            </p>
            <div className="flex space-x-4 mt-6">
                <SocialIcon href="https://github.com/Vytruve">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </SocialIcon>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-white font-semibold tracking-wider">Soluções</h3>
            <ul className="mt-4 space-y-3">
              {solutionsLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold tracking-wider">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-gray-400">contact@vytruve.org</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vytruve. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;