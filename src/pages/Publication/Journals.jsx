import React, { useState } from "react";
import Table from "../../components/Table";
import { motion } from "framer-motion";
import useList from "../../modules/publication/useList";
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

const Journals = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { items } = useList({
    params: { type: 3, year: startDate?.getFullYear() },
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <div className="flex md:flex-row flex-col justify-between items-center mb-8">
        <h2 className="text-2xl  mb-5 underline">Journals</h2>
        <div>
          <DatePicker
            className="focus:outline-none focus:border-green-500 border px-4 py-1 rounded text-base"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            dateFormat="yyyy"
          />
        </div>
      </div>
      <Table loading={!items?.length} dataSource={items} />
    </motion.div>
  );
};

export default Journals;
