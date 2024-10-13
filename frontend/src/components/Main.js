import React from "react";


const Main = () =>{
    return(
        <>
        <main className="w-[85%] ml-60">
        <div className="flex justify-between items-red mb-2">
          <input
            type="text"
            placeholder="Search a product"
            className="w-1/3 p-2 border rounded-lg focus:ring focus:border-blue-300 bg-gray-100 mt-3 ml-5"
          />
          <button className="w-1/6 p-2 border rounded-lg focus:ring focus:border-blue-300 bg-gray-100 mt-3 -ml-72 text-gray-400">
              Sun, 13 Oct 2024<span className="ml-6 inline-block transform rotate-180 font-bold text-black">^</span>
            </button>
          
          <div className="space-x-4 flex items-center mr-10">
            <span>🔔</span>
            <span>📧</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 mr-2 font-semibold">
                Hypebeast Store
              </span>
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-10">
                H 
              </div>
              <span className="ml-1 inline-block transform rotate-180 font-bold text-gray-500">^</span>
            </div>
          </div>
        </div>

        {/* Graph and Stats */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-white p-6 rounded-lg shadow-sm ml-5 h-[80%]">
            <img
              src={require("../urstech_frontend_dashboard_design_chart.PNG")}
              alt="Revenue Chart"
              className="w-full h-full"
            />
          </div>

          <div className="bg-gray p-6 rounded-lg shadow-sm ml-5 h-[80%] mr-5">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
              <div className="bg-orange-600 rounded-lg shadow-sm -ml-6 -mt-6 flex flex-col gap-3 ">
                <div className="p-3 flex flex-col gap-4">
                  <h2 className="font-semibold text-white">Sales Today</h2>
                  <p className="text-2xl text-white">$120</p>
                  <p className="text-sm text-white">
                    Updated every order success
                  </p>
                  </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm -mr-6 -mt-6 flex flex-col gap-3 ">
                {/* <div className="ml-1 flex flex-col gap-4"> */}
                <div className="p-3 flex flex-col gap-4">
                  <h2 className="font-semibold">Total Earning</h2>
                  <p className="text-2xl">$81,020</p>
                  <p className="text-sm text-green-500">
                    +8.26% More than usual
                  </p>
                  </div>
                </div>
              <div className="bg-white rounded-lg shadow-sm -ml-6 -mb-6 flex flex-col gap-3 ">
                {/* <div className="ml-1 flex flex-col gap-4"> */}
                <div className="p-3 flex flex-col gap-4">
                  <h2 className="font-semibold">Total Orders</h2>
                  <p className="text-2xl">102</p>
                  <p className="text-sm text-green-500">
                    +2.18% More than usual
                  </p>
                  </div>
              </div>
              <div className="bg-white  rounded-lg shadow-sm -mr-6 -mb-6 flex flex-col gap-3  ">
                <div className="p-3 flex flex-col gap-4">
                  <h2 className="font-semibold">Visitor Today</h2>
                  <p className="text-2xl">81,020</p>
                  <p className="text-sm text-green-500">+3.06% More visitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className=" bg-white p-6 rounded-lg shadow-sm ml-5 mr-5 -mt-16 font-semibold text-gray-900">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl text-gray-900 font-bold -mt-4">Products</h2>
            <div className="-mt-2">
            <button className="text-sm bg-gray-100 font-bold text-gray-900 px-4 py-2 rounded-lg mr-4">
              Most Sell <span className="ml-1 inline-block transform rotate-180">^</span>
            </button>
            <button className="text-sm bg-black font-semibold text-white px-4 py-2 rounded-lg">
              + Add Product
            </button>
            </div>
            
          </div>
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Sell</th>
                <th className="px-4 py-2">View</th>
                <th className="px-4 py-2">Earning</th>
              </tr>
            </thead>
            <tr className="border-b border-gray-300"></tr>
            <tbody className="row-gap-5">
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">T-SHIRT OWN THE RUN</td>
                <td className="px-4 py-3">$46.52</td>
                <td className="px-4 py-3 text-green-300">Available</td>
                <td className="px-4 py-3">128</td>
                <td className="px-4 py-3">12,308</td>
                <td className="px-4 py-3">$5,954</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">TT-SHIRT BOXY ADICOLOR CLASSIC</td>
                <td className="px-4 py-3">$48.76</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">102</td>
                <td className="px-4 py-3">14,120</td>
                <td className="px-4 py-3">$4,973</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">T-SHIRT ESSENTIALS 3-STRIPES</td>
                <td className="px-4 py-3">$48.00</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">80</td>
                <td className="px-4 py-3">10,285</td>
                <td className="px-4 py-3">$3,840</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">TOKYO PACK SHORT SLEEVE TEE</td>
                <td className="px-4 py-3">$48.76</td>
                <td className="px-4 py-3 text-green-300">Avtive</td>
                <td className="px-4 py-3">72</td>
                <td className="px-4 py-3">12,008</td>
                <td className="px-4 py-3">$3,510</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">📷</td>
                <td className="px-4 py-3">JERSEY JUVENTUS AWAY 21/22</td>
                <td className="px-4 py-3">$66.18</td>
                <td className="px-4 py-3 text-red-500">Out of stock</td>
                <td className="px-4 py-3">60</td>
                <td className="px-4 py-3">11,092</td>
                <td className="px-4 py-3">$3,970</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </main>
        </>
    )
}

export default Main