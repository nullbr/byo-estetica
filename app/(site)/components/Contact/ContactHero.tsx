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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6 text-center">
          <div>
            <InstagramIcon cls="w-7 h-7 text-green-600 mx-auto my-2" />

            <p className="sr-only">siga-nos</p>
            <Link
              href="https://www.instagram.com/byoestetica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              @byoestetica
            </Link>
          </div>

          <div>
            <PhoneIcon cls="w-6 h-6 text-green-600 mx-auto my-2" />

            <p className="sr-only">contato</p>
            <Link
              href={`https://wa.me/+5511995001307?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              <p>(11) 99500-1307</p>
            </Link>

            <Link
              href="mailto:contato@byoestetica.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              contato@byoestetica.com.br
            </Link>
          </div>

          <div>
            <AddressIcon cls="w-6 h-6 text-green-600 mx-auto my-2" />

            <p className="sr-only">endereço</p>

            <Link
              href="https://goo.gl/maps/jqmogZbR9JhT3hyWA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-500"
            >
              Av. Bandeirantes 417,
              <br />
              Sala 4, São Roque - SP
            </Link>
          </div>

          <div>
            <ClockIcon cls="w-6 h-6 text-green-600 mx-auto my-2" />

            <p className="sr-only">horários</p>

            <p className="text-gray-500">
              Seg - Sexta:
              <br />
              9:00 - 19:30
              <br />
              Sábado: 9:00 - 14:00
              <br />
              Domingo: Fechado
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ContactHero;
