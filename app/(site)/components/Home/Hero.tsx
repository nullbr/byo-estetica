import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, InstagramIcon } from "../Shared/Icons";

function Hero() {
  return (
    <section className="h-[100svh] pt-20 w-full bg-gradient-to-tl from-pink-200 via-purple-100 to-blue-200 flex justify-center text-center flex-col md:flex-row">
      <div className="container-hero">
        {/* hero section */}
        <div className="animate-fade-in flex flex-col text-gray-400 justify-center text-center h-full px-20 gap-20">
          <Image
            src="/images/hero/hero-logo.png"
            height={400}
            width={400}
            alt="text_bg"
            className="max-w-full w-auto h-auto sm:max-h-[40vh] max-h-full"
            priority={false}
          />

          <div className="flex w-full justify-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 uppercase font-bold tracking-widest border-2 border-gold-600 rounded-full p-4 text-gold-600"
            >
              nossos serviços
              <ArrowIcon cls="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      {/* socials */}
      <Link
        href="https://www.instagram.com/byoestetica/"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-fade-in flex flex-row-reverse md:-rotate-90 w-fit
          md:absolute top-1/2 right-0 items-center rotate-0 static self-center pt-10 md:pt-0 text-gray-400 gap-4"
      >
        <p className="uppercase md:text-2xl font-bold tracking-widest">
          siga-nos
        </p>
        {/* dash */}
        <span className="w-[35px] bg-gold-600 h-[2.5px]"></span>
        {/* icon */}
        <div className="gap-7 flex">
          <InstagramIcon cls="w-5 h-5 md:w-6 md:h-6 rotate-0 md:rotate-90 text-2xl cursor-pointer ease-in duration-200" />
        </div>
      </Link>
    </section>
  );
}

export default Hero;
