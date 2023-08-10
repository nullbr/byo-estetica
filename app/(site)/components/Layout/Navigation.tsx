import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import { getImage } from "@/sanity/sanity-utils";

const Navigation = async () => {
  const logo = await getImage("logo-nav");

  return (
    <nav className="fixed inset-x-0 top-0 z-40 backdrop-blur md:py-2">
      <div className="max-w-3xl flex flex-wrap items-center justify-between mx-auto">
        {/* logo */}
        <Link href="/" className="px-6 py-4">
          <Image
            src={logo.url}
            width={74.286}
            height={25}
            alt={logo.alt}
            priority={true}
          />
        </Link>

        {/* links */}
        <div className="hidden md:block">
          <Links />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
