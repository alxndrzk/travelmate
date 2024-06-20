import React from "react";
const images = require.context("../Assets", true, /\.(png|jpg|jpeg)$/);

const JenisPariwisata = () => {
  const alam = images("./alam.jpeg");
  const budaya = images("./budaya.jpeg");
  const kesenian = images("./kesenian.jpg");
  const kuliner = images("./kuliner.jpg");
  const pendidikan = images("./pendidikan.jpg");
  const religi = images("./religi.jpeg");
  return (
    <section>
      <h2
        id="jenis-pariwisata"
        className="text-4xl text-center font-bold text-gray-800 mt-8 mb-4"
      >
        Jenis Pariwisata
      </h2>
      <div className="container mx-auto px-48 py-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              className="rounded-full w-full h-full object-cover"
              src={kuliner}
              alt="Kuliner"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Kuliner
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              className="rounded-full w-full h-full object-cover"
              src={budaya}
              alt="Budaya"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Budaya
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              className="rounded-full w-full h-full object-cover"
              src={religi}
              alt="Religi"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Religi
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              className="rounded-full w-full h-full object-cover"
              src={pendidikan}
              alt="Pendidikan"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Pendidikan
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              className="rounded-full w-full h-full object-cover"
              src={kesenian}
              alt="Kesenian"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Kesenian
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              className="rounded-full w-full h-full object-cover"
              src={alam}
              alt="Alam"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">Alam</h3>
        </div>
      </div>
    </section>
  );
};

export default JenisPariwisata;
