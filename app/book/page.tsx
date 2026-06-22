"use client";

import { useState } from "react";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    room: "Deluxe Room",
    checkIn: "",
    checkOut: "",
  });

  async function submitReservation() {
    await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Reservation submitted successfully!");
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
        <input
          placeholder="Full Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Phone Number"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setForm({ ...form, checkIn: e.target.value })
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setForm({ ...form, checkOut: e.target.value })
          }
        />

        <select
          onChange={(e) =>
            setForm({ ...form, room: e.target.value })
          }
        >
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
          }}
        >
          Submit Reservation
        </button>
      </div>
    </main>
  );
}