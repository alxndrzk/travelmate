import React from "react";

const images = require.context("../Assets", true, /\.(png|jpg|jpeg)$/);

const AboutUs = () => {
  const alex = images("./alex.jpg");
  const rizki = images("./rizki.jpg");
  const jonathan = images("./jonathan.jpg");
  return (
    <div>
      <h2
        id="tentang-kami"
        className="text-4xl text-center font-bold text-gray-800 mt-8 mb-4"
      >
        Tentang Kami
      </h2>
      <div className="container mx-auto px-48 py-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
            <img
              className="rounded-full w-full h-full object-cover"
              src={alex}
              alt="alex"
            />
          </div>
          <h3 className="text-xl font-normal text-center text-gray-800">
            Alexander <br /> R2276YB494
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
            <img
              className="rounded-full w-full h-full object-cover"
              src={jonathan}
              alt="jonathan"
            />
          </div>
          <h3 className="text-xl font-normal text-center text-gray-800">
            Jonathan <br /> R1836YB418
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
            <img
              className="rounded-full w-full h-full object-cover"
              src={rizki}
              alt="rizqi"
            />
          </div>
          <h3 className="text-xl font-normal text-center text-gray-800">
            Rizki <br /> R2636YB450
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
