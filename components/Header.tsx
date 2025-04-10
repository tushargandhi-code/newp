"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="text-black fixed top-0 left-0 w-full z-50 bg-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white hover:cursor-pointer ml-0 lg:ml-16 text-4xl font-bold">
          <Image src="/logo.svg" alt="MensXP Logo" width={163} height={100} className="" />
        </Link>

        {/* Hamburger (visible below lg only) */}
        <div className="lg:hidden hover:cursor-pointer text-black text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav (unchanged, visible lg and up) */}
        <div className="hidden   lg:flex items-center mr-16 ml-auto space-x-6 text-base">
          <Link href="/etfs" className="hover:text-blue-700">ETFS</Link>
          <Link href="/finance" className="hover:text-blue-700">FINANCE</Link>
          <Link href="/stock" className="hover:text-blue-700">STOCK</Link>
          <Link href="/trading" className="hover:text-blue-700">TRADING</Link>
        </div>
      </div>

      {/* Mobile/Tablet Nav (only shown if menu is open) */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-4 space-y-4  shadow-md">
          <nav>
            <ul className="flex flex-col items-center space-y-5 text-base">
              <li><Link href="/etfs" onClick={handleCloseMenu} className="text-black hover:text-blue-700">ETFS</Link></li>
              <li><Link href="/finance" onClick={handleCloseMenu} className="hover:text-blue-700">FINANCE</Link></li>
              <li><Link href="/stock" onClick={handleCloseMenu} className="hover:text-blue-700">STOCK</Link></li>
              <li><Link href="/trading" onClick={handleCloseMenu} className="hover:text-blue-700">TRADING</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
