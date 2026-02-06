import Link from 'next/link';
import { useState, useRef } from 'react';
import { CornerBracket } from '@/components/ui/CornerBracket';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [showTerminalModal, setShowTerminalModal] = useState(false);
  const terminalRef = useRef(null);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTerminalSubmit = (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.trim().toLowerCase();
      if (command === 'neofetch' || command === 'whoami') {
        setShowTerminalModal(true);
        setTerminalInput('');
      } else if (command === 'clear') {
        setTerminalInput('');
      } else if (command === 'help') {
        // simple feedback for help
        setTerminalInput('try: neofetch');
        setTimeout(() => setTerminalInput(''), 2000);
      }
    }
  };

  return (
    <footer className="relative bg-primary-dark text-white pt-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">

        {/* Section 1: Brand */}
        <div className="p-10 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-6xl font-black tracking-tighter mb-6 relative inline-block">
              RASYA
              <span className="absolute -top-2 -right-4 text-xs font-mono text-primary-light opacity-50">v2.0</span>
            </h2>
            <p className="text-xl font-medium opacity-80 max-w-xs mb-8">
              Crafting digital experiences with brutal precision and creative chaos.
            </p>

            {/* Mini Terminal */}
            <div className="bg-black/40 border border-white/10 rounded-md p-3 font-mono text-sm relative group">
              <div className="flex gap-1.5 mb-2 opacity-50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleTerminalSubmit}
                  placeholder="try 'neofetch'..."
                  className="bg-transparent border-none outline-none text-white/90 placeholder:text-white/20 w-full"
                />
              </div>
              <CornerBracket position="bottom-right" size="w-2 h-2" color="border-white/30" />
            </div>
          </div>
          <div className="mt-10">
            <span className="block text-sm opacity-50 font-mono">© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>
        </div>

        {/* Section 2: Navigation */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-8 text-primary-light font-mono box-decoration-clone">./EXPLORE</h3>
          <nav className="flex flex-col gap-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
              >
                <span className="text-3xl font-black hover:text-primary hover:translate-x-4 transition-all cursor-pointer uppercase inline-block group relative">
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-4 text-primary transition-opacity duration-300">›</span>
                  {item}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Section 3: Socials */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-8 text-primary-light font-mono">./CONNECT</h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="neo-brutal-button bg-foreground !text-primary-dark hover:bg-primary-light group relative overflow-hidden">
              <span className="relative z-10">GITHUB</span>
              <div className="absolute inset-0 bg-primary-light/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a href="#" className="neo-brutal-button bg-foreground !text-primary-dark hover:bg-primary-light group relative overflow-hidden">
              <span className="relative z-10">LINKEDIN</span>
              <div className="absolute inset-0 bg-primary-light/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a href="#" className="neo-brutal-button bg-foreground !text-primary-dark hover:bg-primary-light group relative overflow-hidden">
              <span className="relative z-10">INSTAGRAM</span>
              <div className="absolute inset-0 bg-primary-light/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Section 4: CTA */}
        <div className="p-10 flex flex-col justify-center items-center bg-primary text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>
          <CornerBracket position="top-left" size="w-6 h-6" color="border-white" />
          <CornerBracket position="bottom-right" size="w-6 h-6" color="border-white" />

          <h3 className="text-4xl font-black text-center mb-6 leading-tight relative z-10">HAVE A PROJECT?</h3>
          <button
            onClick={(e) => handleScroll(e, 'contact')}
            className="relative z-10 px-8 py-4 bg-primary-dark text-white text-xl font-bold border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase rounded-md"
          >
            Let&apos;s Talk
          </button>

          {/* Static decorative chart */}
          <div className="absolute bottom-0 left-0 w-full h-12 flex items-end opacity-20 gap-1 pointer-events-none">
            {[40, 60, 30, 80, 50, 90, 70, 40].map((h, i) => (
              <div key={i} className="bg-white w-full" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="overflow-hidden py-2 bg-black border-t border-white/10 relative z-10">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-white/50 font-mono text-sm">
          {Array(4).fill("DESIGN :: DEVELOPMENT :: DEPLOYMENT :: STRATEGY :: ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* Neofetch Modal */}
      <AnimatePresence>
        {showTerminalModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setShowTerminalModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1e1e2e] border border-white/20 p-6 rounded-lg max-w-2xl w-full mx-4 shadow-2xl font-mono text-xs md:text-sm text-[#cdd6f4] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-6 bg-[#181825] border-b border-white/10 flex items-center justify-between px-4">
                <span className="text-white/50">rasya@dev:~</span>
                <div className="flex gap-1.5 hover:opacity-100 opacity-70 cursor-pointer" onClick={() => setShowTerminalModal(false)}>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ASCII Art Placeholder */}
                <div className="text-primary font-black leading-none select-none text-[8px] md:text-[10px] whitespace-pre hidden md:block">
                  {`
      .      
     / \\     
    /   \\    
   /     \\   
  /_______\\  
    |   |    
    |   |    
    |___|    
`}
                </div>

                <div className="space-y-1">
                  <div className="flex"><span className="text-primary w-24 font-bold">rasya@dev</span><span className="text-white"></span></div>
                  <div className="w-full h-px bg-white/20 my-2"></div>
                  <div className="flex"><span className="text-primary w-24">OS</span><span>Windows 11 (WSL2)</span></div>
                  <div className="flex"><span className="text-primary w-24">Host</span><span>Rasya.Dev v2.0</span></div>
                  <div className="flex"><span className="text-primary w-24">Kernel</span><span>Next.js 14</span></div>
                  <div className="flex"><span className="text-primary w-24">Uptime</span><span>2 Years</span></div>
                  <div className="flex"><span className="text-primary w-24">Shell</span><span>ZSH 5.9</span></div>
                  <div className="flex"><span className="text-primary w-24">Resolution</span><span>1920x1080</span></div>
                  <div className="flex"><span className="text-primary w-24">DE</span><span>Neo-Brutalism</span></div>
                  <div className="flex"><span className="text-primary w-24">WM</span><span>TailwindCSS</span></div>
                  <div className="flex"><span className="text-primary w-24">Terminal</span><span>Hyper</span></div>
                  <div className="flex"><span className="text-primary w-24">CPU</span><span>Brain v1.0</span></div>
                  <div className="flex"><span className="text-primary w-24">Memory</span><span>Infinite Learning</span></div>
                  <div className="mt-4 flex gap-2">
                    <div className="w-8 h-4 bg-black"></div>
                    <div className="w-8 h-4 bg-red-500"></div>
                    <div className="w-8 h-4 bg-green-500"></div>
                    <div className="w-8 h-4 bg-yellow-500"></div>
                    <div className="w-8 h-4 bg-blue-500"></div>
                    <div className="w-8 h-4 bg-purple-500"></div>
                    <div className="w-8 h-4 bg-cyan-500"></div>
                    <div className="w-8 h-4 bg-white"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
