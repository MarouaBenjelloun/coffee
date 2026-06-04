export default function GalerieSection() {
  const images = [
    "/assets/public/white.png",
    "/assets/public/SIGNATURES - PHOTO 2.jpg",
    "/assets/public/SIGNATURES - PHOTO 3.jpg",
    "/assets/public/test2.jpg",
    "/assets/public/test.png",
    "/assets/public/CERAMIQUE - PHOTO 1.jpg",
    "/assets/public/SIGNATURES - PHOTO 7.jpg",
    "/assets/public/acceuille signature.JPG",
  ];

  return (
    <div style={{ padding: "80px 48px", background: "#f5ede4", fontFamily: "sans-serif" }}>

      {/* Titre */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{
          fontSize: "clamp(22px, 4vw, 38px)",
          fontWeight: 400,
          fontFamily: "Georgia, serif",
          margin: "0 0 12px",
          color: "#3a3a2a",
        }}>
          Au cœur de Coffee Arts Paris
        </h2>
        <p style={{ color: "#666", fontSize: 14, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          Des images pour découvrir l'ambiance du lieu, ses matières, et les instants qui s'y vivent au quotidien.
        </p>
      </div>

      {/* Grille photos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
      }}>
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              aspectRatio: "1 / 1",
            }}
          >
            <img
              src={src}
              alt={`galerie ${index + 1}`}
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