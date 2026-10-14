"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Pesquisa() {
  const pesquisaUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfbaXS-CZA6kcdWLMgmNFD1QJTg2Z4kwNVcYBXEt3WzXigyRA/viewform";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = pesquisaUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Você está sendo redirecionado...
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Sua opinião é muito importante para a Clínica BYO!
          Em alguns segundos, você será direcionado para nossa pesquisa
          de satisfação. Sua participação nos ajuda a melhorar continuamente
          nossos serviços e a sua experiência conosco.
        </p>

        <Link
          href={pesquisaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
        >
          Responder Pesquisa Agora
        </Link>
      </div>
    </section>
  );
}
