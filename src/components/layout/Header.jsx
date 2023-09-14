import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
const Header = () => {
  const { theme, setTheme} = useTheme();
  const toggleTheme = () => {
    if(theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <header
      className="px-7 flex flex-col gap-6 bg-white min-w-full dark:bg-blue-950 dark__mode"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <div className="flex items-center gap-6 ">
        <section className="flex  gap-5 mt-6 items-center justify-center">
          <span className="p-2 border rounded-sm cursor-not-allowed">
            <AiOutlineArrowLeft className="dark:text-white" />
          </span>
          <section>
            <h1 className="text-lg text-gray-700 font-semibold dark:text-slate-50">
              Basic Structure Kanban Project
            </h1>
            <p className="text-xs text-gray-400 font-semibold">Paymo SRL</p>
          </section>

          <span className="bg-emerald-400 text-[0.55rem] px-2 py-0.5 text-white rounded-3xl self-start mt-2">
            #BSKP
          </span>
          <div className="ml-1">
            {
              theme === "light" ? (
                <BsSun className="text-2xl hover:cursor-pointer"
                onClick={toggleTheme}
                />
              ) : (
                <BsMoonStars className="text-[20px] hover:cursor-pointer dark:text-slate-100"
                onClick={toggleTheme} />
              )
            }
          </div>
        </section>
      </div>
      <section>
        <ul className="flex gap-9 text-[16px] text-gray-500 font-normal dark:text-gray-300 mb-1">
          <li className="cursor-pointer">Overview</li>
          <li className="text-black dark:text-white font-semibold underline-offset-8 underline">
            Tasks
          </li>
          <li className="cursor-pointer">Milestones</li>
          <li className="cursor-pointer">Timesheets</li>
          <li className="cursor-pointer">Files</li>
          <li className="cursor-pointer">Discussions</li>
          <li className="cursor-pointer">Activity Feed</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;