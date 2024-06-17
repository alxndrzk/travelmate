import React from "react";
import "../Styles/index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import JenisPariwisata from "../Components/JenisPariwisata";
import Article from "../Components/Article";

const images = require.context("../Assets", true, /\.(png|jpg|jpeg)$/);

const Homepage = () => {
  const hero = images("./hero.png");

  return (
    <div className="bg-homepage min-h-screen font-poppins">
      <Navbar />
      <main className="container mx-auto py-8">
        <div
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-gray-200 rounded-lg p-32 shadow-md"
        >
          <h2 className="text-6xl font-bold text-white text-center mb-4">
            Cari Wisata?
          </h2>
          <p className="text-2xl text-white text-center italic font-light mb-6">
            Temukan destinasi wisata di seluruh indonesia
            <br />
            hanya melalui satu platform saja
          </p>
          <div className="flex flex-col items-center space-y-4 justify-center">
            <input
              type="text"
              placeholder="Cari destinasi wisata?"
              className="bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none text-center focus:border-blue-500 w-72"
            />
            <button className="bg-primary-color hover:text-gray-900 text-white font-bold py-2 px-6 rounded">
              Cari
            </button>
          </div>
        </div>

        <JenisPariwisata />
        <Article />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
