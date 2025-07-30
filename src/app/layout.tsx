import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darrenzhang.dev"),
  title: "Darren Zhang - Software Engineer",
  description: "Software Engineer based in NYC with experience at Amazon and Capital One. Math + CS from Carnegie Mellon University. Passionate about building solutions to everyday problems.",
  keywords: ["software engineer", "developer", "NYC", "Amazon", "Capital One", "Carnegie Mellon", "full-stack", "React", "TypeScript", "Python", "AWS"],
  authors: [{ name: "Darren Zhang" }],
  creator: "Darren Zhang",
  publisher: "Darren Zhang",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darrenzhang.dev",
    siteName: "Darren Zhang - Software Engineer",
    title: "Darren Zhang - Software Engineer",
    description: "Software Engineer based in NYC with experience at Amazon and Capital One. Math + CS from Carnegie Mellon University.",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Darren Zhang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Zhang - Software Engineer",
    description: "Software Engineer based in NYC with experience at Amazon and Capital One. Math + CS from Carnegie Mellon University.",
    images: ["/images/profile.png"],
  },
  alternates: {
    canonical: "https://darrenzhang.dev",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Darren Zhang",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer based in NYC with experience at Amazon and Capital One. Math + CS from Carnegie Mellon University.",
    "url": "https://darrenzhang.dev",
    "image": "https://darrenzhang.dev/images/profile.png",
    "email": "darrenzhang905@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Carnegie Mellon University"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Amazon"
      },
      {
        "@type": "Organization",
        "name": "Capital One"
      }
    ],
    "sameAs": [
      "https://github.com/darrenzhang905",
      "https://linkedin.com/in/darrenzhang905"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/profile.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
