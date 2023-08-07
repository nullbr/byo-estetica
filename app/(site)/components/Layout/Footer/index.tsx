import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="container page-padding p-4">
        {/* footer div all */}
        <div className="grid sm:grid-cols-5 gap-4 items-center sm:items-start text-center sm:text-left">
          {/* logo side */}
          <div className="sm:col-span-3 flex flex-col gap-4 items-center sm:items-start">
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
          <Link href="/servicos" className="grid gap-2 text-center">
            <p className="text-[22px] font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-500">
              Serviços
            </p>

            <p className="text-[16px] text-gray-500 font-medium">service 2</p>
            <p className="text-[16px] text-gray-500 font-medium">service 3</p>
            <p className="text-[16px] text-gray-500 font-medium">service 4</p>
            <p className="text-[16px] text-gray-500 font-medium">service 5</p>
            <p className="text-[16px] text-gray-500 font-medium">service 6</p>
            <p className="text-[16px] text-gray-500 font-medium">service 7</p>
            <p className="text-[16px] text-gray-500 font-medium">service 8</p>
          </Link>

          {/* right div */}
          <Link
            href="/contato"
            className="grid gap-2 text-center sm:justify-end"
          >
            <p className="text-[22px] font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-500">
              Contato
            </p>

            <p className="text-[16px]  text-gray-500 font-bold">contact</p>
            <p className="text-[16px] text-gray-500 font-medium">contact</p>
            <p className="text-[16px] text-gray-500 font-bold ">contact</p>
            <p className="text-[16px] text-gray-500 font-medium">contact</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
