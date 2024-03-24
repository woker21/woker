import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu  from "./components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woker",
  description: "Creado por Woker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>

        <Menu/>
        {children}
      </body>
    </html>
  );
}
