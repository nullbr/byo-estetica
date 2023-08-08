import Image from "next/image";

const AboutCards = () => {
  const aboutCards = [
    {
      img: "/images/home/quality.png",
      title: "Experiência Profissional de Excelência",
      description:
        "Nossa equipe traz anos de experiência na estética, garantindo tratamentos de alta qualidade que realçam sua beleza natural.",
    },
    {
      img: "/images/home/heart.png",
      title: "Beleza Feita para Você",
      description:
        "Oferecemos tratamentos personalizados que abordam suas necessidades exclusivas, realçando sua beleza de maneira autêntica.",
    },
    {
      img: "/images/home/relax.png",
      title: "Relaxamento e Rejuvenescimento",
      description:
        "Proporcionamos não apenas tratamentos estéticos, mas uma experiência relaxante para revitalizar sua mente e corpo.",
    },
  ];

  return (
    <section className="bg-slate-200 pb-8">
      <div className="page-padding flex flex-col gap-28 text-center text-gray-500">
        {aboutCards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white gap-4 justify-center p-6 items-center rounded-tl-[3rem] rounded-br-[3rem] shadow-xl w-full min-h-[10rem] md:min-h-[10rem] -mt-20"
          >
            <Image src={card.img} alt="box_img" height={100} width={100} />
            <div>
              <h1 className="text-green-500 md:text-lg font-bold uppercase pb-4">
                {card.title}
              </h1>
              <p className="leading-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutCards;
