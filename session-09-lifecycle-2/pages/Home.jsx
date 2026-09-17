import ProductList from "../components/ProductList";
import RecentlyViewed from "../components/RecentlyViewed";

function Home({ products, isLoading, onAddToCart, recentlyViewed }) {
  if (isLoading) return <p className="loading">Loading sneakers...</p>;

  return (
    <>
      <ProductList products={products} onAddToCart={onAddToCart} />
      <RecentlyViewed items={recentlyViewed} />
    </>
  );
}

export default Home;
