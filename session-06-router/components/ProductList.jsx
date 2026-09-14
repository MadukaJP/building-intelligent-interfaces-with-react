import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductList({ onAddToCart }) {
  return (
    <div className="product-list">
      {products.map((sneaker) => (
        <ProductCard
          key={sneaker.id}
          id={sneaker.id}
          name={sneaker.name}
          price={sneaker.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
