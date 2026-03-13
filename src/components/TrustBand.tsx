const items = [
  "Sydney-based",
  "Hands-on support",
  "No jargon",
  "Real results",
  "Trusted tools",
  "Team training",
  "Sydney-based",
  "Hands-on support",
  "No jargon",
  "Real results",
  "Trusted tools",
  "Team training",
];

const TrustBand = () => (
  <section className="py-6 overflow-hidden" style={{ borderTop: '1px solid rgba(27, 73, 101, 0.3)', borderBottom: '1px solid rgba(27, 73, 101, 0.3)' }}>
    <div className="flex animate-marquee whitespace-nowrap">
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-4 px-10 text-[13px] font-heading font-medium text-muted-foreground uppercase tracking-[0.15em]"
        >
          <span className="w-1 h-1 rounded-full bg-teal inline-block" />
          {item}
        </span>
      ))}
    </div>
  </section>
);

export default TrustBand;
