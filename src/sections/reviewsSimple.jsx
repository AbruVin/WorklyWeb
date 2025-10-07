import React from "react";

const reviews = [
	{
		type: "empresa",
		name: "María González",
		position: "Directora de RRHH",
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
		type: "profesional",
		name: "Ana Rodríguez",
		position: "Diseñadora UX/UI",
		company: "Creativa Digital",
		rating: 5,
		review: "La mejor experiencia que he tenido buscando trabajo. El algoritmo de Workly realmente entiende lo que busco.",
		avatar: "AR",
		color: "#4B1C84"
	}
];

const ReviewCard = ({ review }) => (
	<div style={{
		background: "#fff",
		borderRadius: 20,
		padding: "32px 28px",
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
			marginBottom: 20,
			gap: 12
		}}>
			<div style={{
				width: 56,
				height: 56,
				borderRadius: "50%",
				background: `linear-gradient(135deg, ${review.color} 0%, ${review.color}dd 100%)`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#fff",
				fontWeight: 700,
				fontSize: 16,
				fontFamily: "Montserrat"
			}}>
				{review.avatar}
			</div>
			
			<div style={{ flex: 1 }}>
				<div style={{
					fontSize: 14,
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
					fontSize: 18,
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
			fontSize: 16,
			color: "#555",
			fontFamily: "Montserrat",
			lineHeight: 1.6,
			margin: 0,
			flex: 1,
			marginBottom: 20
		}}>
			"{review.review}"
		</p>

		{/* Footer with position and rating */}
		<div style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-end",
			marginTop: "auto"
		}}>
			<div>
				<div style={{
					fontSize: 14,
					fontWeight: 600,
					color: "#2C2C2C",
					fontFamily: "Montserrat",
					marginBottom: 2
				}}>
					{review.position}
				</div>
				<div style={{
					fontSize: 13,
					color: "#666",
					fontFamily: "Montserrat"
				}}>
					{review.company}
				</div>
			</div>
			
			<div style={{ display: "flex", gap: 2 }}>
				{"⭐".repeat(review.rating)}
			</div>
		</div>
	</div>
);

export default function ReviewsSimple() {
	return (
		<div id="resenas" style={{
			width: "100%",
			background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
			padding: "80px 40px",
			position: "relative"
		}}>
			<div style={{
				maxWidth: 1400,
				margin: "0 auto"
			}}>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: 60 }}>
					<h2 style={{
						fontWeight: 700,
						fontSize: 36,
						color: "#2C2C2C",
						fontFamily: "Montserrat",
						marginBottom: 16,
						lineHeight: 1.2
					}}>
						<span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>Lo que dicen </span>
						<span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>nuestros usuarios</span>
					</h2>
					<p style={{
						fontSize: 20,
						color: "#666",
						fontFamily: "Montserrat",
						maxWidth: 600,
						margin: "0 auto",
						lineHeight: 1.5
					}}>
						Empresas y profesionales que han transformado su experiencia laboral con Workly
					</p>
				</div>

				{/* Reviews Grid */}
				<div style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: 32,
					marginBottom: 60
				}}>
					{reviews.map((review, index) => (
						<div key={index}>
							<ReviewCard review={review} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
