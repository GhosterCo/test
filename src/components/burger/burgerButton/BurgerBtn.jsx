"use client";

import navS from './burgerBtn.module.scss'
import { useState } from "react";
import Burger from "../burgerMenu/Burger";

import { HiMenuAlt4 } from "react-icons/hi";

const BurgerBtn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button className={navS.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <HiMenuAlt4 />
      </button>

      {menuOpen ? (
        <Burger
          burgerOpen={menuOpen}
          closeBurger={() => {
            setMenuOpen(false);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default BurgerBtn;
