import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { LetterSwapForward } from './ui/letter-swap';

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' },
  ];

  const handleScroll = (e, path) => {
    e.preventDefault();
    setOpen(false);
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-primary-dark bg-background/95 backdrop-blur-sm transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-6 md:px-12">
        {/* Logo Area */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span
              className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground cursor-pointer hover:text-primary transition-colors"
              onClick={(e) => handleScroll(e, '#home')}
            >
              RASYA<span className="text-primary">.DEV</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              onClick={(e) => handleScroll(e, link.path)}
            >
              <div
                className={`
                  cursor-pointer px-6 py-2 font-bold uppercase tracking-wider border-transparent transition-all
                  text-foreground hover:border-primary-dark hover:bg-foreground hover:text-primary-dark hover:shadow-neo rounded-md
                `}
              >
                <LetterSwapForward
                  label={link.title}
                  staggerFrom="first"
                  className="font-bold"
                />
              </div>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 border-primary-dark bg-foreground shadow-neo active:shadow-none active:translate-y-1 transition-all rounded-md"
        >
          <div className={`w-6 h-0.5 bg-primary-dark mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-primary-dark mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-primary-dark transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-primary-dark bg-background p-6 flex flex-col gap-4 shadow-lg border-t"
        >
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              onClick={(e) => handleScroll(e, link.path)}
            >
              <div className="w-full neo-brutal-button text-center rounded-md">
                {link.title}
              </div>
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
