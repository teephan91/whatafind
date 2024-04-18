import { FaHeart } from 'react-icons/fa';
import logo from '../img/logo.svg';

const menuBtn = document.getElementById('menu_btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});

export default function NavBar() {
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
        <button id="menu_btn" className="hamburger md:hidden">
          <span className="ham_top" />
          <span className="ham_middle" />
          <span className="ham_bottom" />
        </button>
      </nav>
      {/* Hamburger Menu */}
      <div
        id="menu"
        className="absolute hidden flex-col items-end right-10 top-12 bg-white drop-shadow-md rounded-lg p-5 text-black font-semibold text-xl cursor-pointer"
      >
        <a href="#" className="hover:text-tan">
          Find
        </a>
        <a href="#" className="hover:text-tan">
          About
        </a>
        <a href="#" className="hover:text-tan">
          Account & Favorites
        </a>
      </div>
    </>
  );
}
