"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ slug }: { slug: string }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key="navbar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ ease: "easeInOut", duration: 0.2, delay: 0 }}
    >
      <div className="navbar fixed text-white bg-base-200 font-playfair bg-opacity-20 z-50">
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
                  <Link
                    className={`${
                      pathname.lastIndexOf("/") === 0 ? "active" : ""
                    }`}
                    href={`/${slug}`}
                  >
                    <motion.div
                      key="menu-home"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                    >
                      HOME
                    </motion.div>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname.includes("/RSVP") ? "active" : ""}`}
                    href={`/${slug}/RSVP`}
                  >
                    <motion.div
                      key="menu-rsvp"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                    >
                      RSVP
                    </motion.div>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname.includes("/venue") ? "active" : ""}`}
                    href={`/${slug}/venue`}
                  >
                    <motion.div
                      key="menu-venue"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                    >
                      VENUE
                    </motion.div>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname.includes("/attire") ? "active" : ""
                    }`}
                    href={`/${slug}/attire`}
                  >
                    <motion.div
                      key="menu-attire"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                    >
                      ATTIRE
                    </motion.div>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname.includes("/food") ? "active" : ""}`}
                    href={`/${slug}/food`}
                  >
                    <motion.div
                      key="menu-food"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                    >
                      FOOD
                    </motion.div>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname.includes("/faqs") ? "active" : ""}`}
                    href={`/${slug}/faqs`}
                  >
                    <motion.div
                      key="menu-faqs"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.25 },
                      }}
                    >
                      FAQs
                    </motion.div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            key="nav-home"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.25 },
            }}
          >
            <Link href={`/${slug}`} className="btn btn-ghost text-3xl">
              G & C
            </Link>
          </motion.div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={`${pathname.lastIndexOf("/") === 0 ? "active" : ""}`}
                href={`/${slug}`}
              >
                <motion.div
                  key="nav-home"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  HOME
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname.includes("/RSVP") ? "active" : ""}`}
                href={`/${slug}/RSVP`}
              >
                <motion.div
                  key="nav-rsvp"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  RSVP
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname.includes("/venue") ? "active" : ""}`}
                href={`/${slug}/venue`}
              >
                <motion.div
                  key="nav-venue"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  VENUE
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname.includes("/attire") ? "active" : ""}`}
                href={`/${slug}/attire`}
              >
                <motion.div
                  key="nav-attire"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  ATTIRE
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname.includes("/food") ? "active" : ""}`}
                href={`/${slug}/food`}
              >
                <motion.div
                  key="nav-food"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  FOOD
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname.includes("/faqs") ? "active" : ""}`}
                href={`/${slug}/faqs`}
              >
                <motion.div
                  key="nav-faqs"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                  }}
                >
                  FAQs
                </motion.div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;
