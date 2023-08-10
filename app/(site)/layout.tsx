import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "./components/Layout/Analytics";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import FloatingButton from "./components/Layout/FloatingButton";
import MobileNav from "./components/Layout/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

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
        width: 1333,
        height: 1333,
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
    <html lang="pt-BR" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>

      <body
        className={`bg-white ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <Navigation />
        <MobileNav />

        <main>{children}</main>

        <Footer />

        <FloatingButton />
      </body>
    </html>
  );
}
