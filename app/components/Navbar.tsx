"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "gold",
          letterSpacing: "5px",
        }}
      >
        OAHU HOTEL & RESORT
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link href="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link href="/about" style={{ color: "white" }}>
          About
        </Link>

        <Link href="/rooms" style={{ color: "white" }}>
          Rooms
        </Link>

        <Link href="/gallery" style={{ color: "white" }}>
          Gallery
        </Link>

        <Link href="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}