"use client";
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "next-themes";
// const ThemeSwitch = () => {
//   const { reslovedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   //   if(reslovedTheme==="dark"){
//   //     return
//   //   }
//   //   if(reslovedTheme==="light"){
//   //     return <FiMoon onClick={()=>setTheme("dark")}/>
//   //   }
//   return (
//     <>
//       {reslovedTheme === "dark" ? (
//         <FiSun onClick={() => setTheme("light")} />
//       ) : (
//         <FiMoon onClick={() => setTheme("dark")} />
//       )}
//     </>
//   );
// };

// export default ThemeSwitch;


// // app/components/ThemeSwitcher.tsx
// "use client";

// import {useTheme} from "next-themes";
// import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      {theme==="dark"? <FiMoon onClick={() => setTheme('light')}/>
      :<FiSun className=" text-white" onClick={() => setTheme('dark')}/>
    }</div>
  )
};