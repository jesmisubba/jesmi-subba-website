import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-serif text-xl text-neutral-800 tracking-wide">Jesmi Subba</span>
        <div className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#about" className="hover:text-neutral-800 transition">About</a>
          <a href="#lifestyle" className="hover:text-neutral-800 transition">Lifestyle</a>
          <a href="#gallery" className="hover:text-neutral-800 transition">Gallery</a>
          <a href="#blog" className="hover:text-neutral-800 transition">Blog</a>
          <a href="#contact" className="hover:text-neutral-800 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#faf8f5] text-neutral-800">
      <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-4">Wellness · Motherhood · Lifestyle</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-neutral-800">Jesmi Subba</h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto mb-8">
          Building a calm, strong, and beautiful life — one day at a time.
        </p>
        <a
          href="#about"
          className="inline-block border border-neutral-300 px-8 py-3 text-sm uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all duration-300"
        >
          Explore
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-neutral-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[3/4] bg-[#f3efe9] rounded-2xl flex items-center justify-center text-neutral-300 text-sm">
          Photo placeholder
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-rose-400 mb-4">About Me</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Wellness starts from within.
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-4">
            I&apos;m Jesmi — a mother, wellness lover, and someone who believes that taking care of 
            yourself isn&apos;t selfish, it&apos;s essential. From skincare rituals to gym sessions, 
            I&apos;m all about creating routines that nurture both body and mind.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            This space is where I share my daily life — the quiet mornings, the workouts, the skincare 
            finds, and everything in between. Because a beautiful life is built in the small, 
            intentional moments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Lifestyle() {
  const cards = [
    { title: "Gym & Fitness", desc: "Staying strong and energized — workouts that fit real life as a mom.", icon: "🏋️‍♀️" },
    { title: "Skincare", desc: "Simple, glowy routines that actually work. Less is more.", icon: "✨" },
    { title: "Daily Routines", desc: "Morning rituals, meal prep, and the little habits that keep me grounded.", icon: "🌿" },
    { title: "Motherhood", desc: "The beautiful chaos of raising little ones with patience and love.", icon: "🤍" },
    { title: "Wellness", desc: "Mental health, rest, and finding calm in a busy world.", icon: "🧘‍♀️" },
    { title: "Home & Comfort", desc: "Creating a space that feels like a warm hug — cozy, minimal, intentional.", icon: "🕯️" },
  ];

  return (
    <section id="lifestyle" className="py-24 px-6 bg-[#faf8f5] text-neutral-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-rose-400 mb-4 text-center">My World</p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">The Lifestyle</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-neutral-100 rounded-2xl p-8 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="font-serif text-lg mb-2 group-hover:text-rose-400 transition">{card.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-white text-neutral-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-rose-400 mb-4 text-center">Moments</p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-[#f3efe9] rounded-2xl flex items-center justify-center text-neutral-300 text-sm hover:shadow-md transition"
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
    { title: "My Morning Skincare Routine", date: "Coming soon", excerpt: "The 5 products I swear by for glowy, happy skin." },
    { title: "How I Stay Consistent at the Gym", date: "Coming soon", excerpt: "It's not about motivation — it's about making it easy." },
    { title: "Creating Calm in a Busy Life", date: "Coming soon", excerpt: "Small habits that bring peace to my everyday as a mom." },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-[#faf8f5] text-neutral-800">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-rose-400 mb-4 text-center">Stories</p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Blog</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white border border-neutral-100 rounded-2xl p-8 hover:shadow-md transition group cursor-pointer"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-300 mb-2">{post.date}</p>
              <h3 className="font-serif text-xl md:text-2xl mb-2 group-hover:text-rose-400 transition">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-sm">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-neutral-800">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-rose-400 mb-4">Say Hello</p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Let&apos;s Connect</h2>
        <p className="text-neutral-400 mb-10">
          For collaborations, wellness chats, or just to say hi ♡
        </p>
        <div className="flex justify-center gap-6">
          {["Instagram", "TikTok", "Email"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="border border-neutral-200 rounded-full px-6 py-3 text-sm tracking-widest hover:bg-neutral-800 hover:text-white transition-all duration-300"
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
    <footer className="py-8 px-6 bg-[#faf8f5] text-center text-neutral-300 text-xs uppercase tracking-widest border-t border-neutral-100">
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
