import "./Loader.css";

export default function Loader({ label = "Loading" }) {
  return (
    <div className="loader-screen" role="status" aria-live="polite">
      <div className="loader-mark">LS</div>
      <div className="loader-bar">
        <span />
      </div>
      <span className="loader-label">{label}</span>
    </div>
  );
}
