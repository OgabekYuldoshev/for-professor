import { motion } from "framer-motion";
import React from "react";
import { ClipLoader } from "react-spinners";
import useList from "../modules/professional/useList";

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
  const { items, isLoading } = useList();
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

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.editor?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Journal Editorship
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {items?.editor?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg "
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  {item?.position_name}
                </a>
                <p className="font-bold text-gray-500">
                  {item?.which_magazine_or_conferencing}
                </p>
                <p>{item?.year}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {items?.organizing?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Organizing Committee in International Conferences
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {items?.organizing?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg "
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  {item?.position_name}
                </a>
                <p className="font-bold text-gray-500">
                  {item?.which_magazine_or_conferencing}
                </p>
                <p>{item?.year}</p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default Professional;
