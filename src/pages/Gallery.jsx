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

const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-300"
          >
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold">
                Attended Young Professional Program and reception in IEEE ICC at
                Shanghai China in May 2019
              </h2>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
