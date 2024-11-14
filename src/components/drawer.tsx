"use client;";

import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";

import { NAV_ITEMS } from "@/constants/options";
import { ThemeToggle } from "./theme-toggle";

interface Props {
  onClose: () => void;
}

export const Drawer: FC<Props> = ({ onClose }) => {
  const currentPath = usePathname();

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-sm backdrop-brightness-75"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "fixed bottom-0 right-0 top-0 z-10 w-[70%] bg-zinc-100 p-16",
          "dark:bg-slate-900",
        )}
      >
        <div className="flex flex-col items-center gap-8">
          <button className="ml-auto" onClick={onClose}>
            <IoMdClose size={32} />
          </button>

          <Link href="/">
            <h2
              className={clsx(
                "text-3xl font-bold",
                currentPath === "/" && "underline",
                "dark:text-white",
              )}
            >
              FEDEV
            </h2>
          </Link>
          <div
            className={clsx("rounded-md bg-slate-200 p-2", "dark:bg-slate-700")}
          >
            <ThemeToggle />
          </div>
        </div>
        <nav className="flex h-[80%] items-center justify-center">
          <ul
            className={clsx(
              "flex h-full flex-col items-center justify-center gap-16",
              "dark:text-white",
            )}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                className={clsx(
                  "text-xl hover:underline",
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
      </div>
    </div>
  );
};