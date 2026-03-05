export default function Home() {

  const products = [
    {
      id: 1,
      name: "AZAL Premium T-Shirt",
      price: "$29",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614"
    },
    {
      id: 2,
      name: "AZAL Hoodie Black",
      price: "$59",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    },
    {
      id: 3,
      name: "AZAL Cap Classic",
      price: "$19",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    },
    {
      id: 4,
      name: "AZAL Women Collection",
      price: "$39",
      image: "https://images.unsplash.com/photo-1520975922323-9c2bcb1b9a65"
    }
  ];

  return (
    <main style={{fontFamily:"Arial"}}>

      {/* HERO */}
      <div style={{
        background:"linear-gradient(90deg, black, #444)",
        color:"white",
        padding:"80px 20px",
        textAlign:"center"
      }}>
        <h1>Welcome to AZAL Store</h1>
        <p>Premium Fashion Inspired by Global Trends</p>
        <button style={{
          marginTop:"20px",
          padding:"12px 25px",
          background:"white",
          border:"none",
          fontWeight:"bold"
        }}>
          Shop Now
        </button>
      </div>

      {/* PRODUCTS */}
      <div style={{padding:"40px"}}>

        <h2 style={{textAlign:"center", marginBottom:"40px"}}>
          Featured Products
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"30px"
        }}>

          {products.map((p) => (
            <div key={p.id} style={{
              background:"#f5f5f5",
              padding:"20px",
              borderRadius:"10px",
              textAlign:"center"
            }}>

              <img
                src={p.image}
                style={{
                  width:"100%",
                  borderRadius:"10px",
                  marginBottom:"15px"
                }}
              />

              <h3>{p.name}</h3>

              <p style={{fontWeight:"bold"}}>{p.price}</p>

              <button style={{
                background:"black",
                color:"white",
                padding:"10px 20px",
                border:"none"
              }}>
                Add to Cart
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  )
}
