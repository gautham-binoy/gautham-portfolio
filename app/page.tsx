"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaCertificate, FaExternalLinkAlt, FaCode, FaFilePdf, FaMedal } from 'react-icons/fa';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const certs = [
    { title: 'Google Cyber Security', issuer: 'Google / Coursera', path: '/RESUME/CERTIFICATES/Google-Foundation on Cyber security.pdf' },
    { title: 'Arduino Programming', issuer: 'IEDC', path: '/RESUME/CERTIFICATES/Arduino-IEDC.pdf' },
    { title: 'YIP Finalist (Voice of Stakeholder)', issuer: 'K-DISC', path: '/RESUME/CERTIFICATES/Voice of Stakeholder-YIP.pdf' },
    { title: 'C++ Programming', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_Cpp.pdf' },
    { title: 'Java Programming', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_JAVA.pdf' },
    { title: 'Python Programming', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_Python.pdf' },
    { title: 'PHP & HTML', issuer: 'IIT Bombay', path: '/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_PHP.pdf' },
  ];

  const prizes = [
    { title: '1st Place: Tech Arena', event: 'Takshak National Fest', path: '/RESUME/PRIZES/tech-arena(Takshak national level tech fest MA college) 1st .png' },
    { title: '1st Place: Clash of Codes', event: 'Coding Competition', path: '/RESUME/PRIZES/clash-of-codes-1st.jpg' },
    { title: '1st Place: Kryptos Hardware', event: 'Hackathon', path: '/RESUME/PRIZES/kryptos-hardware-hackathon-1st.jpg' },
    { title: '3rd Place: Code for India', event: 'MuLearn Challenge', path: '/RESUME/PRIZES/code-for-india-Mulearn-3rd.pdf' },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 pb-20">
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
              GAUTHAM <span className="text-blue-500">BINOY</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
              Transforming complex problems into elegant digital experiences. Focused on <span className="text-white font-bold">Flutter</span>, <span className="text-white font-bold">IoT</span>, and <span className="text-white font-bold">Full-stack systems</span>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <a href="/RESUME/Resume (3).pdf" target="_blank" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2">
                <FaFilePdf /> View Full Resume
              </a>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/gautham-binoy" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"><FaLinkedin size={24}/></a>
                <a href="https://github.com/gautham-binoy" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"><FaGithub size={24}/></a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] rotate-3 overflow-hidden border-2 border-white/10 shadow-2xl">
              <img src="/RESUME/profile.jpg" className="w-full h-full object-cover -rotate-3 scale-110" alt="Gautham" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Experience & Internship */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500">01.</span> EXPERIENCE
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500"><FaCode size={24} /></div>
              <a href="/RESUME/INTERNSHIP/Flutter_internship.pdf" target="_blank" className="text-xs font-bold text-gray-500 flex items-center gap-1 hover:text-white transition">VERIFY DOC <FaExternalLinkAlt /></a>
            </div>
            <h3 className="text-2xl font-bold mb-1 italic">Flutter Intern</h3>
            <p className="text-blue-500 font-bold mb-4">ICT Academy of Kerala</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineered cross-platform modules boosting UI responsiveness by 15%. Architected real-time state management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500">02.</span> HACKATHONS & AWARDS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, i) => (
            <motion.a 
              href={prize.path} target="_blank" key={i} whileHover={{y:-10}}
              className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] group"
            >
              <FaTrophy className="text-yellow-500 mb-4 text-2xl group-hover:scale-125 transition-transform" />
              <h4 className="font-bold text-lg mb-1">{prize.title}</h4>
              <p className="text-gray-500 text-sm">{prize.event}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Vertical Certificates List */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
          <span className="text-blue-500">03.</span> CERTIFICATIONS
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.a 
              href={cert.path} target="_blank" key={i}
              className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <FaCertificate />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base">{cert.title}</h4>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              </div>
              <FaExternalLinkAlt className="text-gray-700 group-hover:text-blue-500 transition-colors" size={14} />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Technical Skills - Super Modern Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-gray-600 font-bold tracking-[0.3em] text-xs mb-12 uppercase">Technical Arsenal</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['Flutter', 'Firebase', 'Next.js', 'C++', 'Java', 'Python', 'Dart', 'PHP', 'SQL', 'Arduino', 'IoT', 'Cyber Security'].map((skill, i) => (
            <span key={i} className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all font-medium text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}