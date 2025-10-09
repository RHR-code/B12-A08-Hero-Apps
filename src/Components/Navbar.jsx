import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-transparent underline decoration-[#632EE3]"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-transparent underline decoration-[#632EE3]"
                    : ""
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-transparent underline decoration-[#632EE3]"
                    : ""
                }
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to="/">
          <div className="flex items-center gap-2 text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
            <img className="w-10" src={logo} alt="" />{" "}
            <h2 className="text-transparent font-bold text-base">HERO.IO</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base">
          <li className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-transparent underline decoration-[#632EE3]"
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-transparent underline decoration-[#632EE3]"
                  : ""
              }
              to="/apps"
            >
              Apps
            </NavLink>
          </li>
          <li className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-transparent underline decoration-[#632EE3]"
                  : ""
              }
              to="/installation"
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/RHR-code">
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-base hover:scale-105">
            {" "}
            <FaGithub /> Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
