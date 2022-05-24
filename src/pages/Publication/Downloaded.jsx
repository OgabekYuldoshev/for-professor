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

const Downloaded = () => {
  const { items } = useList({ type: 2 });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h2 className="text-2xl  mb-5 underline">Most Downloaded</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {items ? (
          items?.map((item) => (
            <div
              key={item}
              className="bg-white group p-8 cursor-pointer rounded-lg flex flex-col gap-2 hover:scale-105 duration-300 transform"
            >
              <a
                href={item?.link}
                target="_blank"
                className="text-xl font-bold group-hover:underline break-words"
              >
                {item?.name}
              </a>
              <p className="text-lg font-bold text-gray-500 break-words">
                {item?.direction}
              </p>
              <p className=" font-bold text-gray-500 break-words">
                {item?.author}
              </p>
              <span className=" text-gray-500 break-words">
                Year: {item?.published_year}
              </span>
            </div>
          ))
        ) : (
          <h2 className="text-center my-10">No Content</h2>
        )}
      </div>
    </motion.div>
  );
};

export default Downloaded;
