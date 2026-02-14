import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Phone, Download, ExternalLink,
  TrendingUp, MessageSquare, Globe, BarChart, FolderGit2,
  ArrowUpRight, ChevronDown, GraduationCap, Briefcase,
  Award, Code2, Server, Cpu, Database, Box
} from 'lucide-react';

/* ─── useInView ─────────────────────────────────────────────────────────── */
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

/* ─── DATA ──────────────────────────────────────────────────────────────── */
const projects = [
  {
    id: '01', color: '#3B82F6', icon: MessageSquare,
    title: 'Virtual Assistant — J.A.R.V.I.S',
    desc: 'A voice-activated AI personal assistant built with speech recognition, NLP pipelines and LLM integration for automated task handling and conversational AI.',
    tags: ['Python', 'NLP', 'Speech Recognition', 'LLM', 'HTML'],
    href: 'https://github.com/viveksalimath/Virtual-Assistant-J.A.R.V.I.S',
    type: 'GenAI',
  },
  {
    id: '02', color: '#10B981', icon: TrendingUp,
    title: 'Apple Stock Forecast (2012–2019)',
    desc: 'End-to-end time-series forecasting pipeline using ARIMA and LSTM networks to predict Apple stock prices 30 days ahead. Deployed as an interactive Python reporting workflow.',
    tags: ['ARIMA', 'LSTM', 'Time-Series', 'Python', 'TensorFlow'],
    href: 'https://github.com/viveksalimath/P-571-Apple-Stock-Forecast-2012-2019-Predict-Next-30-Days',
    type: 'ML',
  },
  {
    id: '03', color: '#A855F7', icon: Globe,
    title: 'Django School Management System',
    desc: 'Full-stack web application for managing students, teachers, attendance, and grades — built with Django, Python, and a relational database backend.',
    tags: ['Django', 'Python', 'SQL', 'Web App', 'Full-Stack'],
    href: 'https://github.com/viveksalimath/-Django-School-Management-System-Project',
    type: 'Web',
  },
  {
    id: '04', color: '#EC4899', icon: BarChart,
    title: 'Customer Churn Prediction',
    desc: 'ML classification pipeline using XGBoost, Random Forest, and Logistic Regression to identify at-risk customers. Includes Power BI dashboards for stakeholder reporting.',
    tags: ['XGBoost', 'Scikit-learn', 'Power BI', 'Python', 'Analytics'],
    href: 'https://github.com/viveksalimath/Data_Science_Projects',
    type: 'ML',
  },
  {
    id: '05', color: '#F59E0B', icon: Server,
    title: 'Hotel Management System',
    desc: 'Python-based hotel management CLI application handling room bookings, billing, and guest records with a clean object-oriented design.',
    tags: ['Python', 'OOP', 'CLI', 'Data Structures'],
    href: 'https://github.com/viveksalimath/Hotel-management-system',
    type: 'Python',
  },
  {
    id: '06', color: '#06B6D4', icon: FolderGit2,
    title: 'Data Science Projects Hub',
    desc: 'Centralized repository covering Regression, Clustering, Classification, NMT, and EDA — a comprehensive reference for rapid ML prototyping and experimentation.',
    tags: ['EDA', 'Clustering', 'NMT', 'IBM Collab', 'TensorFlow'],
    href: 'https://github.com/viveksalimath/Data_Science_Projects',
    type: 'ML',
  },
];

