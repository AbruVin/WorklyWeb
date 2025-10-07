import React, { useState, useEffect } from "react";
import { 
	IoCodeSlash, IoTrendingUp, IoColorPalette, IoMedkit,
	IoBusiness, IoSchool, IoConstruct, IoRestaurant,
	IoAnalytics, IoMegaphone, IoCard, IoShield,
	IoAirplane, IoStorefront, IoFlash
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

const industries = [
	{ icon: IoCodeSlash, name: "Tecnología", color: "#3B2580" },
	{ icon: IoTrendingUp, name: "Finanzas", color: "#4B1C84" },
	{ icon: IoColorPalette, name: "Diseño", color: "#5A1A8A" },
	{ icon: IoMedkit, name: "Salud", color: "#6B1890" },
	{ icon: IoBusiness, name: "Consultoría", color: "#7B1696" },
	{ icon: IoMegaphone, name: "Marketing", color: "#8B149C" },
	{ icon: IoAnalytics, name: "Data Science", color: "#9B12A2" },
	{ icon: IoSchool, name: "Educación", color: "#AB10A8" },
	{ icon: IoConstruct, name: "Ingeniería", color: "#BB0EAE" },
	{ icon: IoCard, name: "Ventas", color: "#CB0CB4" },
	{ icon: IoShield, name: "Legal", color: "#DB0ABA" },
	{ icon: IoRestaurant, name: "Hotelería", color: "#EB08C0" },
	{ icon: IoAirplane, name: "Turismo", color: "#FB06C6" },
	{ icon: IoStorefront, name: "Retail", color: "#FF04CC" },
	{ icon: IoFlash, name: "Energía", color: "#FF02D2" }
];

export default function IndustriesSection() {
	const isMobile = useIsMobile();

	return (
		<div id="industrias" style={{
			background: "#f4f7fb",
			padding: isMobile ? "40px 20px" : "60px 40px",
			width: "100%"
		}}>
			<div style={{ maxWidth: 1200, margin: "0 auto" }}>
				{/* Header */}
				<div style={{ textAlign: "center", marginBottom: isMobile ? 30 : 40 }}>
					<h2 style={{
						fontSize: isMobile ? 26 : 32,
						fontWeight: 700,
						marginBottom: 12,
						fontFamily: "Montserrat",
						color: "#232323"
					}}>
						Encuentra trabajo en tu <span style={{ color: "#3B2580" }}>industria</span>
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 18,
						color: "#666",
						maxWidth: 600,
						margin: "0 auto",
						fontFamily: "Montserrat"
					}}>
						Oportunidades en los sectores más demandados
					</p>
				</div>

				{/* Industries Grid */}
				<div style={{
					display: "grid",
					gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
					gap: isMobile ? 12 : 16
				}}>
					{industries.map((industry, index) => (
						<div
							key={index}
							className="hover-lift"
							style={{
								background: "#fff",
								borderRadius: 12,
								padding: isMobile ? 16 : 20,
								textAlign: "center",
								border: "1px solid #e6eaf2",
								transition: "all 0.3s ease",
								cursor: "pointer"
							}}
						>
							<div style={{
								background: `${industry.color}15`,
								borderRadius: 8,
								padding: 8,
								width: 40,
								height: 40,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 auto 12px"
							}}>
								<industry.icon size={20} color={industry.color} />
							</div>
							
							<h4 style={{
								fontSize: isMobile ? 14 : 16,
								fontWeight: 600,
								marginBottom: 4,
								fontFamily: "Montserrat",
								color: "#232323"
							}}>
								{industry.name}
							</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
