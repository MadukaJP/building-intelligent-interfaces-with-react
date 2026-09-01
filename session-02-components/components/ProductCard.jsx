import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder" />
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default ProductCard;
