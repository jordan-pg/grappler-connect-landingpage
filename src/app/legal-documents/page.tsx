"use client";
import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../../components/HeroComponent/HeroComponent.module.css";

const documents = [
  {
    name: "EULA",
    file: "/GrapplersConnectEULA.pdf",
  },
  {
    name: "Community Guidelines",
    file: "/GrapplersConnect Community Guidelines.pdf",
  },
  {
    name: "Cookie Policy",
    file: "/GrapplersConnect COOKIE POLICY.pdf",
  },
  {
    name: "Disclaimer",
    file: "/GrapplersConnect DISCLAIMER.pdf",
  },
  {
    name: "DPA",
    file: "/GrapplersConnect DPA.pdf",
  },
  {
    name: "Privacy Policy",
    file: "/GrapplersConnect PRIVACY POLICY.pdf",
  },
  {
    name: "Refund Policy",
    file: "/GrapplersConnect Refund Policy.pdf",
  },
  {
    name: "SCC",
    file: "/GrapplersConnect SCC.pdf",
  },
  {
    name: "Terms for Coaches",
    file: "/GrapplersConnect Terms for Coaches.pdf",
  },
  {
    name: "Terms of Service",
    file: "/GrapplersConnect TERMS OF SERVICE.pdf",
  },
];

export default function Documents() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        unoptimized
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      {/* Content Area */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <h1 className={styles.header}>
          Legal Documents
        </h1>
        {documents.map((doc, index) => (
          <div key={index} style={{ margin: "1rem 0" }}>
            <Button
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fullWidthButton}
              style={{minWidth: "280px"}}
            >
              {doc.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
