import { Menu } from "antd";
import React from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  BarChartOutlined,
  BookOutlined,
  BranchesOutlined,
  CameraOutlined,
  FileTextOutlined,
  GiftOutlined,
  HomeOutlined,
  MessageOutlined,
  PhoneOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useQueryClient } from "react-query";
import { config } from "../../../config";

const Sidebar = ({ setSide }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMediaQuery("(min-width: 992px)");
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["CONTACTS"], { exact: false });
  const item = data?.item;
  const handleClose = () => {
    if (!matches) {
      setSide(false);
    }
  };

  const MenuItems = [
    {
      icon: <HomeOutlined />,
      label: "Home",
      key: "/",
      onClick: () => navigate("/"),
    },
    {
      icon: <UsergroupAddOutlined />,
      label: "Members",
      key: "/members",
      onClick: () => navigate("/members"),
    },
    {
      icon: <BookOutlined />,
      label: "Publications",
      key: "/publications",
      children: [
        {
          label: "Highly Cited Articles",
          key: "/publications/articles",
          onClick: () => navigate("/publications/articles"),
        },
        {
          label: "Most Downloaded",
          key: "/publications/downloaded",
          onClick: () => navigate("/publications/downloaded"),
        },
        {
          label: "Journals",
          key: "/publications/journals",
          onClick: () => navigate("/publications/journals"),
        },
        {
          label: "Conferences",
          key: "/publications/conferences",
          onClick: () => navigate("/publications/conferences"),
        },
        {
          label: "Book Chapters",
          key: "/publications/book-chapters",
          onClick: () => navigate("/publications/book-chapters"),
        },
      ],
    },

    {
      icon: <FileTextOutlined />,
      label: "Patents",
      key: "/patents",
      onClick: () => navigate("/patents"),
    },
    {
      icon: <BookOutlined />,
      label: "Books",
      key: "/books",
      onClick: () => navigate("/books"),
    },

    {
      icon: <BarChartOutlined />,
      label: "Projects",
      key: "/projects",
      onClick: () => navigate("/projects"),
    },
    {
      icon: <MessageOutlined />,
      label: "Research Consultancy",
      key: "/research",
      onClick: () => navigate("/research"),
    },
    {
      icon: <UserOutlined />,
      label: "Professional Activities and Services",
      key: "/professional",
      onClick: () => navigate("/professional"),
    },
    {
      icon: <GiftOutlined />,
      label: "Awards and Recognations",
      key: "/awards",
      children: [
        {
          label: "Awards and Recognations",
          key: "/awards/award",
          onClick: () => navigate("/awards/award"),
        },
        {
          label: "Travel Grands",
          key: "/awards/grants",
          onClick: () => navigate("/awards/grants"),
        },
        {
          label: "Best Paper Awards",
          key: "/awards/best",
          onClick: () => navigate("/awards/best"),
        },
      ],
    },

    {
      icon: <BranchesOutlined />,
      label: "Research Collaborations",
      key: "/collaborations",
      onClick: () => navigate("/collaborations"),
    },
    {
      icon: <SolutionOutlined />,
      label: "News",
      key: "/news",
      onClick: () => navigate("/news"),
    },
    {
      icon: <CameraOutlined />,
      label: "Gallery",
      key: "/gallery",
      onClick: () => navigate("/gallery"),
    },
    {
      icon: <PhoneOutlined />,
      label: "Contacts",
      key: "/contacts",
      onClick: () => navigate("/contacts"),
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="avatar">
          <div className="w-28 rounded-full">
            <img
              src={
                item?.image
                  ? `${config.app.baseUrl}/${item?.image}`
                  : "https://api.lorem.space/image/face?hash=92310"
              }
            />
          </div>
        </div>
        <h1 className="text-white font-bold mt-4 text-lg">
          {item?.name || "User"}
        </h1>
      </div>
      <Menu
        items={MenuItems}
        onSelect={handleClose}
        className="bg-transparent text-white border-none"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      />
    </div>
  );
};

export default Sidebar;
