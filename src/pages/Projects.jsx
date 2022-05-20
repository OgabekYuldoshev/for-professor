import { FolderOpenOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";
import useList from "../modules/projects/useList";
import { ClipLoader } from "react-spinners";

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
      <h1 className="text-2xl underline">Projects</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.length ? (
        <div className="grid gap-5 mt-8">
          {items?.map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg p-8 flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300"
            >
              <FolderOpenOutlined className="text-3xl text-blue-500" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <h4 className="text-lg font-bold text-gray-700">
                  {item.address}
                </h4>
                <div className=" text-gray-500 font-bold flex flex-col gap-1 mt-2">
                  <p>{item.investigators}</p>
                  <p>Funding Amount: {item.funding_amount}</p>
                  <p>Duration: {item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
};

export default Projects;
