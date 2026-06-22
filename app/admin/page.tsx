"use client";

export default function AdminPage() {
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

      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <p>No reservations yet.</p>
      </div>
    </main>
  );
}