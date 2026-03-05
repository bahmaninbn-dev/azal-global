export default function RootLayout({ children }: { children: React.ReactNode }) {
    {{
      id: 1,
      name: "AZAL Premium T-Shirt",
      price: "$29",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22d0d6f9"
    },
    {
      id: 2,
      name: "AZAL Black Hoodie",
      price: "$59",
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070"
    },
    {
      id: 3,
      name: "AZAL Classic Cap",
      price: "$19",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      id: 4,
      name: "AZAL Women Collection",
      price: "$39",
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070"
    },

  return (
    <main style={{fontFamily:"Arial",padding:"20px"}}>
      <h1 style={{fontSize:"40px",fontWeight:"bold"}}>AZAL Global Store</h1>
      <p>Premium Fashion Worldwide</p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"20px",
        marginTop:"40px"
      }}>
        {products.map((p)=>(
          <div key={p.id} style={{
            border:"1px solid #ddd",
            borderRadius:"10px",
            padding:"15px"
          }}>
            <img src={p.image} style={{width:"100%",borderRadius:"10px"}} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button style={{
              background:"black",
              color:"white",
              padding:"10px",
              borderRadius:"6px"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
