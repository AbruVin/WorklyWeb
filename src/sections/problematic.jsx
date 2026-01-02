import React, { useState, useEffect, useRef } from "react";
import {
	IoBusiness,
	IoBriefcase,
	IoTimeOutline,
	IoPieChartOutline,
	IoChevronForward,
	IoChevronBack
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

// Card component that reproduces the visual from the attached image
function SlideCard({ isMobile, LabelIcon, label, pastelBg, Icon, iconColor, children }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
	<div
	  onMouseEnter={() => setIsHovered(true)}
	  onMouseLeave={() => setIsHovered(false)}
	  style={{
		background: "#F8F9FC",
		borderRadius: 18,
		padding: isMobile ? "28px 20px" : "36px 36px",
		boxShadow: isHovered ? "0 12px 32px rgba(0, 0, 0, 0.12)" : "0 6px 18px rgba(13, 30, 60, 0.06)",
		border: "1px solid rgba(0,0,0,0.04)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 20,
		position: "relative",
		minHeight: isMobile ? "auto" : 240,
		transition: "all 0.3s ease",
		transform: isHovered ? "translateY(-8px)" : "translateY(0)",
		cursor: "pointer"
	  }}
	>
	  <div style={{ position: "absolute", left: 18, top: 18, display: "flex", alignItems: "center", gap: 8, color: "#9AA0B4", fontSize: 13, fontFamily: "Montserrat" }}>
		<LabelIcon size={14} />
		<span>{label}</span>
	  </div>

	  <div style={{ width: isMobile ? 64 : 80, height: isMobile ? 64 : 80, borderRadius: 12, background: pastelBg, display: "flex", alignItems: "center", justifyContent: "center", marginTop: isMobile ? 6 : 12 }}>
		<Icon size={isMobile ? 34 : 42} color={iconColor} />
	  </div>

	  <div style={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: 700, color: "#222", fontSize: isMobile ? 16 : 18, lineHeight: 1.35, padding: "0 12px" }}>
		{children}
	  </div>
	</div>
  );
}

export default function Problematic() {
	const isMobile = useIsMobile();
	const [currentSlide, setCurrentSlide] = useState(1); // start centered
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setIsVisible(true);
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => {
			if (sectionRef.current) observer.unobserve(sectionRef.current);
		};
	}, []);

	const slides = [
		{
			key: "emp",
			labelIcon: IoBusiness,
			label: "Empresas",
			pastelBg: "#F8E9FF",
			Icon: IoTimeOutline,
			iconColor: "#4B1C84",
			content: (
				<>
					Los <span style={{ color: "#4B1C84" }}>reclutadores</span> pasan entre <span style={{ color: "#582696ff" }}>30 minutos</span> y <span style={{ color: "#6e26c5ff" }}>2 horas</span> leyendo currículums
				</>
			)
		},
		{
			key: "rec",
			labelIcon: IoBriefcase,
			label: "Profesionales",
			pastelBg: "#EEF2FF",
			Icon: IoPieChartOutline,
			iconColor: "#000B81",
			content: (
				<>
					<span style={{ color: "#000B81" }}>7</span> de cada <span style={{ color: "#0f1a8fff" }}>10</span> personas tienen <span style={{ color: "#1622a3ff" }}>dificultades</span> para <span style={{ color: "#472e92ff" }}>encontrar </span> <span style={{ color: "#3734b4ff" }}>trabajo</span>				</>
			)
		},
		{
			key: "emp-2",
			labelIcon: IoBriefcase,
			label: "Empresas",
			pastelBg: "#FCEAF8",
			Icon: IoTimeOutline,
			iconColor: "#4B1C84",
			content: (
				<>
					Los <span style={{ color: "#3B2580" }}>reclutadores</span> pasan entre <span style={{ color: "#3B2580" }}>30 minutos</span> y <span style={{ color: "#3B2580" }}>2 horas</span> leyendo currículums
				</>
			)
		}
	];

	const goNext = () => {
		setCurrentSlide((p) => (p === slides.length - 1 ? 1 : p + 1));
	};
	const goPrev = () => {
		setCurrentSlide((p) => (p === 0 ? 1 : p - 1));
	};

	return (
		<div
			id="problematica"
			ref={sectionRef}
			style={{
				width: "100%",
				minHeight: isMobile ? "auto" : 480,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				background: "#f4f7fb",
				padding: isMobile ? "28px 20px 40px" : "48px 20px 60px",
				boxSizing: "border-box"
			}}
		>
			<div style={{ textAlign: "center", marginBottom: isMobile ? 20 : 28, maxWidth: 900 }}>
				<h2 style={{ fontSize: isMobile ? 22 : 32, fontWeight: 800, color: "#222222", fontFamily: "Montserrat", margin: 0, marginBottom: 12 }}>
					Encontramos una <span style={{ color: "#3B2580" }}>problemática</span>
				</h2>
				<p style={{ fontSize: isMobile ? 16 : 18, color: "#666", maxWidth: 600, margin: "0 auto", marginBottom: 20, fontFamily: "Montserrat"}}>
					El sistema de reclutamiento actual necesita actualizarse.
				</p>
			</div>

			{isMobile ? (
				<div style={{ width: "100%", maxWidth: 680, display: "flex", flexDirection: "column", alignItems: "center" }}>
					{slides[currentSlide] && (
						<SlideCard
							isMobile={isMobile}
							LabelIcon={slides[currentSlide].labelIcon}
							label={slides[currentSlide].label}
							pastelBg={slides[currentSlide].pastelBg}
							Icon={slides[currentSlide].Icon}
							iconColor={slides[currentSlide].iconColor}
						>
							{slides[currentSlide].content}
						</SlideCard>
					)}

					<div style={{ display: "flex", gap: 14, marginTop: 20, alignItems: "center" }}>
						<button onClick={goPrev} style={{ background: "#3B2580", border: "none", borderRadius: 20, width: 40, height: 40, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
							<IoChevronBack size={18} />
						</button>
						<div style={{ display: "flex", gap: 8 }}>
							{slides.map((_, idx) => (
								<span key={idx} onClick={() => setCurrentSlide(idx)} style={{ width: 8, height: 8, borderRadius: "50%", background: idx === currentSlide ? "#3B2580" : "#d9dcee", display: "inline-block", cursor: "pointer" }} />
							))}
						</div>
						<button onClick={goNext} style={{ background: "#3B2580", border: "none", borderRadius: 20, width: 40, height: 40, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
							<IoChevronForward size={18} />
						</button>
					</div>
				</div>
			) : (
				<div style={{ width: "100%", maxWidth: 1200, display: "flex", gap: 36, justifyContent: "center" }}>
					<div style={{ flex: 1, maxWidth: 560 }}>
						<SlideCard isMobile={isMobile} LabelIcon={slides[0].labelIcon} label={slides[0].label} pastelBg={slides[0].pastelBg} Icon={slides[0].Icon} iconColor={slides[0].iconColor}>
							{slides[0].content}
						</SlideCard>
					</div>

					<div style={{ flex: 1, maxWidth: 560 }}>
						<SlideCard isMobile={isMobile} LabelIcon={slides[1].labelIcon} label={slides[1].label} pastelBg={slides[1].pastelBg} Icon={slides[1].Icon} iconColor={slides[1].iconColor}>
							{slides[1].content}
						</SlideCard>
					</div>
				</div>
			)}
		</div>
	);
}