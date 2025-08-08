import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  PlusCircle,
  Tag,
  User,
} from "lucide-react";

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 md:hidden z-50">
      <Link to="/home" className="flex flex-col items-center text-gray-700 hover:text-black">
        <Home size={24} />
      </Link>
      <Link to="/explore" className="flex flex-col items-center text-gray-700 hover:text-black">
        <Search size={24} />
      </Link>
      <Link to="/post" className="flex flex-col items-center text-gray-700 hover:text-black">
        <PlusCircle size={36} className="-mt-4 bg-white rounded-full" />
      </Link>
      <Link to="" className="flex flex-col items-center text-gray-700 hover:text-black">
        <Tag size={24} />
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-gray-700 hover:text-black">
        <User size={24} />
      </Link>
    </div>
  );
};

export default MobileFooter;