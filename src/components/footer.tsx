import { NAV_ITEMS } from "@/constants/options";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="border-t-slate-900 py-4 bg-zinc-100">
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <Link
            className="hover:underline"
            href={item.toLowerCase()}
            key={item}
          >
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};
