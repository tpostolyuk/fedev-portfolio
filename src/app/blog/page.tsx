"use client";

import clsx from "clsx";

import { Title } from "@/components/title";

export default function Blog() {
  return (
    <main className="flex h-full flex-col overflow-y-auto bg-zinc-100">
      <Title title="BLOG (COMING SOON)" />
      <section
        className={clsx(
          "flex h-full flex-grow flex-col items-center justify-start px-4 py-8",
          "dark:border-b-white dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="flex w-full max-w-2xl flex-col items-start justify-start gap-8">
          <div className="flex w-full flex-col gap-2">
            <div className="h-5 w-full max-w-60 animate-pulse rounded-md bg-gray-300" />
            <div className="h-3 w-full max-w-40 animate-pulse rounded-md bg-gray-300" />
            <div className="h-40 w-full animate-pulse rounded-md bg-gray-300" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="h-5 w-full max-w-60 animate-pulse rounded-md bg-gray-300" />
            <div className="h-3 w-full max-w-40 animate-pulse rounded-md bg-gray-300" />
            <div className="h-40 w-full animate-pulse rounded-md bg-gray-300" />
          </div>
        </div>
      </section>
    </main>
  );
}
