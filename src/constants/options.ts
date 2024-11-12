import { FaChartSimple, FaSquareUpwork } from "react-icons/fa6";
import { MdAnimation, MdDateRange } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoDevTo } from "react-icons/bi";
import { BsBricks } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

export const NAV_ITEMS = ["ABOUT", "SKILLS", "CONTACT"];

export const SOCIAL_LINKS = [
  { label: "Github", Icon: FaGithub, url: "https://github.com/tpostolyuk" },
  {
    label: "LinkedIn",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/taras-p-8199491a5/",
  },
  {
    label: "Upwork",
    Icon: FaSquareUpwork,
    url: "https://www.upwork.com/freelancers/~011e871456341347b4",
  },
  { label: "Email", Icon: FaEnvelope, url: "mailto:tpstlk.work@gmail.com" },
  {
    label: "Dev Community",
    Icon: BiLogoDevTo,
    url: "https://dev.to/tpostoliuk",
  },
];

export const SKILLS = {
  technologies: [
    { label: "JavaScript", Icon: FaReact },
    { label: "HTML", Icon: FaHtml5 },
    { label: "CSS", Icon: FaCss3 },
    { label: "RESTful API", Icon: TbApi },
  ],
  libraries: [
    { label: "TypeScript", Icon: SiTypescript },
    { label: "ReactJs", Icon: FaReact },
    { label: "NextJS", Icon: RiNextjsFill },
    { label: "Angular", Icon: FaAngular },
    { label: "Redux", Icon: SiRedux },
    { label: "Git (GitHub, GitLab, BitBucket)", Icon: FaGitAlt },
    { label: "TailwindCSS", Icon: SiTailwindcss },
    { label: "styled-components", Icon: SiStyledcomponents },
    {
      label: "Charts (chart.js, d3, echarts, recharts, highcharts)",
      Icon: FaChartSimple,
    },
    { label: "Dates (momentjs, datefns, dayjs, luxon)", Icon: MdDateRange },
    {
      label: "UI Components (mui, antd, radix, shadcdn, chakra)",
      Icon: BsBricks,
    },
    {
      label: "Animations: (framer-motion, react-transition-group)",
      Icon: MdAnimation,
    },
  ],
};
