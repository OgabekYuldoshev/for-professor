import React, { useState } from "react";
import Table from "../../components/Table";
import { motion } from "framer-motion";
import useList from "../../modules/publication/useWithTable";
import DatePicker from "react-datepicker";

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

const Conferences = () => {
  const [startDate, setStartDate] = useState(undefined);
  const { items, isFetching } = useList({
    params: { type: 4, year: startDate?.getFullYear() },
  });

  const data = items?.data;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <div className="flex md:flex-row flex-col justify-between items-center  mb-8">
        <h2 className="text-2xl  mb-5 underline">Conferences</h2>
        <div>
          <DatePicker
            placeholderText="Select year"
            className="focus:outline-none focus:border-green-500 border px-4 py-1 rounded text-base"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            dateFormat="yyyy"
          />
        </div>
      </div>
      <Table loading={isFetching} dataSource={data} />
    </motion.div>
  );
};

export default Conferences;
