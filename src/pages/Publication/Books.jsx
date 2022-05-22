import React from "react";
import Table from "../../components/Table";
import { Select } from "antd";
import { motion } from "framer-motion";
const { Option } = Select;

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
  const dataSource = Array.from(Array(59).keys()).fill({
    key: 1,
    title:
      "Adoption of Blockchain for Data Privacy in 6G-Envisioned Augmented Reality: Opportunities and Challenges",
    ceo: "Pronaya Bhattacharya, Farnazbanu Patel, Vishaka Ralegankar, Bhaumik Thakkar, Sudeep Tanwar & Mohammad Abouhawwash",
    location:
      "Emerging Technologies for Computing, Communication and Smart Cities. Lecture Notes in Electrical Engineering, vol 875. Springer, Singapore.",
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <div className="flex md:flex-row flex-col justify-between items-center  mb-8">
        <h2 className="text-2xl  mb-5 underline">Books Chapters</h2>
        <Select placeholder="Select year" className="w-40">
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
        </Select>
      </div>
      <Table dataSource={dataSource} />
    </motion.div>
  );
};

export default Books;
