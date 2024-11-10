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
  title: "Taras Postoliuk",
  description: "FE Dev Taras Postoliuk Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={hostGrotesk.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
