import { motion } from "framer-motion";
import React from "react";

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
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Research Collaborations</h1>
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        National
      </h2>
      <div className="grid-cols-2 grid gap-5">
        {new Array(5).fill().map((item) => (
          <div
            key={item}
            className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
          >
            <div className="flex md:justify-start justify-center">
              <div>
                <div className="avatar">
                  <div className="w-32 rounded-xl">
                    <img src="https://api.lorem.space/image/face?hash=64318" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:justify-start justify-center">
                <h2 className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                  Dr. Neeraj Kumar
                </h2>
              </div>
              <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                Professor
              </p>
              <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                Thapar Institute of Engineering and Technology, India
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* National */}
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        International
      </h2>
      <div className="grid-cols-2 grid gap-5">
        {new Array(5).fill().map((item) => (
          <div
            key={item}
            className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
          >
            <div className="flex md:justify-start justify-center">
              <div>
                <div className="avatar">
                  <div className="w-32 rounded-xl">
                    <img src="https://api.lorem.space/image/face?hash=64318" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:justify-start justify-center">
                <h2 className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                  Dr. Neeraj Kumar
                </h2>
              </div>
              <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                Professor
              </p>
              <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                Thapar Institute of Engineering and Technology, India
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Collaboration;
