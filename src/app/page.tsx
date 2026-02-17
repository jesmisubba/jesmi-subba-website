import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-serif text-xl text-white tracking-wide">Jesmi Subba</span>
        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#lifestyle" className="hover:text-white transition">Lifestyle</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* Placeholder for hero image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-40" />
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Welcome to the world of</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">Jesmi Subba</h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8">
          Mother. Fighter. Living Loud.
        </p>
        <a
          href="#about"
          className="inline-block border border-white/40 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Placeholder image */}
        <div className="aspect-[3/4] bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-600 text-sm">
          Photo placeholder
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">About Me</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Strength looks different on everyone.
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            I&apos;m Jesmi — a 28-year-old mother who found her power through fitness and boxing. 
            This isn&apos;t just about workouts or meal plans. It&apos;s about building a life that 
            feels as strong as it looks.
          </p>
          <p className="text-white/60 leading-relaxed">
            From early morning training sessions to late-night motherhood moments, I&apos;m here to 
            share the real, unfiltered journey of becoming the strongest version of yourself.
          </p>
        </div>
      </div>
    </section>
  );
}

function Lifestyle() {
  const cards = [
    { title: "Boxing", desc: "Discipline, power, and mental clarity — all found in the ring.", icon: "🥊" },
    { title: "Fitness", desc: "Building strength that carries over into every part of life.", icon: "💪" },
    { title: "Motherhood", desc: "The hardest and most rewarding workout there is.", icon: "❤️" },
  ];

  return (
    <section id="lifestyle" className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 text-center">My World</p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">The Lifestyle</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-white/10 rounded-lg p-8 hover:border-[var(--color-accent)]/50 transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <h3 className="font-serif text-xl mb-3 group-hover:text-[var(--color-accent)] transition">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 text-center">Moments</p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-600 text-sm hover:bg-neutral-700 transition"
            >
              Photo {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    { title: "Why I Started Boxing as a Mom", date: "Coming soon", excerpt: "The story of how throwing punches changed everything." },
    { title: "My Morning Routine", date: "Coming soon", excerpt: "How I balance training and motherhood before the sun comes up." },
    { title: "Strength Is a Mindset", date: "Coming soon", excerpt: "What fitness taught me about life beyond the gym." },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 text-center">Stories</p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Blog</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border-b border-white/10 pb-8 hover:border-[var(--color-accent)]/30 transition group cursor-pointer"
            >
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{post.date}</p>
              <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-[var(--color-accent)] transition">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-950 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">Get In Touch</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Let&apos;s Connect</h2>
        <p className="text-white/50 mb-10">
          For collaborations, coaching inquiries, or just to say hi.
        </p>
        <div className="flex justify-center gap-6">
          {["Instagram", "TikTok", "Email"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="border border-white/20 px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-black text-center text-white/30 text-xs uppercase tracking-widest border-t border-white/5">
      © 2026 Jesmi Subba. All rights reserved.
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Lifestyle />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
