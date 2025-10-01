import React, { useState, useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5";
import RecProblems from "../assets/problematicImgs/recuitersProblem.svg";
import EmpProblems from "../assets/problematicImgs/searchJobProblem.svg";

const Slide2 = () => (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: 26, fontWeight: 700, marginRight: 10, color: "#4B2676" }}><IoWarningOutline /></span>
            <span style={{ fontWeight: 700, fontSize: 26, fontFamily: "'Montserrat', sans-serif", color: "#2C2C2C" }}>
                Tiempo de reclutamiento
            </span>
        </div>
        <hr style={{ width: "100%", border: "none", borderTop: "2px solid #dbe2ea", margin: "10px 0 18px 0" }} />

        <img
            src={RecProblems}
            alt="Problemas de reclutadores"
            style={{
                width: "100%",
                maxWidth: 320,
                marginBottom: 2
            }}
        />

        <div style={{
            fontWeight: 700,
            fontSize: 28,
            marginTop: 10,
            color: "#2C2C2C",
            fontFamily: "'Montserrat', sans-serif"
        }}>
            30 minutos - 2 horas
        </div>
    </div>
);

const Slide1 = () => (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: 26, fontWeight: 700, marginRight: 10, color: "#4B2676" }}><IoWarningOutline /></span>
            <span style={{ fontWeight: 700, fontSize: 26, fontFamily: "'Montserrat', sans-serif", color: "#2C2C2C" }}>
                Abandono de búsqueda laboral
            </span>
        </div>
        <hr style={{ width: "100%", border: "none", borderTop: "2px solid #dbe2ea", margin: "10px 0 18px 0" }} />
        <img
            src={EmpProblems}
            alt="Problemas de empleados"
            style={{
                width: "100%",
                maxWidth: 320,
                marginBottom: 2
            }}
        />
    </div>
);

const slides = [<Slide1 key={0} />, <Slide2 key={1} />];


export default function Problematic() {
    return (
        <div style={{ width: "100vw", minHeight: 400, display: "flex", justifyContent: "center", alignItems: "center", background: "#f4f7fb", padding: "48px 0" }}>
            <div style={{ display: "flex", gap: 40, justifyContent: "center", alignItems: "flex-start" }}>
                <div
                    style={{
                        background: "#f4f7fb",
                        border: "3px solid #e6eaf2",
                        borderRadius: 16,
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                        padding: "24px 32px 32px 32px",
                        maxWidth: 500,
                        minWidth: 340,
                        minHeight: 340,
                        position: "relative",
                        transition: "box-shadow 0.3s",
                        margin: 0
                    }}
                >
                    {Slide1()}
                </div>
                <div
                    style={{
                        background: "#f4f7fb",
                        border: "3px solid #e6eaf2",
                        borderRadius: 16,
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                        padding: "24px 32px 32px 32px",
                        maxWidth: 500,
                        minWidth: 340,
                        minHeight: 340,
                        position: "relative",
                        transition: "box-shadow 0.3s",
                        margin: 0
                    }}
                >
                    {Slide2()}
                </div>
            </div>
        </div>
    );
}