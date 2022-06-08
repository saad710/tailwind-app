import React, { useState } from "react";
import {FiShoppingBag} from "react-icons"
import {FaBaby} from "react-icons/fa"
import {MdMobileScreenShare} from "react-icons/md"
import {FaLaptop} from "react-icons/fa"
import {GiHairStrands} from "react-icons/gi"
import {FaChair} from "react-icons/fa"
import {FiWatch} from "react-icons/fi"
import {FaTshirt} from "react-icons/fa"
import {HiOutlineCamera} from "react-icons/hi"
import {CgGym} from "react-icons/cg"





const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    // { title: "Dashboard", src: <FiShoppingBag/> },
    { title: "Baby Care Products", src: <FaBaby/> },
    { title: "Mobile Phone", src: <MdMobileScreenShare/> },
    { title: "Laptop ", src:<FaLaptop/> },
    { title: "Camera", src:<HiOutlineCamera/> },
    { title: "Hair Products", src: <GiHairStrands/> },
    { title: "Furniture", src: <FaChair/> },
    // { title: "Files ", src: "Folder", gap: true },
    { title: "Watch", src:<FiWatch/> },
    { title: "Tshirt", src:<FaTshirt/> },
    { title: "Gym Products", src:<CgGym/> },
  

  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src={require("../images/control.png")}
        alt="/"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-gray-300
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center">
        <img
          src={require("../images/bag.png")}
          alt="/"
          className={`cursor-pointer h-10 w-15  duration-500 ${open && "rotate-[360deg]"}`}
        />
        {/* <FiShoppingBag className={`cursor-pointer text-sky-900 duration-500 ${open && "rotate-[360deg]"}`}/> */}
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-300 text-slate-900 font-semibold text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
          >
            {/* <img src={require(`../images/${Menu.src}.png`)} alt="/" /> */}
            {Menu.src}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
