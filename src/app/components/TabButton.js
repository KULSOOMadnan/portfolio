import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

function TabButton({ active, selectTab, children }) {
  const buttonClassees = active
    ? "text-[grey]"
    : "text-[grey] ";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-[#c08552] ${buttonClassees}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className='h-1 bg-[#9e6832] mt-2 mr-3 ' 
      ></motion.div>
    </button>
  );
}

export default TabButton;
