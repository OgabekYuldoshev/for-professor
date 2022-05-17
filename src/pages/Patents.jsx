import { FileTextOutlined } from "@ant-design/icons";
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

const Patents = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Patents</h1>
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Indiana
      </h2>
      <div className="grid gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg p-8 flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300"
          >
            <FileTextOutlined className="text-3xl text-blue-500" />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-bold">
                One of the design patent of Dr Sudeep Tanwar Titled as: BIG-
                DATA IN SUPPLY CHAIN ANALYSIS USING BLOCKCHAIN has been
                published by the Patent Office,
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Patents;
