import React, { useState, useEffect, useRef } from "react";
import {
  IoBusiness, IoBriefcase, IoTimeOutline, IoTrophyOutline, IoSparklesOutline,
  IoDiamondOutline, IoRocketOutline, IoBodyOutline
} from "react-icons/io5";
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

const empresaFeatures = [
  {
    icon: <IoTimeOutline size={30} color="#0B1175" />,
    title: "Optimización del tiempo"
  },
  {
    icon: <IoTrophyOutline size={30} color="#29158C" />,
    title: "Mejor tasa de éxito"
  },
  {
    icon: <IoSparklesOutline size={30} color="#4B1C84" />,
    title: "Filtros inteligentes"
  }
];

const empleadoFeatures = [
  {
    icon: <IoDiamondOutline size={30} color="#0B1175" />,
    title: "Perfiles atractivos"
  },
  {
    icon: <IoRocketOutline size={30} color="#29158C" />,
    title: "Ágiles y modernos"
  },
  {
    icon: <IoBodyOutline size={30} color="#4B1C84" />,
    title: "Menor frustración"
  }
];

export default function OurProffer() {
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
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

  // Función para controlar animación
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(false);
    }
  }, [isVisible]);

  const renderFeature = (feature, index) => {
    return (
      <div
        key={`feature-${index}`}
        style={{
          background: "#ffffff",
          borderRadius: 12,
          padding: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          border: "1px solid #e9ecef",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateY(20px)" : "translateY(0)",
          transition: "all 0.3s ease-out",
          animationDelay: `${index * 0.1}s`,
          animation: isAnimating ? "none" : `slideInUp 0.4s ease-out ${index * 0.1}s both`
        }}
        className={!isAnimating ? "animate-on-scroll" : ""}
      >
        <div style={{
          background: feature.icon.props.color,
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}>
          {React.cloneElement(feature.icon, {
            color: "#fff",
            size: 24
          })}
        </div>
        <div style={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: 16,
          color: "#232323",
          flex: 1
        }}>
          {feature.title}
        </div>
      </div>
    );
  };

  return (
    <div id="solucion" ref={sectionRef} style={{
      background: "#fff",
      width: "100%",
      height: isMobile ? "auto" : "65vH",
      padding: isMobile ? "20px 16px" : "30px 0",
      boxSizing: "border-box"
    }}>
      <h2
        className={isVisible ? 'feature-title' : ''}
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: isMobile ? 28 : 36,
          marginBottom: isMobile ? 20 : 50,
          fontFamily: 'Montserrat',
          color: "#232323",
          padding: isMobile ? "0 16px" : 0,
          lineHeight: isMobile ? 1.2 : 1
        }}
      >
        <span style={{ fontFamily: 'Montserrat Bold, Montserrat', fontWeight: 700 }}>¿Cómo lo </span>
        <span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>solucionamos</span>
        <span style={{ fontFamily: 'Montserrat Bold, Montserrat', fontWeight: 700 }}>?</span>
      </h2>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 40,
        justifyContent: "center",
        width: "100%",
        background: "none",
        margin: 0,
        padding: "0 16px",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        {/* Box for Empresa Features */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          background: "#f8f9fa",
          borderRadius: 12,
          padding: 24,
          width: isMobile ? "100%" : "45%",
          maxWidth: 600,
          boxSizing: "border-box",
          border: "1px solid #e9ecef",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
        }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <IoBusiness
              size={24}
              color="#948AA0"
              style={{ display: "block", verticalAlign: "middle" }}
            />
            <span
              style={{
                color: "#948AA0",
                fontWeight: 600,
                fontSize: 16,
                fontFamily: "Montserrat",
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 1,
              }}
            >
              Empresas
            </span>
          </div>
          {empresaFeatures.map((feature, index) => renderFeature(feature, index))}
        </div>

        {/* Box for Empleado Features */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          background: "#f8f9fa",
          borderRadius: 12,
          padding: 24,
          width: isMobile ? "100%" : "45%",
          maxWidth: 600,
          boxSizing: "border-box",
          border: "1px solid #e9ecef",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
        }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <IoBriefcase
              size={24}
              color="#948AA0"
              style={{ display: "block", verticalAlign: "middle" }}
            />
            <span
              style={{
                color: "#948AA0",
                fontWeight: 600,
                fontSize: 16,
                fontFamily: "Montserrat",
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 1,
              }}
            >
              Profesionales
            </span>
          </div>
          {empleadoFeatures.map((feature, index) => renderFeature(feature, index))}
        </div>
      </div>
    </div>
  );
}