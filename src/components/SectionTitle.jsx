function SectionTitle({ eyebrow, title, body }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </header>
  );
}

export default SectionTitle;
