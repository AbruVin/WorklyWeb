import React, { useState, useEffect } from "react";
import { IoMailOutline, IoLogoInstagram } from "react-icons/io5";
import WhiteLogo from "../assets/logoWorklyWhite.svg";

// Hook para detectar si es móvil
function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);
	return isMobile;
}

export default function Footer() {
  const isMobile = useIsMobile();
  
  return (
    <footer style={{
      background: "#151225",
      color: "#fff",
      padding: isMobile ? "24px 16px 20px 16px" : "36px 32px 24px 32px",
      fontFamily: 'Montserrat',
      fontSize: 16,
      width: "100%",
      boxSizing: "border-box",
      overflowX: "hidden"
    }}>
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "center" : "flex-start",
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto",
        gap: isMobile ? 24 : 0
      }}>
        {/* Columna izquierda */}
        <div style={{ 
          minWidth: isMobile ? "100%" : 260,
          textAlign: isMobile ? "center" : "left"
        }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: 8,
            justifyContent: isMobile ? "center" : "flex-start"
          }}>
            {/* Logo Workly */}
            <img src={WhiteLogo} alt="Workly logo" style={{ 
              width: 25, 
              height: 25, 
              display: "block", 
              marginRight: "8px" 
            }} />
            <span style={{ 
              fontFamily: 'Vollkorn', 
              fontStyle: "italic", 
              fontWeight: 700, 
              fontSize: 22, 
              letterSpacing: 0.7, 
              color: "#fff" 
            }}>Workly</span>
          </div>
          <div style={{ 
            color: "#fff", 
            fontSize: 15, 
            marginBottom: 18, 
            textAlign: isMobile ? "center" : "left"
          }}>
            Conectamos <span style={{ fontFamily: 'Montserrat', fontStyle: "italic", fontWeight: 700  }}>talentos</span><br />
            con <span style={{ fontFamily: 'Montserrat', fontStyle: "italic", fontWeight: 700  }}>oportunidades</span>
          </div>
          <div style={{ 
            color: "#fff", 
            fontSize: isMobile ? 14 : 15, 
            marginBottom: 6, 
            display: "flex", 
            alignItems: "center", 
            gap: 8,
            justifyContent: isMobile ? "center" : "flex-start",
            flexWrap: "wrap"
          }}>
            <IoMailOutline size={18} style={{ marginRight: 4 }} /> 
            <span style={{ wordBreak: "break-word" }}>worklybythematch@gmail.com</span>
          </div>
          <div style={{ 
            color: "#fff", 
            fontSize: isMobile ? 14 : 15, 
            display: "flex", 
            alignItems: "center", 
            gap: 8,
            justifyContent: isMobile ? "center" : "flex-start"
          }}>
            <IoLogoInstagram size={18} style={{ marginRight: 4 }} /> @workly.team
          </div>
        </div>
        
        {/* Columna derecha */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: isMobile ? "center" : "flex-end", 
          minWidth: isMobile ? "100%" : 180 
        }}>
          <nav style={{ marginBottom: isMobile ? 16 : 24 }}>
            <ul style={{ 
              listStyle: "none", 
              padding: 0, 
              margin: 0, 
              textAlign: isMobile ? "center" : "right",
              display: isMobile ? "flex" : "block",
              gap: isMobile ? 20 : 0,
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              <li style={{ 
                fontWeight: 700, 
                color: "#fff", 
                fontFamily: 'Montserrat', 
                fontSize: 16, 
                marginBottom: isMobile ? 0 : 2,
                cursor: "pointer"
              }}>Inicio</li>
              <li style={{ 
                color: "#bdb8c7", 
                fontWeight: 500, 
                fontFamily: 'Montserrat', 
                fontSize: 15, 
                marginBottom: isMobile ? 0 : 2,
                cursor: "pointer"
              }}>Propuesta</li>
              <li style={{ 
                color: "#bdb8c7", 
                fontWeight: 500, 
                fontFamily: 'Montserrat', 
                fontSize: 15,
                cursor: "pointer"
              }}>Funciones</li>
            </ul>
          </nav>
          <div style={{ 
            color: "#fff", 
            fontWeight: 700, 
            fontSize: 15, 
            fontFamily: 'Montserrat', 
            marginTop: isMobile ? 8 : 28 
          }}>
            © 2025 Workly
          </div>
        </div>
      </div>
    </footer>
  );
}
