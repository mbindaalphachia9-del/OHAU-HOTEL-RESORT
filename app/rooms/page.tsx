import Link from "next/link";

export default function RoomsPage() {
  return (
    <main style={{ padding: "80px 8%" }}>
      <h1 className="gold" style={{ textAlign: "center" }}>
        Rooms & Suites
      </h1>

      <div className="grid">
        <div className="card">
          <h2>🏨 Deluxe Room</h2>
          <p>$299 / night</p>
          <p>King Bed • WiFi • Balcony • Smart TV</p>

          <Link href="/book">
            <button className="primary-btn">
              Book Now
            </button>
          </Link>
        </div>

        <div className="card">
          <h2>🌊 Ocean View Suite</h2>
          <p>$599 / night</p>
          <p>Ocean View • Lounge Area • Mini Bar</p>

          <Link href="/book">
            <button className="primary-btn">
              Book Now
            </button>
          </Link>
        </div>

        <div className="card">
          <h2>👑 Presidential Suite</h2>
          <p>$1299 / night</p>
          <p>Private Jacuzzi • VIP Service • Ocean View</p>

          <Link href="/book">
            <button className="primary-btn">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}