export default function NouveautesSection() {
  const produits = [
    {
      image: "/assets/public/ceremnial_matcha.png",
      tag: "CEREMONIAL MATCHA",
      prix: "30 €",
      description:
        "Découvrez notre matcha cérémonial d'exception, soigneusement sélectionné dans l...",
    },
    {
      image: "/assets/public/sac.png",
      tag: "Graphic Cotton Tote Bag | Signature",
      prix: "20 €",
      description:
        "Tote bag en coton naturel au design graphique signé Coffee Arts Paris. Pratique, résistant et...",
    },
    {
      image: "/assets/public/casquette.png",
      tag: "Graphic Cotton Cap | Signature",
      prix: "25 €",
      description:
        "Casquette en coton avec broderie graphique Coffee Arts Paris.",
    },
  ];

  return (
    <div
      style={{
        padding: "80px 48px",
        background: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Titre */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2
          style={{
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            margin: "0 0 12px",
            color: "#3a3a2a",
          }}
        >
          Nos dernières nouveautés
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: 14,
            margin: 0,
          }}
        >
          L'univers Coffee Arts Paris, à emporter avec vous.
        </p>
      </div>

      {/* Produits */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
        }}
      >
        {produits.map((produit, index) => (
          <div key={index}>
            {/* Image */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 20,
                aspectRatio: "4 / 3",
              }}
            >
              <img
                src={produit.image}
                alt={produit.tag}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Infos */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  margin: 0,
                  color: "#1a1a1a",
                  maxWidth: "75%",
                  lineHeight: 1.4,
                }}
              >
                {produit.tag}
              </h3>

              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1a1a1a",
                  whiteSpace: "nowrap",
                }}
              >
                {produit.prix}
              </span>
            </div>

            <p
              style={{
                fontSize: 13,
                color: "#888",
                lineHeight: 1.6,
                margin: "0 0 16px",
              }}
            >
              {produit.description}
            </p>

            <a
              href="/"
              style={{
                fontSize: 13,
                color: "#1a1a1a",
                textDecoration: "none",
                borderBottom: "1px solid #1a1a1a",
                paddingBottom: 2,
              }}
            >
              Voir plus
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}