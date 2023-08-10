import { getImage } from "@/sanity/sanity-utils";
import Image from "next/image";

const Founder = async () => {
  const image = await getImage("logo-founder");

  return (
    <section className="bg-orange-200 pt-36 pb-20">
      <div className="page-padding flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <div>
          <h1 className="text-gold-600 font-bold text-sm md:text-base uppercase tracking-wide">
            Fundadora
          </h1>
          <p className="text-gray-700 pt-4 text-lg md:text-xl max-w-sm">
            Prazer, meu nome é Paloma de Lima Espinha, formada em Biomedicina e
            pós graduada em biomedicina saúde e bem estar social. Nossa missão é
            elevar a autoestima de mulheres e homens que valorizam o autocuidado
            e o bem-estar. Por meio de procedimentos estéticos, nossa equipe se
            empenha em proporcionar a vocês resultados superiores, para que
            possam sentir-se verdadeiramente bem em sua própria pele.
          </p>
        </div>
        <Image
          src={image.url}
          alt={image.alt}
          width={300}
          height={300}
          className="rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
};
export default Founder;
