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
  const [selected, setSelected] = useState("empresa");
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
  
  const features = selected === "empresa" ? empresaFeatures : empleadoFeatures;

  // Función para manejar el cambio con animación
  const handleSelectionChange = (newSelection) => {
    if (newSelection !== selected) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelected(newSelection);
        setIsAnimating(false);
      }, 150); // Pequeño delay para la transición
    }
  };

  return (
  <div id="solucion" ref={sectionRef} style={{ 
    background: "#f4f7fb", 
    minHeight: isMobile ? "auto" : "auto", 
    width: "100%", 
    padding: isMobile ? "20px 16px" : "30px 0", 
    boxSizing: "border-box" 
  }}>
      <h2 
        className={isVisible ? 'feature-title' : ''}
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: isMobile ? 28 : 36,
          marginBottom: isMobile ? 20 : 28,
          fontFamily: 'Montserrat',
          color: "#232323",
          padding: isMobile ? "0 16px" : 0,
          lineHeight: isMobile ? 1.2 : 1
        }}
      >
        <span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>¿Cómo lo </span>
        <span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>solucionamos</span>
        <span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>?</span>
      </h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: isMobile ? 20 : 28 }}>
        <div style={{
          background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(59, 37, 128, 0.15)",
          display: "flex",
          padding: 8,
          gap: 4,
          minWidth: isMobile ? 320 : 400,
          width: isMobile ? "95%" : "auto",
          maxWidth: isMobile ? 450 : "none",
          border: "2px solid rgba(59, 37, 128, 0.1)"
        }}>
          <button
            onClick={() => handleSelectionChange("empresa")}
            className="hover-glow"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 6 : 10,
              justifyContent: "center",
              fontWeight: 700,
              fontFamily: 'Montserrat',
              fontSize: isMobile ? 15 : 19,
              background: selected === "empresa" 
                ? "linear-gradient(135deg, #3B2580 0%, #4B1C84 100%)" 
                : "transparent",
              color: selected === "empresa" ? "#fff" : "#3B2580",
              border: selected === "empresa" ? "none" : "2px solid transparent",
              borderRadius: 14,
              padding: isMobile ? "14px 16px" : "16px 28px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: selected === "empresa" 
                ? "0 4px 20px rgba(59, 37, 128, 0.4)" 
                : "none",
              transform: selected === "empresa" ? "translateY(-1px)" : "none"
            }}
          >
            <IoBusiness size={isMobile ? 20 : 26} style={{ marginRight: isMobile ? 2 : 4 }} /> 
            Empresas
          </button>
          <button
            onClick={() => handleSelectionChange("empleado")}
            className="hover-glow"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 6 : 10,
              justifyContent: "center",
              fontWeight: 700,
              fontFamily: 'Montserrat',
              fontSize: isMobile ? 15 : 19,
              background: selected === "empleado" 
                ? "linear-gradient(135deg, #3B2580 0%, #4B1C84 100%)" 
                : "transparent",
              color: selected === "empleado" ? "#fff" : "#3B2580",
              border: selected === "empleado" ? "none" : "2px solid transparent",
              borderRadius: 14,
              padding: isMobile ? "14px 16px" : "16px 28px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: selected === "empleado" 
                ? "0 4px 20px rgba(59, 37, 128, 0.4)" 
                : "none",
              transform: selected === "empleado" ? "translateY(-1px)" : "none"
            }}
          >
            Profesionales
          </button>
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        background: "none",
        margin: 0,
        padding: 0,
      }}>
        <div style={{
          display: isMobile ? "flex" : "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 20 : 40,
          background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
          borderRadius: 20,
          boxShadow: "0 12px 48px rgba(59, 37, 128, 0.15)",
          padding: isMobile ? 24 : 48,
          width: "100%",
          maxWidth: isMobile ? "100%" : 1400,
          minHeight: isMobile ? "auto" : 400,
          justifyContent: "center",
          boxSizing: "border-box",
          border: "1px solid rgba(59, 37, 128, 0.1)"
        }}>
          {features.map((f, i) => {
            // Extraer color del icono original
            const iconColor = f.icon.props.color || "#0B1175";
            return (
              <div 
                key={`${selected}-${i}`} 
                style={{
                  background: "linear-gradient(135deg, #f4f7fb 0%, #e8ebf0 100%)",
                  borderRadius: 16,
                  padding: isMobile ? "28px 20px 24px 20px" : "40px 32px 32px 32px",
                  minWidth: isMobile ? "100%" : 220,
                  width: "100%",
                  maxWidth: isMobile ? "100%" : 320,
                  minHeight: isMobile ? 140 : 280,
                  display: "flex",
                  flexDirection: isMobile ? "row" : "column",
                  alignItems: isMobile ? "center" : "center",
                  justifyContent: isMobile ? "flex-start" : "center",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  gap: isMobile ? 20 : 0,
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  position: "relative",
                  overflow: "hidden",
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? "translateY(20px) scale(0.95)" : "translateY(0) scale(1)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  animationDelay: `${i * 0.1}s`,
                  animation: isAnimating ? "none" : `slideInUp 0.6s ease-out ${i * 0.1}s both`
                }}
                className={!isAnimating ? "animate-on-scroll" : ""}
              >
                <div style={{
                  background: `linear-gradient(135deg, ${iconColor} 0%, ${iconColor}dd 100%)`,
                  borderRadius: "50%",
                  width: isMobile ? 64 : 88,
                  height: isMobile ? 64 : 88,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: isMobile ? 0 : 20,
                  flexShrink: 0,
                  boxShadow: `0 4px 20px ${iconColor}40`
                }}>
                  {React.cloneElement(f.icon, { 
                    color: "#fff", 
                    size: isMobile ? 28 : 36 
                  })}
                </div>
                <div style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  fontSize: isMobile ? 17 : 20,
                  color: "#232323",
                  textAlign: isMobile ? "left" : "center",
                  flex: isMobile ? 1 : "none",
                  lineHeight: 1.3
                }}>{f.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
