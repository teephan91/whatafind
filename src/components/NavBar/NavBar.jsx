import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import logo from '../../img/logo.svg';
import HamburgerMenuBtn from './HamburgerMenuBtn';
import MobileMenu from './MobileMenu';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <>
      <nav className="relative flex flex-row justify-between items-center px-10 bg-grey">
        {/* Left Section */}
        <div className="flex space-x-10 items-center">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Main Logo" />
          </a>
          {/* Two Navigations */}
          <div className="hidden md:block space-x-10 text-black font-semibold text-xl cursor-pointer">
            <a href="#" className="hover:text-tan">
              Find
            </a>
            <a href="#" className="hover:text-tan">
              About
            </a>
          </div>
        </div>

        {/* Right Section */}
        <a href="#" className="hidden md:block">
          <FaHeart className="text-red-500 text-2xl cursor-pointer" />
        </a>
        {/* Hamburger Icon */}
        <HamburgerMenuBtn isActive={isActive} handleClick={handleClick} />
        {/* Hamburger Menu */}
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isActive={isActive} />
    </>
  );
}
