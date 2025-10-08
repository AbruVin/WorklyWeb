import React, { useState, useEffect, useRef } from "react";
import {
    IoChevronForward, IoChevronBack,
    IoBusiness, IoBriefcase,
    IoPersonOutline, IoFilterOutline, IoGlobeOutline,
    IoCloudUploadOutline, IoPencilOutline, IoHourglassOutline
} from "react-icons/io5";
import RecFunc1 from "../assets/functionsImgs/registrarseRecImg.svg";
import RecFunc2 from "../assets/functionsImgs/filtrosImg.svg";
import RecFunc3 from "../assets/functionsImgs/navegarImg.svg";
import EmpFunc1 from "../assets/functionsImgs/cargarDatosImg.svg";
import EmpFunc2 from "../assets/functionsImgs/editarPerfilImg.svg";
import EmpFunc3 from "../assets/functionsImgs/propuestasImg.svg";
import BlueHex from "../assets/functionsImgs/hexBlue.svg";
import IndigoHex from "../assets/functionsImgs/hexIndigo.svg";
import VioletHex from "../assets/functionsImgs/hexViolet.svg";

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

const boxContentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%"
};

const HexIcon = ({ icon, hexImg, alt, isMobile }) => (
    <span style={{
        width: isMobile ? 40 : 56,
        height: isMobile ? 40 : 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    }}>
        <img src={hexImg} alt={alt} style={{
            position: "absolute",
            width: isMobile ? 40 : 56,
            height: isMobile ? 40 : 56,
            left: 0,
            top: 0,
            zIndex: 1
        }} />
        <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {React.cloneElement(icon, { size: isMobile ? 20 : 32 })}
        </span>
    </span>
);

