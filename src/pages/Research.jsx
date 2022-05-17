import { KeyOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";

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
      <h1 className="text-2xl underline">Research Consultancy</h1>
      <div className="grid gap-5 mt-8">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center"
          >
            <KeyOutlined className="text-3xl text-blue-500" />
            <h2 className="font-bold text-base">
              Prof (Dr) Sudeep Tanwar along with one of the UG CSE student (Mr.
              Mohil MaheshKumar Patel, 17BCE062) successfully contributed
              toaresearch project sanctioned under Lancaster University,
              Lancaster, UK, GCRF Internal SEED CORN Fund. For the same, they
              have received USD 1093 asaconsultancy charge from the LANCASTER
              UNIVERSITY, UK.
            </h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
