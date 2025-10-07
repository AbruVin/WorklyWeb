
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

// Componente NavButton para manejar mejor los estilos
const NavButton = ({ isActive, onClick, children, isMobile = false }) => {
	const [isHovered, setIsHovered] = useState(false);

	const baseStyle = {
		cursor: "pointer",
		padding: isMobile ? "12px 16px" : "8px 12px",
		transition: "all 0.3s ease",
		background: "none",
		border: "none",
		fontFamily: 'Montserrat, sans-serif',
		fontSize: isMobile ? "16px" : "17px",
		outline: "none",
		boxShadow: "none",
		textAlign: isMobile ? "left" : "center",
		width: isMobile ? "100%" : "auto"
	};

	const activeStyle = {
		color: "#6B46C1",
		fontWeight: 700,
		borderBottom: isMobile ? "none" : "3px solid #6B46C1",
		borderLeft: isMobile ? "4px solid #6B46C1" : "none"
	};

	const inactiveStyle = {
		color: isHovered ? "#6B46C1" : "#23223B",
		fontWeight: 600,
		borderBottom: isMobile ? "none" : "3px solid transparent",
		borderLeft: isMobile ? "4px solid transparent" : "none"
	};

	const finalStyle = {
		...baseStyle,
		...(isActive ? activeStyle : inactiveStyle)
	};

	return (
		<button
			style={finalStyle}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			type="button"
		>
			{children}
		</button>
	);
};

