import { motion } from "framer-motion";
import React from "react";
import { ClipLoader } from "react-spinners";
import { config } from "../../config";
import useList from "../modules/collabaration/useList";

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

const Collaboration = () => {
  const { items, isLoading } = useList();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Research Collaborations</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.national?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            National
          </h2>
          <div className="grid-cols-2 grid gap-5">
            {items.national.map((item, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
              >
                <div className="flex md:justify-start justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item.image}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex md:justify-start justify-center">
                    <a
                      href={item?.link}
                      className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                    >
                      {item?.name}
                    </a>
                  </div>
                  <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                    {item?.position}
                  </p>
                  <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                    {item?.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* National */}
      {items?.international?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            International
          </h2>
          <div className="grid-cols-2 grid gap-5">
            {items?.international.map((item, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
              >
                <div className="flex md:justify-start justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item.image}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex md:justify-start justify-center">
                    <a
                      href={item?.link}
                      className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                    >
                      {item?.name}
                    </a>
                  </div>
                  <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                    {item?.position}
                  </p>
                  <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                    {item?.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default Collaboration;
