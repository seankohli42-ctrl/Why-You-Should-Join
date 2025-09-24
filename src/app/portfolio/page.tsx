import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Company = {
  name: string;
  sector: string;
  blurb: string;
  url: string;
};

const companies: Company[] = [
  { name: "Warp", sector: "Developer Tools", blurb: "Reinventing the terminal for teams.", url: "https://www.warp.dev" },
  { name: "Pinecone", sector: "AI Infrastructure", blurb: "Vector databases powering AI retrieval.", url: "https://www.pinecone.io" },
  { name: "Opaque", sector: "Security / Data", blurb: "Privacy-preserving analytics with MPC.", url: "https://opaque.co" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-black tracking-tight">Companies we’re excited about</h1>
        <p className="mt-4 opacity-85 max-w-2xl">
          A curated, conviction-driven portfolio. We prioritize market depth, product strategy, early traction
          signals, and the caliber of the founding team.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((c) => (
            <a key={c.name} href={c.url} target="_blank" className="border border-black p-5 hover:bg-black hover:text-white transition-colors">
              <div className="text-sm uppercase tracking-widest opacity-70">{c.sector}</div>
              <div className="mt-2 text-xl font-bold">{c.name}</div>
              <p className="mt-2 text-sm opacity-85">{c.blurb}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


