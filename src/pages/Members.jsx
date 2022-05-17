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

const Members = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Memebers</h1>
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Faculty Guides
      </h2>
      <div className="flex flex-col gap-5">
        {Array.from(Array(10).keys()).map((item) =>
          !(item & 1) ? (
            <div
              key={item}
              className="flex md:flex-row flex-col  gap-5 bg-white rounded-lg p-8 hover:shadow-lg hover:-translate-y-2 duration-300"
            >
              <div className="flex md:justify-start justify-center">
                <div>
                  <div className="avatar">
                    <div className="w-32 rounded-xl">
                      <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex md:justify-start justify-center">
                  <h2 className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                    Prof. (Dr.) Sudeep Tanwar
                  </h2>
                </div>
                <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                  Professor, CSED, Institute of Technology, Nirma University,
                  Ahmedabad, India
                </p>
                <p className="text-gray-800  text-center md:text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque sunt veritatis neque iure quis molestiae sequi, quae
                  totam ratione voluptatem nisi consequatur illum cupiditate
                  voluptates, pariatur magni assumenda nam delectus facere
                  reiciendis, veniam non quia asperiores officiis. Minima
                  consectetur nisi quos ipsum, voluptates maxime dolores fuga
                  deleniti sequi, in molestias deserunt sapiente ab quod?
                  Voluptatem magnam ullam perspiciatis illum fugit cumque.
                  Voluptatibus error corporis, quis cupiditate provident maxime
                  ratione voluptates, quas quam, est sint nam dolorum velit
                  repellendus. Placeat aspernatur alias reiciendis reprehenderit
                  amet praesentium tempora atque. Voluptates obcaecati ex
                  numquam asperiores accusantium impedit inventore, maxime nobis
                  dolores, tenetur est.
                </p>
                <div className="flex gap-2 flex-wrap mt-5">
                  <div className="badge badge-primary cursor-pointer">
                    primary
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={item}
              className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 transform hover:-translate-y-2 duration-300"
            >
              <div className="md:hidden flex md:justify-start justify-center">
                <div>
                  <div className="avatar">
                    <div className="w-32 rounded-xl">
                      <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex md:justify-end justify-center">
                  <h2 className="font-bold text-right cursor-pointer text-xl duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                    Prof. (Dr.) Sudeep Tanwar
                  </h2>
                </div>
                <p className="text-gray-500 md:text-right text-center text-lg font-bold">
                  Professor, CSED, Institute of Technology, Nirma University,
                  Ahmedabad, India
                </p>
                <p className="text-gray-800 md:text-right text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque sunt veritatis neque iure quis molestiae sequi, quae
                  totam ratione voluptatem nisi consequatur illum cupiditate
                  voluptates, pariatur magni assumenda nam delectus facere
                  reiciendis, veniam non quia asperiores officiis. Minima
                  consectetur nisi quos ipsum, voluptates maxime dolores fuga
                  deleniti sequi, in molestias deserunt sapiente ab quod?
                  Voluptatem magnam ullam perspiciatis illum fugit cumque.
                  Voluptatibus error corporis, quis cupiditate provident maxime
                  ratione voluptates, quas quam, est sint nam dolorum velit
                  repellendus. Placeat aspernatur alias reiciendis reprehenderit
                  amet praesentium tempora atque. Voluptates obcaecati ex
                  numquam asperiores accusantium impedit inventore, maxime nobis
                  dolores, tenetur est.
                </p>
                <div className="flex gap-2 flex-wrap mt-5 md:justify-end justify-start">
                  <div className="badge badge-primary cursor-pointer">
                    primary
                  </div>
                  <div className="badge badge-secondary cursor-pointer">
                    primary
                  </div>
                </div>
              </div>
              <div className="md:flex hidden">
                <div>
                  <div className="avatar">
                    <div className="w-32 rounded-xl">
                      <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* PG */}
      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        PgStudents
      </h2>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
        <div className="bg-white p-8 hover:shadow-lg  rounded-lg flex flex-col items-center gap-3 transform hover:scale-105 duration-300 cursor pointer">
          <div className="avatar">
            <div className="w-32 rounded-xl">
              <img src="https://api.lorem.space/image/face?hash=64318" />
            </div>
          </div>
          <h3 className="font-bold">Ogabek Yuldoshev</h3>
        </div>

        <div className="bg-white p-8 hover:shadow-lg  rounded-lg flex flex-col items-center gap-3 transform hover:scale-105 duration-300 cursor pointer">
          <div className="avatar">
            <div className="w-32 rounded-xl">
              <img src="https://api.lorem.space/image/face?hash=64318" />
            </div>
          </div>
          <h3 className="font-bold">Ogabek Yuldoshev</h3>
        </div>
      </div>

      {/* Alumi */}

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Alumi
      </h2>

      <div className="grid-cols-2 grid gap-3">
        {new Array(5).fill().map((item) => (
          <div
            key={item}
            className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
          >
            <div className="flex md:justify-start justify-center">
              <div>
                <div className="avatar">
                  <div className="w-32 rounded-xl">
                    <img src="https://api.lorem.space/image/face?hash=64318" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:justify-start justify-center">
                <h2 className="font-bold cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                  Aparna Kumari
                </h2>
              </div>
              <p className="text-gray-500 text-center md:text-left">
                Dissertation title: Demand Response Management in Smart Grid
                Systems
              </p>
              <p className="text-gray-500 text-center md:text-left">
                Batch: 2017-2022
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Members;
