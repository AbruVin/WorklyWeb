import React, { useState, useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import RecProblems from "../assets/problematicImgs/stadisticsTimeImg.svg";
import EmpProblems from "../assets/problematicImgs/stadisticsSearchImg.svg";


const boxContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%"
};
//caja relcutador
const SlideRec = () => (
    <div style={boxContentStyle}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-start" }}>
            <span style={{ fontSize: 26, fontWeight: 700, marginRight: 10, color: "#4B2676" }}><IoWarningOutline /></span>
            <span style={{ fontWeight: 700, fontSize: 26, fontFamily: "'Montserrat', sans-serif", color: "#2C2C2C" }}>
                Tiempo de reclutamiento
            </span>
        </div>
        <div style={{ width: "100%" }}>
            <hr style={{ width: "100%", border: "none", borderTop: "2px solid #dbe2ea", margin: "10px 0 18px 0" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", minHeight: 210 }}>
            <img
                src={RecProblems}
                alt="Problemas de reclutadores"
                style={{ width: "100%", maxWidth: 700, display: "block", position: "absolute" }}
            />
            <div style={{
                fontWeight: 700,
                fontSize: 24,
                marginTop: 250,
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif"
            }}>
                30 minutos - 2 horas
            </div>
        </div>
    </div>
);
//caja empleado
const SlideEmp = () => (
    <div style={boxContentStyle}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-start" }}>
            <span style={{ fontSize: 26, fontWeight: 700, marginRight: 10, color: "#4B2676" }}><IoWarningOutline /></span>
            <span style={{ fontWeight: 700, fontSize: 26, fontFamily: "'Montserrat', sans-serif", color: "#2C2C2C" }}>
                Abandono de búsqueda laboral
            </span>
        </div>
        <div style={{ width: "100%" }}>
            <hr style={{ width: "100%", border: "none", borderTop: "2px solid #dbe2ea", margin: "10px 0 18px 0" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <img
                src={EmpProblems}
                alt="Problemas de empleados"
                style={{ width: "100%", maxWidth: 700, display: "block" }}
            />
        </div>
    </div>
);




export default function Problematic() {
    const [current, setCurrent] = useState(0);
     //margen cajas
    const inactiveOffset = 80;
    
    //slide fmanual
    const handleBoxClick = (idx) => {
        if (idx === current) return;
        setCurrent(idx);
    };

    //auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === 0 ? 1 : 0));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    //style base cajas
    const boxBaseStyle = {
        background: "#f4f7fb",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
        padding: "24px 32px 32px 32px",
        minWidth: 480,
        minHeight: 340,
        height: 380,
        width: 700,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto",
        transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
        boxSizing: "border-box",
        zIndex: 2,
        cursor: "pointer"
    };

    return (
        <div
            style={{
                width: "100vw",
                minHeight: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f7fb",
                padding: "48px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: 900,
                    maxWidth: "98vw",
                    height: 440,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 32,
                }}
            >
                {/* Chevron izquierda */}
                {current === 1 && (
                    <span
                        style={{
                            position: "absolute",
                            left: 90,
                            top: "50%",
                            transform: "translate(-60px, -50%)",
                            fontSize: 44,
                            color: "#4B2676",
                            cursor: "pointer",
                            zIndex: 20,
                            padding: 6,
                        }}
                        onClick={() => handleBoxClick(0)}
                    >
                        <IoChevronBack />
                    </span>
                )}

                {/* SlideEmp */}
                <div
                    style={{
                        ...boxBaseStyle,
                        opacity: current === 0 ? 1 : 0.6,
                        transform: `translateX(calc(${(0 - current) * 100}% + ${
                            current === 0 ? 0 : -inactiveOffset
                        }px))`,
                        zIndex: current === 0 ? 2 : 1,
                        cursor: current === 0 ? "default" : "pointer",
                    }}
                >
                    <SlideEmp />
                </div>

                {/* SlideRec */}
                <div
                    style={{
                        ...boxBaseStyle,
                        opacity: current === 1 ? 1 : 0.6,
                        transform: `translateX(calc(${(1 - current) * 100}% + ${
                            current === 1 ? 0 : inactiveOffset
                        }px))`,
                        zIndex: current === 1 ? 2 : 1,
                        cursor: current === 1 ? "default" : "pointer",
                    }}
                >
                    <SlideRec />
                </div>

                {/* Chevron derecha */}
                {current === 0 && (
                    <span
                        style={{
                            position: "absolute",
                            right: 90,
                            top: "50%",
                            transform: "translate(60px, -50%)",
                            fontSize: 44,
                            color: "#4B2676",
                            cursor: "pointer",
                            zIndex: 20,
                            padding: 6,
                        }}
                        onClick={() => handleBoxClick(1)}
                    >
                        <IoChevronForward />
                    </span>
                )}
            </div>
        </div>
    );
}