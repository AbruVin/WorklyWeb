import React, { useState, useEffect, useRef } from "react";
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
    <div style={{
        ...boxContentStyle,
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        borderRadius: "20px",
        padding: isMobile ? "40px 24px" : "60px 50px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        minHeight: isMobile ? "auto" : 550
    }}>
        <span style={{ 
            fontWeight: 700, 
            fontSize: isMobile ? 22 : 32, 
            fontFamily: "'Montserrat', sans-serif", 
            color: "#2C2C2C",
            lineHeight: 1.2,
            textAlign: "center"
        }}>
            Tiempo de reclutamiento
        </span>
        
        <img
            src={RecProblems}
            alt="Problemas de reclutadores"
            style={{ 
                width: "100%", 
                maxWidth: isMobile ? "100%" : 550, 
                height: "auto"
            }}
        />
        
        <div style={{
            fontWeight: 700,
            fontSize: isMobile ? 22 : 28,
            color: "#3B2580",
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center"
        }}>
            30 minutos - 2 horas
        </div>
    </div>
);

//caja empleado
const SlideEmp = ({ isMobile }) => (
    <div style={{
        ...boxContentStyle,
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        borderRadius: "20px",
        padding: isMobile ? "40px 24px" : "60px 50px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        minHeight: isMobile ? "auto" : 550
    }}>
        <span style={{ 
            fontWeight: 700, 
            fontSize: isMobile ? 22 : 32, 
            fontFamily: "'Montserrat', sans-serif", 
            color: "#2C2C2C",
            lineHeight: 1.2,
            textAlign: "center"
        }}>
            Abandono de búsqueda laboral
        </span>
        
        <img
            src={EmpProblems}
            alt="Problemas de empleados"
            style={{ 
                width: "100%", 
                maxWidth: isMobile ? "100%" : 550, 
                height: "auto"
            }}
        />
        
        <div style={{
            fontWeight: 700,
            fontSize: isMobile ? 22 : 28,
            color: "#3B2580",
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center"
        }}>
            Alto porcentaje de abandono
        </div>
    </div>
);

export default function Problematic() {
	const isMobile = useIsMobile();
	const [currentSlide, setCurrentSlide] = useState(1); // Empezar en el medio
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
			ref={sectionRef}
            style={{
                width: "100%",
                minHeight: isMobile ? "auto" : 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                background: "#f4f7fb",
                padding: isMobile ? "30px 20px 40px 20px" : "40px 20px 50px 20px",
                position: "relative",
                overflow: "hidden",
            }}
        >
			{/* Título de la problemática */}
			<div 
				className={isVisible ? 'feature-title' : ''}
				style={{
					textAlign: "center",
					marginBottom: isMobile ? 25 : 35,
					marginTop: 0,
					width: "100%",
					maxWidth: 800
				}}
			>
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
					maxWidth: 600,
					position: "relative",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}>
					{slides[currentSlide]}
					
					{/* Navigation arrows */}
					<div style={{ 
						display: "flex", 
						justifyContent: "center", 
						gap: 20, 
						marginTop: 24,
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
						width: "100%",
						maxWidth: 1400,
						display: "flex",
						alignItems: "stretch",
						justifyContent: "center",
						gap: 40,
					}}
				>
					<div style={{ flex: 1, maxWidth: 650 }}>
						<SlideEmp isMobile={false} />
					</div>
					<div style={{ flex: 1, maxWidth: 650 }}>
						<SlideRec isMobile={false} />
					</div>
				</div>
			)}
        </div>
    );
}