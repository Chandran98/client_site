// "use client";
import { Afacad } from "next/font/google";
import "./globals.css";
import Rootlayout from "./rootlayout";
// import { AnimatePresence } from "framer-motion";
// import PageTrans from ".././components/page_transistion";
// import ThemeProviders from "../providers/themeProviders";

const inter = Afacad({ subsets: ["latin"] });

export const metadata = {
  title: "Chandran",
  description: "portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className=" bg-gray-50 dark:bg-slate-800 ">
        <Rootlayout>{children}</Rootlayout>
      </body>
    </html>
  );
}
