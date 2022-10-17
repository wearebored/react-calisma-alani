import React from "react";
import logo from "../../assets/react.svg";
import { languages } from "../../helper/data";
import Card from "../card/Card";
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="languages">
        <h1>Languages</h1>
        <div className="cards">
          {languages.map((e) => (
            <Card key={e.name} data={e} />)
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
