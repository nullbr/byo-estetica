import { getImage, getServices } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  // get logo
  const logo = await getImage("logo-nav");

  // services
  const services = (await getServices()).map((service) => service.title);

  return (
    <footer className="page-padding py-20 flex flex-col sm:flex-row gap-6 text-sm sm:text-base text-gray-700 items-center sm:items-start">
      {/* logo side */}
      <div className="flex-1 flex flex-col gap-4 items-center sm:items-start text-center md:text-left">
        <Link href="/">
          <Image
            src={logo.url}
            alt={logo.alt}
            width={114.286}
            height={40}
            priority={false}
          />
        </Link>
        <p>
          Na Clínica BYO Estética Avançada oferecemos tratamentos rápidos ou
          terapêuticos que objetivam a reabilitação ou melhora estética, por
          meio da aplicação de cosméticos e de terapias diversas. Contate-nos
          via{" "}
          <Link
            href={`https://wa.me/+5511995001307?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-500"
          >
            (11) 99500-1307
          </Link>{" "}
          ou nos faça uma visita na{" "}
          <Link
            href="https://goo.gl/maps/jqmogZbR9JhT3hyWA"
            className="text-green-500 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Av. Bandeirantes 417, Sala 4, São Roque - SP
          </Link>
          .
        </p>
        <p>
          Copyright | © {new Date().getFullYear()} BYO Estética Avançada
          <br />
          Criado por{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bruno.buzz/pt"
            className="text-green-500 underline"
          >
            Bruno Leite
          </Link>
        </p>
      </div>

      {/* middle div */}
      <Link href="/servicos" className="text-center sm:text-end">
        <p className="text-lg sm:text-xl font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-500">
          Serviços
        </p>

        <div className="grid gap-2 pt-2 whitespace-nowrap">
          {services.map((service, idx) => (
            <p key={idx}>{service}</p>
          ))}
        </div>
      </Link>

      {/* right div */}
      <Link
        href="/contato"
        className="flex flex-col gap-2 text-center sm:text-end whitespace-nowrap overflow-hidden"
      >
        <p className="text-lg sm:text-xl font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-500">
          Horários
        </p>

        <p>
          <span className="font-semibold">Seg - Sexta:</span>
          <br />
          9:00 - 19:30
        </p>
        <p>
          <span className="font-semibold">Sábado:</span>
          <br />
          9:00 - 17:00
        </p>
        <p>
          <span className="font-semibold">Domingo:</span>
          <br />
          Fechado
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
