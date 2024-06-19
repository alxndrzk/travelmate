import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

function Nav() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return(
        <nav className="navbar">
            <h1 className="header-logo font-poppins font-bold">TravelMate</h1>
            <ul className="nav-links">
                <li><Link to="/beranda">Beranda</Link></li>
                <li><Link onClick={handleToggleDropdown}>Wisata</Link> {showDropdown && <DropdownMenu menuItems={wisataMenuItems}/>}</li>
                <li><Link onClick={handleToggleDropdown}>Artikel</Link>{showDropdown && <DropdownMenu menuItems={artikelMenuItems}/>}</li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;

const wisataMenuItems = [
    {label: 'Kuliner', href:'/wisata/kuliner'},
    {label: 'Budaya', href:'/wisata/budaya'},
    {label: 'Religi', href:'/wisata/religi'},
    {label: 'Pendidikan', href:'/wisata/pendidikan'},
    {label: 'Kesenian', href:'/wisata/kesenian'},
    {label: 'Alam', href:'/wisata/alam'}
]

const artikelMenuItems = [
    {label: 'Lihat Artikel', href:'artikel/lihat-artikel'},
    {label: 'Tambah Artikel', href:'artikel/tambah-artikel'}
]