export default function GalleryPage() {
  return (
    <main style={{ padding: "80px 8%" }}>
      <h1 className="gold" style={{ textAlign: "center" }}>
        Gallery
      </h1>

      <div className="grid">
        <div className="card">
          <h2>🏖 Beach Paradise</h2>
          <p>Crystal clear waters and white sands.</p>
        </div>

        <div className="card">
          <h2>🏊 Infinity Pool</h2>
          <p>Relax with breathtaking views.</p>
        </div>

        <div className="card">
          <h2>🍽 Fine Dining</h2>
          <p>World-class cuisine and service.</p>
        </div>

        <div className="card">
          <h2>🧖 Spa & Wellness</h2>
          <p>Luxury treatments and relaxation.</p>
        </div>

        <div className="card">
          <h2>🏨 Luxury Suites</h2>
          <p>Elegant rooms designed for comfort.</p>
        </div>

        <div className="card">
          <h2>🌴 Tropical Gardens</h2>
          <p>Beautiful scenery throughout the resort.</p>
        </div>
      </div>
    </main>
  );
}