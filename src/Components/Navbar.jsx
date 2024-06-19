import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  console.log(user)
  return (
    <header className="bg-homepage shadow-md p-4 flex items-center">
      <div className="text-4xl font-poppins font-bold text-black ml-72 ">
        TravelMate
      </div>

      <nav className="flex space-x-6 ml-96">
        <a
          href="/"
          style={{ color: "#2D3E50" }}
          className="text-lg font-poppins font-bold hover:text-gray-900"
        >
          Beranda
        </a>
        <div className="relative">
          <a
            href=""
            style={{ color: "#2D3E50" }}
            className="text-lg font-poppins font-bold text-black hover:text-gray-900"
          >
            Wisata
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <a
              href="#sub-menu-1"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sub Menu 1
            </a>
            <a
              href="#sub-menu-2"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sub Menu 2
            </a>
            <a
              href="#sub-menu-3"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sub Menu 3
            </a>
          </div>
        </div>
        <a
          href="#artikel-terbaru"
          style={{ color: "#2D3E50" }}
          className="text-lg font-poppins font-bold text-black hhover:text-gray-900"
        >
          Artikel
        </a>
        <a
          href="#tentang-kami"
          style={{ color: "#2D3E50" }}
          className="text-lg font-poppins font-bold text-black hover:text-gray-900"
        >
          Tentang Kami
        </a>
      </nav>

      <div className="ml-40 flex items-center">
        {user ? (
          <>
            <span className="font-poppins text-gray-600 mr-5">
            {user.email}
            </span>
            <button
              className="px-4 py-2 font-poppins border border-gray-400 font-bold rounded-md text-black hover:text-gray-950"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="px-4 py-2 font-poppins border border-gray-400 font-bold rounded-md text-black hover:text-gray-950"
              onClick={() => (window.location.href = "/login")}
            >
              Masuk
            </button>
            <button
              className="px-4 py-2 font-poppins bg-primary-color text-white font-bold rounded-md hover:text-gray-900"
              onClick={() => (window.location.href = "/register")}
            >
              Daftar
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
