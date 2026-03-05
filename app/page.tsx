export default function Home() {
  const products = [
    {
      id: 1,
      name: "Azal Premium T-Shirt",
      price: "$29",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    },
    {
      id: 2,
      name: "Azal Hoodie Black",
      price: "$59",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
    },
    {
      id: 3,
      name: "Azal Cap Classic",
      price: "$19",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
    },
    {
      id: 4,
      name: "Azal Women Collection",
      price: "$39",
      image: "https://images.unsplash.com/photo-1520975922284-9a1f7d9f2d57"
    }
  ];

  return (
    <main style={{ fontFamily: "Arial", background: "#f5f5f5" }}>
      {/* Header */}
      <header style={{
        background: "black",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>AZAL</h2>
        <input
          placeholder="Search products..."
          style={{ padding: "8px", width: "40%" }}
        />
        <div>
          🌍 | 👤 | 🛒
        </div>
      </header>

      {/* Banner */}
      <section style={{
        background: "linear-gradient(to right, black, #444)",
        color: "white",
        padding: "60px",
        textAlign: "center"
      }}>
        <h1>Welcome to Azal Store</h1>
        <p>Premium Fashion Inspired by Global Trends</p>
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "white",
          color: "black",
          border: "none",
          cursor: "pointer"
        }}>
          Shop Now
        </button>
      </section>

      {/* Products */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Featured Products</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
              <p>{product.price}</p>
              <button style={{
                padding: "8px 15px",
                background: "black",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "black",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px"
      }}>
        © 2026 Azal Store – All Rights Reserved
      </footer>
    </main>
  );
}
