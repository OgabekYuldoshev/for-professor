import { motion } from "framer-motion";
import React from "react";
import { config } from "../../config";
import useList from "../modules/books/useList";
import ClipLoader from "react-spinners/ClipLoader";

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

const Books = () => {
  const { items, isLoading } = useList();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Books</h1>

      {isLoading && (
        <div className="my-10 flex justify-center items-center">
          <ClipLoader />
        </div>
      )}
      {items?.authored?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Authored Books
          </h2>
          <div className="grid-cols-1 grid gap-3">
            {items?.authored?.map((item, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
              >
                <div className="flex md:justify-start justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item.image}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex md:justify-start justify-center">
                    <a
                      href={item?.link}
                      target="_blank"
                      className="font-bold cursor-pointer md:text-left text-center duration hover:underline ease-in text-2xl"
                    >
                      {item?.name}
                    </a>
                  </div>
                  <h4 className="font-bold md:text-left text-center text-gray-500 text-lg">
                    {item?.author}
                  </h4>
                  <div className="text-base mt-2">
                    <p className="text-gray-500 text-center md:text-left">
                      Publisher: {item?.publisher}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      Year: {item?.year}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      Pages: {item?.pages}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      ISBN: {item?.isb_number}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {items?.edited?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Edited Books
          </h2>
          <div className="grid-cols-1 grid gap-3">
            {items?.authored?.map((item, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
              >
                <div className="flex md:justify-start justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item.image}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex md:justify-start justify-center">
                    <a
                      href={item?.link}
                      target="_blank"
                      className="font-bold cursor-pointer md:text-left text-center duration hover:underline ease-in text-2xl"
                    >
                      {item?.name}
                    </a>
                  </div>
                  <h4 className="font-bold md:text-left text-center text-gray-500 text-lg">
                    {item?.author}
                  </h4>
                  <div className="text-base mt-2">
                    <p className="text-gray-500 text-center md:text-left">
                      Publisher: {item?.publisher}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      Year: {item?.year}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      Pages: {item?.pages}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      ISBN: {item?.isb_number}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {items?.confirenced?.length ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Edited Books as Conference Proceedings
          </h2>
          <div className="grid-cols-1 grid gap-3">
            {items?.confirenced?.map((item, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col hover:shadow-lg  gap-5 bg-white rounded-lg p-8 hover:-translate-y-2 duration-300"
              >
                <div className="flex md:justify-start justify-center">
                  <div>
                    <div className="avatar">
                      <div className="w-32 rounded-xl">
                        <img src={`${config.app.baseUrl}/${item.image}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex md:justify-start justify-center">
                    <a
                      href={item?.link}
                      target="_blank"
                      className="font-bold cursor-pointer md:text-left text-center duration hover:underline ease-in text-2xl"
                    >
                      {item?.name}
                    </a>
                  </div>
                  <h4 className="font-bold md:text-left text-center text-gray-500 text-lg">
                    {item?.author}
                  </h4>
                  <div className="text-base mt-2">
                    <p className="text-gray-500 text-center md:text-left">
                      Publisher: {item?.publisher}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      Year: {item?.year}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      Pages: {item?.pages}
                    </p>
                    <p className="text-gray-500 text-center md:text-left">
                      ISBN: {item?.isb_number}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default Books;
