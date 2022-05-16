import {
  FolderOpenOutlined,
  LikeOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { Carousel, Statistic } from "antd";
import React from "react";
import { config } from "../../config";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl underline mb-8">
        {config.app.name.toUpperCase()}'S RESEARCH GROUP
      </h1>
      <Carousel>
        <img
          className="h-80 object-cover"
          src="https://wallpaperaccess.com/full/138728.jpg"
          alt="image"
        />

        <img
          className="h-80 object-cover"
          src="https://wallpaperaccess.com/full/138728.jpg"
          alt="image"
        />

        <img
          className="h-80 object-cover"
          src="https://wallpaperaccess.com/full/138728.jpg"
          alt="image"
        />

        <img
          className="h-80 object-cover"
          src="https://wallpaperaccess.com/full/138728.jpg"
          alt="image"
        />
      </Carousel>

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
          </div>
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
            {Array.from(Array(12).keys()).map((item) => (
              <div className="flex gap-3 border-b" key={item}>
                <ReadOutlined className="text-lg" />
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sed vero nam error labore! Magni maxime quos odio libero
                    quas animi.
                  </p>
                  <p className="text-right text-xs text-gray-500">12.12.2002</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
