import logo from "../assets/logo-text.png";
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="flex h-16 w-[90%] md:w-[85%] max-w-7xl mx-auto items-center justify-between">
        <button className="md:hidden text-gray-500 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
    <>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </>
) : (
    <>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </>
)}
          </svg>
        </button>   
        <img src={logo} alt="Dev Stack" className="w-24" />

        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium">
          <li>
            <a href="#" className="text-[#D91B7E] transition">
              {" "}
              Home{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 transition hover:text-[#D91B7E]"
            >
              {" "}
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 transition hover:text-[#D91B7E]"
            >
              {" "}
              Projects{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 transition hover:text-[#D91B7E]"
            >
              {" "}
              About{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 transition hover:text-[#D91B7E]"
            >
              {" "}
              Contact{" "}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-6 text-[11px] md:text-[13px]">
          <button className="cursor-pointer text-[13px] font-medium text-[#D91B7E] transition-all duration-300 hover:text-[#D91B7E]">
            Sign In
          </button>
          <button className="cursor-pointer rounded-full bg-[#D91B7E] px-3 py-1.5 md:px-5 md:py-2 text-white transition-all duration-300 hover:scale-105">
            Sign Up
          </button>
        </div>
      </nav>
      {isMenuOpen && (
    <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 shadow-lg absolute w-full left-0 top-16">
        <ul className="flex flex-col gap-4 text-[13px] font-medium">
            <li><a href="#" className="text-[#D91B7E] transition block">Home</a></li>
            <li><a href="#" className="text-gray-500 transition hover:text-[#D91B7E] block">Technologies</a></li>
            <li><a href="#" className="text-gray-500 transition hover:text-[#D91B7E] block">Projects</a></li>
            <li><a href="#" className="text-gray-500 transition hover:text-[#D91B7E] block">About</a></li>
            <li><a href="#" className="text-gray-500 transition hover:text-[#D91B7E] block">Contact</a></li>
        </ul>
    </div>
)}
    </div>
  );
};

export default Header;
