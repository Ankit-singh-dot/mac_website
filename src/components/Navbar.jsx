import React from "react";
import {navLinks }from "../constants"
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="Apple logo"></img>
        <ul>
          {navLinks.map((item, index) => (
            <a key={index} href={item.label} style={{ marginRight: "20px" }}>
              {item.label}
            </a>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="./search.svg" alt="search"></img>
          </button>
          <button>
            <img src="./cart.svg" alt="cart"></img>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
