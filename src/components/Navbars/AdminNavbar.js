import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userIconRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 mb-10 w-full z-40 flex items-center justify-end px-6 py-4 bg-white shadow-md">
      {/* Right Side - Icons and User Info */}
      <div className="flex items-center space-x-6 cursor-pointer">
        {/* User Icon and Name */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={toggleDropdown}
          ref={userIconRef}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <FiUser className="h-5 w-5 text-gray-600" />
          </div>
          <div className="flex items-center space-x-1 mt-1">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            {isDropdownOpen ? (
              <FiChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <FiChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 bg-white shadow-lg rounded-lg p-2 border border-gray-200"
            style={{ top: "100%", width: "150px" }}
          >
            <ul>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block bg-gray-100" +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
                {/* link to modal insted of component  */}
              </li>
              <li className="items-center">
                <Link
                  className="hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
