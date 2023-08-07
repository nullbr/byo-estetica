"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pages = [
    { title: "início", path: "/" },
    { title: "sobre", path: "/sobre" },
    { title: "serviços", path: "/serviços" },
    { title: "contato", path: "/contato" },
  ];

  // handle menu
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // return if the sidebar is closed
    if (!openNav) return;

    const handleClickOutsideSidebar = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      setOpenNav(false);
    };

    document.addEventListener("mousedown", handleClickOutsideSidebar);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openNav]);

  // check pathname to set the active link
  const path = usePathname();

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-40 bg-white/500 border-gray-200 backdrop-blur">
        <div className="max-w-3xl flex flex-wrap items-center justify-between mx-auto">
          {/* logo */}
          <Link href="/" className="p-4">
            <Image
              src="/images/navigation/logo-nav.png"
              width={115}
              height={40}
              alt="logo-nav"
            />
          </Link>

          {/* menu button */}
          <button
            type="button"
            ref={buttonRef}
            className="inline-flex items-center p-2 m-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setOpenNav(!openNav)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>

      <aside
        ref={menuRef}
        className={`fixed left-0 top-20 md:top-6 z-50 w-full md:w-auto px-4 transition-transform md:translate-y-0 ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="font-medium flex flex-col text-end p-4 md:p-0 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
          {pages.map((page, idx) => {
            return (
              <li key={idx}>
                <Link
                  href={page.path}
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 capitalize ${
                    path === page.path
                      ? "text-white bg-green-500 md:text-green-500 md:bg-transparent"
                      : "text-gray-500"
                  }}`}
                >
                  {page.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
export default Navigation;
