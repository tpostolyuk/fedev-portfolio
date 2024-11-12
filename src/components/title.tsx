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
        "border-b-[1px] border-b-slate-900 py-8",
        "dark:border-b-white dark:bg-slate-900",
      )}
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={clsx(
          bebasNeue.className,
          "text-center text-6xl",
          "dark:text-white",
        )}
      >
        {title}
      </motion.h1>
    </section>
  );
};
