import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaUser } from "react-icons/fa";
import logo from '../assets/laMoradoLogo.jpeg'
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, showDropdown] = useState(false)
  return (
    <header>
      <nav className={dropdown ? "bg-[#cc5500] mb-10 h-[8rem]" : "bg-[#cc5500] mb-10"}>
        <div className="w-full mx-auto py-2">
          <div className="mx-2 flex flex-wrap items-center justify-between">
            <Link to="/" className="flex no-underline">
              <img className="w-[80px] h-[50px]" src={logo} alt="" />
            </Link>
            <div className="flex md:hidden">
              <button
              onClick={()=>{showDropdown(!dropdown)}}
                type="button"
                className="md:hidden inline-flex items-center justify-center border-none bg-transparent"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars size={25} color="white" />
              </button>
            </div> 
            <div
              className={ dropdown ? 'flex flex-col absolute right-[12px] top-[3rem] text-right' : "hidden md:flex-row md:flex justify-between items-end w-full md:w-auto"}
            >
              <div className="flex-col md:flex-row flex space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <span className="flex gap-1 cursor-pointer">
                  <FaShoppingCart color="white" />
                  <span className="text-white">Cart</span>
                </span>
                <Link to='/login' className="flex gap-1 cursor-pointer no-underline">
                  <FaUser color="white" />
                  <span className="text-white">Sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
    </header>
  );
};

export default Header;
