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
    <footer className="page-padding py-8 flex flex-col sm:flex-row gap-4 text-sm sm:text-base text-gray-700 items-center sm:items-start">
      {/* logo side */}
      <div className="flex-1 flex flex-col gap-4 items-center sm:items-start text-center md:text-left">
        <Link href="/">
          <Image
            src="/images/navigation/logo-nav.png"
            alt="footer-logo"
            width={115}
            height={40}
            className="w-auto h-auto"
            priority={true}
          />
        </Link>
        <p>
          Clínica BYO Estética Avançada é uma empresa prestadora de serviços que
          oferece tratamentos rápidos ou terapêuticos que objetivam a
          reabilitação ou melhora estética e da saúde dos clientes, por meio da
          aplicação de cosméticos e de terapias diversas.
        </p>
        <p>
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

        <p>Segunda - Sábado</p>
        <p>9:00 - 18:00</p>
        <p>Domingo</p>
        <p>Fechado</p>
      </Link>
    </footer>
  );
}

export default Footer;
