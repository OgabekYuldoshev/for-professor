import React from "react";
import { motion } from "framer-motion";
import useList from "../modules/news/useList";
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
      <h1 className="text-2xl underline">News</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      <div className="flex flex-col gap-5">
        {items?.map((item, index) =>
          !(index & 1) ? (
            <div
              key={index}
              className="flex md:flex-row flex-col  gap-5 bg-white rounded-lg p-8 hover:shadow-lg hover:-translate-y-2 duration-300"
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
                    target="_blank"
                    className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                  >
                    {item?.title}
                  </a>
                </div>
                <p className="text-gray-800  text-center md:text-left">
                  {item?.text}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex md:flex-row flex-col hover:shadow-lg justify-end gap-5 bg-white rounded-lg p-8 transform hover:-translate-y-2 duration-300"
            >
              <div className="md:hidden flex md:justify-start justify-center">
                <div>
                  <div className="avatar">
                    <div className="w-32 rounded-xl">
                      <img src={`${config.app.baseUrl}/${item.image}`} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex md:justify-end justify-center">
                  <a
                    href={item?.link}
                    className="font-bold text-right cursor-pointer text-xl duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                  >
                    {item?.title}
                  </a>
                </div>

                <p className="text-gray-800 md:text-right text-center">
                  {item?.text}
                </p>
              </div>
              <div className="md:flex hidden">
                <div>
                  <div className="avatar">
                    <div className="w-32 rounded-xl">
                      <img src={`${config.app.baseUrl}/${item.image}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
