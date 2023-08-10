"use client";

import { useState } from "react";
import { ArrowIcon } from "../Shared/Icons";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitFormAndShowCaptcha = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // show captcha
    setShowCaptcha(true);
  };

  function handleSubmit(token: string | null) {
    setShowCaptcha(false);
    setLoading(true);

    if (name === "" || email === "" || message === "") {
      toast.error("Por favor, preencha os de email, nome e mensagem");
      return;
    }

    const params = {
      name,
      email,
      phone_number: phone,
      message,
      "g-recaptcha-response": token,
    };

    emailjs
      .send("service_bvhqapb", "template_gyweosm", params, "ueUa3HtzP6zaHrXLB")
      .then(
        ({ status }) => {
          if (status === 200) {
            // clear form
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");

            setLoading(false);

            toast.success("Mensagem enviada com sucesso!");
          } else {
            console.log(status);

            toast.error("Erro ao enviar mensagem, tente novamente mais tarde");
          }
        },
        (err) => {
          console.log(err);
          toast.error("Erro ao enviar mensagem, tente novamente mais tarde");
        }
      );
  }

  return (
    <article className="bg-green-500 relative h-[26rem] md:h-[35rem]">
      <div className="page-padding absolute w-full -top-20 translate-x-1/2 right-1/2 pb-20 md:px-20 text-white">
        <form
          className="bg-white px-6 py-10 md:py-20 rounded-xl shadow-xl text-gray-500"
          onSubmit={submitFormAndShowCaptcha}
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
            {showCaptcha ? (
              <ReCAPTCHA
                sitekey={"6LfonZYnAAAAAAroDtNlSwPsa4p5G2eb2f2Jue5c"}
                onChange={handleSubmit}
              />
            ) : (
              <button
                type="submit"
                className="inline-flex gap-2 border border-gold-500 rounded-full tracking-widest py-2 px-4 text-gold-500 text-sm md:text-base whitespace-nowrap hover:bg-gold-500 hover:text-white transition-colors duration-300"
                disabled={loading}
              >
                <p>Enviar</p>
                <ArrowIcon cls="w-4 h-4 my-auto" />
              </button>
            )}
          </fieldset>
        </form>
      </div>

      <Toaster />
    </article>
  );
};
export default Form;
