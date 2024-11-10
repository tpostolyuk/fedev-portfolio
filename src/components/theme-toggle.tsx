"use client";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx("p-2 text-slate-900 rounded group", "dark:text-white")}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode className="group-hover:text-yellow-400" size={24} />
      ) : (
        <MdOutlineDarkMode className="group-hover:text-yellow-400" size={24} />
      )}
    </button>
  );
};
