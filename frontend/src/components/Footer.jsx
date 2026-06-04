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

          {/* Logo + description */}
          <div>
            <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 20, margin: "0 0 4px" }}>
              Coffee Arts
            </h3>
            <p style={{ fontSize: 11, opacity: 0.7, margin: "0 0 16px" }}>Paris</p>
            <p style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.7, margin: "0 0 20px" }}>
              Un lieu unique où la céramique rencontre le café artisanal à Paris.<br />
              Créer, déguster, partager.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["instagram", "tiktok", "pinterest"].map((s) => (
                <a key={s} href="#" style={{
                  width: 32, height: 32,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: 14, textDecoration: "none",
                }}>
                  {s === "instagram" ? "IG" : s === "tiktok" ? "TK" : "PT"}
                </a>
              ))}
            </div>
          </div>

          {/* Découvrir */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 20px", color: "#c8d4a0" }}>Découvrir</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
              {["Café", "Blog", "Céramique", "À propos", "Boutique", "Contact", "Événements", "Espace client"].map((item) => (
                <a key={item} href="#" style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 20px", color: "#c8d4a0" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "07.66.91.82.94",
                "coffeeartsparis@gmail.com",
                "25 Boulevard du Temple",
                "75003 Paris",
              ].map((item) => (
                <span key={item} style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{item}</span>
              ))}
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 20px", color: "#c8d4a0" }}>Horaires</h4>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: "0 0 8px", lineHeight: 1.6 }}>
              Mardi – Mercredi – Jeudi – Vendredi<br />08h – 20h
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: 0, lineHeight: 1.6 }}>
              Samedi – Dimanche<br />10h – 21h
            </p>
          </div>

        </div>

        {/* Bas du footer */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <span style={{ fontSize: 12, opacity: 0.6 }}>
            © 2026 Coffee Arts Paris. Tous droits réservés.
          </span>

          {/* Paiement */}
          <div style={{ display: "flex", gap: 8 }}>
            {["MC", "VISA", "GPay", "Pay"].map((p) => (
              <span key={p} style={{
                background: "white",
                color: "#333",
                fontSize: 10,
                fontWeight: 600,
                padding: "4px 8px",
                borderRadius: 4,
              }}>
                {p}
              </span>
            ))}
          </div>

          {/* Liens légaux */}
          <div style={{ display: "flex", gap: 20 }}>
            {["Politique de confidentialité", "Politique cookies", "Mentions légales"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}