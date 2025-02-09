"use client";
import Image from "next/image";
import styles from "../HeroComponent/HeroComponent.module.css";
import {
	Row,
	Form,
	Col,
	FloatingLabel,
	Button,
	Alert,
	Spinner,
} from "react-bootstrap";
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
				setLoading(false);
			} else {
				const data = await response.json();
				setError(data.message || "Something went wrong. Try again.");
				setLoading(false);
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
			subject: "Welcome to Grapplers Connect: Your Journey Begins!",
			htmlContent: `
			  <p>Hello,</p>
			  <p>Thank you for joining the Grapplers Connect waitlist! We're thrilled to welcome you to a community where passion for grappling meets elite coaching.</p>
			  <p>We're hard at work building a platform that will redefine how athletes and coaches connect—breaking down barriers and opening doors to training opportunities like never before.</p>
			  <p>As an early supporter, you'll be the first to receive exclusive updates, sneak peeks, and invitations to our beta launch. In the meantime, stay tuned and be sure to follow us on social media for behind-the-scenes insights and the latest news.</p>
			  <p>Follow us on <a href="http://instagram.com/grapplersconnect/" target="_blank">Instagram</a> for more updates and exclusive content!</p>
			  <p>We can't wait to have you on board as we shape the future of grappling together.</p>
			  <p>Best regards,</p>
			  <p>Jordan Griffin</p>
			  <p>The Grapplers Connect Team</p>
			`,
		};

		try {
			const emailResponse = await fetch(
				"https://api.brevo.com/v3/smtp/email",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"api-key": BREVO_API_KEY as string,
					},
					body: JSON.stringify(emailData),
				}
			);

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
				src="/mat.png"
				alt="mat"
				fill
				className={styles.background}
				unoptimized
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
							{loading ? <Spinner /> : "Join to Get Early Access"}
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
