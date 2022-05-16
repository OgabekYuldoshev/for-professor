import React from "react";

const BestPaper = () => {
  return (
    <>
      <h1 className="text-2xl underline">Awards and Recognitions</h1>
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Awards
      </h2>
      <div className="grid gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg"
          >
            <h2 className="font-bold">Recognized Reviewer Award</h2>
            <p className="font-bold text-gray-500">
              Microprocessors and Microsystems (Oct 2020), Simulation Modelling
              Pratice and Theory (Aug 2020), Digital Communications and Networks
              (Aug 2020), Computerized Medical Imaging and Graphics (Jul 2020),
              Journal of Information Security and Applications (Mar 2020),
              Technological Forecasting and Social Change (Mar 2020), Computer
              Communications (Jan 2020), Informatics in Medicine Unlocked (Jan
              2020), Sustainable Computing: Informatics and Systems (Dec 2019),
              Applied Soft Computing (Feb 2019), International Journal of
              Communication System (Aug 2018), Computer and Electrical
              Engineering (Mar 2018),Computer Networks (Mar 2018),
              AEUE-International Journal of Electronics and Communications (Feb
              2018), Engineering Science and Technology, An International
              Journal (Feb 2018), Future Generation of Computer Systems (Jan
              2018),Journal of Networks and Computer Applications (Jan 2018),
              Digital Communications and Networks (Aug 2017)
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Recognitions
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg cursor-pointer p-8 gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 text-lg"
          >
            <h2 className="font-bold">
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
