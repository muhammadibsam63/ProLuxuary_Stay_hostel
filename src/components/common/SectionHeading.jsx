import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="section-heading">
      <div className="section-heading__text">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  );
}
