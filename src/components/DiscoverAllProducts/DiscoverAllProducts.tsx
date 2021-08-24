import React from "react";
import SearchComponent from "../Search/Search";
import "./DiscoverAllProducts.css";

const DiscoverAllProducts: React.FC = () => {
  return (
    <div className="discover-products">
      <SearchComponent />
    </div>
  );
};

export default DiscoverAllProducts;
