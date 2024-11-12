import { Bebas_Neue } from "next/font/google";
import clsx from "clsx";
import {
  FaChartSimple,
  FaAngular,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3,
} from "react-icons/fa6";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { MdDateRange } from "react-icons/md";
import { BsBricks } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <main className="flex h-full flex-col overflow-y-auto bg-zinc-100">
      <section
        className={clsx(
          "border-b-[1px] border-b-slate-900 py-8",
          "dark:border-b-white dark:bg-slate-900",
        )}
      >
        <h1
          className={clsx(
            bebasNeue.className,
            "text-center text-6xl",
            "dark:text-white",
          )}
        >
          SKILLS
        </h1>
      </section>
      <section
        className={clsx(
          "flex h-full flex-col items-center justify-start py-14",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-8">
          <section className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">
              Programming Languages And Technologies:
            </h2>
            <ul className="flex list-none items-center gap-6">
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaReact size={18} />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaHtml5 size={18} />
                <span>HTML</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaCss3 size={18} />
                <span>CSS</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <TbApi size={18} />
                <span>RESTful API</span>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">Framework and Libraries:</h2>
            <ul className="flex list-none flex-wrap items-center gap-6">
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <SiTypescript size={18} />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaReact size={18} />
                <span>ReactJs</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <RiNextjsFill size={18} />
                <span>NextJS</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaAngular size={18} />
                <span>Angular</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <SiRedux size={18} />
                <span>Redux</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaGitAlt size={18} />
                <span>Git (GitHub, GitLab, BitBucket)</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <SiTailwindcss size={18} />
                <span>TailwindCSS</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <SiStyledcomponents size={18} />
                <span>styled-components</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <FaChartSimple size={18} />
                <span>
                  Chart Libraries (chart.js, d3, echarts, recharts, highcharts)
                </span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <MdDateRange size={18} />
                <span>Date Libraries (momentjs, datefns, dayjs, luxon)</span>
              </li>
              <li className="flex items-center gap-2 border-b-[1px] border-b-slate-900">
                <BsBricks size={18} />
                <span>UI Libraries (mui, antd, radix, shadcdn, chakra)</span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
