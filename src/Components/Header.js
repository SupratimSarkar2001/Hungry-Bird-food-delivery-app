import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);
  return (
    <header>
      <img
        className="logo"
        src="https://i.pinimg.com/736x/a8/d1/9b/a8d19bfb6d5172adc87d65908c69137a.jpg"
        alt=""
      />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://images.clipartlogo.com/files/istock/previews/9706/97066973-cartoon-animal-head-icon-pig-face-avatar-for-profile-of.jpg"
            alt=""
          />
        </div>
        <h2 className="userName">Hungry Bird</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
