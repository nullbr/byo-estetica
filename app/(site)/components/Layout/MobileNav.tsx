"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, HamburgerIcon } from "../Shared/Icons";
import Links from "./Links";

const MobileNav = () => {
  // handle menu
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pages = [
    { title: "início", path: "/" },
    { title: "sobre", path: "/sobre" },
    { title: "serviços", path: "/servicos" },
    { title: "contato", path: "/contato" },
  ];

  // check pathname to set the active link
  const path = usePathname();

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

  return (
    <>
      {/* menu button */}
      <button
        type="button"
        ref={buttonRef}
        className="fixed top-0 right-0 z-50 inline-flex items-center p-2 m-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:outline-none hover:ring-2 hover:ring-gray-200"
        onClick={() => setOpenNav(!openNav)}
      >
        <span className="sr-only">Abrir menu</span>
        {openNav ? (
          <CloseIcon cls="w-7 h-7" />
        ) : (
          <HamburgerIcon cls="w-7 h-7" />
        )}
      </button>

      <aside
        ref={menuRef}
        className={`md:hidden fixed top-0 z-30 w-full transition-transform duration-300 h-[100svh] ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Links setOpenNav={setOpenNav} />
      </aside>
    </>
  );
};
export default MobileNav;
