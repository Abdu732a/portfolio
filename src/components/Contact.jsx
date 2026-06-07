import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ contact }) {
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
                to_email: contact.email,
            },
            'YOUR_PUBLIC_KEY'
        )
            .then(() => {
                setLoading(false);
                setStatus({ type: 'success', msg: 'Handshake accepted. Message transmitted directly!' });
                setForm({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setLoading(false);
                setStatus({ type: 'error', msg: 'Connection timeout. Check your configuration parameters.' });
            });
    };

    return (
        <section id="connect" className="bg-[#111116] border border-[#1e1e28] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#00cc66]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">

                {/* LEFT COMPONENT: CONTACT CHANNELS */}
                <div className="md:col-span-5 space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-black tracking-tight text-[#00cc66] uppercase font-mono">_establish_contact</h2>
                        <p className="text-xs text-[#88899a] leading-relaxed">
                            I am open to remote engineering roles, standalone contract builds, and full-stack integrations. Tap any pipeline to connect directly.
                        </p>
                    </div>

                    <div className="space-y-3 pt-2 font-mono text-xs">
                        <a href={`tel:${contact.phone}`} className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                            <svg className="w-4 h-4 text-[#00cc66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>{contact.phone}</span>
                        </a>

                        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                            <svg className="w-4 h-4 text-[#00cc66]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span className="truncate">{contact.email}</span>
                        </a>

                        <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                            <svg className="w-4 h-4 text-[#00cc66]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                            <span>GitHub / Abdu732a</span>
                        </a>

                        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-[#0a0a0c] border border-[#1e1e28] hover:border-[#00cc66] transition-colors rounded-lg text-[#88899a] hover:text-white group">
                            <svg className="w-4 h-4 text-[#00cc66]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            <span>LinkedIn / abdulaziz-kedir</span>
                        </a>
                    </div>
                </div>

                {/* RIGHT COMPONENT: MESSAGE FORM */}
                <div className="md:col-span-7">
                    <form onSubmit={handleSend} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text" required placeholder="Your Name" value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="bg-[#0a0a0c] border border-[#1e1e28] rounded-md p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors w-full"
                            />
                            <input
                                type="email" required placeholder="Your Email Address" value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="bg-[#0a0a0c] border border-[#1e1e28] rounded-md p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors w-full"
                            />
                        </div>
                        <textarea
                            rows="5" required placeholder="Describe your architecture requirements..." value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="bg-[#0a0a0c] border border-[#1e1e28] rounded-md p-3 text-sm text-white font-mono focus:border-[#00cc66] focus:outline-none transition-colors resize-none w-full"
                        ></textarea>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-1 justify-between">
                            <button
                                type="submit" disabled={loading}
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
    );
}