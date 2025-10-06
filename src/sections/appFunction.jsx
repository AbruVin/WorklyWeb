import React, { useState, useEffect } from "react";
import {
    IoChevronForward, IoChevronBack,
    IoBusiness, IoBriefcase,
    IoPersonOutline, IoFilterOutline, IoGlobeOutline,
    IoCloudUploadOutline, IoPencilOutline, IoHourglassOutline
} from "react-icons/io5";
import RecFunc1 from "../assets/functionsImgs/imgRegisterRec.svg";
import RecFunc2 from "../assets/functionsImgs/imgFiltersRec.svg";
import RecFunc3 from "../assets/functionsImgs/imgNavRec.svg";
import EmpFunc1 from "../assets/functionsImgs/imgRegisterEmp.svg";
import EmpFunc2 from "../assets/functionsImgs/imgEditEmp.svg";
import EmpFunc3 from "../assets/functionsImgs/imgOffersEmp.svg";
import BlueHex from "../assets/functionsImgs/hexBlue.svg";
import IndigoHex from "../assets/functionsImgs/hexIndigo.svg";
import VioletHex from "../assets/functionsImgs/hexViolet.svg";

const boxContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%"
};

const HexIcon = ({ icon, hexImg, alt }) => (
    <span style={{
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    }}>
        <img src={hexImg} alt={alt} style={{ position: "absolute", width: 56, height: 56, left: 0, top: 0, zIndex: 1 }} />
        <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
        </span>
    </span>
);

//caja reclutador
const SlideRec = () => {
    const [activeStep, setActiveStep] = useState(1);

    const stepImages = {
        1: RecFunc1,
        2: RecFunc2,
        3: RecFunc3
    };

    const Step = ({ step, label, borderColor, icon, hexImg, isBold }) => (
        <div
            onClick={() => setActiveStep(step)}
            style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
                opacity: activeStep === step ? 1 : 0.4,
                transition: "opacity 0.3s ease"
            }}
        >
            <HexIcon icon={icon} hexImg={hexImg} alt={`hex-step-${step}`} />
            <div
                style={{
                    border: `2px solid ${borderColor}`,
                    borderRadius: 16,
                    padding: "10px 10px 10px 35px",
                    background: activeStep === step ? "#f3f3ff" : "transparent",
                    textAlign: "left",
                    marginLeft: -28,
                    minWidth: 260,
                    transition: "all 0.3s ease"
                }}
            >
                <span
                    style={{
                        fontWeight: isBold ? 600 : 500,
                        fontSize: isBold ? 20 : 18,
                        color: "#2C2C2C",
                        fontFamily: "Montserrat"
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    );

    return (
        <div
            style={{
                ...boxContentStyle,
                flexDirection: "row",
                alignItems: "center",
                gap: 32,
                width: "100%",
                height: "100%"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    height: "100%",
                    minWidth: 180
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 16
                    }}
                >
                    <IoBusiness size={24} color="#948AA0" />
                    <span
                        style={{
                            color: "#948AA0",
                            fontWeight: 600,
                            fontSize: 16,
                            fontFamily: "Montserrat"
                        }}
                    >
                        Empresas
                    </span>
                </div>
                <img
                    src={stepImages[activeStep]}
                    alt="Empresas"
                    style={{
                        width: 340,
                        transition: "all 0.3s ease"
                    }}
                />
            </div>
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    justifyContent: "center"
                }}
            >
                <Step
                    step={1}
                    label="Regístrate"
                    borderColor="#000B81"
                    icon={<IoPersonOutline size={32} color="#000B81" />}
                    hexImg={BlueHex}
                    isBold
                />
                <Step
                    step={2}
                    label="Aplica los filtros"
                    borderColor="#29158C"
                    icon={<IoFilterOutline size={32} color="#29158C" />}
                    hexImg={IndigoHex}
                />
                <Step
                    step={3}
                    label="Navega entre los talentos"
                    borderColor="#4B1C84"
                    icon={<IoGlobeOutline size={32} color="#4B1C84" />}
                    hexImg={VioletHex}
                />
            </div>
        </div>
    );
};

//caja empleado
const SlideEmp = () => {
    const [activeStep, setActiveStep] = useState(1);

    const stepImages = {
        1: EmpFunc1,
        2: EmpFunc2,
        3: EmpFunc3
    };

    const Step = ({ step, label, borderColor, icon, hexImg }) => (
        <div
            onClick={() => setActiveStep(step)}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                cursor: "pointer",
                opacity: activeStep === step ? 1 : 0.4,
            }}
        >
            <HexIcon icon={icon} hexImg={hexImg} alt={`hex-step-${step}`} />
            <div
                style={{
                    border: `2px solid ${borderColor}`,
                    borderRadius: 16,
                    padding: "10px 10px 10px 35px",
                    background: activeStep === step ? "#f3f3ff" : "transparent",
                    textAlign: "left",
                    marginLeft: -28,
                    minWidth: 260,
                    transition: "all 0.3s ease"
                }}
            >
                <span
                    style={{
                        fontWeight: step === 1 ? 600 : 500,
                        fontSize: step === 1 ? 20 : 18,
                        color: "#2C2C2C",
                        fontFamily: "Montserrat"
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    );

    return (
        <div
            style={{
                ...boxContentStyle,
                flexDirection: "row",
                alignItems: "center",
                gap: 32,
                width: "100%",
                height: "100%"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    height: "100%",
                    minWidth: 180
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 16
                    }}
                >
                    <span
                        style={{
                            color: "#948AA0",
                            fontWeight: 600,
                            fontSize: 16,
                            fontFamily: "Montserrat"
                        }}
                    >
                        Empleados
                    </span>
                    <IoBriefcase size={24} color="#948AA0" />
                </div>
                <img
                    src={stepImages[activeStep]}
                    alt="Empleados"
                    style={{
                        width: 340,
                        transition: "all 0.3s ease"
                    }}
                />
            </div>
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                    justifyContent: "center"
                }}
            >
                <Step
                    step={1}
                    label="Carga tus datos"
                    borderColor="#000B81"
                    icon={<IoCloudUploadOutline size={32} color="#000B81" />}
                    hexImg={BlueHex}
                />
                <Step
                    step={2}
                    label="Personaliza tu perfil"
                    borderColor="#29158C"
                    icon={<IoPencilOutline size={32} color="#29158C" />}
                    hexImg={IndigoHex}
                />
                <Step
                    step={3}
                    label="Espera las ofertas laborales"
                    borderColor="#4B1C84"
                    icon={<IoHourglassOutline size={32} color="#4B1C84" />}
                    hexImg={VioletHex}
                />
            </div>
        </div>
    );
};

export default function Functions() {
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
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                background: "#f4f7fb",
                padding: "48px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <h2 style={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: 36,
                marginBottom: 48,
                fontFamily: 'Montserrat',
                color: "#232323"
            }}>
                <span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>¿Cómo </span>
                <span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>funciona</span>
                <span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>?</span>
            </h2>
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
                    <SlideRec />
                </div>
                <div style={boxBaseStyle}>
                    <SlideEmp />
                </div>
            </div>
        </div>
    );
}