import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expérience Tech SARL | Formation en Informatique",
  description: "Centre de formation en informatique offrant des cours en ligne de qualité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gradient-to-r from-cyan-500 via-teal-400 to-amber-300 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
