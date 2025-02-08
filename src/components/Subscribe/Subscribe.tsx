"use client";
import Image from "next/image";
import styles from "../HeroComponent/HeroComponent.module.css";
import { Row, Form, Col, FloatingLabel, Button, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const [selected, setSelected] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	// Load API Key & List ID from ENV
	const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
	const BREVO_LIST_ID = process.env.NEXT_PUBLIC_BREVO_LIST_ID;
	const BREVO_SENDER_EMAIL = process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL;

	// Form Submission Handler
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(null);

		// Validation
		if (!email.trim() || !selected.trim()) {
			setError("Please fill in both fields.");
			return;
		}

		// Prepare Data for Brevo Contact API
		const contactData = {
			email: email,
			attributes: { ROLE: selected },
			listIds: [Number(BREVO_LIST_ID)],
			updateEnabled: true,
		};

		try {
			// Step 1: Add Contact to Brevo
			const response = await fetch("https://api.brevo.com/v3/contacts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"api-key": BREVO_API_KEY as string,
				},
				body: JSON.stringify(contactData),
			});

			if (response.ok) {
				// Step 2: Send Welcome Email
				await sendEmail(email);
				setSuccess("Successfully joined! Check your email.");
				setEmail("");
				setSelected("");
				setLoading(false)
			} else {
				const data = await response.json();
				setError(data.message || "Something went wrong. Try again.");
				setLoading(false)
			}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			setError("Failed to connect. Please try again.");
		}
	};

	// Function to Send an Email via Brevo SMTP
	const sendEmail = async (recipientEmail: string) => {
		const emailData = {
			sender: { name: "Grapplers Connect", email: BREVO_SENDER_EMAIL },
			to: [{ email: recipientEmail }],
			subject: "Welcome to Our Community!",
			htmlContent: `<p>Hi,</p>
				<p>We're excited to have you as part of our growing community! Get ready to connect with elite grapplers and coaches.</p>
				<p>See you inside!</p>
				<p>Best, Jordan from Grapplers Connect</p>`,
		};

		try {
			const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"api-key": BREVO_API_KEY as string,
				},
				body: JSON.stringify(emailData),
			});

			if (!emailResponse.ok) {
				const data = await emailResponse.json();
				console.error("Error sending email:", data.message);
			}
		} catch (error) {
			console.error("Error sending email with Brevo:", error);
		}
	};

	return (
		<div className={styles.subscribeContainer} id="becomeapart">
			<Image
				src="/background.jpg"
				alt="Background"
				fill
				className={styles.background}
			/>

			<div className={styles.subscribeOverlay}>
				<h1 className={styles.subscribeHeader}>
					BECOME PART OF THE COMMUNITY
				</h1>
				<div className={styles.formContainer}>
					<Form
						onSubmit={handleSubmit}
						style={{ width: "-webkit-fill-available" }}
					>
						<Row
							className="g-2"
							style={{ width: "-webkit-fill-available" }}
						>
							<Col xs={8}>
								<FloatingLabel
									controlId="floatingInputGrid"
									label="Your email"
									className={styles.inputField}
								>
									<Form.Control
										type="email"
										placeholder="name@example.com"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										required
									/>
								</FloatingLabel>
							</Col>
							<Col xs>
								<FloatingLabel
									controlId="floatingSelectGrid"
									label="I am a(n)"
									className={styles.inputField}
								>
									<Form.Select
										aria-label="Floating label select example"
										value={selected}
										onChange={(e) =>
											setSelected(e.target.value)
										}
										required
									>
										<option
											value=""
											disabled
											hidden
										></option>
										<option value="Coach">Coach</option>
										<option value="Athlete">Athlete</option>
									</Form.Select>
								</FloatingLabel>
							</Col>
						</Row>
						<Button
							className={styles.fullWidthButton}
							type="submit"
							disabled={loading}
						>
							{loading? <Spinner /> : 'Join to Get Early Access'}
						</Button>
					</Form>
					{error && <Alert variant="danger">{error}</Alert>}
					{success && <Alert variant="success">{success}</Alert>}
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
