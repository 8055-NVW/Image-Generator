import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Generator",
  description: "Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}