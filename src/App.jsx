import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sparkles, Code2, Palette, GraduationCap, Download, Copy, Check } from "lucide-react";
import SectionHeading from "./components/SectionHeading.jsx";
import { projects, skills, experience, leadership, education, certifications, research } from "./data/portfolio.js";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeStory, setActiveStory] = useState(null);
  const email = "thamashirnanayakkara@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  const nav = ["About", "Skills", "Work", "Experience", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="top-strip"><span>PORTFOLIO / 2026</span><span>SOFTWARE ENGINEERING · DIGITAL EXPERIENCES</span><span>SCROLL TO EXPLORE ↓</span></div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>TN<span>®</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map((item, i) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}><span>0{i + 1}</span>{item}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>LET'S CONNECT <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"></div>
          <div className="hero-copy">
            <motion.div initial="hidden" animate="show" variants={reveal} className="availability"><span className="pulse"></span> OPEN TO LEARNING & OPPORTUNITIES</motion.div>
            
            <motion.h1 initial="hidden" animate="show" variants={{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.12}}}}>
              <motion.span variants={reveal}>THAMASHI</motion.span>
              <motion.span className="surname" variants={reveal}>NANAYAKKARA<span className="star">✳</span></motion.span>
            </motion.h1>
            <motion.div className="hero-bottom" initial="hidden" animate="show" variants={reveal}>
              <p>Software Engineering undergraduate<br/>with a creative eye for digital experiences.</p>
              <a href="#work" className="round-link" aria-label="Explore work"><ArrowDown /></a>
            </motion.div>
          </div>
          <motion.div className="portrait-wrap" initial={{opacity:0,scale:.92,rotate:3}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:.9,delay:.25}}>
            <div className="portrait-frame">
              <img src="/images/thamashi-hero-final.png" alt="Portrait of Thamashi Nanayakkara" />
            </div>
          </motion.div>
          <div className="hero-scribble">✳</div>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length:4}).map((_,i)=><span key={i}>CODE <b>✳</b> CREATE <b>✳</b> EXPLORE <b>✳</b> REPEAT <b>✳</b> </span>)}</div></div>

        <section className="about section-pad" id="about">
          <div className="about-number">01 / WHO I AM</div>
          <div className="about-content">
            <SectionHeading eyebrow="A BIT ABOUT ME" title={<>Curious by nature.<br/><em>Creative by choice.</em></>} />
            <div className="about-columns">
              <p className="about-lead">I'm Thamashi — a third-year Software Engineering undergraduate at BCI Campus, interested in building useful digital experiences and exploring the space where technology meets creativity.</p>
              <div className="about-detail">
                <p>I enjoy working across software development, front-end experiences and creative design. Alongside my studies, I've explored projects in web and mobile development, embedded systems and simulation.</p>
                <p>Outside the code, teaching and leadership experiences have helped me grow as a communicator, collaborator and problem-solver. I'm always curious about what I can learn and create next.</p>
                <a className="text-link" href="mailto:thamashirnanayakkara@gmail.com">LET'S CONNECT <ArrowUpRight size={17}/></a>
              </div>
            </div>
          </div>
          <div className="about-doodle">✳</div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-topline"><span>02 / MY TOOLKIT</span><span>LEARNING IS ALWAYS IN PROGRESS ↗</span></div>
          <SectionHeading eyebrow="THINGS I WORK WITH" title={<>A toolbox that's<br/><em>always growing.</em></>} light />
          <div className="skill-grid">
            {skills.map((skill, i) => <motion.div className="skill-card" key={skill.group} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}>
              <span className="skill-index">0{i+1}</span><h3>{skill.group}</h3><div className="skill-tags">{skill.items.map(item=><span key={item}>{item}</span>)}</div>
            </motion.div>)}
          </div>
          <p className="skills-footnote">A selection of technologies and tools listed in my current CV.</p>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-topline"><span>03 / SELECTED PROJECTS</span><span>BUILT WITH CURIOSITY + CODE</span></div>
          <SectionHeading eyebrow="A FEW THINGS I'VE MADE" title={<>Ideas into<br/><em>working things.</em></>} note="A selection of academic and personal projects. Project visuals and repository links can be added as they become available." />
          <div className="project-list">
            {projects.map((project, i) => <motion.article className={`project-card accent-${project.accent}`} key={project.number} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}} variants={reveal}>
              <div className="project-visual">
                <span className="project-number">{project.number} / 06</span>
                <div className="project-art">{i===0 ? <div className="fingerprint-art">◎</div> : i===1 ? <div className="study-art"><span>ST</span><i>TRACK</i></div> : i===2 ? <div className="web-art">bodhima<span>.lk</span></div> : i===3 ? <div className="cube-art">◇</div> : i===4 ? <div className="robot-art">↝</div> : <div className="canteen-art">PRE<br/>ORDER</div>}</div>
                <span className="visual-label">PROJECT / {project.number}</span>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                {project.title === "Line-Following Robot" ? <button className="project-title-button" onClick={() => setActiveStory("robot")}><h3>{project.title}</h3></button> : <h3>{project.title}</h3>}<p>{project.description}</p>
                <div className="project-stack">{project.stack.map(t=><span key={t}>{t}</span>)}</div>
                {project.title === "Line-Following Robot" && <button className="project-detail-link" onClick={() => setActiveStory("robot")}>VIEW ROBOT & PARTICIPATION CERTIFICATE <ArrowUpRight size={15}/></button>}
                <div className="project-links">{project.github ? <a href={project.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={15}/></a> : <span className="coming-soon">VISUALS & LINKS TO BE ADDED</span>}</div>
              </div>
            </motion.article>)}
          </div>
          <div className="future-note"><Sparkles size={18}/> MORE PROJECTS WILL FIND THEIR PLACE HERE.</div>
        </section>

        <section className="research section-pad" id="research">
          <div className="section-topline"><span>04 / RESEARCH</span><span>ACADEMIC CONTRIBUTIONS</span></div>
          <SectionHeading eyebrow="RESEARCH PRESENTATION" title={<>Exploring questions<br/><em>that matter.</em></>} />
          {research.map(item => <button className="research-entry interactive-entry" key={item.title} onClick={() => setActiveStory("research")}>
            <span className="eyebrow">{item.event} · {item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p><span className="entry-cta">VIEW CERTIFICATE & CONFERENCE PHOTOS ↗</span>
          </button>)}
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-topline"><span>05 / THE JOURNEY SO FAR</span><span>PEOPLE, PROJECTS & PURPOSE</span></div>
          <SectionHeading eyebrow="EXPERIENCE & LEADERSHIP" title={<>Learning beyond<br/><em>the classroom.</em></>} />
          <div className="experience-layout">
            <div className="timeline">
              {experience.map((item,i)=><motion.button type="button" className="timeline-item timeline-button" key={item.place} onClick={() => item.place === "Tiny Toes Academy" && setActiveStory("tinytoes")} initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal}>
                <span className="timeline-dot"></span><span className="timeline-period">{item.period}</span><h3>{item.role}</h3><h4>{item.place}</h4><p>{item.text}</p>{item.place === "Tiny Toes Academy" && <span className="entry-cta">EXPLORE THE ACADEMY ↗</span>}
              </motion.button>)}
            </div>
            <aside className="leadership-card">
              <span className="eyebrow">LEADERSHIP & COMMUNITY</span>
              {leadership.map(item=><button type="button" className="leadership-item leadership-button" key={item.group} onClick={() => setActiveStory(item.story)}><span>{item.period}</span><h3>{item.role}</h3><p>{item.group}</p><small>VIEW DETAILS ↗</small></button>)}
              <div className="leadership-symbol">✳</div>
            </aside>
          </div>
        </section>

        <section className="education section-pad">
          <div className="section-topline"><span>06 / LEARNING & GROWTH</span><span>FOUNDATIONS + NEW PERSPECTIVES</span></div>
          <div className="education-grid">
            <div><SectionHeading eyebrow="EDUCATION" title={<>Built on<br/><em>curiosity.</em></>} />
              {education.map(item=><div className="education-item" key={item.name}><GraduationCap size={19}/><div><h3>{item.name}</h3><p>{item.place}</p><span>{item.detail}</span></div></div>)}
            </div>
            <div className="certifications"><span className="eyebrow">CERTIFICATIONS & LEARNING</span><h2>Always adding<br/>to the <em>toolkit.</em></h2>
              <ul>{certifications.map(item=><li key={item.id}><button type="button" onClick={() => setActiveStory(item.id)}>{item.label}<ArrowUpRight size={15}/></button></li>)}</ul>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-art" aria-hidden="true">
            <span className="contact-orbit"></span>
            <img src="/images/thamashi-portrait-new.png" alt="Portrait of Thamashi Nanayakkara" />
            <span className="contact-art-note">GET IN TOUCH <b>✳</b></span>
          </div>
          <div className="contact-content">
            
            <span className="eyebrow">07 / CONTACT</span>
            <h2>Let's connect.<br/><em>I'm happy to</em><br/>hear from you.</h2>
            <a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight/></a>
            <div className="contact-actions">
              <a className="email-action" href={`mailto:${email}`}><Mail size={16}/> EMAIL ME</a>
              <button className="email-action copy-email" type="button" onClick={copyEmail}>{emailCopied ? <Check size={16}/> : <Copy size={16}/>} {emailCopied ? "COPIED!" : "COPY EMAIL"}</button>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/thamashinanayakkara" target="_blank" rel="noreferrer"><Linkedin size={17}/> LINKEDIN <ArrowUpRight size={14}/></a>
              <a href="https://github.com/thamashirnanayakkara" target="_blank" rel="noreferrer"><Github size={17}/> GITHUB <ArrowUpRight size={14}/></a>
              <a href={`mailto:${email}`}><Mail size={17}/> EMAIL <ArrowUpRight size={14}/></a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>{activeStory && <AchievementModal story={activeStory} onClose={() => setActiveStory(null)} />}</AnimatePresence>
      <footer className="footer"><a href="#home" className="footer-brand">THAMASHI NANAYAKKARA<span>®</span></a><span>DESIGNED WITH CURIOSITY · BUILT WITH CODE</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} THAMASHI NANAYAKKARA</small></footer>
    </>
  );
}

