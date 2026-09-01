import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-list">
      <ProductCard name="Air Runner Low" price="₦45,000" />
      <ProductCard name="Street High Top" price="₦52,000" />
    </div>
  );
};

export default ProductList;
