import React, { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logoWorkly.svg";
import { useScrollSpy, scrollToSection as scrollToSectionUtil } from "../hooks/useScrollSpy";
import "./navigation.css";

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

// Configuración de navegación
const NAV_SECTIONS = [
	{ id: 'home', label: 'Inicio' },
	{ id: 'problematica', label: 'Problemática' },
	{ id: 'solucion', label: 'Solución' },
	{ id: 'faq', label: 'FAQ' },
	{ id: 'contacto', label: 'Contacto' }
];

export default function NavigationHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [manualActiveSection, setManualActiveSection] = useState(null);
	const [isScrolling, setIsScrolling] = useState(false);
	const isMobile = useIsMobile();
	
	// Usar el hook de scroll spy para detectar la sección activa
	const scrollSpyActiveSection = useScrollSpy(
		NAV_SECTIONS.map(section => section.id),
		{
			rootMargin: '-20% 0px -35% 0px',
			threshold: [0, 0.25, 0.5, 0.75, 1]
		}
	);
	
	// Usar la sección manual si está disponible y estamos scrolleando, sino usar scroll spy
	const activeSection = isScrolling ? manualActiveSection : scrollSpyActiveSection;

	// Detectar scroll para cambiar estilo del header
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const handleScrollToSection = (sectionId) => {
		console.log(`🎯 Navegando a: ${sectionId}`);
		
		// Establecer inmediatamente la sección activa
		setManualActiveSection(sectionId);
		setIsScrolling(true);
		
		const element = document.getElementById(sectionId);
		if (!element) {
			console.error(`❌ Elemento "${sectionId}" no encontrado`);
			return;
		}
		
		const headerOffset = isMobile ? 60 : 70;
		const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = elementPosition - headerOffset;
		
		console.log(`✅ Scroll a posición: ${offsetPosition}`);
		
		// Usar scrollTo con smooth behavior
		window.scrollTo({
			top: offsetPosition,
			left: 0,
			behavior: 'smooth'
		});
		
		// Después de 1 segundo, volver a usar scroll spy
		setTimeout(() => {
			setIsScrolling(false);
			setManualActiveSection(null);
		}, 1000);
		
		setIsMenuOpen(false);
	};

	return (
		<>
			<header className={`navigation-header ${!isMobile ? 'navigation-header-desktop' : ''} ${isScrolled ? 'scrolled' : ''}`}>
				<button 
					type="button"
					className="nav-brand"
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						console.log(`🖱️ Click en logo`);
						handleScrollToSection('home');
					}}
					aria-label="Ir a inicio"
				>
					<img src={logo} alt="Workly logo" className="nav-logo" />
					<span className={`nav-brand-text ${isMobile ? 'nav-brand-text-mobile' : ''}`}>
						Workly
					</span>
				</button>
				
				{isMobile ? (
					<button
						onClick={toggleMenu}
						className="mobile-menu-button"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
					</button>
				) : (
					<nav className="nav-desktop">
						{NAV_SECTIONS.map((section) => (
							<button
								key={section.id}
								type="button"
								className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									console.log(`🖱️ Click detectado en: ${section.label}`);
									handleScrollToSection(section.id);
								}}
								aria-label={`Ir a ${section.label}`}
								aria-current={activeSection === section.id ? 'page' : undefined}
								data-text={section.label}
							>
								<span>{section.label}</span>
							</button>
						))}
					</nav>
				)}
			</header>
			
			{isMobile && isMenuOpen && (
				<div className="mobile-menu">
					<nav className="mobile-nav">
						{NAV_SECTIONS.map((section) => (
							<button
								key={section.id}
								type="button"
								className={`mobile-nav-item ${activeSection === section.id ? 'active' : ''}`}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									console.log(`🖱️ Click móvil detectado en: ${section.label}`);
									handleScrollToSection(section.id);
								}}
								aria-label={`Ir a ${section.label}`}
								aria-current={activeSection === section.id ? 'page' : undefined}
							>
								{section.label}
							</button>
						))}
					</nav>
				</div>
			)}
		</>
	);
}
