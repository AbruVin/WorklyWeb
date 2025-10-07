import React, { useState } from "react";
import { IoMail, IoSend, IoCheckmark, IoLogoInstagram } from "react-icons/io5";

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

export default function Contact() {
	const isMobile = useIsMobile();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: null
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};
		
		if (!formData.name.trim()) {
			newErrors.name = 'El nombre es requerido';
		}
		
		if (!formData.email.trim()) {
			newErrors.email = 'El email es requerido';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Email inválido';
		}
		
		if (!formData.subject.trim()) {
			newErrors.subject = 'El asunto es requerido';
		}
		
		if (!formData.message.trim()) {
			newErrors.message = 'El mensaje es requerido';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!validateForm()) return;

		setIsSubmitting(true);
		
		// Simular envío de formulario
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitStatus('success');
			setFormData({ name: '', email: '', subject: '', message: '' });
			
			// Reset status after 5 seconds
			setTimeout(() => {
				setSubmitStatus(null);
			}, 5000);
		}, 2000);
	};

	const contactInfo = [
		{
			icon: IoMail,
			title: "Email",
			value: "worklybythemath@gmail.com",
			description: "Responderemos en 24 horas"
		},
		{
			icon: IoLogoInstagram,
			title: "Instagram",
			value: "@workly.team",
			description: "Síguenos para novedades",
			url: "https://www.instagram.com/workly.team?igsh=MWlzM3cwb3NldHRqZw%3D%3D&utm_source=qr"
		}
	];

	const InputField = ({ label, name, type = "text", required = true, isTextarea = false }) => (
		<div style={{ marginBottom: 20 }}>
			<label style={{
				display: "block",
				fontSize: 14,
				fontWeight: 600,
				color: "#333",
				marginBottom: 8,
				fontFamily: "Montserrat"
			}}>
				{label} {required && <span style={{ color: "#e74c3c" }}>*</span>}
			</label>
			{isTextarea ? (
				<textarea
					name={name}
					value={formData[name]}
					onChange={handleInputChange}
					rows={4}
					style={{
						width: "100%",
						padding: "12px 16px",
						border: errors[name] ? "2px solid #e74c3c" : "2px solid #e1e1e8",
						borderRadius: 12,
						fontSize: 16,
						fontFamily: "Montserrat",
						resize: "vertical",
						minHeight: 100,
						transition: "border-color 0.3s ease",
						outline: "none",
						color: "#333",
						backgroundColor: "#fff"
					}}
					onFocus={(e) => e.target.style.borderColor = "#3B2580"}
					onBlur={(e) => e.target.style.borderColor = errors[name] ? "#e74c3c" : "#e1e1e8"}
				/>
			) : (
				<input
					type={type}
					name={name}
					value={formData[name]}
					onChange={handleInputChange}
					style={{
						width: "100%",
						padding: "12px 16px",
						border: errors[name] ? "2px solid #e74c3c" : "2px solid #e1e1e8",
						borderRadius: 12,
						fontSize: 16,
						fontFamily: "Montserrat",
						transition: "border-color 0.3s ease",
						outline: "none",
						color: "#333",
						backgroundColor: "#fff"
					}}
					onFocus={(e) => e.target.style.borderColor = "#3B2580"}
					onBlur={(e) => e.target.style.borderColor = errors[name] ? "#e74c3c" : "#e1e1e8"}
				/>
			)}
			{errors[name] && (
				<div style={{
					color: "#e74c3c",
					fontSize: 12,
					marginTop: 4,
					fontFamily: "Montserrat"
				}}>
					{errors[name]}
				</div>
			)}
		</div>
	);

	return (
		<div id="contacto" style={{
			background: "#f8f9fc",
			padding: isMobile ? "40px 20px" : "80px 40px",
			width: "100%"
		}}>
			<div style={{ maxWidth: 1200, margin: "0 auto" }}>
				{/* Header */}
				<div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
					<h2 style={{
						fontSize: isMobile ? 28 : 36,
						fontWeight: 700,
						marginBottom: 16,
						fontFamily: "Montserrat",
						color: "#232323"
					}}>
						Hablemos <span style={{ color: "#3B2580" }}>juntos</span>
					</h2>
					<p style={{
						fontSize: isMobile ? 16 : 18,
						color: "#666",
						maxWidth: 600,
						margin: "0 auto",
						fontFamily: "Montserrat"
					}}>
						¿Tienes preguntas sobre Workly? ¿Quieres una demo personalizada? Estamos aquí para ayudarte.
					</p>
				</div>

				<div style={{
					display: "grid",
					gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
					gap: isMobile ? 40 : 60,
					alignItems: "start"
				}}>
					{/* Contact Info */}
					<div className="animate-fade-in-left">
						<h3 style={{
							fontSize: isMobile ? 22 : 26,
							fontWeight: 600,
							marginBottom: 24,
							fontFamily: "Montserrat",
							color: "#232323"
						}}>
							Información de contacto
						</h3>
						
						<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
							{contactInfo.map((info, index) => (
								<div 
									key={index}
									className="hover-scale"
									style={{
										display: "flex",
										alignItems: "flex-start",
										gap: 16,
										padding: 20,
										background: "#fff",
										borderRadius: 16,
										boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)"
									}}
								>
									<div style={{
										background: "linear-gradient(135deg, #3B2580, #4B1C84)",
										borderRadius: 12,
										padding: 12,
										color: "#fff",
										display: "flex",
										alignItems: "center",
										justifyContent: "center"
									}}>
										<info.icon size={24} />
									</div>
									<div>
										<h4 style={{
											fontSize: 16,
											fontWeight: 600,
											color: "#232323",
											margin: "0 0 4px 0",
											fontFamily: "Montserrat"
										}}>
											{info.title}
										</h4>
										<div style={{
											fontSize: 15,
											fontWeight: 500,
											color: "#3B2580",
											margin: "0 0 4px 0",
											fontFamily: "Montserrat"
										}}>
											{info.url ? (
												<a 
													href={info.url} 
													target="_blank" 
													rel="noopener noreferrer"
													style={{
														color: "#3B2580",
														textDecoration: "none"
													}}
													onMouseOver={(e) => e.target.style.textDecoration = "underline"}
													onMouseOut={(e) => e.target.style.textDecoration = "none"}
												>
													{info.value}
												</a>
											) : (
												info.value
											)}
										</div>
										<div style={{
											fontSize: 13,
											color: "#666",
											fontFamily: "Montserrat"
										}}>
											{info.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<div className="animate-fade-in-right">
						<div style={{
							background: "#fff",
							borderRadius: 20,
							padding: isMobile ? 24 : 32,
							boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
						}}>
							<h3 style={{
								fontSize: isMobile ? 22 : 26,
								fontWeight: 600,
								marginBottom: 24,
								fontFamily: "Montserrat",
								color: "#232323"
							}}>
								Envíanos un mensaje
							</h3>

							{submitStatus === 'success' && (
								<div style={{
									background: "#d4edda",
									color: "#155724",
									padding: 16,
									borderRadius: 12,
									marginBottom: 24,
									display: "flex",
									alignItems: "center",
									gap: 8,
									fontFamily: "Montserrat"
								}}>
									<IoCheckmark size={20} />
									¡Mensaje enviado correctamente! Te responderemos pronto.
								</div>
							)}

							<form onSubmit={handleSubmit}>
								<InputField label="Nombre completo" name="name" />
								<InputField label="Email" name="email" type="email" />
								<InputField label="Asunto" name="subject" />
								<InputField label="Mensaje" name="message" isTextarea />

								<button
									type="submit"
									disabled={isSubmitting}
									className={isSubmitting ? "loading-spinner" : "hover-glow"}
									style={{
										width: "100%",
										background: isSubmitting ? "#ccc" : "linear-gradient(135deg, #3B2580, #4B1C84)",
										color: "#fff",
										border: "none",
										borderRadius: 16,
										padding: "16px 24px",
										fontSize: 16,
										fontWeight: 600,
										cursor: isSubmitting ? "not-allowed" : "pointer",
										fontFamily: "Montserrat",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: 8,
										transition: "all 0.3s ease"
									}}
								>
									{isSubmitting ? (
										"Enviando..."
									) : (
										<>
											<IoSend size={20} />
											Enviar mensaje
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
