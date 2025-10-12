import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterEmbed from "@/components/NewsletterEmbed";

type VC = {
  name: string;
  url: string;
};

type Company = {
  name: string;
  sector: string;
  blurb: string;
  url: string;
  vcs?: VC[];
};

const companies: Company[] = [
  { name: "AIUC", sector: "AI Insurance", blurb: "AI agent standards and insurance to unlock enterprise adoption.", url: "https://aiuc.com", vcs: [{ name: "Friedman & Gross (NFDG Ventures)", url: "https://nat.org" }] },
  { name: "Clarion", sector: "Healthcare AI", blurb: "Conversational AI for automating patient communications.", url: "https://www.clarionhealth.com", vcs: [{ name: "Accel", url: "https://www.accel.com" }] },
  { name: "Corridor", sector: "Developer Tools", blurb: "AI-powered development tools for modern engineering teams.", url: "https://corridor.dev", vcs: [{ name: "Conviction", url: "https://www.conviction.com" }] },
  { name: "Flint", sector: "Marketing Tech", blurb: "Autonomous website platform for launching landing pages.", url: "https://www.tryflint.com", vcs: [{ name: "Accel", url: "https://www.accel.com" }] },
  { name: "Judgment Labs", sector: "AI Infrastructure", blurb: "AI agent monitoring and evaluation platform for production.", url: "https://judgmentlabs.ai", vcs: [{ name: "Lightspeed", url: "https://lsvp.com" }] },
  { name: "Sapien", sector: "AI/Finance", blurb: "AI agents that drive your bottom line for finance teams.", url: "https://www.getsapien.com/", vcs: [{ name: "General Catalyst", url: "https://www.generalcatalyst.com" }] },
  { name: "VibeCode", sector: "Developer Tools", blurb: "AI-powered mobile app builder for rapid development.", url: "https://www.vibecodeapp.com/", vcs: [{ name: "Alexis Ohanian (776)", url: "https://sevensevensix.com" }] },
  { name: "Vigil Labs", sector: "Security", blurb: "AI-driven cybersecurity solutions for enterprises.", url: "https://vigillabs.ai", vcs: [{ name: "Pantera Capital", url: "https://panteracapital.com" }, { name: "Lux Capital", url: "https://www.luxcapital.com" }] },
  { name: "Voltai", sector: "AI/Semiconductors", blurb: "Foundational AI for semiconductors and electronics engineering.", url: "https://www.voltai.com", vcs: [{ name: "Sequoia Capital", url: "https://www.sequoiacap.com" }, { name: "General Catalyst", url: "https://www.generalcatalyst.com" }] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-12">
          <h1 className="text-4xl sm:text-6xl font-normal leading-tight tracking-tight text-left">The firm built for founding engineers.</h1>
          <p className="mt-6 text-lg opacity-85 max-w-3xl italic text-left">
            Operators first, investors second — backing early-stage companies with conviction.
          </p>
        </section>
        <section id="newsletter" className="py-12">
          <h2 className="text-2xl font-bold text-left">Get our monthly brief,</h2>
          <p className="mt-3 opacity-85 text-left">startups recommended for you.</p>
          <div className="mt-6"><NewsletterEmbed /></div>
        </section>
        <section id="podcast" className="py-12">
          <h2 className="text-2xl font-bold text-left">Tune into our podcast,</h2>
          <p className="mt-3 opacity-85 text-left">raw insights from breakout founders.</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-left">Season 1</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://www.youtube.com/@oneto100podcast" target="_blank">YouTube</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://open.spotify.com/show/70NOWtWDY995C8qDqojxGw?si=b13d4cc4756342d0" target="_blank">Spotify</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://podcasts.apple.com/us/podcast/1-to-100-hypergrowth-startups-worth-joining/id1762756034" target="_blank">Apple Podcasts</a>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-left">Season 2</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://www.youtube.com/@WhyYouShouldJoin" target="_blank">YouTube</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://open.spotify.com/show/6a5VCGnX7mNJ4ghuglhnFp?si=71838cb106dc45f9" target="_blank">Spotify</a>
              <a className="px-6 py-3 border border-black hover:bg-black hover:text-white text-center" href="https://podcasts.apple.com/us/podcast/the-why-you-should-join-podcast/id1828246278" target="_blank">Apple Podcasts</a>
            </div>
          </div>
        </section>
        <section className="py-12">
          <h2 className="text-2xl font-bold text-left">Featured portfolio,</h2>
          <p className="mt-3 opacity-85 max-w-2xl text-left">
            we put our money where our mouth is.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {companies.map((c) => (
              <div key={c.name} className="border border-black p-5 hover:bg-black hover:text-white transition-colors group">
                <a href={c.url} target="_blank" className="block text-left">
                  <div className="text-sm uppercase tracking-widest opacity-70">{c.sector}</div>
                  <div className="mt-2 text-xl font-bold">{c.name}</div>
                  <p className="mt-2 text-sm opacity-85">{c.blurb}</p>
                </a>
                {c.vcs && c.vcs.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-black border-opacity-20 group-hover:border-white group-hover:border-opacity-20">
                    <div className="flex flex-wrap gap-2">
                      {c.vcs.map((vc) => (
                        <a
                          key={vc.name}
                          href={vc.url}
                          target="_blank"
                          className="text-xs px-2 py-1 border border-black group-hover:border-white opacity-70 hover:opacity-100 transition-opacity"
                        >
                          {vc.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
