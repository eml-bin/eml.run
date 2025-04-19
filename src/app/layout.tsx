import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/core/Background/Component";

export const metadata: Metadata = {
  title: "Ing. EML",
  description: "Eduardo Muñoz López, Ingeniero de Software",
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
    <html lang="en">
      <body>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
