import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useReveal, useParallax } from "@/hooks/use-reveal";
import pic1 from "@/assets/landscapes/pic_1.jpg";
import pic2 from "@/assets/landscapes/pic_2.jpg";
import pic3 from "@/assets/landscapes/pic_3.jpg";
import pic4 from "@/assets/landscapes/pic_4.jpg";
import pic5 from "@/assets/landscapes/pic_5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className={`h-9 w-9 rounded-full bg-primary grid place-items-center text-primary-foreground font-display font-semibold transition-transform group-hover:scale-110`}>V</span>
          <span className={`font-display text-lg ${scrolled ? "text-foreground" : "text-background"} drop-shadow`}>Vibrant Landscapes</span>
        </a>
        <nav className={`hidden md:flex items-center gap-8 text-sm ${scrolled ? "text-foreground" : "text-background"}`}>
          {["Work", "Services", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="relative hover:opacity-80 transition">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="tel:5196978244"
          className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:translate-y-[-1px] transition-transform"
        >
          (519) 697-8244
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pic4}
          alt="Lush rock garden by Vibrant Landscapes"
          data-parallax="-0.15"
          className="parallax-img w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/30 to-foreground/80" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="reveal flex items-center gap-3 text-background/80 text-xs uppercase tracking-[0.3em] mb-6">
            <span className="h-px w-10 bg-background/60" /> St. Thomas · Ontario
          </div>
          <h1 className="reveal reveal-delay-1 font-display text-background text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] font-medium">
            Gardens that <em className="not-italic text-stroke">breathe</em>,
            <br /> stonework that <span className="italic">endures</span>.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 text-background/85 max-w-xl text-lg leading-relaxed">
            Bespoke landscape design and installation across southwestern Ontario —
            crafted with patience, planted with intention.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              Start your project →
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-background/40 text-background px-7 py-3.5 text-sm font-medium hover:bg-background/10 transition">
              See recent work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 lg:right-10 z-10 text-background/80 text-xs flex items-center gap-3">
        <span className="h-12 w-px bg-background/40 animate-pulse" />
        scroll
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Garden Design", "Hardscaping", "Stone Walls", "Mulch & Beds", "River Rock", "Plantings", "Property Refresh"];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-secondary py-6">
      <div className="flex gap-16 marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl text-foreground/80 italic">
            {t} <span className="text-accent not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { n: "5.0★", l: "Google rating" },
    { n: "12+", l: "5-star reviews" },
    { n: "100%", l: "Locally owned" },
    { n: "St. Thomas", l: "& surrounding area" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div key={s.l} className={`reveal reveal-delay-${Math.min(i, 3)} border-t border-foreground/20 pt-6`}>
          <div className="font-display text-4xl md:text-5xl text-primary">{s.n}</div>
          <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
        </div>
      ))}
    </section>
  );
}

