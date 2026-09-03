import { useEffect, useRef, useState } from 'react'
import { portfolioData } from './data/portfolioData'
import './App.css'
import './project-stack.css'
import './project-scroll.css'
import './sticky-fix.css'
import './font-overrides.css'

const IconArrow = ({ down = false }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={down ? 'M12 4v16m0 0 6-6m-6 6-6-6' : 'M7 17 17 7M8 7h9v9'} /></svg>
const IconGithub = () => <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.11c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.28-5.14 5.56.4.35.76 1.04.76 2.1v3.12c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" /></svg>
const IconLinkedin = () => <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5.1 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.3 9.2h3.6v11.5H3.3V9.2Zm5.8 0h3.5v1.57h.05c.49-.93 1.69-1.91 3.47-1.91 3.71 0 4.4 2.44 4.4 5.62v6.22h-3.6v-5.51c0-1.31-.02-3-1.83-3s-2.11 1.43-2.11 2.9v5.61H9.1V9.2Z" /></svg>
const ContactIcon = ({ type }) => type === 'email' ? <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg> : type === 'whatsapp' ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.2 4.8A9.8 9.8 0 0 0 3 16.4L2 21l4.7-1.2a9.8 9.8 0 0 0 12.5-15ZM12 19a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.8.7.7-2.7-.2-.3A7.2 7.2 0 1 1 12 19Z" /><path d="M9.3 8.3c.2-.3.4-.3.7-.3h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.7 1.2 1.7 2 3 2.5l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.3.6-.2.9-.8 1.4-1.7 1.5-2.2.2-2.2-3.3-6.4-3.3-6.5-6.1 0-.5.2-1 .4-1.3Z" /></svg> : type === 'linkedin' ? <IconLinkedin /> : <IconGithub />

const ProjectArt = ({ type }) => <div className={`project-art ${type}`}><span className="art-no">PROJECT / 0{type === 'vovo' ? 2 : type === 'scrap' ? 1 : type === 'sports' ? 3 : type === 'school' ? 4 : type === 'photo' ? 5 : 6}</span>{type === 'scrap' && <><div className="art-word">SCRAP<br /><i>GURU</i></div><div className="art-disc" /></>}{type === 'vovo' && <><div className="vovo-mark">V</div><div className="art-word small">MOVE<br /><i>SMART.</i></div><div className="route-line" /></>}{type === 'sports' && <><div className="dashboard"><b>SBMS</b><span>BOOK SMARTER.</span><div className="chart" /></div></>}{type === 'school' && <><div className="art-word">PEOPLE<br /><i>FIRST.</i></div><div className="avatar-stack"><i /><i /><i /></div></>}{type === 'photo' && <><div className="art-word small">STORIES<br /><i>BY VAMSHE.</i></div><div className="camera-lens" /></>}{type === 'consulting' && <><div className="art-word small">VS<br /><i>CONSULTANCY</i></div><div className="orbit" /></>}</div>

function App() {
  const { person, experience, skills, services, projects, education, stats } = portfolioData
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoMuted, setVideoMuted] = useState(true)
  const heroVideo = useRef(null)

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  const toggleVideoSound = () => {
    const video = heroVideo.current
    if (!video) return
    video.muted = !videoMuted
    setVideoMuted(video.muted)
  }

  return <div className="portfolio">
    <header className="site-nav"><a className="logo" href="#home"><span>RK</span>{person.displayName}</a><nav className={menuOpen ? 'open' : ''}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav><a className="nav-mail" href={`mailto:${person.email}`}>Email me <IconArrow /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button></header>
    <main>
      <section className={`hero-section${videoReady ? ' has-video' : ''}`} id="home">
        <video className="hero-video" ref={heroVideo} autoPlay loop muted playsInline preload="metadata" poster="/hero-poster.svg" onCanPlay={() => setVideoReady(true)} onError={() => setVideoReady(false)} aria-hidden="true">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
        <div className="noise" /><div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
        <div className="hero-content reveal"><p className="overline">FULL STACK DEVELOPER <span>/</span> HYDERABAD, INDIA</p><h1>Building<br /><em>scalable</em><br />digital systems.</h1><p className="hero-summary">{person.summary} Focused on performance, reliability, and thoughtful user experiences.</p><div className="hero-actions"><a className="gradient-button" href="#projects">View my work <IconArrow /></a><a className="text-button" href={`mailto:${person.email}`}>Contact me <IconArrow /></a></div></div>
        <div className="hero-figure" aria-hidden="true"><div className="figure-ring" /><div className="figure-core">RK</div><span className="figure-label">REACT<br />NODE<br />MONGO</span></div>
        <a className="scroll-cue" href="#about">Scroll to explore <IconArrow down /></a>
        <button className="video-sound" type="button" onClick={toggleVideoSound} aria-label={videoMuted ? 'Unmute hero video' : 'Mute hero video'} disabled={!videoReady}><span aria-hidden="true">{videoMuted ? '⌁×' : '⌁'}</span>{videoMuted ? 'Sound off' : 'Sound on'}</button>
      </section>

      <section className="about-section section-pad" id="about"><div className="about-stage"><div className="about-decoration about-crescent" aria-hidden="true" /><div className="about-decoration about-brick" aria-hidden="true"><i /><i /><i /><i /></div><div className="section-intro reveal"><p className="overline">01 / ABOUT ME</p><h2>About me</h2><p className="section-lede">Full Stack Developer building scalable web applications with a focus on performance, reliability, and user experience. Experienced across frontend, backend, databases, and cloud infrastructure, turning complex requirements into clean, efficient, and production-ready solutions.</p></div></div><div className="about-grid"><div className="about-copy reveal"><p>I work across frontend, backend, databases, mobile, and cloud tooling. That breadth helps me make better product decisions and deliver complete, maintainable systems.</p><a className="inline-link" href={person.github} target="_blank" rel="noreferrer">Open GitHub profile <IconArrow /></a></div><div className="stat-grid reveal">{stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div></section>

      <section className="experience-section section-pad" id="experience"><div className="center-title reveal"><p className="overline">02 / EXPERIENCE</p><h2>Professional<br /><em>milestones.</em></h2></div><div className="timeline">{experience.map((item, index) => <article className="timeline-item reveal" key={item.company}><div className="timeline-marker">0{index + 1}</div><div><p className="overline">{item.period}</p><h3>{item.role}<small>{item.company}</small></h3><p className="timeline-location">{item.location} · {item.stack}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>

      <section className="skills-section section-pad" id="skills"><div className="section-intro reveal"><p className="overline">03 / THE STACK</p><h2>Tools for<br /><em>real products.</em></h2></div><div className="skills-list reveal">{Object.entries(skills).map(([category, items]) => <div className="skill-row" key={category}><span>{category === 'CloudAI' ? 'Cloud / AI' : category}</span><div>{items.map((skill) => <b key={skill}>{skill}</b>)}</div></div>)}</div></section>

      <section className="services-section section-pad" id="services"><div className="section-intro reveal"><p className="overline">04 / WHAT I DO</p><h2>Services for<br /><em>strong builds.</em></h2><p className="section-lede">From the first interface to a reliable production release, I help turn ideas into useful digital products.</p></div><div className="services-list">{services.map((service, index) => <article className="service-row reveal" key={service.title}><strong>{String(index + 1).padStart(2, '0')}</strong><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}</div></section>

      <section className="projects-section section-pad" id="projects"><div className="section-intro project-heading reveal"><p className="overline">04 / SELECTED WORK</p><h2>Built to be<br /><em>useful.</em></h2><p className="section-lede">Live products, mobile ecosystems, and systems built around real users and real workflows.</p></div><div className="project-stack">{projects.map((project, index) => <article className="project-card reveal" key={project.name}><div className="project-card-head"><div className="project-index">{String(index + 1).padStart(2, '0')}</div><div className="project-title"><p className="overline">{project.category}</p><h3>{project.name}</h3></div><div className="project-actions">{project.live && <a className="project-live" href={project.live} target="_blank" rel="noreferrer">Live project <IconArrow /></a>}{project.driver && <a className="project-live" href={project.driver} target="_blank" rel="noreferrer">Driver app <IconArrow /></a>}<button onClick={() => setActiveProject(project)} aria-label={`View details for ${project.name}`}><IconArrow /></button></div></div><ProjectArt type={project.type} /><div className="project-info"><div><p>{project.description}</p><div className="tech-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Open live <IconArrow /></a>}{project.source && <a href={project.source} target="_blank" rel="noreferrer">Source <IconGithub /></a>}</div></div></article>)}</div></section>

      <section className="education-section section-pad" id="education"><div className="center-title reveal"><p className="overline">05 / EDUCATION</p><h2>Foundation<br /><em>matters.</em></h2></div><div className="education-card reveal"><span className="edu-year">{education.period}</span><div><p className="overline">BACHELOR&apos;S DEGREE</p><h3>{education.degree}</h3><p>{education.school}</p></div><strong>{education.result}</strong></div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-heading reveal"><p className="overline">06 / CONTACT</p><h2>Get in touch</h2><p>Pick whichever channel suits you</p></div><div className="contact-cards">{[{ type: 'email', label: 'Email', value: person.email, href: `mailto:${person.email}` }, { type: 'whatsapp', label: 'WhatsApp', value: person.phone, href: `https://wa.me/${person.phone.replace(/\D/g, '')}` }, { type: 'linkedin', label: 'LinkedIn', value: 'Kurva Ramu', href: person.linkedin }, { type: 'github', label: 'GitHub', value: 'bharath820', href: person.github }].map((channel) => <a className="contact-card" key={channel.type} href={channel.href} target={channel.type === 'email' || channel.type === 'whatsapp' ? undefined : '_blank'} rel={channel.type === 'email' || channel.type === 'whatsapp' ? undefined : 'noreferrer'}><span className="contact-icon"><ContactIcon type={channel.type} /></span><span className="contact-arrow"><IconArrow /></span><span className="contact-label">{channel.label}</span><strong>{channel.value}</strong></a>)}</div></section>
    </main>
    <footer className="site-footer"><span>{person.displayName}</span><p>© 2026 · Built with React and intention.</p><div><a href={person.github} target="_blank" rel="noreferrer"><IconGithub /></a><a href={person.linkedin} target="_blank" rel="noreferrer"><IconLinkedin /></a></div></footer>
    {activeProject && <div className="modal-backdrop" onClick={() => setActiveProject(null)}><article className="project-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details">×</button><p className="overline">{activeProject.category}</p><h2>{activeProject.name}</h2><p>{activeProject.description}</p><h3>Key features</h3><ul>{activeProject.features?.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="tech-tags">{activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></article></div>}
  </div>
}

export default App
