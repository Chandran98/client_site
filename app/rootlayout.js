"use client"
import React from 'react'
import { AnimatePresence } from "framer-motion";
import PageTrans from "../components/page_transistion";
import ThemeProviders from "../providers/themeProviders";

const Rootlayout = ({children}) => {
  return ( <ThemeProviders>
    <AnimatePresence mode="wait">
      
      <PageTrans>{children}</PageTrans>
    </AnimatePresence>
  </ThemeProviders>
  )
}

export default Rootlayout