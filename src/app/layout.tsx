import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: { default: "DDSR | Ropa deportiva", template: "%s | DDSR" },
  description: "DDSR: tienda de prendas deportivas para entrenar con estilo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={barlow.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}