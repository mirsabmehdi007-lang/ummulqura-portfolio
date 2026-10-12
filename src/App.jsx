import { useEffect, useRef, useState } from "react";

const P = {
  email: "ummulqura7690@gmail.com", phone: "+92 307 2075390",
  behance: "https://www.behance.net/ummulqura",
  linkedin: "", // paste your LinkedIn profile URL here
};
const roles = ["React Developer", "Python & ML Developer", "Android Developer", "WordPress Developer"];
const filters = [["all", "All"], ["ai", "AI & Data"], ["web", "Web"], ["mobile", "Mobile & IoT"], ["core", "Software Core"]];

const projects = [
  { c: "ai", feat: true, y: "2025", t: "Oil & Gas VFM Monitoring & Automation System", img: "/vfm-dashboard.jpg",
    d: "An intelligent Virtual Flow Meter (VFM) system that turns a manual oil and gas workflow into an AI-assisted one. It combines Python, machine learning, n8n and GoHighLevel (GHL).",
    b: ["Real-time oil, gas and water monitoring", "Predictive analytics and automated alerts", "Well testing with report generation", "Desktop UI designed in Qt Designer"],
    s: ["Python", "Machine Learning", "PyQt", "Qt Designer", "n8n", "GoHighLevel"] },
  { c: "web", y: "2025–26", t: "Stanley Paden", d: "Responsive official website for an award-winning sci-fi author, built to showcase his books.", s: ["React", "Vercel"], l: "stanlyepaden-snowy.vercel.app" },
  { c: "web", y: "2025–26", t: "Adam of Dadam", d: "Story-driven landing site for the children's book Commander Adam and the Spaceship.", s: ["React", "Vercel"], l: "adamofdadam.vercel.app" },
  { c: "web", y: "2025–26", t: "Luke Young", d: "Website for a political reform and public accountability movement.", s: ["React", "Vercel"], l: "luke-young-mai.vercel.app" },
  { c: "web", y: "2024–25", t: "Employee Management System", d: "Full-stack system with separate Admin, Employee and Client portals: attendance, HR data, project tracking and role-based access control.", s: ["React.js", "PHP", "MySQL"] },
  { c: "mobile", y: "2023", t: "DR Remote (FYP)", d: "Healthcare platform with a PHP web portal and Android app: appointments, call and chat, plus an IoT device that tracks blood pressure and oxygen levels.", s: ["PHP", "MySQL", "Java", "Android", "IoT"] },
  { c: "mobile", y: "2024", t: "Eco Nourish", d: "Food waste reduction app with image recognition, expiry tracking, barcode scanning and recipes from leftovers.", s: ["Mobile App", "Image Recognition"] },
  { c: "mobile", y: "2023", t: "Disaster Management System", d: "Android app with disaster awareness and quick access to nearby emergency shelters and safety camps.", s: ["Android", "Java", "SQLite"] },
  { c: "mobile", y: "2023", t: "IoT Automatic Humidifier", d: "Sensor-based humidifier that switches on automatically when humidity drops below a set threshold.", s: ["IoT", "Embedded", "Sensors"] },
  { c: "web", y: "2023", t: "SMHcoders Website", d: "Complete company website built with WordPress and Elementor, with a managed MySQL database and a responsive, easy-to-edit layout.", s: ["WordPress", "Elementor", "PHP", "MySQL"] },
  { c: "web", y: "2021", t: "JUB Digital Website", d: "Dynamic business website with services, gallery, contact form and order inquiry system.", s: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"] },
  { c: "core", y: "2022", t: "Postfix Evaluator", d: "Java Swing desktop app that evaluates postfix expressions using stacks, with documented algorithm and flowcharts.", s: ["Java", "Data Structures"] },
  { c: "core", y: "2022", t: "Tic Tac Toe", d: "C++ game with a computer opponent, win/draw detection and saved results, built for an Operating Systems course in VMware.", s: ["C++", "VMware", "OS"] },
];
const skills = {
  "Frontend": ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
  "Backend & Data": ["PHP", "Python", "Java", "C#", "Kotlin", "SQL", "MySQL", "REST APIs"],
  "AI & Automation": ["AI & Machine Learning", "n8n", "GoHighLevel", "Qt Designer"],
  "CMS & Tools": ["WordPress", "Elementor", "phpMyAdmin", "Git & GitHub", "VS Code", "VMware"],
  "Mobile": ["Android Studio", "Mobile App Development", "Java", "Kotlin"],
  "Practices": ["OOP", "Quality Assurance", "Documentation", "Report Writing", "Graphic Design", "Digital Marketing"],
};
const marquee = ["React.js", "Python", "PHP", "MySQL", "WordPress", "Android", "Machine Learning", "n8n", "Qt Designer", "Java", "JavaScript", "UI/UX"];
const certs = ["Remote Work Professional Certification (RWPC) – CertiProf", "Scrum Foundation Professional Certification (SFPC) – CertiProf", "Agile Project Management – Coursera", "QA Fundamentals – Pearl University", "Graphic Designing – Coursera", "Graphic Designing – Career Advisor"];
const exp = [
  ["May 2024 – May 2026", "Software Developer (Remote)", "SMHCoders", ["Built and maintained web applications with WordPress, Python, HTML, CSS, JavaScript, PHP and MySQL.", "Designed clean, visually appealing interfaces for web apps.", "Worked with the Digital Solutions Development (DSD) team to deliver digital solutions.", "Ensured responsive design across devices."]],
  ["2023", "Web Developer Intern (WordPress)", "SMHCoders", ["6-month remote internship in web development."]],
  ["2021", "Graphic Designer Intern", "Career Adviser", ["2-month remote internship in graphic design."]],
];
const edu = [
  ["2020 – 2024", "BS Software Engineering", "Jinnah University for Women · CGPA 3.21"],
  ["2019", "Intermediate (Pre-Engineering)", "Govt College for Women, Nazimabad"],
  ["2017", "Matric (Science)", "S.M. Hafiz ur Rehman"],
];

function Rv({ d = 0, className = "", children, ...r }) {
  const ref = useRef(null); const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${d}ms` }} className={`rv ${on ? "in" : ""} ${className}`} {...r}>{children}</div>;
}
function Count({ to, dec = 0, suf = "" }) {
  const ref = useRef(null); const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now();
      const tick = (t) => { const k = Math.min((t - t0) / 1400, 1); setV(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toFixed(dec)}{suf}</span>;
}
function Roles() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2400); return () => clearInterval(t); }, []);
  return <span key={i} className="role">{roles[i]}</span>;
}
function Photo() {
  const [ok, setOk] = useState(true);
  return ok ? <img className="photo" src="/photo.jpg" alt="Ummul Qura Mehdi" onError={() => setOk(false)} /> : <div className="photo ph">UQ</div>;
}
const glow = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function App() {
  const [f, setF] = useState("all"); const [pct, setPct] = useState(0);
  useEffect(() => {
    const on = () => { const h = document.documentElement; setPct((h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100); };
    window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on);
  }, []);
  const list = projects.filter((p) => f === "all" || p.c === f);

  return (
    <>
      <div className="bar" style={{ width: `${pct}%` }} />
      <header className="nav">
        <a className="logo" href="#top">Ummul Qura<span>.</span></a>
        <nav><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a className="pill" href="#contact">Let's Talk</a></nav>
      </header>

      <main id="top">
        <section className="hero">
          <i className="shape s1" /><i className="shape s2" /><i className="shape s3" />
          <p className="avail up" style={{ animationDelay: ".1s" }}><b /> Open to new opportunities</p>
          <h1 className="up" style={{ animationDelay: ".25s" }}>Software<br />Engineer</h1>
          <p className="up role-line" style={{ animationDelay: ".45s" }}>I'm Ummul Qura Mehdi, a <Roles /></p>
          <p className="lead up" style={{ animationDelay: ".6s" }}>I build web, mobile and AI-powered software, from React dashboards and WordPress sites to Python and ML systems for oil and gas.</p>
          <div className="cta up" style={{ animationDelay: ".75s" }}>
            <a className="btn prime" href="#work">View Projects</a>
            <a className="btn" href="/UmmulQura-CV.pdf" download>Download CV</a>
          </div>
          <a className="down" href="#stats" aria-label="Scroll down">↓</a>
        </section>

        <section id="stats" className="wrap stats">
          {[[2, 0, "+", "years of experience"], [13, 0, "", "projects built"], [6, 0, "", "certifications"], [3.21, 2, "", "CGPA, BS Software Eng."]].map(([n, d, s, l], i) => (
            <Rv key={l} d={i * 90} className="stat"><b><Count to={n} dec={d} suf={s} /></b><span>{l}</span></Rv>
          ))}
        </section>

        <div className="marq"><div className="track">{[...marquee, ...marquee].map((t, i) => <span key={i}>{t}</span>)}</div></div>

        <section id="work" className="wrap sec">
          <Rv><p className="eyebrow">Selected work</p><h2>Projects</h2></Rv>
          <Rv className="tabs">{filters.map(([k, l]) => <button key={k} className={f === k ? "on" : ""} onClick={() => setF(k)}>{l}</button>)}</Rv>
          <div className="grid">
            {list.map((p, i) => (
              <Rv key={p.t} d={(i % 3) * 80} className={`card ${p.feat ? "feat" : ""}`} onMouseMove={glow}>
                {p.feat && <div className="win"><div className="wbar"><i /><i /><i /></div><img src={p.img} alt="VFM dashboard built with Qt Designer" loading="lazy" /></div>}
                <div className="cbody">
                  <div className="row"><h3>{p.t}</h3><span className="yr">{p.y}</span></div>
                  <p>{p.d}</p>
                  {p.b && <ul>{p.b.map((x) => <li key={x}>{x}</li>)}</ul>}
                  <div className="chips">{p.s.map((s) => <span key={s}>{s}</span>)}</div>
                  {p.l && <a className="visit" href={`https://${p.l}`} target="_blank" rel="noreferrer">Visit live site ↗</a>}
                </div>
              </Rv>
            ))}
          </div>
        </section>

        <section id="about" className="wrap sec about">
          <Rv className="photo-wrap"><div className="pframe"><Photo /></div></Rv>
          <Rv d={120}>
            <p className="eyebrow">About me</p><h2>Building dependable software.</h2>
            <p className="para">I'm a Software Engineer with two years of remote development experience at SMHCoders, plus full-stack, Android and AI projects. I enjoy turning ideas into products that are clean, responsive and useful, and I'm looking to join a forward-thinking organization where I can keep growing and contribute with dedication and hard work.</p>
            <div className="cta"><a className="btn prime" href="/UmmulQura-CV.pdf" download>Download CV</a><a className="btn" href={P.behance} target="_blank" rel="noreferrer">Behance</a></div>
          </Rv>
        </section>

        <section id="experience" className="wrap sec two">
          <div>
            <Rv><p className="eyebrow">Journey</p><h2>Experience</h2></Rv>
            <ol className="tl">{exp.map(([y, t, o, b], i) => (
              <Rv key={t} d={i * 100} className="li"><time>{y}</time><h3>{t}</h3><em>{o}</em><ul>{b.map((x) => <li key={x}>{x}</li>)}</ul></Rv>
            ))}</ol>
          </div>
          <div>
            <Rv><p className="eyebrow">Learning</p><h2>Education</h2></Rv>
            <ol className="tl">{edu.map(([y, t, s], i) => (
              <Rv key={t} d={i * 100} className="li"><time>{y}</time><h3>{t}</h3><p>{s}</p></Rv>
            ))}</ol>
            <Rv><h3 className="sh">Certificates</h3><ul className="certs">{certs.map((c) => <li key={c}>{c}</li>)}</ul></Rv>
          </div>
        </section>

        <section id="skills" className="wrap sec">
          <Rv><p className="eyebrow">Toolbox</p><h2>Skills</h2></Rv>
          <div className="skills">{Object.entries(skills).map(([k, v], i) => (
            <Rv key={k} d={(i % 3) * 80} className="card" onMouseMove={glow}><h3>{k}</h3><div className="chips">{v.map((s) => <span key={s}>{s}</span>)}</div></Rv>
          ))}</div>
        </section>

        <section id="contact" className="wrap sec">
          <Rv className="contact">
            <h2>Let's build something together.</h2>
            <p>Open to software engineering roles and collaborations. Send me a message.</p>
            <div className="cta c">
              <a className="btn prime" href={`mailto:${P.email}`}>{P.email}</a>
              <a className="btn" href={`tel:${P.phone.replace(/\s/g, "")}`}>{P.phone}</a>
              <a className="btn" href={P.behance} target="_blank" rel="noreferrer">Behance</a>
              {P.linkedin && <a className="btn" href={P.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            </div>
          </Rv>
        </section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} Ummul Qura Mehdi</footer>
    </>
  );
}
