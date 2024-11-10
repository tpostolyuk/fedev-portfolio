import clsx from "clsx";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <main className="bg-zinc-100 flex flex-col">
      <section className="border-b-[1px] border-b-slate-900 py-14">
        <h1 className={clsx(bebasNeue.className, "text-center text-6xl")}>
          ABOUT ME
        </h1>
      </section>
      <section className="border-b-slate-900 border-b-[1px] flex flex-col justify-center items-center py-14">
        <div className="flex items-center gap-8 max-w-2xl">
          <Image
            className="float-right"
            src="/profile.png"
            alt="profile"
            height={200}
            width={200}
          />
          <p className="">
            👋 Hi there! I&apos;m a skilled Front-End Developer who focuses on
            crafting dynamic, scalable web applications that drive business
            growth. With extensive experience in React.js, TypeScript, Next.js,
            and other modern frameworks, I specialize in building responsive,
            interactive interfaces optimized for performance and user
            experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-6 max-w-2xl">
          <h2 className="text-2xl font-semibold">What I offer:</h2>
          <ul className="flex flex-col gap-2 list-disc">
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
          <h2 className="text-2xl font-semibold">Tech Stack:</h2>
          <ul className="flex flex-col gap-2 list-disc">
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
          Whether you’re looking to create a custom dashboard, deploy a
          responsive website, or enhance an existing platform, I can help you
          bring your vision to life. Let&apos;s work together to turn your ideas
          into impactful solutions!
        </div>
      </section>
    </main>
  );
}
