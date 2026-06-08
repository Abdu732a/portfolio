import React from 'react';
import { motion } from 'framer-motion';

export default function About({ profile }) {
    return (
        <div className="space-y-32">
            {/* Hero Section */}
            <section className="grid md:grid-cols-12 gap-12 pt-8 md:pt-16 items-center">
                <div className="md:col-span-7 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-3"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
                            {profile.first_name} <br />
                            <span className="text-[#00cc66]">{profile.last_name}</span>
                        </h1>
                        <p className="font-mono text-sm md:text-base text-[#88899a] flex items-center gap-2">
                            <span className="text-[#00cc66]">&gt;</span> {profile.title} / {profile.sub_title}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-4 border-t border-[#181820] pt-6 mt-8">
                        {profile.metrics.map((metric, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-2xl md:text-4xl font-black text-white font-mono tracking-tight">{metric.value}</div>
                                <div className="text-[10px] text-[#5c5c6d] uppercase font-mono tracking-wider leading-tight">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Monitor Terminal Layout Component */}
                <div className="md:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#111116] border border-[#1e1e28] rounded-lg shadow-2xl p-5 font-mono text-xs relative"
                    >
                        <div className="flex gap-1.5 absolute top-4 left-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-60"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-60"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-60"></span>
                        </div>
                        <div className="text-right text-[#444554] mb-4 select-none">SYSTEM_MONITOR.js</div>
                        <pre className="text-[#b5e2b5] leading-relaxed overflow-x-auto custom-scrollbar pt-2">
                            <code>
                                {`const developer = {
  name: 'Abdulaziz Kedir',
  role: 'Full Stack Developer',
  stack: ['React', 'Laravel', 'Node.js'],
  mission: 'Turning ideas into products',
  focus: 'Clean, scalable solutions',
  status: 'Ready to build'
};

export default developer;`}
                            </code>
                        </pre>
                    </motion.div>
                </div>
            </section>

            {/* Profile Bio Context */}
            <section id="about" className="space-y-6">
                <div className="border-b border-[#181820] pb-4">
                    <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">// 01 / runtime_profile_context</h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl bg-[#111116]/30 border border-[#181820] rounded-xl p-6 md:p-8"
                >
                    <p className="text-base text-[#88899a] leading-relaxed font-sans">
                        <span className="text-white font-mono mr-2 text-sm font-bold">root@abdulaziz:~#</span>
                        {profile.bio}
                    </p>
                </motion.div>
            </section>
        </div>
    );
}