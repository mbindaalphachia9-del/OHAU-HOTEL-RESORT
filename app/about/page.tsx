export default function AboutPage() {
  return (
    <main style={{ padding: "80px 8%" }}>
      <h1 className="gold">
        About OAHU HOTEL & RESORT
      </h1>

      <p>
        Nestled in the heart of Waikiki, Hawaii,
        OAHU HOTEL & RESORT offers world-class
        luxury, breathtaking ocean views and
        unforgettable experiences.
      </p>

      <br />

      <h2 className="gold">
        Why Choose Us?
      </h2>

      <div className="grid">
        <div className="card">
          🌴 Prime Location
        </div>

        <div className="card">
          🏖 Private Beach Access
        </div>

        <div className="card">
          🍽 Fine Dining
        </div>

        <div className="card">
          🧖 Luxury Spa
        </div>

        <div className="card">
          ⭐ 5-Star Service
        </div>
      </div>
    </main>
  );
}