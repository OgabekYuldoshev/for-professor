import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  in: {
    opacity: 1,
    y: -20,
  },
  out: {
    opacity: 0,
    y: 0,
  },
};

const Professional = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">
        Professional Activities and Services
      </h1>

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Journal Editorship
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg "
          >
            <h2 className="font-bold hover:underline">
              Editorial Board Member
            </h2>
            <p className="font-bold text-gray-500">
              Physical Communication (PHYCOM), Elsevier
            </p>
            <p>January 2021 - Present</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Professional;
