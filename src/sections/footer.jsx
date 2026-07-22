import React, { useState, useEffect } from "react";
import { IoMailOutline, IoLogoInstagram, IoCloseOutline } from "react-icons/io5";
import WhiteLogo from "../assets/logoWorklyWhite.svg";

const CONTACT_EMAIL = "worklybythematch@gmail.com";

function DeleteAccountModal({ isMobile, onClose }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const sectionTitleStyle = {
    color: "#1c1830",
    fontSize: isMobile ? 16 : 17,
    fontWeight: 700,
    margin: "20px 0 8px 0"
  };
  const textStyle = {
    color: "#554f65",
    fontSize: isMobile ? 14 : 15,
    lineHeight: 1.6,
    margin: "0 0 8px 0"
  };
  const listStyle = {
    color: "#554f65",
    fontSize: isMobile ? 14 : 15,
    lineHeight: 1.6,
    margin: "0 0 8px 0",
    paddingLeft: 22
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Eliminación de cuenta y datos"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 12, 28, 0.72)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? 12 : 32
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 18,
          maxWidth: 680,
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          padding: isMobile ? "22px 18px" : "32px 36px",
          fontFamily: "Montserrat",
          position: "relative",
          boxShadow: "0 24px 64px rgba(0,0,0,0.35)"
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "#f1eefa",
            border: "none",
            borderRadius: 10,
            width: 38,
            height: 38,
            minWidth: 38,
            minHeight: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#3B2580",
            padding: 0
          }}
        >
          <IoCloseOutline size={24} />
        </button>

        <h2 style={{
          color: "#1c1830",
          fontSize: isMobile ? 20 : 24,
          fontWeight: 700,
          margin: "0 0 6px 0",
          paddingRight: 44
        }}>
          Eliminación de cuenta y datos de Workly
        </h2>
        <p style={textStyle}>
          Podés solicitar que eliminemos tu cuenta de Workly y todos los datos
          asociados, o pedir que borremos solo una parte de tus datos sin cerrar
          tu cuenta. Ambas solicitudes se hacen por correo electrónico.
        </p>

        <h3 style={sectionTitleStyle}>Cómo solicitarlo</h3>
        <ol style={listStyle}>
          <li>Escribí a <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#493092", fontWeight: 600 }}>{CONTACT_EMAIL}</a> desde el correo asociado a tu cuenta de Workly.</li>
          <li>Indicá tu nombre completo y si querés eliminar la cuenta completa o solo algunos datos.</li>
          <li>Respondé el mensaje de verificación de identidad que te enviaremos. Nunca te pediremos tu contraseña.</li>
        </ol>

        <h3 style={sectionTitleStyle}>Qué datos se eliminan</h3>
        <p style={textStyle}>
          Datos de registro y contacto, perfil profesional o empresarial,
          currículums y archivos cargados, postulaciones, historial de actividad
          y mensajes asociados a la cuenta.
        </p>

        <h3 style={sectionTitleStyle}>Plazos y retención</h3>
        <ul style={listStyle}>
          <li>Procesamos la solicitud dentro de los <strong>30 días</strong> posteriores a la verificación de identidad.</li>
          <li>Las copias en respaldos de seguridad pueden permanecer hasta <strong>90 días adicionales</strong>.</li>
          <li>Podemos conservar la información mínima requerida por ley, seguridad o prevención de fraude, solo durante el plazo exigido.</li>
        </ul>

        <p style={{ ...textStyle, fontWeight: 600, color: "#4d422b", background: "#fff8e8", borderLeft: "4px solid #dfaa35", padding: "10px 14px", borderRadius: 8, marginBottom: 0 }}>
          La eliminación de la cuenta es permanente: no podrás recuperar tu perfil,
          archivos ni actividad.
        </p>
      </div>
    </div>
  );
}

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

export default function Footer() {
  const isMobile = useIsMobile();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
              <li style={{
                marginTop: isMobile ? 0 : 8
              }}>
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(true)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    minHeight: 0,
                    minWidth: 0,
                    color: "#bdb8c7",
                    fontWeight: 500,
                    fontFamily: 'Montserrat',
                    fontSize: 15,
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    cursor: "pointer"
                  }}
                >
                  Eliminar cuenta y datos
                </button>
              </li>
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
      {showDeleteModal && (
        <DeleteAccountModal isMobile={isMobile} onClose={() => setShowDeleteModal(false)} />
      )}
    </footer>
  );
}
