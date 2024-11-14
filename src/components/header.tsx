"use client";

import { MdOutlineMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { NAV_ITEMS } from "@/constants/options";
import { ThemeToggle } from "./theme-toggle";
import { Drawer } from "./drawer";

export const Header: FC = () => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);
  const currentPath = usePathname();

  const onCloseDrawer = () => setDrawerVisibility(false);
  const onOpenDrawer = () => setDrawerVisibility(true);

  return (
    <header
      className={clsx(
        "sticky left-0 right-0 top-0 z-10 flex h-[65px] items-center gap-8 border-b-[1px] border-b-slate-900 bg-zinc-100 dark:bg-slate-900",
        "dark:border-b-white",
      )}
    >
      <Link href="/">
        <div
          className={clsx(
            "flex h-8 max-w-fit items-center justify-center border-r-[1px] border-r-slate-900 p-8 font-semibold text-slate-900 md:text-xl",
            "dark:border-r-white dark:bg-slate-900 dark:text-white",
            "cursor-pointer hover:underline",
            currentPath === "/" && "underline",
          )}
        >
          FEDEV
        </div>
      </Link>
      <nav>
        <ul
          className={clsx(
            "hidden items-center gap-8 md:flex",
            "dark:text-white",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              className={clsx(
                "hover:underline",
                currentPath.includes(item.toLowerCase()) && "underline",
              )}
              href={item.toLowerCase()}
              key={item}
            >
              <li>{item}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="ml-auto mr-8 flex items-center gap-2">
        <button onClick={onOpenDrawer} className="flex md:hidden">
          <MdOutlineMenu size={24} />
        </button>
        {isDrawerVisible && <Drawer onClose={onCloseDrawer} />}
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
