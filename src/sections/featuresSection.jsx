import React, { useState, useEffect, useRef } from "react";
import { 
	IoShieldCheckmark, IoFlash, IoHeart, IoTrophy, 
	IoRocket, IoStar, IoDiamond, IoCheckmark 
} from "react-icons/io5";

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

const features = [
	{
		icon: IoShieldCheckmark,
		title: "Verificación Segura",
		description: "Todos los perfiles y empresas son verificados para garantizar autenticidad",
		color: "#3B2580"
	},
	{
		icon: IoFlash,
		title: "Matching Inteligente",
		description: "Algoritmo avanzado que conecta el talento perfecto con las oportunidades ideales",
		color: "#4B1C84"
	},
	{
		icon: IoHeart,
		title: "Experiencia Personalizada",
		description: "Interfaz intuitiva diseñada para una experiencia de usuario excepcional",
		color: "#5A1A8A"
	},
	{
		icon: IoTrophy,
		title: "Resultados Comprobados",
		description: "Una plataforma confiable enfocada en conexiones de calidad y resultados exitosos",
		color: "#6B1890"
	},
	{
		icon: IoRocket,
		title: "Proceso Ágil",
		description: "Desde la publicación hasta la contratación en tiempo récord",
		color: "#7B1696"
	},
	{
		icon: IoStar,
		title: "Calidad Premium",
		description: "Estándares altos que aseguran la mejor calidad en cada conexión",
		color: "#8B149C"
	}
];

export default function FeaturesSection() {
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
			{ threshold: 0.1 } // Activar cuando el 10% de la sección sea visible
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

	return (
		<div id="caracteristicas" ref={sectionRef} style={{
			background: "#fff",
			padding: isMobile ? "40px 20px" : "60px 40px",
			width: "100%"
		}}>
			<div style={{ maxWidth: 1200, margin: "0 auto" }}>
				{/* Header */}
				<div 
					className={isVisible ? 'feature-title' : ''}
					style={{ 
						textAlign: "center", 
						marginBottom: isMobile ? 30 : 50
					}}
				>
					<h2 style={{
						fontSize: isMobile ? 26 : 32,
						fontWeight: 700,
						marginBottom: 12,
						fontFamily: "Montserrat",
						color: "#232323"
					}}>
						¿Por qué elegir <span style={{ color: "#3B2580" }}>Workly</span>?
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 18,
						color: "#666",
						maxWidth: 600,
						margin: "0 auto",
						fontFamily: "Montserrat"
					}}>
						La plataforma más confiable para conectar talento con oportunidades
					</p>
				</div>

				{/* Features Grid */}
				<div style={{
					display: "grid",
					gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
					gap: isMobile ? 20 : 30,
					alignItems: "stretch"
				}}>
					{features.map((feature, index) => (
						<div
							key={index}
							className={`hover-lift ${isVisible ? 'feature-card' : ''}`}
							style={{
								background: "#f8f9fc",
								borderRadius: 16,
								padding: isMobile ? 20 : 24,
								border: "1px solid #e6eaf2",
								transition: "all 0.3s ease",
								opacity: isVisible ? 1 : 0,
								display: "flex",
								flexDirection: "column"
							}}
						>
							<div style={{
								background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
								borderRadius: 12,
								padding: 12,
								width: 48,
								height: 48,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: 16
							}}>
								<feature.icon size={24} color="#fff" />
							</div>
							
							<h3 style={{
								fontSize: isMobile ? 18 : 20,
								fontWeight: 600,
								marginBottom: 8,
								fontFamily: "Montserrat",
								color: "#232323"
							}}>
								{feature.title}
							</h3>
							
							<p style={{
								fontSize: isMobile ? 14 : 16,
								lineHeight: 1.5,
								color: "#666",
								margin: 0,
								fontFamily: "Montserrat"
							}}>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
