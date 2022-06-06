import React from 'react';

const Sidebar = () => {
    return (
        // <div className='h-full shadow-lg shadow-gray-400'>
        //     <ul>
        //         <li className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li  className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li  className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li  className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li  className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li  className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //         <li className='m-2 p-2 text-slate-900 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
        //             Mobile Phone
        //         </li>
        //     </ul>
        // </div>
        <div class="sidebar  fixed top-0 bottom-0 lg:left-0 duration-1000
        p-2 w-1/6  overflow-y-auto text-center bg-gray-900 shadow h-screen">
         <div>
            <div class="p-2.5 mt-3 flex items-center rounded-md 
            px-4 duration-300 cursor-pointer  bg-gray-700">
              <i class="bi bi-search text-sm"></i>
              <input class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" placeholder="Serach" />
            </div>
    
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600 ">
              <i class="bi bi-house-door-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Home</span>
            </div>
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-bookmark-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Bookmark</span>
            </div>
            <hr class="my-4 text-gray-600" />
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-envelope-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Mobile Phone</span>
            </div>
    
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-chat-left-text-fill"></i>
              <div class="flex justify-between w-full items-center" onclick="dropDown()">
                <span class="text-[15px] ml-4 text-gray-200">Laptop</span>
                <span class="text-sm rotate-180" id="arrow">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-chat-left-text-fill"></i>
              <div class="flex justify-between w-full items-center" onclick="dropDown()">
                <span class="text-[15px] ml-4 text-gray-200">Bike Accessories</span>
                <span class="text-sm rotate-180" id="arrow">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>   
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-chat-left-text-fill"></i>
              <div class="flex justify-between w-full items-center" onclick="dropDown()">
                <span class="text-[15px] ml-4 text-gray-200">Baby Care Products</span>
                <span class="text-sm rotate-180" id="arrow">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
           
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-box-arrow-in-right"></i>
              <span class="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
    
          </div>
        </div>

          /* <ul>
                <li className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li  className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li  className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li  className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li  className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li  className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
                <li className='m-2 p-2 text-yellow-400 font-semibold hover:bg-yellow-400 hover:rounded-lg hover:text-slate-900 hover:p-2'>
                    Mobile Phone
                </li>
            </ul> */
        /* <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center rounded-md ">
            <i class="bi bi-app-indicator px-2 py-1 bg-yellow-600 rounded-md"></i>
            <h1 class="text-[15px]  ml-3 text-xl text-gray-200 font-bold">Tailwindbar</h1>
            <i class="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i>
          </div>
          <hr class="my-2 text-gray-600"/> */
    
          /* <div>
            <div class="p-2.5 mt-3 flex items-center rounded-md 
            px-4 duration-300 cursor-pointer  bg-gray-700">
              <i class="bi bi-search text-sm"></i>
              <input class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" placeholder="Serach" />
            </div>
    
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-house-door-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Home</span>
            </div>
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-bookmark-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Bookmark</span>
            </div>
            <hr class="my-4 text-gray-600" />
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-envelope-fill"></i>
              <span class="text-[15px] ml-4 text-gray-200">Messages</span>
            </div>
    
            <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-chat-left-text-fill"></i>
              <div class="flex justify-between w-full items-center" onclick="dropDown()">
                <span class="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span class="text-sm rotate-180" id="arrow">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
           
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-yellow-600">
              <i class="bi bi-box-arrow-in-right"></i>
              <span class="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
    
          </div>
        </div>
      </div> */
    );
};

export default Sidebar;