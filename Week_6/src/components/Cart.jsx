import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-section">

      <div className="cart-box">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add products to get started.</p>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.name}</span>

              <div className="quantity-controls">
                <button onClick={() => decreaseQty(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>Rs. {total}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>

        <button className="checkout-btn">
          Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;