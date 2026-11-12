import Link from "next/link";
import menuData from "./menuData";

const Linkmenu = ({ onClose }) => {

  return (
    <ul>
      {menuData.map((menu) => (
        <li key={menu.href}>
          <Link
            href={menu.href}
            onClick={onClose}
          >
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Linkmenu;