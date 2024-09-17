"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import  {Bars3Icon , XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverLay from "./MenuOverLay";

const navLinks = [
  {
    title :'Home',
    path:'/'
  },
  
  {
    
    title: "About",
    path: "#about",
  },
  {
    
    title: "Projects",
    path: "#projects",
  },
  {
    
    title: "Contact",
    path: "#contact",
  },
];

function NavBar() {
  const [openNav, SetOpenNav] = useState(false);
  const [active , setActive ] = useState(false)
  
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-white bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3 ">
        <Link
          href={"/"}
          className=" text-2xl md:text-4xl text-brown-400 font-['Ballet'] p-2 "
        >
          {" "}
          Kulsoom
        </Link>
        <div className="mobile-menu sm:block md:hidden  ">
          { !openNav ? (
            <button onClick={() => SetOpenNav(true)} className=" flex items-center px-3 py-2 rounded text-slate-400 border border-slate-600 hover:text-brown-500 hover:border-brown-500">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => SetOpenNav(false)} className=" flex items-center px-3 py-2 rounded text-slate-400 border border-slate-600 hover:text-brown-500 hover:border-brown-500">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 font-semibold ">
            {navLinks.map((link, index) => (
              <li key={index} className='border-b-2 border-transparent hover:border-brown-600 transition duration-300'>
                <NavLink href={link.path} title={link.title} home={link.home} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openNav ? <MenuOverLay links={navLinks}  /> : null }
    </nav>
  );
}

export default NavBar;
