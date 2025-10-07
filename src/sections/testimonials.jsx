import React, { useState, useEffect } from "react";
import { IoStar, IoChevronForward, IoChevronBack } from "react-icons/io5";

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

const testimonials = [
	{
		id: 1,
		name: "María González",
		role: "HR Manager",
		company: "TechCorp",
		text: "Workly revolucionó nuestro proceso de reclutamiento. Encontramos el talento perfecto en tiempo récord.",
		rating: 5,
		avatar: "M"
	},
	{
		id: 2,
		name: "Carlos Ruiz",
		role: "Desarrollador Full Stack",
		company: "Freelancer",
		text: "Gracias a Workly conseguí el trabajo de mis sueños. La plataforma es intuitiva y efectiva.",
		rating: 5,
		avatar: "C"
	},
	{
		id: 3,
		name: "Ana Martínez",
		role: "Recruiters Lead",
		company: "StartupX",
		text: "La eficiencia de Workly nos permitió crecer nuestro equipo un 300% en 6 meses.",
		rating: 5,
		avatar: "A"
	},
	{
		id: 4,
		name: "Luis Pérez",
		role: "UI/UX Designer",
		company: "DesignStudio",
		text: "El proceso fue tan fluido que no podía creer lo fácil que fue encontrar nuevas oportunidades.",
		rating: 5,
		avatar: "L"
	}
];

export default function Testimonials() {
	const isMobile = useIsMobile();
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	// Auto-rotate testimonials
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const goNext = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	const goPrev = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

	const TestimonialCard = ({ testimonial, isActive, isMobile }) => (
		<div 
			className={`hover-scale ${isActive ? 'animate-fade-in-up' : ''}`}
			style={{
				background: "#fff",
				borderRadius: 20,
				padding: isMobile ? 24 : 32,
				boxShadow: isActive ? "0 8px 32px rgba(59, 37, 128, 0.15)" : "0 4px 16px rgba(0, 0, 0, 0.1)",
				transition: "all 0.3s ease",
				transform: isActive ? "scale(1)" : "scale(0.95)",
				opacity: isActive ? 1 : 0.7,
				minHeight: isMobile ? 280 : 300,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			}}
		>
			{/* Stars */}
			<div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
				{[...Array(testimonial.rating)].map((_, i) => (
					<IoStar key={i} size={20} color="#FFD700" />
				))}
			</div>

			{/* Testimonial text */}
			<p style={{
				fontSize: isMobile ? 15 : 16,
				lineHeight: 1.6,
				color: "#333",
				fontStyle: "italic",
				margin: "0 0 20px 0",
				fontFamily: "Montserrat"
			}}>
				"{testimonial.text}"
			</p>

			{/* Author info */}
			<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
				<div style={{
					width: 50,
					height: 50,
					borderRadius: "50%",
					background: "linear-gradient(135deg, #3B2580, #4B1C84)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#fff",
					fontWeight: 600,
					fontSize: 18,
					fontFamily: "Montserrat"
				}}>
					{testimonial.avatar}
				</div>
				<div>
					<div style={{
						fontWeight: 600,
						fontSize: 16,
						color: "#333",
						fontFamily: "Montserrat"
					}}>
						{testimonial.name}
					</div>
					<div style={{
						fontSize: 14,
						color: "#666",
						fontFamily: "Montserrat"
					}}>
						{testimonial.role} • {testimonial.company}
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div id="testimonios" style={{
			background: "#f4f7fb",
			padding: isMobile ? "40px 20px" : "80px 40px",
			width: "100%"
		}}>
			<div style={{ maxWidth: 1200, margin: "0 auto" }}>
				{/* Header */}
				<div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
					<h2 style={{
						fontSize: isMobile ? 28 : 36,
						fontWeight: 700,
						marginBottom: 16,
						fontFamily: "Montserrat",
						color: "#232323"
					}}>
						Lo que dicen nuestros <span style={{ color: "#3B2580" }}>usuarios</span>
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 18,
						color: "#666",
						maxWidth: 600,
						margin: "0 auto",
						fontFamily: "Montserrat"
					}}>
						Miles de empresas y profesionales ya confían en Workly para conectar el talento con las oportunidades perfectas.
					</p>
				</div>

				{isMobile ? (
					// Mobile carousel
					<div style={{ position: "relative" }}>
						<TestimonialCard 
							testimonial={testimonials[currentTestimonial]} 
							isActive={true}
							isMobile={true}
						/>
						
						{/* Navigation */}
						<div style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: 20,
							marginTop: 30
						}}>
							<button
								onClick={goPrev}
								className="hover-glow"
								style={{
									background: "#3B2580",
									border: "none",
									borderRadius: "50%",
									width: 50,
									height: 50,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#fff",
									cursor: "pointer"
								}}
							>
								<IoChevronBack size={24} />
							</button>

							{/* Dots */}
							<div style={{ display: "flex", gap: 8 }}>
								{testimonials.map((_, idx) => (
									<button
										key={idx}
										onClick={() => setCurrentTestimonial(idx)}
										style={{
											width: 12,
											height: 12,
											borderRadius: "50%",
											border: "none",
											background: idx === currentTestimonial ? "#3B2580" : "#d1d1e0",
											cursor: "pointer",
											transition: "background 0.3s ease"
										}}
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
									width: 50,
									height: 50,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#fff",
									cursor: "pointer"
								}}
							>
								<IoChevronForward size={24} />
							</button>
						</div>
					</div>
				) : (
					// Desktop grid
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: 24,
						maxWidth: 1000,
						margin: "0 auto"
					}}>
						{testimonials.map((testimonial, idx) => (
							<TestimonialCard
								key={testimonial.id}
								testimonial={testimonial}
								isActive={idx === currentTestimonial}
								isMobile={false}
							/>
						))}
					</div>
				)}

				{/* Stats */}
				<div 
					className="animate-fade-in-up"
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: isMobile ? 20 : 40,
						marginTop: isMobile ? 40 : 60,
						padding: isMobile ? 20 : 40,
						background: "#fff",
						borderRadius: 16,
						boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
					}}
				>
					{[
						{ number: "10K+", label: "Empresas registradas" },
						{ number: "50K+", label: "Profesionales activos" },
						{ number: "95%", label: "Tasa de éxito" },
						{ number: "24h", label: "Tiempo promedio de match" }
					].map((stat, idx) => (
						<div key={idx} style={{ textAlign: "center" }}>
							<div style={{
								fontSize: isMobile ? 24 : 32,
								fontWeight: 700,
								color: "#3B2580",
								fontFamily: "Montserrat"
							}}>
								{stat.number}
							</div>
							<div style={{
								fontSize: isMobile ? 12 : 14,
								color: "#666",
								fontFamily: "Montserrat"
							}}>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
