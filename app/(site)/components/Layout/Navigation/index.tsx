import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  const pages = [
    { title: "início", path: "/" },
    { title: "sobre", path: "/sobre" },
    { title: "serviços", path: "/serviços" },
    { title: "contato", path: "/contato" },
  ];

  return (
    <nav>
      <div className="fixed inset-x-0 top-0 z-30 border-b backdrop-blur duration-200 bg-neutral-900/500  border-neutral-800">
        <div className="mx-auto flex items-center justify-between p-4 max-w-3xl">
          {/* logo */}
          <Image
            src="/images/navigation/logo-nav.png"
            width={115}
            height={40}
            alt="logo-nav"
            className="cursor-pointer"
          />

          {/* links */}
          <div className="flex justify-between gap-4">
            {pages.map((page, idx) => {
              return (
                <Link
                  key={idx}
                  href={page.path}
                  className="text-neutral-400 capitalize duration-500 hover:scale-105 hover:text-primary"
                >
                  {page.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
