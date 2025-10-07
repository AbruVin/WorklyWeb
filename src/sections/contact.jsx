import React, { useState } from "react";
import { IoMail, IoLogoInstagram } from "react-icons/io5";

// Hook para detectar si es móvil
function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
	React.useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);
	return isMobile;
}

export default function Contact() {
	const isMobile = useIsMobile();

	const contactInfo = [
		{
			icon: IoMail,
			title: "Email",
			value: "worklybythematch@gmail.com",
			
		},
		{
			icon: IoLogoInstagram,
			title: "Instagram",
			value: "@workly.team",
			description: "Síguenos para novedades",
			url: "https://www.instagram.com/workly.team?igsh=MWlzM3cwb3NldHRqZw%3D%3D&utm_source=qr"
		}
	];

	return (
		<div id="contacto" style={{
			background: "#f8f9fc",
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
						Hablemos <span style={{ color: "#3B2580" }}>juntos</span>
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 18,
						color: "#666",
						maxWidth: 600,
						margin: "0 auto 24px auto",
						fontFamily: "Montserrat",
						lineHeight: 1.6
					}}>
						¿Tienes preguntas sobre Workly? Estamos aquí para ayudarte.
					</p>
					<div style={{
						fontSize: isMobile ? 15 : 17,
						color: "#555",
						maxWidth: 700,
						margin: "0 auto",
						fontFamily: "Montserrat",
						lineHeight: 1.7,
						padding: isMobile ? "20px" : "24px 32px",
						background: "linear-gradient(135deg, rgba(59, 37, 128, 0.03) 0%, rgba(59, 37, 128, 0.08) 100%)",
						borderRadius: "16px",
						border: "1px solid rgba(59, 37, 128, 0.1)"
					}}>
						En Workly creemos en la mejora constante.
						Si tenés una propuesta, sugerencia o funcionalidad que te gustaría ver en la app, compartila con nosotros.
						Cada comentario nos ayuda a seguir innovando y ofrecerte una experiencia cada vez más completa.
					</div>
				</div>

				{/* Contact Info - Centrado */}
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
					<div className="animate-fade-in-up" style={{
						maxWidth: 600,
						width: "100%"
					}}>
						<h3 style={{
							fontSize: isMobile ? 22 : 26,
							fontWeight: 600,
							marginBottom: 32,
							fontFamily: "Montserrat",
							color: "#232323",
							textAlign: "center"
						}}>
							Información de contacto
						</h3>
						
						<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
							{contactInfo.map((info, index) => (
								<div 
									key={index}
									className="hover-scale"
									style={{
										display: "flex",
										alignItems: "flex-start",
										gap: 16,
										padding: 24,
										background: "#fff",
										borderRadius: 16,
										boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
										transition: "all 0.3s ease"
									}}
								>
									<div style={{
										background: "linear-gradient(135deg, #3B2580, #4B1C84)",
										borderRadius: 12,
										padding: 12,
										color: "#fff",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										minWidth: 48,
										minHeight: 48
									}}>
										<info.icon size={24} />
									</div>
									<div style={{ flex: 1 }}>
										<h4 style={{
											fontSize: 16,
											fontWeight: 600,
											color: "#232323",
											margin: "0 0 4px 0",
											fontFamily: "Montserrat"
										}}>
											{info.title}
										</h4>
										<div style={{
											fontSize: 15,
											fontWeight: 500,
											color: "#3B2580",
											margin: "0 0 4px 0",
											fontFamily: "Montserrat"
										}}>
											{info.url ? (
												<a 
													href={info.url} 
													target="_blank" 
													rel="noopener noreferrer"
													style={{
														color: "#3B2580",
														textDecoration: "none"
													}}
													onMouseOver={(e) => e.target.style.textDecoration = "underline"}
													onMouseOut={(e) => e.target.style.textDecoration = "none"}
												>
													{info.value}
												</a>
											) : (
												info.value
											)}
										</div>
										{info.description && (
											<div style={{
												fontSize: 13,
												color: "#666",
												fontFamily: "Montserrat"
											}}>
												{info.description}
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
