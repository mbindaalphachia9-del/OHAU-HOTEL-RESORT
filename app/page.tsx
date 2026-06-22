"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}

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

        <p
          style={{
            fontSize: "25px",
          }}
        >
          Stay. Relax. Repeat.
        </p>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            color: "#ccc",
          }}
        >
          Experience world-class luxury, ocean views, fine dining,
          and unforgettable memories in Hawaii.
        </p>

        <Link href="/book">
          <button
            style={{
              marginTop: "30px",
              backgroundColor: "gold",
              color: "black",
              border: "none",
              padding: "18px 40px",
              borderRadius: "15px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Book Your Stay
          </button>
        </Link>
      </section>

      {/* Rooms */}

      <section style={{ padding: "50px" }}>
        <h1 style={{ color: "gold", textAlign: "center" }}>
          Luxury Rooms
        </h1>

        <div
          style={{
            display: "grid",
            gap: "30px",
            marginTop: "40px",
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
            <p>$299/night</p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>🌊 Ocean View Suite</h2>
            <p>$599/night</p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>👑 Presidential Suite</h2>
            <p>$1299/night</p>
          </div>
        </div>
      </section>

      {/* Amenities */}

      <section style={{ padding: "50px" }}>
        <h1 style={{ color: "gold", textAlign: "center" }}>
          Amenities
        </h1>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div>🏊 Infinity Pool</div>
          <div>🍽 Fine Dining</div>
          <div>🧖 Spa & Wellness</div>
          <div>🏖 Beach Access</div>
        </div>
      </section>

      {/* Reviews */}

      <section style={{ padding: "50px" }}>
        <h1 style={{ color: "gold", textAlign: "center" }}>
          Guest Reviews
        </h1>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
            marginTop: "40px",
          }}
        >
          ⭐⭐⭐⭐⭐ Amazing stay! Beautiful ocean views.
        </div>

        <br />

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          ⭐⭐⭐⭐⭐ One of Hawaii's finest resorts.
        </div>
      </section>
    </main>
  );
}