import HeroComponent from "@/components/HeroComponent/HeroComponent";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Join from "@/components/Join/Join";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Testimonials from "@/components/Testimonials/Testimonials";
import Subscribe from "@/components/Subscribe/Subscribe";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<Header />
				<HeroComponent />
				<Join />
				<HowItWorks />
				<Testimonials />
				<Subscribe />
				<footer className={styles.footer}>
					© Grapplers Connect 2025.{" "}
					<Link
						href="/legal-documents"
						style={{
							// color: "#0070f3",
							fontSize: 12,
							textDecoration: "underline",
						}}
					>
						Legal Documents (Privacy Policy, Terms of Service, etc.)
					</Link>
				</footer>
			</main>
		</div>
	);
}
