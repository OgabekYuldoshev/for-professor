import React from "react";
import { motion } from "framer-motion";
import useList from "../modules/members/useList";
import { config } from "../../config";
import { ClipLoader } from "react-spinners";

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
  const { items, isLoading } = useList();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      
      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}

      {items?.currentMembers?.has ? (
        <>
          <h1 className="text-2xl underline">Current Memebers</h1>
          {items.currentMembers.facultyGuides?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                Faculty Guides
              </h2>
              <div className="flex flex-col gap-5">
                {items?.currentMembers?.facultyGuides.map((item, index) =>
                  !(index & 1) ? (
                    <div
                      key={index}
                      className="flex md:flex-row flex-col  gap-5 bg-white rounded-lg p-8 hover:shadow-lg hover:-translate-y-2 duration-300"
                    >
                      <div className="flex md:justify-start justify-center">
                        <div>
                          <div className="avatar">
                            <div className="w-32 rounded-xl">
                              <img
                                src={`${config.app.baseUrl}/${item.image}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:justify-start justify-center">
                          <a
                            href={item?.link}
                            target="_blank"
                            className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                          >
                            {item?.first_name} {item?.last_name}{" "}
                            {item?.second_name}
                          </a>
                        </div>
                        <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                          {item?.current_position}, {item.address}
                        </p>
                        <p className="text-gray-800  text-center md:text-left">
                          {item?.text}
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
                      key={index}
                      className="flex md:flex-row flex-col hover:shadow-lg justify-end gap-5 bg-white rounded-lg p-8 transform hover:-translate-y-2 duration-300"
                    >
                      <div className="md:hidden flex md:justify-start justify-center">
                        <div>
                          <div className="avatar">
                            <div className="w-32 rounded-xl">
                              <img
                                src={`${config.app.baseUrl}/${item.image}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:justify-end justify-center">
                          <a
                            href={item?.link}
                            className="font-bold text-right cursor-pointer text-xl duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                          >
                            {item?.first_name} {item?.last_name}{" "}
                            {item?.second_name}
                          </a>
                        </div>
                        <p className="text-gray-500 md:text-right text-center text-lg font-bold">
                          {item?.current_position}, {item.address}
                        </p>
                        <p className="text-gray-800 md:text-right text-center">
                          {item?.text}
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
                              <img
                                src={`${config.app.baseUrl}/${item.image}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          ) : null}
          {items.currentMembers.phdStudents?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                PhdStudents
              </h2>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
                {items.currentMembers.phdStudents?.map((item) => (
                  <div className="bg-white p-8 hover:shadow-lg  rounded-lg flex flex-col items-center gap-3 transform hover:scale-105 duration-300 cursor pointer">
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item?.image}`} />
                      </div>
                    </div>
                    <h3 className="font-bold">
                      {item?.first_name} {item?.last_name} {item?.second_name}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}
          {items.currentMembers.pgStudents?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                PgStudents
              </h2>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
                {items.currentMembers.pgStudents?.map((item) => (
                  <div className="bg-white p-8 hover:shadow-lg  rounded-lg flex flex-col items-center gap-3 transform hover:scale-105 duration-300 cursor pointer">
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item?.image}`} />
                      </div>
                    </div>
                    <h3 className="font-bold">
                      {item?.first_name} {item?.last_name} {item?.second_name}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}
          {items.currentMembers.ugstudents?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                UgStudents
              </h2>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
                {items.currentMembers.ugstudents?.map((item) => (
                  <div className="bg-white p-8 hover:shadow-lg  rounded-lg flex flex-col items-center gap-3 transform hover:scale-105 duration-300 cursor pointer">
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item?.image}`} />
                      </div>
                    </div>
                    <h3 className="font-bold">
                      {item?.first_name} {item?.last_name} {item?.second_name}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      ) : (
        false
      )}

      {/* Alumi */}

      {items?.secondaryMembers?.has ? (
        <>
          <h1 className="text-2xl underline mt-8">Alumi Memebers</h1>

          {items.secondaryMembers?.facultyGuides?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                Faculty Guides
              </h2>
              <div className="flex flex-col gap-5">
                {items?.secondaryMembers?.facultyGuides.map((item, index) =>
                  !(index & 1) ? (
                    <div
                      key={index}
                      className="flex md:flex-row flex-col  gap-5 bg-white rounded-lg p-8 hover:shadow-lg hover:-translate-y-2 duration-300"
                    >
                      <div className="flex md:justify-start justify-center">
                        <div>
                          <div className="avatar">
                            <div className="w-32 rounded-xl">
                              <img
                                src={`${config.app.baseUrl}/${item.image}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:justify-start justify-center">
                          <a
                            href={item?.link}
                            target="_blank"
                            className="font-bold text-xl cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                          >
                            {item?.first_name} {item?.last_name}{" "}
                            {item?.second_name}
                          </a>
                        </div>
                        <p className="text-gray-500 text-center md:text-left text-lg font-bold">
                          {item?.current_position}, {item.address}
                        </p>
                        <p className="text-gray-800  text-center md:text-left">
                          {item?.text}
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
                      key={index}
                      className="flex md:flex-row flex-col hover:shadow-lg justify-end gap-5 bg-white rounded-lg p-8 transform hover:-translate-y-2 duration-300"
                    >
                      <div className="md:hidden flex md:justify-start justify-center">
                        <div>
                          <div className="avatar">
                            <div className="w-32 rounded-xl">
                              <img
                                src={`${config.app.baseUrl}/${item.image}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex md:justify-end justify-center">
                          <a
                            href={item?.link}
                            className="font-bold text-right cursor-pointer text-xl duration border-b border-b-transparent hover:border-b-black ease-in w-fit"
                          >
                            {item?.first_name} {item?.last_name}{" "}
                            {item?.second_name}
                          </a>
                        </div>
                        <p className="text-gray-500 md:text-right text-center text-lg font-bold">
                          {item?.current_position}, {item.address}
                        </p>
                        <p className="text-gray-800 md:text-right text-center">
                          {item?.text}
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
                              <img
                                src={`${config.app.baseUrl}/${item.image}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          ) : null}

          {items.secondaryMembers?.phdStudents?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                PhdStudents
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {items.secondaryMembers.phdStudents?.map((item) => (
                  <div
                    key={item}
                    className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
                  >
                    <div className="flex md:justify-start justify-center">
                      <div>
                        <div className="avatar">
                          <div className="w-32 rounded-xl">
                            <img src={`${config.app.baseUrl}/${item?.image}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <h2 className="font-bold cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                          {item?.first_name} {item?.last_name}{" "}
                          {item?.second_name}
                        </h2>
                      </div>
                      <p className="text-gray-500 text-center md:text-left">
                        Dissertation title: {item?.dissertation}
                      </p>
                      <p className="text-gray-500 text-center md:text-left">
                        Batch: {item?.year_of_study}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {items.secondaryMembers?.pgStudents?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                PgStudents
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {items.secondaryMembers.pgStudents?.map((item) => (
                  <div
                    key={item}
                    className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
                  >
                    <div className="flex md:justify-start justify-center">
                      <div>
                        <div className="avatar">
                          <div className="w-32 rounded-xl">
                            <img src={`${config.app.baseUrl}/${item?.image}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <h2 className="font-bold cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                          {item?.first_name} {item?.last_name}{" "}
                          {item?.second_name}
                        </h2>
                      </div>
                      <p className="text-gray-500 text-center md:text-left">
                        Dissertation title: {item?.dissertation}
                      </p>
                      <p className="text-gray-500 text-center md:text-left">
                        Batch: {item?.year_of_study}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {items.secondaryMembers?.ugstudents?.length ? (
            <>
              <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
                UgStudents
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {items.secondaryMembers?.ugstudents?.map((item) => (
                  <div
                    key={item}
                    className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
                  >
                    <div className="flex md:justify-start justify-center">
                      <div>
                        <div className="avatar">
                          <div className="w-32 rounded-xl">
                            <img src={`${config.app.baseUrl}/${item?.image}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <h2 className="font-bold cursor-pointer duration border-b border-b-transparent hover:border-b-black ease-in w-fit">
                          {item?.first_name} {item?.last_name}{" "}
                          {item?.second_name}
                        </h2>
                      </div>
                      <p className="text-gray-500 text-center md:text-left">
                        Dissertation title: {item?.dissertation}
                      </p>
                      <p className="text-gray-500 text-center md:text-left">
                        Batch: {item?.year_of_study}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </motion.div>
  );
};

export default Members;
