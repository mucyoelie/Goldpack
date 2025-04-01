import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Home, Navigation, Package, Wrench, MessageCircle, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="fixed bg-white text-[#003366] text-lg font-medium py-4 shadow-md xl:px-10 w-full top-0 z-40 h-[6rem]">
      <div className="mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl">
          <Link to="/">
            <img src="imagerectangle.png" alt="MyLogo" className="h-20 w-26" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li className="flex items-center">
            <Home size={20} />
            <Link to="/" className="hover:text-gray-900 px-2">Home</Link>
          </li>
          <li className="flex items-center">
            <Navigation className="text-[#003366]" size={20} />
            <Link to="/about" className="hover:text-gray-900 px-2">About Us</Link>
          </li>
          <li className="relative flex items-center cursor-pointer" onClick={toggleDropdown}>
            <Package className="text-[#003366]" size={20} />
            <span className="hover:text-gray-900 px-2 flex items-center">
              Product <ChevronDown size={18} className="ml-1" />
            </span>
            {/* Dropdown Menu (Desktop) */}
            {dropdownOpen && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2 space-y-2 z-50">
                <li>
                  <Link to="/laptops" className="block px-4 py-2 hover:bg-gray-100">Laptop & Desktop</Link>
                </li>
                <li>
                  <Link to="/servers" className="block px-4 py-2 hover:bg-gray-100">Server</Link>
                </li>
                <li>
                  <Link to="/switches" className="block px-4 py-2 hover:bg-gray-100">Switch & Hubs</Link>
                </li>
                <li>
                  <Link to="/routes" className="block px-4 py-2 hover:bg-gray-100">Router & Firewall</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center">
            <Wrench className="text-[#003366]" size={20} />
            <Link to="/service" className="hover:text-gray-900 px-2">Service</Link>
          </li>
          <li className="flex items-center">
            <MessageCircle className="text-[#003366]" size={20} />
            <Link to="/contact" className="hover:text-gray-900 px-2">Contact Us</Link>
          </li>
          <a href="/contact">
            <button className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              Get A Quote
            </button>
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="flex flex-col items-center mr-[20px]">
            {isOpen ? (
              <FaTimes size={24} />
            ) : (
              <div className="space-y-1">
                <div className="w-8 h-1 bg-[#003366] rounded-md ml-auto"></div>
                <div className="w-6 h-1 bg-[#003366] rounded-md ml-auto"></div>
                <div className="w-4 h-1 bg-[#003366] rounded-md ml-auto"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-start bg-white shadow-md absolute top-[5rem] left-0 w-full py-4 space-y-8 z-50">
          <li className="flex items-center mx-10">
            <Home size={20} />
            <Link to="/" className="hover:text-gray-900 px-2" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="flex items-center mx-10">
            <Navigation className="text-[#003366]" size={20} />
            <Link to="/about" className="hover:text-gray-900 px-2" onClick={toggleMenu}>About Us</Link>
          </li>

          {/* Mobile Product Dropdown */}
          <li className="flex flex-col mx-10">
            <button onClick={toggleDropdown} className="flex items-center w-full text-left focus:outline-none">
              <Package className="text-[#003366]" size={20} />
              <span className="px-2 flex items-center">
                Product <ChevronDown size={18} className="ml-1" />
              </span>
            </button>
            {dropdownOpen && (
              <ul className="bg-gray-100 mt-2 rounded-md">
                <li>
                  <Link to="/laptops" className="block px-4 py-2 hover:bg-gray-200" onClick={toggleMenu}>Laptop & Desktop</Link>
                </li>
                <li>
                  <Link to="/servers" className="block px-4 py-2 hover:bg-gray-200 " onClick={toggleMenu}>Server</Link>
                </li>
                <li>
                  <Link to="/switches" className="block px-4 py-2 hover:bg-gray-200" onClick={toggleMenu}>Switch & Hubs</Link>
                </li>
                <li>
                  <Link to="/routes" className="block px-4 py-2 hover:bg-gray-200" onClick={toggleMenu}>Router</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center mx-10">
            <Wrench className="text-[#003366]" size={20} />
            <Link to="/service" className="hover:text-gray-900 px-2" onClick={toggleMenu}>Service</Link>
          </li>
          <li className="flex items-center mx-10">
            <MessageCircle className="text-[#003366]" size={20} />
            <Link to="/contact" className="hover:text-gray-900 px-2" onClick={toggleMenu}>Contact Us</Link>
          </li>
          <a href="/contact">
            <button className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition mx-10">
              Get A Quote
            </button>
          </a>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
