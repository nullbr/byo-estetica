import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "./components/Layout/Analytics";
import Navigation from "./components/Layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BYO Estética Avançada",
    template: "%s | BYO",
  },
  description:
    "Clínica BYO Estética avançada é uma empresa prestadora de serviços que oferece tratamentos rápidos ou terapêuticos que objetivam a reabilitação ou melhora estética e da saúde dos clientes, por meio da aplicação de cosméticos e de terapias diversas",
  metadataBase: new URL("https://byo-estetica.vercel.app/"),
  openGraph: {
    title: "BYO Estética Avançada",
    description: "Bruno Leite - Full Stack Developer",
    url: "https://byo-estetica.vercel.app",
    siteName: "byo-estetica.vercel.app",
    images: [
      {
        url: "https://byo-estetica.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "BYO Estética Avançada",
    card: "summary_large_image",
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
    <html lang="pt-BR" className={inter.className}>
      <head>
        <Analytics />
      </head>

      <body
        className={`min-h-[200svh] bg-slate-50 max-w-3xl mx-auto ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <Navigation />
        <main className="pt-20 px-4">{children}</main>
      </body>
    </html>
  );
}
