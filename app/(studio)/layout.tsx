import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BYO Estética Avançada",
    template: "%s | BYO",
  },
  description:
    "Clínica BYO Estética avançada é uma empresa prestadora de serviços que oferece tratamentos rápidos ou terapêuticos que objetivam a reabilitação ou melhora estética e da saúde dos clientes, por meio da aplicação de cosméticos e de terapias diversas",
  metadataBase: new URL("https://byoestetica.com.br/"),
  openGraph: {
    title: "BYO Estética Avançada",
    description:
      "Clínica BYO Estética avançada é uma empresa prestadora de serviços que oferece tratamentos rápidos ou terapêuticos que objetivam a reabilitação ou melhora estética e da saúde dos clientes, por meio da aplicação de cosméticos e de terapias diversas",
    url: "https://byoestetica.com.br",
    siteName: "byoestetica.com.br",
    images: [
      {
        url: "https://byoestetica.com.br/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
