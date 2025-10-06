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
		}, 4000); // más lento
		return () => clearInterval(interval);
	}, [images.length]);

	// Funciones para navegación
	const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
	const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

	return (
		<div style={{ background: "#f4f7fb", width: "100vw", height: "80vh", boxSizing: "border-box", overflow: "hidden", display: "flex", flexDirection: "column" }}>
			{/* Carrousel */}
			<div style={{ width: "100vw", height: "80vh", maxHeight: 520, minHeight: 320, position: "relative", overflow: "hidden", margin: "0 auto", zIndex: 2 }}>
				{/* Flecha izquierda */}
				<button onClick={goPrev} aria-label="Anterior"
					style={{
						position: "absolute",
						top: "50%",
						left: 16,
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
							fontSize: 32,
							color: "#fff",
							filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.8))",
							}} />
				</button>

				{/* Flecha derecha */}
				<button
					onClick={goNext}
					aria-label="Siguiente"
					style={{
						position: "absolute",
						top: "50%",
						right: 16,
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
							fontSize: 32,
							color: "#fff",
							filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.8))",
						}}
					/>
				</button>

				<div
					style={{
						display: "flex",
						transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
						transform: `translateX(-${current * 100}vw)`,
						width: `${images.length * 100}vw`,
						height: "100%",
					}}
				>
					{images.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`slide ${idx + 1}`}
							style={{
								width: "100vw",
								height: "80vh",
								maxHeight: 520,
								minHeight: 320,
								objectFit: "cover",
								flexShrink: 0,
								flexGrow: 0,
							}}
						/>
					))}
				</div>

				{/* Dots */}
				<div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 12, zIndex: 3 }}>
					{images.map((_, idx) => (
						<span
							key={idx}
							style={{
								width: 8,
								height: 8,
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
			<div style={{ display: "flex", justifyContent: "center", marginTop: 20, position: "relative", zIndex: 4 }}>
				<span style={{ display: "inline-block", color: "#3B2580", fontSize: 24 }}>
					<IoChevronDown />
				</span>
			</div>
		</div>
	);
}
