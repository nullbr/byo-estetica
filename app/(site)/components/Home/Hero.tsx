import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, InstagramIcon } from "../Shared/Icons";

function Hero() {
  return (
    <section className="bg-gradient-to-tl from-green-100 via-slate-100 to-blue-200 pb-[5.5rem]">
      <div className="min-h-[100svh] w-full flex justify-center text-center flex-col md:flex-row py-36 md:py-20">
        <div>
          {/* hero section */}
          <div className="animate-fade-in flex flex-col text-gray-400 justify-center text-center h-full px-10 gap-10">
            <Image
              src="/images/home/hero-logo.png"
              height={400}
              width={400}
              alt="text_bg"
              className="w-auto h-auto max-w-[80%] md:max-w-full mx-auto"
              priority={true}
            />

            <div className="flex w-full justify-center">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 uppercase font-bold tracking-widest border-2 border-gold-600 rounded-full p-3 text-gold-600 text-sm md:text-base whitespace-nowrap hover:scale-105 transition-transform"
              >
                nossos serviços
                <ArrowIcon cls="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* socials */}
        <Link
          href="https://www.instagram.com/byoestetica/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in flex flex-row-reverse md:-rotate-90 w-fit md:absolute top-1/2 right-0 items-center rotate-0 static self-center pt-10 md:pt-0 text-gray-400 gap-4 hover:scale-105 transition-transform"
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
      </div>
    </section>
  );
}

export default Hero;
