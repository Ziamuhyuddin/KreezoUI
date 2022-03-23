import React from "react";
import StyleNavbar from "./StyleNavbar";
import { FaEllipsisV } from "react-icons/fa";

const Navbar = () => {
  return (
    <StyleNavbar>
      <div className="navbar-div d-flex justify-content-between align-items-center">
        <h3 className="fs-1">&#8249;</h3>
        <FaEllipsisV size={10} />
      </div>
    </StyleNavbar>
  );
};

export default Navbar;
