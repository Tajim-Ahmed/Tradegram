import { useState } from "react";
import '../index.css';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Explore", "Post", "Profile"];

  return (
    <nav className={className}>
      <div className={`bg-white px-4 py-3 shadow-md ${className}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold text-black">TRADEGRAM</div>

          <input
            type="text"
            name="search"
            className="hidden md:flex px-2 py-1 placeholder:text-slate-700 rounded-md border-2 border-blue-600 ml-2"
            placeholder="search.."
          />

          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/home" : `/${item.toLowerCase()}`}
                  className="text-black px-3 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <Link
              to="/chats"
              className="bg-yellow-400 text-white px-4 py-2 rounded-md relative"
            >
              Chats
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
