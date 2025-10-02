
import React from "react";
import logo from "../assets/logoWorkly.svg";



const headerStyle: React.CSSProperties = {
	width: "100vw",
	position: "fixed",
	left: 0,
	top: 0,
	background: "#f4f7fb",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "10px 40px 8px 24px",
	boxShadow: "0 4px 12px #0001",
	borderBottom: "1.5px solid #e6eaf2",
	minHeight: 56,
	boxSizing: "border-box",
	zIndex: 100
};

const logoStyle: React.CSSProperties = {
	width: 36,
	height: 36,
	marginRight: 10
};

const brandStyle: React.CSSProperties = {
	fontWeight: 700,
	fontSize: 22,
	fontFamily: 'Vollkorn, serif',
	fontStyle: 'italic',
	color: '#23223B',
	letterSpacing: 0.7,
};

const navStyle: React.CSSProperties = {
	display: "flex",
	gap: 32,
	fontWeight: 600,
	fontSize: 17,
	color: "#23223B",
	fontFamily: 'Montserrat, sans-serif',
};

export default function NavigationHeader() {
	return (
		<header style={headerStyle}>
			<div style={{ display: "flex", alignItems: "center" }}>
				<img src={logo} alt="Workly logo" style={logoStyle} />
				<span style={brandStyle}>Workly</span>
			</div>
			<nav style={navStyle}>
				<span style={{ cursor: "pointer" }}>Inicio</span>
				<span style={{ cursor: "pointer" }}>Propuesta</span>
				<span style={{ cursor: "pointer" }}>Funciones</span>
			</nav>
		</header>
	);
}
