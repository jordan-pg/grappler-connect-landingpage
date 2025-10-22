/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function SupportPage() {
  useEffect(() => {
    // Declare globals early for best Tawk.to behavior
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67bd81a778fce4190b5b7097/1iku44tcu';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: 'url("/background.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#143642',
        padding: 16,
      }}
    >
      <Image
        src="/logo-center.png" // Replace with your actual logo path
        alt="Grapplers Connect Logo"
        width={300}
        height={60}
        unoptimized
        style={{ marginBottom: '20px' }}
      />
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: 20,
          borderRadius: 8,
          maxWidth: 400,
        }}
      >
        <p style={{ marginBottom: 8 }}>
          Live chat support is available in the bottom corner.
        </p>
        <p>
          If you prefer email, reach out to{' '}
          <a
            href="mailto:jordan@grapplersconnect.com"
            style={{ color: '#143642', fontWeight: 'bold' }}
          >
            jordan@grapplersconnect.com
          </a>
        </p>
      </div>
    </div>
  );
}