//caja reclutador
const SlideRec = ({ isMobile, activeStep, setActiveStep }) => {
    const stepImages = {
        1: RecFunc1,
        2: RecFunc2,
        3: RecFunc3
    };

    // Auto-play: cambiar pasos automáticamente cada 4 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep(prevStep => {
                if (prevStep === 3) return 1; // Volver al inicio
                return prevStep + 1;
            });
        }, 4000); // Cambiar cada 4 segundos

        return () => clearInterval(timer); // Limpiar el intervalo
    }, [setActiveStep]);

    // Función para determinar la clase de animación
    const getAnimationClass = () => {
        // Todas las animaciones usan fadeInScale
        return "phone-image";
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
                transition: "opacity 0.3s ease",
                marginBottom: isMobile ? 12 : 0
            }}
        >
            <HexIcon icon={icon} hexImg={hexImg} alt={`hex-step-${step}`} isMobile={isMobile} />
            <div
                style={{
                    border: `2px solid ${borderColor}`,
                    borderRadius: 16,
                    padding: isMobile ? "8px 8px 8px 24px" : "10px 10px 10px 35px",
                    background: activeStep === step ? "#f3f3ff" : "transparent",
                    textAlign: "left",
                    marginLeft: isMobile ? -20 : -28,
                    minWidth: isMobile ? 180 : 260,
                    transition: "all 0.3s ease"
                }}
            >
                <span
                    style={{
                        fontWeight: isBold ? 600 : 500,
                        fontSize: isMobile ? (isBold ? 16 : 14) : (isBold ? 20 : 18),
                        color: "#2C2C2C",
                        fontFamily: "Montserrat",
                        lineHeight: isMobile ? 1.2 : 1
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <div style={{ ...boxContentStyle, width: "100%", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <IoBusiness size={20} color="#948AA0" />
                    <span style={{ color: "#948AA0", fontWeight: 600, fontSize: 14, fontFamily: "Montserrat" }}>
                        Empresas
                    </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
                    <Step
                        step={1}
                        label="Regístrate"
                        borderColor="#000B81"
                        icon={<IoPersonOutline color="#000B81" />}
                        hexImg={BlueHex}
                        isBold
                    />
                    <Step
                        step={2}
                        label="Aplica los filtros"
                        borderColor="#29158C"
                        icon={<IoFilterOutline color="#29158C" />}
                        hexImg={IndigoHex}
                    />
                    <Step
                        step={3}
                        label="Navega entre los talentos"
                        borderColor="#4B1C84"
                        icon={<IoGlobeOutline color="#4B1C84" />}
                        hexImg={VioletHex}
                    />
                </div>
                {/* Contenedor fijo para evitar desfase y filtro para saturación */}
                <div style={{ marginTop: 20, width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 300, height: 570, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            key={activeStep}
                            src={stepImages[activeStep]}
                            alt="Empresas"
                            className={getAnimationClass()}
                            style={{
                                width: "100%",
                                maxWidth: 300,
                                height: 570,
                                objectFit: "contain",
                                imageRendering: "auto",
                                filter: "saturate(0.7)"
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

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
                    flex: "0 0 auto",
                    maxWidth: "65%",
                    justifyContent: "center" // Centrado vertical
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: isMobile ? 12 : 24,
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
                {/* Contenedor fijo para evitar desfase y filtro para saturación */}
                <div style={{ width: 300, height: 570, display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <img
                        key={activeStep}
                        src={stepImages[activeStep]}
                        alt="Empresas"
                        className={getAnimationClass()}
                        style={{
                            width: "100%",
                            maxWidth: 300,
                            height: 570,
                            objectFit: "contain",
                            transition: "all 0.3s ease",
                            imageRendering: "auto",
                            filter: "saturate(0.7)"
                        }}
                    />
                </div>
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
                    icon={<IoPersonOutline color="#000B81" />}
                    hexImg={BlueHex}
                    isBold
                />
                <Step
                    step={2}
                    label="Aplica los filtros"
                    borderColor="#29158C"
                    icon={<IoFilterOutline color="#29158C" />}
                    hexImg={IndigoHex}
                />
                <Step
                    step={3}
                    label="Navega entre los talentos"
                    borderColor="#4B1C84"
                    icon={<IoGlobeOutline color="#4B1C84" />}
                    hexImg={VioletHex}
                />
            </div>
        </div>
    );
};

//caja empleado
const SlideEmp = ({ isMobile, activeStep, setActiveStep }) => {
    const stepImages = {
        1: EmpFunc1,
        2: EmpFunc2,
        3: EmpFunc3
    };

    // Auto-play: cambiar pasos automáticamente cada 4 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep(prevStep => {
                if (prevStep === 3) return 1; // Volver al inicio
                return prevStep + 1;
            });
        }, 4000); // Cambiar cada 4 segundos

        return () => clearInterval(timer); // Limpiar el intervalo
    }, [setActiveStep]);

    // Función para determinar la clase de animación
    const getAnimationClass = () => {
        // Todas las animaciones usan fadeInScale
        return "phone-image";
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
                marginBottom: isMobile ? 12 : 0
            }}
        >
            <HexIcon icon={icon} hexImg={hexImg} alt={`hex-step-${step}`} isMobile={isMobile} />
            <div
                style={{
                    border: `2px solid ${borderColor}`,
                    borderRadius: 16,
                    padding: isMobile ? "8px 8px 8px 24px" : "10px 10px 10px 35px",
                    background: activeStep === step ? "#f3f3ff" : "transparent",
                    textAlign: "left",
                    marginLeft: isMobile ? -20 : -28,
                    minWidth: isMobile ? 180 : 260,
                    transition: "all 0.3s ease"
                }}
            >
                <span
                    style={{
                        fontWeight: step === 1 ? 600 : 500,
                        fontSize: isMobile ? (step === 1 ? 16 : 14) : (step === 1 ? 20 : 18),
                        color: "#2C2C2C",
                        fontFamily: "Montserrat",
                        lineHeight: isMobile ? 1.2 : 1
                    }}
                >
                    {label}
                </span>
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <div style={{ ...boxContentStyle, width: "100%", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ color: "#948AA0", fontWeight: 600, fontSize: 14, fontFamily: "Montserrat" }}>
                        Empleados
                    </span>
                    <IoBriefcase size={20} color="#948AA0" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
                    <Step
                        step={1}
                        label="Carga tus datos"
                        borderColor="#000B81"
                        icon={<IoCloudUploadOutline color="#000B81" />}
                        hexImg={BlueHex}
                    />
                    <Step
                        step={2}
                        label="Personaliza tu perfil"
                        borderColor="#29158C"
                        icon={<IoPencilOutline color="#29158C" />}
                        hexImg={IndigoHex}
                    />
                    <Step
                        step={3}
                        label="Espera las ofertas laborales"
                        borderColor="#4B1C84"
                        icon={<IoHourglassOutline color="#4B1C84" />}
                        hexImg={VioletHex}
                    />
                </div>
                {/* Contenedor fijo para evitar desfase y filtro para saturación */}
                <div style={{ marginTop: 20, width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 300, height: 570, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            key={activeStep}
                            src={stepImages[activeStep]}
                            alt="Empleados"
                            className={getAnimationClass()}
                            style={{
                                width: "100%",
                                maxWidth: 300,
                                height: 570,
                                objectFit: "contain",
                                imageRendering: "auto",
                                filter: "saturate(0.7)"
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

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
                    flex: "0 0 auto",
                    maxWidth: "65%",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: isMobile ? 12 : 24,
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
                        Empleados
                    </span>
                </div>
                {/* Contenedor fijo para evitar desfase y filtro para saturación */}
                <div style={{ width: 300, height: 570, display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <img
                        key={activeStep}
                        src={stepImages[activeStep]}
                        alt="Empleados"
                        className={getAnimationClass()}
                        style={{
                            width: "100%",
                            maxWidth: 300,
                            height: 570,
                            objectFit: "contain",
                            transition: "all 0.3s ease",
                            imageRendering: "auto",
                            filter: "saturate(0.7)"
                        }}
                    />
                </div>
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
                    icon={<IoCloudUploadOutline color="#000B81" />}
                    hexImg={BlueHex}
                />
                <Step
                    step={2}
                    label="Personaliza tu perfil"
                    borderColor="#29158C"
                    icon={<IoPencilOutline color="#29158C" />}
                    hexImg={IndigoHex}
                />
                <Step
                    step={3}
                    label="Espera las ofertas laborales"
                    borderColor="#4B1C84"
                    icon={<IoHourglassOutline color="#4B1C84" />}
                    hexImg={VioletHex}
                />
            </div>
        </div>
    );
};

export default function Functions() {
    const isMobile = useIsMobile();
    const [selected, setSelected] = useState("empresa");
    const [activeStepRec, setActiveStepRec] = useState(1);
    const [activeStepEmp, setActiveStepEmp] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    // Reset active step when changing slides
    useEffect(() => {
        if (selected === "empresa") {
            setActiveStepRec(1);
        } else {
            setActiveStepEmp(1);
        }
    }, [selected]);

    const boxBaseStyle = {
        background: "#f4f7fb",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
        padding: isMobile ? "40px 24px 32px 24px" : "48px 40px 40px 40px",
        minWidth: isMobile ? "100%" : 600,
        minHeight: isMobile ? 520 : 520,
        height: isMobile ? "auto" : 600,
        width: isMobile ? "100%" : 900,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxSizing: "border-box",
        zIndex: 2,
        overflow: "hidden",
    };

    return (
        <div
            id="funciones"
            ref={sectionRef}
            style={{
                width: "100%",
                minHeight: isMobile ? "auto" : "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                background: "#f4f7fb",
                padding: isMobile ? "40px 20px" : "48px 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <h2
                className={isVisible ? 'feature-title' : ''}
                style={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: isMobile ? 28 : 36,
                    marginBottom: isMobile ? 32 : 48,
                    fontFamily: 'Montserrat',
                    color: "#232323",
                    lineHeight: isMobile ? 1.2 : 1
                }}
            >
                <span style={{ fontFamily: 'Montserrat Bold, Montserrat', fontWeight: 700 }}>¿Cómo </span>
                <span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>funciona</span>
                <span style={{ fontFamily: 'Montserrat Bold, Montserrat', fontWeight: 700 }}>?</span>
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
                        onClick={() => setSelected("empresa")}
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
                        onClick={() => setSelected("empleado")}
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
                        <IoBriefcase size={isMobile ? 20 : 26} style={{ marginRight: isMobile ? 2 : 4 }} />
                        Profesionales
                    </button>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {selected === "empresa" ? (
                    <div style={{ ...boxBaseStyle, minHeight: 520, height: 600 }}>
                        <SlideRec isMobile={isMobile} activeStep={activeStepRec} setActiveStep={setActiveStepRec} />
                    </div>
                ) : (
                    <div style={{ ...boxBaseStyle, minHeight: 520, height: 600 }}>
                        <SlideEmp isMobile={isMobile} activeStep={activeStepEmp} setActiveStep={setActiveStepEmp} />
                    </div>
                )}
            </div>
        </div>
    );
}