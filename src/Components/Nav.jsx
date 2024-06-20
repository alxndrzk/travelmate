import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar shadow-md bg-slate-300">
      <h1 className="header-logo font-poppins font-bold">TravelMate</h1>
      <ul className="nav-links">
        <li>
          <Link to="/beranda">Beranda</Link>
        </li>
        <li>
          <Link onClick={handleToggleDropdown}>Wisata</Link>{" "}
          {showDropdown && <DropdownMenu menuItems={wisataMenuItems} />}
        </li>
        <li>
          <Link onClick={handleToggleDropdown}>Artikel</Link>
          {showDropdown && <DropdownMenu menuItems={artikelMenuItems} />}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="flex items-center">
        {user ? (
          <>
            <span className="font-poppins text-gray-600 mr-5">
              {user.email}
            </span>
            <button
              className="px-4 py-2 font-poppins border-black font-bold rounded-md text-black hover:text-gray-950 bg-red-400 hover:bg-red-600"
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
    </nav>
  );
}

export default Nav;

const wisataMenuItems = [
  { label: "Kuliner", href: "/wisata/kuliner" },
  { label: "Budaya", href: "/wisata/budaya" },
  { label: "Religi", href: "/wisata/religi" },
  { label: "Pendidikan", href: "/wisata/pendidikan" },
  { label: "Kesenian", href: "/wisata/kesenian" },
  { label: "Alam", href: "/wisata/alam" },
];

const artikelMenuItems = [
  { label: "Lihat Artikel", href: "artikel/lihat-artikel" },
  { label: "Tambah Artikel", href: "artikel/tambah-artikel" },
];
