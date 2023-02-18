import {
  ArrowLeftOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, PageHeader } from "antd";
import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import useMediaQuery from "../hooks/useMediaQuery";
import { config } from "../../config";
import { useQueryClient } from "react-query";

const Main = ({ children }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["CONTACTS"], { exact: false });
  const item = data?.item;
  const [side, setSide] = useState(false);
  const matches = useMediaQuery("(min-width: 992px)");
  useEffect(() => {
    setSide(matches);
  }, [matches]);

  return (
    <Layout className="flex min-h-screen">
      <Layout.Sider
        width={side ? 250 : 0}
        className="bg-zinc-800 min-h-screen overflow-y-auto overflow-x-hidden fixed top-0 left-0 bottom-0 z-50 scroll"
      >
        <div className="flex items-center justify-end relative lg:hidden block">
          <CloseOutlined
            onClick={() => setSide(false)}
            className="text-white text-lg absolute top-5 right-5 cursor-pointer"
          />
        </div>
        <Sidebar setSide={setSide} />
      </Layout.Sider>
      <Layout className="ml-0 lg:ml-64">
        <div className="flex items-center px-5 border-b fixed w-full z-40 bg-gray-100 lg:px-14 px-5">
          <MenuOutlined
            className="cursor-pointer block lg:hidden"
            onClick={() => setSide(true)}
          />
          <PageHeader title={item?.name || "User"} />
        </div>
        <Layout.Content className="p-8 bg-gray-100 w-full min-h-auto mt-20 lg:px-12 px-5">
          {children}
        </Layout.Content>
        <Layout.Footer className="flex md:justify-between justify-center md:flex-row flex-col items-center border-t gap-3">
          <p>
            <span className="font-bold">{item?.name || "User"}</span> ©{" "}
            {new Date().getFullYear()}
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://yuldoshev.vercel.app/"
              target="_blank"
              className="font-bold"
            >
              Ogabek Yuldoshev
            </a>
            
          </p>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
