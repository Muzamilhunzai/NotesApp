import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">
          MyNotes
        </div>
        <ul className="flex space-x-8">
          <li className="text-gray-700 hover:text-purple-600 cursor-pointer transition-colors duration-300">
            Home
          </li>
          <li className="text-gray-700 hover:text-purple-600 cursor-pointer transition-colors duration-300">
            About
          </li>
          <li className="text-gray-700 hover:text-purple-600 cursor-pointer transition-colors duration-300">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