const experience = [
  {
    role: 'Data Science & AI/ML Intern',
    company: 'ExcelR',
    period: 'Apr 2025 – Oct 2025',
    location: 'Bengaluru, India',
    color: '#10B981',
    bullets: [
      'Built XGBoost & Scikit-learn models for stock price forecasting and customer churn prediction; tuned hyperparameters for production deployment',
      'Developed end-to-end NLP pipelines for text classification and chatbot systems using Hugging Face Transformers and LangChain',
      'Built interactive Power BI dashboards enabling stakeholder analytics and reporting',
      'Containerized ML applications with Docker for reproducible, scalable deployment',
      'Applied Git version control for collaborative ML development and model tracking',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'Rooman Technologies Pvt Ltd',
    period: 'Jan 2025 – May 2025',
    location: 'Bengaluru, India',
    color: '#3B82F6',
    bullets: [
      'Trained Neural Machine Translation (NMT) models for multi-language tasks using TensorFlow and Scikit-learn',
      'Completed 480+ hours of NSDC Level 5 certified training in data preprocessing, model development, and production ML workflows',
      'Collaborated with IBM Expert Labs on NMT research and implementation',
      'Earned Microsoft Generative AI and IBM NLP industry certifications',
      'Practiced feature engineering, cross-validation, and rigorous model evaluation',
    ],
  },
];

const skills = [
  { label: 'Languages', icon: Code2, color: '#10B981', items: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Java', 'C/C++'] },
  { label: 'ML / Deep Learning', icon: Cpu, color: '#3B82F6', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'SHAP', 'LSTM', 'CNN', 'Transformers'] },
  { label: 'GenAI & NLP', icon: MessageSquare, color: '#A855F7', items: ['LangChain', 'Hugging Face', 'RAG', 'LLMs', 'SpaCy', 'NMT', 'Text Classification'] },
  { label: 'Web & Frameworks', icon: Globe, color: '#F59E0B', items: ['Django', 'Flask', 'FastAPI', 'React', 'Node.js', 'Streamlit', 'Bootstrap'] },
  { label: 'Cloud & DevOps', icon: Server, color: '#EC4899', items: ['Docker', 'AWS', 'Azure', 'GCP', 'Git', 'GitHub'] },
  { label: 'Visualization & Data', icon: BarChart, color: '#06B6D4', items: ['Power BI', 'Tableau', 'Matplotlib', 'Plotly', 'Pandas', 'NumPy', 'MySQL', 'Excel'] },
];

const certs = [
  { name: 'Microsoft Generative AI Certification', year: '2025', color: '#0078D4' },
  { name: 'IBM Natural Language Processing (NLP)', year: '2025', color: '#052FAD' },
  { name: 'NSDC Level 5 AI/ML Training', year: '2025', color: '#EC4899' },
  { name: 'Generative AI & Prompt Design', issuer: 'Google Cloud Vertex AI', year: '2025', color: '#4285F4' },
  { name: 'Data Scientist Essentials', issuer: 'ExcelR Academy', year: '2025', color: '#10B981' },
];

/* ─── Project Card ───────────────────────────────────────────────────────── */
function ProjectCard({ p, index }) {
  const [hov, setHov] = useState(false);
  const Icon = p.icon;
  return (
    <Reveal delay={index * 0.07}>
      <a href={p.href} target="_blank" rel="noreferrer"
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          display: 'flex', flexDirection: 'column', height: '100%',
          background: hov ? '#111827' : '#0a0f18',
          border: `1px solid ${hov ? p.color + '55' : '#1a2235'}`,
          borderRadius: 16, padding: '28px 28px 24px', textDecoration: 'none',
          transition: 'all 0.3s ease',
          transform: hov ? 'translateY(-5px)' : 'none',
          boxShadow: hov ? `0 24px 48px ${p.color}1a` : 'none',
          position: 'relative', overflow: 'hidden',
        }}>
        {/* Type badge */}
        <span style={{
          position: 'absolute', top: 20, right: 20, fontSize: 10,
          padding: '3px 9px', borderRadius: 99, fontFamily: '"DM Mono", monospace',
          background: p.color + '18', color: p.color, letterSpacing: '1.5px',
          border: `1px solid ${p.color}33`,
        }}>{p.type}</span>

        {/* Number watermark */}
        <span style={{
          position: 'absolute', bottom: -10, right: 20,
          fontFamily: '"Cormorant Garamond", serif', fontSize: 80,
          fontWeight: 700, color: '#ffffff05', lineHeight: 1, userSelect: 'none',
          transition: 'color 0.3s',
        }}>{p.id}</span>

        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: p.color + '18', display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginBottom: 18,
        }}>
          <Icon size={20} style={{ color: p.color }} />
        </div>

        <h3 style={{
          fontFamily: '"Cormorant Garamond", serif', fontSize: 19,
          fontWeight: 700, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3,
        }}>{p.title}</h3>

        <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{p.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: hov ? 36 : 0 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, padding: '3px 9px', borderRadius: 99,
              background: '#141c2b', color: '#64748b',
              border: '1px solid #1a2235', fontFamily: '"DM Mono", monospace',
            }}>{t}</span>
          ))}
        </div>

        <div style={{
          position: 'absolute', bottom: 24, right: 24,
          opacity: hov ? 1 : 0, transform: hov ? 'translate(0,0)' : 'translate(6px,-6px)',
          transition: 'all 0.3s',
        }}>
          <ArrowUpRight size={18} style={{ color: p.color }} />
        </div>
      </a>
    </Reveal>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [cursor, setCursor] = useState({ x: -300, y: -300 });
  const [cursorBig, setCursorBig] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      ['home','experience','projects','skills','contact'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { const r = el.getBoundingClientRect(); if (r.top <= 100 && r.bottom >= 100) setActiveNav(id); }
      });
    };
    const onMouse = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouse);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMouse); };
  }, []);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActiveNav(id); };

  const navItems = ['home','experience','projects','skills','contact'];

  const types = ['All', 'ML', 'GenAI', 'Web', 'Python'];
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.type === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #060b14; color: #94a3b8; font-family: 'DM Sans', sans-serif; overflow-x: hidden; cursor: none; }
        ::selection { background: #10b98130; color: #d1fae5; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #060b14; }
        ::-webkit-scrollbar-thumb { background: #1a2235; border-radius: 2px; }

        .dot { width:7px; height:7px; background:#10b981; border-radius:50%; position:fixed; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); transition:width .2s,height .2s,background .2s; }
        .ring { width:34px; height:34px; border:1px solid #10b98144; border-radius:50%; position:fixed; pointer-events:none; z-index:9998; transform:translate(-50%,-50%); transition:left .1s,top .1s,width .25s,height .25s,border-color .25s; }
        .ring.big { width:56px; height:56px; border-color:#10b98122; }

        @keyframes fadeIn { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:none} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes gradShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes ping { 75%,100%{transform:scale(2.2);opacity:0} }

        .grad-text {
          background: linear-gradient(120deg, #10b981 0%, #06b6d4 40%, #818cf8 100%);
          background-size: 200%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: gradShift 5s ease infinite;
        }

        .grid-lines {
          background-image:
            linear-gradient(rgba(16,185,129,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .nav-btn { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:.8px; text-transform:uppercase; cursor:none; padding:4px 0; position:relative; transition:color .3s; }
        .nav-btn::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1.5px; background:#10b981; transition:width .3s; }
        .nav-btn:hover::after, .nav-btn.on::after { width:100%; }
        .nav-btn.on { color:#10b981 !important; }

        .filter-btn { background:none; border:1px solid #1a2235; border-radius:99px; padding:6px 18px; font-family:'DM Mono',monospace; font-size:11px; color:#475569; cursor:none; transition:all .25s; }
        .filter-btn:hover { border-color:#10b98155; color:#94a3b8; }
        .filter-btn.active { background:#10b98114; border-color:#10b98166; color:#10b981; }

        .exp-card { background:#09101d; border:1px solid #1a2235; border-radius:16px; padding:32px; transition:border-color .3s; }
        .exp-card:hover { border-color:#1e3a5f; }

        .skill-chip { display:inline-flex; align-items:center; padding:6px 14px; background:#09101d; border:1px solid #1a2235; border-radius:99px; font-size:12px; color:#64748b; font-family:'DM Mono',monospace; cursor:default; transition:all .25s; }
        .skill-chip:hover { border-color:#10b98155; color:#d1fae5; background:#10b98108; }

        .contact-card { display:flex; flex-direction:column; align-items:center; gap:12px; padding:32px 20px; background:#09101d; border:1px solid #1a2235; border-radius:16px; text-decoration:none; transition:all .3s; cursor:none; }
        .contact-card:hover { border-color:#10b98144; transform:translateY(-4px); }

        @media (max-width:768px) {
          body { cursor:auto; }
          .dot, .ring { display:none; }
          .hero-title { font-size: clamp(42px,10vw,72px) !important; }
        }
      `}</style>

      {/* Cursor */}
      <div className="dot" style={{ left: cursor.x, top: cursor.y }} />
      <div className={`ring${cursorBig ? ' big' : ''}`} style={{ left: cursor.x, top: cursor.y }} />

      {/* NAV */}
      <nav style={{
        position:'fixed', top:0, width:'100%', zIndex:100,
        background: scrolled ? 'rgba(6,11,20,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a2235' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '22px 0',
        transition:'all .4s', animation:'fadeIn .6s ease',
      }}>
        <div style={{ maxWidth:1120, margin:'0 auto', padding:'0 32px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div onClick={() => scrollTo('home')} style={{
            fontFamily:'"Cormorant Garamond", serif', fontSize:22, fontWeight:700,
            color:'#f1f5f9', cursor:'none', letterSpacing:'-0.5px',
          }}>
            V<span style={{color:'#10b981',fontStyle:'italic'}}>.S</span>
          </div>

          <div style={{ display:'flex', gap:36 }}>
            {navItems.map(id => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`nav-btn${activeNav===id?' on':''}`}
                style={{ color: activeNav===id ? '#10b981' : '#475569' }}
              >{id}</button>
            ))}
          </div>

          <button onClick={() => scrollTo('contact')} style={{
            padding:'8px 22px', background:'transparent',
            border:'1px solid #10b98155', borderRadius:99,
            color:'#10b981', fontSize:12, fontWeight:500,
            fontFamily:'DM Sans', cursor:'none', letterSpacing:'.5px',
            transition:'all .2s',
          }}
          onMouseEnter={e=>{e.currentTarget.style.background='#10b98115';e.currentTarget.style.borderColor='#10b981';setCursorBig(true);}}
          onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='#10b98155';setCursorBig(false);}}>
            Hire Me →
          </button>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section id="home" className="grid-lines" style={{ minHeight:'100vh', display:'flex', alignItems:'center', padding:'130px 32px 100px', position:'relative', overflow:'hidden' }}>
        {/* ambient glows */}
        <div style={{ position:'absolute', top:'15%', right:'8%', width:560, height:560, borderRadius:'50%', background:'radial-gradient(circle, rgba(16,185,129,.07) 0%, transparent 65%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'5%', left:'20%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle, rgba(129,140,248,.05) 0%, transparent 65%)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1120, margin:'0 auto', width:'100%' }}>
          <div style={{ animation:'fadeIn .8s ease' }}>
            {/* availability pill */}
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'5px 16px', borderRadius:99,
              background:'#10b98110', border:'1px solid #10b98130',
              fontSize:11, color:'#10b981', fontFamily:'"DM Mono", monospace',
              marginBottom:36, letterSpacing:'1px',
            }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#10b981', display:'inline-block', animation:'ping 1.8s cubic-bezier(0,0,.2,1) infinite', boxShadow:'0 0 0 0 rgba(16,185,129,.6)' }} />
              OPEN TO OPPORTUNITIES
            </div>

            <h1 className="hero-title" style={{
              fontFamily:'"Cormorant Garamond", serif',
              fontSize:'clamp(52px, 9vw, 106px)',
              fontWeight:700, lineHeight:.96, letterSpacing:'-2px',
              color:'#f1f5f9', marginBottom:6,
            }}>
              Vivek V Salimath
            </h1>
            <h2 className="grad-text" style={{
              fontFamily:'"Cormorant Garamond", serif',
              fontSize:'clamp(32px, 5vw, 60px)',
              fontWeight:600, lineHeight:1.1, letterSpacing:'-1px',
              fontStyle:'italic', marginBottom:32,
            }}>
              Data Scientist & AI/ML Engineer
            </h2>

            <p style={{
              fontSize:'clamp(14px, 1.6vw, 17px)', color:'#475569',
              lineHeight:1.85, maxWidth:580, marginBottom:48, fontWeight:300,
            }}>
              B.E. in Artificial Intelligence & Machine Learning from BKIT. 480+ hours of certified
              training, dual internships at ExcelR and Rooman Technologies, and hands-on collaboration
              with IBM Expert Labs on production-grade NMT systems.
            </p>

            {/* CTA */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:14, marginBottom:56 }}>
              <button onClick={() => scrollTo('projects')}
                onMouseEnter={() => setCursorBig(true)} onMouseLeave={() => setCursorBig(false)}
                style={{
                  display:'flex', alignItems:'center', gap:8, padding:'13px 28px',
                  background:'#10b981', border:'none', borderRadius:10,
                  color:'#052e1c', fontSize:13, fontWeight:700, fontFamily:'DM Sans',
                  cursor:'none', letterSpacing:'.3px', transition:'all .2s',
                }}
                onMouseEnterCapture={e => e.currentTarget.style.background='#059669'}
                onMouseLeaveCapture={e => e.currentTarget.style.background='#10b981'}>
                View Projects <ArrowUpRight size={15} />
              </button>

              <button onClick={() => scrollTo('experience')} style={{
                display:'flex', alignItems:'center', gap:8, padding:'12px 28px',
                background:'transparent', border:'1px solid #1a2235', borderRadius:10,
                color:'#64748b', fontSize:13, fontFamily:'DM Sans', cursor:'none',
                transition:'all .2s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='#2a3a55';e.currentTarget.style.color='#f1f5f9';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='#1a2235';e.currentTarget.style.color='#64748b';}}>
                <Briefcase size={15}/> Experience
              </button>

              <a href="https://drive.google.com/file/d/1HmspoMe-AGmeCWmCKaZpMrLC1secCtyg/view" target="_blank" rel="noreferrer" style={{
                display:'flex', alignItems:'center', gap:8, padding:'12px 28px',
                background:'transparent', border:'1px solid #1a2235', borderRadius:10,
                color:'#64748b', fontSize:13, fontFamily:'DM Sans', cursor:'none',
                textDecoration:'none', transition:'all .2s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='#2a3a55';e.currentTarget.style.color='#f1f5f9';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='#1a2235';e.currentTarget.style.color='#64748b';}}>
                <Download size={15}/> Resume
              </a>
            </div>

            {/* Socials */}
            <div style={{ display:'flex', gap:24 }}>
              {[
                { href:'https://github.com/viveksalimath', icon:Github, label:'GitHub' },
                { href:'https://www.linkedin.com/in/vivek-v-salimath-182523289', icon:Linkedin, label:'LinkedIn' },
                { href:'mailto:vivekvsalimath@gmail.com', icon:Mail, label:'Email' },
                { href:'tel:9632270746', icon:Phone, label:'Phone' },
              ].map(({ href, icon:Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                  onMouseEnter={e=>{e.currentTarget.style.color='#f1f5f9';e.currentTarget.style.transform='translateY(-3px)';setCursorBig(true);}}
                  onMouseLeave={e=>{e.currentTarget.style.color='#2a3a55';e.currentTarget.style.transform='none';setCursorBig(false);}}
                  style={{ color:'#2a3a55', cursor:'none', display:'flex', transition:'all .25s' }}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* scroll hint */}
          <div style={{
            position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)',
            display:'flex', flexDirection:'column', alignItems:'center', gap:6,
            color:'#1a2235', fontSize:10, fontFamily:'"DM Mono",monospace', letterSpacing:'3px',
            animation:'float 3.2s ease infinite',
          }}>
            SCROLL<ChevronDown size={14}/>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─────────────────────────────────────────────────────── */}
      <section id="experience" style={{ padding:'110px 32px', background:'#060b14' }}>
        <div style={{ maxWidth:1120, margin:'0 auto' }}>
          <Reveal>
            <span style={{ fontFamily:'"DM Mono",monospace', fontSize:11, color:'#10b981', letterSpacing:'3px', display:'block', marginBottom:12 }}>WORK HISTORY</span>
            <h2 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(30px,5vw,50px)', fontWeight:700, color:'#f1f5f9', letterSpacing:'-1px', marginBottom:56 }}>Experience</h2>
          </Reveal>

          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            {experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div className="exp-card">
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:12, marginBottom:20 }}>
                    <div>
                      <h3 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:22, fontWeight:700, color:'#f1f5f9', marginBottom:4 }}>{exp.role}</h3>
                      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <span style={{ fontSize:14, color: exp.color, fontWeight:500 }}>{exp.company}</span>
                        <span style={{ width:4, height:4, borderRadius:'50%', background:'#2a3a55' }} />
                        <span style={{ fontSize:12, color:'#475569', fontFamily:'"DM Mono",monospace' }}>{exp.location}</span>
                      </div>
                    </div>
                    <span style={{
                      padding:'5px 14px', borderRadius:99, fontSize:11,
                      background: exp.color + '14', color: exp.color,
                      border:`1px solid ${exp.color}33`, fontFamily:'"DM Mono",monospace',
                      letterSpacing:'0.5px', whiteSpace:'nowrap',
                    }}>{exp.period}</span>
                  </div>

                  <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                        <div style={{ width:6, height:6, borderRadius:'50%', background: exp.color, flexShrink:0, marginTop:6 }} />
                        <span style={{ fontSize:13.5, color:'#64748b', lineHeight:1.7 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education inline */}
          <Reveal delay={0.2}>
            <div style={{ marginTop:24 }} className="exp-card">
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:12 }}>
                <div style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'#10b98114', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <GraduationCap size={20} style={{ color:'#10b981' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:20, fontWeight:700, color:'#f1f5f9', marginBottom:4 }}>
                      B.E. — Artificial Intelligence & Machine Learning
                    </h3>
                    <p style={{ fontSize:13, color:'#475569' }}>Bheemanna Khandre Institute of Technology, Bhalki</p>
                  </div>
                </div>
                <span style={{ padding:'5px 14px', borderRadius:99, fontSize:11, background:'#10b98114', color:'#10b981', border:'1px solid #10b98133', fontFamily:'"DM Mono",monospace' }}>Dec 2021 – Mar 2025</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PROJECTS ───────────────────────────────────────────────────────── */}
      <section id="projects" className="grid-lines" style={{ padding:'110px 32px', background:'#07101c' }}>
        <div style={{ maxWidth:1120, margin:'0 auto' }}>
          <Reveal>
            <span style={{ fontFamily:'"DM Mono",monospace', fontSize:11, color:'#10b981', letterSpacing:'3px', display:'block', marginBottom:12 }}>GITHUB PROJECTS</span>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:12 }}>
              <h2 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(30px,5vw,50px)', fontWeight:700, color:'#f1f5f9', letterSpacing:'-1px' }}>Case Studies</h2>
              <a href="https://github.com/viveksalimath" target="_blank" rel="noreferrer" style={{
                display:'flex', alignItems:'center', gap:6, color:'#475569',
                fontSize:12, fontFamily:'"DM Mono",monospace', textDecoration:'none',
                cursor:'none', transition:'color .2s',
              }}
              onMouseEnter={e=>e.currentTarget.style.color='#10b981'}
              onMouseLeave={e=>e.currentTarget.style.color='#475569'}>
                <Github size={14}/> viveksalimath <ArrowUpRight size={12}/>
              </a>
            </div>
            <p style={{ color:'#3a4f6a', fontSize:13, marginBottom:40 }}>Real projects from GitHub — ML, GenAI, web development, and more.</p>
          </Reveal>

          {/* Filter tabs */}
          <Reveal delay={0.05}>
            <div style={{ display:'flex', gap:8, marginBottom:48, flexWrap:'wrap' }}>
              {types.map(t => (
                <button key={t} className={`filter-btn${activeFilter===t?' active':''}`}
                  onClick={() => setActiveFilter(t)}>{t}</button>
              ))}
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20 }}>
            {filtered.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─────────────────────────────────────────────────────────── */}
      <section id="skills" style={{ padding:'110px 32px', background:'#060b14' }}>
        <div style={{ maxWidth:1120, margin:'0 auto' }}>
          <Reveal>
            <span style={{ fontFamily:'"DM Mono",monospace', fontSize:11, color:'#10b981', letterSpacing:'3px', display:'block', marginBottom:12 }}>EXPERTISE</span>
            <h2 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(30px,5vw,50px)', fontWeight:700, color:'#f1f5f9', letterSpacing:'-1px', marginBottom:56 }}>Technical Stack</h2>
          </Reveal>

          {/* Skill groups */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:20, marginBottom:48 }}>
            {skills.map(({ label, icon:Icon, color, items }, i) => (
              <Reveal key={label} delay={i * 0.07}>
                <div style={{ background:'#09101d', border:'1px solid #1a2235', borderRadius:16, padding:'28px 28px 24px' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                    <div style={{ width:36, height:36, borderRadius:9, background:color+'18', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <Icon size={17} style={{ color }} />
                    </div>
                    <h3 style={{ fontSize:15, fontWeight:600, color:'#e2e8f0' }}>{label}</h3>
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {items.map(skill => <span key={skill} className="skill-chip">{skill}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Certifications */}
            <Reveal delay={0.42}>
              <div style={{ background:'#09101d', border:'1px solid #1a2235', borderRadius:16, padding:'28px 28px 24px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                  <div style={{ width:36, height:36, borderRadius:9, background:'#f59e0b18', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Award size={17} style={{ color:'#f59e0b' }} />
                  </div>
                  <h3 style={{ fontSize:15, fontWeight:600, color:'#e2e8f0' }}>Certifications</h3>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {certs.map((c, i) => (
                    <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                      <div style={{ width:7, height:7, borderRadius:'50%', background:c.color, flexShrink:0, marginTop:5 }} />
                      <div>
                        <p style={{ fontSize:13, color:'#cbd5e1', fontWeight:500, marginBottom:1 }}>{c.name}</p>
                        {c.issuer && <p style={{ fontSize:11, color:'#3a4f6a', fontFamily:'"DM Mono",monospace' }}>{c.issuer}</p>}
                        <p style={{ fontSize:11, color:'#3a4f6a', fontFamily:'"DM Mono",monospace' }}>{c.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats row */}
          <Reveal delay={0.1}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:16 }}>
              {[
                { num:'480+', label:'Training Hours', sub:'NSDC Level 5 Certified' },
                { num:'38', label:'GitHub Repos', sub:'Public projects' },
                { num:'2', label:'Internships', sub:'ExcelR & Rooman Technologies' },
                { num:'5+', label:'Certifications', sub:'Microsoft, IBM, Google, NSDC' },
              ].map(({ num, label, sub }) => (
                <div key={label} style={{ background:'#09101d', border:'1px solid #1a2235', borderRadius:14, padding:'24px 20px', textAlign:'center' }}>
                  <p style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:42, fontWeight:700, color:'#10b981', lineHeight:1 }}>{num}</p>
                  <p style={{ fontSize:13, color:'#94a3b8', fontWeight:500, marginTop:6 }}>{label}</p>
                  <p style={{ fontSize:11, color:'#3a4f6a', fontFamily:'"DM Mono",monospace', marginTop:3 }}>{sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="grid-lines" style={{ padding:'110px 32px 80px', background:'#07101c' }}>
        <div style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>
          <Reveal>
            <span style={{ fontFamily:'"DM Mono",monospace', fontSize:11, color:'#10b981', letterSpacing:'3px', display:'block', marginBottom:12 }}>REACH OUT</span>
            <h2 style={{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(36px,7vw,72px)', fontWeight:700, letterSpacing:'-1.5px', color:'#f1f5f9', lineHeight:.95, marginBottom:20 }}>
              Let's Build<br/><span className="grad-text" style={{ fontStyle:'italic' }}>Something.</span>
            </h2>
            <p style={{ color:'#3a4f6a', lineHeight:1.8, maxWidth:440, margin:'0 auto 52px', fontWeight:300, fontSize:14 }}>
              Open to full-time Data Science, ML, and AI Engineering roles. Have an opportunity or project? Let's connect.
            </p>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginBottom:60 }}>
            {[
              { href:'mailto:vivekvsalimath@gmail.com', icon:Mail, label:'Email', sub:'vivekvsalimath@gmail.com' },
              { href:'tel:9632270746', icon:Phone, label:'Phone', sub:'+91 96322 70746' },
              { href:'https://www.linkedin.com/in/vivek-v-salimath-182523289', icon:Linkedin, label:'LinkedIn', sub:'Connect with me' },
            ].map(({ href, icon:Icon, label, sub }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <a href={href} target="_blank" rel="noreferrer" className="contact-card">
                  <div style={{ width:48, height:48, borderRadius:12, background:'#10b98114', border:'1px solid #10b98130', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Icon size={20} style={{ color:'#10b981' }} />
                  </div>
                  <p style={{ fontSize:14, fontWeight:600, color:'#e2e8f0' }}>{label}</p>
                  <p style={{ fontSize:11, color:'#3a4f6a', fontFamily:'"DM Mono",monospace' }}>{sub}</p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Footer */}
          <Reveal>
            <div style={{ borderTop:'1px solid #1a2235', paddingTop:36 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:14 }}>
                <span style={{ fontFamily:'"Cormorant Garamond",serif', fontWeight:700, fontSize:20, color:'#f1f5f9' }}>
                  V<span style={{ color:'#10b981', fontStyle:'italic' }}>.S</span>
                </span>
                <p style={{ fontSize:11, color:'#1a2a3d', fontFamily:'"DM Mono",monospace' }}>© {new Date().getFullYear()} Vivek V Salimath</p>
                <div style={{ display:'flex', gap:18 }}>
                  {[
                    { href:'https://github.com/viveksalimath', icon:Github },
                    { href:'https://www.linkedin.com/in/vivek-v-salimath-182523289', icon:Linkedin },
                    { href:'mailto:vivekvsalimath@gmail.com', icon:Mail },
                  ].map(({ href, icon:Icon }, i) => (
                    <a key={i} href={href} target="_blank" rel="noreferrer"
                      style={{ color:'#1a2a3d', cursor:'none', transition:'color .2s' }}
                      onMouseEnter={e=>e.currentTarget.style.color='#10b981'}
                      onMouseLeave={e=>e.currentTarget.style.color='#1a2a3d'}>
                      <Icon size={17}/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}