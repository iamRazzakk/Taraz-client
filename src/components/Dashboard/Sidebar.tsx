"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiBox,
  FiUsers,
  FiSettings,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden bg-indigo-600 text-white flex justify-between p-4">
        <button onClick={toggleSidebar}>
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gradient-to-b from-indigo-600 to-purple-600 text-white fixed lg:static lg:block transition-all duration-300 ease-in-out ${
          isOpen ? "left-0 w-64" : "-left-64 lg:left-0 lg:w-64"
        } h-full lg:h-auto z-50 shadow-lg`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          {/* Close button for mobile */}
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="px-6 py-3 hover:bg-indigo-500 transition-colors flex items-center">
              <FiHome className="mr-2" />
              <Link href="/dashboard/me">Dashboard</Link>
            </li>
            <li className="px-6 py-3 hover:bg-indigo-500 transition-colors flex items-center">
              <FiBox className="mr-2" />
              <Link href="/dashboard/create-product">Create Product</Link>
            </li>
            <li className="px-6 py-3 hover:bg-indigo-500 transition-colors flex items-center">
              <FiShoppingCart className="mr-2" />
              <a href="#">Orders</a>
            </li>
            <li className="px-6 py-3 hover:bg-indigo-500 transition-colors flex items-center">
              <FiUsers className="mr-2" />
              <a href="#">Users</a>
            </li>
            <li className="px-6 py-3 hover:bg-indigo-500 transition-colors flex items-center">
              <FiSettings className="mr-2" />
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
