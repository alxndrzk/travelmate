import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Nav() {
  const [showDropdown, setShowDropdown] = useState({
    wisata: false,
    artikel: false,
    user: false,
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleToggleDropdown = (menu) => {
    setShowDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <nav className="navbar shadow-md bg-slate-300">
      <h1 className="header-logo font-poppins font-bold">TravelMate</h1>
      <ul className="nav-links">
        <li>
          <Link to="/beranda">Beranda</Link>
        </li>
        <li>
          <Link onClick={() => handleToggleDropdown("wisata")}>Wisata</Link>
          {showDropdown.wisata && <DropdownMenu menuItems={wisataMenuItems} />}
        </li>
        <li>
          <Link onClick={() => handleToggleDropdown("artikel")}>Artikel</Link>
          {showDropdown.artikel && (
            <DropdownMenu menuItems={artikelMenuItems} />
          )}
        </li>
        <li>
          <a href="#tentang-kami">
            About
          </a>
        </li>
      </ul>
      <div className="flex items-center relative">
        {user ? (
          <>
            <div
              className="border mr-10 rounded-full bg-slate-200 cursor-pointer"
              onClick={() => handleToggleDropdown("user")}
            >
              <FaUser className="m-3" />
            </div>
            <button
              className="px-4 py-2 font-poppins border-black font-bold rounded-md text-black hover
                bg-red-400 hover
                "
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
              }}
            >
              <Link to={"/"}>Logout</Link>
            </button>
            {showDropdown.user && (
              <div className="absolute right-0 top-20 w-48 bg-slate-300 border rounded shadow-lg">
                <ul>
                  <li className="px-4 py-4 hover:bg-gray-200">{user.email}</li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/pengaturan">Pengaturan</Link>
                  </li>
                </ul>
              </div>
            )}
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
  { label: "Lihat Artikel", href: "artikel" },
  { label: "Tambah Artikel", href: "artikel/tambahArtikel" },
];
