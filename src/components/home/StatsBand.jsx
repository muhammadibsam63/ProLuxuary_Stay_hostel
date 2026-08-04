import CountUp from "react-countup";
import "./StatsBand.css";

export default function StatsBand({ stats }) {
  return (
    <section className="stats-band">
      <div className="container stats-band__grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat__value">
              <CountUp
                end={stat.value}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
              />
              {stat.suffix}
            </span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
