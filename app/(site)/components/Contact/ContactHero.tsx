import Link from "next/link";
import {
  AddressIcon,
  ClockIcon,
  InstagramIcon,
  PhoneIcon,
} from "../Shared/Icons";

const ContactHero = () => {
  return (
    <article className="bg-gradient-to-b to-[#bfb8ab] from-[#d9dad0]">
      <div className="page-padding pt-44 pb-32 text-gray-600 text-center">
        <h1 className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wide pb-4">
          contate-nos
        </h1>
        <p className="text-lg md:text-xl">
          Se você está procurando um lugar para cuidar da sua beleza e
          bem-estar, o BYO Estética Avançada é a escolha perfeita! Entre em
          contato conosco para agendar uma consulta ou para obter mais
          informações sobre nossos serviços.
        </p>

        <div className="grid grid-cols-2 gap-2 pt-6 text-center">
          <div>
            <PhoneIcon cls="w-6 h-6 text-green-600 mx-auto my-2" />

            <p className="sr-only">contato</p>
            <Link
              href={`https://wa.me/11995001307?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              <p>(11) 99500-1307</p>
            </Link>

            <Link
              href="mailto:email@byo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              email@byo.com
            </Link>
          </div>

          <div>
            <AddressIcon cls="w-6 h-6 text-green-600 mx-auto my-2" />

            <p className="sr-only">endereço</p>

            <Link
              href="https://www.google.com/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              Av. Bandeirantes, 999 <br /> São Roque - SP
            </Link>
          </div>

          <div>
            <ClockIcon cls="w-6 h-6 text-green-600 mx-auto my-2" />

            <p className="sr-only">horários</p>

            <p>Terça - Sábado:</p>
            <p>9:00 - 18:00</p>

            <p>Domingo: Fechado</p>
          </div>

          <div>
            <InstagramIcon cls="w-7 h-7 text-green-600 mx-auto my-2" />

            <p className="sr-only">siga-nos</p>
            <Link
              href="https://www.instagram.com/byoestetica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              byoestetica
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ContactHero;
