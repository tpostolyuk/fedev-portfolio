import { Bebas_Neue } from "next/font/google";
import clsx from "clsx";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <main className="bg-zinc-100 flex flex-col h-[calc(100vh-130px)]">
      <section
        className={clsx(
          "border-b-[1px] border-b-slate-900 py-8",
          "dark:bg-slate-900 dark:border-b-white"
        )}
      >
        <h1
          className={clsx(
            bebasNeue.className,
            "text-center text-6xl",
            "dark:text-white"
          )}
        >
          SKILLS & EXPERIENCE
        </h1>
      </section>
      <section
        className={clsx(
          "flex flex-col justify-center items-center py-14 h-full",
          "dark:bg-slate-900 dark:text-white dark:border-b-white"
        )}
      >
        <div className="flex flex-col justify-start items-start gap-8 max-w-2xl w-full"></div>
      </section>
    </main>
  );
}
