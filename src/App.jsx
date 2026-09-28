import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { DATA } from './data';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll state for navbar glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07070a] text-[#f4f4f6] selection:bg-[#00cc66] selection:text-black antialiased font-sans relative">

      {/* Global Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#0f0f14',
            color: '#fff',
            border: '1px solid #1e1e2d',
            borderRadius: '12px',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.8)',
          }
        }}
      />

      {/* Modern Glassmorphic Top Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#07070a]/80 backdrop-blur-xl border-b border-[#1e1e2d] py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* Logo / Brand Indicator */}
          <a href="#" className="font-mono text-lg font-bold tracking-tight text-white flex items-center gap-3 group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cc66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00cc66]"></span>
            </span>
            <span className="group-hover:text-[#00cc66] transition-colors">
              {DATA.developer_profile.first_name.toLowerCase()}<span className="text-[#00cc66]">.dev()</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase">
            <a href="#about" className="text-[#8f90a2] hover:text-[#00cc66] transition-colors flex items-center gap-1.5">
              <span className="text-[#00cc66]/60">//</span> 01.about
            </a>
            <a href="#projects" className="text-[#8f90a2] hover:text-[#00cc66] transition-colors flex items-center gap-1.5">
              <span className="text-[#00cc66]/60">//</span> 02.projects
            </a>
            <a href="#skills" className="text-[#8f90a2] hover:text-[#00cc66] transition-colors flex items-center gap-1.5">
              <span className="text-[#00cc66]/60">//</span> 03.skills
            </a>
            <a
              href="#connect"
              className="px-4 py-2 rounded-lg bg-[#00cc66]/10 hover:bg-[#00cc66] text-[#00cc66] hover:text-black font-semibold border border-[#00cc66]/30 hover:border-[#00cc66] transition-all duration-300 shadow-sm hover:shadow-[#00cc66]/20"
            >
              Contact_Me ↗
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#8f90a2] hover:text-white p-2 rounded-lg bg-[#0f0f14] border border-[#1e1e2d] focus:outline-none z-50 transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 transform origin-left ${isMenuOpen ? 'rotate-45 translate-x-0.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 transform origin-left ${isMenuOpen ? '-rotate-45 translate-x-0.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`md:hidden fixed inset-x-0 top-[61px] bg-[#09090d]/95 backdrop-blur-2xl border-b border-[#1e1e2d] transition-all duration-300 ease-in-out overflow-hidden z-40 ${isMenuOpen ? 'max-h-96 py-6 px-6 opacity-100 shadow-2xl' : 'max-h-0 py-0 px-6 opacity-0 pointer-events-none'
          }`}>
          <div className="flex flex-col gap-4 font-mono text-sm">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#a0a0b8] hover:text-[#00cc66] py-2 transition-colors border-b border-[#181824] flex items-center justify-between"
            >
              <span>_about</span>
              <span className="text-[10px] text-[#4a4a60]">01</span>
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#a0a0b8] hover:text-[#00cc66] py-2 transition-colors border-b border-[#181824] flex items-center justify-between"
            >
              <span>_projects</span>
              <span className="text-[10px] text-[#4a4a60]">02</span>
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#a0a0b8] hover:text-[#00cc66] py-2 transition-colors border-b border-[#181824] flex items-center justify-between"
            >
              <span>_skills</span>
              <span className="text-[10px] text-[#4a4a60]">03</span>
            </a>
            <a
              href="#connect"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-[#00cc66] text-black font-semibold w-full py-3 rounded-xl transition-all shadow-lg shadow-[#00cc66]/20 block"
            >
              Contact Me ↗
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay for Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content Sections Container */}
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-24 md:space-y-36 transition-all duration-300 ${isMenuOpen ? 'blur-sm pointer-events-none opacity-50' : 'blur-none'
        }`}>
        {/* Section 1: Hero & About Profile */}
        <About profile={DATA.developer_profile} />

        {/* Section 2: Projects Gallery & Capabilities */}
        <Projects projects={DATA.featured_projects} skills={DATA.skills} />

        {/* Section 3: Contact Gateway & Channels */}
        <Contact contact={DATA.developer_profile.contact} />
      </main>

      {/* Footer Bar */}
      <footer className={`border-t border-[#1e1e2d] bg-[#050508] mt-24 py-10 font-mono text-xs text-[#5c5c70] transition-all duration-300 ${isMenuOpen ? 'blur-sm pointer-events-none opacity-50' : 'blur-none'
        }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00cc66]"></span>
            <span>© {new Date().getFullYear()} • ABDULAZIZ KEDIR</span>
          </div>
          <div className="text-[11px] text-[#3e3e50]">
            Built with React, Vite & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}