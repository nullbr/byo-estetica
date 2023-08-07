"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CloseIcon, HamburgerIcon } from "../../Shared/Icons";

const Navigation = () => {
  const pages = [
    { title: "início", path: "/" },
    { title: "sobre", path: "/sobre" },
    { title: "serviços", path: "/servicos" },
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
              width={100}
              height={30}
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
            {openNav ? <CloseIcon /> : <HamburgerIcon cls="-scale-x-100" />}
          </button>

          {/* links */}
          <ul className="hidden md:flex font-medium text-end rounded-lg space-x-8 px-4">
            {pages.map((page, idx) => (
              <li key={idx}>
                <Link
                  href={page.path}
                  className={`rounded capitalize hover:scale-105 hover:text-green-600 ${
                    path === page.path ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <aside
        ref={menuRef}
        className={`md:hidden fixed top-16 z-50 w-full px-4 transition-transform ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="font-medium flex flex-col text-end p-4 border border-gray-100 rounded-lg bg-white">
          {pages.map((page, idx) => {
            return (
              <li key={idx}>
                <Link
                  href={page.path}
                  className={`block py-2 pl-3 pr-4 rounded capitalize ${
                    path === page.path
                      ? "text-white bg-green-500"
                      : "text-gray-500"
                  }`}
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
