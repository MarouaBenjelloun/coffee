import { useNavigate } from "react-router-dom";

export default function AteliersPage() {
  const navigate = useNavigate();

  const ateliersStandard = [
    {
      image: "/assets/public/mains.png",
      niveau: "débutant",
      titre: "Initiation à la poterie",
      description: "Découvrez les bases du travail de la terre et les gestes essentiels du potier. Un premier contact avec la matière pour comprendre, expérimenter et créer en toute simplicité.\n\nChaque session comprend 1h45 de création, puis 15 minutes prévues pour le nettoyage et le rangement, afin de garantir un espace agréable pour tous.",
      duree: "2h",
      date: "jeudi 4 juin 2026",
      prix: "70 €",
      prixEtudiant: null,
      bouton: "Réserver",
    },
    {
      image: "/assets/public/peinture.png",
      niveau: "débutant",
      titre: "Peinture sur céramique",
      description: "Un atelier ouvert à tous pour décorer une pièce en céramique et explorer la couleur, sans prérequis. L'accent est mis sur le plaisir de créer et la liberté du geste.\n\n⚠️ La formule ne comprend pas les extras. Tout ajout ou option supplémentaire sera facturé en supplément sur place.\n\nChaque session comprend 1h45 de création, puis 15 minutes prévues pour le nettoyage et le rangement.",
      duree: "2h",
      date: "jeudi 4 juin 2026",
      prix: "35 €",
      prixEtudiant: "Étudiants : 34 €",
      bouton: "Réserver",
    },
    {
      image: "/assets/public/noir.png",
      niveau: "débutant",
      titre: "CREATE YOUR MUG 🧡",
      description: "Pendant 2 heures, vous serez accompagnée par une céramiste professionnelle qui vous guidera pas à pas dans la création de votre mug. Que vous soyez débutante ou déjà initiée, cet atelier est accessible à toutes.",
      duree: "2h",
      date: "mardi 9 juin 2026",
      prix: "70 €",
      prixEtudiant: null,
      bouton: "Réserver",
    },
    {
      image: "/assets/public/peinture2/png",
      niveau: "débutant",
      titre: "PEINTURE POST POTERIE",
      description: "Cet atelier est la seconde étape de votre expérience poterie. Après avoir participé à l'atelier Initiation à la poterie, votre pièce a été façonnée puis cuite une première fois afin de la préparer à la décoration.\n\nLors de cet atelier, vous viendrez personnaliser et peindre votre création à l'aide d'engobes et de différentes techniques décoratives. C'est le moment de laisser libre cours à votre créativité.\n\nUne fois l'atelier terminé, votre pièce sera cuite une seconde fois au four, ce qui permettra de fixer les couleurs et de rendre votre création durable et utilisable.\n\n⚠️ Important : Cet atelier est uniquement réservé aux personnes ayant déjà participé à l'atelier \"Initiation à la poterie\".",
      duree: "2h",
      date: "Bientôt disponible",
      prix: "35 €",
      prixEtudiant: null,
      bouton: "Bientôt disponible",
    },
    {
      image: "/assets/public/tajine.png",
      niveau: "débutant",
      titre: "🏺 Atelier Peinture sur Céramique – Tajine du Maroc",
      description: "Offrez-vous un moment créatif autour d'un véritable tajine importé du Maroc, à personnaliser selon vos envies ✨\n\nPendant cet atelier, vous décorerez votre propre tajine en céramique avec des peintures adaptées, guidé(e) par notre équipe. Motifs traditionnels, inspirations modernes ou création libre...\n\nChaque pièce est ensuite cuite deux fois afin de fixer durablement les couleurs et garantir un rendu de qualité.\n\nTarif : 60€ par personne\n✓ Tajine inclus\n✓ Matériel et peintures fournis\n✓ Accompagnement sur place\n✓ 2 cuissons\n\nUn atelier unique à vivre entre amis, en famille ou pour une occasion spéciale 🤍",
      duree: "2h",
      date: "samedi 4 juillet 2026",
      prix: "60 €",
      prixEtudiant: null,
      bouton: "Réserver",
    },
    {
      image: "/assets/public/cerise.png",
      niveau: "débutant",
      titre: "Peinture sur céramique & brunch",
      description: "Une expérience créative à vivre sur place : peinture sur céramique, boisson et option salée au choix. L'occasion de créer à votre rythme, tout en partageant un moment convivial.\n\n⚠️ La formule ne comprend pas les extras. Tout ajout ou option supplémentaire sera facturé en supplément sur place.\n\nChaque session comprend 1h45 de création, puis 15 minutes prévues pour le nettoyage et le rangement, afin de garantir un espace agréable pour tous.",
      duree: "2h",
      date: "jeudi 4 juin 2026",
      prix: "60 €",
      prixEtudiant: null,
      bouton: "Réserver",
    },
    {
      image: "/assets/public/oeuf.png",
      niveau: "débutant",
      titre: "Peinture sur céramique & sweet",
      description: "Cet atelier de peinture sur céramique s'accompagne d'une pause gourmande. Une boisson et une douceur sucrée au choix viennent compléter la formule.\n\n⚠️ La formule ne comprend pas les extras. Tout ajout ou option supplémentaire sera facturé en supplément sur place.\n\nChaque session comprend 1h45 de création, puis 15 minutes prévues pour le nettoyage et le rangement, afin de garantir un espace agréable pour tous.",
      duree: "2h",
      date: "jeudi 4 juin 2026",
      prix: "45 €",
      prixEtudiant: null,
      bouton: "Réserver",
    },
    {
      image: "/assets/public/modelage.png",
      niveau: "débutant",
      titre: "Modelage et peinture",
      description: "Façonnez une pièce à la main en explorant différentes techniques de modelage. Un atelier libre et accessible, centré sur le geste, la matière et le plaisir de créer.\n\nChaque session comprend 1h45 de création, puis 15 minutes prévues pour le nettoyage et le rangement, afin de garantir un espace agréable pour tous.",
      duree: "2h",
      date: "jeudi 4 juin 2026",
      prix: "80 €",
      prixEtudiant: null,
      bouton: "Réserver",
    },
    {
      image: "/assets/public/tasse.png",
      niveau: "débutant",
      titre: "Peinture sur céramique - Anti - gaspi",
      description: "Un atelier libre autour de pièces en céramique présentant de légères imperfections. Ces objets, initialement mis de côté, deviennent le support d'une création unique. Chacun les transforme et leur redonne une nouvelle vie à travers la peinture.\n\nChaque session comprend 1h45 de création, puis 15 minutes prévues pour le nettoyage et le rangement, afin de garantir un espace agréable pour tous.",
      duree: "2h",
      date: "Bientôt disponible",
      prix: "25.9 €",
      prixEtudiant: null,
      bouton: "Bientôt disponible",
    },
  ];

  const imagesIdees = [
    "/assets/public/fleurrose.png",
    "/assets/public/rose2.png",
    "/assets/public/rose3.png",
  ];

  return (
    <div style={{ fontFamily: "sans-serif", background: "white", minHeight: "100vh" }}>

      {/* Navbar */}
      <nav style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        borderBottom: "1px solid #eee",
        background: "#faf6f0",
      }}>
        <span style={{ fontSize: 20 }}>☕</span>
        <div
          onClick={() => navigate("/")}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="#3a3a2a" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="28" r="3.5" />
            <circle cx="18" cy="28" r="3.5" />
            <circle cx="26" cy="28" r="3.5" />
            <path d="M14 22 Q10 10 18 6 Q26 10 22 22" stroke="#3a3a2a" strokeWidth="1.5" fill="none" />
          </svg>
          <span style={{ fontSize: 10, letterSpacing: "1px", color: "#3a3a2a" }}>Coffee Arts</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <span style={{ cursor: "pointer", fontSize: 18 }}>🔍</span>
          <span style={{ cursor: "pointer", fontSize: 18 }}>🛒</span>
          <span style={{ cursor: "pointer", fontSize: 18 }}>👤</span>
        </div>
      </nav>

      {/* Hero */}
      <div style={{
        position: "relative",
        padding: "80px 48px 60px",
        textAlign: "center",
        background: "#f0ece4",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/assets/public/ateliers-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 64px)",
            fontWeight: 400,
            fontFamily: "Georgia, serif",
            color: "#3a3a2a",
            margin: "0 0 20px",
          }}>
            Nos <span style={{ color: "#6b7c5c" }}>ateliers</span>
          </h1>
          <p style={{
            fontSize: 15, color: "#555",
            maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7,
          }}>
            Des ateliers de céramique pour explorer la matière, s'initier aux gestes et vivre une expérience créative, au rythme de chacun.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              padding: "12px 24px", background: "#4a5c3a",
              color: "white", border: "none", borderRadius: 6, fontSize: 14, cursor: "pointer",
            }}>
              📅 Standard
            </button>
            <button style={{
              padding: "12px 24px", background: "rgba(255,255,255,0.7)",
              color: "#3a3a2a", border: "1px solid #ccc", borderRadius: 6, fontSize: 14, cursor: "pointer",
            }}>
              🌙 Iftar at Coffee Art Paris
            </button>
          </div>
        </div>
      </div>

      {/* Grille ateliers */}
      <div style={{ background: "#7a8c6e", padding: "48px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24, maxWidth: 1100, margin: "0 auto",
        }}>
          {ateliersStandard.map((atelier, index) => (
            <div key={index} style={{
              background: "white", borderRadius: 16,
              overflow: "hidden", display: "flex", flexDirection: "column",
            }}>
              <div style={{ height: 200, overflow: "hidden" }}>
                <img src={atelier.image} alt={atelier.titre}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{
                  display: "inline-block", fontSize: 11,
                  padding: "4px 10px", border: "1px solid #ccc",
                  borderRadius: 20, color: "#666", marginBottom: 12, alignSelf: "flex-start",
                }}>
                  {atelier.niveau}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a1a", margin: "0 0 12px" }}>
                  {atelier.titre}
                </h3>
                <p style={{
                  fontSize: 13, color: "#555", lineHeight: 1.7,
                  margin: "0 0 20px", flex: 1, whiteSpace: "pre-line",
                }}>
                  {atelier.description}
                </p>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>
                  <div style={{ marginBottom: 4 }}>🕐 {atelier.duree}</div>
                  <div>📅 {atelier.date}</div>
                </div>
                <div style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", flexWrap: "wrap", gap: 8,
                }}>
                  <div>
                    <span style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a" }}>{atelier.prix}</span>
                    {atelier.prixEtudiant && (
                      <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{atelier.prixEtudiant}</div>
                    )}
                  </div>
                  <button style={{
                    padding: "10px 20px",
                    background: atelier.bouton === "Réserver" ? "#4a5c3a" : "#aaa",
                    color: "white", border: "none", borderRadius: 6,
                    fontSize: 13, cursor: "pointer", fontWeight: 600,
                  }}>
                    {atelier.bouton}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Envie de nouvelles idées */}
      <div style={{ padding: "80px 48px", background: "white" }}>
        <h2 style={{
          textAlign: "center", fontSize: "clamp(22px, 4vw, 36px)",
          fontWeight: 700, fontFamily: "Georgia, serif",
          color: "#3a3a2a", margin: "0 0 40px",
        }}>
          Envie de nouvelles idées ?
        </h2>

        {/* 3 photos */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16, marginBottom: 48,
        }}>
          {imagesIdees.map((src, i) => (
            <div key={i} style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={src} alt={`idee ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {/* Bloc texte + image */}
        <div style={{
          background: "#f9f7f4", borderRadius: 16,
          padding: "40px", display: "flex",
          gap: 40, alignItems: "center", flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: "0 0 16px" }}>
              L'atelier de céramique est un espace ouvert à celles et ceux qui souhaitent découvrir la matière, expérimenter et créer de leurs mains.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: "0 0 16px" }}>
              Peinture sur céramique, modelage ou initiation à la poterie : chaque atelier est pensé comme un moment accessible, guidé et sans pression.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: "0 0 16px" }}>
              Que vous veniez pour la première fois ou que vous ayez déjà pratiqué, l'accompagnement se fait pas à pas, dans une atmosphère conviviale.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: "0 0 16px" }}>
              L'objectif n'est pas la performance, mais le plaisir de créer, d'apprendre et de prendre le temps.
            </p>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, margin: 0 }}>
              Les ateliers se déroulent en petits groupes, afin de garantir une expérience attentive et personnalisée pour chaque participant.
            </p>
          </div>
          <div style={{ width: 320, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
            <img src="/assets/public/noir13.png" alt="ambiance atelier"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>

    </div>
  );
}