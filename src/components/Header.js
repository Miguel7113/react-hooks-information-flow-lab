import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button style={{ background: "red" }} onClick={onDarkModeClick}>
        {isDarkMode ? "ON" : "OFF"} Dark Mode
      </button>
    </header>
  );
}

export default Header;
