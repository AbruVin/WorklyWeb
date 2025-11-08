import React, { useState, useEffect, useRef } from "react";
import { IoRibbonOutline, IoCodeWorkingOutline, IoCalendarOutline } from "react-icons/io5";
import "../App.css";

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

const updates = [
  {
    icon: <IoRibbonOutline size={48} color="#4B1C84" />,
    title: "Sección 'Conectar'",
    description: "Publicaciones realizadas por empresas o reclutadores.",
    status: "Implementado",
    statusColor: "#F5F3FF"
  },
  {
    icon: <IoCodeWorkingOutline size={48} color="#000B81" />,
    title: "Implementación de IA",
    description: "Resumen con preguntas personalizadas de los talentos.",
    status: "En desarrollo",
    statusColor: "#EFF1FE"
  },
  {
    icon: <IoCalendarOutline size={48} color="#616161" />,
    title: "Sincronización",
    description: "Creación del perfil en base a aplicaciones externas como Linkedin.",
    status: "Planificado",
    statusColor: "#F6F6F6"
  }
];

export default function UpdatesSection() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer para detectar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderUpdate = (update, index) => {
    const isHovered = hoveredIndex === index;
    
    return (
      <div
        key={`update-${index}`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: isMobile ? "24px" : "32px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: isMobile ? 16 : 24,
          boxShadow: isHovered ? "0 8px 24px rgba(0, 0, 0, 0.15)" : "0 4px 16px rgba(0, 0, 0, 0.1)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible 
            ? (isHovered ? "translateY(-2px)" : "translateY(0)") 
            : "translateY(20px)",
          transition: "all 0.3s ease",
          transitionDelay: isVisible ? "0s" : `${index * 0.1}s`,
          boxSizing: "border-box",
          cursor: "pointer"
        }}
      >
        <div style={{
          background: "#F5F3F8",
          borderRadius: 16,
          width: isMobile ? 64 : 80,
          height: isMobile ? 64 : 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}>
          {update.icon}
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1
        }}>
          <h3 style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: isMobile ? 18 : 20,
            color: "#232323",
            margin: 0
          }}>
            {update.title}
          </h3>
          <p style={{
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: isMobile ? 14 : 16,
            color: "#666666",
            margin: 0
          }}>
            {update.description}
          </p>
        </div>
        <div style={{
          background: update.statusColor,
          borderRadius: 20,
          padding: "8px 16px",
          flexShrink: 0
        }}>
          <span style={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: isMobile ? 12 : 14,
            color: update.status === "Planificado" ? "#616161" : 
                   update.status === "En desarrollo" ? "#000B81" : "#4B1C84"
          }}>
            {update.status}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div id="novedades" ref={sectionRef} style={{
      background: "#ffffff",
      width: "100%",
      minHeight: isMobile ? "auto" : "80vh",
      padding: isMobile ? "40px 16px" : "60px 24px",
      boxSizing: "border-box"
    }}>
      <h2
        className={isVisible ? 'feature-title' : ''}
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: isMobile ? 28 : 36,
          marginBottom: isMobile ? 30 : 50,
          fontFamily: 'Montserrat',
          color: "#232323",
          padding: 0,
          lineHeight: 1.2
        }}
      >
        <span style={{ fontFamily: 'Montserrat Bold, Montserrat', fontWeight: 700 }}>Novedades de </span>
        <span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>Workly</span>
      </h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        justifyContent: "center",
        width: "100%",
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        {updates.map((update, index) => renderUpdate(update, index))}
      </div>
    </div>
  );
}