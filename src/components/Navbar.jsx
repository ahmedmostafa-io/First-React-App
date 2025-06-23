import React, { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar({ classTail }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((t) => !t);
  }
  return (
    <nav
      className={
        "bg-second fixed z-30  top-0 inset-x-0 transition-all duration-500 " +
        classTail
      }
    >
      <div className="container mx-auto">
        <div className="flex  justify-between md:justify-around md:gap-92 uppercase items-center">
          <h1 className="text-white pl-2 text-2xl lg:text-[2rem] font-bold">
            <Link to="/home"> Start Framework</Link>
          </h1>

          <List className="lg:flex  hidden gap-4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12 text-gray-900  px-1 active:border-4 rounded-2xl lg:hidden mr-2 cursor-pointer active:transition-all active:duration-700"
            onClick={handleToggle}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {toggle && (
          <List className=" flex-col  items-start lg:hidden pt-7 pl-5 space-y-7 gap-4 transition-all duration-700" />
        )}
      </div>
    </nav>
  );
}

function List({ className }) {
  const arr = ["about", "portfolio", "contact"];
  return (
    <>
      <ul className={className}>
        {arr.map((item, i) => (
          <li key={i} className="uppercase font-bold text-white ">
            <NavLink
              to={`/${item}`}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? "bg-main mr-4 transition-all px-4 py-2 rounded-lg"
                  : " mr-4"
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
