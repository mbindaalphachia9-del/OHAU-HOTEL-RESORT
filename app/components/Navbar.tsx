"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#080808",
        borderBottom: "1px solid #222",
        padding: "20px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2
        style={{
          color: "gold",
          letterSpacing: "4px",
        }}
      >
        OAHU HOTEL & RESORT
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/reviews">Reviews</Link>
      </div>
    </nav>
  );
}