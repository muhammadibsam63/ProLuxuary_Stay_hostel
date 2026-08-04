import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.wrap}>
          <div style={styles.mark}>LS</div>
          <h1 style={styles.title}>Something didn't load correctly.</h1>
          <p style={styles.copy}>Refresh the page, or return to the homepage.</p>
          <button style={styles.btn} onClick={this.handleReset}>
            Back to home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const styles = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    background: "#0a0b0d",
    color: "#eeece6",
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Manrope, sans-serif",
  },
  mark: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.4rem",
    border: "1px solid rgba(201,162,39,0.3)",
    color: "#e8d48a",
    width: 52,
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: { fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "1.5rem" },
  copy: { color: "#9aa0a8", maxWidth: "40ch" },
  btn: {
    marginTop: "0.5rem",
    padding: "0.85rem 1.8rem",
    borderRadius: 999,
    background: "linear-gradient(135deg, #e8d48a, #c9a227)",
    color: "#1a1204",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
  },
};

export default ErrorBoundary;
