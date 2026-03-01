"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaCertificate, FaExternalLinkAlt, FaCode, FaFilePdf } from 'react-icons/fa';

export default function Home() {
  const certs = [
    { title: 'Cyber Security Professional', issuer: 'Google / Coursera', path: '/RESUME/CERTIFICATES/Google-Foundation on Cyber security.pdf' },
    { title: 'Arduino Programming', issuer: 'IEDC', path: '/RESUME/CERTIFICATES/Arduino-IEDC.pdf' },
    { title: 'C++ Programming', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_Cpp.pdf' },
    { title: 'Java Programming', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_JAVA.pdf' },
    { title: 'Python Programming', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_Python.pdf' },
    { title: 'PHP & HTML', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_PHP.pdf' },
    { title: 'Voice of Stakeholder', issuer: 'YIP / K-DISC', path: '/RESUME/CERTIFICATES/Voice of Stakeholder-YIP.pdf' },
  ];

  const prizes = [
    { title: '1st Place: Tech Arena', event: 'Takshak National Level Tech Fest', path: '/RESUME/PRIZES/tech-arena(Takshak national level tech fest MA college) 1st .png' },
    { title: '1st Place: Clash of Codes', event: 'Coding Competition', path: '/RESUME/PRIZES/clash-of-codes-1st.jpg' },
    { title: '1st Place: Kryptos Hardware1', event: 'Hackathon', path: '/RESUME/PRIZES/kryptos-hardware-hackathon-1st.jpg' },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 pb-20">
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            GAUTHAM <span className="text-blue-500">BINOY</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            Computer Science student at <span className="text-white font-bold">MACE</span>. 
            Passionate about <span className="text-white font-bold">Flutter</span> development, 
            <span className="text-white font-bold">IoT</span> integration, and solving complex problems with code.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <a href="/RESUME/Resume (3).pdf" target="_blank" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2">
              <FaFilePdf /> Download Resume
            </a>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/gautham-binoy" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-blue-400"><FaLinkedin size={24}/></a>
              <a href="https://github.com/gautham-binoy" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"><FaGithub size={24}/></a>
            </div>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] rotate-3 overflow-hidden border-2 border-white/10 shadow-2xl">
          <img src="/RESUME/profile.jpg" className="w-full h-full object-cover -rotate-3 scale-110" alt="Gautham Binoy" />
        </div>
      </header>

      {/* Experience Section - Fixed Repetition */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">01.</span> EXPERIENCE
        </h2>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm max-w-3xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold italic">Flutter Intern</h3>
              <p className="text-blue-500 font-bold">ICT Academy of Kerala</p>
            </div>
            <span className="text-xs font-bold text-gray-500 px-3 py-1 bg-white/5 rounded-lg">JAN 2025 — PRESENT </span>
          </div>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3"><span>▹</span> <span className="text-white font-medium">Optimized</span> cross-platform mobile application modules, increasing UI responsiveness by 15%.</li>
            <li className="flex gap-3"><span>▹</span> <span className="text-white font-medium">Architected</span> real-time state management systems to ensure a seamless and scalable user experience.</li>
            <li className="flex gap-3"><span>▹</span> <span className="text-white font-medium">Collaborated</span> with industry mentors to implement standard Agile development lifecycles.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">02.</span> KEY PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-xl font-bold mb-2">Hirepoly - Placement Portal</h4>
            <p className="text-gray-500 text-sm mb-4">PHP • SQL • Bootstrap</p>
            <p className="text-gray-400 leading-relaxed mb-6">
              <span className="text-white font-medium">Constructed</span> a full-stack campus placement portal that automated recruiter interactions for 500+ users.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
            <h4 className="text-xl font-bold mb-2">Hardware Innovation Project</h4>
            <p className="text-gray-500 text-sm mb-4">Arduino C • IoT</p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-medium">Pioneered</span> an IoT-based hardware prototype using Arduino C for real-time environmental monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">03.</span> ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizes.map((prize, i) => (
            <motion.a 
              href={prize.path} target="_blank" key={i} whileHover={{y:-10}}
              className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] group"
            >
              <FaTrophy className="text-yellow-500 mb-4 text-2xl" />
              <h4 className="font-bold text-lg mb-1">{prize.title}</h4>
              <p className="text-gray-500 text-sm">{prize.event}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Certification List */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">04.</span> CERTIFICATIONS
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <a href={cert.path} target="_blank" key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-blue-500/10 transition-all group">
              <div className="flex items-center gap-4">
                <FaCertificate className="text-blue-500" />
                <div>
                  <h4 className="font-bold text-sm">{cert.title}</h4>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              </div>
              <FaExternalLinkAlt className="text-gray-700 group-hover:text-blue-500 transition-colors" size={14} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}