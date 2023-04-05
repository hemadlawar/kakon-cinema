import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../index.css";
export default function Header() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/**   first section */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {}
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                {
                  <img
                    src="https://banner2.cleanpng.com/20180608/puh/kisspng-film-cinema-movie-projector-computer-icons-cinema-hall-5b1a1d55e36695.4800004615284381019314.jpg"
                    style={{
                      height: "48px",
                      width: "100px",
                      marginLeft: "0px",
                    }}
                  />
                }
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Hollywood Movies
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Bollywood Movies
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Kurdish Movies
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-1/5  ml-12	  bg-sky-500  h-12 mt-0 rounded-full">
              <h2 className="text-white  ml-10 mt-1 text-2xl">kakon cinema</h2>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
