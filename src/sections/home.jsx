import React, { useState, useEffect } from "react";
import img1 from "../assets/homeImgs/imgHomePC1.svg";
import img2 from "../assets/homeImgs/imgHomePC2.svg";
import img3 from "../assets/homeImgs/imgHomePC3.svg";
import img1Cel from "../assets/homeImgs/imgHomeCel1.svg";
import img2Cel from "../assets/homeImgs/imgHomeCel2.svg";
import img3Cel from "../assets/homeImgs/imgHomeCel3.svg";
import "../App.css";
import { IoChevronForward, IoChevronBack, IoChevronDown } from "react-icons/io5";


// Custom hook para detectar si es móvil
function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);
	return isMobile;
}


export default function Home() {
	const [current, setCurrent] = useState(0);
	const isMobile = useIsMobile();
	const images = isMobile
		? [img1Cel, img2Cel, img3Cel]
		: [img1, img2, img3];

	// Slide automático
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [images.length]);

	// Funciones para navegación
	const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
	const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

	return (
		<div id="home" className="professional-fade" style={{ 
			background: "#f4f7fb", 
			width: "100%", 
			height: isMobile ? "calc(100vh - 170px)" : "calc(100vh - 180px)", 
			maxHeight: isMobile ? "calc(100vh - 170px)" : "calc(100vh - 180px)",
			minHeight: isMobile ? "calc(100vh - 170px)" : "calc(100vh - 180px)",
			boxSizing: "border-box", 
			overflow: "hidden", 
			display: "flex", 
			flexDirection: "column",
			paddingTop: 0,
			paddingBottom: isMobile ? 30 : 0,
			marginTop: isMobile ? "52px" : "62px"
		}}>
			{/* Carrousel */}
			<div style={{ 
				width: "100%", 
				height: isMobile ? "calc(100vh - 140px)" : "calc(100vh - 290px)", 
				maxHeight: isMobile ? "calc(100vh - 140px)" : "calc(100vh - 290px)", 
				minHeight: isMobile ? "calc(100vh - 140px)" : "calc(100vh - 290px)", 
				position: "relative", 
				overflow: "hidden",
				zIndex: 2 
			}}>
				{/* Flecha izquierda */}
				<button onClick={goPrev} aria-label="Anterior"
					className="hover-scale"
					style={{
						position: "absolute",
						top: "50%",
						left: isMobile ? 8 : 16,
						transform: "translateY(-50%)",
						background: "transparent",
						border: "none",
						padding: 0,
						cursor: "pointer",
						outline: "none",
						zIndex: 4,
					}}
				>
					<IoChevronBack
						style={{
							fontSize: isMobile ? 28 : 32,
							color: "#fff",
							filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.8))",
							}} />
				</button>

				{/* Flecha derecha */}
				<button
					onClick={goNext}
					aria-label="Siguiente"
					className="hover-scale"
					style={{
						position: "absolute",
						top: "50%",
						right: isMobile ? 8 : 16,
						transform: "translateY(-50%)",
						background: "transparent",
						border: "none",
						padding: 0,
						cursor: "pointer",
						outline: "none",
						zIndex: 4,
					}}
				>
					<IoChevronForward
						style={{
							fontSize: isMobile ? 28 : 32,
							color: "#fff",
							filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.8))",
						}}
					/>
				</button>

				<div
					style={{
						display: "flex",
						transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
						transform: `translateX(-${current * 100}%)`,
						width: `${images.length * 100}%`,
						height: "100%",
					}}
				>
					{images.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`slide ${idx + 1}`}
							className="phone-image"
							style={{
								width: "100%",
								height: "100%",
								maxHeight: "100%",
								minHeight: "100%",
								objectFit: "cover",
								flexShrink: 0,
								flexGrow: 0
							}}
						/>
					))}
				</div>

				{/* Dots */}
				<div className="animate-fade-in-up" style={{ 
					position: "absolute", 
					bottom: isMobile ? 16 : 24, 
					left: 0, 
					right: 0, 
					display: "flex", 
					justifyContent: "center", 
					gap: isMobile ? 8 : 12, 
					zIndex: 3,
					animationDelay: "0.5s"
				}}>
					{images.map((_, idx) => (
						<span
							key={idx}
							className="hover-scale"
							style={{
								width: isMobile ? 6 : 8,
								height: isMobile ? 6 : 8,
								borderRadius: "50%",
								background: idx === current ? "#3B2580" : "#d1d1e0",
								display: "inline-block",
								transition: "background 0.2s",
								cursor: "pointer"
							}}
							onClick={() => setCurrent(idx)}
						/>
					))}
				</div>
			</div>

			{/* Down arrow */}
			<div className="animate-fade-in-up bounce" style={{ 
				display: "flex", 
				justifyContent: "center", 
				marginTop: isMobile ? 12 : 20, 
				position: "relative", 
				zIndex: 4,
				animationDelay: "1s"
			}}>
				<span className="hover-scale" style={{ 
					display: "inline-block", 
					color: "#3B2580", 
					fontSize: isMobile ? 20 : 24,
					cursor: "pointer"
				}}
				onClick={() => {
					document.getElementById('problematic')?.scrollIntoView({ 
						behavior: 'smooth' 
					});
				}}>
					<IoChevronDown />
				</span>
			</div>
		</div>
	);
}
