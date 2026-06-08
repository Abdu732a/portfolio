import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 📷 Local Image Asset Mapper Object
const projectImages = {
    "nuvlo": ["/images/nulvo1.png", "/images/nulvo2.png", "/images/nulvo3.png"],
    "bright": ["/images/bright1.png", "/images/bright2.png"],
    "quran": ["/images/quran1.jpg", "/images/quran2.jpg", "/images/quran3.jpg"]
};

// 🗺️ Lightbox Modal Component for Fullscreen Viewing
function Lightbox({ screenshots, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic Hover slideshow inside the Lightbox modal view
    useEffect(() => {
        if (!isHovered) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 1200);

        return () => clearInterval(interval);
    }, [isHovered, screenshots.length]);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 select-none"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-[#00cc66] text-3xl font-mono transition-colors p-2 z-50"
                aria-label="Close custom view"
            >
                ✕
            </button>

            {/* Main Interactive Slide Arena */}
            <div className="relative max-w-4xl w-full aspect-video flex items-center justify-center">
                {/* Left navigation arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:-left-16 bg-[#111116]/80 border border-[#1e1e28] hover:border-[#00cc66] text-white p-3 rounded-full transition-all text-xl z-50 font-mono"
                >
                    &lt;
                </button>

                {/* Lightbox Focus Image Container */}
                <div
                    className="w-full h-full overflow-hidden rounded-xl border border-[#222234] bg-[#0e0e12]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img
                        src={screenshots[currentIndex]}
                        alt="Zoomed preview"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right navigation arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-2 md:-right-16 bg-[#111116]/80 border border-[#1e1e28] hover:border-[#00cc66] text-white p-3 rounded-full transition-all text-xl z-50 font-mono"
                >
                    &gt;
                </button>
            </div>

            {/* Bottom Counter Indicator */}
            <div className="mt-4 font-mono text-xs text-[#5c5c6d]">
                {currentIndex + 1} / {screenshots.length}
            </div>
        </motion.div>
    );
}

// Sub-component to manage screens, hovers, and bounds per individual project item
function ProjectCard({ project, index }) {
    const titleKey = project.title.toLowerCase();
    let screenshots = projectImages.nuvlo;

    if (titleKey.includes('bright')) screenshots = projectImages.bright;
    if (titleKey.includes('quran') || titleKey.includes('hilal')) screenshots = projectImages.quran;

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Runs a slow, smooth cyclical interval exclusively while the element is hovered
    useEffect(() => {
        if (!isHovered) return;
        const interval = setInterval(() => {
            setCurrentImgIndex((prev) => (prev + 1) % screenshots.length);
        }, 1200);

        return () => clearInterval(interval);
    }, [isHovered, screenshots.length]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-[#111116] border border-[#1e1e28] hover:border-[#00cc66] rounded-xl p-4 lg:p-5 flex flex-col justify-between transition-all duration-300 group shadow-lg max-h-[85vh] sm:max-h-none overflow-y-auto sm:overflow-visible lg:max-h-[520px]"
            >
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono bg-[#181824] border border-[#222234] text-[#00cc66] px-2.5 py-1 rounded-md">
                            {project.stack_type}
                        </span>
                        <span className="font-mono text-xs text-[#3a3a4c]">0{index + 1}.sh</span>
                    </div>

                    {/* 🖥️ Interactive Screenshot Showcase Section */}
                    <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative mt-1 overflow-hidden rounded-lg bg-[#0e0e12] border border-[#181822] group-hover:border-[#222330] transition-colors aspect-video cursor-zoom-in"
                    >
                        <img
                            src={screenshots[currentImgIndex]}
                            alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                            className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                            onError={(e) => {
                                e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop`;
                            }}
                        />

                        {/* Tiny Dots UI */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            {screenshots.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setCurrentImgIndex(dotIdx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImgIndex === dotIdx
                                        ? 'bg-[#00cc66] scale-125'
                                        : 'bg-[#5c5c6d] hover:bg-white'
                                        }`}
                                    aria-label={`Go to screenshot ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00cc66] transition-colors pt-1">
                        {project.title}
                    </h3>

                    {/* ⚡ Handled line clamping for clean, identical card proportions on desktop layouts */}
                    <p className="text-xs sm:text-sm text-[#88899a] leading-relaxed line-clamp-3 lg:line-clamp-4">
                        {project.summary}
                    </p>

                    <ul className="space-y-1 pt-1 grid grid-cols-1 gap-x-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-[11px] font-mono text-[#5c5c6d] flex items-start gap-2 truncate">
                                <span className="text-[#00cc66] flex-shrink-0">•</span> {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 border-t border-[#181820] pt-3 mt-4 font-mono text-xs">
                    <a href={project.live_link} target="_blank" rel="noreferrer" className="text-white hover:text-[#00cc66] transition-colors">[View App]</a>
                    <a href={project.github_link} target="_blank" rel="noreferrer" className="text-[#5c5c6d] hover:text-white transition-colors">[Source Code]</a>
                </div>
            </motion.div>

            {/* Handles mounting and unmounting animations safely */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <Lightbox
                        screenshots={screenshots}
                        initialIndex={currentImgIndex}
                        onClose={() => setIsLightboxOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default function Projects({ projects, skills }) {
    return (
        <div className="space-y-20 md:space-y-32 max-w-7xl mx-auto px-4">
            {/* Projects Gallery */}
            <section id="projects" className="space-y-6 sm:space-y-8">
                <div className="border-b border-[#181820] pb-4">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">// 02 / selected_production_software</h2>
                </div>

                {/* ⚡ Modified to grid-cols-1 on phone, md:grid-cols-2 on tablet, and lg:grid-cols-3 on PC desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id || i} project={project} index={i} />
                    ))}
                </div>
            </section>

            {/* Technical Skill Matrix */}
            <section id="skills" className="space-y-8">
                <div className="border-b border-[#181820] pb-4">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">// 03 / core_technical_capabilities</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="bg-[#111116]/40 border border-[#181820] rounded-lg p-4 sm:p-5 space-y-3 sm:space-y-4">
                            <h3 className="font-mono text-[11px] sm:text-xs text-[#5c5c6d] uppercase tracking-wider">// {category}</h3>
                            <ul className="space-y-2 font-mono text-xs sm:text-sm">
                                {skillList.map((skill, idx) => (
                                    <li key={idx} className="text-white flex items-center gap-2 truncate">
                                        <span className="w-1 h-1 bg-[#00cc66] rounded-full flex-shrink-0"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}