import { KeyOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import useList from "../modules/consultancy/useList";

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

const Projects = () => {
  const { items, isLoading } = useList();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Research Consultancy</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}
      <div className="grid gap-5 mt-8">
        {items &&
          items?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg cursor-pointer p-8 flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center"
            >
              <KeyOutlined className="text-3xl text-blue-500" />
              <h2 className="font-bold text-base">{item?.text}</h2>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default Projects;
