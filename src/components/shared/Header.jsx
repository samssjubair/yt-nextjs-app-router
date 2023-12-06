import React from 'react';

const Header = () => {
    return (
      <header className="bg-gray-800 p-4">
        <nav className="flex items-center justify-between">
          <div className="text-white text-xl font-semibold">My Website</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;