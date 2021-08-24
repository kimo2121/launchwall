import React from "react";
import "./Header.css";

interface ITypes {
  headerName?: string;
}
const Header: React.FC<ITypes> = ({ headerName }) => {
  return (
    <div className="eleven">
      <h1>{headerName}</h1>
    </div>
  );
};

export default Header;
