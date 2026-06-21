export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "gold",
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        🌴 OAHU HOTEL & RESORT
      </h1>

      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Stay. Relax. Repeat.
      </h2>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        Welcome to paradise in Waikiki, Oahu, Hawaii.
      </p>

      <button
        style={{
          backgroundColor: "gold",
          color: "black",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Book Your Stay
      </button>
    </main>
  );
}