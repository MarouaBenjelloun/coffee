import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="/assets/public/VIDEO PAGE D'ACCUEIL.mov"
          type="video/quicktime"
        />
        <source
          src="/assets/public/VIDEO PAGE D'ACCUEIL.mov"
          type="video/mp4"
        />
      </video>

      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Navbar */}
      <nav
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 48px",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", gap: 28 }}>
          {["Café", "Céramique", "Boutique", "Événements"].map((item) => (
            <a key={item} href="/" style={navLinkStyle}>
              {item}
            </a>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 36 36"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="28" r="3.5" />
            <circle cx="18" cy="28" r="3.5" />
            <circle cx="26" cy="28" r="3.5" />
            <path
              d="M14 22 Q10 10 18 6 Q26 10 22 22"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M10 22 Q6 8 18 2 Q30 8 26 22"
              stroke="white"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
          </svg>

          <span
            style={{
              color: "white",
              fontSize: 11,
              letterSpacing: "1px",
              marginTop: 4,
            }}
          >
            Coffee Arts
          </span>
        </div>

        <div style={{ display: "flex", gap: 28 }}>
          {["Blog", "Nos engagements", "Contact", "Espace client"].map(
            (item) => (
              <a key={item} href="/" style={navLinkStyle}>
                {item}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px 100px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 400,
            margin: "0 0 16px",
            lineHeight: 1.15,
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.5px",
          }}
        >
          Specialty coffee & pottery studio
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 15,
            margin: "0 0 12px",
            letterSpacing: "0.5px",
          }}
        >
          Sip, create and connect
        </p>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 14,
            maxWidth: 420,
            margin: "0 0 16px",
            lineHeight: 1.8,
          }}
        >
          Un lieu hybride où l'on vient savourer un café, créer de ses mains et
          partager un moment, simplement.
        </p>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 12,
            margin: "0 0 44px",
            letterSpacing: "0.5px",
          }}
        >
          25 boulevard du Temple, 75003 Paris
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => navigate("/ateliers")}
            style={btnOutlineStyle}
          >
            Réserver un atelier
          </button>

          <button style={btnDarkStyle}>Découvrir la carte</button>
        </div>
      </div>
    </div>
  );
}

const navLinkStyle = {
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontSize: 13,
  letterSpacing: "0.5px",
};

const btnOutlineStyle = {
  padding: "12px 26px",
  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.55)",
  color: "white",
  fontSize: 13,
  letterSpacing: "0.5px",
  borderRadius: 4,
  cursor: "pointer",
};

const btnDarkStyle = {
  padding: "12px 26px",
  background: "rgba(40,38,30,0.75)",
  border: "1px solid rgba(255,255,255,0.3)",
  color: "white",
  fontSize: 13,
  letterSpacing: "0.5px",
  borderRadius: 4,
  cursor: "pointer",
};