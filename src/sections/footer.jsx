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

const FOOTER_NAV = [
  { id: "home", label: "Inicio" },
  { id: "solucion", label: "Propuesta" },
  { id: "funciones", label: "Funciones" }
];

const LEGAL_LINKS = [
  { href: "/privacidad/", label: "Política de Privacidad" },
  { href: "/terminos/", label: "Términos y Condiciones" },
  { href: "/seguridad-infantil/", label: "Estándares EASI / CSAE" },
  { href: "/eliminar-cuenta/", label: "Eliminar cuenta y datos" }
];

const legalLinkStyle = {
  color: "#bdb8c7",
  fontWeight: 500,
  fontFamily: "Montserrat",
  fontSize: 15,
  textDecoration: "none"
};

export default function Footer() {
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const headerOffset = isMobile ? 60 : 70;
    const top = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  };

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
              {FOOTER_NAV.map((item, index) => (
                <li key={item.id} style={{ marginBottom: isMobile ? 0 : 2 }}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Ir a ${item.label}`}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      minHeight: 0,
                      minWidth: 0,
                      color: index === 0 ? "#fff" : "#bdb8c7",
                      fontWeight: index === 0 ? 700 : 500,
                      fontFamily: 'Montserrat',
                      fontSize: index === 0 ? 16 : 15,
                      cursor: "pointer"
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {LEGAL_LINKS.map((item, index) => (
                <li key={item.href} style={{ marginTop: isMobile ? 0 : (index === 0 ? 8 : 6) }}>
                  <a href={item.href} style={legalLinkStyle}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ 
            color: "#fff", 
            fontWeight: 700, 
            fontSize: 15, 
            fontFamily: 'Montserrat', 
            marginTop: isMobile ? 8 : 28 
          }}>
            © 2026 Workly
          </div>
        </div>
      </div>
    </footer>
  );
}
