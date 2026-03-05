import "./globals.css";

export const metadata = {
  title: "Azal Store",
  description: "Premium Fashion Inspired by Global Trends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Header */}
        <header style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"15px 30px",
          background:"#000",
          color:"#fff"
        }}>
          
          <h1 style={{fontWeight:"700",letterSpacing:"2px"}}>AZAL</h1>

          <input
            placeholder="Search products..."
            style={{
              padding:"8px",
              width:"40%",
              borderRadius:"5px",
              border:"none"
            }}
          />

          <div style={{display:"flex",gap:"20px",fontSize:"20px"}}>
            🌍
            👤
            ❤️
            🛒
          </div>

        </header>

        {children}

        {/* Footer */}
        <footer style={{
          marginTop:"50px",
          background:"#111",
          color:"#fff",
          padding:"30px",
          textAlign:"center"
        }}>
          
          <h2>Azal Store</h2>

          <p>Premium Fashion Inspired by Global Trends</p>

          <p>
          Contact: azalstore@email.com
          </p>

          <div style={{marginTop:"15px",fontSize:"24px"}}>
          💳 Visa | Mastercard | PayPal | Cash on Delivery
          </div>

          <p style={{marginTop:"20px"}}>
          © 2026 Azal Global
          </p>

        </footer>

      </body>
    </html>
  );
}
