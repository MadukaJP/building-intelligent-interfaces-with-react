import ProductList from "../components/ProductList";

function Home({ onAddToCart }) {
  return <ProductList onAddToCart={onAddToCart} />;
}

export default Home;
