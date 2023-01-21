import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header__section">
      <h1 className="header__logo">Travel Advisor</h1>

      <form className="header__search">
        <input placeholder="Find your next adventure..." type="text" />
        <button type="button">Search</button>
      </form>
    </section>
  );
};

export default Header;
