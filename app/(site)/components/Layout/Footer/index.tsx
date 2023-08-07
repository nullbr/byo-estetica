import Image from "next/image";
import Link from "next/link";

function Footer() {
  const services = [
    "Limpeza de Pele",
    "Microagulhamento",
    "Ledterapia",
    "Peeling Químico",
    "Drenagem Linfática",
    "Massagem relaxante",
    "Massagem modeladora",
  ];

  return (
    <footer className="p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left text-sm sm:text-base text-gray-500 ">
      {/* logo side */}
      <div className="flex-1 flex flex-col gap-4 items-center sm:items-start">
        <Link href="/" className="">
          <Image
            src="/images/navigation/logo-nav.png"
            alt="footer-logo"
            width={115}
            height={40}
          />
        </Link>
        <p className="text-gray-500">description</p>
        <p className="text-gray-500">
          Copyright | © {new Date().getFullYear()} BYO Estética Avançada
          <br />
          Criado por{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bruno.buzz/pt"
          >
            Bruno Leite
          </Link>
        </p>
      </div>

      {/* middle div */}
      <Link href="/servicos" className="text-center">
        <p className="text-lg sm:text-xl font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-500">
          Serviços
        </p>

        <div className="grid gap-2 pt-2 whitespace-nowrap">
          {services.map((service, idx) => (
            <p key={idx} className="">
              {service}
            </p>
          ))}
        </div>
      </Link>

      {/* right div */}
      <Link
        href="/contato"
        className="grid gap-2 text-center sm:justify-end whitespace-nowrap overflow-hidden"
      >
        <p className="text-lg sm:text-xl font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-500">
          Horários
        </p>

        <p className="font-bold">Segunda - Sábado</p>
        <p className="">9:00 - 18:00</p>
        <p className="text-gray-700 font-bold ">Domingo</p>
        <p className="">Fechado</p>
      </Link>
    </footer>
  );
}

export default Footer;
