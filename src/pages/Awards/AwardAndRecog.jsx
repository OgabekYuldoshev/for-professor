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
  const { items, isLoading } = useList({ type: 1 });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Awards and Recognitions</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.filter((item) => item?.type_id === 1 || item?.type_id === "1")
        .length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Awards
          </h2>
          <div className="grid gap-5">
            {items
              ?.filter((item) => item?.type_id === 1 || item?.type_id === "1")
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg"
                >
                  <a
                    href={item?.link}
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    {item?.name}
                  </a>
                  <p className="font-bold text-gray-500">{item?.text}</p>
                </div>
              ))}
          </div>
        </>
      ) : null}

      {items?.filter((item) => item?.type_id === 2 || item?.type_id === "2")
        ?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Recognitions
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {items
              ?.filter((item) => item?.type_id === 2 || item?.type_id === "2")
              ?.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg"
                >
                  <a
                    href={item?.link}
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    {item?.name}
                  </a>
                  <p className="font-bold text-gray-500">{item?.text}</p>
                  <p>January, 2022</p>
                </div>
              ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default BestPaper;
