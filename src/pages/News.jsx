import React from "react";
import { motion } from "framer-motion";
import useList from "../modules/news/useList";
import { ClipLoader } from "react-spinners";
import { config } from "../../config";
import moment from "moment";

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
  const data = items?.data;
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline mb-8">News</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      <div className="flex flex-col gap-5">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col  gap-5 bg-white rounded-lg p-8 hover:shadow-lg hover:-translate-y-2 duration-300"
          >
            <div className="flex md:justify-start justify-center">
              <div>
                <div className="avatar">
                  <div className="w-[300px] rounded-xl">
                    <img src={`${config.app.baseUrl}/${item.image}`} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:flex-row flex-col md:justify-between justify-center mb-5">
                <a
                  href={item?.link}
                  target="_blank"
                  className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                >
                  {item?.title}
                </a>
                <span className="mt-2">
                  {moment(item?.created_at).format("LLLL")}
                </span>
              </div>
              <p className="text-gray-800  text-center md:text-left">
                {item?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
