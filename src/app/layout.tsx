import { Host_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import clsx from "clsx";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taras P.",
  description: "FE Dev Taras Postoliuk Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="bg-zinc-100 dark:bg-slate-900"
      suppressHydrationWarning
      lang="en"
    >
      <body
        className={clsx(
          hostGrotesk.className,
          "flex h-screen flex-col overflow-hidden",
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          enableColorScheme
          attribute="class"
          enableSystem
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
