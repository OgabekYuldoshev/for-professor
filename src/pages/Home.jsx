import {
  BookOutlined,
  LikeOutlined,
  MessageOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Carousel, Statistic } from "antd";
import React from "react";
// import { config } from "../../config";
import { motion } from "framer-motion";
import { useQueryClient } from "react-query";
import useList from "../modules/home/useList";
import { config } from "../../config";
import moment from "moment";

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

const Home = () => {
  const { items } = useList();
  // console.log(items);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["CONTACTS"], { exact: false });
  const item = data?.item;
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline mb-8">
        {item?.name?.toUpperCase() || "USER"}'S RESEARCH GROUP
      </h1>

      {!!items?.sliders.length ? (
        <Carousel autoplay>
          {items?.sliders?.map((item) => (
            <img
              key={item}
              className="h-80 object-cover"
              src={`${config.app.baseUrl}/${item?.image}`}
              alt={item?.title}
            />
          ))}
        </Carousel>
      ) : null}

      <div className="my-5 grid lg:grid-cols-2 grid-cols-1 gap-5">
        {/* Analitika */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="mb-5">
              <h2 className="text-base">Publication</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Journal publications"
                  value={items?.publications?.journals || 0}
                  prefix={<BookOutlined />}
                />
              </div>

              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Book chapters"
                  value={items?.publications?.books || 0}
                  prefix={<BookOutlined />}
                />
              </div>
              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Conference Proceedings"
                  value={items?.publications?.conferences || 0}
                  prefix={<MessageOutlined />}
                />
              </div>
              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Authored/Edited books"
                  value={items?.publications?.authored_and_edited_books || 0}
                  prefix={<BookOutlined />}
                />
              </div>
            </div>
          </div>
          {/* 
          <div>
            <div className="mb-5">
              <h2 className="text-base">Google Scholar</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </div>

              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </div>
              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <h2 className="text-base">Scopus</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </div>

              <div className="p-5 bg-white rounded-lg flex justify-center hover:scale-105 duration-300 hover:shadow-lg">
                <Statistic
                  title="Feedback"
                  value={1128}
                  prefix={<LikeOutlined />}
                />
              </div>
            </div>
          </div> */}
        </div>

        {/* Resent News */}
        <div>
          <div className="mb-5">
            <h2 className="text-base">Recent News</h2>
          </div>
          <div
            style={{ height: "30rem" }}
            className="bg-white rounded-lg p-8 overflow-y-auto flex flex-col gap-3 scroll relative"
          >
            {items?.news?.length ? (
              items?.news?.map((item) => (
                <div className="flex gap-3 border-b" key={item}>
                  <ReadOutlined className="text-lg" />
                  <div className="flex flex-col w-full">
                    <p>{item.title}</p>
                    <p className="text-right text-xs text-gray-500 self-end">
                      {moment(item?.created_at).format("LLLL")}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center"> There is no news yet </p>
            )}
          </div>
        </div>
      </div>

      {item?.about ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            About the Lab
          </h2>
          <div className="bg-white rounded-lg text-base p-5">{item.about}</div>
        </>
      ) : null}

      {item?.experts_at_our ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Experts at our Lab
          </h2>
          <div className="bg-white rounded-lg text-base p-5">
            {item.experts_at_our}
          </div>
        </>
      ) : null}

      {item?.who_we_are ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Who we are
          </h2>
          <div className="bg-white rounded-lg text-base p-5">
            {item.who_we_are}
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default Home;
