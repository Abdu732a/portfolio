import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const DATA = {
  "developer_profile": {
    "first_name": "Abdulaziz",
    "last_name": "Kedir",
    "title": "Full Stack Developer",
    "sub_title": "MERN & Laravel Specialist",
    "about": {
      "statement": "I am a passionate Full Stack Developer with a degree in Computer Science. I specialize in building robust backend ecosystems, crafting seamless API integrations, and translating intricate system architectures into elegant, interactive frontend interfaces.",
      "philosophy": "I take pride in writing highly maintainable code, optimizing database performance, and building clean, structured user workflows that feel responsive and meaningful."
    },
    "contact": {
      "email": "abduz732a@gmail.com",
      "phone": "0936806987",
      "github": "https://github.com/abduz732a",
      "linkedin": "https://linkedin.com/in/abdulaziz-kedir"
    },
    "metrics": [
      { "value": "BSc", "label": "Computer Science Degree" },
      { "value": "MERN", "label": "Stack Mastery" },
      { "value": "3+", "label": "Production-Ready Applications" }
    ]
  },
  "ui_dev_flow_config": {
    "terminal_decorations": {
      "hero_code_bg": "const app = express();\napp.use(cors());\napp.use(express.json());\n\napp.get('/api/status', (req, res) => {\n  res.json({ status: 'online', stack: 'MERN + Laravel' });\n});",
      "laravel_code_bg": "Route::prefix('v1')->group(function () {\n    Route::apiResource('tutorials', TutorialController::class);\n});",
      "mobile_code_bg": "import { useSafeAreaInsets } from 'react-native-safe-area-context';\nconst insets = useSafeAreaInsets();"
    }
  },
  "skills_inventory": {
    "frontend": ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS"],
    "backend": ["Node.js", "Express.js", "PHP", "Laravel"],
    "databases": ["MongoDB", "MySQL"],
    "tools_version_control": ["Git", "GitHub", "REST APIs", "Postman"]
  },
  "featured_projects": [
    {
      "id": "bright-tutorial-system",
      "title": "Bright Tutorial Management App",
      "role": "Full Stack Developer",
      "stack_type": "Laravel + React Hybrid",
      "technologies": ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
      "summary": "A comprehensive total management system built for educational institutions to fully automate admin workflows, streaming delivery, and registration structures.",
      "technical_breakdown": [
        "Architected an advanced multi-role registration flow and strict Role-Based Access Control (RBAC).",
        "Configured secure payment processing integrations for handling premium tutorial transactions.",
        "Engineered an optimized video streaming delivery module within the application core."
      ],
      "terminal_hook": "php artisan migrate --seed"
    },
    {
      "id": "bet-property-booking",
      "title": "Bet App",
      "role": "Full Stack Developer",
      "stack_type": "MERN Stack",
      "technologies": ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      "summary": "A fully functional property booking MVP designed to connect property owners directly with prospective guests without friction.",
      "technical_breakdown": [
        "Designed a precise dual-portal system serving distinct interactive states for both Hosts and Guests.",
        "Built real-time database schemas tracking true property availability windows and overlapping reservations.",
        "Implemented rigorous multi-parameter filtering arrays covering location, structural pricing, and amenities."
      ],
      "terminal_hook": "npm run dev --workspace=backend"
    },
    {
      "id": "quran-mp3-streamer",
      "title": "Quran MP3 Mobile App",
      "role": "Mobile App Developer",
      "stack_type": "Cross-Platform Mobile",
      "technologies": ["React Native", "Expo", "Context API", "Safe Area Context"],
      "summary": "A high-performance mobile audio application providing a seamless, immersive streaming experience.",
      "technical_breakdown": [
        "Crafted a custom, highly responsive edge-to-edge audio player modal that adapts beautifully across edge screens.",
        "Eliminated layout clipping by engineering a universal structural solution using dynamic insets from react-native-safe-area-context.",
        "Implemented physical device back-button hardware listeners to seamlessly minimize active modals without disrupting playback."
      ],
      "terminal_hook": "npx expo start --android"
    }
  ]
};

