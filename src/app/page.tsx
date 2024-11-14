import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Title } from "@/components/title";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <Title title="PORTFOLIO" />
      <section
        className={clsx(
          "flex h-full flex-grow flex-col items-center justify-center px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="mb-auto flex flex-col items-center justify-start gap-4">
          <div className="rounded-full border-2 border-slate-500">
            <Image
              className={clsx("size-28 rounded-full", "md:size-[150px]")}
              src="/profile.png"
              alt="profile"
              height={150}
              width={150}
              priority
            />
          </div>
          <h2
            className={clsx(
              bebasNeue.className,
              "text-center text-4xl tracking-wide md:text-4xl",
            )}
          >
            TARAS POSTOLIUK & FRONTEND DEVELOPER
          </h2>
          <p className="text-m w-full max-w-[540px] text-center font-light">
            Passionate about building responsive, user-centered web applications
            that fuel business success.
          </p>
          <Link
            className={clsx(
              bebasNeue.className,
              "mt-12 animate-bounce border-2 border-slate-800 p-2 text-2xl font-normal text-slate-800",
              "dark:border-white dark:text-white",
              "md:p-4",
            )}
            href="/contact"
          >
            <p>Let&apos;s get in touch!</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
