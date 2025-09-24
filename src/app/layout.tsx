import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Why You Should Join",
  description: "A venture firm for ambitious builders.",
  metadataBase: new URL("https://whyysj.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
