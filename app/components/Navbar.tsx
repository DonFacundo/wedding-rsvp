"use client";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      key="navbar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ ease: "easeInOut", duration: 0.2, delay: 0 }}
    >
      <div className="navbar fixed text-white bg-base-200 font-playfair bg-opacity-20">
        <div className="navbar-start">
          <div className="drawer lg:hidden w-fit">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-44 min-h-full bg-base-200 bg-opacity-50 text-white">
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>RSVP</a>
                </li>
                <li>
                  <a>VENUE</a>
                </li>
                <li>
                  <a>FOOD</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-3xl">G & C</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>RSVP</a>
            </li>
            <li>
              <a>VENUE</a>
            </li>
            <li>
              <a>FOOD</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;
