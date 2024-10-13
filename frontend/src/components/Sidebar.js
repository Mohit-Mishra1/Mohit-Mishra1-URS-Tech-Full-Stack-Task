import React, { useState } from "react";


const Sidebar = () =>{
    const [isProductsOpen, setIsProductsOpen] = useState(false); // State for dropdown
    return (
   
   <>
      {/* Sidebar */}
      <div className="bg-black flex-none w-[15%] h-full fixed top-0 " >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4 text-white">Backing</h1>
          <div className="border-b border-gray-600 w-[90%]"></div>
          <ul>
            <li className="mb-6 mt-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 font-semibold hover:text-white"
              >
                <span>🏠</span> <span>Home</span>
              </a>
            </li>
            <li className="mb-6 mt-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 font-semibold hover:text-white"
              >
                <span>💰</span> <span>Sales</span>
              </a>
            </li>
            <li className="mb-6 mt-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 font-semibold hover:text-white"
                onClick={() => setIsProductsOpen(!isProductsOpen)} // Toggle dropdown
              >
                <span>🛍️</span>
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {isProductsOpen && (
                <ul className="ml-4 mt-2 text-sm space-y-2">
                  {[
                    "T-Shirts (108)",
                    "Jackets (42)",
                    "Pants (26)",
                    "Shoes (42)",
                  ].map((product, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <a
                        href="#"
                        className="text-gray-500 font-semibold hover:text-white"
                      >
                        {product}
                      </a>
                      <div className="inline-flex items-center">
                        <label className="flex items-center cursor-pointer relative">
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-amber-600 checked:border-amber-600"
                            id="check3"
                          />
                          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="mb-6 mt-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 font-semibold hover:text-white"
              >
                <span>📊</span> <span>Reports</span>
              </a>
            </li>
            <li className="mb-6 mt-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 font-semibold hover:text-white"
              >
                <span>👥</span> <span>Customers</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6 mt-32">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-500 font-semibold hover:text-white"
          >
            <span>⚙️</span> <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 mt-8 text-gray-500 font-semibold hover:text-white"
          >
            <span>🚪</span> <span>Log Out</span>
          </a>
        </div>
      </div>
  </>

  )}

export default Sidebar