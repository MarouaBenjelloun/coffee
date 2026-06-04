export default function ExperiencesSection() {
  const cards = [
    {
      tag: "DÉGUSTER",
      title: "Café de spécialité",
      link: "Découvrir la carte",
      image: "/assets/public/IMG_8509.jpg",
    },
    {
      tag: "CRÉER",
      title: "Ateliers créatifs",
      link: "Participer à un atelier",
      image: "/assets/public/SIGNATURES%20-%20PHOTO%206.jpg",
    },
    {
      tag: "EMPORTER",
      title: "La boutique",
      link: "Explorer la boutique",
      image: "/assets/public/SIGNATURES%20-%20PHOTO%203.jpg",
    },
  ];

  return (
    <div style={{ padding: "80px 48px", background: "white", fontFamily: "sans-serif" }}>
      
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{
          fontSize: "clamp(24px, 4vw, 40px)",
          fontWeight: 400,
          fontFamily: "Georgia, serif",
          margin: "0 0 12px",
          color: "#1a1a1a",
        }}>
          Trois expériences, un même lieu
        </h2>
        <p style={{ color: "#666", fontSize: 14, margin: 0 }}>
          Un café de spécialité, des ateliers créatifs et une boutique, pensés pour se compléter.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 16,
      }}>
        {cards.map((card) => (
          <div
            key={card.tag}
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              height: 380,
              cursor: "pointer",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)",
            }} />

            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "24px 20px",
              color: "white",
            }}>
              <span style={{
                fontSize: 11,
                letterSpacing: "1.5px",
                fontWeight: 600,
                opacity: 0.85,
                display: "block",
                marginBottom: 6,
              }}>
                {card.tag}
              </span>

              <h3 style={{
                fontSize: 24,
                fontWeight: 400,
                fontFamily: "Georgia, serif",
                margin: "0 0 16px",
              }}>
                {card.title}
              </h3>

              <span style={{
                fontSize: 13,
                borderBottom: "1px solid rgba(255,255,255,0.6)",
                paddingBottom: 2,
                cursor: "pointer",
              }}>
                {card.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}