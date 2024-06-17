import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">TravelMate</h3>
            <p className="text-gray-400">
              Temukan destinasi wisata di seluruh indonesia hanya melalui satu
              platform saja
            </p>
            <p className="text-gray-400 mt-4">copyright © 2024 TravelMate</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Menu</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#jenis-pariwisata"
                  className="text-gray-400 hover:text-white"
                >
                  Wisata
                </a>
              </li>
              <li>
                <a
                  href="#artikel-terbaru"
                  className="text-gray-400 hover:text-white"
                >
                  Artikel Terbaru
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  className="text-gray-400 hover:text-white"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Kontak</h3>
            <p className="text-gray-400">+62895806709715</p>
            <p className="text-gray-400">travelmate@gmail.com</p>
          </div>
        </div>
      </footer>  )
}

export default Footer