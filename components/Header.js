import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FadeAnimation, LineAnimation } from './Animations';

const Header = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header {...FadeAnimation} className="fixed left-0 -top-12 z-50 flex w-full justify-between pt-24 md:top-0">
      <div className="flex w-1/2 items-baseline">
        {/* <div className="w-3/5 md:w-2/5">
          <motion.div {...LineAnimation} animate={{ width: '25%' }} className="line-header mb-1 h-1" />
          <motion.div {...LineAnimation} animate={{ width: '100%' }} className="line-header mb-1 h-1" />
          <motion.div {...LineAnimation} animate={{ width: '67%' }} className="line-header h-1" />
        </div> */}
      </div>

      <div className="relative flex w-1/2 flex-col items-end justify-end md:flex-row">
        <div onClick={() => setOpen(!open)} className={`mr-12 flex w-8 cursor-pointer flex-col items-end md:hidden ${!open ? '' : 'hamburger-active'}`}>
          <div className="hamburger-line w-1/2 bg-indigo-700" />
          <div className="hamburger-line w-full bg-indigo-700" />
          <div className="hamburger-line w-2/3 bg-indigo-700" />
        </div>

        <div className={`absolute top-12 right-0 md:relative md:top-0 md:mr-10 md:w-11/12 lg:mr-40 lg:w-1/2 ${!open ? 'hide' : 'show'}`}>
          <nav className="navbar bg-gradient-to-r from-indigo-200 to-pink-200 border-2 border-indigo-700 neo-card">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path}>
                <a className={`nav-items font-medium transition-colors ${router.pathname === link.path ? 'text-pink-600 font-bold' : 'text-indigo-900 hover:text-purple-600'}`}>{link.title}</a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
