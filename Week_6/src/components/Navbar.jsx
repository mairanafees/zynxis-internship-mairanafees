import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>SmartCart</h2>
      <div className="cart-count">
        Cart: {totalItems}
      </div>
    </nav>
  );
}

export default Navbar;