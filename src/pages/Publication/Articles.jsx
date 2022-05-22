import { motion } from "framer-motion";
import React from "react";
import useList from "../../modules/publication/useList";

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

const Articles = () => {
  const { items } = useList();
  console.log(items);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h2 className="text-2xl  mb-5 underline">Highly Cited Articles</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {new Array(5).fill().map((item) => (
          <div
            key={item}
            className="bg-white group p-8 cursor-pointer rounded-lg flex flex-col gap-2 hover:scale-105 duration-300 transform"
          >
            <h2 className="text-xl font-bold group-hover:underline">
              Blockchain envisioned UAV networks: Challenges, solutions, and
              comparisons
            </h2>
            <p className="text-lg font-bold text-gray-500">
              Parimal Mehta, Rajesh Gupta, Sudeep Tanwar
            </p>
            <p className=" font-bold text-gray-500">
              Parimal Mehta, Rajesh Gupta, Sudeep Tanwar
            </p>
            <span className=" text-gray-500">Year: 2019-2020, 2020-2021</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Articles;
