import { FileTextOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import React from "react";
import { ClipLoader } from "react-spinners";
import useList from "../modules/patents/useList";

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
  const { items, isLoading } = useList();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline mb-8">Patents</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {items &&
          items?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300"
            >
              <FileTextOutlined className="text-3xl text-blue-500" />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold">{item?.name}</p>
                <p className="text-lg font-medium">Country: {item?.country}</p>
                <p className="text-lg">
                  Publication Number: {item?.publication_number}
                </p>
                <p className="text-lg">Publication date: {item?.name}</p>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default Patents;
