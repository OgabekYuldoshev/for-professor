import { ReadOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";

const Home = () => {
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-5">RESEARCH GROUP</h1>
      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div className="my-5 grid lg:grid-cols-2 grid-cols-1 gap-5">
        {/* Analitika */}
        <div className="grid grid-cols-1 gap-5">
          <div className="rounded-xl flex flex-col items-center align items-center">
            <h2 className="text-lg mb-3 text-center font-bold border-black">
              Scopus
            </h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
              <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
              </div>

              <div class="stat">
                <div class="stat-title">New Users</div>
                <div class="stat-value">4,200</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center align items-center">
            <h2 className="text-lg mb-3 text-center font-bold border-black">
              Google Scholar
            </h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
              <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
              </div>

              <div class="stat">
                <div class="stat-title">New Users</div>
                <div class="stat-value">4,200</div>
              </div>

              <div class="stat">
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center align items-center">
            <h2 className="text-lg mb-5 text-center font-bold border-black">
              Publications
            </h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
              <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
              </div>

              <div class="stat">
                <div class="stat-title">New Users</div>
                <div class="stat-value">4,200</div>
              </div>

              <div class="stat">
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
              </div>

              <div class="stat">
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
              </div>
            </div>
          </div>
        </div>

        {/* Resent News */}
        <div
          style={{ height: "30rem" }}
          className="bg-white rounded-lg p-8 overflow-y-auto flex flex-col gap-3 scroll"
        >
          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>

          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>

          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>

          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>

          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>

          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>
          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>

          <div className="flex gap-3">
            <ReadOutlined className="text-lg" />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                vero nam error labore! Magni maxime quos odio libero quas animi.
              </p>
              <p className="text-right text-xs text-gray-500">12.12.2002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
