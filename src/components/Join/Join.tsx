"use client";
import Image from "next/image";
import styles from "./Join.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Join = () => {
	return (
		<section className={styles.joinSection} id="whyjoin">
			<Container className={styles.content}>
				<Row className="align-items-center">
					<Col lg={6} className={styles.imageContainer}>
						<Image
							src="/phone-mockup.svg"
							alt="App Preview"
							width={350}
							height={700}
							className={styles.phoneImage}
						/>
					</Col>

					<Col lg={6}>
						<h2 className={styles.heading}>Why Join?</h2>
						<ul className={styles.featuresList}>
							<li>
								<strong>Personalized Coaching</strong>
								<p>
									One-on-one sessions to match your skill
									level and goals.
								</p>
							</li>
							<li>
								<strong>Expert Coaches</strong>
								<p>
									Access a network of seasoned professionals
									with proven competitive experience
									worldwide.
								</p>
							</li>
							<li>
								<strong>Flexible Scheduling</strong>
								<p>
									Schedule sessions at times that suit your
									busy lifestyle.
								</p>
							</li>
							<li>
								<strong>Transparent Pricing</strong>
								<p>
									Coaches set their prices, with no hidden
									fees.
								</p>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Join;
