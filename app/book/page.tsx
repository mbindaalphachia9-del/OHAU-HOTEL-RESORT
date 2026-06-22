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
      <h1
        style={{
          color: "gold",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        Book Your Stay
      </h1>

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        <input
          placeholder="Full Name"
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        />

        <input
          placeholder="Email Address"
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        />

        <input
          placeholder="Phone Number"
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        />

        <input
          type="date"
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        />

        <input
          type="date"
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        />

        <select
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <option>Deluxe Room</option>
          <option>Ocean View Suite</option>
          <option>Presidential Suite</option>
        </select>

        <textarea
          placeholder="Special Requests"
          rows={5}
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        />

        <button
          style={{
            backgroundColor: "gold",
            color: "black",
            padding: "18px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Submit Reservation
        </button>
      </div>
    </main>
  );
}