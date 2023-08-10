"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({
  setOpenNav,
}: {
  setOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // check pathname to set the active link
  const path = usePathname();

  const pages = [
    { title: "início", path: "/" },
    { title: "sobre", path: "/sobre" },
    { title: "serviços", path: "/servicos" },
    { title: "contato", path: "/contato" },
  ];

  return (
    <ul className="font-medium flex flex-col text-end p-4 pt-20 border border-gray-100 bg-white h-full md:flex-row md:space-x-8 md:px-4 md:py-0 md:bg-transparent md:border-none">
      {pages.map((page, idx) => {
        return (
          <li key={idx}>
            <Link
              href={page.path}
              onClick={() => {
                if (setOpenNav) setOpenNav(false);
              }}
              className={`block py-2 pl-3 pr-4 rounded capitalize md:p-0 md:hover:text-green-600 ${
                path === page.path
                  ? "text-white bg-green-500 md:text-green-500 md:bg-transparent md:underline"
                  : "text-gray-500"
              }`}
            >
              {page.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
