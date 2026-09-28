import React from 'react';
import { motion } from 'framer-motion';

export default function About({ profile }) {
    return (
        <div className="space-y-20 md:space-y-28 max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <section className="grid md:grid-cols-12 gap-8 lg:gap-12 pt-8 md:pt-12 items-center">
                {/* Left Column: Headline & Key Metrics */}
                <div className="md:col-span-7 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {/* Live Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00cc66]/10 border border-[#00cc66]/20 font-mono text-xs text-[#00cc66]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cc66] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00cc66]"></span>
                            </span>
                            Available for new projects
                        </div>

                        {/* Title & Headline */}
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                            {profile.first_name} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cc66] to-[#00ff88]">
                                {profile.last_name}
                            </span>
                        </h1>

                        <p className="font-mono text-sm sm:text-base text-[#9a9bb0] flex items-center gap-2">
                            <span className="text-[#00cc66] font-bold">&gt;</span> {profile.title} <span className="text-[#4a4a60]">/</span> {profile.sub_title}
                        </p>
                    </motion.div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-[#1e1e2d] pt-6">
                        {profile.metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                className="bg-[#0f0f14] border border-[#1e1e2d] p-4 rounded-xl space-y-1 hover:border-[#00cc66]/30 transition-all"
                            >
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono tracking-tight">
                                    {metric.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-[#6c6d83] uppercase font-mono tracking-wider font-semibold leading-tight">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Code Editor Terminal Component */}
                <div className="md:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0b0b0f] border border-[#1e1e2d] rounded-2xl shadow-2xl overflow-hidden font-mono text-xs relative group hover:border-[#00cc66]/40 transition-all duration-300"
                    >
                        {/* macOS Terminal Window Top Bar */}
                        <div className="bg-[#12121a] px-4 py-3 border-b border-[#1e1e2d] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 hover:opacity-100 transition-opacity"></span>
                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 hover:opacity-100 transition-opacity"></span>
                                <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 hover:opacity-100 transition-opacity"></span>
                            </div>
                            <span className="text-[#5c5c70] text-[11px] font-medium tracking-wide">SYSTEM_MONITOR.ts</span>
                            <span className="text-[#00cc66]/60 text-[10px]">● live</span>
                        </div>

                        {/* Code Content Box */}
                        <div className="p-5 overflow-x-auto custom-scrollbar bg-[#08080c]/80">
                            <pre className="text-[#a0a0b8] leading-relaxed">
                                <code>
                                    <span className="text-[#ff79c6]">const</span> <span className="text-[#50fa7b]">developer</span> = &#123;{"\n"}
                                    {"  "}<span className="text-[#8be9fd]">name</span>: <span className="text-[#f1fa8c]">'Abdulaziz Kedir'</span>,{"\n"}
                                    {"  "}<span className="text-[#8be9fd]">role</span>: <span className="text-[#f1fa8c]">'Full Stack Developer'</span>,{"\n"}
                                    {"  "}<span className="text-[#8be9fd]">stack</span>: [<span className="text-[#f1fa8c]">'React'</span>, <span className="text-[#f1fa8c]">'Laravel'</span>, <span className="text-[#f1fa8c]">'Node.js'</span>],{"\n"}
                                    {"  "}<span className="text-[#8be9fd]">mission</span>: <span className="text-[#f1fa8c]">'Turning ideas into products'</span>,{"\n"}
                                    {"  "}<span className="text-[#8be9fd]">focus</span>: <span className="text-[#f1fa8c]">'Clean, scalable solutions'</span>,{"\n"}
                                    {"  "}<span className="text-[#8be9fd]">status</span>: <span className="text-[#00cc66]">'Ready to build'</span>{"\n"}
                                    &#125;;{"\n\n"}
                                    <span className="text-[#ff79c6]">export default</span> developer;
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Profile Bio Section */}
            <section id="about" className="space-y-6">
                <div className="border-b border-[#1e1e2d] pb-4 flex items-center justify-between">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#6c6d83]">
                        About Me
                    </h2>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0f0f14] border border-[#1e1e2d] hover:border-[#2a2a3e] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300"
                >
                    <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#00cc66] font-semibold">

                    </div>
                    <p className="text-sm sm:text-base text-[#a0a0b8] leading-relaxed font-sans font-normal">
                        {profile.bio}
                    </p>
                </motion.div>
            </section>
        </div>
    );
}