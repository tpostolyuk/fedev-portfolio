"use client";

import clsx from "clsx";

import { SOCIAL_LINKS } from "@/constants/options";
import { Title } from "@/components/title";

export default function Contact() {
  return (
    <main className="flex h-full flex-col">
      <Title title="CONTACT" />
      <section
        className={clsx(
          "flex h-full flex-grow flex-col items-center justify-center px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-8">
          <div
            className={clsx(
              "border-b-2 border-b-slate-900",
              "dark:border-b-white",
            )}
          >
            <h2
              className={clsx("text-left text-2xl font-medium", "md:text-4xl")}
            >
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
          <ul
            className={clsx(
              "flex flex-wrap items-start gap-4",
              "md:grid md:grid-cols-3 md:gap-8",
            )}
          >
            {SOCIAL_LINKS.map(({ label, url, Icon }) => (
              <li key={label} className="group hover:underline">
                <a
                  className="flex items-center gap-2"
                  href={url}
                  target="_blank"
                >
                  {
                    <Icon
                      className={clsx(
                        "text-2xl group-hover:rotate-6 group-hover:text-slate-800",
                        "dark:group-hover:text-zinc-100",
                        "md:text-[32px]",
                      )}
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
