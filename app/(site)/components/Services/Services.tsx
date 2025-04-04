import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../Shared/Icons";
import { getServices } from "@/sanity/sanity-utils";
import PDFViewer from "../Shared/PDFViewer";

const Services = async () => {
  // get services from sanity
  const services = await getServices();

  return (
    <section className="min-h-screen bg-white text-gray-600">
      <div className="page-padding pt-44">
        <PDFViewer url="/sample.pdf" />
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-2xl font-thin">Principais serviços oferecidos</h1>
          <Link
            href="/contato"
            className="inline-flex gap-2 border border-gold-500 rounded-full tracking-widest py-2 px-4 text-gold-500 text-sm md:text-base whitespace-nowrap hover:bg-gold-500 hover:text-white transition-colors duration-300"
          >
            <p>Agende uma avaliação</p>
            <ArrowIcon cls="w-4 h-4 my-auto" />
          </Link>
        </div>

        <div className="border-t border-gold-500 mt-16">
          {services.map((service) => (
            <div
              key={service._id}
              className="grid md:grid-cols-2 items-center justify-items-center text-center md:text-left"
            >
              <div className="pt-10 md:p-10 md:border-r border-gold-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-lg bg-gray-200 shadow-xl w-[300px] h-[200px]"
                  priority={false}
                />
              </div>
              <div className="py-6 md:p-6 border-b border-gold-500 md:border-none w-full">
                <h2 className="text-xl font-medium text-gold-500">
                  {service.title}
                </h2>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
