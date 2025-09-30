import React, { useState, useEffect } from "react";
import img1 from "../assets/homeImgs/imgHome1.svg";
import img2 from "../assets/homeImgs/imgHome2.svg";
import img3 from "../assets/homeImgs/imgHome3.svg";
import "../App.css";

const images = [img1, img2, img3];


export default function Home() {
	const [current, setCurrent] = useState(0);

	// Slide automático
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 4000); // más lento
		return () => clearInterval(interval);
	}, []);

				// Funciones para navegación
				const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
				const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

				return (
					<div style={{ background: "#f4f7fb", width: "100vw", height: "100vh", boxSizing: "border-box", overflow: "hidden", display: "flex", flexDirection: "column"}}>
						{/* Carrousel */}
						<div style={{ width: "100vw", height: "80vh", maxHeight: 520, minHeight: 320, position: "relative", overflow: "hidden", margin: "0 auto", zIndex: 2 }}>
							{/* Flecha izquierda */}
							<button
								onClick={goPrev}
								aria-label="Anterior"
								style={{
									position: "absolute",
									top: "50%",
									left: 16,
									transform: "translateY(-50%)",
									background: "rgba(0,0,0,0.18)",
									border: "none",
									borderRadius: "50%",
									width: 44,
									height: 44,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									zIndex: 4,
									cursor: "pointer",
									outline: "none",
									padding: 0,
								}}
							>
								{/* Flecha izquierda (rotada) */}
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 14L16 20L22 14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 16 16)" />
								</svg>
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
									background: "rgba(0,0,0,0.18)",
									border: "none",
									borderRadius: "50%",
									width: 44,
									height: 44,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									zIndex: 4,
									cursor: "pointer",
									outline: "none",
									padding: 0,
								}}
							>
								{/* Flecha derecha (rotada) */}
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 14L16 20L22 14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 16 16)" />
								</svg>
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
							<div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 3 }}>
								{images.map((_, idx) => (
									<span
										key={idx}
										style={{
											width: 12,
											height: 12,
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
						<div style={{ display: "flex", justifyContent: "center", marginTop: 24, position: "relative", zIndex: 4 }}>
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 14L16 20L22 14" stroke="#3B2580" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					</div>
				);
}
