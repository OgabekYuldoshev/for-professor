import { KeyOutlined } from "@ant-design/icons";
import React from "react";

const Projects = () => {
  return (
    <>
      <h1 className="text-2xl underline">Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
        {Array.from(Array(4).keys()).map((item) => (
          <div
            key={item}
            class="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-300"
          >
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="text-lg font-bold">
                Attended Young Professional Program and reception in IEEE ICC at
                Shanghai China in May 2019
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
