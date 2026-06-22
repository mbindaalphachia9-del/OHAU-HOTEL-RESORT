"use client";

import Link from "next/link";

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

        <h2 style={{ color: "white", letterSpacing: "6px" }}>
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

        <Link href="/book">
          <button
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
        </Link>
      </div>
    </main>
  );
}