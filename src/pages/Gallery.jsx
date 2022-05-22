import { motion } from "framer-motion";
import React from "react";
import { ClipLoader } from "react-spinners";
import { config } from "../../config";
import useList from "../modules/galarey/useList";

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
      <h1 className="text-2xl underline">Gallery</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.photo?.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
          {items?.photo?.map((item, index) => (
            <div>
              <div
                key={index}
                className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-300"
              >
                <figure>
                  <img
                    src={`${config.app.baseUrl}/${item.image}`}
                    alt={item?.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-lg font-bold text-center">
                    {item?.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {items?.media?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Media Coverage
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
            {items?.media?.map((item, index) => (
              <div>
                <div
                  key={index}
                  className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-300"
                >
                  <figure>
                    <img
                      src={`${config.app.baseUrl}/${item.image}`}
                      alt={item?.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold text-center">
                      {item?.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default Projects;
