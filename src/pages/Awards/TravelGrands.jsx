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

const BestPaper = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline mb-8">Travel Grants</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg "
          >
            <h2 className="font-bold hover:underline">
              Foreign Travel Grant, IEEE ICC 2021 awarded to Rajesh Gupta
            </h2>
            <p className="font-bold text-gray-500">IEEE ComSoc</p>
            <p>May, 2021</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BestPaper;
