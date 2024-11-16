import { Host_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

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
      className="min-h-screen bg-zinc-100 dark:bg-slate-900"
      suppressHydrationWarning
      lang="en"
    >
      <body className={hostGrotesk.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow bg-zinc-100 dark:bg-slate-900">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
