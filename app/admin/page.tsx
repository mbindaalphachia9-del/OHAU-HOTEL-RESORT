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
      <h1
        style={{
          color: "gold",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        OAHU HOTEL & RESORT
      </h1>

      <h2
        style={{
          color: "gold",
          textAlign: "center",
        }}
      >
        Admin Dashboard
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "50px auto",
          backgroundColor: "#111",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h3 style={{ color: "gold" }}>Reservations</h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Room</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Smith</td>
              <td>Ocean View Suite</td>
              <td>2026-07-10</td>
              <td>2026-07-15</td>
              <td style={{ color: "lime" }}>Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}