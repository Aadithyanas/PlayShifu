import { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const countries = [
  { code: "in", name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "us", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "uk", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "au", name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
];

export default function Navbar() {

    const { cart } = useCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    
  const [searchMode, setSearchMode] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (country) => {
    setSelected(country);
    setOpen(false);
  };

  return (
    <nav className=" bg-yellow-400 px-24 w-full  py-4">
      {/* Search Mode */}
      {searchMode ? (
        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-1 rounded-md outline-none"
          />
          <button
            onClick={() => setSearchMode(false)}
            className="text-purple-800 font-semibold"
          >
            ❌
          </button>
        </div>
      ) : (
        // Normal Navbar
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-4 text-purple-800">
            <Search className="cursor-pointer w-10 h-8" onClick={() => setSearchMode(true)} />

            {/* Country Selector */}
            <div className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <img
                  src={selected.flag}
                  alt={selected.name}
                  className="w-8 h-6 object-cover"
                />
                <ChevronDown size={16} className="text-purple-800" />
              </div>

              {open && (
                <div className="absolute bg-white border rounded-md shadow-md mt-2 z-10 w-36">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => handleSelect(country)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-yellow-100 cursor-pointer"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5 h-3 object-cover"
                      />
                      <span className="text-sm text-purple-800">{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <div className="text-purple-800 font-bold text-xl flex items-center gap-1">
            <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=1080&q=75" alt="logo" className="w-auto h-8" />
           
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-10 text-purple-800">
            <div className="relative">
              <Link to="/cart" className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                            {itemCount}
                          </span>
                        </Link>
            </div>
            <User />
          </div>
        </div>
      )}
    </nav>
  );
}
