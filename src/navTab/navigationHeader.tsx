
import React, { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logoWorkly.svg";

// Hook para detectar si es móvil
function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(() => 
		typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
	);
	
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);
	
	return isMobile;
}

const headerStyle: React.CSSProperties = {
	width: "100%",
	position: "fixed",
	left: 0,
	top: 0,
	background: "#f4f7fb",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "10px 16px 8px 16px",
	boxShadow: "0 4px 12px #0001",
	borderBottom: "1.5px solid #e6eaf2",
	minHeight: 56,
	boxSizing: "border-box",
	zIndex: 100
};

const headerStyleDesktop: React.CSSProperties = {
	...headerStyle,
	padding: "10px 40px 8px 24px"
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

const brandStyleMobile: React.CSSProperties = {
	...brandStyle,
	fontSize: 20,
};

const navStyle: React.CSSProperties = {
	display: "flex",
	gap: 32,
	fontWeight: 600,
	fontSize: 17,
	color: "#23223B",
	fontFamily: 'Montserrat, sans-serif',
};

const mobileMenuStyle: React.CSSProperties = {
	position: "fixed",
	top: 56,
	left: 0,
	right: 0,
	background: "#f4f7fb",
	borderBottom: "1.5px solid #e6eaf2",
	boxShadow: "0 4px 12px #0001",
	padding: "20px 16px",
	zIndex: 99,
};

const mobileNavStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "column",
	gap: 16,
	fontWeight: 600,
	fontSize: 16,
	color: "#23223B",
	fontFamily: 'Montserrat, sans-serif',
};

export default function NavigationHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMobile = useIsMobile();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const headerHeight = 56;
			const elementPosition = element.offsetTop - headerHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			});
		}
		setIsMenuOpen(false);
	};

	return (
		<>
			<header style={isMobile ? headerStyle : headerStyleDesktop}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<img src={logo} alt="Workly logo" style={logoStyle} />
					<span style={isMobile ? brandStyleMobile : brandStyle}>Workly</span>
				</div>
				{isMobile ? (
					<button
						onClick={toggleMenu}
						style={{
							background: "transparent",
							border: "none",
							color: "#23223B",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: 8,
						}}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
					</button>
				) : (
					<nav style={navStyle}>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('home')}>Inicio</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('propuesta')}>Propuesta</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('funciones')}>Funciones</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('industrias')}>Industrias</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('contacto')}>Contacto</span>
					</nav>
				)}
			</header>
			{isMobile && isMenuOpen && (
				<div style={mobileMenuStyle}>
					<nav style={mobileNavStyle}>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('home')}>Inicio</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('propuesta')}>Propuesta</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('funciones')}>Funciones</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('industrias')}>Industrias</span>
						<span className="hover-scale" style={{ cursor: "pointer" }} onClick={() => scrollToSection('contacto')}>Contacto</span>
					</nav>
				</div>
			)}
		</>
	);
}
