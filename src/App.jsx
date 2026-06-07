import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const DATA = {
  "developer_profile": {
    "first_name": "Abdulaziz",
    "last_name": "Kedir",
    "title": "Full Stack Developer",
    "sub_title": "MERN & Laravel Specialist",
    "bio": "I am a passionate software engineer with a deep analytical approach to constructing production-grade web systems and mobile interfaces. Combining algorithmic foundation with modern framework mastery, I engineer responsive applications that bridge complex backend architecture with clean, responsive user experiences.",
    "metrics": [
      { "value": "BSc", "label": "Computer Science Degree" },
      { "value": "MERN", "label": "Stack Mastery" },
      { "value": "3+", "label": "Production-Ready Applications" }
    ],
    "contact": {
      "email": "abud732a@gmail.com",
      "phone": "+251936806987",
      "github": "https://github.com/Abdu732a",
      "linkedin": "https://www.linkedin.com/in/abdulaziz-kedir-aa730629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  "skills": {
    "Frontend": ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    "Backend": ["Node.js", "Express.js", "PHP", "Laravel"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools": ["Git", "GitHub", "REST APIs", "Postman"]
  },
  "featured_projects": [
    {
      "id": "bright-tutorial-system",
      "title": "Bright Tutorial Management App",
      "stack_type": "Laravel + React Hybrid",
      "summary": "A comprehensive enterprise-grade tutorial management network built to fully automate administrative flows, premium registration gates, and secure, optimized video streaming pipelines.",
      "features": ["Multi-role RBAC security matrix", "Integrated transaction ledger routing", "Dynamic media asset streaming"],
      "live_link": "https://bright-tutorial.example.com",
      "github_link": "https://github.com/Abdu732a/bright-tutorial"
    },
    {
      "id": "bet-property-booking",
      "title": "Bet Property Booking App",
      "stack_type": "MERN Stack",
      "summary": "A high-performance property booking engine featuring dual-portal interactive flows for guests and hosts, conflict-free scheduling logic, and multi-parameter filtering arrays.",
      "features": ["Real-time calendar reservation checks", "Dual host/guest profile states", "Location & budget dataset search"],
      "live_link": "https://bet-booking.example.com",
      "github_link": "https://github.com/Abdu732a/bet-app"
    },
    {
      "id": "quran-mp3-streamer",
      "title": "Quran MP3 Mobile App",
      "stack_type": "Cross-Platform Mobile",
      "summary": "A beautiful cross-platform mobile audio experience engineered to stream dynamic content smoothly without hardware lag or layout clipping.",
      "features": ["Edge-to-edge audio player modal", "Safe-area layout padding logic", "Hardware baseline event listeners"],
      "live_link": "https://quran-audio.example.com",
      "github_link": "https://github.com/Abdu732a/quran-mp3"
    }
  ]
};

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

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
        setStatus({ type: 'success', msg: 'Handshake accepted. Message sent directly to Abdulaziz!' });
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
        setStatus({ type: 'error', msg: 'Connection timeout. Check your service configuration keys.' });
      });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f4f6] selection:bg-[#00cc66] selection:text-black antialiased font-sans">

      {/* ================= STICKY FLOATING HEADER ================= */}
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

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-32">

        {/* ================= PREMIUM HERO SECTION ================= */}
        <section className="grid md:grid-cols-12 gap-12 pt-8 md:pt-16 items-center">
          <div className="md:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
                {DATA.developer_profile.first_name} <br />
                <span className="text-[#00cc66]">{DATA.developer_profile.last_name}</span>
              </h1>
              <p className="font-mono text-sm md:text-base text-[#88899a] flex items-center gap-2">
                <span className="text-[#00cc66]">&gt;</span> {DATA.developer_profile.title} / {DATA.developer_profile.sub_title}
              </p>
            </motion.div>

            {/* Custom Metrics Layout Block */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#181820] pt-6 mt-8">
              {DATA.developer_profile.metrics.map((metric, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl md:text-4xl font-black text-white font-mono tracking-tight">{metric.value}</div>
                  <div className="text-[10px] text-[#5c5c6d] uppercase font-mono tracking-wider leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Code Mockup Container */}
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
                  {`const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'online', 
    stack: 'MERN + Laravel' 
  });
});`}
                </code>
              </pre>
            </motion.div>
          </div>
        </section>

        {/* ================= BIOGRAPHICAL SHELL MODULE ================= */}
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
              {DATA.developer_profile.bio}
            </p>
          </motion.div>
        </section>

        {/* ================= HIGHLY CREATIVE PROJECTS GALLERY ================= */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-[#181820] pb-4">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">// 02 / selected_production_software</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DATA.featured_projects.map((project, i) => (
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

                {/* Real Dynamic Interactive Direct Destination Project Redirect Routing Links */}
                <div className="flex gap-4 border-t border-[#181820] pt-4 mt-6 font-mono text-xs">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-[#00cc66] flex items-center gap-1 transition-colors"
                  >
                    <span>[View App]</span>
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#5c5c6d] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>[Source Code]</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= TECH STACK MATRIX ================= */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-[#181820] pb-4">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#5c5c6d]">// 03 / core_technical_capabilities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(DATA.skills).map(([category, skillList]) => (
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

        {/* ================= SPLIT SIDE-BY-SIDE CONNECT GATEWAY ================= */}
        <section id="connect" className="bg-[#111116] border border-[#1e1e28] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#00cc66]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">

            {/* LEFT SIDE: PERSONAL HANDSHAKE & INLINE VECTOR CARD LINKS */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-black tracking-tight text-white uppercase font-mono text-[#00cc66]">_establish_contact</h2>
                <p className="text-xs text-[#88899a] leading-relaxed">
                  I am currently open to remote engineering roles, standalone contract architectural builds, and feature expansion modules. Tap any pipeline to connect directly.
                </p>
              </div>

              <div className="space-y-3 pt-2 font-mono text-xs">
                {/* Phone */}
                <a href={`tel:${DATA.developer_profile.contact.phone}`} className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                  <svg className="w-4 h-4 text-[#00cc66] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>{DATA.developer_profile.contact.phone}</span>
                </a>

                {/* Email */}
                <a href={`mailto:${DATA.developer_profile.contact.email}`} className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                  <svg className="w-4 h-4 text-[#00cc66] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="truncate">{DATA.developer_profile.contact.email}</span>
                </a>

                {/* GitHub */}
                <a href={DATA.developer_profile.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                  <svg className="w-4 h-4 text-[#00cc66] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  <span>GitHub / Abdu732a</span>
                </a>

                {/* LinkedIn */}
                <a href={DATA.developer_profile.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                  <svg className="w-4 h-4 text-[#00cc66] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  <span>LinkedIn / abdulaziz-kedir</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: FUNCTIONAL TRANSMISSION ROUTING FORM BOX */}
            <div className="md:col-span-7">
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-[#0a0a0c] border border-[#1e1e28] rounded-md p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors w-full"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-[#0a0a0c] border border-[#1e1e28] rounded-md p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors w-full"
                  />
                </div>
                <textarea
                  rows="5"
                  required
                  placeholder="Describe your architecture requirements, stack layout parameters, or open engineering vacancies..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-[#0a0a0c] border border-[#1e1e28] rounded-md p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors resize-none w-full"
                ></textarea>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1 justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#00cc66] text-black font-mono text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-md hover:bg-white transition-all duration-300 w-full sm:w-auto disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? 'Transmitting...' : 'Send Message Packet'}
                  </button>

                  {status.msg && (
                    <div className={`font-mono text-xs px-4 py-2 border rounded ${status.type === 'success' ? 'bg-[#0a1c11] border-green-900 text-[#00cc66]' : 'bg-[#1c0a0a] border-red-900 text-red-400'
                      }`}>
                      {status.msg}
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </section>

      </div>

      {/* Baseline Environment Footer */}
      <footer className="border-t border-[#181820] mt-24 py-8 text-center font-mono text-xs text-[#3a3a4c]">
        © {new Date().getFullYear()} ABDULAZIZ KEDIR • CORE ENVIRONMENT ACTIVE
      </footer>
    </div>
  );
}