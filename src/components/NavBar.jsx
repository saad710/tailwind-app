import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className="px-1 py-4 bg-slate-900 border-solid border-2 border-slate-900">
      <div className="flex justify-between">
        <div className="order-first text-yellow-400 font-semibold">NavBar</div>
        <div className="order-last">
                <ul className="flex flex-row">
                    <li className="mx-1 border-solid border-2 border-yellow-400 px-0.5 py-0.8 rounded-md text-yellow-400 hover:text-slate-900 hover:bg-yellow-400">
                        home
                    </li>
                    <li className="mx-1 border-solid border-2 border-yellow-400 px-0.5 py-0.8 rounded-md text-yellow-400 hover:text-slate-900 hover:bg-yellow-400">
                        home
                    </li>
                    <li className="mx-1 border-solid border-2 border-yellow-400 px-0.5 py-0.8 rounded-md text-yellow-400 hover:text-slate-900 hover:bg-yellow-400">
                        home
                    </li>
                    <li className="mx-1 text-yellow-400 pt-2">
                        <AiOutlineShoppingCart  />
                    </li>
                </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