function Work() {
  const projects = [
    { src: pic5, title: "Cobblestone Walkway", tag: "Front Entry · Hardscape", year: "2024" },
    { src: pic4, title: "Dry River Rock Garden", tag: "Backyard · Feature Bed", year: "2024" },
    { src: pic3, title: "Hornbeam Privacy Row", tag: "Property Line · Plantings", year: "2024" },
    { src: pic2, title: "Heritage Stone Bed", tag: "Front Lawn · Feature", year: "2023" },
    { src: pic1, title: "Mediterranean Curb Appeal", tag: "Front Yard · Full Refresh", year: "2023" },
  ];
  return (
    <section id="work" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 reveal">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected Work — 2023 / 2024</p>
          <h2 className="font-display text-5xl md:text-7xl max-w-3xl">A portfolio rooted in place.</h2>
        </div>
        <a href="#contact" className="hidden md:inline text-sm underline underline-offset-4 decoration-accent hover:text-accent">Commission a project</a>
      </div>

      <div className="space-y-32">
        {projects.map((p, i) => (
          <div key={p.title} className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-8 reveal-mask overflow-hidden rounded-sm">
              <div className="overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  data-parallax="-0.05"
                  className="parallax-img w-full h-[60vh] md:h-[78vh] object-cover hover:scale-[1.03] transition-transform duration-[1.2s]"
                />
              </div>
            </div>
            <div className="md:col-span-4 reveal">
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">/ 0{i + 1}</div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{p.tag}</p>
              <div className="text-xs uppercase tracking-wider text-foreground/60">{p.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { t: "Garden Design", d: "Site-specific bed design with seasonal interest, native and ornamental plantings.", n: "01" },
    { t: "Hardscaping", d: "Walkways, patios, retaining walls and natural stone features built to last.", n: "02" },
    { t: "Stone & Edging", d: "Armour stone, flagstone borders, river rock beds and decorative aggregates.", n: "03" },
    { t: "Property Refresh", d: "Mulching, edging, planting refresh — restore the garden you already love.", n: "04" },
  ];
  return (
    <section id="services" className="bg-primary text-primary-foreground py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          <h2 className="reveal font-display text-5xl md:text-7xl">What we do, with care.</h2>
          <p className="reveal reveal-delay-1 text-primary-foreground/80 text-lg max-w-md">
            Every project is led by the owner — from the first walk-through to the last shovel of mulch. No subcontractors, no shortcuts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/15">
          {services.map((s, i) => (
            <div key={s.t} className={`reveal reveal-delay-${Math.min(i, 3)} bg-primary p-10 md:p-14 group hover:bg-accent transition-colors duration-500`}>
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-2xl opacity-70">{s.n}</span>
                <span className="h-px w-16 bg-primary-foreground/40 mt-4 group-hover:w-24 transition-all" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{s.t}</h3>
              <p className="text-primary-foreground/80 max-w-md">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-10 max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5 reveal-mask overflow-hidden">
        <img src={pic2} alt="A Vibrant Landscapes feature bed" data-parallax="-0.08" className="parallax-img w-full h-[80vh] object-cover" />
      </div>
      <div className="md:col-span-7 md:pl-12 flex flex-col justify-center">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About</p>
        <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl leading-tight">
          Built in St. Thomas. <br />
          <span className="italic text-moss">Planted across Ontario.</span>
        </h2>
        <p className="reveal reveal-delay-2 mt-8 text-lg text-foreground/80 max-w-xl leading-relaxed">
          Vibrant Landscapes is a small, owner-operated studio creating outdoor spaces that
          feel inevitable — like they always belonged there. We believe in honest materials,
          regional plants, and the quiet patience that good landscapes demand.
        </p>
        <blockquote className="reveal reveal-delay-3 mt-12 border-l-2 border-accent pl-6 italic text-2xl font-display text-foreground/90 max-w-xl">
          "We could not be happier with our new front garden beds — we get compliments from
          many people walking by."
          <footer className="not-italic text-sm text-muted-foreground mt-4 font-sans">— Google Review · ★★★★★</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-foreground text-background py-32 px-6 lg:px-10 overflow-hidden grain">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 relative">
        <div className="md:col-span-7">
          <p className="reveal text-xs uppercase tracking-[0.3em] text-background/60 mb-6">Contact</p>
          <h2 className="reveal reveal-delay-1 font-display text-6xl md:text-8xl leading-[0.95]">
            Let's design <br /> something <em className="not-italic text-accent">lasting.</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-8 text-background/75 text-lg max-w-lg">
            Booking design consultations now for the upcoming season. Tell us about your space — we'll be in touch within two business days.
          </p>
        </div>
        <div className="md:col-span-5 md:pl-8 space-y-10 text-background/90">
          <div className="reveal">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-2">Call</div>
            <a href="tel:5196978244" className="font-display text-3xl hover:text-accent transition-colors">(519) 697-8244</a>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-2">Visit</div>
            <p className="font-display text-2xl leading-snug">9475 Springwater Rd<br />St. Thomas, ON N5P 3S7</p>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-2">Hours</div>
            <ul className="text-base space-y-1">
              <li className="flex justify-between border-b border-background/15 py-1.5"><span>Mon – Fri</span><span>7am — 7pm</span></li>
              <li className="flex justify-between border-b border-background/15 py-1.5"><span>Saturday</span><span className="text-background/50">Closed</span></li>
              <li className="flex justify-between py-1.5"><span>Sunday</span><span className="text-background/50">Closed</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-background/60 relative">
        <div>© {new Date().getFullYear()} Vibrant Landscapes · St. Thomas, ON</div>
        <div className="flex gap-6">
          <a href="#work" className="hover:text-background">Work</a>
          <a href="#services" className="hover:text-background">Services</a>
          <a href="#about" className="hover:text-background">About</a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  useParallax();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Work />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
