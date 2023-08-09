"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "../Shared/Icons";
import Link from "next/link";

const FloatingButton = () => {
  const [text, setText] = useState<null | string>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // display message icon on scrolldown
    const handleScroll = () => {
      window.scrollY > 10 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[40px] flex flex-col items-end text-end gap-2 ease-in-out duration-500 ${
        show ? "right-[29px]" : "-right-[100%]"
      }`}
    >
      <button
        className="h-[40px] w-[40px] p-2 border-2 border-gray-500 hover:border-white rounded-full hover:bg-gray-500 transition-colors text-gray-500 hover:text-white hover:shadow-lg"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ChevronUpIcon />
      </button>
      <Link
        onMouseEnter={() => {
          setText("Como podemos ajudar?");
        }}
        onMouseLeave={() => {
          setText(null);
        }}
        href={`https://wa.me/+5511995001307?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+visita.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full ease-in-out duration-500 hover:bg-white hover:shadow-lg hover:pl-4 transition text-gray-500 group"
      >
        <p className="text-xl text-gray-400 hidden group-hover:block ease-in-out duration-500">
          Como podemos ajudar?
        </p>
        <Image
          src="/images/layout/whatsapp.svg"
          alt="whatsapp"
          width={40}
          height={40}
        />
      </Link>
      {/* <div
          className={`bg-white rounded-full shadow-lg ease-in-out duration-500 ${
            text ? "pr-[40px]" : "pr-[15px]"
          }`}
        ></div> */}
    </div>
  );
};
export default FloatingButton;
