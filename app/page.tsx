"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/location">Location</Link>
        <Link href="/reviews">Reviews</Link>
      </nav>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1
          style={{
            color: "gold",
            fontSize: "70px",
            letterSpacing: "8px",
          }}
        >
          OAHU HOTEL & RESORT
        </h1>

        <p
          style={{
            color: "gold",
            fontSize: "22px",
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
              border: "none",
              borderRadius: "10px",
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