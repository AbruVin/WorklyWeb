import React, { useState, useEffect, useRef } from "react";
import {
    IoChevronForward, IoChevronBack,
    IoBusiness, IoBriefcase,
    IoPersonOutline, IoFilterOutline, IoGlobeOutline,
    IoCloudUploadOutline, IoPencilOutline, IoHourglassOutline
} from "react-icons/io5";
import RecFunc1 from "../assets/functionsImgs/recImg1.svg";
import RecFunc2 from "../assets/functionsImgs/recImg2.svg";
import RecFunc3 from "../assets/functionsImgs/recImg3.svg";
import EmpFunc1 from "../assets/functionsImgs/empImg1.svg";
import EmpFunc2 from "../assets/functionsImgs/empImg2.svg";
import EmpFunc3 from "../assets/functionsImgs/empImg3.svg";

// Agregar estilos globales para la animación de fade
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInImage {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .phone-image {
        animation: fadeInImage 0.5s ease-out;
    }

    button:focus {
        outline: none;
    }
`;
document.head.appendChild(style);

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
        width: isMobile ? 32 : 56,
        height: isMobile ? 32 : 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0
    }}>
        <img src={hexImg} alt={alt} style={{
            position: "absolute",
            width: isMobile ? 32 : 56,
            height: isMobile ? 32 : 56,
            left: 0,
            top: 0,
            zIndex: 1
        }} />
        <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {React.cloneElement(icon, { size: isMobile ? 16 : 32 })}
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

    const timerRef = React.useRef(null);

    const startAutoPlay = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveStep(prevStep => {
                if (prevStep === 3) return 1;
                return prevStep + 1;
            });
        }, 4000);
    };

    // Auto-play: cambiar pasos automáticamente cada 4 segundos
    useEffect(() => {
        startAutoPlay();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [setActiveStep]);

    const handleStepClick = (step) => {
        setActiveStep(step);
        startAutoPlay();
    };

    // Función para determinar la clase de animación
    const getAnimationClass = () => {
        // Todas las animaciones usan fadeInScale
        return "phone-image";
    };

    const Step = ({ step, label, iconColor, pastelBg }) => {
        const icons = {
            1: <IoPersonOutline color={iconColor} />,
            2: <IoFilterOutline color={iconColor} />,
            3: <IoGlobeOutline color={iconColor} />
        };

        return (
            <div
                onClick={() => handleStepClick(step)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? 12 : 20,
                    cursor: "pointer",
                    borderRadius: 16,
                    border: "1px solid #D7D7D8",
                    background: "#FFFFFF",
                    padding: isMobile ? "14px 16px" : "20px 24px",
                    transition: "all 0.3s ease",
                    opacity: activeStep === step ? 1 : 0.7,
                    marginBottom: isMobile ? 0 : 16,
                    width: "100%",
                    minWidth: isMobile ? "100%" : 320,
                    boxShadow: activeStep === step ? "0 8px 24px rgba(0, 0, 0, 0.12)" : "0 2px 8px rgba(0, 0, 0, 0.05)"
                }}
            >
                <div
                    style={{
                        width: isMobile ? 40 : 56,
                        height: isMobile ? 40 : 56,
                        borderRadius: 12,
                        background: pastelBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    }}
                >
                    {React.cloneElement(icons[step], { size: isMobile ? 20 : 28 })}
                </div>
                <span
                    style={{
                        fontWeight: 600,
                        fontSize: isMobile ? 13 : 17,
                        color: "#232323",
                        fontFamily: "Montserrat",
                        lineHeight: 1.2,
                        display: "block"
                    }}
                >
                    {label}
                </span>
            </div>
        );
    };

    if (isMobile) {
        return (
            <div style={{ 
                ...boxContentStyle, 
                width: "100%", 
                height: "auto",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px 16px",
                gap: 24
            }}>
                {/* Header - Left aligned */}
                <div style={{ 
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                }}>
                    <IoBusiness size={20} color="#948AA0" style={{ display: "block", flexShrink: 0 }} />
                    <span style={{ 
                        color: "#948AA0", 
                        fontWeight: 600, 
                        fontSize: 14, 
                        fontFamily: "Montserrat",
                        lineHeight: 1
                    }}>
                        Empresas
                    </span>
                </div>

                {/* Phone Image */}
                <div style={{ width: "100%", maxWidth: 280 }}>
                    <img
                        key={activeStep}
                        src={stepImages[activeStep]}
                        alt="Empresas"
                        className={getAnimationClass()}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            transition: "all 0.3s ease"
                        }}
                    />
                </div>

                {/* Steps */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                    <Step
                        step={1}
                        label="Regístrate"
                        iconColor="#000B81"
                        pastelBg="#E0DFFF"
                    />
                    <Step
                        step={2}
                        label="Aplica los filtros"
                        iconColor="#29158C"
                        pastelBg="#DFD9FF"
                    />
                    <Step
                        step={3}
                        label="Navega entre los talentos"
                        iconColor="#4B1C84"
                        pastelBg="#F8E9FF"
                    />
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
                <div style={{ width: 500, display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <img
                        key={activeStep}
                        src={stepImages[activeStep]}
                        alt="Empresas"
                        className={getAnimationClass()}
                        style={{
                            width: "100%",
                            maxWidth: 500,
                            objectFit: "contain",
                            transition: "all 0.3s ease",
                            imageRendering: "auto",
                            filter: "saturate(0.75)"
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
                    iconColor="#000B81"
                    pastelBg="#E0DFFF"
                />
                <Step
                    step={2}
                    label="Aplica los filtros"
                    iconColor="#29158C"
                    pastelBg="#DFD9FF"
                />
                <Step
                    step={3}
                    label="Navega entre los talentos"
                    iconColor="#4B1C84"
                    pastelBg="#F8E9FF"
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

    const timerRef = React.useRef(null);

    const startAutoPlay = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveStep(prevStep => {
                if (prevStep === 3) return 1;
                return prevStep + 1;
            });
        }, 4000);
    };

    // Auto-play: cambiar pasos automáticamente cada 4 segundos
    useEffect(() => {
        startAutoPlay();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [setActiveStep]);

    const handleStepClick = (step) => {
        setActiveStep(step);
        startAutoPlay();
    };

    // Función para determinar la clase de animación
    const getAnimationClass = () => {
        // Todas las animaciones usan fadeInScale
        return "phone-image";
    };

    // Step visual igual a empresa
    const Step = ({ step, label, iconColor, pastelBg }) => {
        const icons = {
            1: <IoCloudUploadOutline color={iconColor} />,
            2: <IoPencilOutline color={iconColor} />,
            3: <IoHourglassOutline color={iconColor} />
        };

        return (
            <div
                onClick={() => handleStepClick(step)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: isMobile ? 12 : 20,
                    cursor: "pointer",
                    borderRadius: 16,
                    border: "1px solid #D7D7D8",
                    background: "#FFFFFF",
                    padding: isMobile ? "14px 16px" : "20px 24px",
                    transition: "all 0.3s ease",
                    opacity: activeStep === step ? 1 : 0.7,
                    marginBottom: isMobile ? 0 : 16,
                    width: "100%",
                    minWidth: isMobile ? "100%" : 320,
                    boxShadow: activeStep === step ? "0 8px 24px rgba(0, 0, 0, 0.12)" : "0 2px 8px rgba(0, 0, 0, 0.05)"
                }}
            >
                <div
                    style={{
                        width: isMobile ? 40 : 56,
                        height: isMobile ? 40 : 56,
                        borderRadius: 12,
                        background: pastelBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                    }}
                >
                    {React.cloneElement(icons[step], { size: isMobile ? 20 : 28 })}
                </div>
                <span
                    style={{
                        fontWeight: 600,
                        fontSize: isMobile ? 13 : 17,
                        color: "#232323",
                        fontFamily: "Montserrat",
                        lineHeight: 1.2,
                        display: "block"
                    }}
                >
                    {label}
                </span>
            </div>
        );
    };

    if (isMobile) {
        return (
            <div style={{ 
                ...boxContentStyle, 
                width: "100%", 
                height: "auto",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px 16px",
                gap: 24
            }}>
                {/* Header - Left aligned */}
                <div style={{ 
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                }}>
                    <IoBriefcase size={20} color="#948AA0" style={{ display: "block", flexShrink: 0 }} />
                    <span style={{ 
                        color: "#948AA0", 
                        fontWeight: 600, 
                        fontSize: 14, 
                        fontFamily: "Montserrat",
                        lineHeight: 1
                    }}>
                        Profesionales
                    </span>
                </div>

                {/* Phone Image */}
                <div style={{ width: "100%", maxWidth: 280 }}>
                    <img
                        key={activeStep}
                        src={stepImages[activeStep]}
                        alt="Empleados"
                        className={getAnimationClass()}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            transition: "all 0.3s ease"
                        }}
                    />
                </div>

                {/* Steps */}
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                    <Step
                        step={1}
                        label="Carga tus datos"
                        iconColor="#000B81"
                        pastelBg="#E0DFFF"
                    />
                    <Step
                        step={2}
                        label="Personaliza tu perfil"
                        iconColor="#29158C"
                        pastelBg="#DFD9FF"
                    />
                    <Step
                        step={3}
                        label="Espera las ofertas laborales"
                        iconColor="#4B1C84"
                        pastelBg="#F8E9FF"
                    />
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
                {/* Contenedor fijo para evitar desfase y filtro para saturación */}
                <div style={{ width: 500, display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <img
                        key={activeStep}
                        src={stepImages[activeStep]}
                        alt="Empleados"
                        className={getAnimationClass()}
                        style={{
                            width: "100%",
                            maxWidth: 500,
                            objectFit: "contain",
                            transition: "all 0.3s ease",
                            imageRendering: "auto",
                            filter: "saturate(0.75)"
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
                    iconColor="#000B81"
                    pastelBg="#E0DFFF"
                />
                <Step
                    step={2}
                    label="Personaliza tu perfil"
                    iconColor="#29158C"
                    pastelBg="#DFD9FF"
                />
                <Step
                    step={3}
                    label="Espera las ofertas laborales"
                    iconColor="#4B1C84"
                    pastelBg="#F8E9FF"
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
        background: "#ffffff",
        borderRadius: 20,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        padding: isMobile ? "20px" : "40px",
        minWidth: isMobile ? "100%" : 600,
        minHeight: isMobile ? "auto" : 520,
        height: isMobile ? "auto" : 600,
        width: isMobile ? "100%" : 1000,
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
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: isMobile ? 22 : 28,
                                height: isMobile ? 22 : 28,
                                transform: "scale(1.15)",
                                marginRight: isMobile ? 2 : 4,
                            }}
                        >
                            <IoBriefcase size={isMobile ? 20 : 26} />
                        </span>
                        Profesionales
                    </button>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {selected === "empresa" ? (
                    <div style={{ ...boxBaseStyle }}>
                        <SlideRec isMobile={isMobile} activeStep={activeStepRec} setActiveStep={setActiveStepRec} />
                    </div>
                ) : (
                    <div style={{ ...boxBaseStyle }}>
                        <SlideEmp isMobile={isMobile} activeStep={activeStepEmp} setActiveStep={setActiveStepEmp} />
                    </div>
                )}
            </div>
        </div>
    );
}