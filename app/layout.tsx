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
  weight: ['400','600','700'],
  variable: "--font-poppins",
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://animeshprajapati.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f1620',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Animesh Kumar | Digital Marketing & Web Development Expert",
    template: "%s | Animesh Kumar",
  },
  description: "Animesh Kumar is a skilled digital marketer and web developer specializing in SEO, social media marketing, web development, graphic design, and advertisement services. Transform your business online.",
  keywords: [
    "digital marketing",
    "web development",
    "graphic design",
    "SEO expert",
    "social media marketing",
    "web developer",
    "React developer",
    "Next.js developer",
    "freelance developer",
    "advertisement",
    "brand design",
    "UI/UX design",
    "Animesh Kumar",
  ],
  authors: [{ name: "Animesh Kumar", url: siteUrl }],
  creator: "Animesh Kumar",
  publisher: "Animesh Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Animesh Kumar Portfolio",
    title: "Animesh Kumar | Digital Marketing & Web Development Expert",
    description: "Transform your business with expert digital marketing, web development, graphic design, and advertisement services. 50+ projects completed with 100% client satisfaction.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Animesh Kumar - Digital Marketing & Web Development Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animesh Kumar | Digital Marketing & Web Development Expert",
    description: "Transform your business with expert digital marketing, web development, graphic design, and advertisement services.",
    images: ["/og-image.png"],
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
  '@type': 'Person',
  name: 'Animesh Kumar',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    'https://www.linkedin.com/in/aniixdigital',
    'https://www.instagram.com/aniixdigital',
    'https://www.facebook.com/aniixdigital',
  ],
  jobTitle: 'Digital Marketing Expert & Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description: 'Skilled digital marketer and web developer specializing in SEO, social media marketing, web development, graphic design, and advertisement services.',
  knowsAbout: ['Digital Marketing', 'Web Development', 'Graphic Design', 'SEO', 'Social Media Marketing', 'Advertisement'],
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
