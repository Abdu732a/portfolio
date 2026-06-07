import React from 'react';
import { DATA } from './data';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f4f6] selection:bg-[#00cc66] selection:text-black antialiased font-sans">

      {/* Dynamic Header Component */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#181820] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="font-mono text-sm font-bold tracking-tight text-white flex items-center gap-2 group">
            <span className="w-2 h-2 bg-[#00cc66] rounded-full group-hover:scale-125 transition-transform"></span>
            <span>{DATA.developer_profile.first_name.toLowerCase()}<span className="text-[#00cc66]">.dev()</span></span>
          </a>
          <div className="flex items-center gap-6 font-mono text-xs text-[#88899a]">
            <a href="#about" className="hover:text-white transition-colors">_about</a>
            <a href="#projects" className="hover:text-white transition-colors">_projects</a>
            <a href="#skills" className="hover:text-white transition-colors">_skills</a>
            <a href="#connect" className="bg-[#12121a] border border-[#222330] px-4 py-1.5 text-[#00cc66] hover:bg-[#00cc66] hover:text-black font-bold transition-all rounded-sm">
              _hire_me
            </a>
          </div>
        </div>
      </nav>

      {/* Structured Core Layout Canvas */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">
        <About profile={DATA.developer_profile} />
        <Projects projects={DATA.featured_projects} skills={DATA.skills} />
        <Contact contact={DATA.developer_profile.contact} />
      </div>

      {/* Global Sandbox Environment Footer */}
      <footer className="border-t border-[#181820] mt-24 py-8 text-center font-mono text-xs text-[#3a3a4c]">
        © {new Date().getFullYear()} ABDULAZIZ KEDIR • CORE ENVIRONMENT ACTIVE
      </footer>
    </div>
  );
}