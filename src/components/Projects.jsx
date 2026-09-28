import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 📷 Local Image Asset Mapper
const projectImages = {
    "bright": ["/images/hudhud3.png", "/images/hudhud4.png", "/images/hudhud1.png", "/images/hudhud2.png"],
    "nuvlo": ["/images/attendance.png", "/images/attendance2.png", "/images/attendance3.png", "/images/attendance4.png"],
    "quran": ["/images/quran1.jpg", "/images/quran2.jpg", "/images/quran3.jpg"]
};

function Lightbox({ screenshots, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isHovered, setIsHovered] = useState(false);

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
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-[#00cc66] text-3xl font-mono transition-colors p-2 z-50"
                aria-label="Close custom view"
            >
                ✕
            </button>

            <div className="relative max-w-4xl w-full aspect-video flex items-center justify-center">
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:-left-16 bg-[#111116]/80 border border-[#1e1e28] hover:border-[#00cc66] text-white p-3 rounded-full transition-all text-xl z-50 font-mono"
                >
                    &lt;
                </button>

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

                <button
                    onClick={handleNext}
                    className="absolute right-2 md:-right-16 bg-[#111116]/80 border border-[#1e1e28] hover:border-[#00cc66] text-white p-3 rounded-full transition-all text-xl z-50 font-mono"
                >
                    &gt;
                </button>
            </div>

            <div className="mt-4 font-mono text-xs text-[#5c5c6d]">
                {currentIndex + 1} / {screenshots.length}
            </div>
        </motion.div>
    );
}

function ProjectCard({ project, index }) {
    // 🎯 Positional assignment: 1st card -> Bright, 2nd card -> Nuvlo, 3rd card -> Quran
    let screenshots = projectImages.bright;
    if (index === 1) screenshots = projectImages.nuvlo;
    if (index === 2) screenshots = projectImages.quran;

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
                className="bg-[#0f0f14] border border-[#1e1e2d] hover:border-[#00cc66]/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group shadow-xl hover:shadow-[#00cc66]/5 relative overflow-hidden"
            >
                {/* Subtle Glow Accent Header */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00cc66]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                    {/* Header Details */}
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono tracking-wider font-semibold bg-[#161622] text-[#00cc66] border border-[#00cc66]/20 px-3 py-1 rounded-full uppercase">
                            {project.stack_type}
                        </span>
                        <span className="font-mono text-xs text-[#4a4a60] font-semibold">0{index + 1}.sh</span>
                    </div>

                    {/* Screenshot Showcase Container */}
                    <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative mt-2 overflow-hidden rounded-xl bg-[#09090d] border border-[#1a1a26] group-hover:border-[#2a2a3e] transition-colors aspect-video cursor-zoom-in group/img"
                    >
                        <img
                            src={screenshots[currentImgIndex]}
                            alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                            className="w-full h-full object-cover object-top opacity-90 group-hover/img:scale-105 transition-all duration-500"
                            onError={(e) => {
                                e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop`;
                            }}
                        />

                        {/* Dot Navigation */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
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
                                        : 'bg-white/30 hover:bg-white'
                                        }`}
                                    aria-label={`Go to screenshot ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00cc66] transition-colors">
                        {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#8f90a2] leading-relaxed line-clamp-3">
                        {project.summary}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-1.5 pt-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-[11px] font-mono text-[#6c6d83] flex items-center gap-2 truncate">
                                <span className="w-1.5 h-1.5 bg-[#00cc66] rounded-full flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center gap-3 border-t border-[#1a1a26] pt-4 mt-5 font-mono text-xs">
                    <a
                        href={project.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 rounded-lg bg-[#161622] hover:bg-[#00cc66] text-white hover:text-black font-semibold transition-all border border-[#222234] hover:border-[#00cc66]"
                    >
                        Live App ↗
                    </a>
                    <a
                        href={project.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 rounded-lg bg-transparent hover:bg-[#161622] text-[#7a7b93] hover:text-white transition-all border border-[#1a1a26] hover:border-[#2e2e42]"
                    >
                        Code ↗
                    </a>
                </div>
            </motion.div>

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
            <section id="projects" className="space-y-6 sm:space-y-8">
                <div className="border-b border-[#181820] pb-4">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">
                        Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id || i} project={project} index={i} />
                    ))}
                </div>
            </section>

            <section id="skills" className="space-y-8">
                <div className="border-b border-[#181820] pb-4">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">
                        Skills
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="bg-[#0f0f14] border border-[#1e1e2d] rounded-xl p-5 space-y-3">
                            <h3 className="font-mono text-[11px] text-[#5c5c6d] uppercase tracking-wider">// {category}</h3>
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