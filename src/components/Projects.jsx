import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ projects, skills }) {
    return (
        <div className="space-y-32">
            {/* Projects Gallery */}
            <section id="projects" className="space-y-8">
                <div className="border-b border-[#181820] pb-4">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">// 02 / selected_production_software</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-[#111116] border border-[#1e1e28] hover:border-[#00cc66] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-mono bg-[#181824] border border-[#222234] text-[#00cc66] px-2.5 py-1 rounded-md">
                                        {project.stack_type}
                                    </span>
                                    <span className="font-mono text-xs text-[#3a3a4c]">0{i + 1}.sh</span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-[#00cc66] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-[#88899a] leading-relaxed">
                                    {project.summary}
                                </p>

                                <ul className="space-y-1.5 pt-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="text-xs font-mono text-[#5c5c6d] flex items-center gap-2">
                                            <span className="text-[#00cc66]">•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-4 border-t border-[#181820] pt-4 mt-6 font-mono text-xs">
                                <a href={project.live_link} target="_blank" rel="noreferrer" className="text-white hover:text-[#00cc66] transition-colors">[View App]</a>
                                <a href={project.github_link} target="_blank" rel="noreferrer" className="text-[#5c5c6d] hover:text-white transition-colors">[Source Code]</a>
                            </div>
                        </motion.div>
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
                        <div key={category} className="bg-[#111116]/40 border border-[#181820] rounded-lg p-5 space-y-4">
                            <h3 className="font-mono text-xs text-[#5c5c6d] uppercase tracking-wider">// {category}</h3>
                            <ul className="space-y-2 font-mono text-sm">
                                {skillList.map((skill, idx) => (
                                    <li key={idx} className="text-white flex items-center gap-2">
                                        <span className="w-1 h-1 bg-[#00cc66] rounded-full"></span>
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