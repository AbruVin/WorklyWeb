import React, { useState, useEffect } from "react";

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

const reviews = [
	{
		type: "empresa",
		name: "María González",
		position: "Reclutadora Senior",
		company: "TechCorp Solutions",
		rating: 5,
		review: "Workly revolucionó nuestro proceso de contratación. En solo 2 semanas encontramos al talento perfecto que llevábamos buscando por meses.",
		avatar: "MG",
		color: "#3B2580"
	},
	{
		type: "profesional",
		name: "Carlos Mendoza",
		position: "Desarrollador Full Stack",
		company: "Freelancer",
		rating: 5,
		review: "Increíble plataforma. Subí mi perfil un viernes y el lunes ya tenía 3 ofertas laborales. El proceso fue súper ágil y transparente.",
		avatar: "CM",
		color: "#4B1C84"
	},
	{
		type: "empresa",
		name: "Roberto Silva",
		position: "CEO",
		company: "InnovaStart",
		rating: 5,
		review: "Como startup, necesitábamos contratar rápido y bien. Workly nos permitió filtrar candidatos de manera inteligente.",
		avatar: "RS",
		color: "#3B2580"
	},
	{
		type: "empresa",
		name: "Laura Fernández",
		position: "Reclutadora IT",
		company: "DevTalent Hub",
		rating: 5,
		review: "Con Workly tenés todo lo que necesitas en un mismo lugar. La plataforma simplificó enormemente nuestro flujo de trabajo y aumentó la calidad de nuestras contrataciones.",
		avatar: "LF",
		color: "#3B2580"
	}
];

const ReviewCard = ({ review, isMobile }) => (
	<div style={{
		background: "#fff",
		borderRadius: isMobile ? 16 : 20,
		padding: isMobile ? "24px 20px" : "32px 28px",
		boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		position: "relative",
		border: `2px solid ${review.color}20`
	}}>
		{/* Header with avatar */}
		<div style={{
			display: "flex",
			alignItems: "center",
			marginBottom: isMobile ? 16 : 20,
			gap: 12
		}}>
			<div style={{
				width: isMobile ? 48 : 56,
				height: isMobile ? 48 : 56,
				borderRadius: "50%",
				background: `linear-gradient(135deg, ${review.color} 0%, ${review.color}dd 100%)`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#fff",
				fontWeight: 700,
				fontSize: isMobile ? 14 : 16,
				fontFamily: "Montserrat"
			}}>
				{review.avatar}
			</div>
			
			<div style={{ flex: 1 }}>
				<div style={{
					fontSize: isMobile ? 12 : 14,
					fontWeight: 600,
					color: review.color,
					fontFamily: "Montserrat",
					textTransform: "uppercase",
					letterSpacing: 0.5,
					marginBottom: 4
				}}>
					{review.type === "empresa" ? "🏢 Empresa" : "👤 Profesional"}
				</div>
				
				<h4 style={{
					fontWeight: 700,
					fontSize: isMobile ? 16 : 18,
					color: "#2C2C2C",
					fontFamily: "Montserrat",
					margin: 0,
					lineHeight: 1.2
				}}>
					{review.name}
				</h4>
			</div>
		</div>

		{/* Review text */}
		<p style={{
			fontSize: isMobile ? 14 : 16,
			color: "#555",
			fontFamily: "Montserrat",
			lineHeight: 1.6,
			margin: 0,
			flex: 1,
			marginBottom: isMobile ? 16 : 20
		}}>
			"{review.review}"
		</p>

		{/* Footer with position and rating */}
		<div style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-end",
			marginTop: "auto",
			flexWrap: isMobile ? "wrap" : "nowrap",
			gap: isMobile ? 8 : 0
		}}>
			<div>
				<div style={{
					fontSize: isMobile ? 13 : 14,
					fontWeight: 600,
					color: "#2C2C2C",
					fontFamily: "Montserrat",
					marginBottom: 2
				}}>
					{review.position}
				</div>
				<div style={{
					fontSize: isMobile ? 12 : 13,
					color: "#666",
					fontFamily: "Montserrat"
				}}>
					{review.company}
				</div>
			</div>
			
			<div style={{ display: "flex", gap: 2, fontSize: isMobile ? 14 : 16 }}>
				{"⭐".repeat(review.rating)}
			</div>
		</div>
	</div>
);

export default function ReviewsSimple() {
	const isMobile = useIsMobile();
	
	return (
		<div id="resenas" style={{
			width: "100%",
			background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
			padding: isMobile ? "40px 20px" : "80px 40px",
			position: "relative"
		}}>
			<div style={{
				maxWidth: 1400,
				margin: "0 auto"
			}}>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
					<h2 style={{
						fontWeight: 700,
						fontSize: isMobile ? 26 : 36,
						color: "#2C2C2C",
						fontFamily: "Montserrat",
						marginBottom: isMobile ? 12 : 16,
						lineHeight: 1.2
					}}>
						<span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>Lo que dicen </span>
						<span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>nuestros usuarios</span>
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 20,
						color: "#666",
						fontFamily: "Montserrat",
						maxWidth: 600,
						margin: "0 auto",
						lineHeight: 1.5,
						padding: isMobile ? "0 10px" : 0
					}}>
						Empresas y profesionales que han transformado su experiencia laboral con Workly
					</p>
				</div>

				{/* Reviews Grid */}
				<div style={{
					display: "grid",
					gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
					gap: isMobile ? 20 : 32,
					marginBottom: isMobile ? 40 : 60
				}}>
					{reviews.map((review, index) => (
						<div key={index}>
							<ReviewCard review={review} isMobile={isMobile} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
