// pages/success.js
import React from "react";
import Image from "next/image";

export default function Success() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				textAlign: "center",
				backgroundColor: "white",
				color: "#143642",
			}}
		>
			{/* Replace '/logo.png' with the path to your logo in the public folder */}
			<Image
				src="/logo-center.png"
				alt="Logo"
				width={300}
				height={60}
				unoptimized
				style={{ marginBottom: "20px" }}
			/>
			<p style={{ padding: 16 }}>
				Your account has been connected with Stripe successfully.
				<br /> Return to the app by clicking done in the top left hand
				corner.
			</p>
		</div>
	);
}
