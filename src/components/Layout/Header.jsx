'use client';
import { useEffect, useRef, useState } from 'react';
import { Globe, Menu, Search, User } from 'lucide-react';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Logo for desktop and tablets */}
          <img src="/assets/airbnb.svg" alt="Logo" className="w-24 hidden sm:block" />

          {/* Logo for mobile */}
          <img src="/assets/logoair.png" alt="Logo" className="w-8 sm:hidden" />

          {/* <svg
            className="h-8 w-8 text-rose-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7-7 7 7-7 7-7-7z" />
          </svg> */}
          {/* <span className="text-xl font-bold font-cereal text-rose-500 tracking-tight">airbnb</span> */}
        </div>


        {/* Center Search */}
        {/* <div className="hidden md:flex items-center space-x-2 rounded-full border border-gray-300 shadow-sm px-4 py-2 hover:shadow-md transition-all duration-200 bg-white">
          <button
            className="px-3 font-medium hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
          >
            Anywhere
          </button>
          <span className="h-6 border-r border-gray-300"></span>
          <button
            className="px-3 font-medium hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
          >
            Any week
          </button>
          <span className="h-6 border-r border-gray-300"></span>
          <button
            className="px-3 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => {}}
          >
            Add guests
          </button>
          <button
            aria-label="Search"
            className="bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition-colors"
          >
            <Search className="h-4 w-4" />
          </button>
        </div> */}

        {/* Right Menu */}
        <div className="flex items-center space-x-2 relative" ref={menuRef}>
          <button className="cursor-pointer text-sm font-medium text-gray-700 bg-rose-500 text-white hover:bg-rose-600 rounded-full px-4 py-2 transition-colors">
            Become a Host
          </button>

          <button
            aria-label="Language Selector"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Globe className="h-5 w-5" />
          </button>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center border border-gray-300 rounded-full p-1 hover:shadow-md transition-all cursor-pointer"
          >
            <Menu className="h-5 w-5 mx-2 text-gray-600" />
            <div className="bg-gray-500 text-white rounded-full p-1">
              <User className="h-4 w-4" />
            </div>
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 top-14 bg-white shadow-xl rounded-xl w-56 py-2 text-gray-700 text-sm border border-gray-200 z-50">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold">Sign up</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Log in</div>
              <hr className="my-1" />
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Airbnb your home</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Host an experience</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help Centre</div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
