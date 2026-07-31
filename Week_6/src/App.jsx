import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./data/products";

function App() {
  return (
    <>
      <Navbar />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Cart />
    </>
  );
}

export default App;