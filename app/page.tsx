export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "serif",
      }}
    >
      {/* Hero Section */}
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
        <div>
          <div
            style={{
              color: "gold",
              fontSize: "20px",
              letterSpacing: "8px",
            }}
          >
            ✦ ✦ ✦ ✦ ✦
          </div>

          <h1
            style={{
              color: "gold",
              fontSize: "72px",
              marginBottom: "0",
              letterSpacing: "8px",
            }}
          >
            OAHU
          </h1>

          <h2
            style={{
              color: "white",
              marginTop: "10px",
              letterSpacing: "6px",
            }}
          >
            HOTEL & RESORT
          </h2>

          <p
            style={{
              color: "gold",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Stay. Relax. Repeat.
          </p>
        </div>

        <button
          onClick={() =>
            (window.location.href =
              "mailto:reservations@oahuhotelresort.com")
          }
          style={{
            backgroundColor: "gold",
            color: "black",
            padding: "15px 35px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "30px",
          }}
        >
          Book Your Stay
        </button>
      </section>

      {/* Rooms */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>🏨 Rooms & Suites</h2>

        <h3>Deluxe Room</h3>
        <p>Elegant comfort with luxury furnishings.</p>

        <h3>Ocean View Suite</h3>
        <p>Private balcony overlooking Waikiki Beach.</p>

        <h3>Presidential Suite</h3>
        <p>The finest experience with panoramic ocean views.</p>
      </section>

      {/* Dining */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>🍽 Fine Dining</h2>
        <p>
          Enjoy world-class cuisine, tropical cocktails and sunset dinners.
        </p>
      </section>

      {/* Spa */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>🏊 Spa & Infinity Pool</h2>
        <p>
          Relax with premium spa treatments and breathtaking ocean views.
        </p>
      </section>

      {/* Gallery */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>📸 Gallery</h2>
        <p>
          Experience paradise with beautiful beaches and luxury amenities.
        </p>
      </section>

      {/* Reviews */}
      <section style={{ padding: "50px" }}>
        <h2 style={{ color: "gold" }}>⭐ Guest Reviews</h2>

        <p>
          "Absolutely incredible! The service and views were amazing." — Sarah
          M.
        </p>

        <p>
          "One of the best resorts we've ever stayed in." — Michael T.
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