import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineFolderOpen,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsBuildingsFill, BsPerson, BsBarChart } from "react-icons/bs";
import { PiNotebookThin, PiCalculatorLight } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { RiLoopLeftFill } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 dark:bg-[#0D0D0D] text-white px-2 py-2 w-16 fixed top-0 bottom-0 flex flex-col justify-between items-center">
      <ul className="flex flex-col gap-6 items-center mt-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-emerald-500" : "text-white"
            }
          >
            <AiFillHome className="text-2xl " />
          </NavLink>
        </li>
        <li>
          <BsBuildingsFill className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <AiOutlineFolderOpen className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <BsPerson className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <PiNotebookThin className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <LiaFileInvoiceDollarSolid className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <PiCalculatorLight className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <RiLoopLeftFill className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <TfiWallet className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <BsBarChart className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
        <li>
          <AiOutlineClockCircle className="text-2xl hover:cursor-pointer text-gray-400" />
        </li>
      </ul>
      <div className="mb-4">
        <CgProfile className="text-2xl" />
      </div>
    </div>
  );
};

export default Sidebar;