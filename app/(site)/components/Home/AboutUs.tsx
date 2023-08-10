import { getImage } from "@/sanity/sanity-utils";
import Image from "next/image";

const AboutUs = async () => {
  // get about image
  const aboutImage = await getImage("about-img");

  return (
    <section className="bg-gold-500 text-gray-500">
      <article className="page-padding pb-44 flex flex-col justify-center items-center gap-10 text-center text-white md:text-xl">
        <Image
          src={aboutImage.url}
          alt={aboutImage.alt}
          width={400}
          height={400}
          className="w-auto h-auto max-w-[80%] md:max-w-full rounded-full border border-white shadow-xl -mt-20"
        />
        <div>
          <p className="mb-6">Seja bem vindo(a),</p>
          <p>
            Prazer, meu nome é Paloma de Lima Espinha, formada em Biomedicina e
            pós graduada em biomedicina saúde e bem estar social. Nossa missão é
            elevar a autoestima de mulheres e homens que valorizam o autocuidado
            e o bem-estar. Por meio de procedimentos estéticos, nossa equipe se
            empenha em proporcionar a vocês resultados superiores, para que
            possam sentir-se verdadeiramente bem em sua própria pele.
          </p>
        </div>
      </article>
    </section>
  );
};
export default AboutUs;
