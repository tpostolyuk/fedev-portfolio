import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";

import { NAV_ITEMS } from "@/constants/options";

export const Footer: FC = () => {
  return (
    <footer
      className={clsx(
        "flex items-center gap-4 justify-between border-t-slate-900 border-t-[1px] py-4 px-8 bg-zinc-100 md:h-[65px]",
        "dark:border-t-white dark:bg-slate-900 dark:text-white"
      )}
    >
      <ul className="grid md:grid-cols-4 grid-cols-2 md:mx-auto items-center text-xs font-semibold gap-8">
        {NAV_ITEMS.map((item) => (
          <Link
            className="hover:underline"
            href={item.toLowerCase()}
            key={item}
          >
            <li>{item}</li>
          </Link>
        ))}
        <li className="hover:underline">
          <a href="mailto:tpstlk.work@gmail.com">EMAIL</a>
        </li>
      </ul>
      <ul className="grid md:grid-cols-4 grid-cols-2 items-center gap-4">
        <li className="hover:rotate-6">
          <a target="_blank" href="https://github.com/tpostolyuk">
            <FaGithub size={24} />
          </a>
        </li>
        <li className="hover:rotate-6">
          <a
            href="https://www.linkedin.com/in/taras-p-8199491a5/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="hover:rotate-6">
          <a
            href="https://www.upwork.com/freelancers/~011e871456341347b4"
            target="_blank"
          >
            <FaSquareUpwork size={24} />
          </a>
        </li>
        <li className="hover:rotate-6">
          <a href="https://dev.to/tpostoliuk" target="_blank">
            <BiLogoDevTo size={28} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
