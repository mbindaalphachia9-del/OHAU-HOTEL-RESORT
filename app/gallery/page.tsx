export default function GalleryPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "gold",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gap: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🏖 Infinity Pool</h2>
          <p>Relax with breathtaking ocean views.</p>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🌴 Beach Paradise</h2>
          <p>Experience the beauty of Waikiki Beach.</p>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🍽 Fine Dining</h2>
          <p>World-class cuisine and unforgettable evenings.</p>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🧖 Luxury Spa</h2>
          <p>Relax and rejuvenate in complete comfort.</p>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🏨 Premium Suites</h2>
          <p>Elegant rooms with exceptional comfort.</p>
        </div>
      </div>
    </main>
  );
}