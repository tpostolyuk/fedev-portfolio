"use client";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export const ThemeToggle: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={clsx("group rounded p-2 text-slate-900", "dark:text-white")}
    >
      {resolvedTheme === "dark" ? (
        <MdOutlineLightMode className="group-hover:text-yellow-400" size={24} />
      ) : (
        <MdOutlineDarkMode className="group-hover:text-yellow-400" size={24} />
      )}
    </button>
  );
};
