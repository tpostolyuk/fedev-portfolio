import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { Bebas_Neue } from "next/font/google";
import { BiLogoDevTo } from "react-icons/bi";
import clsx from "clsx";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <main className="bg-zinc-100 flex flex-col h-[calc(100vh-130px)]">
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
          CONTACT
        </h1>
      </section>
      <section
        className={clsx(
          "flex flex-col justify-center items-center py-14 h-full",
          "dark:bg-slate-900 dark:text-white dark:border-b-white"
        )}
      >
        <div className="flex flex-col justify-start items-start gap-8 max-w-2xl w-full">
          <div className="border-b-2 border-b-slate-900">
            <h2 className="text-4xl text-left font-medium">
              Get in touch with me via links on social media or send me an{" "}
              <a
                href="mailto:tpstlk.work@gmail.com"
                className="hover:underline"
                target="_blank"
              >
                <strong>email</strong>
              </a>
              .
            </h2>
          </div>
          <ul className="grid grid-cols-3 items-start gap-8">
            <li className="hover:underline group">
              <a
                href="https://github.com/tpostolyuk"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaGithub
                  className="group-hover:text-slate-800 group-hover:rotate-6"
                  size={32}
                />
                <span>Github</span>
              </a>
            </li>
            <li className="hover:underline group">
              <a
                href="https://www.linkedin.com/in/taras-p-8199491a5/"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaLinkedin
                  className="group-hover:text-slate-800 group-hover:rotate-6"
                  size={32}
                />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="hover:underline group">
              <a
                href="https://www.upwork.com/freelancers/~011e871456341347b4"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaSquareUpwork
                  className="group-hover:text-slate-800 group-hover:rotate-6"
                  size={32}
                />
                <span>Upwork</span>
              </a>
            </li>
            <li className="hover:underline group">
              <a
                href="mailto:tpstlk.work@gmail.com"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaEnvelope
                  className="group-hover:text-slate-800 group-hover:rotate-6"
                  size={30}
                />
                <span>Email</span>
              </a>
            </li>
            <li className="hover:underline group">
              <a
                className="flex items-center gap-2"
                href="https://dev.to/tpostoliuk"
                target="_blank"
              >
                <BiLogoDevTo
                  className="group-hover:text-slate-800 group-hover:rotate-6"
                  size={32}
                />
                <span>Dev Community</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
