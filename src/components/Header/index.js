import React from "react";

import Logo from "../../assests/logo-principal.png";
import MiniLogo from "../../assests/mini-logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="minilogo">
          <img src={MiniLogo} alt="Pokeball logo" />
        </div>
        <div className="logo">
          <img src={Logo} alt="Pokemon logo" />
        </div>
      </header>
    </>
  );
}
