import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../Shared/Icons";

const Services = () => {
  const services = [
    {
      title: "Limpeza de Pele",
      description:
        "em como objetivo remover os cravos e as impurezas, desobstrui os poros e melhorar a capacidade de absorção da pele.",
      img: "/images/services/limpeza-facial.png",
    },
    {
      title: "Microagulhamento",
      description:
        "Um tratamento que irá auxiliar no estímulo de colágeno, clareamento da pele suavização das linhas de expressões, melhora no aspecto da cicatriz de acne. Pode auxiliar em tratamento capilares para fortalecimento dos fios, corporal em tratamentos de estrias.",
      img: "/images/services/microagulhamento.png",
    },
    {
      title: "Ledterapia",
      description:
        "Um tratamento estético  que utiliza luzes terapêuticas como auxiliadoras no tratamento de acne, manchas, rejuvenescimento.",
      img: "/images/services/ledterapia.png",
    },
    {
      title: "Peelings",
      description:
        "O objetivo do procedimento químico, que é um método seguro e eficaz, é o clareamento, renovação das células da pele, suavização das linhas de expressões, mais finas por meio de produtos. O peeling orgânico é feito a partir de silicatos de algas, um peeling físico, por meio da esfoliação realizada na pele, ocorre a descamação e renovação celular.",
      img: "/images/services/peelings.png",
    },
    {
      title: "Drenagem Linfática",
      description:
        "Tratamento que irá auxiliar na retenção de líquidos, melhorar inchaço, circulação corporal, combater a celulite, liberação de toxinas.",
      img: "/images/services/drenagem-linfatica.png",
    },
    {
      title: "Massagem Relaxante",
      description:
        "Auxilia no relaxamento muscular, diminui o cansaço, controle do stress e ansiedade",
      img: "/images/services/massagem-relaxante.png",
    },
    {
      title: "Massagem Modeladora",
      description:
        "Auxilia na modelagem do corpo, melhora a circulação, melhora a função intestinal.",
      img: "/images/services/massagem-modeladora.png",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-600">
      <div className="page-padding pt-44">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-2xl font-thin">Principais serviços oferecidos</h1>
          <Link
            href="/contato"
            className="inline-flex gap-2 border border-gold-500 rounded-full tracking-widest py-2 px-4 text-gold-500 text-sm md:text-base whitespace-nowrap hover:bg-gold-500 hover:text-white transition-colors duration-300"
          >
            <p>Agende uma avaliação</p>
            <ArrowIcon cls="w-4 h-4 my-auto" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10 pt-16 items-center justify-items-center border-t md:border-b md:pb-16 border-gold-500 mt-16 text-center md:text-left">
          {services.map((service, index) => (
            <>
              <Image
                src={service.img}
                alt={service.title}
                width={300}
                height={150}
                className="rounded-lg bg-gray-200"
              />
              <div className="border-b border-gold-500 pb-10 md:border-none md:p-0">
                <h2 className="text-xl font-medium text-gold-500">
                  {service.title}
                </h2>
                <p className="text-sm">{service.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
