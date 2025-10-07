import React, { useState, useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import RecProblems from "../assets/problematicImgs/stadisticsTimeImg.svg";
import EmpProblems from "../assets/problematicImgs/stadisticsSearchImg.svg";

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

//caja reclutador
const SlideRec = ({ isMobile }) => (
    <div className="animate-fade-in-left" style={boxContentStyle}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-start" }}>
            <span className="bounce" style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, marginRight: 10, color: "#4B2676" }}><IoWarningOutline /></span>
            <span style={{ 
				fontWeight: 700, 
				fontSize: isMobile ? 18 : 26, 
				fontFamily: "'Montserrat', sans-serif", 
				color: "#2C2C2C",
				lineHeight: isMobile ? 1.3 : 1
			}}>
                Tiempo de reclutamiento
            </span>
        </div>
        <div style={{ width: "100%" }}>
            <hr style={{ width: "100%", border: "none", borderTop: "2px solid #dbe2ea", margin: "10px 0 18px 0" }} />
        </div>
        <div style={{ 
			flex: 1, 
			display: "flex", 
			flexDirection: "column", 
			alignItems: "center", 
			justifyContent: "center", 
			width: "100%", 
			minHeight: isMobile ? 200 : 210,
			position: "relative"
		}}>
            <img
                src={RecProblems}
                alt="Problemas de reclutadores"
                className="sharp-image hover-scale"
                style={{ 
					width: "100%", 
					maxWidth: isMobile ? 400 : 700, 
					display: "block",
					height: "auto",
					minHeight: isMobile ? 150 : "auto"
				}}
            />
            <div style={{
                fontWeight: 700,
                fontSize: isMobile ? 18 : 24,
                marginTop: isMobile ? 16 : 20,
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif"
            }}>
                30 minutos - 2 horas
            </div>
        </div>
    </div>
);

//caja empleado
const SlideEmp = ({ isMobile }) => (
    <div className="animate-fade-in-right" style={boxContentStyle}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-start" }}>
            <span className="bounce" style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, marginRight: 10, color: "#4B2676", animationDelay: "0.2s" }}><IoWarningOutline /></span>
            <span style={{ 
				fontWeight: 700, 
				fontSize: isMobile ? 18 : 26, 
				fontFamily: "'Montserrat', sans-serif", 
				color: "#2C2C2C",
				lineHeight: isMobile ? 1.3 : 1
			}}>
                Abandono de búsqueda laboral
            </span>
        </div>
        <div style={{ width: "100%" }}>
            <hr style={{ width: "100%", border: "none", borderTop: "2px solid #dbe2ea", margin: "10px 0 18px 0" }} />
        </div>
        <div style={{ 
			flex: 1, 
			display: "flex", 
			flexDirection: "column", 
			alignItems: "center", 
			justifyContent: "center", 
			width: "100%" 
		}}>
            <img
                src={EmpProblems}
                alt="Problemas de empleados"
                className="sharp-image hover-scale"
                style={{ 
					width: "100%", 
					maxWidth: isMobile ? 400 : 700, 
					display: "block",
					height: "auto",
					minHeight: isMobile ? 150 : "auto"
				}}
            />
        </div>
    </div>
);

export default function Problematic() {
	const isMobile = useIsMobile();
	const [currentSlide, setCurrentSlide] = useState(1); // Empezar en el medio

    //style base cajas
    const boxBaseStyle = {
        background: "#f4f7fb",
        borderRadius: 16,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
        padding: isMobile ? "24px 20px 28px 20px" : "24px 32px 32px 32px",
        minWidth: isMobile ? "100%" : 480,
        minHeight: isMobile ? 380 : 340,
        height: isMobile ? "auto" : 380,
        width: isMobile ? "100%" : 700,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxSizing: "border-box",
        zIndex: 2,
    };

	const slides = [
		<SlideEmp key="emp" isMobile={isMobile} />,
		<SlideRec key="rec" isMobile={isMobile} />,
		<SlideEmp key="emp-repeat" isMobile={isMobile} />
	];

	const goNext = () => {
		setCurrentSlide((prev) => {
			if (prev === slides.length - 1) {
				return 1; // Vuelve al medio (SlideRec)
			}
			return prev + 1;
		});
	};
	
	const goPrev = () => {
		setCurrentSlide((prev) => {
			if (prev === 0) {
				return 1; // Vuelve al medio (SlideRec)
			}
			return prev - 1;
		});
	};

    return (
        <div
			id="problematica"
			className="animate-fade-in-up"
            style={{
                width: "100%",
                minHeight: isMobile ? "auto" : 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f7fb",
                padding: isMobile ? "30px 20px" : "35px 20px",
                position: "relative",
                overflow: "hidden",
            }}
        >
			{/* Título de la problemática */}
			<div style={{
				textAlign: "center",
				marginBottom: isMobile ? 15 : 20,
				width: "100%",
				maxWidth: 800
			}}>
				<h2 style={{
					fontSize: isMobile ? 24 : 32,
					fontWeight: 700,
					color: "#3B2580",
					fontFamily: "Montserrat",
					margin: "0 0 8px 0",
					lineHeight: 1.2
				}}>
					Encontramos una problemática
				</h2>
				<p style={{
					fontSize: isMobile ? 16 : 18,
					color: "#666",
					fontFamily: "Montserrat",
					margin: 0,
					lineHeight: 1.4
				}}>
					El proceso tradicional de búsqueda laboral necesita evolucionar
				</p>
			</div>

			{isMobile ? (
				// Vista móvil con carousel
				<div style={{ 
					width: "100%", 
					position: "relative",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}>
					<div style={boxBaseStyle}>
						{slides[currentSlide]}
					</div>
					
					{/* Navigation arrows */}
					<div style={{ 
						display: "flex", 
						justifyContent: "center", 
						gap: 20, 
						marginTop: 20,
						alignItems: "center"
					}}>
						<button
							onClick={goPrev}
							className="hover-glow"
							style={{
								background: "#3B2580",
								border: "none",
								borderRadius: "50%",
								width: 40,
								height: 40,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
								color: "#fff"
							}}
						>
							<IoChevronBack size={20} />
						</button>
						
						{/* Dots indicator */}
						<div style={{ display: "flex", gap: 8 }}>
							{slides.map((_, idx) => (
								<span
									key={idx}
									className="hover-scale"
									style={{
										width: 8,
										height: 8,
										borderRadius: "50%",
										background: idx === currentSlide ? "#3B2580" : "#d1d1e0",
										display: "inline-block",
										cursor: "pointer"
									}}
									onClick={() => setCurrentSlide(idx)}
								/>
							))}
						</div>
						
						<button
							onClick={goNext}
							className="hover-glow"
							style={{
								background: "#3B2580",
								border: "none",
								borderRadius: "50%",
								width: 40,
								height: 40,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
								color: "#fff"
							}}
						>
							<IoChevronForward size={20} />
						</button>
					</div>
				</div>
			) : (
				// Vista desktop con dos cajas lado a lado
				<div
					style={{
						width: 1500,
						maxWidth: "98%",
						height: 440,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 32,
					}}
				>
					<div style={boxBaseStyle}>
						<SlideEmp isMobile={false} />
					</div>
					<div style={boxBaseStyle}>
						<SlideRec isMobile={false} />
					</div>
				</div>
			)}
        </div>
    );
}