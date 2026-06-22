"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1>OAHU HOTEL & RESORT</h1>

        <p>
          Experience luxury, elegance and breathtaking ocean views in the
          heart of Waikiki, Hawaii.
        </p>

        <Link href="/book">
          <button className="primary-btn">Book Your Stay</button>
        </Link>
      </section>

      {/* Rooms */}
      <section>
        <h1 className="gold" style={{ textAlign: "center" }}>
          Luxury Rooms
        </h1>

        <div className="grid">
          <div className="card">
            <h2>🏨 Deluxe Room</h2>
            <p>$299 / night</p>
            <p>King Bed • WiFi • Balcony • Smart TV</p>
          </div>

          <div className="card">
            <h2>🌊 Ocean View Suite</h2>
            <p>$599 / night</p>
            <p>Ocean View • Lounge Area • King Bed</p>
          </div>

          <div className="card">
            <h2>👑 Presidential Suite</h2>
            <p>$1299 / night</p>
            <p>Private Jacuzzi • VIP Service • Ocean View</p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section>
        <h1 className="gold" style={{ textAlign: "center" }}>
          Amenities
        </h1>

        <div className="grid">
          <div className="card">
            <h2>🏊 Infinity Pool</h2>
            <p>Relax with breathtaking ocean views.</p>
          </div>

          <div className="card">
            <h2>🍽 Fine Dining</h2>
            <p>World-class cuisine and unforgettable experiences.</p>
          </div>

          <div className="card">
            <h2>🧖 Spa & Wellness</h2>
            <p>Luxury treatments and complete relaxation.</p>
          </div>

          <div className="card">
            <h2>🏖 Beach Access</h2>
            <p>Private access to Hawaii's beautiful beaches.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h1 className="gold" style={{ textAlign: "center" }}>
          Guest Reviews
        </h1>

        <div className="grid">
          <div className="card">
            ⭐⭐⭐⭐⭐
            <p>"Amazing stay! Beautiful ocean views."</p>
            <p>- Sarah M.</p>
          </div>

          <div className="card">
            ⭐⭐⭐⭐⭐
            <p>"Outstanding service and luxury."</p>
            <p>- Michael T.</p>
          </div>

          <div className="card">
            ⭐⭐⭐⭐⭐
            <p>"One of Hawaii's finest resorts."</p>
            <p>- David W.</p>
          </div>
        </div>
      </section>
    </main>
  );
}