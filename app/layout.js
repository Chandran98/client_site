"use client";
import { Afacad } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import PageTrans from ".././components/page_transistion";

const inter = Afacad({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          {children}
          {/* <PageTrans>{children}</PageTrans> */}
        </AnimatePresence>
      </body>
    </html>
  );
}
