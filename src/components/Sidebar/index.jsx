import { Menu } from "antd";
import React from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const Sidebar = ({ setSide }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMediaQuery("(min-width: 992px)");

  const handleClose = () => {
    if (!matches) {
      setSide(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-8">
        <div class="avatar">
          <div class="w-28 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </div>
        <h1 className="text-white font-bold mt-4 text-lg">Ogabek Yuldoshev</h1>
      </div>
      <Menu
        onSelect={handleClose}
        className="bg-transparent text-white border-none"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/" onClick={() => navigate("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="/members" onClick={() => navigate("/members")}>
          Memebers
        </Menu.Item>
        <Menu.SubMenu key="/publications" title="Publications">
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
        <Menu.Item key="/patents" onClick={() => navigate("/patents")}>
          Patents
        </Menu.Item>
        <Menu.Item key="/books" onClick={() => navigate("/books")}>
          Books
        </Menu.Item>
        <Menu.Item key="/projects" onClick={() => navigate("/projects")}>
          Projects
        </Menu.Item>
        <Menu.Item key="/research" onClick={() => navigate("/research")}>
          Research Consultancy
        </Menu.Item>
        <Menu.Item
          key="/professional"
          onClick={() => navigate("/professional")}
        >
          Professional Activities and Services
        </Menu.Item>
        <Menu.SubMenu key="/awards" title="Awards and Recognations">
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
          key="/collaborations"
          onClick={() => navigate("/collaborations")}
        >
          Research Collaborations
        </Menu.Item>
        <Menu.Item key="/gallery" onClick={() => navigate("/gallery")}>
          Gallery
        </Menu.Item>
        <Menu.Item key="/contacts" onClick={() => navigate("/contacts")}>
          Contacts
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
