import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";

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
