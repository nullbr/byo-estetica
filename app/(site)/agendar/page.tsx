"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Agendar() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://wa.me/5511995001307?text=Olá! Vim pelo Google e gostaria de saber mais sobre os tratamentos faciais da BYO.";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-lg text-center">

        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Você está sendo redirecionada...
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Em alguns segundos você será direcionada para o WhatsApp da Clínica
          BYO para falar diretamente com nossa equipe.
        </p>

        <Link
          href="https://wa.me/5511995001307?text=Olá! Vim pelo Google e gostaria de saber mais sobre os tratamentos faciais da BYO."
          target="_blank"
          className="inline-block rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
        >
          Abrir WhatsApp Agora
        </Link>

      </div>
    </section>
  );
}
