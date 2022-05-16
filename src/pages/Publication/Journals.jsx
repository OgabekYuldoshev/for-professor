import React from "react";
import Table from "../../components/Table";
import { Input } from "antd";
const { Search } = Input;

const Journals = () => {
  const dataSource = Array.from(Array(59).keys()).fill({
    key: 1,
    title:
      "Adoption of Blockchain for Data Privacy in 6G-Envisioned Augmented Reality: Opportunities and Challenges",
    ceo: "Pronaya Bhattacharya, Farnazbanu Patel, Vishaka Ralegankar, Bhaumik Thakkar, Sudeep Tanwar & Mohammad Abouhawwash",
    location:
      "Emerging Technologies for Computing, Communication and Smart Cities. Lecture Notes in Electrical Engineering, vol 875. Springer, Singapore.",
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl  mb-5 underline">Journals</h2>
        <Search placeholder="input search text" className="w-80" />
      </div>
      <div>
        <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
          20202
        </h2>
        <Table dataSource={dataSource} />
      </div>

      <div>
        <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
          20202
        </h2>
        <Table dataSource={dataSource} />
      </div>
    </>
  );
};

export default Journals;
