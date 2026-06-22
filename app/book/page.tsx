"use client";

import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function submitReservation() {
    setSubmitted(true);
  }

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "serif",
      }}
    >
      <h1 style={{ color: "gold", textAlign: "center" }}>
        Book Your Stay
      </h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input placeholder="Full Name" />

        <input placeholder="Email Address" />

        <input placeholder="Phone Number" />

        <input type="date" />

        <input type="date" />

        <select>
          <option>Deluxe Room</option>
          <option>Ocean View Suite</option>
          <option>Presidential Suite</option>
        </select>

        <button
          onClick={submitReservation}
          style={{
            backgroundColor: "gold",
            color: "black",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Submit Reservation
        </button>

        {submitted && (
          <div
            style={{
              marginTop: "20px",
              color: "lightgreen",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            ✅ Reservation submitted successfully!
          </div>
        )}
      </div>
    </main>
  );
}