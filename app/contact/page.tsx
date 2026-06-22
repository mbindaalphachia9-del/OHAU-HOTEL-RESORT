"use client";

export default function ContactPage() {
  return (
    <main style={{ padding: "80px 8%" }}>
      <h1 className="gold">Contact Us</h1>

      <div className="card">
        <p>📞 +1 (808) 555-2026</p>
        <p>📧 reservations@oahuhotelresort.com</p>
        <p>📍 Waikiki, Oahu, Hawaii</p>
      </div>

      <br />

      <div className="card">
        <input placeholder="Full Name" />
        <br />
        <br />

        <input placeholder="Email Address" />
        <br />
        <br />

        <textarea
          placeholder="Your Message"
          rows={6}
        />

        <button className="primary-btn">
          Send Message
        </button>
      </div>
    </main>
  );
}