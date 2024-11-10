import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";

import { NAV_ITEMS } from "@/constants/options";
import { ThemeToggle } from "./theme-toggle";

export const Header: FC = () => {
  return (
    <header className="flex items-center gap-8 border-b-[1px] bg-zinc-100 dark:bg-slate-900 border-b-slate-900">
      <Link href="/">
        <div
          className={clsx(
            "p-8 flex items-center justify-center max-w-fit h-8 font-bold text-xl text-slate-900",
            "dark:bg-slate-900 dark:text-white",
            "hover:underline cursor-pointer"
          )}
        >
          FE DEV
        </div>
      </Link>
      <nav>
        <ul className={clsx("flex items-center gap-8", "dark:text-white")}>
          {NAV_ITEMS.map((item) => (
            <Link
              className="hover:underline"
              href={item.toLowerCase()}
              key={item}
            >
              <li>{item}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="ml-auto mr-8">
        <ThemeToggle />
      </div>
    </header>
  );
};