const storyContent = {
  research: {eyebrow:"ACADEMIC CONTRIBUTION · 09 OCTOBER 2026",title:"Research presentation",intro:"Presented a paper exploring the relationship between cyberbullying victimization, self-esteem and psychological well-being among undergraduate students in Sri Lanka at the BCI International Research Conference 2026.",facts:["BCI International Research Conference 2026","Research paper presentation","9 October 2026"],images:[ ["Research presentation certificate","/images/achievements/research-certificate.jpg","certificate"],["Presenting at the conference","/images/achievements/research-presentation.jpg"],["Conference recognition","/images/achievements/research-award.jpg"]]},
  robot: {eyebrow:"ROBOTICS · BCI SCHOOL OF COMPUTING",title:"Line-Following Robot Competition 2026",intro:"Participated in the BCI Campus Line Following Robot Competition, presenting a physical prototype built around an ESP32-based control setup and line-detection sensor array.",facts:["Participation certificate","BCI Campus School of Computing","23 May 2026","Arduino · C/C++ · IoT"],images:[["Competition participation certificate","/images/achievements/robot-certificate.jpg","certificate"],["Line-following robot prototype","/images/achievements/robot-prototype.jpg"],["Competition group photograph","/images/achievements/robot-team.jpg"]]},
  python: {eyebrow:"PROGRAMMING · UNIVERSITY OF MORATUWA",title:"Python for Beginners",intro:"Completed the online Python for Beginners learning programme conducted by the Department of Computer Science & Engineering, Faculty of Engineering, University of Moratuwa.",facts:["University of Moratuwa · CODL","Issued 5 September 2024","Online learning programme"],images:[["Python for Beginners certificate","/images/achievements/python-certificate.jpg","certificate"]]},
  ditec: {eyebrow:"INFORMATION TECHNOLOGY · ESOFT",title:"Assured Diploma in Information Technology",intro:"Completed the Assured Diploma in Information Technology (DITEC) programme at ESOFT Metro Campus, a Pearson Assured organisation.",facts:["ESOFT Metro Campus","Completed June 2022","Certificate issued 2 July 2022"],images:[["DITEC certificate","/images/achievements/ditec-certificate.jpg","certificate"]]},
  english: {eyebrow:"ENGLISH · ESOFT",title:"Assured Diploma in English",intro:"Completed the Assured Diploma in English (DIE) programme at ESOFT Metro Campus, a Pearson Assured organisation.",facts:["ESOFT Metro Campus","Completed June 2022","Certificate issued 2 July 2022"],images:[["Diploma in English certificate","/images/achievements/die-certificate.jpg","certificate"]]},
  claude: {eyebrow:"AI LEARNING · ANTHROPIC",title:"Claude 101",intro:"Completed Anthropic's Claude 101 learning programme and received a certificate of completion.",facts:["Anthropic","Certificate of completion"],images:[["Claude 101 certificate","/images/achievements/claude-101-certificate.jpg","certificate"]]},
  devops: {eyebrow:"WORKSHOP · C-CLARKE INTERNATIONAL INSTITUTE",title:"DevOps Workshop",intro:"Participated in a hands-on, one-day workshop covering DevOps foundations, Azure DevOps, Git and Azure Repos, CI/CD, Azure App Services and deployment strategies.",facts:["C-Clarke International Institute of Digital Science","15 August 2026","One-day workshop · C-Clarke Campus"],images:[["DevOps workshop certificate","/images/achievements/devops-certificate.jpg","certificate"]]},
  coding: {eyebrow:"LEADERSHIP · BCI CAMPUS",title:"PR & Marketing Coordinator",intro:"Served as Marketing and PR Coordinator of the BCI Coding Club. The executive committee agreement documents responsibilities across marketing strategy, social media, website maintenance, public relations, event promotion, and branding and design.",facts:["BCI Coding Club · BCI Campus","Agreement: 25 January 2025 – 25 January 2026","Role continuation after January 2026 not assumed"],images:[["Executive committee agreement · page 1","/images/achievements/coding-agreement-page-1.jpg","certificate"],["Executive committee agreement · page 2","/images/achievements/coding-agreement-page-2.jpg","certificate"],["Office bearers inauguration","/images/achievements/coding-inauguration.jpg"],["Coding Club trophy","/images/achievements/coding-trophy.jpg"]]},
  leo: {eyebrow:"LEADERSHIP · LEO CLUB OF BCI NEGOMBO",title:"Leo Club membership & leadership",intro:"Began as a member of the Leo Club of BCI Negombo and later served as Assistant Secretary during the Leoistic Year 2025/2026. The appreciation letter recognises contributions to documentation, communication, organisational standards, accuracy and accountability.",facts:["Membership certificate dated 19 October 2024","Assistant Secretary · Leoistic Year 2025/2026","Appointed Assistant Secretary again for 2026/2027 (certificate not yet supplied)"],images:[["Leo membership certificate","/images/achievements/leo-membership-certificate.jpg","certificate"],["Assistant Secretary letter of appreciation","/images/achievements/leo-appreciation-letter.jpg","certificate"],["Leo recognition ceremony","/images/achievements/leo-ceremony-bw.jpg"],["Leo installation ceremony","/images/achievements/leo-installation.jpg"]]},
  house: {eyebrow:"CAMPUS LEADERSHIP · 2025",title:"Female House Captain",intro:"Served as Female House Captain at BCI Campus in 2025, taking on a student leadership role within the campus community.",facts:["BCI Campus","Academic year 2025"],images:[["House Captain photograph","/images/achievements/house-captain.jpg"]]},
  tinytoes: {eyebrow:"FOUNDER-LED EDUCATION · EST. 2023",title:"Tiny Toes Academy",intro:"Founded in 2023, Tiny Toes Academy is an ongoing teaching initiative offering physical group classes, individual classes and online classes for students in Sri Lanka and overseas. As founder and educator, Thamashi manages the teaching experience and supports students through different learning formats.",facts:["Founded 2023 · Currently operating","Physical group classes","Individual physical classes","Online classes in Sri Lanka and overseas"],images:[["Tiny Toes Academy logo","/images/achievements/tiny-toes-logo.jpg"],["Founder with academy students","/images/achievements/tiny-toes-class.jpg"]]}
};

