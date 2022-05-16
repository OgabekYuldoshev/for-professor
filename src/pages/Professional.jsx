import { KeyOutlined } from "@ant-design/icons";
import React from "react";

const Professional = () => {
  return (
    <>
      <h1 className="text-2xl underline">Professional Activities and Services</h1>

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Journal Editorship
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg "
          >
            <h2 className="font-bold hover:underline">
              Editorial Board Member
            </h2>
            <p className="font-bold text-gray-500">
              Physical Communication (PHYCOM), Elsevier
            </p>
            <p>January 2021 - Present</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Professional;
