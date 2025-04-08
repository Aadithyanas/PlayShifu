import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NavThree = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setOpenCategory(false);
    setOpenAge(false);
    setOpenMore(false);
  };

  // Toggle a specific dropdown and close others
  const toggleDropdown = (dropdown) => {
    closeAllDropdowns();
    switch (dropdown) {
      case "category":
        setOpenCategory(!openCategory);
        break;
      case "age":
        setOpenAge(!openAge);
        break;
      case "more":
        setOpenMore(!openMore);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-white w-full px-4 sm:px-6 py-5 shadow-sm border-b">
      {/* Mobile menu button */}
      <div className="flex lg:hidden justify-between items-center mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="font-medium">Menu</span>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </div>

      {/* Navigation menu */}
      <ul 
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-center items-start lg:items-center gap-5 lg:gap-10 relative font-medium text-gray-800`}
      >
        {/* Dropdown: Shop by Category */}
        <li className="relative w-full lg:w-auto">
          <button
            onClick={() => toggleDropdown("category")}
            className="text-purple-700 flex items-center justify-between w-full lg:w-auto gap-1 py-2 lg:py-0"
          >
            <span>Shop By Category</span> <ChevronDown size={16} />
          </button>
          {openCategory && (
            <ul className="lg:absolute lg:top-8 lg:left-0 bg-white shadow-md rounded-md py-2 w-full lg:w-48 z-10 mt-1 lg:mt-0">
              <li className="px-4 py-2 hover:bg-gray-100">STEM Toys</li>
              <li className="px-4 py-2 hover:bg-gray-100">Educational Kits</li>
              <li className="px-4 py-2 hover:bg-gray-100">Adventure Games</li>
            </ul>
          )}
        </li>

        {/* Dropdown: Shop By Age */}
        <li className="relative w-full lg:w-auto">
          <button
            onClick={() => toggleDropdown("age")}
            className="flex items-center justify-between w-full lg:w-auto gap-1 py-2 lg:py-0"
          >
            <span>Shop By Age</span> <ChevronDown size={16} />
          </button>
          {openAge && (
            <ul className="lg:absolute lg:top-8 lg:left-0 bg-white shadow-md rounded-md py-2 w-full lg:w-40 z-10 mt-1 lg:mt-0">
              <li className="px-4 py-2 hover:bg-gray-100">2-4 Years</li>
              <li className="px-4 py-2 hover:bg-gray-100">5-7 Years</li>
              <li className="px-4 py-2 hover:bg-gray-100">8+ Years</li>
            </ul>
          )}
        </li>

        {/* With Badge - Super Saver Deals */}
        <li className="relative py-2 lg:py-0 w-full lg:w-auto">
          <div className="flex items-center">
            <span className="lg:hidden inline-flex items-center justify-center h-5 bg-red-600 text-white text-xs px-2 py-0.5 rounded-lg mr-2">
              <span className="text-xxs text-black">Up To 25% Off</span>
            </span>
            <span className="hidden lg:block absolute w-20 h-5 -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-lg">
              <span className="absolute w-20 left-0 text-xxs text-black">Up To 25% Off</span>
            </span>
            <span>Super Saver Deals</span>
          </div>
        </li>

        {/* Birthday Gifts */}
        <li className="relative py-2 lg:py-0 w-full lg:w-auto">
          <div className="flex items-center">
            <span className="lg:hidden inline-flex items-center justify-center h-5 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">
              <span className="text-xxs text-black">Up To 25% Off</span>
            </span>
            <span className="hidden lg:block absolute w-20 h-5 -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              <span className="absolute w-20 left-0 text-xxs text-black">Up To 25% Off</span>
            </span>
            <span>Birthday Gifts</span>
          </div>
        </li>

        {/* Return Gifts */}
        <li className="relative py-2 lg:py-0 w-full lg:w-auto">
          <div className="flex items-center">
            <span className="lg:hidden inline-flex items-center justify-center h-5 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">
              <span className="text-xxs text-black">Up To 30% Off</span>
            </span>
            <span className="hidden lg:block absolute w-20 h-5 -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              <span className="absolute w-20 left-0 text-xxs text-black">Up To 30% Off</span>
            </span>
            <span>Return Gifts</span>
          </div>
        </li>

        {/* Shop All */}
        <li className="py-2 lg:py-0 w-full lg:w-auto">Shop All</li>

        {/* Dropdown: More */}
        <li className="relative w-full lg:w-auto">
          <button
            onClick={() => toggleDropdown("more")}
            className="flex items-center justify-between w-full lg:w-auto gap-1 py-2 lg:py-0"
          >
            <span>More</span> <ChevronDown size={16} />
          </button>
          {openMore && (
            <ul className="lg:absolute lg:top-8 lg:left-0 bg-white shadow-md rounded-md py-2 w-full lg:w-40 z-10 mt-1 lg:mt-0">
              <li className="px-4 py-2 hover:bg-gray-100">Gift Cards</li>
              <li className="px-4 py-2 hover:bg-gray-100">Store Locator</li>
              <li className="px-4 py-2 hover:bg-gray-100">Blog</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavThree;