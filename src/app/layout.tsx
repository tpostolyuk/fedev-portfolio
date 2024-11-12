import { Host_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";

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
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        className={hostGrotesk.className}
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
