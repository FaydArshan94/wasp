import { Menu, User } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
            fixed  top-0 left-0 right-0 z-500
            backdrop-blur-3xl
            bg-[#00AD4A] px-10 py-4
            flex items-center justify-between
            transition-all duration-75 ease-out
            ${isScrolled ? "py-0 z-1000" : "py-1"}
          `}
    >
      {/* Logo */}
      <div className="flex items-center justify-between gap-10">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <div className="text-zinc-800 text-2xl font-bold">M</div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-black text-lg font-medium hover:text-gray-800 transition-colors"
          >
            About me
          </a>
          <a
            href="#contact"
            className="text-black text-lg font-medium hover:text-gray-800 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-green-600 rounded-full transition-colors">
          <User className="w-6 h-6 text-black" />
        </button>
        <button className="p-2 hover:bg-green-600 rounded-full transition-colors md:hidden">
          <Menu className="w-6 h-6 text-black" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
