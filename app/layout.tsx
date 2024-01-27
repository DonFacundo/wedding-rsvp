import type { Metadata } from "next";
import { Playfair, Poiret_One } from "next/font/google";
import "./globals.css";

const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });
const poiretone = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiretone",
});

export const metadata: Metadata = {
  title: "Gerald & Claire RSVP",
  description: "GAME KNB?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="weddingtheme">
      <body className={`${playfair.variable} ${poiretone.variable}`}>
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
            {/* <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-200"
              >
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
            </div> */}
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

        {children}
      </body>
    </html>
  );
}
