import styled from 'styled-components'

import useState from "react";

export default function BackgroundTroca() {
  const [bg, setBg] = useState("img1");

  const TrocarBackground = () => {
    setBg((prev) => (prev === "img1" ? "img2" : "img1"));
  };

  const styles = {
    container: {
      height: "100vh",
      width: "100%",
      backgroundImage:
        bg === "img1"
          ? "url('/carta.jpg')"
          : "url('/imagem2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      padding: "12px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={toggleBackground}>
        Alternar Fundo
      </button>
    </div>
  );
}