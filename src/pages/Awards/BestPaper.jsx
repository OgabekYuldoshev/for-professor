import React from "react";

const BestPaper = () => {
  return (
    <>
      <h1 className="text-2xl underline mb-8">Best Paper Awards</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg"
          >
            <h2 className="font-bold  hover:underline">
              Dr KW Wong Annual Best Paper Award 2021
            </h2>
            <p className="font-bold text-gray-500">
              Journal of Information Security and Applications
            </p>
            <p>January, 2022</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestPaper;
