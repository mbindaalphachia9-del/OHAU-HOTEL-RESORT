export default function ReviewsPage() {
  return (
    <main style={{ padding: "80px 8%" }}>
      <h1 className="gold" style={{ textAlign: "center" }}>
        Guest Reviews
      </h1>

      <div className="grid">
        <div className="card">
          ⭐⭐⭐⭐⭐
          <p>"Amazing stay and beautiful ocean views."</p>
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
    </main>
  );
}