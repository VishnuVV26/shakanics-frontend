import React from "react";

const MainHeader: React.FC = () => {
  return (
    <div className="p-3">
      <div className="container grid grid-cols-2 p-1">
        <div className="header flex gap-8 font-semibold justify-center text-white">
          <a href="">Home</a>
          <a href="">Farms</a>
          <a href="">Products</a>
          <a href="">Services</a>
          <a href="">Contact</a>
        </div>
        <div className="cartandlogin flex justify-center text-2xl gap-10 text-white">
          <div className="cart hover:text-secondary cursor-pointer">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="login hover:text-secondary cursor-pointer">
            <i className="fa-solid fa-user"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
