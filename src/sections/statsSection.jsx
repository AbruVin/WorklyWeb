import React, { useState, useEffect } from "react";
import { IoTrendingUp, IoPeople, IoBusiness, IoTime, IoTimeOutline, IoTrendingDownOutline } from "react-icons/io5";

// Hook para detectar si es móvil
function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);
	return isMobile;
}

const problemStats = [
	{
		icon: <IoTimeOutline />,
		number: "68%",
		label: "Empresas tardan +4 semanas",
		description: "en completar contrataciones",
		color: "#E74C3C"
	},
	{
		icon: <IoTrendingDownOutline />,
		number: "45%",
		label: "Candidatos abandonan",
		description: "después de 2 semanas",
		color: "#F39C12"
	}
];

const successStats = [
	{
		icon: <IoPeople />,
		number: "50K+",
		label: "Profesionales activos",
		color: "#3B2580"
	},
	{
		icon: <IoBusiness />,
		number: "2K+",
		label: "Empresas registradas",
		color: "#4B1C84"
	},
	{
		icon: <IoTrendingUp />,
		number: "95%",
		label: "Tasa de éxito",
		color: "#5A1A8A"
	},
	{
		icon: <IoTime />,
		number: "24h",
		label: "Tiempo promedio",
		color: "#6B1890"
	}
];

export default function StatsSection() {
	const isMobile = useIsMobile();

	return (
		<div style={{
			width: "100%",
			background: "#f4f7fb"
		}}>
			{/* Sección de problemas */}
			<div style={{
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				padding: isMobile ? "48px 20px" : "64px 40px",
				position: "relative"
			}}>
				<div style={{
					maxWidth: 1200,
					margin: "0 auto",
					textAlign: "center"
				}}>
					<h2 style={{
						fontWeight: 700,
						fontSize: isMobile ? 28 : 36,
						color: "#fff",
						fontFamily: "Montserrat",
						marginBottom: isMobile ? 12 : 16,
						lineHeight: 1.2
					}}>
						La realidad del mercado laboral
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 20,
						color: "rgba(255, 255, 255, 0.9)",
						fontFamily: "Montserrat",
						marginBottom: isMobile ? 32 : 48,
						maxWidth: 600,
						margin: `0 auto ${isMobile ? 32 : 48}px auto`,
						lineHeight: 1.5
					}}>
						Estos números muestran por qué necesitamos una solución más eficiente
					</p>
					
					<div style={{
						display: "flex",
						flexDirection: isMobile ? "column" : "row",
						gap: isMobile ? 20 : 40,
						justifyContent: "center",
						alignItems: "stretch",
						maxWidth: 800,
						margin: "0 auto"
					}}>
						{problemStats.map((stat, index) => (
							<div key={index} className="hover-lift" style={{
								background: "#fff",
								borderRadius: 16,
								padding: isMobile ? "24px 20px" : "32px 24px",
								boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								flex: 1
							}}>
								<div style={{
									background: stat.color,
									borderRadius: "50%",
									width: isMobile ? 64 : 80,
									height: isMobile ? 64 : 80,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginBottom: isMobile ? 16 : 20
								}}>
									{React.cloneElement(stat.icon, { color: "#fff", size: isMobile ? 28 : 36 })}
								</div>
								<div style={{
									fontWeight: 800,
									fontSize: isMobile ? 32 : 42,
									color: stat.color,
									fontFamily: "Montserrat",
									marginBottom: isMobile ? 8 : 12
								}}>
									{stat.number}
								</div>
								<h3 style={{
									fontWeight: 700,
									fontSize: isMobile ? 16 : 18,
									color: "#2C2C2C",
									fontFamily: "Montserrat",
									marginBottom: isMobile ? 4 : 8,
									lineHeight: 1.2
								}}>
									{stat.label}
								</h3>
								<p style={{
									fontWeight: 400,
									fontSize: isMobile ? 14 : 16,
									color: "#666",
									fontFamily: "Montserrat",
									lineHeight: 1.4,
									margin: 0
								}}>
									{stat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Sección de éxito con Workly */}
			<div style={{
				background: "linear-gradient(135deg, #3B2580 0%, #4B1C84 100%)",
				padding: isMobile ? "30px 20px" : "40px 40px"
			}}>
				<div style={{ maxWidth: 1200, margin: "0 auto" }}>
					<h3 style={{
						textAlign: "center",
						fontWeight: 700,
						fontSize: isMobile ? 24 : 28,
						color: "#fff",
						fontFamily: "Montserrat",
						marginBottom: isMobile ? 24 : 32,
						lineHeight: 1.2
					}}>
						Con Workly, estos son nuestros resultados
					</h3>
					<div style={{
						display: "grid",
						gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
						gap: isMobile ? 20 : 40,
						alignItems: "center"
					}}>
						{successStats.map((stat, index) => (
							<div
								key={index}
								className="hover-lift"
								style={{
									textAlign: "center",
									color: "#fff",
									padding: isMobile ? 16 : 20,
									borderRadius: 12,
									background: "rgba(255, 255, 255, 0.1)",
									backdropFilter: "blur(10px)"
								}}
							>
								{React.cloneElement(stat.icon, { 
									size: isMobile ? 28 : 32,
									style: { 
										marginBottom: 8,
										color: "#fff"
									}
								})}
								<div style={{
									fontSize: isMobile ? 20 : 28,
									fontWeight: 700,
									marginBottom: 4,
									fontFamily: "Montserrat"
								}}>
									{stat.number}
								</div>
								<div style={{
									fontSize: isMobile ? 12 : 14,
									opacity: 0.9,
									fontFamily: "Montserrat"
								}}>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
