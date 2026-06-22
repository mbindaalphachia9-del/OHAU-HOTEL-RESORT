export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        textAlign: "center",
        padding: "40px",
        fontFamily: "serif",
      }}
    >
      <div style={{ marginTop: "100px" }}>
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
            fontSize: "70px",
            letterSpacing: "8px",
          }}
        >
          OAHU
        </h1>

        <h2
          style={{
            color: "white",
            letterSpacing: "6px",
          }}
        >
          HOTEL & RESORT
        </h2>

        <p
          style={{
            color: "gold",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          Stay. Relax. Repeat.
        </p>

        <button
          onClick={() => (window.location.href = "/book")}
          style={{
            backgroundColor: "gold",
            color: "black",
            padding: "15px 35px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Book Your Stay
        </button>
      </div>

      <section style={{ marginTop: "100px" }}>
        <h2 style={{ color: "gold" }}>🏨 Rooms & Suites</h2>
        <p>Deluxe Room • Ocean View Suite • Presidential Suite</p>

        <h2 style={{ color: "gold", marginTop: "50px" }}>
          🍽 Fine Dining
        </h2>
        <p>
          World-class cuisine and unforgettable tropical experiences.
        </p>

        <h2 style={{ color: "gold", marginTop: "50px" }}>
          🏊 Spa & Infinity Pool
        </h2>
        <p>
          Relax and enjoy breathtaking views of Waikiki Beach.
        </p>

        <h2 style={{ color: "gold", marginTop: "50px" }}>
          ⭐ Guest Reviews
        </h2>

        <p>"Amazing stay! Beautiful ocean views." — Sarah M.</p>

        <p>"One of the finest resorts in Hawaii." — Michael T.</p>
      </section>
    </main>
  );
}