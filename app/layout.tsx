import type { Metadata, Viewport } from "next";
import { Urbanist,Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: 'swap',
});

const poppins= Poppins({
  weight: ['300','400','600','700'],
  variable: "--font-poppins",
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f1620',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "https://www.aniixdigital.com"),
  title: {
    default: "AniixDigital | Digital Marketing, Graphic Design & No-Code Web Development",
    template: "%s | AniixDigital",
  },
  description: "Aniixdigital is a digital marketing, graphic design, and no-code web development agency founded by Animesh Kumar. Expert SEO, branding, and creative solutions for your business.",
  keywords: [
    "aniixdigital",
    "digital marketing",
    "web development",
    "graphic design",
    "SEO expert",
    "social media marketing",
    "web developer",
    "WordPress developer",
    "Wix developer",
    "no-code web development",
    "advertisement",
    "brand design",
    "logo design",
    "Animesh Kumar",
    "agency",
  ],
  authors: [{ name: "Aniixdigital (Animesh Kumar, Founder)", url: siteUrl }],
  creator: "Aniixdigital",
  publisher: "Aniixdigital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AniixDigital",
    title: "AniixDigital | Digital Marketing, Graphic Design & No-Code Web Development",
    description: "Grow your business with AniixDigital: digital marketing, graphic design, and no-code web development agency founded by Animesh Kumar. 50+ projects completed with 100% client satisfaction.",
    images: [
          {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "AniixDigital - Digital Marketing, Graphic Design & No-Code Web Development",
          },
        ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AniixDigital | Digital Marketing, Graphic Design & No-Code Web Development",
    description: "Grow your business with AniixDigital: digital marketing, graphic design, and no-code web development agency founded by Animesh Kumar.",
    images: ["/og-image.png"],
      images: ["/og-image.jpg"],
    creator: "@aniixdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aniixdigital',
  url: siteUrl,
  logo: `${siteUrl}/og-image.png`,
    logo: `${siteUrl}/og-image.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/aniixdigital',
    'https://www.instagram.com/aniixdigital',
    'https://www.facebook.com/aniixdigital',
  ],
  founder: {
    '@type': 'Person',
    name: 'Animesh Kumar',
    url: siteUrl,
  },
  description: 'Aniixdigital is a digital marketing, graphic design, and no-code web development agency founded by Animesh Kumar. Expert SEO, branding, and creative solutions for your business.',
  knowsAbout: ['Digital Marketing', 'Web Development', 'Graphic Design', 'SEO', 'Social Media Marketing', 'No-Code Web Development', 'Advertisement'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload animesh.webp for faster LCP */}
        <link rel="preload" as="image" href="/animesh.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${urbanist.className} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
