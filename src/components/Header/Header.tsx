"use client";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{!scrolled && (
				<div className={styles.initialLogoOverlay}>
					<Image
						src="/logo-center.png"
						alt="Centered Logo"
						width={260}
						height={50}
						unoptimized
					/>
				</div>
			)}

			<Navbar
				fixed="top"
				expand="lg"
				className={
					scrolled ? styles.navbarScrolled : styles.navbarTransparent
				}
			>
				<Container>
					{scrolled && (
						<>
							<Navbar.Brand className={styles.brand}>
								<Image
									src="/logo-center.png"
									alt="Navbar Logo"
									width={180}
									height={36}
									unoptimized
								/>
							</Navbar.Brand>
							<Navbar.Toggle
								aria-controls="responsive-navbar-nav"
								className={styles.navbartoggler}
							/>
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="ms-auto" navbarScroll>
									<Nav.Link href="#home">Home</Nav.Link>
									<Nav.Link href="#whyjoin">Why Join</Nav.Link>
									<Nav.Link href="#howitworks">
										How It Works
									</Nav.Link>
									<Nav.Link href="#testimonials">Testimonials</Nav.Link>
									<Nav.Link href="#becomeapart">Become a Part</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</>
					)}
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
