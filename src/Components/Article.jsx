import React from "react";
const images = require.context("../Assets", true, /\.(png|jpg|jpeg)$/);

const Article = () => {
  const istiqlal = images("./Istiqlal.jpeg");
  const jakarta = images("./jakarta.jpeg");
  const komodo = images("./komodo.jpeg");
  const malioboro = images("./Malioboro.jpeg");
  const tamanPintar = images("./tamanPintar.jpeg");
  const bali = images("./bali.jpeg");
  return (
    <section>
      <h2
        id="artikel-terbaru"
        className="text-4xl text-center font-bold text-gray-800 mt-8 mb-4"
      >
        Artikel Terbaru
      </h2>

      <div className="container mx-auto px-2 py-16 grid grid-cols-2 gap-4 md:grid-cols-3  ">
        <div>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60 transform transition-transform duration-300 hover:scale-110">
            <img
              src={malioboro}
              alt="Malioboro"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg text-1xl text-center font-normal text-gray-800">
            Menggoyang Lidah di Surga Kuliner Nusantara: Pengalaman Wisatawan di
            Jalan Malioboro Yogyakarta
          </h3>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60 transform transition-transform duration-300 hover:scale-110">
            <img
              src={bali}
              alt="Bali"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg text-1xl text-center font-normal text-gray-800">
            Menguak Keajaiban Budaya Indonesia: Kisah Wisatawan di Desa
            Penglipuran Bali
          </h3>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60 transform transition-transform duration-300 hover:scale-110">
            <img
              src={istiqlal}
              alt="Istiqlal"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg text-1xl text-center font-normal text-gray-800">
            Menemukan Kedamaian: Cerita Perjalanan Wisatawan di Masjid Istiqlal
            Jakarta
          </h3>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60 transform transition-transform duration-300 hover:scale-110">
            <img
              src={komodo}
              alt="Komodo"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg text-1xl text-center font-normal text-gray-800">
            Keindahan Alam Nusantara: Testimoni Wisatawan di Taman Nasional
            Komodo
          </h3>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60 transform transition-transform duration-300 hover:scale-110">
            <img
              src={jakarta}
              alt="Galeri"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg text-1xl text-center font-normal text-gray-800">
            Meresapi Karya: Review Wisatawan di Galeri Nasional Indonesia,
            Jakarta
          </h3>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60 transform transition-transform duration-300 hover:scale-110">
            <img
              src={tamanPintar}
              alt="Taman Pintar"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg text-1xl text-center font-normal text-gray-800">
            Melek Pengetahuan: Pengalaman Wisatawan di Taman Pintar Yogyakarta
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Article;
