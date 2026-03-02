import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mask-image.sandipmandal.me/";
const siteTitle = "Mask Image Library — CSS mask-image & mask-composite Components";
const siteDescription =
  "A collection of beautiful, interactive UI components showcasing CSS mask-image and mask-composite properties. Explore gradient masks, shape masks, holographic effects, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Mask Image Library",
  },
  description: siteDescription,
  keywords: [
    "mask-image",
    "mask composite",
    "CSS masking",
    "CSS gradients",
    "UI components",
    "Framer Motion demos",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: "Sandip Mandal",
      url: "https://github.com/SandipM03",
    },
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Mask Image Library",
    images: [
      {
        url: `${siteUrl}/mask-image-library-og.png`,
        width: 1200,
        height: 630,
        alt: "Mask Image Library preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "Sandip Mandal",
    images: [`${siteUrl}/mask-image-library-og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
