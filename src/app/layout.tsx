import "./globals.css";
import type { Metadata } from "next";

import { Courier_Prime } from "next/font/google";

import Background from "@/layout/core/Background/Component";

const appFont = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ing. EML",
  description: "Eduardo Muñoz López, Ingeniero de Software de México",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={appFont.className}>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
