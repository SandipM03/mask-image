import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mask Image Library — CSS mask-image & mask-composite Components",
  description:
    "A collection of beautiful, interactive UI components showcasing CSS mask-image and mask-composite properties. Explore gradient masks, shape masks, holographic effects, and more.",
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
