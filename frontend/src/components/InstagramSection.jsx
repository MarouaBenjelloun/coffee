export default function InstagramSection() {
  const images = [
    "/assets/public/coeur.png",
    "/assets/public/table.png",
    "/assets/public/vert.png",
    "/assets/public/together.png",
    "/assets/public/gobelet.png",
    "/assets/public/fleur.png",
  ];

  return (
    <div style={{ padding: "80px 48px", background: "white", fontFamily: "sans-serif" }}>

      {/* Titre */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h2
          style={{
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            margin: "0 0 12px",
            color: "#3a3a2a",
          }}
        >
          Instants Coffee Arts Paris
        </h2>

        <p style={{ color: "#666", fontSize: 14, margin: "0 0 24px" }}>
          Nos dernières inspirations, nos moments créatifs et la vie du café à retrouver sur Instagram.
        </p>

        {/* Bouton Instagram (CORRIGÉ) */}
        <a
          href="https://instagram.com/coffeearts.paris"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: "#7a8c6e",
            color: "white",
            fontSize: 13,
            letterSpacing: "0.5px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          @coffeearts.paris
        </a>
      </div>

      {/* Profil Instagram */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "3px solid transparent",
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/public/logo.png"
            alt="coffeearts"
            style={{ width: "80%", height: "80%", objectFit: "contain" }}
          />
        </div>

        {/* Infos profil */}
        <div>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>
            coffeearts.paris
          </p>
          <p style={{ margin: 0, fontSize: 13, color: "#1a1a1a" }}>
            COFFEE ARTS PARIS
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#888" }}>
            7 590 followers
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#888" }}>
            59 publications
          </p>
        </div>
      </div>

      {/* Grille images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              aspectRatio: "1 / 1",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={src}
              alt={`instagram ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}