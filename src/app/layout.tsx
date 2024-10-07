import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - sua oficina especializada!",
  description: "Oficina de carros do interior de Quaraguatatuba!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <p style={{ textAlign: "center", marginTop: "54", marginBottom: 24 }}>
          Todos direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