function AchievementModal({story,onClose}) {
  const [zoomImage,setZoomImage] = useState(null);
  const data = storyContent[story];
  if (!data) return null;
  return <motion.div className="achievement-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget) onClose();}}>
    <motion.section className="achievement-modal" role="dialog" aria-modal="true" aria-label={data.title} initial={{opacity:0,y:34,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:24,scale:.98}} transition={{duration:.35,ease:[.22,1,.36,1]}}>
      <button className="modal-close" onClick={onClose} aria-label="Close details"><X/></button>
      <div className="modal-heading"><span className="eyebrow">{data.eyebrow}</span><h2>{data.title}</h2><p>{data.intro}</p><div className="modal-facts">{data.facts.map(f=><span key={f}>{f}</span>)}</div></div>
      <div className="modal-gallery">{data.images.map(([label,src,type],i)=><motion.button className={`modal-image ${type||""}`} key={src} onClick={()=>setZoomImage({label,src})} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08*i,duration:.4}}><img src={src} alt={label}/><span>{label} <b>↗</b></span></motion.button>)}</div>
    </motion.section>
    <AnimatePresence>{zoomImage && <motion.div className="image-zoom-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setZoomImage(null)}><button className="zoom-close" onClick={()=>setZoomImage(null)} aria-label="Close enlarged image"><X/></button><motion.img src={zoomImage.src} alt={zoomImage.label} initial={{scale:.94}} animate={{scale:1}} exit={{scale:.94}} onClick={e=>e.stopPropagation()}/></motion.div>}</AnimatePresence>
  </motion.div>;
}


export default App;
