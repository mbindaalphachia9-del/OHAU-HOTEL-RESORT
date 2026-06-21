export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1 style={{ color: "gold", fontSize: "60px" }}>
          🌴 OAHU HOTEL & RESORT
        </h1>

        <h2>Stay. Relax. Repeat.</h2>

        <p>Luxury paradise in Waikiki, Oahu, Hawaii.</p>

        <button
          onClick={() =>
            (window.location.href =
              "mailto:reservations@oahuhotelresort.com")
          }
          style={{
            backgroundColor: "gold",
            color: "black",
            padding: "15px 30px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Book Your Stay
        </button>
      </section>

      {/* Rooms */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>🏨 Rooms & Suites</h2>

        <h3>Deluxe Room</h3>
        <p>Elegant comfort with island-inspired interiors.</p>

        <h3>Ocean View Suite</h3>
        <p>Private balcony overlooking Waikiki Beach.</p>

        <h3>Presidential Suite</h3>
        <p>Exclusive luxury with panoramic ocean views.</p>
      </section>

      {/* Dining */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>🍽 Dining Experience</h2>
        <p>
          Enjoy world-class cuisine, tropical cocktails, and unforgettable
          sunset dinners.
        </p>
      </section>

      {/* Spa */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>🏊 Spa & Infinity Pool</h2>
        <p>
          Relax with our luxury spa treatments and infinity pool overlooking
          the Pacific Ocean.
        </p>
      </section>

      {/* Gallery */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>📸 Gallery</h2>
        <p>Experience breathtaking ocean views and tropical beauty.</p>
      </section>

      {/* Reviews */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>⭐ Guest Reviews</h2>

        <p>
          "Amazing stay! Exceptional service and beautiful views." — Sarah M.
        </p>

        <p>
          "One of the finest resorts in Hawaii." — Michael T.
        </p>
      </section>

      {/* Contact */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>📞 Contact Us</h2>

        <p>Email: reservations@oahuhotelresort.com</p>

        <p>Waikiki, Oahu, Hawaii</p>
      </section>
    </main>
  );
}