import React from "react";

export default function StatsSimple() {
	return (
		<div id="estadisticas" style={{
			width: "100%",
			background: "#f4f7fb",
			padding: "60px 40px"
		}}>
			<div style={{
				maxWidth: 1400,
				margin: "0 auto",
				textAlign: "center"
			}}>
				<h2 style={{
					fontWeight: 700,
					fontSize: 36,
					color: "#2C2C2C",
					fontFamily: "Montserrat",
					marginBottom: 16,
					lineHeight: 1.2
				}}>
					<span style={{ fontFamily: 'Montserrat SemiBold, Montserrat', fontWeight: 600 }}>Transformando el </span>
					<span style={{ color: "#3B2580", fontFamily: 'Montserrat ExtraBold Italic, Montserrat', fontWeight: 800, fontStyle: "italic" }}>mercado laboral</span>
				</h2>
				<p style={{
					fontSize: 20,
					color: "#666",
					fontFamily: "Montserrat",
					maxWidth: 600,
					margin: "0 auto",
					lineHeight: 1.5
				}}>
					Una plataforma que conecta talento y oportunidades de manera eficiente
				</p>
			</div>
		</div>
	);
}
