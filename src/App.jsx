import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { DATA } from './data';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  // State controller to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f4f6] selection:bg-[#00cc66] selection:text-black antialiased font-sans relative">

      {/* Global Toast Notification Container Injector */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '6px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.7)',
          }
        }}
      />

      {/* Dynamic Header / Navigation Component */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#181820] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo Brand Title */}
          <a href="#" className="font-mono text-xl font-bold tracking-tight text-white flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 bg-[#00cc66] rounded-full group-hover:scale-125 transition-transform" />
            <span>{DATA.developer_profile.first_name.toLowerCase()}<span className="text-[#00cc66]">.dev()</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 font-mono text-sm text-[#88899a]">
            <a href="#about" className="hover:text-white transition-colors">_about</a>
            <a href="#projects" className="hover:text-white transition-colors">_projects</a>
            <a href="#skills" className="hover:text-white transition-colors">_skills</a>
            <a href="#connect" className="bg-[#12121a] border border-[#222330] px-4 py-2 text-[#00cc66] hover:bg-[#00cc66] hover:text-black font-bold transition-all rounded-sm">
              Hire_me
            </a>
          </div>

          {/* Mobile Hamburger Button Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#88899a] hover:text-white focus:outline-none p-1 z-50"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 transform origin-left ${isMenuOpen ? 'rotate-45 translate-x-1' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 transform origin-left ${isMenuOpen ? '-rotate-45 translate-x-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Panel Menu Interface Layout */}
        <div className={`md:hidden fixed inset-x-0 top-[69px] bg-[#0a0a0c]/95 backdrop-blur-lg border-b border-[#181820] transition-all duration-300 ease-in-out transform overflow-hidden z-40 ${isMenuOpen ? 'opacity-100 max-h-screen py-6 px-6' : 'opacity-0 max-h-0 pointer-events-none'}`}>
          <div className="flex flex-col gap-5 font-mono text-base text-[#88899a]">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00cc66] py-2 transition-colors border-b border-[#12121a]"
            >
              <span className="text-[#3a3a4c] mr-2">01.</span>_about
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00cc66] py-2 transition-colors border-b border-[#12121a]"
            >
              <span className="text-[#3a3a4c] mr-2">02.</span>_projects
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00cc66] py-2 transition-colors border-b border-[#12121a]"
            >
              <span className="text-[#3a3a4c] mr-2">03.</span>_skills
            </a>
            <a
              href="#connect"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-[#12121a] border border-[#222330] w-full py-3 text-[#00cc66] hover:bg-[#00cc66] hover:text-black font-bold transition-all rounded-sm block"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* 🛑 Backdrop Overlay: Automatically closes menu if user clicks outside on blurred area */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Structured Core Layout Canvas */}
      {/* ⚡ Added dynamic blur and pointer event locks when menu is open */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12 space-y-20 md:space-y-32 transition-all duration-300 ${isMenuOpen ? 'blur-md pointer-events-none opacity-40' : 'blur-none'}`}>
        {/* Section 1: Hero & About Matrix */}
        <About profile={DATA.developer_profile} />

        {/* Section 2: Projects Showcase & Tech Skills Matrix */}
        <Projects projects={DATA.featured_projects} skills={DATA.skills} />

        {/* Section 3: Split Contact Icons & Form Gateway */}
        <Contact contact={DATA.developer_profile.contact} />
      </div>

      {/* Global Sandbox Environment Footer */}
      {/* ⚡ Added matching blur behavior to the footer */}
      <footer className={`border-t border-[#181820] mt-24 py-8 text-center font-mono text-xs text-[#3a3a4c] px-4 transition-all duration-300 ${isMenuOpen ? 'blur-md pointer-events-none opacity-40' : 'blur-none'}`}>
        © {new Date().getFullYear()} • ABDULAZIZ KEDIR •
      </footer>
    </div>
  );
}