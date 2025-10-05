import React from "react";
import { IoMailOutline, IoLogoInstagram } from "react-icons/io5";
import WhiteLogo from "../assets/logoWorklyWhite.svg";

export default function Footer() {
  return (
    <footer style={{
      background: "#151225",
      color: "#fff",
      padding: "36px 32px 24px 32px",
      fontFamily: 'Montserrat',
      fontSize: 16,
      width: "100vw",
      maxWidth: "100vw",
      boxSizing: "border-box",
      overflowX: "hidden"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto"
      }}>
        {/* Columna izquierda */}
        <div style={{ minWidth: 260 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            {/* Logo Workly */}
              <img src={WhiteLogo} alt="Workly logo" style={{ width: 25, height: 25, display: "block", marginRight: "8px" }} />
            <span style={{ fontFamily: 'Vollkorn', fontStyle: "italic", fontWeight: 700, fontSize: 22, letterSpacing: 0.7, color: "#fff" }}>Workly</span>
          </div>
          <div style={{ color: "#fff", fontSize: 15, marginBottom: 18, textAlign: "left" }}>
            Conectamos <span style={{ fontFamily: 'Montserrat', fontStyle: "italic", fontWeight: 700  }}>talentos</span><br />
            con <span style={{ fontFamily: 'Montserrat', fontStyle: "italic", fontWeight: 700  }}>oportunidades</span>
          </div>
          <div style={{ color: "#fff", fontSize: 15, marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
            <IoMailOutline size={18} style={{ marginRight: 4 }} /> worklybythematch@gmail.com
          </div>
          <div style={{ color: "#fff", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}>
            <IoLogoInstagram size={18} style={{ marginRight: 4 }} /> @workly.team
          </div>
        </div>
        {/* Columna derecha */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", minWidth: 180 }}>
          <nav style={{ marginBottom: 24 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "right" }}>
              <li style={{ fontWeight: 700, color: "#fff", fontFamily: 'Montserrat', fontSize: 16, marginBottom: 2 }}>Inicio</li>
              <li style={{ color: "#bdb8c7", fontWeight: 500, fontFamily: 'Montserrat', fontSize: 15, marginBottom: 2 }}>Propuesta</li>
              <li style={{ color: "#bdb8c7", fontWeight: 500, fontFamily: 'Montserrat', fontSize: 15 }}>Funciones</li>
            </ul>
          </nav>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: 'Montserrat', marginTop: 8, position: "absolute", bottom: 26 }}>
            © 2025 Workly
          </div>
        </div>
      </div>
    </footer>
  );
}
