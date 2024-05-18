"use client";

// import { animate, useIsomorphicLayoutEffect } from "framer-motion";
// import React, { useRef } from "react";

// const AnimateCounter = ({ from, to, animatedOption }) => {
//   const ref = useRef(null);
//   useIsomorphicLayoutEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const controls = animate(from, to, {
//       duration: 1.5,
//       ease: "easeOut",
//       ...animatedOption,
//       onUpdate(value) {
//         element.textContext = String(value);
//       },
//     });
//   }, [ref]);
//   console.log(ref);
//   return <span ref={ref}/>;
// };

// export default AnimateCounter;

// components/CountingNumber.js
// components/CountingNumber.js

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CountingNumber = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView= useInView(ref,{once:true});

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount(count + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [inView,count, endValue]);

  return (
    <motion.div ref={ref}
      className="text-4xl font-bold text-center"
      animate={{ scale: [1, 1.1, 1], duration: 5 }}
    >
      {count}
    </motion.div>
  );
};

export default CountingNumber;
