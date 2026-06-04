export default function Footer() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* Section CTA */}
      <div style={{
        padding: "80px 48px",
        background: "#f5f0eb",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "clamp(24px, 4vw, 42px)",
          fontWeight: 400,
          fontFamily: "Georgia, serif",
          color: "#3a3a2a",
          margin: "0 0 20px",
          lineHeight: 1.3,
        }}>
          Un moment autour du café<br />et de la création
        </h2>

        <p style={{ color: "#666", fontSize: 14, margin: "0 0 36px", lineHeight: 1.7 }}>
          Un lieu où l'on vient créer, discuter, boire un café et s'attarder.<br />
          Des moments simples, à vivre et à partager.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            padding: "14px 28px",
            background: "#6b7c5c",
            color: "white",
            border: "none",
            borderRadius: 6,
            fontSize: 14,
            cursor: "pointer",
          }}>
            Découvrir les ateliers
          </button>

          <button style={{
            padding: "14px 28px",
            background: "#e8d8c4",
            color: "#3a3a2a",
            border: "none",
            borderRadius: 6,
            fontSize: 14,
            cursor: "pointer",
          }}>
            Accéder à la boutique
          </button>
        </div>
      </div>

      {/* Footer vert */}
      <div style={{
        background: "#4a5c3a",
        color: "white",
        padding: "56px 48px 24px",
      }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 40,
          marginBottom: 48,
        }}>

          {/* Logo */}
          <div>
            <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 20 }}>
              Coffee Arts
            </h3>

            <p style={{ fontSize: 13, opacity: 0.8 }}>
              Un lieu unique café & céramique à Paris.
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              {["instagram", "tiktok", "pinterest"].map((s) => (
                <a
                  key={s}
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  {s === "instagram" ? "IG" : s === "tiktok" ? "TK" : "PT"}
                </a>
              ))}
            </div>
          </div>

          {/* Découvrir */}
          <div>
            <h4 style={{ color: "#c8d4a0" }}>Découvrir</h4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["Café", "Blog", "Céramique", "À propos", "Boutique", "Contact", "Événements", "Espace client"].map((item) => (
                <a
                  key={item}
                  href="/"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, textDecoration: "none" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#c8d4a0" }}>Contact</h4>

            <div style={{ fontSize: 13, opacity: 0.8 }}>
              07.66.91.82.94<br />
              coffeeartsparis@gmail.com<br />
              25 Boulevard du Temple<br />
              75003 Paris
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 style={{ color: "#c8d4a0" }}>Horaires</h4>

            <div style={{ fontSize: 13, opacity: 0.8 }}>
              Mardi - Vendredi : 08h - 20h<br />
              Samedi - Dimanche : 10h - 21h
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 20 }}>
          <span style={{ fontSize: 12, opacity: 0.6 }}>
            © 2026 Coffee Arts Paris
          </span>
        </div>

      </div>
    </div>
  );
}