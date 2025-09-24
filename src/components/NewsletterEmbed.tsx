export default function NewsletterEmbed() {
  return (
    <div className="border border-black">
      <iframe
        src="https://whyyoushouldjoin.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: 0, background: "#fff" }}
        frameBorder={0}
        scrolling="no"
        title="Why You Should Join Newsletter"
      />
    </div>
  );
}


