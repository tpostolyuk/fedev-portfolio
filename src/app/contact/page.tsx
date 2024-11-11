"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import clsx from "clsx";

import { SOCIAL_LINKS } from "@/constants/options";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <main className="bg-zinc-100 flex flex-col overflow-y-auto h-full">
      <section
        className={clsx(
          "border-b-[1px] border-b-slate-900 py-8",
          "dark:bg-slate-900 dark:border-b-white"
        )}
      >
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={clsx(
            bebasNeue.className,
            "text-center text-6xl",
            "dark:text-white"
          )}
        >
          CONTACT
        </motion.h1>
      </section>
      <section
        className={clsx(
          "flex flex-col justify-center items-center py-14 h-full flex-grow",
          "dark:bg-slate-900 dark:text-white dark:border-b-white"
        )}
      >
        <div className="flex flex-col justify-start items-start gap-8 max-w-2xl w-full">
          <div
            className={clsx(
              "border-b-2 border-b-slate-900",
              "dark:border-b-white"
            )}
          >
            <h2 className="text-4xl text-left font-medium">
              Get in touch with me via links on social media or send me an{" "}
              <a
                href="mailto:tpstlk.work@gmail.com"
                className="hover:underline"
                target="_blank"
              >
                <strong>email</strong>
              </a>
              .
            </h2>
          </div>
          <ul className="grid grid-cols-3 items-start gap-8">
            {SOCIAL_LINKS.map(({ label, url, Icon }) => (
              <li key={label} className="hover:underline group">
                <a
                  className="flex items-center gap-2"
                  href={url}
                  target="_blank"
                >
                  {
                    <Icon
                      className={clsx(
                        "group-hover:text-slate-800 group-hover:rotate-6",
                        "dark:group-hover:text-zinc-100"
                      )}
                      size={32}
                    />
                  }
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
