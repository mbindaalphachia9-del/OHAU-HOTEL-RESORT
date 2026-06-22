"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [reservations, setReservations] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);

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
        OAHU HOTEL & RESORT
      </h1>

      <h2 style={{ textAlign: "center" }}>
        Admin Dashboard
      </h2>

      <table
        style={{
          width: "100%",
          marginTop: "40px",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Room</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reservations.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.room}</td>
              <td>{r.checkIn}</td>
              <td>{r.checkOut}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}