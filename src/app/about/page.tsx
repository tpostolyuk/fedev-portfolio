"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

import { AnimatedText } from "@/components/animated-text";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <main className="bg-zinc-100 flex flex-col">
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
          ABOUT ME
        </h1>
      </section>
      <section
        className={clsx(
          "border-b-slate-900 border-b-[1px] flex flex-col justify-center items-center py-14",
          "dark:bg-slate-900 dark:text-white dark:border-b-white"
        )}
      >
        <div className="flex items-center gap-8 max-w-2xl">
          <motion.div
            className="min-w-[200px] min-h-[200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              className="rounded-sm"
              src="/profile.png"
              alt="profile"
              height={200}
              width={200}
              priority
            />
          </motion.div>
          <AnimatedText
            text="Hi there! I'm a skilled Front-End Developer who focuses on
            crafting dynamic, scalable web applications that drive business
            growth. With extensive experience in React.js, TypeScript, Next.js,
            and other modern frameworks, I specialize in building responsive,
            interactive interfaces optimized for performance and user
            experience."
          />
        </div>
        <div className="flex flex-col gap-4 mt-6 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold"
          >
            What I offer:
          </motion.h2>
          <ul className="flex flex-col gap-2 list-disc">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0 } }}
              className="ml-8"
            >
              Expertise in transforming Figma/PSD designs into{" "}
              <strong>pixel-perfect</strong>, functional websites.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              className="ml-8"
            >
              Proficiency in complex integrations, <strong>API handling</strong>
              , and data visualizations for real-time insights.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              className="ml-8"
            >
              Strong focus on <strong>code quality</strong>, SEO-friendly
              development, and performance optimization.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              className="ml-8"
            >
              A commitment to <strong>client satisfaction</strong>, from
              thorough industry research to seamless end-user experiences.
            </motion.li>
          </ul>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold"
          >
            Tech Stack:
          </motion.h2>
          <ul className="flex flex-col gap-2 list-disc">
            <motion.li
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              initial={{ opacity: 0 }}
              className="ml-8"
            >
              <b>Frontend:</b> JavaScript, TypeScript, React, Redux, React
              Query, Next.js, CSS (Sass), HTML, Bootstrap, Tailwind CSS,
              Material-UI, styled-components.
            </motion.li>
            <motion.li
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              initial={{ opacity: 0 }}
              className="ml-8"
            >
              <b>Testing:</b> Postman.
            </motion.li>
            <motion.li
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              initial={{ opacity: 0 }}
              className="ml-8"
            >
              <b>VersionControl:</b> Git, GitHub, Bitbucket.
            </motion.li>
            <motion.li
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              initial={{ opacity: 0 }}
              className="ml-8"
            >
              <b>DesignTools:</b> Figma.
            </motion.li>
          </ul>
          Whether you’re looking to create a custom dashboard, deploy a
          responsive website, or enhance an existing platform, I can help you
          bring your vision to life. Let&apos;s work together to turn your ideas
          into impactful solutions!
        </div>
      </section>
    </main>
  );
}
