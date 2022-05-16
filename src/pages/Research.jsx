import { KeyOutlined } from "@ant-design/icons";
import React from "react";

const Projects = () => {
  return (
    <>
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
    </>
  );
};

export default Projects;
