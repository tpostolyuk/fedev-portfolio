"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

import { AnimatedText } from "@/components/animated-text";
import { Title } from "@/components/title";

export default function About() {
  return (
    <>
      <Title title="ABOUT ME" />
      <section
        className={clsx(
          "flex flex-col items-center justify-center px-4 py-8",
          "dark:bg-slate-900 dark:text-white",
        )}
      >
        <div
          className={clsx(
            "flex max-w-2xl flex-col items-center gap-8",
            "md:flex-row",
          )}
        >
          <motion.div
            className="min-h-[200px] min-w-[200px]"
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
            text="Greetings! I'm a skilled Front-End Developer who focuses on
            crafting dynamic, scalable web applications that drive business
            growth. With extensive experience in React.js, TypeScript, Next.js,
            and other modern frameworks, I specialize in building responsive,
            interactive interfaces optimized for performance and user
            experience."
          />
        </div>
        <div className="mt-6 flex max-w-2xl flex-col gap-4">
          <h2 className={clsx("text-xl font-semibold", "md:text-2xl")}>
            What I offer:
          </h2>
          <ul className="flex list-disc flex-col gap-2">
            <li className="ml-8">
              Expertise in transforming Figma/PSD designs into{" "}
              <strong>pixel-perfect</strong>, functional websites.
            </li>
            <li className="ml-8">
              Proficiency in complex integrations, <strong>API handling</strong>
              , and data visualizations for real-time insights.
            </li>
            <li className="ml-8">
              Strong focus on <strong>code quality</strong>, SEO-friendly
              development, and performance optimization.
            </li>
            <li className="ml-8">
              A commitment to <strong>client satisfaction</strong>, from
              thorough industry research to seamless end-user experiences.
            </li>
          </ul>
          <h2 className={clsx("text-xl font-semibold", "md:text-2xl")}>
            Tech Stack:
          </h2>
          <ul className="flex list-disc flex-col gap-2">
            <li className="ml-8">
              <b>Frontend:</b> JavaScript, TypeScript, React, Redux, React
              Query, Next.js, CSS (Sass), HTML, Bootstrap, Tailwind CSS,
              Material-UI, styled-components.
            </li>
            <li className="ml-8">
              <b>Testing:</b> Postman.
            </li>
            <li className="ml-8">
              <b>VersionControl:</b> Git, GitHub, Bitbucket.
            </li>
            <li className="ml-8">
              <b>DesignTools:</b> Figma.
            </li>
          </ul>
          Whether you&apos;re looking to create a custom dashboard, deploy a
          responsive website, or enhance an existing platform, I can help you
          bring your vision to life. Let&apos;s work together to turn your ideas
          into impactful solutions!
        </div>
      </section>
    </>
  );
}
