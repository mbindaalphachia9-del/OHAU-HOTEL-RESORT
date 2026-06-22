"use client";

export default function BookPage() {
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