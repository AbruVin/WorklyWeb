import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

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

const faqData = [
	{
		id: 1,
		question: "¿Cómo funciona Workly?",
		answer: "Workly revoluciona la forma en que empresas y profesionales se conectan. A través de una experiencia dinámica tipo \"swipe\", los reclutadores pueden descubrir candidatos de manera ágil e intuitiva. Además, la primera entrevista puede realizarse directamente desde la app mediante videollamada, acelerando el proceso de contratación y optimizando el tiempo de ambas partes."
	},
	{
		id: 2,
		question: "¿Es gratuito para los profesionales?",
		answer: "Workly es completamente gratuito para los profesionales. Pueden crear su perfil, aplicar a ofertas y ser descubiertos por empresas sin ningún costo. En el futuro, también podrán acceder a planes premium opcionales con beneficios exclusivos diseñados para potenciar su visibilidad y oportunidades laborales."
	},
	{
		id: 3,
		question: "¿Qué tipo de trabajos puedo encontrar?",
		answer: "Desde trabajos remotos hasta presenciales, tiempo completo y medio tiempo."
	},
	{
		id: 4,
		question: "¿Puedo trabajar de forma remota?",
		answer: "¡Por supuesto! Tenemos miles de ofertas de trabajo remoto. Puedes filtrar específicamente por modalidad remota, híbrida o presencial según tus preferencias."
	}
];

export default function FAQ() {
	const isMobile = useIsMobile();
	const [openItems, setOpenItems] = useState(new Set([1])); // Primer item abierto por defecto

	const toggleItem = (id) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id);
		} else {
			newOpenItems.add(id);
		}
		setOpenItems(newOpenItems);
	};

	return (
		<div id="faq" style={{
			background: "#fff",
			padding: isMobile ? "40px 20px" : "80px 40px",
			width: "100%"
		}}>
			<div style={{ maxWidth: 800, margin: "0 auto" }}>
				{/* Header */}
				<div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
					<h2 style={{
						fontSize: isMobile ? 28 : 36,
						fontWeight: 700,
						marginBottom: 16,
						fontFamily: "Montserrat",
						color: "#232323"
					}}>
						Preguntas <span style={{ color: "#3B2580" }}>Frecuentes</span>
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 18,
						color: "#666",
						maxWidth: 600,
						margin: "0 auto",
						fontFamily: "Montserrat"
					}}>
						Resolvemos las dudas más comunes sobre nuestra plataforma.
					</p>
				</div>

				{/* FAQ Items */}
				<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
					{faqData.map((item, index) => {
						const isOpen = openItems.has(item.id);
						return (
							<div 
								key={item.id}
								className="hover-scale animate-fade-in-up"
								style={{
									animationDelay: `${index * 0.1}s`,
									background: "#f8f9fc",
									borderRadius: 16,
									overflow: "hidden",
									border: isOpen ? "2px solid #3B2580" : "2px solid #D7D7D8",
									transition: "all 0.3s ease"
								}}
							>
								{/* Question */}
								<button
									onClick={() => toggleItem(item.id)}
									style={{
										width: "100%",
										background: "none",
										border: "none",
										padding: isMobile ? "20px" : "24px",
										textAlign: "left",
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 16
									}}
								>
									<h3 style={{
										fontSize: isMobile ? 16 : 18,
										fontWeight: 600,
										color: "#232323",
										margin: 0,
										fontFamily: "Montserrat"
									}}>
										{item.question}
									</h3>
									<div style={{
										color: "#3B2580",
										transition: "transform 0.3s ease",
										transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
										flexShrink: 0
									}}>
										<IoChevronDown size={24} />
									</div>
								</button>

								{/* Answer */}
								<div style={{
									maxHeight: isOpen ? "200px" : "0",
									overflow: "hidden",
									transition: "max-height 0.3s ease"
								}}>
									<div style={{
										padding: isMobile ? "0 20px 20px" : "0 24px 24px",
										paddingTop: 0
									}}>
										<p style={{
											fontSize: isMobile ? 14 : 16,
											lineHeight: 1.6,
											color: "#666",
											margin: 0,
											fontFamily: "Montserrat"
										}}>
											{item.answer}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
