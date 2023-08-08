import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b to-[#bfb8ab] from-[#d9dad0]">
      <div className="page-padding">
        {/* text */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 min-h-[100svh] md:min-h-0 pt-20 md:pt-44">
          <div>
            <h1 className="text-green-500 font-bold text-sm md:text-base uppercase tracking-wide">
              Sobre BYO
            </h1>
            <p className="text-gray-700 pt-4 text-lg md:text-xl max-w-sm">
              A Clínica BYO Estética Avançada é o lugar onde você encontra
              soluções que proporcionam um bem-estar completo. Nós oferecemos
              tratamentos rápidos e terapêuticos que visam aprimorar tanto sua
              aparência quanto sua saúde. Utilizando uma variedade de cosméticos
              e terapias cuidadosamente selecionados, estamos aqui para ajudar
              você a se sentir incrível por dentro e por fora.
            </p>
          </div>

          <Image
            src="/images/about/logo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
        {/* box */}
        <div className="relative bg-[#7f6754] md:mt-10 -mb-20 rounded-xl text-white p-4 pt-20 text-xl tracking-wide font-thin">
          {/* mission statements */}
          <div className="py-6 border-b border-gold-500">
            <p className="max-w-sm">
              Nossa missão é elevar o bem-estar e fortalecer a autoestima.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="py-6 border-b md:border-b-0 md:border-r md:mr-4 md:pr-4 border-gold-500">
              <h2 className="uppercase text-gold-500 font-bold text-sm mb-2">
                Empoderando cada corpo
              </h2>
              <p>
                Todos merecem sentir-se confiantes em sua própria beleza e
                autoestima, compreendendo como seu corpo funciona e promovendo
                uma saúde geral que reflete em uma pele radiante.
              </p>
            </div>

            <div className="py-6">
              <h2 className="uppercase text-gold-500 font-bold text-sm mb-2">
                Celebrando Autoestima
              </h2>
              <p>
                Acreditamos que ao abraçar sua singularidade, você não apenas
                eleva sua autoestima, mas também inspira uma beleza interior que
                transcende para o exterior, irradiando autoconfiança e carisma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