export default function NavigationHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const isMobile = useIsMobile();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const scrollToSection = (sectionId) => {
		console.log(`Intentando navegar a: ${sectionId}`);
		
		// Actualizar sección activa inmediatamente para feedback visual
		setActiveSection(sectionId);
		
		// Buscar el elemento con un pequeño delay para asegurar que se encuentra
		setTimeout(() => {
			const element = document.getElementById(sectionId);
			
			if (element) {
				console.log(`Elemento encontrado para ${sectionId}`);
				
				// Calcular posición más precisa
				const headerHeight = 80; // Más espacio para compensar el header
				const elementRect = element.getBoundingClientRect();
				const elementTop = elementRect.top + window.pageYOffset;
				const targetPosition = elementTop - headerHeight;
				
				// Hacer scroll suave
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
				
			} else {
				console.log(`No se encontró el elemento: ${sectionId}`);
				// Buscar elementos similares
				const possibleElements = document.querySelectorAll(`[id*="${sectionId}"], .${sectionId}, [data-section="${sectionId}"]`);
				console.log('Elementos similares encontrados:', possibleElements);
				
				// Si no encuentra el elemento exacto, intentar scroll directo por posición
				if (sectionId === 'home') {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				} else if (sectionId === 'problematica') {
					window.scrollTo({ top: 600, behavior: 'smooth' });
				} else if (sectionId === 'solucion') {
					window.scrollTo({ top: 1200, behavior: 'smooth' });
				} else if (sectionId === 'funciones') {
					window.scrollTo({ top: 1800, behavior: 'smooth' });
				} else if (sectionId === 'industrias') {
					window.scrollTo({ top: 2400, behavior: 'smooth' });
				} else if (sectionId === 'contacto') {
					window.scrollTo({ top: 3000, behavior: 'smooth' });
				}
			}
		}, 100);
		
		// Cerrar menú móvil
		setIsMenuOpen(false);
	};

	// Observar secciones para actualizar activo
	useEffect(() => {
		// Debug: listar elementos disponibles cuando el componente se monta
		setTimeout(() => {
			const elementsWithId = document.querySelectorAll('[id]');
			console.log('Elementos con ID disponibles al cargar:', Array.from(elementsWithId).map(el => el.id));
		}, 1000);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: '-100px 0px -50% 0px',
				threshold: 0.1
			}
		);

		// Observar todas las secciones
		const sections = ['home', 'problematica', 'solucion', 'funciones', 'industrias', 'contacto'];
		sections.forEach(id => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
				console.log(`Observando sección: ${id}`);
			} else {
				console.log(`No se pudo observar sección: ${id}`);
			}
		});

		return () => observer.disconnect();
	}, []);

	// Estilos inline para asegurar que funcionen
	const headerStyle = {
		width: "100%",
		position: "fixed",
		left: 0,
		top: 0,
		background: "#f4f7fb",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: isMobile ? "10px 16px" : "10px 40px",
		boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
		borderBottom: "1.5px solid #e6eaf2",
		minHeight: 56,
		boxSizing: "border-box",
		zIndex: 100
	};

	const brandStyle = {
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
		textDecoration: "none"
	};

	const logoStyle = {
		width: 36,
		height: 36,
		marginRight: 10
	};

	const brandTextStyle = {
		fontWeight: 700,
		fontSize: isMobile ? 20 : 22,
		fontFamily: 'Vollkorn, serif',
		fontStyle: 'italic',
		color: '#23223B',
		letterSpacing: 0.7
	};

	const navStyle = {
		display: "flex",
		gap: 32,
		fontWeight: 600,
		fontSize: 17,
		color: "#23223B",
		fontFamily: 'Montserrat, sans-serif'
	};

	const mobileButtonStyle = {
		background: "none",
		border: "none",
		color: "#23223B",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
		minHeight: 44,
		minWidth: 44,
		outline: "none",
		boxShadow: "none"
	};

	const mobileMenuStyle = {
		position: "fixed",
		top: 56,
		left: 0,
		right: 0,
		background: "#f4f7fb",
		borderBottom: "1.5px solid #e6eaf2",
		boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
		padding: "20px 16px",
		zIndex: 99
	};

	const mobileNavStyle = {
		display: "flex",
		flexDirection: "column",
		gap: 12
	};

	return (
		<>
			<header style={headerStyle}>
				<div style={brandStyle} onClick={() => scrollToSection('home')}>
					<img src={logo} alt="Workly logo" style={logoStyle} />
					<span style={brandTextStyle}>Workly</span>
				</div>
				
				{isMobile ? (
					<button
						onClick={toggleMenu}
						style={mobileButtonStyle}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
					</button>
				) : (
					<nav style={navStyle}>
						<NavButton 
							isActive={activeSection === 'home'} 
							onClick={() => scrollToSection('home')}
						>
							Inicio
						</NavButton>
						<NavButton 
							isActive={activeSection === 'problematica'} 
							onClick={() => scrollToSection('problematica')}
						>
							Problemática
						</NavButton>
						<NavButton 
							isActive={activeSection === 'solucion'} 
							onClick={() => scrollToSection('solucion')}
						>
							Solución
						</NavButton>
						<NavButton 
							isActive={activeSection === 'funciones'} 
							onClick={() => scrollToSection('funciones')}
						>
							Funciones
						</NavButton>
						<NavButton 
							isActive={activeSection === 'industrias'} 
							onClick={() => scrollToSection('industrias')}
						>
							Industrias
						</NavButton>
						<NavButton 
							isActive={activeSection === 'contacto'} 
							onClick={() => scrollToSection('contacto')}
						>
							Contacto
						</NavButton>
					</nav>
				)}
			</header>
			
			{isMobile && isMenuOpen && (
				<div style={mobileMenuStyle}>
					<nav style={mobileNavStyle}>
						<NavButton 
							isActive={activeSection === 'home'} 
							onClick={() => scrollToSection('home')}
							isMobile={true}
						>
							Inicio
						</NavButton>
						<NavButton 
							isActive={activeSection === 'problematica'} 
							onClick={() => scrollToSection('problematica')}
							isMobile={true}
						>
							Problemática
						</NavButton>
						<NavButton 
							isActive={activeSection === 'solucion'} 
							onClick={() => scrollToSection('solucion')}
							isMobile={true}
						>
							Solución
						</NavButton>
						<NavButton 
							isActive={activeSection === 'funciones'} 
							onClick={() => scrollToSection('funciones')}
							isMobile={true}
						>
							Funciones
						</NavButton>
						<NavButton 
							isActive={activeSection === 'industrias'} 
							onClick={() => scrollToSection('industrias')}
							isMobile={true}
		>
							Industrias
						</NavButton>
						<NavButton 
							isActive={activeSection === 'contacto'} 
							onClick={() => scrollToSection('contacto')}
							isMobile={true}
						>
							Contacto
						</NavButton>
					</nav>
				</div>
			)}
		</>
	);
}
