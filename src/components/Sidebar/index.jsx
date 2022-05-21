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
  console.log(item);
  const handleClose = () => {
    if (!matches) {
      setSide(false);
    }
  };

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
        onSelect={handleClose}
        className="bg-transparent text-white border-none"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item
          icon={<HomeOutlined />}
          key="/"
          onClick={() => navigate("/")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          icon={<UsergroupAddOutlined />}
          key="/members"
          onClick={() => navigate("/members")}
        >
          Memebers
        </Menu.Item>
        <Menu.SubMenu
          icon={<BookOutlined />}
          key="/publications"
          title="Publications"
        >
          <Menu.Item
            key="/publications/articles"
            onClick={() => navigate("/publications/articles")}
          >
            Highly Cited Articles
          </Menu.Item>
          <Menu.Item
            key="/publications/downloaded"
            onClick={() => navigate("/publications/downloaded")}
          >
            Most Downloaded Articles
          </Menu.Item>
          <Menu.Item
            key="/publications/journals"
            onClick={() => navigate("/publications/journals")}
          >
            Journals
          </Menu.Item>
          <Menu.Item
            key="/publications/conferences"
            onClick={() => navigate("/publications/conferences")}
          >
            Conferences
          </Menu.Item>
          <Menu.Item
            key="/publications/book-chapters"
            onClick={() => navigate("/publications/book-chapters")}
          >
            Book Chapters
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item
          icon={<FileTextOutlined />}
          key="/patents"
          onClick={() => navigate("/patents")}
        >
          Patents
        </Menu.Item>
        <Menu.Item
          icon={<BookOutlined />}
          key="/books"
          onClick={() => navigate("/books")}
        >
          Books
        </Menu.Item>
        <Menu.Item
          icon={<BarChartOutlined />}
          key="/projects"
          onClick={() => navigate("/projects")}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          icon={<MessageOutlined />}
          key="/research"
          onClick={() => navigate("/research")}
        >
          Research Consultancy
        </Menu.Item>
        <Menu.Item
          icon={<UserOutlined />}
          key="/professional"
          onClick={() => navigate("/professional")}
        >
          Professional Activities and Services
        </Menu.Item>
        <Menu.SubMenu
          icon={<GiftOutlined />}
          key="/awards"
          title="Awards and Recognations"
        >
          <Menu.Item
            key="/awards/award"
            onClick={() => navigate("/awards/award")}
          >
            Awards and Recognations
          </Menu.Item>
          <Menu.Item
            key="/awards/grants"
            onClick={() => navigate("/awards/grants")}
          >
            Travel Grants
          </Menu.Item>
          <Menu.Item
            key="/awards/best"
            onClick={() => navigate("/awards/best")}
          >
            Best Paper Awards
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          icon={<BranchesOutlined />}
          key="/collaborations"
          onClick={() => navigate("/collaborations")}
        >
          Research Collaborations
        </Menu.Item>
        <Menu.Item
          icon={<CameraOutlined />}
          key="/gallery"
          onClick={() => navigate("/gallery")}
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          icon={<PhoneOutlined />}
          key="/contacts"
          onClick={() => navigate("/contacts")}
        >
          Contacts
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
