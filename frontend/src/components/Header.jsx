import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaUser } from "react-icons/fa";
import logo from '../assets/laMoradoLogo.jpeg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const [dropdown, showDropdown] = useState(false)

  const { cartItems } = useSelector((state) => state.cart)
  return (
    <header>
      <nav className={dropdown ? "bg-[#cc5500] mb-10 h-[9rem]" : "bg-[#cc5500] mb-10"}>
        <div className="w-full mx-auto py-2">
          <div className="mx-2 flex flex-wrap items-center justify-between">
            <Link to="/" className="flex no-underline">
              <img className="w-[80px] h-[50px]" src={logo} alt="" />
            </Link>
            <div className="flex md:hidden">
              <button
                onClick={() => { showDropdown(!dropdown) }}
                type="button"
                className="md:hidden inline-flex items-center justify-center border-none bg-transparent"
              >
                <span className="sr-only">Open main menu</span>
                <FaBars size={25} color="white" />
              </button>
            </div>
            <div
              className={dropdown ? 'md:flex justify-between items-end w-full md:w-auto md:order-1' : "hidden md:flex-row md:flex justify-between items-end w-full md:w-auto"}
            > 
              <div className="flex-col md:flex-row flex space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <span className="flex gap-1 cursor-pointer">

                  <div className="relative">
                    { cartItems.length > 0 && (
                    <div className="absolute top-[-20px] left-[-8px]">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</p>
                    </div>
                    )}
                    <FaShoppingCart size={18} color="white" />
                  </div>

                  <span className="text-white">Cart</span>
                </span>
                <Link to='/login' className="flex gap-1 cursor-pointer no-underline">
                  <FaUser size={18} color="white" />
                  <span className="text-white">Sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
