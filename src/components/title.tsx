"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import { FC } from "react";
import clsx from "clsx";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <section
      className={clsx(
        "border-b-[1px] border-b-slate-900 py-2",
        "dark:border-b-white dark:bg-slate-900",
      )}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={clsx(
          bebasNeue.className,
          "text-center text-4xl",
          "dark:text-white",
          "md:text-6xl",
        )}
      >
        {title}
      </motion.h1>
    </section>
  );
};
