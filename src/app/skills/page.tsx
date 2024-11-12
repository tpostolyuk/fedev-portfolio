import clsx from "clsx";

import { SKILLS } from "@/constants/options";
import { Title } from "@/components/title";

export default function Contact() {
  return (
    <main className="flex h-full flex-col overflow-y-auto bg-zinc-100">
      <Title title="SKILLS" />
      <section
        className={clsx(
          "flex h-full flex-col items-center justify-start px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-8">
          <section className="flex flex-col gap-8">
            <h2 className={clsx("text-xl font-semibold", "md:text-2xl")}>
              Programming Languages And Technologies:
            </h2>
            <ul
              className={clsx(
                "flex list-none flex-wrap items-center gap-6 text-sm",
                "md:text-base",
              )}
            >
              {SKILLS.technologies.map(({ label, Icon }) => (
                <li
                  className="flex items-center gap-2 border-b-[1px] border-b-slate-900"
                  key={label}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-8">
            <h2 className={clsx("font-semibold md:text-2xl", "text-xl")}>
              Framework and Libraries:
            </h2>
            <ul
              className={clsx(
                "flex list-none flex-wrap items-center gap-6 text-sm",
                "md:text-base",
              )}
            >
              {SKILLS.libraries.map(({ label, Icon }) => (
                <li
                  className="flex items-center gap-2 border-b-[1px] border-b-slate-900"
                  key={label}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
