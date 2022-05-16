import { FolderOpenOutlined } from "@ant-design/icons";
import React from "react";

const Projects = () => {
  return (
    <>
      <h1 className="text-2xl underline">Projects</h1>
      <div className="grid gap-5 mt-8">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg p-8 flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300"
          >
            <FolderOpenOutlined className="text-3xl text-blue-500" />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">
                SAR Polarimetry for Detecting Ocean Surface Targets
              </h2>
              <h4 className="text-lg font-bold text-gray-700">
                ISRO Respond scheme, Govt of India
              </h4>
              <div className=" text-gray-500 font-bold flex flex-col gap-1 mt-2">
                <p>
                  Investigators: Dr Madhuri Bhavsar, Dr Zunnun Narmawala, Dr
                  Sudeep Tanwar
                </p>
                <p>Funding Amount: Rs. 18,52,000</p>
                <p>Duration: 2017-2021</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
