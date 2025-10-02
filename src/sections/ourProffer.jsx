import React, { useState } from "react";
import { 
  IoBusiness, IoBriefcase, IoTimeOutline, IoTrophyOutline, IoSparklesOutline, 
  IoDiamondOutline, IoRocketOutline, IoBodyOutline 
} from "react-icons/io5";
import "../App.css";

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

  const features = selected === "empresa" ? empresaFeatures : empleadoFeatures;

  return (
  <div style={{ background: "#f4f7fb", minHeight: "100vh", width: "100vw", maxWidth: "100vw", padding: "32px 0", boxSizing: "border-box" }}>
      <h2 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: 36,
        marginBottom: 32,
        fontFamily: 'Montserrat',
        color: "#232323"
      }}>
        <span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>¿Cómo lo </span>
        <span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>solucionamos</span>?
      </h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <div style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
          display: "flex",
          padding: 6,
          gap: 0,
          minWidth: 360,
        }}>
          <button
            onClick={() => setSelected("empresa")}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "center",
              fontWeight: 600,
              fontFamily: 'Montserrat',
              fontSize: 18,
              background: selected === "empresa" ? "#3B2580" : "#fff",
              color: selected === "empresa" ? "#fff" : "#948AA0",
              border: "none",
              borderRadius: 10,
              padding: "12px 24px",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            <IoBusiness size={24} style={{ marginRight: 6 }} /> Empresas
          </button>
          <button
            onClick={() => setSelected("empleado")}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "center",
              fontWeight: 600,
              fontFamily: 'Montserrat',
              fontSize: 18,
              background: selected === "empleado" ? "#3B2580" : "#fff",
              color: selected === "empleado" ? "#fff" : "#948AA0",
              border: "none",
              borderRadius: 10,
              padding: "12px 24px",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            <IoBriefcase size={24} style={{ marginRight: 6 }} /> Empleados
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
          display: "flex",
          gap: 32,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
          padding: 32,
          width: "100%",
          maxWidth: 1100,
          justifyContent: "center",
          boxSizing: "border-box"
        }}>
         {features.map((f, i) => {
            // Extraer color del icono original
            const iconColor = f.icon.props.color || "#0B1175";
            return (
              <div key={i} style={{
                background: "#f4f7fb",
                borderRadius: 12,
                padding: "32px 24px 24px 24px",
                minWidth: 180,
                width: "100%",
                maxWidth: 260,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 1px 6px rgba(0, 0, 0, 0.25)"
              }}>
                <div style={{
                  background: iconColor,
                  borderRadius: "50%",
                  width: 72,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16
                }}>
                  {React.cloneElement(f.icon, { color: "#fff" })}
                </div>
                <div style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  fontSize: 18,
                  color: "#232323",
                  textAlign: "center"
                }}>{f.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
