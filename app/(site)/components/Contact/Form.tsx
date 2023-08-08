"use client";

import { useState } from "react";
import { ArrowIcon } from "../Shared/Icons";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <article className="bg-green-500 relative h-[25rem] md:h-[30rem]">
      <div className="page-padding absolute w-full -top-20 translate-x-1/2 right-1/2 pb-20 md:px-20 text-white">
        <form
          className="bg-white px-6 py-10 md:py-20 rounded-xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend className="text-gold-500 font-bold text-sm md:text-base uppercase tracking-wide pb-10 text-center">
              Envie-nos uma mensagem
            </legend>
            <p>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                className="w-full border-b border-gold-500 p-2 mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full border-b border-gold-500 p-2 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="phone" className="sr-only">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Telefone (opcional)"
                className="w-full border-b border-gold-500 p-2 mb-4"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="message" className="sr-only">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                className="w-full border-b border-gold-500 p-2 mb-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </p>
            <button
              type="submit"
              className="inline-flex gap-2 border border-gold-500 rounded-full tracking-widest py-2 px-4 text-gold-500 text-sm md:text-base whitespace-nowrap hover:bg-gold-500 hover:text-white transition-colors duration-300"
            >
              <p>Enviar</p>
              <ArrowIcon cls="w-4 h-4 my-auto" />
            </button>
          </fieldset>
        </form>
      </div>
    </article>
  );
};
export default Form;
