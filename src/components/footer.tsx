import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import { FC } from "react";
import clsx from "clsx";

export const Footer: FC = () => {
  return (
    <footer
      className={clsx(
        "sticky bottom-0 left-0 right-0 flex h-16 items-center border-y-[1px] border-y-slate-900 bg-zinc-100 px-8 py-4",
        "dark:border-y-white dark:bg-slate-900 dark:text-white",
      )}
    >
      <ul className="mx-auto grid grid-cols-4 items-center gap-4">
        <li className="hover:rotate-6">
          <a
            aria-label="Link to my GitHub profile"
            href="https://github.com/tpostolyuk"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
        </li>
        <li className="hover:rotate-6">
          <a
            href="https://www.linkedin.com/in/taras-p-8199491a5/"
            aria-label="Link to my LinkedIn profile"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="hover:rotate-6">
          <a
            href="https://www.upwork.com/freelancers/~011e871456341347b4"
            aria-label="Link to my Upwork profile"
            target="_blank"
          >
            <FaSquareUpwork size={24} />
          </a>
        </li>
        <li className="hover:rotate-6">
          <a
            aria-label="Link to my dev.to profile"
            href="https://dev.to/tpostoliuk"
            target="_blank"
          >
            <BiLogoDevTo size={28} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
