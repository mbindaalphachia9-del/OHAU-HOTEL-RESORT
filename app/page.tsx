"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1
          style={{
            color: "gold",
            fontSize: "80px",
            letterSpacing: "8px",
          }}
        >
          OAHU HOTEL & RESORT
        </h1>

        <h2
          style={{
            color: "white",
            fontWeight: "normal",
          }}
        >
          Stay. Relax. Repeat.
        </h2>

        <p
          style={{
            color: "#ddd",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Discover luxury, breathtaking ocean views, world-class dining,
          and unforgettable experiences in Waikiki, Oahu, Hawaii.
        </p>

        <Link href="/book">
          <button
            style={{
              backgroundColor: "gold",
              color: "black",
              border: "none",
              padding: "18px 40px",
              borderRadius: "10px",
              fontSize: "20px",
              marginTop: "30px",
              cursor: "pointer",
            }}
          >
            Book Your Stay
          </button>
        </Link>
      </section>

      {/* ROOMS */}

      <section
        style={{
          padding: "50px",
        }}
      >
        <h1 style={{ color: "gold", textAlign: "center" }}>
          Luxury Rooms
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
            <h2>🏨 Deluxe Room</h2>
            <p>$299 / night</p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>🌊 Ocean View Suite</h2>
            <p>$599 / night</p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>👑 Presidential Suite</h2>
            <p>$1299 / night</p>
          </div>
        </div>
      </section>

      {/* AMENITIES */}

      <section
        style={{
          padding: "50px",
        }}
      >
        <h1 style={{ color: "gold", textAlign: "center" }}>
          Amenities
        </h1>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <div>🏊 Infinity Pool</div>

          <div>🍽 Fine Dining</div>

          <div>🧖 Spa & Wellness</div>

          <div>🏖 Private Beach Access</div>
        </div>
      </section>

      {/* REVIEWS */}

      <section
        style={{
          padding: "50px",
        }}
      >
        <h1 style={{ color: "gold", textAlign: "center" }}>
          Guest Reviews
        </h1>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          ⭐⭐⭐⭐⭐ Amazing stay! Beautiful views and outstanding service.
        </div>

        <br />

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          ⭐⭐⭐⭐⭐ One of the finest resorts in Hawaii.
        </div>
      </section>
    </main>
  );
}