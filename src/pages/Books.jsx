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

const Books = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Books</h1>
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Authored Books
      </h2>

      <div className="grid-cols-1 grid gap-3">
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
                <h2 className="font-bold cursor-pointer md:text-left text-center duration hover:underline ease-in text-2xl">
                  Cyber Security: Issues and Current Trends
                </h2>
              </div>
              <h4 className="font-bold md:text-left text-center text-gray-500 text-lg">
                N. Dutta, N. Jadav, S. Tanwar, H.K.D. Sarma, E. Pricop
              </h4>
              <div className="text-base mt-2">
                <p className="text-gray-500 text-center md:text-left">
                  Publisher: Springer Nature Switzerland
                </p>
                <p className="text-gray-500 text-center md:text-left">
                  Year: 2021
                </p>
                <p className="text-gray-500 text-center md:text-left">
                  Pages: 1-310
                </p>
                <p className="text-gray-500 text-center md:text-left">
                  ISBN: 978-981-16-6596-7
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Books;
