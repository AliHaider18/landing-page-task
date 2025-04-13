import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-opacity-90 backdrop-blur-sm shadow-lg w-full">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-8">
        <img
          src="images/logos/navbar-logo.webp"
          alt="Logo"
          className="h-10 sm:h-12"
        />
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 sm:space-x-8">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/owners" className="text-white hover:text-gray-300">
            Owners
          </Link>
          <Link to="/tenants" className="text-white hover:text-gray-300">
            Tenants
          </Link>
          <Link to="/properties" className="text-white hover:text-gray-300">
            Properties
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            to="/treatment"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md"
          >
            Start Treatment
          </Link>

          {/* Mobile menu button */}
          <button
            className="ml-4 lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 bg-opacity-95 z-20">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="text-white hover:bg-slate-800 px-4 sm:px-8 py-2 sm:py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-slate-800 px-4 sm:px-8 py-2 sm:py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/owners"
              className="text-white hover:bg-slate-800 px-4 sm:px-8 py-2 sm:py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Owners
            </Link>
            <Link
              to="/tenants"
              className="text-white hover:bg-slate-800 px-4 sm:px-8 py-2 sm:py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tenants
            </Link>
            <Link
              to="/properties"
              className="text-white hover:bg-slate-800 px-4 sm:px-8 py-2 sm:py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
