import React from "react";

import Logo from "../../assests/logo-principal.png";
import MiniLogo from "../../assests/mini-logo.png";
import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <div className="minilogo">
        <img src={MiniLogo} alt="Pokeball logo" />
      </div>
      <div className="logo">
        <img src={Logo} alt="Pokemon logo" />
      </div>
      <div className="navbar">
        <ul className="links">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </div>
    </Nav>
  );
}
