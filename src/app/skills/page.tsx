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
    <main className="bg-zinc-100 flex flex-col overflow-y-auto h-full">
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
          SKILLS
        </h1>
      </section>
      <section
        className={clsx(
          "flex flex-col justify-start items-center py-14 h-full",
          "dark:bg-slate-900 dark:text-white dark:border-b-white"
        )}
      >
        <div className="flex flex-col justify-start items-start gap-8 max-w-2xl w-full">
          <section className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">
              Programming Languages And Technologies:
            </h2>
            <ul className="flex items-center gap-6 list-none">
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaReact size={18} />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaHtml5 size={18} />
                <span>HTML</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaCss3 size={18} />
                <span>CSS</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <TbApi size={18} />
                <span>RESTful API</span>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">Framework and Libraries:</h2>
            <ul className="flex flex-wrap items-center gap-6 list-none">
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <SiTypescript size={18} />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaReact size={18} />
                <span>ReactJs</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <RiNextjsFill size={18} />
                <span>NextJS</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaAngular size={18} />
                <span>Angular</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <SiRedux size={18} />
                <span>Redux</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaGitAlt size={18} />
                <span>Git (GitHub, GitLab, BitBucket)</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <SiTailwindcss size={18} />
                <span>TailwindCSS</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <SiStyledcomponents size={18} />
                <span>styled-components</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <FaChartSimple size={18} />
                <span>
                  Chart Libraries (chart.js, d3, echarts, recharts, highcharts)
                </span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
                <MdDateRange size={18} />
                <span>Date Libraries (momentjs, datefns, dayjs, luxon)</span>
              </li>
              <li className="flex items-center gap-2 border-b-slate-900 border-b-[1px]">
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
