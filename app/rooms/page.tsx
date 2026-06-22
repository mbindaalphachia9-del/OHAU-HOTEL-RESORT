export default function RoomsPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "gold", textAlign: "center" }}>
        Rooms & Suites
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🏨 Deluxe Room</h2>
          <p>$299/night</p>
          <p>King Bed • WiFi • Smart TV • Balcony</p>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>🌊 Ocean View Suite</h2>
          <p>$599/night</p>
          <p>Ocean View • King Bed • Lounge Area • Balcony</p>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>👑 Presidential Suite</h2>
          <p>$1299/night</p>
          <p>Private Jacuzzi • Living Room • Ocean View • VIP Service</p>
        </div>
      </div>
    </main>
  );
}