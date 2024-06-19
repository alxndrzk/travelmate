import { Link } from "react-router-dom";

const DropdownMenu = ({menuItems}) => {
    return (
        <ul className="dropdown-menu">
            {menuItems.map((item) => (
                <li key={item.label}>
                    <Link to={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    )
}

export default DropdownMenu;