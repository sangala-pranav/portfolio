import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Mail,
  Menu,
  Moon,
  Network,
  Server,
  ShieldCheck,
  Sun,
  Terminal,
  X,
} from 'lucide-react';

const experiences = [
  {
    number: '01',
    title: 'Enterprise Virtualization & Infrastructure Lab',
    type: 'Hands-on lab',
    period: 'Ongoing',
    icon: Server,
    description:
      'Building practical depth in virtualized environments by working with Proxmox VE, Linux, containers, monitoring, backup, and recovery workflows.',
    tags: ['Proxmox VE', 'Linux', 'LXC', 'Virtual Machines'],
  },
  {
    number: '02',
    title: 'Network Architecture & Systems',
    type: 'Technical practice',
    period: '2025 — Present',
    icon: Network,
    description:
      'Designing and troubleshooting structured networks with TCP/IP, DNS, DHCP, and VLAN segmentation, with a focus on clear and reliable systems.',
    tags: ['TCP/IP', 'DNS', 'DHCP', 'VLANs'],
  },
  {
    number: '03',
    title: 'AI-Driven Troubleshooting & Security',
    type: 'Independent study',
    period: 'Ongoing',
    icon: ShieldCheck,
    description:
      'Exploring prompt engineering, AI-assisted diagnostics, privacy, and isolated security experiments to make technical problem solving faster and clearer.',
    tags: ['Prompt Engineering', 'Cybersecurity', 'Privacy'],
  },
];

const skillGroups = [
  { label: 'Operating systems', skills: ['Linux', 'Windows 10 / 11', 'Windows Server', 'macOS'] },
  { label: 'Virtualization & cloud', skills: ['Proxmox VE', 'Virtual Machines', 'LXC', 'Hypervisors', 'Containerization'] },
  { label: 'Networking', skills: ['TCP/IP', 'DNS', 'DHCP', 'VLAN Segmentation', 'Firewalls', 'Network Topology'] },
  { label: 'Systems practice', skills: ['System Administration', 'Hardware / Software Troubleshooting', 'OS Deployment', 'Technical Documentation'] },
];

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell min-h-screen">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top" onClick={closeMenu}>
          <span className="brand-mark">SP</span>
          <span>Sangala Pranav Reddy</span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> B.Tech student · Hyderabad, India</div>
            <h1>Curious about the<br /><em>systems behind</em> everything.</h1>
            <p className="hero-intro">I’m Sangala Pranav Reddy — a technology student building practical skills across infrastructure, networking, cybersecurity, and AI-driven troubleshooting.</p>
            <div className="hero-links">
              <a href="#contact" className="text-link">Let’s connect <ArrowUpRight size={16} /></a>
              <span className="hero-note">Currently learning, experimenting, and building.</span>
            </div>
          </div>
          <div className="hero-aside">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="terminal-card">
              <div className="terminal-top"><span /><span /><span /><small>pranav@lab:~</small></div>
              <div className="terminal-body">
                <p><span className="terminal-muted">$</span> whoami</p>
                <p className="terminal-highlight">systems-minded student</p>
                <p><span className="terminal-muted">$</span> focus --current</p>
                <p className="terminal-highlight">infrastructure + security</p>
                <p><span className="terminal-muted">$</span> <span className="cursor" /></p>
              </div>
            </div>
            <div className="floating-label label-top">01 <span>Explore</span></div>
            <div className="floating-label label-bottom">Open to learning <span>↗</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ChevronDown size={17} /></a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading"><span className="section-index">01</span><span className="rule" /><p>About me</p></div>
          <div className="about-grid">
            <h2>Learning the<br /><em>infrastructure</em><br />of a better future.</h2>
            <div className="about-content">
              <p className="large-copy">I’m a Bachelor of Technology student at MLR Institute of Technology, Hyderabad, building a strong foundation in computer systems and networks through hands-on experimentation.</p>
              <p>My interests sit at the intersection of reliable infrastructure and thoughtful problem solving. I enjoy understanding how systems fit together, documenting what I learn, and using modern tools to make technical work more approachable.</p>
              <div className="about-facts"><div><strong>2026 — 2030</strong><span>B.Tech journey</span></div><div><strong>Hyderabad</strong><span>Telangana, India</span></div><div><strong>Always curious</strong><span>Mindset</span></div></div>
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading"><span className="section-index">02</span><span className="rule" /><p>Experience through practice</p></div>
          <div className="section-intro"><h2>Projects, labs &amp;<br /><em>ongoing curiosity.</em></h2><p>Not a traditional work history — a collection of the environments, tools, and questions shaping how I think about technology.</p></div>
          <div className="experience-list">{experiences.map(({ number, title, type, period, icon: Icon, description, tags }) => <article className="experience-card" key={title}><div className="experience-number">{number}</div><div className="experience-icon"><Icon size={21} /></div><div className="experience-main"><div className="card-meta"><span>{type}</span><span>{period}</span></div><h3>{title}</h3><p>{description}</p><div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="card-arrow" size={21} /></article>)}</div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading"><span className="section-index">03</span><span className="rule" /><p>Technical toolkit</p></div>
          <div className="skills-grid"><div><h2>Tools for<br /><em>making sense</em><br />of systems.</h2><p className="skills-summary">A growing toolkit shaped by labs, personal research, and the habit of looking beneath the surface.</p></div><div className="skill-groups">{skillGroups.map(({ label, skills }) => <div className="skill-group" key={label}><h3>{label}</h3><div className="skill-pills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel"><div className="contact-top"><span className="section-index">04</span><span className="contact-status"><span className="status-dot" /> Available to connect</span></div><h2>Have a question,<br /><em>idea, or opportunity?</em></h2><p>I’m always happy to talk about technology, learning, and interesting problems.</p><div className="contact-links"><a href="mailto:sangalapranav@proton.me"><Mail size={18} /> sangalapranav@proton.me <ExternalLink size={15} /></a><a href="https://www.linkedin.com/in/sangalapranav" target="_blank" rel="noreferrer"><ExternalLink size={18} /> linkedin.com/in/sangalapranav <ExternalLink size={15} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 Sangala Pranav Reddy</span><span>Built with curiosity, care, and a terminal open.</span><a href="#top">Back to top ↑</a><a className="github-link" href="#top" aria-label="Back to top"><ArrowUpRight size={17} /></a></footer>
    </div>
  );
}

export { App };
