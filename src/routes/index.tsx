import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tech.jpg";
import raphaelPhoto from "@/assets/raphael-monyatsi.jpeg.asset.json";
import { Mail, MapPin, Clock, Phone, Bot, Cpu, Box, Code2, Brain, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iFunTech Connects — Bring Ideas Into Reality" },
      { name: "description", content: "iFunTech Connects is a training and technology company providing digital skills and IT training in Robotics, AI, 3D Printing, Coding, and Machine Learning." },
      { property: "og:title", content: "iFunTech Connects — Bring Ideas Into Reality" },
      { property: "og:description", content: "Practical, industry-ready learning programs in Robotics, AI, 3D Printing, Coding and Machine Learning." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Bot, title: "Robotics", body: "Learn the fundamentals of robotics — programming, artificial intelligence, and hardware integration." },
  { icon: Brain, title: "AI", body: "State-of-the-art training in artificial intelligence, from basic concepts to advanced machine learning techniques." },
  { icon: Box, title: "3D Printing", body: "Master the art of 3D printing and bring your innovative ideas to life with hands-on, interactive sessions." },
  { icon: Code2, title: "Coding", body: "Unlock the world of programming and development with our engaging, project-based coding course." },
  { icon: Cpu, title: "Machine Learning", body: "Comprehensive training in supervised and unsupervised learning, neural networks, and deep learning." },
  { icon: Sparkles, title: "Digital Skills", body: "Develop essential digital literacy and thrive in today's digital world." },
];

const team = [
  { name: "Raphael Monyatsi", role: "CEO", bio: "Provides unwavering leadership and strategic direction, overseeing organizational growth and ensuring alignment with our mission and vision.", photo: raphaelPhoto.url },
  { name: "Lesley Seemola", role: "CEO", bio: "Demonstrates remarkable leadership and a visionary approach, guiding the team towards strategic objectives and fostering innovation." },
];

function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "#team", label: "Team" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[oklch(0.16_0.02_250/0.7)] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-lg tracking-tight text-white">
          iFunTech <span className="text-[var(--primary)]">Connects</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-md hover:opacity-90 transition">
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Futuristic technology" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)] mb-6">iFunTech Connects</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]">
            Bring Ideas <em className="not-italic text-[var(--primary)]">Into Reality</em>
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto">
            A training and technology company empowering individuals and businesses through practical, industry-ready learning.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#services" className="bg-[var(--primary)] text-[var(--primary-foreground)] px-7 py-3.5 rounded-md text-sm font-medium hover:opacity-90 transition">
              Explore Courses
            </a>
            <a href="#about" className="border border-white/20 text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-white/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--primary)] mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">About the company</h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-lg text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">iFunTech Connects</span> is a training and technology company that provides digital skills and IT training.
            </p>
            <p>
              We help individuals and businesses grow through practical, industry-ready learning programs. Our goal is to empower and transform lives through education.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-[var(--surface-dark)] text-[var(--surface-dark-foreground)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--primary)] mb-4">What we offer</p>
            <h2 className="font-display text-4xl md:text-5xl">Services</h2>
            <div className="h-px w-16 bg-[var(--primary)] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group p-8 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--primary)]/60 hover:bg-white/[0.07] transition-all">
                <div className="h-12 w-12 rounded-md bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--primary)] mb-4">Get in touch</p>
            <h2 className="font-display text-4xl md:text-5xl">Contact</h2>
            <div className="h-px w-16 bg-[var(--primary)] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MapPin, title: "Location", value: "Botshabelo, Free State, South Africa" },
              { icon: Phone, title: "WhatsApp", value: "+27 067 202 4482", href: "https://wa.me/270672024482" },
              { icon: Mail, title: "Email", value: "raphaelmonyatsi90@gmail.com", href: "mailto:raphaelmonyatsi90@gmail.com" },
              { icon: Clock, title: "Hours", value: "8:00 am — 16:00 pm" },
            ].map((c) => (
              <div key={c.title} className="p-8 rounded-lg border border-border bg-card flex gap-5 items-start">
                <div className="h-11 w-11 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="text-foreground hover:text-[var(--primary)] transition">{c.value}</a>
                  ) : (
                    <p className="text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-28 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs text-[var(--primary)] mb-4">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl">Our Team</h2>
            <div className="h-px w-16 bg-[var(--primary)] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="p-8 rounded-lg bg-card border border-border">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-24 w-24 rounded-full object-cover mb-6 border-2 border-[var(--primary)]/40" />
                ) : (
                  <div className="h-20 w-20 rounded-full flex items-center justify-center text-2xl font-display text-white mb-6"
                    style={{ background: "var(--gradient-accent)" }}>
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                <h3 className="text-2xl mb-1">{m.name}</h3>
                <p className="text-[var(--primary)] text-sm uppercase tracking-wider mb-4">{m.role}</p>
                <p className="text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[var(--surface-dark)] text-white/60 py-10 px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} iFunTech Connects. Bring ideas into reality.</p>
      </footer>
    </div>
  );
}
