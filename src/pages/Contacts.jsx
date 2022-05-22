import React from "react";
import {
  CommentOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import useList from "../modules/contacts/useList";
import { useQueryClient } from "react-query";

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

const Projects = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["CONTACTS"], { exact: false });
  const item = data?.item;
  console.log(item);
  const map = `<iframe src="${item?.map}" width="100%" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      variants={pageVariants}
    >
      <h1 className="text-2xl underline">Contact Us</h1>

      {item ? (
        <>
          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Address
          </h2>
          <div className="grid gap-5">
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-8 cursor-pointer flex gap-8 transform duration-300 flex items-center">
                <EnvironmentOutlined className="text-3xl text-blue-500" />
                <h2 className="font-bold text-base">{item?.address}</h2>
              </div>
              {item.map ? (
                <div dangerouslySetInnerHTML={{ __html: map }} />
              ) : null}
            </div>
          </div>

          <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
            Faculty Advisor
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {/* UserName */}

            <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
              <UserOutlined className="text-3xl text-blue-500" />
              <div className="text-base">
                <h2 className="font-bold">{item?.name}</h2>
                <p className="text-gray-500">{item?.position}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
              <CommentOutlined className="text-3xl text-blue-500" />
              <div className="text-base">
                <h2 className="font-bold">Professor</h2>
                <p className="text-gray-500">{item?.name}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
              <GlobalOutlined className="text-3xl text-blue-500" />
              <div className="text-base">
                <h2 className="font-bold">Visiting Professor</h2>
                <p className="text-gray-500">{item?.visiting}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
              <PhoneOutlined className="text-3xl text-blue-500" />
              <div className="text-base">
                <h2 className="font-bold">Contact no.</h2>
                <p className="text-gray-500">{item?.phone_number}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
              <MailOutlined className="text-3xl text-blue-500" />
              <div className="text-base">
                <h2 className="font-bold">Email</h2>
                <p className="text-gray-500">{item?.email}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h5 className="text-center my-10">No content!</h5>
      )}

      {/* <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        ST Lab
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <MailOutlined className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">sudeeptanwarlab@gmail.com</h2>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <SearchOutlined className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Sudeep Tanwar's Research Group</h2>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Projects;
