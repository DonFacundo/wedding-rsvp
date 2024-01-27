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
                  <motion.div
                    key="menu-home"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <a>HOME</a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    key="menu-rsvp"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <a>RSVP</a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    key="menu-venue"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <a>VENUE</a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    key="menu-attire"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <a>ATTIRE</a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    key="menu-food"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <a>FOOD</a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    key="menu-faqs"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <a>FAQs</a>
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            key="nav-home"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.25 },
            }}
          >
            <a className="btn btn-ghost text-3xl">G & C</a>
          </motion.div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <motion.div
                key="nav-home"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <a>HOME</a>
              </motion.div>
            </li>
            <li>
              <motion.div
                key="nav-rsvp"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <a>RSVP</a>
              </motion.div>
            </li>
            <li>
              <motion.div
                key="nav-venue"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <a>VENUE</a>
              </motion.div>
            </li>
            <li>
              <motion.div
                key="nav-attire"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <a>ATTIRE</a>
              </motion.div>
            </li>
            <li>
              <motion.div
                key="nav-food"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <a>FOOD</a>
              </motion.div>
            </li>
            <li>
              <motion.div
                key="nav-faqs"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <a>FAQs</a>
              </motion.div>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;
