import { Link } from "react-router-dom";

function ProductCard({ id, name, price, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-placeholder" />
      <Link to={`/product/${id}`} className="product-name">
        {name}
      </Link>
      <p className="product-price">{price}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
