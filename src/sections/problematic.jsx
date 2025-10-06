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
        boxSizing: "border-box",
        zIndex: 2,
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
                    width: 1500,
                    maxWidth: "98vw",
                    height: 440,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 32,
                }}
            >
                <div style={boxBaseStyle}>
                    <SlideEmp />
                </div>
                <div style={boxBaseStyle}>
                    <SlideRec />
                </div>
            </div>
        </div>
    );
}