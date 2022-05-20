import { motion } from "framer-motion";
import React from "react";
import { ClipLoader } from "react-spinners";
import useList from "../../modules/awards/useList";

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
  const { items, isLoading } = useList();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline mb-8">Travel Grants</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.travels?.length ? (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {items?.travels?.map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg"
            >
              <a
                href={item?.link}
                target="_blank"
                className="font-bold  hover:underline"
              >
                {item?.name}
              </a>
              <p className="font-bold text-gray-500">{item?.text}</p>
              <p> {item?.date}</p>
            </div>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
};

export default BestPaper;