// Layout Animation Constants
const easeFlow = [0.16, 1, 0.3, 1];

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    // Client-side EmailJS routing script
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
        to_email: DATA.developer_profile.contact.email,
      },
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setLoading(false);
        setStatus({ type: 'success', msg: 'Payload dispatched successfully directly to abduz732a@gmail.com' });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setLoading(false);
        setStatus({ type: 'error', msg: 'System execution fault. Verify configurations and try again.' });
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-[#060606] selection:bg-[#00cc66] selection:text-black relative">
      {/* Background Structural Lines Matrix */}
      <div className="absolute inset-0 grid-layout-lines opacity-45 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto border-x border-[#141414] min-h-screen bg-[#060606]">

        {/* ================= HEADER BRAND BAR ================= */}
        <header className="border-b border-[#141414] px-6 py-4 flex justify-between items-center bg-[#060606]/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="font-mono text-sm tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00cc66] rounded-full animate-pulse"></span>
            <span className="text-white font-bold">{DATA.developer_profile.first_name.toLowerCase()}()</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-[#666]">
            <a href="#about" className="hover:text-[#00cc66] transition-colors">_about</a>
            <a href="#skills" className="hover:text-[#00cc66] transition-colors">_skills</a>
            <a href="#projects" className="hover:text-[#00cc66] transition-colors">_projects</a>
            <a href="#connect" className="hover:text-[#00cc66] border border-[#222] px-3 py-1 bg-[#0c0c0c] transition-all">_connect</a>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="border-b border-[#141414] grid lg:grid-cols-12 min-h-[85vh] items-stretch">
          <div className="lg:col-span-7 p-6 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#141414]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeFlow }}
              className="mt-12"
            >
              <div className="font-mono text-[#00cc66] text-xs tracking-widest uppercase mb-4">
                // root_identity / build_matrix
              </div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                {DATA.developer_profile.first_name} <br />
                <span className="stroke-text">{DATA.developer_profile.last_name}</span>
              </h1>
              <h2 className="font-mono text-base md:text-lg text-[#666] tracking-tight mt-4">
                &gt; {DATA.developer_profile.title} / {DATA.developer_profile.sub_title}
              </h2>
            </motion.div>

            {/* Heavy Monospace Typography Metrics Counter */}
            <div className="grid grid-cols-3 border-t border-[#141414] pt-8 mt-16 gap-4">
              {DATA.developer_profile.metrics.map((metric, i) => (
                <div key={i} className="font-mono border-r border-[#141414] last:border-0 pr-2">
                  <div className="text-3xl md:text-5xl font-black text-[#00cc66] tracking-tighter">{metric.value}</div>
                  <div className="text-[10px] text-[#555] uppercase tracking-wider mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Hero Workspace Window Decoration */}
          <div className="lg:col-span-5 bg-[#080808] p-6 md:p-8 flex flex-col justify-between font-mono relative overflow-hidden">
            <div className="text-xs text-[#333] select-none absolute top-4 right-4">// WORKSPACE_ENV</div>
            <div>
              <div className="flex gap-1.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#222]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#222]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#222]"></span>
              </div>
              <div className="text-xs text-[#555] mb-2">SYSTEM_MONITOR.js</div>
              <pre className="text-xs text-[#888] leading-relaxed overflow-x-auto custom-scrollbar bg-[#040404] p-4 border border-[#141414]">
                <code>{DATA.ui_dev_flow_config.terminal_decorations.hero_code_bg}</code>
              </pre>
            </div>

            <div className="border-t border-[#141414] pt-6 mt-8">
              <div className="text-xs text-[#555] mb-2">CONTACT_CHANNELS</div>
              <div className="space-y-1 text-xs text-[#aaa]">
                <div><span className="text-[#444]">MAIL:</span> {DATA.developer_profile.contact.email}</div>
                <div><span className="text-[#444]">TEL:</span> {DATA.developer_profile.contact.phone}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="border-b border-[#141414] grid lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-[#141414] bg-[#080808]/50">
            <h2 className="text-2xl font-black font-mono text-white tracking-tight uppercase">
              _ABOUT.md
            </h2>
            <p className="font-mono text-xs text-[#444] mt-1">// core profile statement</p>
          </div>
          <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-center space-y-6">
            <p className="text-lg md:text-xl text-[#aaa] leading-relaxed max-w-4xl">
              {DATA.developer_profile.about.statement}
            </p>
            <div className="border-t border-[#141414] pt-6 font-mono text-xs text-[#666] max-w-2xl italic">
              &ldquo;{DATA.developer_profile.about.philosophy}&rdquo;
            </div>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="border-b border-[#141414]">
          <div className="p-6 md:p-12 border-b border-[#141414] bg-[#080808]/50">
            <h2 className="text-2xl font-black font-mono text-white tracking-tight uppercase">
              _SKILLS_INVENTORY
            </h2>
            <p className="font-mono text-xs text-[#444] mt-1">// stack technical classification</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#141414]">
            {Object.entries(DATA.skills_inventory).map(([category, list]) => (
              <div key={category} className="p-6 md:p-8 bg-[#060606] hover:bg-[#090909] transition-colors group">
                <div className="font-mono text-xs text-[#444] group-hover:text-[#00cc66] transition-colors mb-6 uppercase tracking-wider">
                  // {category.replace('_', ' ')}
                </div>
                <ul className="space-y-3 font-mono text-sm text-[#999]">
                  {list.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-white">
                      <span className="text-[#333] text-xs font-bold font-mono">&gt;_</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="border-b border-[#141414]">
          <div className="p-6 md:p-12 border-b border-[#141414] bg-[#080808]/50">
            <h2 className="text-2xl font-black font-mono text-white tracking-tight uppercase">
              _FEATURED_WORK
            </h2>
            <p className="font-mono text-xs text-[#444] mt-1">// architecture implementations</p>
          </div>

          <div className="divide-y divide-[#141414]">
            {DATA.featured_projects.map((project, index) => (
              <div key={project.id} className="grid lg:grid-cols-12 items-stretch group bg-[#060606]">

                {/* Project Meta Column */}
                <div className="lg:col-span-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#141414] flex flex-col justify-between bg-[#080808]/30">
                  <div className="font-mono">
                    <div className="text-[10px] text-[#444] uppercase tracking-widest">PROJECT_INDEX // 0{index + 1}</div>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase mt-2 group-hover:text-[#00cc66] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-[#666] font-mono mt-1">{project.stack_type}</div>
                  </div>

                  <div className="mt-8 font-mono">
                    <div className="text-[10px] text-[#444] uppercase mb-2">COMPILATION_TAGS</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] border border-[#222] bg-[#0c0c0c] text-[#aaa] px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Breakdown & Execution Logic */}
                <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <p className="text-base text-[#aaa] max-w-3xl leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="font-mono text-[11px] text-[#444] uppercase tracking-wider">// SYSTEM_BREAKDOWN</div>
                      <ul className="space-y-2">
                        {project.technical_breakdown.map((bullet, i) => (
                          <li key={i} className="text-sm text-[#888] pl-4 border-l border-[#222] group-hover:border-[#00cc66] transition-colors leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Absolute Monospace Run Command Box */}
                  <div className="font-mono text-xs bg-[#090909] border border-[#141414] p-3 flex items-center justify-between">
                    <span className="text-[#444]">EXECUTION_HOOK:</span>
                    <span className="text-[#ededed] font-medium bg-[#040404] px-2 py-1 border border-[#141414]">
                      $ {project.terminal_hook}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ================= CONNECT CONTACT SECTION ================= */}
        <section id="connect" className="bg-[#090909]">
          <div className="grid lg:grid-cols-12 items-stretch border-b border-[#141414]">
            <div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-[#141414] bg-[#0c0c0c]/50 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-black font-mono text-white tracking-tight uppercase">
                  _CONNECT_
                </h2>
                <p className="font-mono text-xs text-[#444] mt-1">// open secure communication gate</p>
              </div>
              <div className="font-mono text-xs text-[#555] hidden lg:block leading-relaxed mt-12">
                // Direct async handshake processing bypasses third-party servers to forward payloads safely to destination target.
              </div>
            </div>

            <div className="lg:col-span-8 p-6 md:p-12">
              <form onSubmit={handleSend} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col font-mono">
                    <label className="text-[10px] uppercase text-[#555] mb-2 tracking-wider">Identification Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Guest Developer"
                      className="bg-[#050505] border border-[#1d1d1d] p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col font-mono">
                    <label className="text-[10px] uppercase text-[#555] mb-2 tracking-wider">Return Gateway Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="developer@client.com"
                      className="bg-[#050505] border border-[#1d1d1d] p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col font-mono">
                  <label className="text-[10px] uppercase text-[#555] mb-2 tracking-wider">Message Payload</label>
                  <textarea
                    rows="5"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Enter explicit requirements or communication message packet..."
                    className="bg-[#050505] border border-[#1d1d1d] p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-mono text-xs bg-[#060606] border border-[#00cc66] text-[#00cc66] hover:bg-[#00cc66] hover:text-black font-bold py-3.5 px-8 transition-all tracking-widest uppercase disabled:opacity-40"
                  >
                    {loading ? './dispatching_packet...' : './execute_handshake.sh'}
                  </button>

                  {status.msg && (
                    <div className={`font-mono text-xs p-3 border max-w-md ${status.type === 'success' ? 'bg-[#050c05] border-green-900 text-[#00cc66]' : 'bg-[#0c0505] border-red-900 text-red-400'
                      }`}>
                      [{status.type.toUpperCase()}] {status.msg}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Footer bar */}
          <footer className="p-6 font-mono text-[10px] text-[#444] text-center border-t border-[#141414]">
            © {new Date().getFullYear()} ABDULAZIZ KEDIR // STRUCTURAL CORE GRAPH MATRIX V1.0.0
          </footer>
        </section>

      </div>
    </div>
  );
}