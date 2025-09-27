import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterEmbed from "@/components/NewsletterEmbed";

type Company = {
  name: string;
  sector: string;
  blurb: string;
  url: string;
};

const companies: Company[] = [
  { name: "Clay", sector: "CRM", blurb: "AI-powered CRM for modern sales teams.", url: "https://clay.com" },
  { name: "Cognition", sector: "AI/ML", blurb: "AI-powered code generation and development tools.", url: "https://cognition.ai" },
  { name: "Etched", sector: "AI Hardware", blurb: "The world's first transformer ASIC for AI models.", url: "https://etched.com" },
  { name: "Godela", sector: "AI/ML", blurb: "Advanced AI solutions for enterprise applications.", url: "https://godela.ai" },
  { name: "Loop", sector: "Logistics", blurb: "AI-native transportation spend management platform.", url: "https://www.loop.com/" },
  { name: "Lovable", sector: "Developer Tools", blurb: "AI-powered development platform for rapid prototyping.", url: "https://lovable.dev" },
  { name: "Mercor", sector: "Talent Platform", blurb: "AI-powered talent matching and recruitment platform.", url: "https://mercor.com" },
  { name: "Modal", sector: "AI Infrastructure", blurb: "Serverless AI compute platform for machine learning.", url: "https://modal.com" },
  { name: "Pinecone", sector: "AI Infrastructure", blurb: "Vector database for AI applications and machine learning.", url: "https://pinecone.io" },
  { name: "Sapien", sector: "AI/Finance", blurb: "AI agents that drive your bottom line for finance teams.", url: "https://www.getsapien.com/" },
  { name: "VibeCode", sector: "Developer Tools", blurb: "AI-powered mobile app builder for rapid development.", url: "https://www.vibecodeapp.com/" },
  { name: "Vigil Labs", sector: "Security", blurb: "AI-driven cybersecurity solutions for enterprises.", url: "https://vigillabs.ai" },
  { name: "Voltai", sector: "Energy", blurb: "Next-generation battery technology for electric vehicles.", url: "https://voltai.com" },
  { name: "Warp", sector: "Developer Tools", blurb: "Reinventing the terminal for teams.", url: "https://www.warp.dev" },
  { name: "Zellerfeld", sector: "3D Printing", blurb: "Revolutionary 3D printing technology for footwear.", url: "https://zellerfeld.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="mx-auto max-w-5xl px-0">
        <section className="py-12 px-6">
          <h1 className="text-4xl sm:text-6xl font-normal leading-tight tracking-tight text-left">The firm built for founding engineers.</h1>
          <p className="mt-6 text-lg opacity-85 max-w-3xl italic text-left">
            Operators first, investors second — backing early-stage companies with conviction.
          </p>
        </section>
        <section id="newsletter" className="py-12 px-6">
          <h2 className="text-2xl font-bold text-left">Get our monthly brief,</h2>
          <p className="mt-3 opacity-85 text-left">startups recommended for you.</p>
          <div className="mt-6"><NewsletterEmbed /></div>
        </section>
        <section id="podcast" className="py-12 px-6">
          <h2 className="text-2xl font-bold text-left">Tune into our podcast,</h2>
          <p className="mt-3 opacity-85 text-left">raw insights from breakout founders.</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-left">Season 1</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://www.youtube.com/@oneto100podcast" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://open.spotify.com/show/70NOWtWDY995C8qDqojxGw?si=b13d4cc4756342d0" target="_blank" rel="noopener noreferrer">Spotify</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://podcasts.apple.com/us/podcast/1-to-100-hypergrowth-startups-worth-joining/id1762756034" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-left">Season 2</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://www.youtube.com/@WhyYouShouldJoin" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://open.spotify.com/show/6a5VCGnX7mNJ4ghuglhnFp?si=71838cb106dc45f9" target="_blank" rel="noopener noreferrer">Spotify</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://podcasts.apple.com/us/podcast/the-why-you-should-join-podcast/id1828246278" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold text-left">Ecosystem snapshot,</h2>
          <p className="mt-3 opacity-85 max-w-2xl text-left">
            we put our money where our mouth is.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {companies.map((c) => (
              <a key={c.name} href={c.url} target="_blank" className="border border-black p-5 hover:bg-black hover:text-white transition-colors text-left">
                <div className="text-sm uppercase tracking-widest opacity-70">{c.sector}</div>
                <div className="mt-2 text-xl font-bold">{c.name}</div>
                <p className="mt-2 text-sm opacity-85">{c.blurb}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
